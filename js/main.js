(function () {
  const data = window.LEARNING_DATA;
  const links = [
    ["index.html", "Home"],
    ["subjects.html", "Subjects"],
    ["chapters.html", "Chapters"],
    ["revision.html", "Revision"],
    ["timeline.html", "Timeline"],
    ["quiz.html", "Quiz"],
    ["questions.html", "Questions"]
  ];

  function header() {
    const current = location.pathname.split("/").pop() || "index.html";
    return `<a class="skip-link" href="#main-content">Skip to main content</a>
      <header class="site-header"><div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="Class 10 Social Science home"><span class="brand-mark"><i class="fa-solid fa-book-open" aria-hidden="true"></i></span><span class="brand-text">Learn Social Science<small>Class 10 · NCERT</small></span></a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
        <nav class="site-nav" aria-label="Main navigation">${links.map(([href, label]) => `<a href="${href}"${href === current ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
        <form class="nav-search" role="search" action="search.html" method="get"><label class="visually-hidden" for="global-search">Search lessons</label><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><input id="global-search" type="search" name="q" placeholder="Search lessons…" autocomplete="off" aria-controls="search-results" aria-expanded="false"><div class="search-popover" id="search-results" role="listbox" aria-label="Search results"></div></form>
      </div></header>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="container footer-inner"><p>Class 10 · Social Science · Original study notes for curious minds.</p><nav class="footer-links" aria-label="Footer navigation"><a href="about.html">About</a><a href="subjects.html">Subjects</a><a href="questions.html">Question bank</a></nav></div></footer>`;
  }

  function breadcrumb(parts) {
    const items = [{ label: data.className, href: "index.html" }, { label: data.courseName, href: "subjects.html" }, ...parts];
    return `<nav class="breadcrumb" aria-label="Breadcrumb">${items.map((item, index) => `${index ? '<span class="crumb-sep" aria-hidden="true">/</span>' : ""}${item.href && index < items.length - 1 ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`}`).join("")}</nav>`;
  }

  function subjectCard(subject) {
    const available = subject.status === "available";
    const href = available ? `chapters.html?subject=${encodeURIComponent(subject.id)}` : "subjects.html";
    return `<article class="subject-card ${available ? "available" : ""}" data-color="${subject.color}"><span class="subject-icon"><i class="fa-solid ${subject.icon}" aria-hidden="true"></i></span><div class="subject-info"><div class="status-pill ${available ? "status-available" : "status-coming"}">${available ? "Available" : "Coming Soon"}</div><h3><a href="${href}">${subject.shortName}</a></h3><p>${subject.description}</p>${available ? `<a class="button button-outline button-small" href="${href}">Explore ${subject.shortName} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>` : ""}</div></article>`;
  }

  function chapterCard(chapter) {
    const learnUrl = `chapter.html?id=${encodeURIComponent(chapter.id)}`;
    const revisionUrl = `revision.html?chapter=${encodeURIComponent(chapter.id)}`;
    const quizUrl = `quiz.html?chapter=${encodeURIComponent(chapter.id)}`;
    let progress = [];
    try { progress = JSON.parse(localStorage.getItem(`history-progress-${chapter.id}`) || "[]"); } catch { progress = []; }
    const completion = Math.round(progress.length / 28 * 100);
    return `<article class="chapter-card"><div class="chapter-top"><span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span><div><div class="eyebrow">Chapter ${chapter.number}</div><h2><a href="${learnUrl}">${chapter.title}</a></h2></div></div><p>${chapter.description}</p><div class="chapter-progress chapter-card-progress"><div class="progress-label"><strong>Progress</strong><span>${completion}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${completion}%"></div></div></div><div class="topic-list" aria-label="Key topics">${chapter.topics.map((topic) => `<span class="topic-pill">${topic}</span>`).join("")}</div><div class="chapter-actions"><a class="button button-primary button-small" href="${learnUrl}"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Start Learning</a><a class="button button-outline button-small" href="${revisionUrl}"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Quick Revision</a><a class="button button-coral button-small" href="${quizUrl}"><i class="fa-solid fa-circle-question" aria-hidden="true"></i> Take Quiz</a></div></article>`;
  }

  function setupMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    });
  }

  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", footer());
  setupMenu();

  window.App = { data, breadcrumb, subjectCard, chapterCard };
})();