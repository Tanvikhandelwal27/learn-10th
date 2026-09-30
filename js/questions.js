(function () {
  const { data, breadcrumb } = window.App;
  const subjectSelect = document.querySelector("#question-subject");
  const chapterSelect = document.querySelector("#question-chapter");
  const marksSelect = document.querySelector("#question-marks");
  const typeSelect = document.querySelector("#question-type");
  const target = document.querySelector("#question-list");
  const count = document.querySelector("#question-count");
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "Questions" }]);
  subjectSelect.innerHTML = `<option value="all">All subjects</option>${data.subjects.map((subject) => `<option value="${subject.id}">${subject.name}</option>`).join("")}`;
  const query = new URLSearchParams(location.search).get("q");
  const requestedChapter = new URLSearchParams(location.search).get("chapter");
  if (requestedChapter) subjectSelect.value = data.findChapter(requestedChapter)?.subjectId || "all";
  if (query) {
    const intro = document.querySelector(".page-intro p");
    intro.textContent = `Showing practice questions related to “${query}”.`;
  }

  function updateChapters() {
    const subjectIds = subjectSelect.value === "all" ? data.subjects.map((subject) => subject.id) : [subjectSelect.value];
    const chapters = data.subjects.filter((subject) => subjectIds.includes(subject.id)).flatMap((subject) => subject.chapters);
    chapterSelect.innerHTML = `<option value="all">All chapters</option>${chapters.map((chapter) => `<option value="${chapter.id}">Chapter ${chapter.number}: ${chapter.title}</option>`).join("")}`;
    if (requestedChapter && [...chapterSelect.options].some((option) => option.value === requestedChapter)) chapterSelect.value = requestedChapter;
  }

  function render() {
    const searchText = (query || "").toLowerCase();
    const questions = data.questionBank.filter((item) => {
      const subjectMatch = subjectSelect.value === "all" || item.subjectId === subjectSelect.value;
      const chapterMatch = chapterSelect.value === "all" || item.chapterId === chapterSelect.value;
      const marksMatch = marksSelect.value === "all" || String(item.marks) === marksSelect.value;
      const typeMatch = typeSelect.value === "all" || item.type === typeSelect.value;
      const searchMatch = !searchText || `${item.question} ${item.chapterTitle} ${item.subjectName}`.toLowerCase().includes(searchText);
      return subjectMatch && chapterMatch && marksMatch && typeMatch && searchMatch;
    });
    count.textContent = `${questions.length} ${questions.length === 1 ? "question" : "questions"}`;
    target.innerHTML = questions.length ? questions.map((item) => {
      const quizItem = data.quizBank?.[item.chapterId]?.find((entry) => entry.question === item.question);
      const answer = quizItem ? quizItem.options[quizItem.answer] : item.answer;
      return `<article class="question-card"><div class="question-meta"><span class="badge">${item.subjectName}</span><span class="badge">${item.chapterTitle}</span><span class="badge">${item.marks} ${item.marks === 1 ? "mark" : "marks"}</span><span class="badge">${item.type}</span></div><p>${item.question}</p>${quizItem ? `<details><summary>Show answer</summary><p class="answer-note"><strong>${answer}</strong><br>${quizItem.explanation}</p></details>` : ""}</article>`;
    }).join("") : `<div class="empty-state" style="grid-column:1/-1">No questions match these filters. Try another chapter or question type.</div>`;
  }

  subjectSelect.addEventListener("change", () => { updateChapters(); render(); });
  chapterSelect.addEventListener("change", render);
  marksSelect.addEventListener("change", render);
  typeSelect.addEventListener("change", render);
  updateChapters();
  render();
})();