(function () {
  const { data, breadcrumb } = window.App;
  const select = document.querySelector("#timeline-chapter");
  const importantOnly = document.querySelector("#timeline-important-only");
  const target = document.querySelector("#timeline-events");
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "History", href: "chapters.html?subject=history" }, { label: "Timeline" }]);
  data.findSubject("history").chapters.forEach((chapter) => {
    select.insertAdjacentHTML("beforeend", `<option value="${chapter.id}">Chapter ${chapter.number}: ${chapter.title}</option>`);
  });
  const entries = data.timeline.filter((item) => !data.findChapter(item.chapterId)?.enhanced || item.topic).sort((left, right) => Number((left.date.match(/\d+/) || [0])[0]) - Number((right.date.match(/\d+/) || [0])[0]));

  function render() {
    const filtered = entries.filter((item) => (select.value === "all" || item.chapterId === select.value) && (!importantOnly.checked || item.important));
    target.innerHTML = filtered.map((item) => `<article class="timeline-item"><div class="timeline-date">${item.date}</div><h3>${item.event}</h3><p>${item.description}</p><a class="badge" href="chapter.html?id=${encodeURIComponent(item.chapterId)}">${item.subjectName} · ${item.chapterTitle}</a></article>`).join("") || `<div class="empty-state">No dates available for this selection.</div>`;
  }
  select.addEventListener("change", render);
  importantOnly.addEventListener("change", render);
  const selectedChapter = new URLSearchParams(location.search).get("chapter");
  if (selectedChapter && entries.some((item) => item.chapterId === selectedChapter)) select.value = selectedChapter;
  render();
})();