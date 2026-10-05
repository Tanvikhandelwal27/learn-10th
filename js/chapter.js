(function () {
  const { data, breadcrumb } = window.App;
  const chapterId = new URLSearchParams(location.search).get("id");
  const chapter = data.findChapter(chapterId);
  const root = document.querySelector("#chapter-root");
  if (!chapter) {
    document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "Subjects", href: "subjects.html" }, { label: "Chapter not found" }]);
    root.innerHTML = `<div class="empty-state"><h1>Chapter not found</h1><p>Choose a chapter from one of the available Class 10 Social Science subjects.</p><a class="button button-primary" href="subjects.html">Browse subjects</a></div>`;
    return;
  }

  const extra = chapter.enhanced || {};
  const completion = chapter.completion || {};
  const history = chapter.subjectId === "history";
  const geography = chapter.subjectId === "geography";
  const civics = chapter.subjectId === "civics";
  const economics = chapter.subjectId === "economics";
  const sectionNames = [
    "Introduction", "Learn in 5 minutes", "Chapter story", geography ? "Key geographical concepts" : civics ? "Key democratic concepts" : economics ? "Key economic concepts" : "Main concepts",
    geography ? "Geographical processes" : civics ? "Democratic processes" : economics ? "Economic processes" : "Chapter flowcharts",
    "Concept map", "Important people", "Important dates", "Timeline", "Visual learning", "Causes and effects", "Comparisons", "Memory tricks", "Key distinctions",
    history ? "Dates, events and people to remember" : geography ? "Map points and examples" : civics ? "Key concepts for answers" : "Definitions and examples",
    "Quick revision", "Practice questions", "Answer writing", "Chapter quiz", "Detailed concepts",
    history ? "Important historical places" : geography ? "Important Indian locations" : civics ? "Examples and cases" : "Economic examples",
    history ? "People, place and event" : "People, place and event",
    history ? "Historical visuals" : geography ? "Geography diagrams and maps" : civics ? "Civic structures and diagrams" : "Economic process diagrams",
    "Visual question practice", "Whole chapter flowchart", "Chapter in One Page", "Complete Chapter Revision Flow", "Chapter conclusion"
  ];
  const progressKey = `${chapter.subjectId}-progress-${chapter.id}`;
  const getProgress = () => {
    try { return JSON.parse(localStorage.getItem(progressKey) || "[]"); } catch { return []; }
  };
  document.title = `${chapter.title} · GYANORA`;
  document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: chapter.subjectName, href: `chapters.html?subject=${encodeURIComponent(chapter.subjectId)}` }, { label: "Chapters", href: `chapters.html?subject=${encodeURIComponent(chapter.subjectId)}` }, { label: `Chapter ${chapter.number}` }]);

  const list = (items) => `<ul class="content-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const comparisons = (items) => items.map((table) => `<div class="comparison-table-wrap" role="region" aria-label="${table.title}" tabindex="0"><table class="comparison-table"><caption>${table.title}</caption><thead><tr>${table.columns.map((column) => `<th scope="col">${column}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`).join("");
  const confusionCards = (items) => `<div class="confusion-grid">${items.map((item) => `<article class="confusion-card"><div><strong>${item.left}</strong><span>vs</span><strong>${item.right}</strong></div><p>${item.difference}</p></article>`).join("")}</div>`;
  const flowcharts = (items) => items.map((flowchart) => flowchart.groups ? `<article class="flowchart flowchart-branch"><h3>${flowchart.title}</h3><div class="flow-branches">${flowchart.groups.map((group) => `<section class="flow-branch"><h4>${group.label}</h4>${group.items.map((item, index) => `${index ? '<div class="flow-connector" aria-hidden="true">↓</div>' : ""}<div class="flow-node">${item}</div>`).join("")}</section>`).join("")}</div></article>` : `<article class="flowchart flowchart-${flowchart.style}"><h3>${flowchart.title}</h3><ol>${flowchart.steps.map((step) => `<li>${step}</li>`).join("")}</ol></article>`).join("");
  const conceptMapData = extra.conceptMap;
  const conceptMap = conceptMapData?.branches?.some((branch) => branch.items?.length) ? `<article class="concept-map"><div class="concept-root">${conceptMapData.center}</div><div class="concept-branches">${conceptMapData.branches.filter((branch) => branch.items?.length).map((branch) => `<section class="concept-branch"><h3>${branch.label}</h3>${branch.items.map((item) => `<div class="concept-leaf">${item}</div>`).join("")}</section>`).join("")}</div></article>` : "";
  const rawConcepts = extra.concepts || [];
  const distinctConceptExplanations = new Set(rawConcepts.map((item) => item.text)).size;
  const lessonConcepts = distinctConceptExplanations > 1 ? rawConcepts : chapter.terms.map((item) => {
    const [title, ...definition] = item.split(": ");
    return { title, text: definition.join(": ") };
  });
  const timelineItems = data.timeline.filter((item) => item.chapterId === chapter.id && (!extra.timeline || item.topic)).sort((left, right) => Number((left.date.match(/\d+/) || [0])[0]) - Number((right.date.match(/\d+/) || [0])[0]));
  const timeline = `<div class="timeline-controls"><label class="toggle-field"><input type="checkbox" id="important-dates-only"><span>Show only important dates</span></label><span class="muted">${timelineItems.length} key moments</span></div><div class="timeline timeline-detailed" id="chapter-timeline">${timelineItems.map((item) => `<article class="timeline-item" data-important="${item.important ? "true" : "false"}"><div class="timeline-date">${item.date} ${item.important ? '<span class="badge badge-important">Key date</span>' : ""}</div><h3>${item.event}</h3><p>${item.description}</p><span class="badge">${item.topic || item.chapterTitle}</span></article>`).join("")}</div>`;
  const exam = extra.exam || { remember: [], concepts: [], dates: [], names: [], differences: [], short: "", long: "" };
  const quick = extra.quick || { tenSeconds: chapter.summary, oneMinute: chapter.oneMinute, fiveMinutes: chapter.fiveMinutes, detailed: chapter.summary };
  const existingQuestions = data.questionBank.filter((item) => item.chapterId === chapter.id);
  const shortQuestions = [exam.short, ...existingQuestions.filter((item) => item.type === "Short Answer").map((item) => item.question)].filter(Boolean);
  const longQuestions = [exam.long, ...existingQuestions.filter((item) => item.type === "Long Answer").map((item) => item.question)].filter(Boolean);
  const completed = getProgress();
  let percent = Math.round(completed.length / sectionNames.length * 100);

  const renderWholeFlow = (items) => `<article class="whole-flowchart"><p class="flowchart-note">Revise this flowchart before the exam to recall the complete chapter.</p><div class="whole-flow-steps">${items.map((phase, index) => `<section class="whole-flow-phase"><span class="whole-flow-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${phase.title}</h3><ul>${phase.points.map((point) => `<li>${point}</li>`).join("")}</ul></div></section>`).join('<div class="whole-flow-arrow" aria-hidden="true">↓</div>')}</div></article>`;
  const renderVisualArt = (visual) => {
    if (visual.imageSrc) return `<figure class="provided-visual chapter-visual"><img src="${visual.imageSrc}" alt="${visual.alt || `${visual.title}. ${visual.shows}`}" width="${visual.imageWidth}" height="${visual.imageHeight}" loading="lazy"></figure>`;
    const icon = { allegory: "fa-person-dress", assembly: "fa-people-roof", map: "fa-route", route: "fa-person-walking", symbol: "fa-cube", meeting: "fa-people-group", network: "fa-share-nodes", exchange: "fa-earth-americas", routes: "fa-ship", machine: "fa-gears", loom: "fa-grip", factory: "fa-industry", press: "fa-print", newspaper: "fa-newspaper" }[visual.kind] || "fa-landmark";
    const labels = visual.diagramLabels || (visual.kind === "allegory" ? ["Marianne · France", "Germania · Germany"] : visual.kind === "machine" ? ["Several spindles", "One spinning worker", "More thread"] : visual.kind === "loom" ? ["Shuttle", "Warp threads", "Faster weaving"] : visual.kind === "press" ? ["Arrange type", "Ink the form", "Press many copies"] : visual.kind === "newspaper" ? ["Printed report", "Readers share", "Public debate"] : visual.kind === "exchange" ? ["Americas", "Crops · disease", "Other regions"] : visual.kind === "route" ? ["Sabarmati", "March", "Dandi"] : visual.kind === "network" ? ["East Asia", "Trade routes", "Europe · Africa"] : visual.kind === "routes" ? ["Recruitment", "Ocean crossing", "Plantation work"] : visual.kind === "factory" ? ["Household work", "Merchant network", "Factory floor"] : visual.kind === "symbol" ? ["Salt", "Colonial rule", "Public protest"] : visual.kind === "assembly" ? ["Elected delegates", "Constitution", "Crown refused"] : ["People", "Shared campaign", "Different aims"]);
    const graphic = visual.diagramGroups ? `<div class="visual-map-branches">${visual.diagramGroups.map((group) => `<section><strong>${group.title}</strong>${group.items.map((item) => `<span>${item}</span>`).join("")}</section>`).join("")}</div>` : `<div class="visual-recreation-flow">${labels.map((label, index) => `<span>${label}</span>${index < labels.length - 1 ? '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>' : ""}`).join("")}</div>`;
    return `<div class="visual-recreation visual-${visual.kind}" role="img" aria-label="Original educational diagram: ${visual.title}. ${visual.shows}"><div class="visual-recreation-mark"><i class="fa-solid ${icon}" aria-hidden="true"></i></div>${graphic}</div>`;
  };
  const renderVisualCard = (visual) => `<article class="chapter-visual-card"><div class="chapter-visual-art">${renderVisualArt(visual)}</div><div class="chapter-visual-copy"><div class="eyebrow">Source study · ${visual.kind}</div><h3>${visual.title}</h3><p><strong>What is this?</strong> ${visual.what}</p>${visual.associatedWith ? `<p><strong>Associated with:</strong> ${visual.associatedWith}</p>` : ""}${visual.represents ? `<p><strong>Represents:</strong> ${visual.represents}</p>` : ""}${visual.elements ? `<p><strong>Important visual elements:</strong> ${visual.elements}</p>` : ""}${visual.chapterConnection ? `<p><strong>Chapter connection:</strong> ${visual.chapterConnection}</p>` : ""}<p><strong>What does it show?</strong> ${visual.shows}</p><p><strong>Why is it important?</strong> ${visual.importance}</p>${visual.examFocus ? `<div class="place-exam-point"><strong>Exam focus</strong><span>${visual.examFocus}</span></div>` : ""}<div class="visual-remember"><strong>Remember</strong><ul>${visual.remember.map((point) => `<li>${point}</li>`).join("")}</ul>${visual.memoryLine ? `<p class="visual-memory-line">${visual.memoryLine}</p>` : ""}</div></div></article>`;
  const renderVisuals = (items) => {
    const comparisonGroup = items.filter((item) => item.comparisonGroup === "European national allegories");
    const remaining = items.filter((item) => item.comparisonGroup !== "European national allegories");
    const pair = comparisonGroup.length ? `<div class="chapter-visual-pair">${comparisonGroup.map(renderVisualCard).join("")}</div><div class="allegory-comparison-wrap" role="region" aria-label="Marianne and Germania comparison" tabindex="0"><table class="comparison-table"><caption>Marianne and Germania at a glance</caption><thead><tr><th scope="col">Visual</th><th scope="col">Represents</th><th scope="col">Country</th><th scope="col">Main idea</th></tr></thead><tbody><tr><th scope="row">Marianne</th><td>French nation</td><td>France</td><td>Liberty / Republic / National identity</td></tr><tr><th scope="row">Germania</th><td>German nation</td><td>Germany</td><td>Unity / German nation</td></tr></tbody></table><p class="allegory-memory-line"><strong>Marianne → France</strong><strong>Germania → Germany</strong></p></div>` : "";
    return `${pair}<div class="chapter-visual-grid">${remaining.map(renderVisualCard).join("")}</div>`;
  };
  const chapterVisuals = completion.visuals?.length ? completion.visuals : chapter.visual?.points?.length ? [{
    kind: chapter.visual.kind || "network",
    title: chapter.visual.label || `${chapter.title}: key relationships`,
    what: `A chapter-specific diagram of ${chapter.title.toLowerCase()}.`,
    shows: chapter.visual.points.join(" → "),
    importance: chapter.summary,
    remember: chapter.oneMinute.slice(0, 4),
    questions: [`Explain how ${chapter.visual.points[0]} connects to the next step.`, `What does this diagram show about ${chapter.title.toLowerCase()}?`],
    diagramLabels: chapter.visual.points,
    source: "Original chapter-specific learning diagram."
  }] : [];
  const chapterFlow = completion.wholeFlow?.length > 1 ? completion.wholeFlow : (extra.flowcharts || []).map((flowchart) => ({
    title: flowchart.title,
    points: flowchart.steps || flowchart.groups?.flatMap((group) => [`${group.label}:`, ...group.items]) || []
  })).filter((phase) => phase.points.length > 1);
  const introMetrics = history
    ? [[timelineItems.length, "dated moments"], [chapter.people.length, "key people"], [lessonConcepts.length, "core concepts"]]
    : geography
      ? [[chapter.topics.length, "key concepts"], [chapter.terms.length, "key definitions"], [chapterVisuals.length, "chapter diagrams"]]
      : civics
        ? [[chapter.topics.length, "democratic concepts"], [chapter.terms.length, "key definitions"], [chapter.causesEffects.length, "cause-and-effect links"]]
        : [[lessonConcepts.length, "key concepts"], [chapter.terms.length, "key definitions"], [chapterVisuals.length, "process diagrams"]];
  const examCards = history
    ? [["Key ideas", exam.remember], ["Dates", exam.dates], ["People and roles", exam.names], ["Useful comparisons", exam.differences]]
    : geography
      ? [["Geographical concepts", exam.concepts], ["Key terms", chapter.terms], ["Processes and examples", chapter.events], ["Causes and effects", chapter.causesEffects]]
      : civics
        ? [["Key democratic concepts", exam.concepts], ["Definitions", chapter.terms], ["Examples and outcomes", chapter.events], ["Important distinctions", exam.differences]]
        : [["Definitions to know", chapter.terms], ["Economic concepts", exam.concepts], ["Processes and examples", chapter.events], ["Causes and effects", chapter.causesEffects]];
  const renderExamFocus = () => `<div class="exam-focus-grid">${examCards.filter(([, items]) => items?.length).map(([title, items]) => `<article class="exam-focus-card"><h3>${title}</h3>${list(items.slice(0, 6))}</article>`).join("")}<article class="exam-focus-card"><h3>Practice prompts</h3><p><strong>3 marks:</strong> ${exam.short}</p><p><strong>5 marks:</strong> ${exam.long}</p></article></div><p class="muted exam-note">Use these points to practise explaining the chapter; they are not examination predictions.</p>`;
  const renderQuickSummary = () => {
    const rows = [
      ...(history ? [["DATES", exam.dates.slice(0, 4).join(" · ")], ["PEOPLE", exam.names.slice(0, 3).join(" · ")]] : []),
      ...(geography ? [["LOCATIONS", (completion.places || []).slice(0, 4).map((place) => place.name).join(" · ")], ["GEOGRAPHIC PROCESS", chapter.visual.points.join(" → ")]] : []),
      ...(civics ? [["KEY IDEAS", chapter.topics.slice(0, 4).join(" · ")], ["DEMOCRATIC PROCESS", chapter.visual.points.join(" → ")]] : []),
      ...(economics ? [["ECONOMIC TERMS", chapter.terms.slice(0, 4).map((item) => item.split(":")[0]).join(" · ")], ["ECONOMIC PROCESS", chapter.visual.points.join(" → ")]] : []),
      ["CHAPTER EXAMPLES", chapter.events.slice(0, 3).map((item) => item.split(":")[0]).join(" · ")],
      ["CAUSE → EFFECT", chapter.causesEffects[0]]
    ].filter(([, value]) => value);
    return `<div class="visual-summary"><div class="eyebrow">One-page refresher</div><h3>${chapter.title}</h3><div class="visual-summary-grid">${rows.map(([label, value]) => `<article><strong>${label}</strong><p>${value}</p></article>`).join("")}</div></div>`;
  };
  const renderPlaces = (items) => `<div class="important-place-grid">${items.map((place) => `<article class="important-place-card"><div class="place-card-top"><i class="fa-solid fa-location-dot" aria-hidden="true"></i><div><h3>${place.name}</h3><span>${place.location}</span></div></div><p><strong>Connection</strong> ${place.connection}</p><p><strong>${history ? "Historical significance" : geography ? "Geographical importance" : economics ? "Economic connection" : "Civic connection"}</strong> ${place.significance}</p><div class="place-exam-point"><strong>Exam point</strong><span>${place.exam}</span></div></article>`).join("")}</div>`;
  const renderPeopleConnections = (items) => `<div class="people-place-grid">${items.map((item) => `<article class="people-place-card"><h3>${item.person}</h3><div class="connection-chain"><span><small>PLACE</small>${item.place}</span><i class="fa-solid fa-arrow-down" aria-hidden="true"></i><span><small>EVENT</small>${item.event}</span><i class="fa-solid fa-arrow-down" aria-hidden="true"></i><span><small>CONTRIBUTION</small>${item.contribution}</span><i class="fa-solid fa-arrow-down" aria-hidden="true"></i><span><small>RESULT / IMPACT</small>${item.impact}</span></div></article>`).join("")}</div>`;
  const renderMemorySheet = (sheet, chapter) => {
    const groups = [
      ...(history ? [{ title: "People and roles", items: sheet.people }, { title: "Key dates", items: sheet.dates }] : []),
      ...(geography ? [{ title: "Indian locations", items: sheet.places }] : []),
      { title: economics ? "Key economic terms" : civics ? "Key democratic terms" : "Key terms", items: sheet.terms },
      { title: "Causes", items: sheet.causes },
      { title: "Effects", items: sheet.effects },
      { title: "Important distinctions", items: sheet.differences },
      { title: "Must remember", items: sheet.mustRemember }
    ].filter((group) => group.items?.length);
    return `<div class="memory-sheet"><header><div class="eyebrow">Last-minute revision</div><h3>${chapter.title} · one-page recall</h3></header><div class="memory-sheet-grid">${groups.map((group) => `<article${group.title === "Must remember" ? ' class="must-remember"' : ""}><h4>${group.title}</h4><ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("")}</div></div>`;
  };
  const answerGuidance = history
    ? { three: ["State the historical claim directly.", "Support it with a relevant event, person, place, or date.", "Explain how the evidence answers the question."], five: ["Set the period and context.", "Arrange distinct events or causes in sequence.", "Use named people, places, and dates as evidence.", "Explain effects and finish with a judgement or conclusion."] }
    : geography
      ? { three: ["Define the geographical term or process.", "Explain the physical or human factors involved.", "Support the point with a named Indian location or crop/resource example."], five: ["Name and define the process or resource classification.", "Explain the sequence and factors that shape it.", "Use a relevant Indian location, map point, or data/example.", "Connect the process to its effects or sustainable management."] }
      : civics
        ? { three: ["Define the democratic principle or institution.", "Explain the rule, level, or group involved.", "Support it with a chapter case and state its democratic effect."], five: ["State the constitutional or democratic concept.", "Explain how the institution or process works.", "Use a relevant case, example, or comparison.", "Evaluate the effects on representation, accountability, equality, or stability."] }
        : { three: ["Define the economic term or indicator.", "Explain the process or relationship.", "Use a relevant household, worker, producer, or market example."], five: ["Define the key terms and set out the economic issue.", "Explain the stages, causes, or indicators involved.", "Use a chapter example and distinguish related concepts.", "Explain who benefits or bears costs and conclude clearly."] };
  const renderAnswerGuidance = () => `<div class="answer-framework"><h3>3 marks: a focused explanation</h3><ol>${answerGuidance.three.map((step) => `<li>${step}</li>`).join("")}</ol></div><div class="answer-framework"><h3>5 marks: a developed answer</h3><ol>${answerGuidance.five.map((step) => `<li>${step}</li>`).join("")}</ol></div>`;

  const content = [
    `<p>${chapter.overview}</p><div class="chapter-intro-strip">${introMetrics.map(([value, label]) => `<div class="intro-stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div><div class="chapter-progress"><div class="progress-label"><strong>Your chapter progress</strong><span id="chapter-progress-label">__PROGRESS__% complete</span></div><div class="progress-track"><div id="chapter-progress-fill" class="progress-fill" style="width:__PROGRESS__%"></div></div><p>Mark relevant sections as studied. Progress is saved on this device.</p></div>`,
    `<div class="quick-lead"><span class="quick-time">5 min</span><p>${chapter.fiveMinutes}</p></div><div class="topic-list">${chapter.topics.map((topic) => `<span class="topic-pill">${topic}</span>`).join("")}</div>`,
    `<ol class="story-list">${chapter.story.map((step) => `<li>${step}</li>`).join("")}</ol>`,
    `<div class="concept-grid">${lessonConcepts.map((item) => `<article class="concept-card"><div class="eyebrow">${economics ? "Economic idea" : geography ? "Geographical concept" : civics ? "Democratic concept" : "Core idea"}</div><h3>${item.title}</h3><p>${item.text}</p>${item.example && item.text !== chapter.summary ? `<div class="concept-example"><strong>Example</strong><p>${item.example}</p></div>` : ""}</article>`).join("")}</div>`,
    flowcharts(extra.flowcharts || [{ title: chapter.visual.label, style: "horizontal", steps: chapter.visual.points }]),
    conceptMap,
    list(chapter.people),
    list(chapter.dates),
    timeline,
    `<div class="visual-learning-grid">${chapterVisuals.map((visual) => `<article class="visual-learning-item"><span class="visual-icon"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i></span><div><h3>${visual.title}</h3><p>${visual.shows}</p></div></article>`).join("")}</div>`,
    `<h3>Trace the relationship</h3>${list(chapter.causesEffects)}`,
    comparisons(extra.comparisons || []),
    `<div class="memory-grid">${(extra.memory || [chapter.mnemonics]).map((trick, index) => `<article class="memory-card"><span class="memory-number">${String(index + 1).padStart(2, "0")}</span><p>${trick}</p></article>`).join("")}</div>`,
    confusionCards(extra.confusion || []),
    renderExamFocus(),
    `<div class="revision-levels"><article class="revision-level revision-10"><span>10 seconds</span><p>${quick.tenSeconds}</p></article><article class="revision-level revision-1"><span>1 minute</span>${list(quick.oneMinute)}</article><article class="revision-level revision-5"><span>5 minutes</span><p>${quick.fiveMinutes}</p></article><article class="revision-level revision-detailed"><span>Detailed revision</span><p>${quick.detailed}</p><a class="button button-outline button-small" href="revision.html?chapter=${encodeURIComponent(chapter.id)}">Open revision cards</a></article></div>${renderQuickSummary()}`,
    `<h3>3-mark questions</h3><p>Usually cover three distinct, relevant points and add evidence where useful.</p>${list(shortQuestions)}<h3>5-mark questions</h3><p>Build a supported explanation with several points and a short conclusion.</p>${list(longQuestions)}<h3>Case-based practice</h3>${list(existingQuestions.filter((item) => item.type === "Case-based" || item.type === "Case Based").map((item) => item.question))}<a class="button button-outline" href="questions.html?chapter=${encodeURIComponent(chapter.id)}">Browse question bank <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`,
    renderAnswerGuidance(),
    `<div id="chapter-quiz"></div>`,
    `<div class="detailed-concepts">${chapterVisuals.map((visual) => `<article><h3>${visual.title}</h3><p>${visual.shows} ${visual.importance}</p></article>`).join("")}</div>`,
    renderPlaces(completion.places || []),
    renderPeopleConnections(completion.peoplePlaces || []),
    `<div class="visual-section-intro"><p>Use these chapter-specific diagrams to connect the key ideas, locations, or processes.</p></div>${renderVisuals(chapterVisuals)}`,
    `<div class="visual-question-grid">${chapterVisuals.flatMap((visual) => visual.questions.map((question) => `<article class="visual-question-card"><span class="badge">${visual.title}</span><h3>${question}</h3><details><summary>What to look for</summary><p>${visual.shows} ${visual.importance}</p></details>`)).join("")}</div>`,
    renderWholeFlow(chapterFlow),
    renderMemorySheet(completion.memorySheet || { people: [], dates: [], places: [], terms: [], causes: [], effects: [], differences: [], mustRemember: [] }, chapter),
    `<div class="revision-chain" aria-label="Complete chapter revision flow">${(completion.memorySheet?.chain || []).map((step, index) => `<span>${step}</span>${index < completion.memorySheet.chain.length - 1 ? '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>' : ""}`).join("")}</div><p class="muted">Read the chain from left to right, then explain the links in your own words.</p>`,
    `<div class="complete-conclusion">${(completion.conclusion?.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}<div class="conclusion-takeaways"><h3>Board-exam recall points</h3><ul>${(completion.conclusion?.takeaways || []).map((point) => `<li>${point}</li>`).join("")}</ul></div></div>`
  ];

  const memorySheet = completion.memorySheet || {};
  const hasMemoryContent = [
    ...(history ? [memorySheet.people, memorySheet.dates] : []),
    ...(geography ? [memorySheet.places] : []),
    memorySheet.terms, memorySheet.causes, memorySheet.effects, memorySheet.differences, memorySheet.mustRemember
  ].some((items) => items?.length);
  const sectionHasContent = [
    true, true, chapter.story?.length >= 2, lessonConcepts.length >= 3,
    extra.flowcharts?.some((item) => item.steps?.length > 1 || item.groups?.some((group) => group.items?.length)),
    Boolean(conceptMap), history && chapter.people?.length >= 2, history && chapter.dates?.length >= 2,
    history && timelineItems.length >= 2, false, chapter.causesEffects?.length >= 2,
    extra.comparisons?.some((item) => item.rows?.length >= 2), extra.memory?.length >= 2,
    extra.confusion?.length >= 2, true, quick.oneMinute?.length >= 2,
    existingQuestions.length > 0, true, data.quiz[chapter.id]?.length === 30,
    false, completion.places?.length >= 2, history && completion.peoplePlaces?.length >= 2,
    chapterVisuals.length > 0, chapterVisuals.some((item) => item.questions?.length), (history || economics) && completion.wholeFlow?.length > 1,
    hasMemoryContent, (history || economics) && completion.memorySheet?.chain?.length >= 3,
    completion.conclusion?.paragraphs?.some((paragraph) => paragraph.trim().length > 40)
  ];
  const visibleIndexes = content.map((_, index) => index).filter((index) => sectionHasContent[index]);
  const visibleIndexSet = new Set(visibleIndexes);
  const sectionCount = visibleIndexes.length;
  percent = Math.round(completed.filter((index) => visibleIndexSet.has(index)).length / sectionCount * 100);
  content[0] = content[0].replaceAll("__PROGRESS__", String(percent));
  const visibleSections = content.map((html, index) => ({ html, index, name: sectionNames[index] })).filter((item) => visibleIndexSet.has(item.index));
  const nav = visibleSections.map(({ name, index }) => `<a href="#section-${index}">${name}</a>`).join("");
  const sections = visibleSections.map(({ html, index, name }) => `<section class="study-section" id="section-${index}"><div class="study-section-heading"><h2>${name}</h2><button class="section-complete${completed.includes(index) ? " is-complete" : ""}" type="button" data-complete-section="${index}" aria-pressed="${completed.includes(index)}"><i class="fa-solid fa-check" aria-hidden="true"></i><span>${completed.includes(index) ? "Studied" : "Mark studied"}</span></button></div>${html}</section>`).join("");
  const simplePrompts = history
    ? ["WHAT HAPPENED?", "WHY DID IT HAPPEN?", "WHO WAS INVOLVED?", "WHAT HAPPENED NEXT?", "WHY IS IT IMPORTANT?"]
    : geography
      ? ["WHAT RESOURCE OR PROCESS?", "WHERE IS IT FOUND?", "HOW DOES IT WORK?", "WHY DOES IT MATTER?"]
      : civics
        ? ["WHAT IS THE CONCEPT?", "WHO SHARES OR USES POWER?", "HOW DOES IT WORK?", "WHY DOES IT MATTER?"]
        : ["WHAT IS THE ECONOMIC IDEA?", "WHO IS INVOLVED?", "HOW DOES THE PROCESS WORK?", "WHO BENEFITS OR BEARS COSTS?", "WHY DOES IT MATTER?"];
  root.innerHTML = `<header class="page-intro"><div class="eyebrow">${chapter.subjectName} · Chapter ${chapter.number}</div><h1>${chapter.title}</h1><p>${chapter.description}</p><div class="hero-actions" style="margin-top:18px"><a class="button button-outline button-small" href="chapters.html?subject=${encodeURIComponent(chapter.subjectId)}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> All chapters</a><button class="button button-coral button-small" id="understand-toggle" type="button" aria-expanded="false" aria-controls="simple-explanation"><i class="fa-regular fa-face-sad-tear" aria-hidden="true"></i> I Don't Understand This</button></div><div class="simple-panel" id="simple-explanation" hidden><h3>Let's make it simple</h3>${chapter.simple.slice(0, simplePrompts.length).map((text, index) => `<div class="simple-item"><strong>${simplePrompts[index]}</strong><p>${text}</p></div>`).join("")}</div></header><div class="study-layout"><nav class="study-sidebar" aria-label="On this page"><strong>In this chapter</strong>${nav}</nav><div class="study-content">${sections}</div></div>`;
  root.querySelectorAll(".provided-visual img").forEach((image) => image.addEventListener("error", () => image.closest("figure")?.remove()));

  document.querySelector("#understand-toggle").addEventListener("click", (event) => {
    const panel = document.querySelector("#simple-explanation");
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
  document.querySelectorAll("[data-complete-section]").forEach((button) => button.addEventListener("click", () => {
    const selected = Number(button.dataset.completeSection);
    const progress = new Set(getProgress());
    if (progress.has(selected)) progress.delete(selected);
    else progress.add(selected);
    const saved = [...progress].sort((left, right) => left - right);
    localStorage.setItem(progressKey, JSON.stringify(saved));
    const completion = Math.round(saved.filter((index) => visibleIndexSet.has(index)).length / sectionCount * 100);
    document.querySelector("#chapter-progress-label").textContent = `${completion}% complete`;
    document.querySelector("#chapter-progress-fill").style.width = `${completion}%`;
    button.classList.toggle("is-complete", progress.has(selected));
    button.setAttribute("aria-pressed", String(progress.has(selected)));
    button.querySelector("span").textContent = progress.has(selected) ? "Studied" : "Mark studied";
  }));
  document.querySelector("#important-dates-only")?.addEventListener("change", (event) => {
    document.querySelectorAll("#chapter-timeline .timeline-item").forEach((item) => {
      item.hidden = event.target.checked && item.dataset.important !== "true";
    });
  });
  window.QuizController.mount(document.querySelector("#chapter-quiz"), data.quiz[chapter.id] || [], { compact: true, title: `Chapter ${chapter.number} check-in` });
})();