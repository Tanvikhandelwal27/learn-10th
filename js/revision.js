(function () {
  const { data, breadcrumb } = window.App;
  const select = document.querySelector("#revision-chapter");
  const target = document.querySelector("#revision-content");
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "History", href: "chapters.html?subject=history" }, { label: "Quick Revision" }]);
  data.findSubject("history").chapters.forEach((chapter) => select.insertAdjacentHTML("beforeend", `<option value="${chapter.id}">Chapter ${chapter.number}</option>`));
  const requestedChapter = new URLSearchParams(location.search).get("chapter");
  if (requestedChapter && data.findChapter(requestedChapter)) select.value = requestedChapter;

  function renderCard(title, icon, items) {
    if (!title) return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    return `<article class="revision-card"><h3><i class="fa-solid ${icon}" aria-hidden="true"></i> ${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
  }

  function renderChapter(chapter) {
    const extra = chapter.enhanced || {};
    const quick = extra.quick || { tenSeconds: chapter.summary, oneMinute: chapter.oneMinute, fiveMinutes: chapter.fiveMinutes, detailed: chapter.summary };
    const exam = extra.exam || { remember: [], dates: [], names: [], differences: [], concepts: [] };
    const timeline = data.timeline.filter((item) => item.chapterId === chapter.id && (!chapter.enhanced?.timeline || item.topic)).sort((left, right) => Number((left.date.match(/\d+/) || [0])[0]) - Number((right.date.match(/\d+/) || [0])[0]));
    return `<div class="revision-chapter-heading"><span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span><div><div class="eyebrow">Chapter ${chapter.number}</div><h2>${chapter.title}</h2><p>${chapter.description}</p></div><a class="button button-outline button-small" href="chapter.html?id=${encodeURIComponent(chapter.id)}">Open lesson</a></div><div class="revision-depth-grid"><article class="revision-level revision-10"><span>10 seconds</span><p>${quick.tenSeconds}</p></article><article class="revision-level revision-1"><span>1 minute</span>${renderCard("", "fa-stopwatch", quick.oneMinute)}</article><article class="revision-level revision-5"><span>5 minutes</span><p>${quick.fiveMinutes}</p></article><article class="revision-level revision-detailed"><span>Detailed revision</span><p>${quick.detailed}</p><a class="button button-outline button-small" href="chapter.html?id=${encodeURIComponent(chapter.id)}#section-15">Open full chapter notes</a></article></div><div class="revision-grid revision-detail-grid">${renderCard("Important dates", "fa-calendar-days", exam.dates.length ? exam.dates : chapter.dates)}${renderCard("Important people", "fa-user-group", exam.names.length ? exam.names : chapter.people)}${renderCard("Important terms", "fa-bookmark", chapter.terms)}${renderCard("Important events", "fa-bolt", chapter.events)}${renderCard("Causes and effects", "fa-arrow-right-arrow-left", chapter.causesEffects)}${renderCard("Exam focus", "fa-bullseye", [...exam.remember, ...exam.concepts.slice(0, 3)])}${renderCard("Memory tricks", "fa-lightbulb", extra.memory || [chapter.mnemonics])}${renderCard("Timeline", "fa-clock", timeline.slice(0, 8).map((item) => `${item.date}: ${item.event}`))}<article class="revision-card visual-summary"><div class="eyebrow">One-page refresher</div><h3>${chapter.title}</h3><div class="visual-summary-grid"><article><strong>DATES</strong><p>${exam.dates.slice(0, 4).join(" · ")}</p></article><article><strong>PEOPLE</strong><p>${exam.names.slice(0, 3).join(" · ")}</p></article><article><strong>CAUSE → EFFECT</strong><p>${chapter.causesEffects[0]}</p></article><article><strong>KEY TERMS</strong><p>${chapter.terms.slice(0, 4).map((item) => item.split(":")[0]).join(" · ")}</p></article></div></article></div>`;
  }

  function render() {
    const chapters = select.value === "all" ? data.findSubject("history").chapters : [data.findChapter(select.value)];
    target.innerHTML = chapters.map(renderChapter).join("");
  }
  select.addEventListener("change", render);
  render();
})();