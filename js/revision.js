(function () {
  const { data, breadcrumb } = window.App;
  const subjectSelect = document.querySelector("#revision-subject");
  const select = document.querySelector("#revision-chapter");
  const target = document.querySelector("#revision-content");
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "Quick Revision" }]);
  const subjects = data.subjects.filter((subject) => subject.chapters.length);
  subjects.forEach((subject) => subjectSelect.insertAdjacentHTML("beforeend", `<option value="${subject.id}">${subject.name}</option>`));
  const requestedChapter = new URLSearchParams(location.search).get("chapter");
  if (requestedChapter) subjectSelect.value = data.findChapter(requestedChapter)?.subjectId || "all";

  function renderCard(title, icon, items) {
    if (!items?.length) return "";
    return `<article class="revision-card"><h3><i class="fa-solid ${icon}" aria-hidden="true"></i> ${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
  }

  function updateChapters() {
    const activeSubjects = subjectSelect.value === "all" ? subjects : subjects.filter((subject) => subject.id === subjectSelect.value);
    const chapters = activeSubjects.flatMap((subject) => subject.chapters);
    select.innerHTML = `<option value="all">All Chapters</option>${chapters.map((chapter) => `<option value="${chapter.id}">${data.findChapter(chapter.id).subjectName} · Chapter ${chapter.number}: ${chapter.title}</option>`).join("")}`;
    if (requestedChapter && chapters.some((chapter) => chapter.id === requestedChapter)) select.value = requestedChapter;
  }

  function renderChapter(chapter) {
    const extra = chapter.enhanced || {};
    const quick = extra.quick || { tenSeconds: chapter.summary, oneMinute: chapter.oneMinute, fiveMinutes: chapter.fiveMinutes, detailed: chapter.summary };
    const exam = extra.exam || { remember: [], dates: [], names: [], differences: [], concepts: [] };
    const subjectId = data.findChapter(chapter.id).subjectId;
    const history = subjectId === "history";
    const geography = subjectId === "geography";
    const civics = subjectId === "civics";
    const economics = subjectId === "economics";
    const timeline = data.timeline.filter((item) => item.chapterId === chapter.id && (!chapter.enhanced?.timeline || item.topic)).sort((left, right) => Number((left.date.match(/\d+/) || [0])[0]) - Number((right.date.match(/\d+/) || [0])[0]));
    const examples = chapter.completion?.places || [];
    const exampleItems = examples.map((item) => `${item.name} (${item.location}): ${item.significance}`);
    const subjectCards = [
      ...(history ? [renderCard("Key dates", "fa-calendar-days", exam.dates.length ? exam.dates : chapter.dates), renderCard("People and roles", "fa-user-group", exam.names.length ? exam.names : chapter.people), renderCard("Timeline", "fa-clock", timeline.slice(0, 8).map((item) => `${item.date}: ${item.event}`))] : []),
      ...(geography ? [renderCard("Indian map points", "fa-map-location-dot", exampleItems)] : []),
      ...(civics ? [renderCard("Examples and cases", "fa-landmark", exampleItems)] : []),
      ...(economics ? [renderCard("Economic examples", "fa-coins", exampleItems)] : []),
      renderCard(geography ? "Geographical concepts" : civics ? "Democratic concepts" : economics ? "Economic terms" : "Key terms", "fa-bookmark", chapter.terms),
      renderCard(geography ? "Processes and examples" : civics ? "Institutions and outcomes" : economics ? "Economic processes" : "Important events", "fa-bolt", chapter.events),
      renderCard("Causes and effects", "fa-arrow-right-arrow-left", chapter.causesEffects),
      renderCard(geography ? "Map and process points" : civics ? "Key concepts for answers" : economics ? "Definitions and exam focus" : "Exam focus", "fa-bullseye", [...(exam.remember || []), ...(exam.concepts || []).slice(0, 3)]),
      renderCard("Memory tricks", "fa-lightbulb", extra.memory || [chapter.mnemonics]),
      ...(extra.comparisons || []).map((table) => renderCard(table.title, "fa-scale-balanced", table.rows.map((row) => row.join(" | "))))
    ].filter(Boolean);
    const summaryRows = [
      ...(history ? [["DATES", (exam.dates || []).slice(0, 4).join(" · ")], ["PEOPLE", (exam.names || []).slice(0, 3).join(" · ")]] : []),
      ...(geography ? [["INDIAN LOCATIONS", examples.slice(0, 4).map((item) => item.name).join(" · ")], ["GEOGRAPHIC PROCESS", (chapter.visual?.points || []).join(" → ")]] : []),
      ...(civics ? [["DEMOCRATIC CONCEPTS", chapter.topics.slice(0, 4).join(" · ")], ["CASES", examples.map((item) => item.name).join(" · ")]] : []),
      ...(economics ? [["ECONOMIC TERMS", chapter.terms.slice(0, 4).map((item) => item.split(":")[0]).join(" · ")], ["ECONOMIC PROCESS", (chapter.visual?.points || []).join(" → ")]] : []),
      ["CAUSE → EFFECT", chapter.causesEffects[0]], ["CHAPTER EXAMPLES", chapter.events.slice(0, 3).map((item) => item.split(":")[0]).join(" · ")]
    ].filter(([, value]) => value);
    return `<div class="revision-chapter-heading"><span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span><div><div class="eyebrow">${data.findChapter(chapter.id).subjectName} · Chapter ${chapter.number}</div><h2>${chapter.title}</h2><p>${chapter.description}</p></div><a class="button button-outline button-small" href="chapter.html?id=${encodeURIComponent(chapter.id)}">Open lesson</a></div><div class="revision-depth-grid"><article class="revision-level revision-10"><span>10 seconds</span><p>${quick.tenSeconds}</p></article><article class="revision-level revision-1"><span>1 minute</span>${renderCard("One-minute points", "fa-stopwatch", quick.oneMinute)}</article><article class="revision-level revision-5"><span>5 minutes</span><p>${quick.fiveMinutes}</p></article><article class="revision-level revision-detailed"><span>Detailed revision</span><p>${quick.detailed}</p><a class="button button-outline button-small" href="chapter.html?id=${encodeURIComponent(chapter.id)}#section-15">Open full chapter notes</a></article></div><div class="revision-grid revision-detail-grid">${subjectCards.join("")}<article class="revision-card visual-summary"><div class="eyebrow">One-page refresher</div><h3>${chapter.title}</h3><div class="visual-summary-grid">${summaryRows.map(([label, value]) => `<article><strong>${label}</strong><p>${value}</p></article>`).join("")}</div></article></div>`;
  }

  function render() {
    const chapters = subjectSelect.value === "all" ? subjects.flatMap((subject) => subject.chapters) : (data.findSubject(subjectSelect.value)?.chapters || []);
    const selected = select.value;
    const visibleChapters = selected === "all" ? chapters : chapters.filter((chapter) => chapter.id === selected);
    target.innerHTML = visibleChapters.length ? visibleChapters.map(renderChapter).join("") : `<div class="empty-state" style="grid-column:1/-1">No chapters are available for this selection yet.</div>`;
  }

  subjectSelect.addEventListener("change", () => { updateChapters(); render(); });
  select.addEventListener("change", render);
  updateChapters();
  render();
})();