(function () {
  const data = window.LEARNING_DATA;
  const answerPatterns = ["A and R are true, and R explains A.", "A and R are true, but R does not explain A.", "A is true, but R is false.", "A is false, but R is true."];
  const reasonOptions = [...answerPatterns];
  const relationFacts = {
    "history-1": [
      ["The French Revolution helped popularise national sovereignty.", "It challenged dynastic authority and gave political importance to citizens and the nation."],
      ["The Congress of Vienna sought to restore conservative order.", "Its settlement restored monarchies and redrew boundaries after Napoleon's defeat."],
      ["The Zollverein supported economic integration among German states.", "It reduced internal customs barriers among participating states."],
      ["Mazzini's Young Italy promoted a united Italian republic.", "Mazzini organised a nationalist movement for political unity."],
      ["Cavour helped lead Italian unification.", "As Piedmont-Sardinia's chief minister, he used diplomacy and alliances."],
      ["Garibaldi contributed to the unification of southern Italy.", "He led volunteer campaigns that helped bring southern territories into the new kingdom."],
      ["Prussia became the leading force in German unification.", "Its military and political power enabled it to shape the unification process."],
      ["The Frankfurt Parliament did not achieve German unity in 1848.", "The Prussian king rejected the crown offered by the elected assembly."],
      ["National allegories made abstract national identities visible.", "Figures such as Germania and Marianne represented a nation through a personified image."],
      ["Nineteenth-century liberalism did not guarantee universal suffrage.", "Voting rights were frequently restricted by property and gender qualifications."]
    ],
    "history-2": [
      ["The Rowlatt Act triggered protest in 1919.", "It allowed detention without trial and restricted civil liberties."],
      ["The Jallianwala Bagh massacre intensified opposition to colonial rule.", "British troops fired on an unarmed gathering in Amritsar in April 1919."],
      ["Non-Cooperation encouraged people to withdraw support from colonial institutions.", "Its methods included boycotting schools, courts, councils, and foreign goods."],
      ["The Non-Cooperation movement was withdrawn in 1922.", "Gandhi called it off after violence at Chauri Chaura."],
      ["Salt became a powerful symbol during Civil Disobedience.", "The colonial salt law affected an everyday necessity used across social groups."],
      ["The Salt March began at Sabarmati in March 1930.", "Gandhi led a march to Dandi and broke the salt law there in April."],
      ["Purna Swaraj became Congress's stated goal in 1929.", "The Lahore Congress adopted complete independence as its objective."],
      ["Mass nationalism included groups with different priorities.", "Peasants, business groups, workers, and women experienced colonial rule differently."],
      ["Civil Disobedience differed from Non-Cooperation.", "Civil Disobedience involved openly breaking selected colonial laws."],
      ["National unity did not settle questions of social justice.", "Leaders and communities debated political representation and caste discrimination."]
    ],
    "history-3": [
      ["Premodern trade routes created connections across distant regions.", "Merchants and travellers carried goods as well as ideas, religions, and technologies."],
      ["European conquest transformed the Americas.", "Disease and colonisation devastated Indigenous societies and reorganised production."],
      ["American crops affected diets outside the Americas.", "Crops such as potatoes and maize travelled across oceans."],
      ["Indentured migration expanded after the formal abolition of slavery in the British Empire.", "Plantation owners recruited workers under contracts that could be coercive."],
      ["Rinderpest damaged African livelihoods in the late nineteenth century.", "The disease killed cattle that people depended on for food and work."],
      ["The Great Depression spread across national borders.", "Falling demand, prices, and trade affected connected economies."],
      ["The First World War disrupted global economic connections.", "War changed production, migration, trade, and government spending."],
      ["The Bretton Woods conference planned post-war financial cooperation.", "Delegates met in 1944 to shape a framework for stability and reconstruction."],
      ["Globalisation can create interdependence and unequal power.", "Colonial trade connected regions under conditions not chosen equally by all participants."],
      ["Transport and communication increased the pace of global exchange.", "Steamships, railways, and telegraphs shortened the time needed to move information and goods."]
    ],
    "history-4": [
      ["Proto-industrial production could grow without factories.", "Merchants organised rural households to produce goods for wider markets."],
      ["The flying shuttle increased weaving speed.", "John Kay's device helped a weaver pass the shuttle across wider looms more quickly."],
      ["The spinning jenny increased the number of threads spun at once.", "James Hargreaves's machine allowed one worker to spin several threads simultaneously."],
      ["Industrialisation did not immediately eliminate hand production.", "Skilled work and specialised markets still suited manual production."],
      ["Company agents affected the independence of many Indian weavers.", "Gomasthas supervised deliveries and helped the Company control production."],
      ["The first cotton mill in Bombay opened in 1854.", "Cotton-mill production became an important part of India's industrial growth."],
      ["The first jute mill in Bengal was established in 1855.", "Jute processing developed near supplies and transport in the Bengal region."],
      ["British machine-made cloth put pressure on Indian handloom producers.", "Imported factory cloth competed with locally woven textiles."],
      ["Industrialisation was uneven across places and occupations.", "Access to capital, markets, skills, and machines varied."],
      ["A factory changed the organisation of work as well as the tools used.", "Workers performed scheduled tasks together in a workplace controlled by an employer."]
    ],
    "history-5": [
      ["Printing traditions in East Asia predate Gutenberg's European press.", "Woodblock printing and early movable type were used in East Asia centuries earlier."],
      ["The Diamond Sutra is an important early printed book.", "The dated Chinese text was printed in 868 CE."],
      ["Movable type helped printers reproduce texts more quickly.", "Reusable characters could be rearranged for different pages and books."],
      ["Print helped spread the Reformation.", "Printed copies circulated Martin Luther's arguments beyond their place of origin."],
      ["The first printing press arrived in Goa in 1556.", "Portuguese missionaries established a press there."],
      ["Print helped create wider publics for debate.", "Newspapers and pamphlets carried political and social arguments to more readers."],
      ["Vernacular publications could reach readers beyond English-language audiences.", "Writing in local languages made print relevant to broader linguistic communities."],
      ["The Vernacular Press Act restricted Indian-language newspapers.", "Colonial authorities used the 1878 law to control critical publications."],
      ["Print did not instantly replace manuscripts.", "Handwritten texts continued to be made and read alongside printed works."],
      ["Greater circulation of print could lead to censorship.", "Authorities responded to the wider reach of criticism and political discussion."]
    ]
  };

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function makeQuestion(chapter, type, question, correct, distractors, explanation, topic, difficulty, extra) {
    const options = type === "True/False" ? ["True", "False"] : type === "Assertion/Reason" ? reasonOptions : shuffle([correct, ...[...new Set(distractors.filter((item) => item && item !== correct))].slice(0, 3)]);
    const answer = type === "True/False" ? (correct ? 0 : 1) : type === "Assertion/Reason" ? (extra?.answer ?? 0) : options.indexOf(correct);
    return { ...extra, question, options, answer, explanation, type, topic, difficulty, chapterId: chapter.id, chapterTitle: chapter.title, subjectId: chapter.subjectId, subjectName: chapter.subjectName };
  }

  function buildMcqs(chapter) {
    const people = chapter.people.map((entry) => entry.split(":").map((part) => part.trim()));
    const coreDates = chapter.dates.map((entry) => {
      const [date, ...description] = entry.split(": ");
      return [date, description.join(": "), description.join(": "), "Core date"];
    });
    const detailedDates = (chapter.enhanced?.timeline || []).map((item) => [String(item[0]), item[1], item[2], item[3]]);
    const seenDates = new Set();
    const dates = [...coreDates, ...detailedDates].filter((item) => {
      const key = `${item[0]}-${item[1]}`;
      if (seenDates.has(key)) return false;
      seenDates.add(key);
      return true;
    });
    const terms = chapter.terms.map((entry) => entry.split(":").map((part) => part.trim()));
    const events = chapter.events.map((entry) => entry.split(":").map((part) => part.trim()));
    const concepts = chapter.enhanced?.concepts || [];
    const peopleNames = people.map((item) => item[0]);
    const dateChoices = dates.map((item) => item[0]);
    const eventNames = events.map((item) => item[0]);
    const termNames = terms.map((item) => item[0]);
    const conceptNames = concepts.map((item) => item.title);
    const questions = [];

    people.forEach(([name, description], index) => questions.push(makeQuestion(chapter, "MCQ", `Which personality is associated with this contribution: ${description}`, name, peopleNames.filter((item) => item !== name), `${name}: ${description}`, "Personalities", index < 2 ? "Easy" : "Medium")));
    dates.slice(0, 8).forEach(([year, event, description], index) => questions.push(makeQuestion(chapter, "MCQ", `In which year did this chapter event take place: ${event}?`, year, dateChoices.filter((item) => item !== year), description, "Important dates", index % 3 === 2 ? "Challenging" : "Easy")));
    terms.forEach(([term, definition], index) => questions.push(makeQuestion(chapter, "MCQ", `Which historical term matches this meaning: ${definition}`, term, termNames.filter((item) => item !== term), `${term}: ${definition}`, "Key terms", index > 2 ? "Medium" : "Easy")));
    events.forEach(([event, explanation], index) => questions.push(makeQuestion(chapter, "MCQ", `Which development is described here: ${explanation}`, event, eventNames.filter((item) => item !== event), explanation, "Events and causes", index > 2 ? "Challenging" : "Medium")));
    concepts.forEach((concept, index) => questions.push(makeQuestion(chapter, "MCQ", `Which core idea best fits this example: ${concept.example}`, concept.title, conceptNames.filter((item) => item !== concept.title), concept.text, "Concepts", index > 1 ? "Challenging" : "Medium")));
    chapter.topics.forEach((topic, index) => {
      const relevant = concepts[index % concepts.length];
      questions.push(makeQuestion(chapter, "MCQ", `A student is revising ${topic}. Which connection best helps explain it?`, relevant.title, conceptNames.filter((item) => item !== relevant.title), relevant.text, "Concept connections", index % 2 ? "Medium" : "Easy"));
    });
    chapter.causesEffects.slice(0, 3).forEach((item, index) => {
      const [cause, effect] = item.replace(/^Cause:\s*/i, "").split(/\.\s*Effect:\s*/i);
      const answer = effect ? effect.trim().replace(/[.]$/, "") : item;
      const distractors = chapter.causesEffects.filter((other) => other !== item).map((other) => other.split(/Effect:\s*/i)[1] || other).concat(chapter.events.map((entry) => entry.split(":")[0]), chapter.topics);
      questions.push(makeQuestion(chapter, "MCQ", `What was one result of this development: ${cause.trim()}?`, answer, distractors, item, "Cause and effect", index === 2 ? "Challenging" : "Medium"));
    });
    (chapter.completion?.places || []).forEach((place, index, places) => {
      const distractors = places.filter((item) => item.name !== place.name).map((item) => item.name).concat(eventNames);
      questions.push(makeQuestion(chapter, "MCQ", `Which place is connected with ${place.connection}?`, place.name, distractors, `${place.name}: ${place.significance}`, "Important places", index < 2 ? "Easy" : index < 4 ? "Medium" : "Challenging"));
    });
    (chapter.completion?.visuals || []).forEach((visual, index, visuals) => {
      const distractors = visuals.filter((item) => item.title !== visual.title).map((item) => item.title).concat(conceptNames, eventNames);
      questions.push(makeQuestion(chapter, "MCQ", `Which original visual best helps explain this historical development: ${visual.importance}`, visual.title, distractors, `${visual.title}: ${visual.shows}`, "Visual interpretation", index < 2 ? "Easy" : "Medium", { passage: `Original educational visual: ${visual.shows}` }));
      questions.push(makeQuestion(chapter, "MCQ", `What should a student remember when interpreting the visual titled “${visual.title}”?`, visual.remember[0], visual.remember.slice(1).concat(conceptNames), `${visual.remember.join(" ")} ${visual.importance}`, "Visual interpretation", index < 2 ? "Medium" : "Challenging", { passage: `Original educational visual: ${visual.shows}` }));
    });
    return questions;
  }

  function take(items, difficulty, count, predicate) {
    return items.filter((item) => item.difficulty === difficulty && (!predicate || predicate(item))).slice(0, count);
  }

  function curateQuestions(chapter, pools) {
    const mcq = pools.mcq;
    const standard = (item) => item.topic !== "Important places" && item.topic !== "Visual interpretation";
    const selectedMcq = [
      ...take(mcq, "Easy", 2, (item) => item.topic === "Important places"),
      ...take(mcq, "Easy", 2, (item) => item.topic === "Visual interpretation"),
      ...take(mcq, "Easy", 1, (item) => item.topic === "Important dates"),
      ...take(mcq, "Easy", 1, (item) => standard(item) && item.topic !== "Important dates"),
      ...take(mcq, "Medium", 1, (item) => item.topic === "Important places"),
      ...take(mcq, "Medium", 1, (item) => item.topic === "Visual interpretation"),
      ...take(mcq, "Medium", 1, standard),
      ...take(mcq, "Challenging", 1, (item) => item.topic === "Visual interpretation")
    ];
    const selected = [
      ...selectedMcq,
      ...take(pools.trueFalse, "Easy", 4),
      ...take(pools.trueFalse, "Medium", 1),
      ...take(pools.assertionReason, "Medium", 5),
      ...take(pools.cases, "Medium", 3),
      ...take(pools.cases, "Challenging", 2),
      ...take(pools.applications, "Medium", 3),
      ...take(pools.applications, "Challenging", 2)
    ];
    if (selected.length !== 30) throw new Error(`${chapter.id} quiz pools: MCQ ${selectedMcq.length}/10, T/F ${take(pools.trueFalse, "Easy", 4).length + take(pools.trueFalse, "Medium", 1).length}/5, A/R ${take(pools.assertionReason, "Medium", 5).length}/5, case ${take(pools.cases, "Medium", 3).length + take(pools.cases, "Challenging", 2).length}/5, application ${take(pools.applications, "Medium", 3).length + take(pools.applications, "Challenging", 2).length}/5.`);
    return selected;
  }

  function buildTrueFalse(chapter, mcqs) {
    const questions = [];
    const personQuestions = mcqs.filter((item) => item.topic === "Personalities");
    const termQuestions = mcqs.filter((item) => item.topic === "Key terms");
    const eventQuestions = mcqs.filter((item) => item.topic === "Events and causes");
    for (let index = 0; index < 5; index += 1) {
      const source = personQuestions[index % personQuestions.length];
      const trueStatement = `${source.options[source.answer]} is associated with ${source.explanation.split(": ").slice(1).join(": ")}`;
      questions.push(makeQuestion(chapter, "True/False", `True or false: ${trueStatement}`, true, [], `True. ${source.explanation}`, source.topic, index < 2 ? "Easy" : "Medium"));
      const term = termQuestions[index % termQuestions.length];
      const wrongTerm = term.options.find((option) => option !== term.options[term.answer]);
      const falseStatement = `${wrongTerm} means ${term.explanation.split(": ").slice(1).join(": ")}`;
      questions.push(makeQuestion(chapter, "True/False", `True or false: ${falseStatement}`, false, [], `False. ${term.options[term.answer]} is the correct term: ${term.explanation.split(": ").slice(1).join(": ")}`, term.topic, index < 2 ? "Easy" : "Medium"));
    }
    return questions.slice(0, 10).map((item, index) => index < 2 ? { ...item, topic: "People and terms" } : item).concat(eventQuestions.slice(0, 0));
  }

  function buildAssertionReason(chapter) {
    return relationFacts[chapter.id].map(([assertion, reason], index) => makeQuestion(chapter, "Assertion/Reason", `Assertion (A): ${assertion}\nReason (R): ${reason}`, true, [], `Both statements are accurate, and the reason explains the assertion. ${reason}`, index < 3 ? "Causes and effects" : "Concept connections", index > 6 ? "Challenging" : "Medium", { answer: 0 }));
  }

  function buildCases(chapter) {
    const concepts = chapter.enhanced.concepts;
    const eventChoices = chapter.events.map((entry) => entry.split(":")[0]);
    const caseConcepts = [...concepts, { title: chapter.topics[chapter.topics.length - 1], text: chapter.summary, example: chapter.events[chapter.events.length - 1] }].slice(0, 5);
    const conceptPrompts = ["Which key chapter idea is supported by this case?", "What does the evidence in this case best illustrate?", "Which concept helps explain the pattern described?", "Which main idea is reflected in this evidence?", "What historical concept is most relevant to this case?"];
    const eventPrompts = ["Which event is most closely connected to the case?", "Which chapter event best matches the development described?", "Where does this example fit in the chapter's event sequence?", "Which historical event provides the closest context?", "Which development is most directly linked to this evidence?"];
    return caseConcepts.flatMap((concept, index) => {
      const event = chapter.events[index % chapter.events.length].split(":")[0];
      const passage = `${concept.example} ${concept.text}`;
      const first = makeQuestion(chapter, "Case-based", conceptPrompts[index], concept.title, concepts.map((item) => item.title).filter((item) => item !== concept.title), `The case illustrates ${concept.title.toLowerCase()}: ${concept.text}`, "Case interpretation", index > 2 ? "Challenging" : "Medium", { passage });
      const second = makeQuestion(chapter, "Case-based", eventPrompts[index], event, eventChoices.filter((item) => item !== event), `${event} is the closest event connection to the case described.`, "Historical evidence", "Challenging", { passage });
      return [first, second];
    });
  }

  function buildApplications(chapter) {
    const concepts = chapter.enhanced.concepts;
    const scenarios = [
      (concept) => `A classmate lists dates about ${chapter.topics[0]} but cannot explain why they matter. Which study move would help most?`,
      (concept) => `A museum label shows an object associated with ${chapter.topics[1 % chapter.topics.length]}. Which idea helps place it in context?`,
      (concept) => `A source describes people with different goals joining one historical development. Which concept helps interpret this complexity?`,
      (concept) => `A student compares two developments from ${chapter.title}. Which lens best explains how their paths differ?`,
      (concept) => `A historical change is described as a simple switch from old to new. Which concept helps test that claim?`,
      (concept) => `A class is making a cause-and-effect map for ${chapter.topics[2 % chapter.topics.length]}. Which idea belongs at its centre?`,
      (concept) => `A newspaper account gives one point of view about ${chapter.topics[3 % chapter.topics.length]}. Which idea helps analyse its wider context?`,
      (concept) => `A student has evidence but no explanation. Which concept can organise the evidence into an argument?`,
      (concept) => `A timeline shows the same change affecting several groups. Which idea helps explain why their experiences may differ?`,
      (concept) => `A study group wants to connect a local event to a larger historical change. Which concept is the best starting point?`
    ];
    return scenarios.map((makePrompt, index) => {
      const concept = concepts[index % concepts.length];
      const distractors = concepts.filter((item) => item.title !== concept.title).map((item) => item.title);
      return makeQuestion(chapter, "Concept/Application", makePrompt(concept), concept.title, distractors, `${concept.title}: ${concept.text} Apply this idea to the evidence before drawing a conclusion.`, index < 4 ? "Applying concepts" : "Interpretation", index > 5 ? "Challenging" : "Medium");
    });
  }

  const allQuestions = [];
  for (const subject of data.subjects) {
    for (const chapter of subject.chapters) {
      if (!chapter.enhanced) continue;
      chapter.subjectId = subject.id;
      chapter.subjectName = subject.name;
      const mcqs = buildMcqs(chapter);
      const pools = {
        mcq: mcqs,
        trueFalse: buildTrueFalse(chapter, mcqs),
        assertionReason: buildAssertionReason(chapter),
        cases: buildCases(chapter),
        applications: buildApplications(chapter)
      };
      const questions = subject.id === "history" ? curateQuestions(chapter, pools) : [...pools.mcq, ...pools.trueFalse, ...pools.assertionReason, ...pools.cases, ...pools.applications];
      data.quiz[chapter.id] = questions;
      data.quizBank = data.quizBank || {};
      data.quizBank[chapter.id] = questions;
      allQuestions.push(...questions);
    }
  }
  data.questionBank = data.questionBank.filter((item) => !data.quizBank[item.chapterId]);
  data.questionBank.push(...allQuestions.map((item) => ({ ...item, marks: item.type === "MCQ" || item.type === "True/False" ? 1 : item.type === "Case-based" ? 4 : 3 })));
})();
