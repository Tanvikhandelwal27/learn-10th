(function () {
  const target = document.querySelector("#learning-dashboard");
  if (!target) return;
  const chapters = window.LEARNING_DATA.findSubject("history").chapters;
  const completion = chapters.map((chapter) => {
    try { return JSON.parse(localStorage.getItem(`history-progress-${chapter.id}`) || "[]").length; } catch { return 0; }
  });
  const markedSections = completion.reduce((total, count) => total + count, 0);
  const totalSections = chapters.length * 26;
  const percent = Math.round(markedSections / totalSections * 100);
  const items = [
    { title: "5 chapters", detail: "Follow the full History syllabus", icon: "fa-book-open", href: "chapters.html?subject=history", tone: "forest" },
    { title: "Quick revision", detail: "Review in 10 seconds to 5 minutes", icon: "fa-bolt", href: "revision.html", tone: "coral" },
    { title: "Important dates", detail: "Explore the chapter timelines", icon: "fa-calendar-days", href: "timeline.html", tone: "blue" },
    { title: "Memory tricks", detail: "Recall names, dates, and sequences", icon: "fa-lightbulb", href: "chapter.html?id=history-1#section-12", tone: "gold" },
    { title: "Question bank", detail: "Filter practice by chapter and marks", icon: "fa-pen-to-square", href: "questions.html", tone: "blue" },
    { title: "Quiz practice", detail: `${Object.values(window.LEARNING_DATA.quizBank || {}).reduce((total, questions) => total + questions.length, 0)} varied practice questions`, icon: "fa-circle-question", href: "quiz.html", tone: "coral" },
    { title: "Your progress", detail: `${markedSections} of ${totalSections} sections marked studied`, icon: "fa-chart-simple", href: "chapters.html?subject=history", tone: "forest", progress: percent }
  ];
  target.innerHTML = items.map((item) => `<a class="dashboard-card dashboard-${item.tone}" href="${item.href}"><span class="dashboard-icon"><i class="fa-solid ${item.icon}" aria-hidden="true"></i></span><span class="dashboard-copy"><strong>${item.title}</strong><span>${item.detail}</span>${item.progress !== undefined ? `<span class="dashboard-progress"><span style="width:${item.progress}%"></span></span>` : ""}</span><i class="fa-solid fa-arrow-right dashboard-arrow" aria-hidden="true"></i></a>`).join("");
})();
