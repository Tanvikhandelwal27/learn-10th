(function () {
  const { data, breadcrumb, chapterCard } = window.App;
  const subjectId = new URLSearchParams(location.search).get("subject") || "history";
  const subject = data.findSubject(subjectId) || data.findSubject("history");
  const target = document.querySelector("#chapter-list");
  const bookTitle = document.querySelector("#book-title");
  document.title = `${subject.shortName} Chapters · Class 10 Social Science`;
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: subject.name, href: "chapters.html?subject=" + encodeURIComponent(subject.id) }, { label: "Chapters" }]);
  if (subject.status !== "available" || !subject.chapters.length) {
    document.querySelector("h1").textContent = subject.shortName + " is coming soon";
    document.querySelector(".page-intro p").textContent = "This subject will appear here as soon as its Class 10 chapter content is added.";
    bookTitle.textContent = "Class 10 · Social Science · " + subject.name;
    target.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid ${subject.icon}" aria-hidden="true"></i><p style="margin:10px 0 0">${subject.name} content is coming soon. Browse the <a href="subjects.html"><strong>other subjects</strong></a> or continue with <a href="chapters.html?subject=history"><strong>History</strong></a>.</p></div>`;
    return;
  }
  bookTitle.textContent = "HISTORY — INDIA AND THE CONTEMPORARY WORLD – II";
  target.innerHTML = subject.chapters.map(chapterCard).join("");
})();