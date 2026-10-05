(function () {
  const { data, breadcrumb } = window.App;
  const subjectSelect = document.querySelector("#timeline-subject");
  const select = document.querySelector("#timeline-chapter");
  const importantOnly = document.querySelector("#timeline-important-only");
  const target = document.querySelector("#timeline-events");
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "Timeline" }]);
  data.subjects.filter((subject) => subject.id === "history" && subject.chapters.length).forEach((subject) => {
    subjectSelect.insertAdjacentHTML("beforeend", `<option value="${subject.id}">${subject.name}</option>`);
  });
  const entries = data.timeline.filter((item) => data.findChapter(item.chapterId)?.subjectId === "history" && (!data.findChapter(item.chapterId)?.enhanced || item.topic)).sort((left, right) => Number((left.date.match(/\d+/) || [0])[0]) - Number((right.date.match(/\d+/) || [0])[0]));

  function render() {
    const allowedChapters = subjectSelect.value === "all" ? data.findSubject("history").chapters : data.findSubject(subjectSelect.value)?.chapters || [];
    const selectedChapter = select.value;
    select.innerHTML = `<option value="all">All Chapters</option>${allowedChapters.map((chapter) => `<option value="${chapter.id}">${data.findChapter(chapter.id).subjectName} · Chapter ${chapter.number}: ${chapter.title}</option>`).join("")}`;
    if ([...select.options].some((option) => option.value === selectedChapter)) select.value = selectedChapter;
    else select.value = "all";
    const filtered = entries.filter((item) => (select.value === "all" || item.chapterId === select.value) && (!importantOnly.checked || item.important));
    target.innerHTML = filtered.map((item) => `<article class="timeline-item"><div class="timeline-date">${item.date}</div><h3>${item.event}</h3><p>${item.description}</p><a class="badge" href="chapter.html?id=${encodeURIComponent(item.chapterId)}">${item.subjectName} · ${item.chapterTitle}</a></article>`).join("") || `<div class="empty-state">No dates available for this selection.</div>`;
  }
  select.addEventListener("change", render);
  subjectSelect.addEventListener("change", () => { select.value = "all"; render(); });
  importantOnly.addEventListener("change", render);
  const selectedChapter = new URLSearchParams(location.search).get("chapter");
  if (selectedChapter && entries.some((item) => item.chapterId === selectedChapter)) {
    subjectSelect.value = data.findChapter(selectedChapter)?.subjectId || "all";
    render();
    select.value = selectedChapter;
  }
  render();
})();