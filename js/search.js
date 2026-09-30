(function () {
  const input = document.querySelector("#global-search");
  const output = document.querySelector("#search-results");
  const data = window.LEARNING_DATA;
  if (!input || !output) return;

  const entries = data.subjects.flatMap((subject) => subject.chapters.flatMap((chapter) => {
    const searchItems = [
      ...chapter.topics.map((text) => ({ text, description: `Key topic in ${chapter.title}` })),
      ...chapter.people.map((text) => ({ text: text.split(":")[0], description: text.split(":").slice(1).join(":").trim() })),
      ...chapter.dates.map((text) => ({ text: text.split(":")[0], description: text.split(":").slice(1).join(":").trim() })),
      ...chapter.events.map((text) => ({ text: text.split(":")[0], description: text.split(":").slice(1).join(":").trim() })),
      ...chapter.terms.map((text) => ({ text: text.split(":")[0], description: text.split(":").slice(1).join(":").trim() })),
      ...chapter.causesEffects.map((text) => ({ text: text.split(":")[0], description: text })),
      ...(chapter.enhanced?.concepts || []).map((item) => ({ text: item.title, description: item.text })),
      ...(chapter.enhanced?.timeline || []).map(([date, event, description]) => ({ text: `${date} ${event}`, description })),
      ...(chapter.completion?.places || []).map((item) => ({ text: item.name, description: `${item.location}. ${item.significance}` })),
      ...(chapter.completion?.visuals || []).map((item) => ({ text: item.title, description: `${item.what} ${item.shows}` })),
      ...(chapter.completion?.peoplePlaces || []).map((item) => ({ text: item.person, description: `${item.place}. ${item.event}. ${item.contribution}` })),
      ...(chapter.enhanced?.memory || []).map((text) => ({ text, description: `Memory trick in ${chapter.title}` })),
      { text: chapter.title, description: chapter.description }
    ];
    return searchItems.map((item) => ({ ...item, subject, chapter }));
  }));

  function render(query) {
    const normalQuery = query.trim().toLowerCase();
    input.setAttribute("aria-expanded", String(normalQuery.length > 0));
    if (!normalQuery) {
      output.innerHTML = "";
      return;
    }
    const matches = entries.filter((item) => `${item.text} ${item.description} ${item.chapter.title} ${item.subject.name}`.toLowerCase().includes(normalQuery)).slice(0, 8);
    output.innerHTML = matches.length ? matches.map((item) => `<a class="search-result" role="option" href="chapter.html?id=${encodeURIComponent(item.chapter.id)}"><strong>${item.text}</strong><small>${item.subject.name} · Chapter ${item.chapter.number}: ${item.chapter.title} · ${item.description}</small></a>`).join("") : `<div class="search-empty" role="option">No matching topics yet. Try a date, person, or chapter title.</div>`;
  }

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      input.value = "";
      render("");
      input.blur();
    }
    if (event.key === "Enter" && input.value.trim()) {
      event.preventDefault();
      const firstResult = output.querySelector("a");
      if (firstResult) location.href = firstResult.href;
      else location.href = `questions.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-search")) {
      output.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
    }
  });
})();