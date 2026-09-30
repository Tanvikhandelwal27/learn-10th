(function () {
  const data = window.LEARNING_DATA;
  const labels = ["A", "B", "C", "D"];
  const mix = (items) => {
    const output = [...items];
    for (let index = output.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [output[index], output[target]] = [output[target], output[index]];
    }
    return output;
  };

  function mount(root, presetQuestions, config) {
    if (!root) return;
    const options = config || {};
    const embedded = Array.isArray(presetQuestions);
    const query = new URLSearchParams(location.search);
    let subjectId = embedded ? "history" : query.get("subject") || "history";
    let chapterId = options.chapterId || query.get("chapter") || "all";
    let pool = [];
    let questions = [];
    let answers = [];
    let current = 0;
    let startedAt = 0;
    let finished = false;
    let reviewing = false;

    function renderShell() {
      if (embedded) {
        root.innerHTML = `<h3>${options.title || "Quick chapter quiz"}</h3><div id="quiz-stage"></div>`;
        return;
      }
      root.innerHTML = `<div class="quiz-selectors"><div class="filter-row"><div class="filter-field"><label for="quiz-subject">Subject</label><select id="quiz-subject">${data.subjects.map((item) => `<option value="${item.id}"${item.id === subjectId ? " selected" : ""}>${item.name}</option>`).join("")}</select></div><div class="filter-field"><label for="quiz-chapter">Chapter</label><select id="quiz-chapter"></select></div><div class="filter-field"><label for="quiz-type">Question type</label><select id="quiz-type"><option value="All">All types</option><option>MCQ</option><option>True/False</option><option>Assertion/Reason</option><option>Case-based</option><option>Concept/Application</option></select></div><div class="filter-field"><label for="quiz-difficulty">Difficulty</label><select id="quiz-difficulty"><option value="All">All levels</option><option>Easy</option><option>Medium</option><option>Challenging</option></select></div><div class="filter-field"><label for="quiz-count">Number of questions</label><select id="quiz-count"><option>10</option><option>20</option><option>30</option><option>50</option></select></div></div><div class="quiz-actions"><button class="button button-primary" id="random-quiz" type="button"><i class="fa-solid fa-shuffle" aria-hidden="true"></i> Random Quiz</button><button class="button button-outline" id="full-history-quiz" type="button"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Full History Quiz</button><span id="quiz-bank-count" class="muted"></span></div></div><div id="quiz-stage" class="quiz-stage"></div>`;
      root.querySelector("#quiz-subject").addEventListener("change", (event) => {
        subjectId = event.target.value;
        chapterId = "all";
        renderChapterOptions();
        renderStartMessage();
      });
      root.querySelector("#quiz-chapter").addEventListener("change", (event) => { chapterId = event.target.value; renderStartMessage(); });
      ["#quiz-type", "#quiz-difficulty", "#quiz-count"].forEach((selector) => root.querySelector(selector).addEventListener("change", renderStartMessage));
      root.querySelector("#random-quiz").addEventListener("click", () => start(false));
      root.querySelector("#full-history-quiz").addEventListener("click", () => {
        subjectId = "history";
        chapterId = "all";
        root.querySelector("#quiz-subject").value = subjectId;
        renderChapterOptions();
        start(true);
      });
      renderChapterOptions();
      if (query.has("chapter")) root.querySelector("#quiz-chapter").value = chapterId;
      renderStartMessage();
    }

    function renderChapterOptions() {
      if (embedded) return;
      const select = root.querySelector("#quiz-chapter");
      const subject = data.findSubject(subjectId);
      select.innerHTML = `<option value="all">All chapters</option>${(subject?.chapters || []).map((chapter) => `<option value="${chapter.id}">Chapter ${chapter.number}: ${chapter.title}</option>`).join("")}`;
      if ([...select.options].some((item) => item.value === chapterId)) select.value = chapterId;
      else chapterId = "all";
    }

    function selectedPool() {
      const subject = data.findSubject(subjectId);
      let candidates = embedded ? presetQuestions : (subject?.chapters || []).flatMap((chapter) => data.quizBank?.[chapter.id] || []);
      if (chapterId !== "all") candidates = candidates.filter((item) => item.chapterId === chapterId);
      if (!embedded) {
        const type = root.querySelector("#quiz-type").value;
        const difficulty = root.querySelector("#quiz-difficulty").value;
        if (type !== "All") candidates = candidates.filter((item) => item.type === type);
        if (difficulty !== "All") candidates = candidates.filter((item) => item.difficulty === difficulty);
      }
      return candidates;
    }

    function renderStartMessage() {
      if (embedded) return;
      pool = selectedPool();
      root.querySelector("#quiz-bank-count").textContent = `${pool.length} questions available`;
      const stage = root.querySelector("#quiz-stage");
      stage.innerHTML = `<div class="quiz-welcome"><span class="quiz-welcome-icon"><i class="fa-solid fa-bullseye" aria-hidden="true"></i></span><h2>Ready when you are.</h2><p>A random set of questions will be drawn from your selection. You can review explanations and topic performance at the end.</p>${pool.length ? `<button class="button button-primary" id="begin-quiz" type="button">Start ${Math.min(Number(root.querySelector("#quiz-count").value), pool.length)} questions <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>` : `<p class="muted">There are no questions for this selection yet.</p>`}</div>`;
      stage.querySelector("#begin-quiz")?.addEventListener("click", () => start(false));
    }

    function start(fullHistory) {
      if (fullHistory) {
        subjectId = "history";
        chapterId = "all";
        if (!embedded) {
          root.querySelector("#quiz-subject").value = subjectId;
          renderChapterOptions();
          root.querySelector("#quiz-chapter").value = "all";
          root.querySelector("#quiz-type").value = "All";
          root.querySelector("#quiz-difficulty").value = "All";
        }
      }
      pool = selectedPool();
      if (!pool.length) { renderStartMessage(); return; }
      const count = embedded ? pool.length : Math.min(Number(root.querySelector("#quiz-count").value), pool.length);
      questions = mix(pool).slice(0, count);
      answers = Array(questions.length).fill(null);
      current = 0;
      startedAt = Date.now();
      finished = false;
      reviewing = false;
      renderQuestion();
    }

    function stageElement() { return embedded ? root.querySelector("#quiz-stage") : root.querySelector("#quiz-stage"); }

    function renderQuestion() {
      const stage = stageElement();
      if (finished) { renderResults(); return; }
      if (reviewing) { renderReview(); return; }
      const question = questions[current];
      const selected = answers[current];
      const progress = (current + 1) / questions.length * 100;
      const answersHtml = question.options.map((answer, index) => `<button class="quiz-option${selected === index ? (index === question.answer ? " correct" : " incorrect") : ""}" type="button" data-answer="${index}"${selected !== null ? " disabled" : ""}><span class="option-letter">${question.type === "Assertion/Reason" ? "ABCD"[index] : labels[index] || index + 1}</span><span>${answer}</span></button>`).join("");
      stage.innerHTML = `<div class="quiz-meta"><span>${embedded ? "Quick check" : `${question.chapterTitle} · ${question.type} · ${question.difficulty}`}</span><span>Question ${current + 1} of ${questions.length} · ${answers.filter((item) => item !== null).length} answered</span></div><div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${current + 1}"><div class="progress-fill" style="width:${progress}%"></div></div>${question.passage && !question.question.includes(question.passage) ? `<blockquote class="case-passage">${question.passage}</blockquote>` : ""}<h2 class="quiz-question">${question.question.replace("\n\n", "<br><br>")}</h2><div class="quiz-options">${answersHtml}</div><p class="quiz-feedback" role="status" aria-live="polite">${selected === null ? "Choose the best answer." : `${selected === question.answer ? "Correct." : "Not quite."} ${question.explanation}`}</p><div class="quiz-controls"><button class="button button-outline button-small" id="quiz-previous" type="button"${current === 0 ? " disabled" : ""}><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Previous</button>${current === questions.length - 1 ? `<button class="button button-primary button-small" id="quiz-finish" type="button">See results <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>` : `<button class="button button-primary button-small" id="quiz-next" type="button">Next <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>`}</div>`;
      stage.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => {
        answers[current] = Number(button.dataset.answer);
        renderQuestion();
      }));
      stage.querySelector("#quiz-previous").addEventListener("click", () => { current -= 1; renderQuestion(); });
      stage.querySelector("#quiz-next")?.addEventListener("click", () => { current += 1; renderQuestion(); });
      stage.querySelector("#quiz-finish")?.addEventListener("click", () => { finished = true; renderResults(); });
    }

    function renderResults() {
      const stage = stageElement();
      const correct = answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
      const incorrect = questions.length - correct;
      const accuracy = Math.round(correct / questions.length * 100);
      const elapsed = Math.max(1, Math.floor((Date.now() - startedAt) / 1000));
      const topics = [...new Set(questions.map((item) => item.topic || "General"))];
      const performance = topics.map((topic) => {
        const indexes = questions.map((item, index) => item.topic === topic ? index : -1).filter((index) => index >= 0);
        const topicScore = indexes.filter((index) => answers[index] === questions[index].answer).length;
        return `<div class="topic-performance"><div><strong>${topic}</strong><span>${Math.round(topicScore / indexes.length * 100)}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${topicScore / indexes.length * 100}%"></div></div></div>`;
      }).join("");
      stage.innerHTML = `<section class="quiz-result"><div class="eyebrow">Quiz complete</div><h2>${accuracy >= 80 ? "Strong work." : "Good practice. Keep building."}</h2><div class="score">${correct} / ${questions.length}</div><div class="result-stats"><div><strong>${correct}</strong><span>Correct</span></div><div><strong>${incorrect}</strong><span>Incorrect or skipped</span></div><div><strong>${accuracy}%</strong><span>Accuracy</span></div><div><strong>${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}</strong><span>Time taken</span></div></div><h3>Topic-wise performance</h3><div class="topic-performance-list">${performance}</div><div class="quiz-actions"><button class="button button-outline" id="review-answers" type="button"><i class="fa-solid fa-list-check" aria-hidden="true"></i> Review answers</button><button class="button button-primary" id="retry-quiz" type="button"><i class="fa-solid fa-rotate-right" aria-hidden="true"></i> Retry quiz</button><button class="button button-coral" id="another-quiz" type="button">Try another quiz</button></div></section>`;
      stage.querySelector("#review-answers").addEventListener("click", () => { reviewing = true; renderReview(); });
      stage.querySelector("#retry-quiz").addEventListener("click", () => start(false));
      stage.querySelector("#another-quiz").addEventListener("click", renderStartMessage);
    }

    function renderReview() {
      const stage = stageElement();
      stage.innerHTML = `<div class="review-heading"><div><div class="eyebrow">Answer review</div><h2>Learn from each answer</h2></div><button class="button button-outline button-small" id="back-to-results" type="button">Back to results</button></div><div class="answer-review-list">${questions.map((question, index) => `<article class="answer-review-item"><span class="badge">${question.chapterTitle} · ${question.topic}</span><h3>${index + 1}. ${question.question}</h3><p class="${answers[index] === question.answer ? "review-correct" : "review-incorrect"}">${answers[index] === null ? "Not answered" : `Your answer: ${question.options[answers[index]]}`}</p><p><strong>Correct answer:</strong> ${question.options[question.answer]}</p><p>${question.explanation}</p></article>`).join("")}</div>`;
      stage.querySelector("#back-to-results").addEventListener("click", () => { reviewing = false; renderResults(); });
    }

    renderShell();
    if (embedded) start(false);
  }

  window.QuizController = { mount };
  const quizRoot = document.querySelector("#quiz-root");
  if (quizRoot) mount(quizRoot);
})();