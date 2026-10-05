(function () {
  const { data, breadcrumb, chapterCard } = window.App;
  const subjectId = new URLSearchParams(location.search).get("subject") || "history";
  const subject = data.findSubject(subjectId) || data.findSubject("history");
  const target = document.querySelector("#chapter-list");
  const bookTitle = document.querySelector("#book-title");
  document.title = `${subject.shortName} Chapters · GYANORA`;
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: subject.name, href: "chapters.html?subject=" + encodeURIComponent(subject.id) }, { label: "Chapters" }]);
  if (subject.status !== "available" || !subject.chapters.length) {
    document.querySelector("h1").textContent = subject.shortName + " chapters";
    document.querySelector(".page-intro p").textContent = "No chapters are currently available for this subject.";
    bookTitle.textContent = "GYANORA · Class 10 · " + subject.name;
    target.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid ${subject.icon}" aria-hidden="true"></i><p style="margin:10px 0 0">Choose another subject from the <a href="subjects.html"><strong>subject list</strong></a>.</p></div>`;
    return;
  }
  bookTitle.textContent = subject.bookTitle ? `${subject.name.toUpperCase()} — ${subject.bookTitle}` : `GYANORA · Class 10 · ${subject.name}`;
  document.querySelector("h1").textContent = `${subject.name} chapters`;
  document.querySelector(".page-intro p").textContent = `${subject.name} · ${subject.bookTitle || "Class 10"}. ${subject.chapters.length} chapters with explanations, revision notes, visual learning, and practice.`;
  target.innerHTML = subject.chapters.map(chapterCard).join("");
})();