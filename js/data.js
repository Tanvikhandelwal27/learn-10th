(function () {
  const chapters = [
    {
      id: "history-1",
      number: 1,
      title: "The Rise of Nationalism in Europe",
      description: "Follow the ideas, revolutions, and political changes that reshaped Europe into a continent of nation-states.",
      topics: ["French Revolution", "Liberalism", "Unification of Germany", "Unification of Italy"],
      overview: "During the nineteenth century, shared ideas about citizenship, culture, and political belonging helped transform Europe. Revolutions and determined political leaders gradually reshaped a map once dominated by empires and small states.",
      fiveMinutes: "The French Revolution popularised the idea that a nation belonged to its citizens. Liberalism and nationalism spread, though voting rights remained limited. After failed revolutions in 1848, leaders including Cavour and Bismarck used diplomacy and war to unify Italy and Germany. National identity was also built through symbols, language, art, and shared stories.",
      people: ["Frederic Sorrieu: French artist whose prints imagined a world of democratic nations.", "Giuseppe Mazzini: Italian revolutionary who promoted a united republic.", "Count Camillo di Cavour: Piedmont-Sardinia's chief minister and an architect of Italian unification.", "Otto von Bismarck: Prussian leader who brought about German unification.", "Giuseppe Garibaldi: Volunteer fighter who helped unite southern Italy."],
      dates: ["1789: French Revolution begins.", "1815: Congress of Vienna redraws Europe's political map.", "1848: Revolutions challenge conservative rule across Europe.", "1861: The Kingdom of Italy is proclaimed.", "1871: German Empire is proclaimed at Versailles."],
      events: ["French Revolution: citizens and the nation replaced dynastic rule as central political ideas.", "Congress of Vienna: conservative powers restored monarchies and rearranged boundaries.", "Revolutions of 1848: liberals and nationalists demanded constitutions and national unity.", "German unification: Prussia used a sequence of conflicts to unite German states.", "Italian unification: diplomacy and popular campaigns brought separate regions together."],
      terms: ["Nation-state: a state whose people share a sense of political belonging.", "Liberalism: a political outlook emphasising individual freedom and equality before law.", "Conservatism: a preference for established institutions and gradual political change.", "Allegory: an image or story in which a figure represents an idea.", "Zollverein: a customs union that strengthened economic cooperation among German states."],
      causesEffects: ["Cause: absolute monarchy and unequal privileges. Effect: revolutionary demands for citizenship and constitutions.", "Cause: shared language, culture, and political aspirations. Effect: stronger national movements.", "Cause: Prussian power and Bismarck's diplomacy and wars. Effect: a united German Empire in 1871."],
      mnemonics: "For Italy's key names, remember Ma-Ca-Ga: Mazzini imagined it, Cavour planned it, Garibaldi fought for it.",
      visual: { label: "Europe's road to nation-states", kind: "route", points: ["Ideas of citizenship", "Popular revolutions", "Diplomacy and conflict", "New nation-states"] },
      story: ["In a continent divided among kingdoms and empires, people began imagining nations built around citizens.", "Conservative rulers tried to restore the old order, while liberals and nationalists pushed for constitutions and unity.", "Revolts broke out in 1848. Later, political leaders and popular volunteers pursued unification by different routes.", "Italy and Germany emerged as unified states during the nineteenth century.", "Nationalism permanently changed Europe's politics, but could also intensify competition between nations."],
      simple: ["People began asking for a country that represented its citizens, not just a royal family.", "Many wanted political rights, constitutions, and freedom from foreign or absolute rule.", "Revolutionaries, voters, diplomats, soldiers, and leaders such as Mazzini and Bismarck took part.", "Revolutions and carefully planned campaigns eventually united Italy and Germany.", "The nation-state became a powerful model for organising political life."],
      summary: "Nationalism helped people challenge dynastic empires and imagine states linked to citizenship and shared identity. Through revolution, diplomacy, and conflict, Italy and Germany became unified in the nineteenth century.",
      oneMinute: ["1789: revolution in France spreads citizenship ideas.", "1848: a wave of European revolutions.", "Remember Ma-Ca-Ga: Mazzini, Cavour, Garibaldi.", "Germany unifies under Prussian leadership; Italy unifies through diplomacy and popular action."]
    },
    {
      id: "history-2",
      number: 2,
      title: "Nationalism in India",
      description: "Explore how colonial rule, mass movements, and shared symbols shaped India's freedom struggle.",
      topics: ["Satyagraha", "Non-Cooperation", "Civil Disobedience", "Salt March"],
      overview: "Indian nationalism developed through many communities and campaigns. Under Gandhi's leadership, mass movements challenged colonial authority, while debates over representation and social justice shaped the struggle.",
      fiveMinutes: "The First World War brought economic hardship and coercive colonial policies. Gandhi's satyagraha offered non-violent resistance. The Rowlatt Act and Jallianwala Bagh intensified anger. The Non-Cooperation movement mobilised people but was withdrawn after Chauri Chaura. In 1930, Gandhi's Salt March launched Civil Disobedience. Different groups joined with distinct hopes, and negotiations did not resolve every disagreement.",
      people: ["Mahatma Gandhi: leader who used satyagraha and mass movements.", "Jawaharlal Nehru: Congress leader who supported complete independence.", "Muhammad Ali: Khilafat leader who worked with Gandhi in the early 1920s.", "B. R. Ambedkar: leader who campaigned against caste discrimination and for political rights.", "Alluri Sitarama Raju: led a tribal revolt in the Gudem Hills."],
      dates: ["1919: Rowlatt Act and Jallianwala Bagh massacre.", "1920: Non-Cooperation and Khilafat movements gather momentum.", "1922: Non-Cooperation movement is withdrawn after Chauri Chaura.", "1929: Lahore Congress calls for Purna Swaraj.", "1930: Salt March begins and Civil Disobedience spreads."],
      events: ["Rowlatt Act: colonial law allowed detention without trial, prompting protest.", "Jallianwala Bagh: troops fired on an unarmed gathering in Amritsar.", "Non-Cooperation: boycott of colonial institutions brought diverse groups into politics.", "Salt March: Gandhi's march to Dandi challenged the salt law.", "Civil Disobedience: people openly broke selected colonial laws and refused cooperation."],
      terms: ["Satyagraha: non-violent resistance based on truth and moral courage.", "Purna Swaraj: complete independence.", "Khilafat movement: campaign to support the Ottoman Caliph after the First World War.", "Civil Disobedience: deliberate, public refusal to obey an unjust law.", "Boycott: refusal to buy, use, or participate as a form of protest."],
      causesEffects: ["Cause: wartime inflation, forced recruitment, and hardship. Effect: broader resentment of colonial rule.", "Cause: the Rowlatt Act and the Jallianwala Bagh massacre. Effect: greater support for resistance.", "Cause: the salt tax applied to an everyday necessity. Effect: the Salt March became a widely understood act of protest."],
      mnemonics: "Keep the opening sequence in order: R-J-N-S: Rowlatt, Jallianwala, Non-Cooperation, Salt March.",
      visual: { label: "A movement grows", kind: "route", points: ["Local grievances", "Shared protest", "Mass non-cooperation", "Civil disobedience"] },
      story: ["Colonial policies and the hardships of war touched daily life in villages and cities.", "People protested new restrictions, and the violence at Jallianwala Bagh deepened opposition to British rule.", "Gandhi helped bring different communities into broad campaigns of non-cooperation and civil disobedience.", "The movements challenged colonial authority but also faced internal disagreements and changing conditions.", "India's independence struggle grew through mass participation as well as difficult conversations about equality and representation."],
      simple: ["British colonial rule affected how Indians were governed and what ordinary people could do.", "War hardship, unfair laws, and unequal treatment led many people to protest.", "Gandhi, Congress leaders, Khilafat supporters, workers, farmers, and many local organisers participated.", "Boycotts, marches, and refusing unjust laws put pressure on colonial rule.", "These movements made the independence struggle a mass movement, even though groups did not always agree."],
      summary: "Indian nationalism grew as diverse people responded to colonial policies and hardship. Satyagraha, Non-Cooperation, and Civil Disobedience widened participation, while questions of social justice and representation remained vital.",
      oneMinute: ["1919: Rowlatt Act and Jallianwala Bagh.", "1920: Non-Cooperation and Khilafat.", "1922: movement withdrawn after Chauri Chaura.", "1930: Salt March begins Civil Disobedience."]
    },
    {
      id: "history-3",
      number: 3,
      title: "The Making of a Global World",
      description: "Trace the long history of connections between trade, migration, technology, and world events.",
      topics: ["Silk Routes", "Indentured Labour", "The Great Depression", "Bretton Woods"],
      overview: "Globalisation is not only a recent story. Centuries of trade and migration connected distant societies, while empire, industrial change, and crises transformed how people and goods moved around the world.",
      fiveMinutes: "Trade routes connected regions long before modern factories. European conquest and disease transformed the Americas. Nineteenth-century migration, capital, and trade linked economies, often through coercive labour systems. The Great Depression disrupted lives worldwide. After the Second World War, international institutions built a new framework for monetary stability and reconstruction.",
      people: ["Christopher Columbus: his 1492 Atlantic voyage began sustained European contact with the Americas.", "Rinderpest-affected herders: African cattle keepers whose livelihoods were deeply disrupted by the epidemic.", "Henry Ford: American industrialist associated with the assembly-line method.", "John Maynard Keynes: economist whose ideas influenced post-war economic planning."],
      dates: ["1492: Columbus reaches the Americas.", "1840s: Irish Potato Famine prompts large-scale migration.", "1880s: rinderpest spreads through Africa.", "1929: the Great Depression begins.", "1944: Bretton Woods conference establishes new financial institutions."],
      events: ["Silk Routes: networks carried goods, ideas, religions, and technologies across continents.", "Conquest of the Americas: disease and colonisation profoundly changed Indigenous societies.", "Indenture: workers migrated under contracts that often brought harsh and restrictive conditions.", "Great Depression: falling trade and production caused widespread unemployment and hardship.", "Bretton Woods system: post-war institutions sought greater monetary cooperation and stability."],
      terms: ["Globalisation: growing connections between people, economies, and places around the world.", "Indentured labour: contracted work requiring a person to serve for an agreed period.", "Tariff: a tax on goods moving between countries.", "Assembly line: production method in which work is divided into sequential steps.", "Bretton Woods: the post-war framework for international monetary cooperation."],
      causesEffects: ["Cause: long-distance trade in valuable goods. Effect: contact and exchange across Afro-Eurasian routes.", "Cause: colonial demand for labour on plantations and farms. Effect: coerced migration under indenture.", "Cause: financial panic and reduced demand. Effect: the Depression spread through trade and unemployment."],
      mnemonics: "Global links travel in three ways: Goods, People, Ideas. Ask which crossed each route or crisis.",
      visual: { label: "Connections across a changing world", kind: "route", points: ["Trade routes", "Empire and migration", "Industrial production", "Global crisis and cooperation"] },
      story: ["Long before aeroplanes and the internet, merchants and travellers connected distant regions.", "European expansion changed populations and economies, often through violence and forced labour.", "New transport and industrial systems increased trade and migration across oceans.", "The Great Depression showed how a crisis in one economy could affect people worldwide.", "After the Second World War, countries created shared financial institutions to support recovery."],
      simple: ["People, products, money, and ideas have travelled between regions for a very long time.", "Trade, empire, new transport, and demand for workers made those connections grow.", "Merchants, migrants, colonisers, workers, and governments were involved.", "These connections carried new opportunities but also disease, exploitation, and economic crises.", "The story helps us understand why events in one part of the world can affect many others."],
      summary: "The global economy grew through older trade networks, empire, labour migration, industrialisation, and technology. The Depression exposed the risks of economic connections; post-war institutions sought to manage them.",
      oneMinute: ["Silk Routes carried goods and ideas.", "Indenture moved workers under restrictive contracts.", "1929: the Great Depression shakes world trade.", "1944: Bretton Woods conference plans post-war monetary cooperation."]
    },
    {
      id: "history-4",
      number: 4,
      title: "The Age of Industrialisation",
      description: "Discover how factory production grew and why industrial change followed more than one path.",
      topics: ["Proto-industrialisation", "Factories", "Hand labour", "Indian textiles"],
      overview: "Industrialisation was a gradual and varied process, not a sudden replacement of all handwork by machines. Production grew in homes, workshops, and factories, while Indian industries adapted to changing markets and colonial policies.",
      fiveMinutes: "Before factories, merchants organised production in rural households. Mechanised cotton mills expanded in Britain, but hand labour remained useful for many tasks and products. Indian weavers faced competition from machine-made imports and colonial rules, while new Indian entrepreneurs built mills. Advertising and labels helped manufacturers attract buyers.",
      people: ["James Hargreaves: inventor associated with the spinning jenny.", "Richard Arkwright: entrepreneur associated with the factory system.", "Dwarkanath Tagore: early Indian industrial entrepreneur.", "Jamsetjee Jejeebhoy: Parsi merchant and entrepreneur.", "Jamsetjee Tata: industrialist associated with the growth of Indian enterprise."],
      dates: ["1733: John Kay patents the flying shuttle.", "1764: the spinning jenny is developed.", "1854: the first cotton mill in Bombay is established.", "1855: the first jute mill in Bengal is set up."],
      events: ["Proto-industrialisation: merchants organised production outside factories, often in rural homes.", "Factory growth: machinery concentrated workers and production in specialised buildings.", "Indian mill expansion: entrepreneurs established textile mills in Bombay and other centres.", "Industrial advertising: labels and images built product recognition and promoted sales."],
      terms: ["Proto-industrialisation: large-scale production for markets before factory industrialisation.", "Spinning jenny: a machine that allowed several threads to be spun at once.", "Gomastha: an East India Company agent who supervised weavers and deliveries.", "Fly shuttle: a weaving device that increased the speed of work.", "Jobber: a person who helped recruit workers for factories."],
      causesEffects: ["Cause: expanding markets and merchant capital. Effect: more production organised in rural households.", "Cause: mechanised British cloth. Effect: pressure on many Indian handloom producers.", "Cause: varied product demand and flexible skilled work. Effect: hand labour persisted alongside machines."],
      mnemonics: "Production moved from Homes to Mills, but Hands stayed: machines did not replace every worker.",
      visual: { label: "Production changes over time", kind: "route", points: ["Home-based production", "Workshop and merchant networks", "Factories and machines", "Mixed industrial economy"] },
      story: ["Merchants wanted more goods but did not begin by putting every worker in a factory.", "Rural households produced goods through networks organised by merchants.", "New machinery and factories changed how many products were made, particularly textiles.", "Hand production and factory work continued side by side as markets and technologies changed.", "Industrialisation was uneven: its effects differed between Britain, India, workers, and producers."],
      simple: ["Before big factories, merchants often arranged for families to make goods at home.", "Growing trade made merchants seek faster and larger-scale production.", "Workers, merchants, inventors, mill owners, and colonial officials influenced change.", "Some jobs moved into factories, but handwork remained useful and common.", "Industrialisation was a long, uneven change, not one simple switch to machines."],
      summary: "Industrialisation evolved through home production, workshops, and factories. Machinery changed some industries, but hand labour persisted. Colonial trade and new Indian enterprises made the effects of industrial growth uneven.",
      oneMinute: ["Proto-industrialisation came before factories.", "Factories did not eliminate hand production.", "British machine-made cloth challenged Indian handloom work.", "1854: first cotton mill in Bombay."]
    },
    {
      id: "history-5",
      number: 5,
      title: "Print Culture and the Modern World",
      description: "See how printing transformed access to ideas, public debate, religion, and everyday reading.",
      topics: ["Printing in East Asia", "The Gutenberg press", "Print and reform", "Censorship"],
      overview: "Printing reshaped how ideas could travel. Printing technologies developed in East Asia before spreading to Europe and beyond. Cheaper books and newspapers widened reading, encouraged public debate, and also prompted efforts at censorship.",
      fiveMinutes: "Woodblock printing developed in East Asia centuries before the European press. Gutenberg's innovations helped printing spread through Europe. Printed books multiplied, supporting religious debates and scientific exchange. In India, newspapers, pamphlets, and vernacular publications reached broader audiences. Authorities sometimes responded with censorship, including the Vernacular Press Act.",
      people: ["Johann Gutenberg: European printer associated with movable-type printing.", "Martin Luther: religious reformer whose writings spread rapidly in print.", "Raja Rammohun Roy: reformer who published newspapers and pamphlets.", "Gangadhar Bhattacharya: early Indian publisher of a Bengali weekly.", "James Augustus Hickey: publisher of an early printed English newspaper in India."],
      dates: ["c. 868: the Diamond Sutra is printed in China.", "c. 1450: Gutenberg develops his printing press in Europe.", "1556: the first printing press arrives in Goa.", "1780: Hickey's Bengal Gazette begins publication.", "1878: the Vernacular Press Act restricts Indian-language newspapers."],
      events: ["East Asian woodblock printing: pages were carved and printed from wooden blocks.", "Gutenberg press: movable type made it possible to print books in much larger numbers.", "Reformation: printed arguments helped religious debate cross regional borders.", "Print in India: newspapers and pamphlets carried reform debates and political ideas.", "Vernacular Press Act: colonial authorities sought to control Indian-language publications."],
      terms: ["Manuscript: a text written by hand.", "Movable type: reusable individual letters arranged for printing.", "Vernacular: a language commonly spoken in a region.", "Censorship: official restriction or control of published information.", "Print revolution: major changes in producing, circulating, and reading printed works."],
      causesEffects: ["Cause: reusable movable type. Effect: quicker production of many copies of a text.", "Cause: lower printing costs and more reading material. Effect: broader public discussion.", "Cause: critical political writing. Effect: greater colonial censorship of newspapers."],
      mnemonics: "Print travelled East to Europe to India: blocks, press, newspapers.",
      visual: { label: "A growing world of print", kind: "route", points: ["East Asian woodblocks", "European movable type", "Print shops and newspapers", "Wider public debate"] },
      story: ["For centuries, handwritten manuscripts took time and skill to produce.", "Printing methods developed in East Asia, and movable type spread through Europe.", "More copies of books and newspapers circulated, carrying debate to wider audiences.", "In India, newspapers and pamphlets promoted reform and discussed public affairs.", "As printed debate expanded, authorities tried to control what people could publish."],
      simple: ["Before printing, books were copied by hand and were harder to produce in large numbers.", "Printing made it possible to produce and share many copies more quickly.", "Printers, writers, reformers, readers, religious leaders, and governments all shaped print culture.", "Books and newspapers helped ideas reach more people and start public debates.", "Print expanded access to information, while censorship limited some voices."],
      summary: "Printing evolved from East Asian woodblocks to European movable type and Indian newspapers. More printed material widened reading and debate, while religious and political authorities also sought to restrict publication.",
      oneMinute: ["c. 868: Diamond Sutra in China.", "c. 1450: Gutenberg's European press.", "1556: printing press arrives in Goa.", "1878: Vernacular Press Act restricts Indian-language newspapers."]
    }
  ];

  const quiz = {
    "history-1": [
      { question: "Which event popularised the idea that sovereignty belonged to a nation of citizens?", options: ["French Revolution", "Congress of Vienna", "Crimean War", "Bretton Woods conference"], answer: 0, explanation: "The French Revolution helped popularise citizenship and the nation as a source of political authority." },
      { question: "Who was the Prussian leader associated with German unification?", options: ["Giuseppe Mazzini", "Otto von Bismarck", "Giuseppe Garibaldi", "Frederic Sorrieu"], answer: 1, explanation: "Bismarck used Prussian power, diplomacy, and conflict to unite German states." },
      { question: "What was the Zollverein?", options: ["A German customs union", "An Italian republic", "A French assembly", "A peace treaty"], answer: 0, explanation: "The customs union strengthened economic cooperation among German states." }
    ],
    "history-2": [
      { question: "What did satyagraha emphasise?", options: ["Non-violent resistance", "Secret military rule", "Absolute monarchy", "Economic isolation"], answer: 0, explanation: "Satyagraha used truth and non-violent resistance to challenge injustice." },
      { question: "Which act prompted widespread protest in 1919?", options: ["Vernacular Press Act", "Rowlatt Act", "Regulating Act", "Pitt's India Act"], answer: 1, explanation: "The Rowlatt Act allowed detention without trial and led to protests." },
      { question: "Which march challenged the colonial salt law in 1930?", options: ["Dandi March", "Salt Tax March of 1919", "Bardoli March", "Champaran March"], answer: 0, explanation: "Gandhi's march to Dandi turned the salt law into a focus of Civil Disobedience." }
    ],
    "history-3": [
      { question: "What moved along the Silk Routes besides goods?", options: ["Only armies", "Ideas and religions", "Factory machines only", "Printed newspapers only"], answer: 1, explanation: "Trade routes also carried ideas, religions, technologies, and cultural practices." },
      { question: "In which year did the Great Depression begin?", options: ["1848", "1885", "1929", "1944"], answer: 2, explanation: "The Great Depression began in 1929 and affected economies around the world." },
      { question: "What was a key purpose of the Bretton Woods framework?", options: ["International monetary cooperation", "Abolishing all trade", "Creating the Silk Routes", "Ending industrial production"], answer: 0, explanation: "The post-war institutions aimed to support financial stability and economic cooperation." }
    ],
    "history-4": [
      { question: "What does proto-industrialisation describe?", options: ["Production for markets before factory industrialisation", "The end of all trade", "Only modern automated factories", "A ban on home production"], answer: 0, explanation: "Merchants organised large-scale production outside factories, often in rural homes." },
      { question: "Which group often supervised weavers for the East India Company?", options: ["Jobbers", "Gomasthas", "Zamindars", "Guild masters"], answer: 1, explanation: "Gomasthas were company agents who supervised weavers and deliveries." },
      { question: "Which statement best describes industrialisation?", options: ["Machines immediately replaced every handworker", "It was a gradual process with hand and machine production side by side", "It happened only in India", "It ended the demand for skilled work"], answer: 1, explanation: "Industrial change was uneven and hand production continued alongside factories." }
    ],
    "history-5": [
      { question: "Which technology developed in East Asia before Europe's printing press?", options: ["Woodblock printing", "The telegraph", "The typewriter", "The steam engine"], answer: 0, explanation: "Woodblock printing was used in East Asia centuries before Gutenberg's press." },
      { question: "What was a key effect of movable type?", options: ["It made texts impossible to copy", "It helped produce many copies more quickly", "It ended newspaper publishing", "It banned vernacular writing"], answer: 1, explanation: "Reusable type allowed printers to produce books and other texts in larger numbers." },
      { question: "What did the Vernacular Press Act of 1878 seek to restrict?", options: ["Indian-language newspapers", "Factory production", "Ocean trade", "Handwritten manuscripts"], answer: 0, explanation: "The colonial law was used to control publications in Indian languages." }
    ]
  };

  const subjects = [
    { id: "history", name: "History", shortName: "History", icon: "fa-book-open", color: "coral", status: "available", description: "People, ideas, and events that shaped the modern world.", bookTitle: "India and the Contemporary World - II", chapters },
    { id: "geography", name: "Geography", shortName: "Geography", icon: "fa-earth-asia", color: "green", status: "coming-soon", description: "Explore the places, resources, and landscapes that shape our world.", chapters: [] },
    { id: "civics", name: "Political Science / Civics", shortName: "Civics", icon: "fa-landmark", color: "blue", status: "coming-soon", description: "Discover democracy, power, and how people shape public life.", chapters: [] },
    { id: "economics", name: "Economics", shortName: "Economics", icon: "fa-coins", color: "yellow", status: "coming-soon", description: "Understand development, livelihoods, and our changing economy.", chapters: [] }
  ];

  const timeline = subjects.flatMap((subject) => subject.chapters.flatMap((chapter) => (chapter.dates || []).map((entry) => {
    const split = entry.split(": ");
    const event = split[1] || entry;
    const firstWord = event.split(" ")[0].toLowerCase();
    return { date: split[0], event, description: (chapter.events || []).find((item) => item.toLowerCase().includes(firstWord)) || chapter.summary || chapter.description, chapterId: chapter.id, chapterTitle: chapter.title, subjectId: subject.id, subjectName: subject.name };
  })));

  const questionBank = subjects.flatMap((subject) => subject.chapters.flatMap((chapter) => {
    const mcqs = (quiz[chapter.id] || []).map((item) => ({ chapterId: chapter.id, chapterTitle: chapter.title, subjectId: subject.id, subjectName: subject.name, marks: 1, type: "MCQ", question: item.question, answer: item.options[item.answer] }));
    const textQuestions = [
      { marks: 2, type: "Very Short Answer", question: `Name one important idea, person, or event from ${chapter.title}.` },
      { marks: 3, type: "Short Answer", question: `Explain one major change explored in ${chapter.title}.` },
      { marks: 5, type: "Long Answer", question: `Describe the key developments and their impact in ${chapter.title}.` },
      { marks: 4, type: "Case Based", question: `Using one example, explain how people, ideas, or events shaped the developments in ${chapter.title}.` }
    ].map((item) => ({ ...item, chapterId: chapter.id, chapterTitle: chapter.title, subjectId: subject.id, subjectName: subject.name }));
    return mcqs.concat(textQuestions);
  }));

  window.LEARNING_DATA = {
    className: "Class 10",
    courseName: "Social Science",
    subjects,
    quiz,
    timeline,
    questionBank,
    findSubject(subjectId) { return subjects.find((subject) => subject.id === subjectId); },
    findChapter(chapterId) {
      for (const subject of subjects) {
        const chapter = subject.chapters.find((item) => item.id === chapterId);
        if (chapter) return { ...chapter, subjectId: subject.id, subjectName: subject.name, bookTitle: subject.bookTitle || "" };
      }
      return null;
    }
  };
})();
