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

  const geographyChapters = [
    {
      id: "geography-1",
      number: 1,
      title: "Resources and Development",
      description: "Classify resources, understand planning, and discover why sustainable use matters for development.",
      topics: ["Resource classification", "Resource planning", "Land degradation", "Sustainable development"],
      overview: "Resources are valuable because they support production, livelihoods, and human progress. They must be identified, planned, and used carefully so that development does not harm the future.",
      fiveMinutes: "Resources are natural and human-made products useful to people. They can be classified by origin, exhaustibility, and ownership. Planning and conservation matter because overuse can lead to land degradation and depletion. Sustainable development balances present needs with future needs.",
      people: ["Planners and policymakers: design resource plans and usage strategies.", "Farmers and communities: depend on land, water, forests, and soil health.", "Future generations: depend on resources remaining available and productive."],
      dates: ["1987: Brundtland Commission defines sustainable development.", "1992: Earth Summit strengthens global concern for resource conservation.", "2015: Sustainable Development Goals highlight balanced human and environmental development."],
      events: ["Resource planning: states create strategies to match resource use with local needs.", "Land degradation: overuse, deforestation, and poor farming practices damage the land.", "Conservation movement: sustainable use becomes a key concern in national planning."],
      terms: ["Resource: a natural or human-made thing useful to people.", "Conservation: careful use and protection of resources.", "Sustainable development: meeting present needs without harming future generations.", "Land degradation: decline in land quality because of overuse or bad practice.", "Resource planning: designing use, storage, and conservation strategies."],
      causesEffects: ["Cause: growing population and rising consumption. Effect: pressure on soil, water, and forests.", "Cause: overuse without conservation. Effect: land becomes less fertile and productive.", "Cause: unequal distribution of resources. Effect: planning ensures fairness and better access."],
      mnemonics: "PLAN = People, Land, Action, Need. Good resource use starts with planning and ends with sustainability.",
      visual: { label: "Resource use and care", kind: "map", points: ["Identify resources", "Plan use", "Protect quality", "Use sustainably"] },
      story: ["People need resources for work, food, shelter, and transport.", "Different regions have different resource strengths and challenges.", "Resources can be damaged by careless use or by overdependence on a single source.", "Careful planning helps communities use resources without exhausting them."],
      simple: ["Resources are useful to people.", "They need planning, use, and conservation.", "Not all places have the same resources.", "Development works best when resources are used wisely and fairly."],
      summary: "Resources are vital for development, but they are not unlimited. Classifying, planning, and conserving them is essential for present needs and future survival.",
      oneMinute: ["Resources are useful materials and assets.", "Planning and conservation protect land and water.", "Sustainable development thinks about both present and future needs."]
    },
    {
      id: "geography-2",
      number: 2,
      title: "Forest and Wildlife Resources",
      description: "Explore biodiversity, conservation, and the relationship between people and natural ecosystems.",
      topics: ["Biodiversity", "Conservation", "Community participation", "Protected areas"],
      overview: "Forests and wildlife are not just scenic assets; they are vital ecological systems. Communities, governments, and conservationists all play roles in protecting biodiversity and safeguarding the services nature provides.",
      fiveMinutes: "Forests support biodiversity, climate stability, and livelihoods. Wildlife and plants form part of ecological systems that help maintain soil, water, and food chains. Conservation can be community-based or state-led, and both are needed. The chapter shows how local knowledge and national decisions can protect forests and wildlife together.",
      people: ["Forest communities: often depend on forests for fuel, food, fodder, and work.", "Governments: create protected areas and laws for conservation.", "Conservationists: work to protect biodiversity and endangered species."],
      dates: ["1972: India launches Project Tiger.", "1980s: conservation programmes expand across protected areas.", "2006: the National Forest Policy emphasises ecological security."],
      events: ["Protected areas: national parks and sanctuaries conserve wildlife habitats.", "Community conservation: local participation helps protect forests and species.", "Biodiversity loss: deforestation and hunting reduce ecological balance."],
      terms: ["Biodiversity: variety of plants, animals, and organisms in an ecosystem.", "Protected area: region designated for conservation of wildlife and habitat.", "Conservation: planned protection and wise use of resources.", "Ecosystem: a natural community of living things and their environment.", "Flora and fauna: plant and animal life in a region."],
      causesEffects: ["Cause: crop expansion and logging. Effect: forest cover shrinks and habitats are disturbed.", "Cause: community participation and legal protections. Effect: better conservation outcomes.", "Cause: biodiversity loss. Effect: ecosystems become less stable and less resilient."],
      mnemonics: "The forest is a living web: plants, animals, water, and people are all connected.",
      visual: { label: "Living systems in balance", kind: "network", points: ["Forests", "Wildlife", "Water", "People"] },
      story: ["Forests are homes to many species and nourish the soil and water cycle.", "A healthy environment supports people through food, medicine, and climate stability.", "Loss of biodiversity weakens ecosystems and reduces their ability to recover.", "When communities and governments act together, conservation becomes more effective."],
      simple: ["Forests are not only trees; they are living ecosystems.", "Wildlife and plant life depend on one another in food webs.", "People rely on forests for many needs.", "Conservation keeps biodiversity and ecological balance alive."],
      summary: "Forests and wildlife are essential ecological resources. Protection requires legal measures, community participation, and careful balancing between development and conservation.",
      oneMinute: ["Biodiversity is the variety of life in an area.", "Conservation helps protect habitats and species.", "Protected areas and local participation strengthen forest protection."]
    },
    {
      id: "geography-3",
      number: 3,
      title: "Water Resources",
      description: "Understand water scarcity, conservation, and the need for sustainable water management.",
      topics: ["Water scarcity", "Rainwater harvesting", "Multi-purpose projects", "Sustainable use"],
      overview: "Water is essential for life, agriculture, and industry. Yet unequal distribution, groundwater depletion, and poor management create scarcity. Sustainable water use requires conservation, planning, and local action.",
      fiveMinutes: "India's water resources are unevenly distributed by geography and season. Dams, canals, and rainwater harvesting help store and distribute water. Yet water is being overused, especially in agriculture and urban areas. Conservation strategies include treating wastewater, fixing leakages, and improving rainwater harvesting.",
      people: ["Farmers: rely on irrigation and groundwater for crops.", "Urban households: depend on piped water and storage systems.", "Engineers and planners: design water infrastructure and policies."],
      dates: ["1970s: water harvesting gains importance across Indian states.", "1980s: modern irrigation and watershed development expand.", "2015: water sustainability remains central to development goals."],
      events: ["Dams and canals: store and distribute water across regions.", "Groundwater depletion: overuse raises the risk of long-term scarcity.", "Water conservation: rainwater harvesting and community systems protect local supplies."],
      terms: ["Water scarcity: shortage of usable water for communities and agriculture.", "Rainwater harvesting: collecting and storing rainwater for later use.", "Groundwater: water stored below the earth's surface.", "Irrigation: supplying water to crops.", "Watershed development: conserving soil and water in a local area."],
      causesEffects: ["Cause: growing demand and uneven rainfall. Effect: water scarcity in many regions.", "Cause: over-extraction of groundwater. Effect: falling water tables and crop stress.", "Cause: water conservation measures. Effect: better supply and reduced vulnerability."],
      mnemonics: "Save water before the well goes dry: harvest, recharge, use carefully.",
      visual: { label: "Water cycle to water security", kind: "route", points: ["Rainfall", "Storage", "Distribution", "Careful use"] },
      story: ["Water is not equally available everywhere or in every season.", "People often treat water as abundant until scarcity appears during drought or heat.", "Efficient use and storage help protect communities and agriculture.", "Sustainable management is a community and government responsibility alike."],
      simple: ["Water is essential for life and livelihoods.", "Some places face more water stress than others.", "Storage and conservation can reduce scarcity.", "Sustainable management protects both people and ecosystems."],
      summary: "Water is a precious resource that needs planning and conservation. Scarcity can be reduced through improved management, rainwater harvesting, and careful use by communities and governments.",
      oneMinute: ["Water scarcity means shortage of usable water.", "Rainwater harvesting and recharge help conserve water.", "Dams and irrigation support agriculture but need sustainable management."]
    },
    {
      id: "geography-4",
      number: 4,
      title: "Agriculture",
      description: "Study the major farming systems, crops, and agricultural practices that shape Indian society and economy.",
      topics: ["Types of farming", "Crop seasons", "Irrigation", "Food security"],
      overview: "Agriculture remains central to India's economy and employment. Different regions grow different crops depending on climate, soil, and irrigation. Sound agricultural planning improves productivity and supports food security.",
      fiveMinutes: "India has several farming systems, including primitive subsistence, intensive subsistence, and commercial farming. Crops are grown in Kharif, Rabi, and Zaid seasons depending on rainfall and temperature. Irrigation, improved seeds, and modern techniques can increase output, but sustainability is equally important.",
      people: ["Farmers: directly produce crops and manage land and water.", "Agricultural workers: provide the labour needed to cultivate and harvest.", "Government agencies: support irrigation, seeds, and rural policy."],
      dates: ["1950s: Green Revolution expands high-yield seeds and irrigation.", "1960s: wheat and rice production increase sharply in many regions.", "2000s: crop diversification and sustainability gain attention."],
      events: ["Green Revolution: improved seeds and irrigation boosted yields in some regions.", "Crop seasons: Kharif, Rabi, and Zaid each shape agricultural planning.", "Food security: policies aim to support nutrition and stability in output."],
      terms: ["Agriculture: activity involving cultivation of crops and rearing of animals.", "Kharif: monsoon sowing season.", "Rabi: winter crop season.", "Zaid: short summer crop season.", "Food security: ensuring enough food for people at all times."],
      causesEffects: ["Cause: monsoon dependence. Effect: water availability strongly shapes agricultural success.", "Cause: modern inputs and irrigation. Effect: output rises in many regions.", "Cause: environmental stress and soil depletion. Effect: long-term productivity may fall."],
      mnemonics: "Kharif, Rabi, Zaid: seasons follow the rain, the winter, and the gap.",
      visual: { label: "Crop seasons and farm systems", kind: "routes", points: ["Rainy season", "Winter crop", "Summer crop", "Food supply"] },
      story: ["Agriculture is shaped by climate, soil, water, and farmer knowledge.", "Different crops suit different seasons and regions.", "Modern tools and irrigation can improve output, but sustainability matters.", "Food security depends not only on growing more but also on fair access and stable supply."],
      simple: ["Agriculture depends on climate and water.", "Different crops grow in different seasons.", "Inputs and irrigation can improve production.", "A strong farm system supports food security and rural livelihoods."],
      summary: "Agriculture is the mainstay of Indian livelihoods. Crop planning, irrigation, and sustainable practices help produce food while protecting soil and environment.",
      oneMinute: ["Kharif, Rabi, and Zaid are crop seasons.", "Irrigation and seeds improve productivity.", "Food security requires stable supply and access." ]
    },
    {
      id: "geography-5",
      number: 5,
      title: "Minerals and Energy Resources",
      description: "Learn how minerals and energy sources support economic activity and why their use must be planned well.",
      topics: ["Mineral distribution", "Conventional energy", "Non-conventional energy", "Conservation"],
      overview: "Minerals and energy are essential for industries, transport, electricity, and modern living. Their distribution is uneven, and overuse can lead to depletion. Therefore, efficient extraction and renewable sources are increasingly important.",
      fiveMinutes: "Minerals are found in different forms and locations, and some are more abundant than others. Coal, petroleum, and natural gas are conventional energy resources. Solar, wind, and tidal energy are increasingly important as non-conventional sources. A sustainable approach balances extraction, efficiency, and long-term availability.",
      people: ["Miners and workers: extract minerals for industry and energy.", "Industries: use minerals and fuels in manufacturing and transport.", "Governments and engineers: shape energy planning and conservation policy."],
      dates: ["1850s: coal begins to dominate industrial energy use.", "1950s: large-scale oil and gas development strengthens energy industries.", "2000s: renewable energy expands globally and nationally."],
      events: ["Resource extraction: minerals are mined and converted into industrial inputs.", "Energy shift: countries expand solar, wind, and hydro energy to reduce dependence on fossil fuels.", "Energy conservation: efficient use reduces waste and lowers pressure on limited resources."],
      terms: ["Mineral: naturally occurring substance with commercial value.", "Conventional energy: traditional sources such as coal, oil, and gas.", "Non-conventional energy: renewable sources such as solar and wind.", "Conservation: reducing waste and preserving resources for the future.", "Mining: extraction of minerals from the earth."],
      causesEffects: ["Cause: industrial demand and urban growth. Effect: higher energy consumption.", "Cause: uneven mineral distribution. Effect: some regions become resource-rich while others depend on imports.", "Cause: renewable energy investment. Effect: reduced dependence on non-renewable sources."],
      mnemonics: "Energy is not only fuel; it is future security.",
      visual: { label: "Energy sources for development", kind: "network", points: ["Coal", "Hydro", "Solar", "Wind"] },
      story: ["Minerals help build roads, factories, and machines.", "Energy runs homes, transport, and industry.", "Because resources are unevenly spread, countries plan around imports and local supply.", "Using renewable sources helps reduce pressure on finite fossil fuels."],
      simple: ["Minerals and energy support modern life.", "Some resources are limited and unevenly found.", "Renewable energy adds a more sustainable future path.", "Careful use protects resources for future generations."],
      summary: "Minerals and energy are central to economic development. Their extraction and consumption must be planned carefully so that growth remains efficient, affordable, and sustainable.",
      oneMinute: ["Minerals are raw materials for industry.", "Coal, oil, and gas are conventional energy sources.", "Solar and wind are important renewable alternatives."]
    },
    {
      id: "geography-6",
      number: 6,
      title: "Manufacturing Industries",
      description: "Understand why manufacturing matters, where industries grow, and how industry affects employment and environment.",
      topics: ["Industrial location", "Industrial pollution", "Employment", "Industrial growth"],
      overview: "Manufacturing transforms raw materials into goods for markets. Industry creates jobs, increases output, and connects regions through transport and trade. But factories can also cause pollution and social problems if unchecked.",
      fiveMinutes: "Industrial location depends on raw material supply, market access, labour, power, and transport. Large industrial centres often generate jobs and investment, but they can also contribute to air, water, and soil pollution. Governments and industries increasingly focus on cleaner technology and efficient resource use.",
      people: ["Workers: form the labour force for manufacturing activities.", "Industrialists: organise production and investment.", "Government planners: shape industrial policy and environmental standards."],
      dates: ["Industrial growth accelerates in the twentieth century.", "Modern industrial policy increasingly includes environmental controls.", "Transport and technology strengthen industrial networks and markets."],
      events: ["Factory production: raw materials become finished goods.", "Industrial clustering: industries grow where transport, labour, and infrastructure help productivity.", "Pollution concerns: emissions and waste require regulations and cleaner methods."],
      terms: ["Manufacturing: turning raw materials into useful products.", "Industrial location: place where a factory or industry is set up.", "Pollution: harmful release into air, water, or land.", "Employment: jobs created by industrial activity.", "Infrastructure: transport, power, and communication systems that support production."],
      causesEffects: ["Cause: access to labour, power, and transport. Effect: industries cluster in suitable areas.", "Cause: industrial production without controls. Effect: pollution and environmental damage.", "Cause: cleaner technology and planning. Effect: more sustainable industrial growth."],
      mnemonics: "Industry grows where labour, power, and transport meet.",
      visual: { label: "Industries and movement", kind: "factory", points: ["Raw materials", "Factory", "Transport", "Market"] },
      story: ["Factories change raw materials into goods used by people and businesses.", "Good locations help industries produce efficiently.", "Large-scale industrialisation can create jobs but also social and environmental costs.", "Sustainable industrial planning balances growth with safety and environmental protection."],
      simple: ["Industry adds value to raw materials.", "Good infrastructure supports industrial growth.", "Factory work creates jobs but can harm the environment if not controlled.", "Balanced industrial policy gives both growth and protection."],
      summary: "Manufacturing is essential for economic growth and jobs. Yet it must be planned with transport, labour, and environmental care so that industrial development supports society rather than harming it.",
      oneMinute: ["Manufacturing adds value and creates jobs.", "Location depends on materials, power, labour, and transport.", "Pollution control is central to sustainable industry."]
    },
    {
      id: "geography-7",
      number: 7,
      title: "Lifelines of National Economy",
      description: "Trace the vital links between transport, communication, trade, and the movement of goods and ideas across the country.",
      topics: ["Transport", "Communication", "Trade", "National integration"],
      overview: "Transport and communication connect people, products, and markets across distant regions. They are the lifelines of the national economy because they support trade, work, mobility, and governance.",
      fiveMinutes: "Roads, railways, ports, and airways help move people and goods. Communication networks carry information and link different regions. Trade connects production with consumption and helps national integration. Economic development depends on transport networks and communication being accessible, efficient, and reasonably balanced.",
      people: ["Traders: move goods across regions and markets.", "Workers: rely on transport and communication for jobs and livelihoods.", "Government agencies: plan routes, services, and connectivity."],
      dates: ["Transportation and communication networks expand steadily through the twentieth century.", "Ports and railways remain central to national trade and economic movement.", "Digital communication increasingly speeds information and services across the country."],
      events: ["Road and rail networks connect regions and markets.", "Ports and airports support trade and movement.", "Communication networks enable faster decision making and information spread."],
      terms: ["Transport: system for moving people and goods.", "Communication: exchange of information between people or places.", "Trade: exchange of goods and services.", "Infrastructure: essential services and networks supporting economic activity.", "National integration: linking regions and communities within a country."],
      causesEffects: ["Cause: economic activity across regions. Effect: demand for efficient transport and communication.", "Cause: advances in technology. Effect: faster information exchange and market coordination.", "Cause: better connections. Effect: stronger national integration and growth."],
      mnemonics: "Movement + information + trade = connected economy.",
      visual: { label: "National economic links", kind: "route", points: ["Roads", "Railways", "Ports", "Communication"] },
      story: ["A country becomes stronger when products, workers, and information can move across it easily.", "Transport and communication reduce distance and help markets function.", "Trade depends on these networks just as much as production itself.", "A modern economy needs connected infrastructure as much as it needs labour and resources."],
      simple: ["Transport moves people and goods.", "Communication shares information quickly.", "Trade links producers and consumers.", "These networks are essential to the national economy."],
      summary: "Transport and communication are the lifelines of the national economy. They link regions, support trade, and make development more connected and effective.",
      oneMinute: ["Transport connects producers and markets.", "Communication speeds decision making and information flow.", "Trade and national integration depend on strong networks."]
    }
  ];

  const civicsChapters = [
    {
      id: "civics-1",
      number: 1,
      title: "Power Sharing",
      description: "Understand why democracy requires the distribution of power and how power sharing prevents conflict.",
      topics: ["Democracy", "Power sharing", "Conflict prevention", "Political stability"],
      overview: "Power sharing is essential in a democracy because it makes rule more inclusive and reduces the risk that one group dominates everyone else. It is a practical way to manage social diversity and avoid conflict.",
      fiveMinutes: "Power is shared among different organs of government, social groups, and levels of government. This prevents the concentration of authority and makes the political system more legitimate. A democratic state is better able to manage disagreement when power is distributed rather than monopolised.",
      people: ["Citizens: exercise political voice through elections and participation.", "Political leaders: shape institutions that distribute power.", "Minority groups: benefit from representation and fair participation."],
      dates: ["1947: India begins its democratic political journey after independence.", "1950: the Constitution establishes democratic institutions and rules.", "Modern democracy: continues to rely on inclusion and representation."],
      events: ["Division of powers: governments are structured to share authority.", "Power sharing in societies: different groups gain a voice in decisions.", "Democratic stability: inclusiveness strengthens trust and reduces conflict."],
      terms: ["Power sharing: distribution of political authority among groups and institutions.", "Democracy: government where people exercise power through participation and representation.", "Conflict: a serious disagreement or struggle over power and resources.", "Legitimacy: public acceptance of government authority.", "Representation: having a voice through elected officials."],
      causesEffects: ["Cause: social diversity and competing claims. Effect: democracies use power sharing to manage differences.", "Cause: concentrated power. Effect: conflict and resentment become more likely.", "Cause: inclusive institutions. Effect: stability and legitimacy improve."],
      mnemonics: "No single voice rules all: share power, share legitimacy.",
      visual: { label: "Power in a democracy", kind: "meeting", points: ["Citizens", "Government", "Institutions", "Shared decisions"] },
      story: ["A democracy needs to balance different interests.", "If one group dominates, others may feel excluded and lose trust.", "Sharing power gives more groups a place in public life.", "This helps reduce conflict and makes government more accepted."],
      simple: ["Power sharing means no single group controls everything.", "It is important in diverse societies.", "It helps prevent domination and conflict.", "Inclusive government is more stable and accountable."],
      summary: "A democracy becomes more stable when power is shared among institutions and groups. Power sharing reduces domination and gives diverse communities a voice.",
      oneMinute: ["Power sharing prevents domination.", "Democracies distribute authority to reduce conflict.", "Representation gives different groups a voice."]
    },
    {
      id: "civics-2",
      number: 2,
      title: "Federalism",
      description: "Examine the division of powers between the central and state governments and the role of federalism in democratic governance.",
      topics: ["Levels of government", "Division of powers", "Union and states", "Cooperative federalism"],
      overview: "Federalism divides government authority between a national level and regional units. This structure allows different levels to govern at the same time while sharing responsibility for citizens and public policy.",
      fiveMinutes: "In a federation, the centre and the states each have distinct responsibilities. Some powers are given to the Union, some to the states, and some are shared. This system helps governance remain broad and responsive while preserving national unity and regional needs.",
      people: ["Citizens: receive services from multiple levels of government.", "State governments: manage regions and local administration.", "Central government: coordinates national interests and policy."],
      dates: ["1947: India becomes independent and begins shaping its national structure.", "1950: the Constitution establishes federal principles.", "Post-1950 period: constitutional changes and state reforms strengthen the federal structure."],
      events: ["Division of powers: government responsibilities are assigned by constitution.", "Shared rule: some powers are exercised jointly by Union and state governments.", "Regional needs: states govern local matters according to their contexts."],
      terms: ["Federalism: a system with different levels of government exercising authority.", "Union government: central government for national issues.", "State government: regional government for local administration.", "Division of powers: assignment of authority between levels of government.", "Cooperative federalism: coordination between levels of government."],
      causesEffects: ["Cause: need to govern a large and diverse country. Effect: powers are divided across levels.", "Cause: different regional needs. Effect: states handle local governance while the centre addresses national matters.", "Cause: cooperation and coordination. Effect: better policy implementation and national unity."],
      mnemonics: "One country, two levels of action: union and state, with shared responsibility.",
      visual: { label: "Government levels", kind: "map", points: ["Union", "State", "Local", "Shared tasks"] },
      story: ["A large country cannot be governed in only one way.", "Different regions have different needs and contexts.", "Federalism balances national coordination with regional autonomy.", "This structure helps both unity and diversity function together."],
      simple: ["Federalism means more than one level of government.", "The centre and states each have powers.", "This keeps government responsive and organised.", "A federation balances unity and local needs."],
      summary: "Federalism spreads power between the Union and the states so that a country can remain unified while respecting its diversity and regional differences.",
      oneMinute: ["Federalism divides powers between levels of government.", "States handle local matters, while the centre handles national ones.", "Coordination helps balance unity and diversity."]
    },
    {
      id: "civics-3",
      number: 3,
      title: "Gender, Religion and Caste",
      description: "Analyse how social divisions affect equality, representation, and citizenship in a democracy.",
      topics: ["Social differences", "Equality", "Religion", "Caste and gender"],
      overview: "Democracies must respond to social and cultural differences while protecting equal citizenship. Gender, religion, and caste can shape opportunities and exclusions, making equality and inclusion central political concerns.",
      fiveMinutes: "India is a diverse society with different religions, caste groups, and gender experiences. These identities shape social life, but democratic citizenship also requires equal treatment before the law. Society can become more just when equality and representation are actively protected.",
      people: ["Women: work for equal opportunity and legal recognition.", "Religious communities: contribute to cultural identity and social life.", "Marginalised groups: seek dignity, fairness, and political representation."],
      dates: ["The Constitution includes equality and non-discrimination as guiding values.", "Later reforms and social movements continue to pursue fair participation and dignity.", "Modern politics keeps revisiting questions of inclusion and opportunity."],
      events: ["Equal citizenship: the Constitution safeguards equal treatment and rights.", "Social exclusion: prejudice and discrimination shape life chances.", "Political mobilisation: marginalised groups demand recognition and participation."],
      terms: ["Gender: social ideas and roles associated with being male or female.", "Religion: beliefs and practices linked to faith and community.", "Caste: social hierarchy and identity in Indian society.", "Equality: equal treatment and equal opportunity before the law.", "Discrimination: unfair treatment based on identity or social difference."],
      causesEffects: ["Cause: social hierarchies and stereotypes. Effect: unequal access to opportunity.", "Cause: legal equality and activism. Effect: gradual improvement in representation and dignity.", "Cause: political inclusion. Effect: greater participation of marginalised communities."],
      mnemonics: "A democracy is strongest when every identity has dignity and equal opportunity.",
      visual: { label: "Diversity and equality", kind: "network", points: ["Gender", "Religion", "Caste", "Equal citizenship"] },
      story: ["Social diversity is part of democratic life, not a barrier to it.", "What matters is whether the system treats everyone with equal dignity.", "Discrimination undermines trust and fairness.", "Democracy works best when groups can participate without exclusion."],
      simple: ["Different identities shape people's experiences.", "Equality means no difference should lead to unfair exclusion.", "Religion and caste should not determine rights and opportunities.", "Democracy must protect equal citizenship for all."],
      summary: "Gender, religion, and caste are important dimensions of social life. A democratic society must protect equal citizenship and prevent discrimination based on identity.",
      oneMinute: ["Social diversity is normal in a democracy.", "Equality means no unfair exclusion by identity.", "Representation and law help protect dignity and fairness."]
    },
    {
      id: "civics-4",
      number: 4,
      title: "Political Parties",
      description: "Learn how political parties organise public life, power, and policy-making in democratic systems.",
      topics: ["Party functions", "Elections", "Representation", "Accountability"],
      overview: "Political parties are central to democracy because they contest elections, form governments, and present policies. They help citizens connect to institutions and hold leaders accountable.",
      fiveMinutes: "A political party is a group that seeks to control government and influence public decisions. Parties recruit leaders, support policy programmes, and coordinate the choice of representatives. In a democracy, parties are expected to be accountable, transparent, and responsive to citizens.",
      people: ["Party leaders: present programmes and seek electoral support.", "Voters: choose parties and representatives.", "Members and activists: help mobilise support and keep parties active."],
      dates: ["Election periods shape democratic life in regular cycles.", "Political reforms and changes in party structure respond to public expectations.", "The functioning of parties evolves over time as societies change."],
      events: ["Election contest: parties compete for power and public support.", "Government formation: the winning party or coalition forms the executive.", "Policy design: parties propose programmes and actions for governance."],
      terms: ["Political party: organisation that seeks power through elections.", "Election: public choice of representatives and governments.", "Accountability: the duty to answer to the public for decisions.", "Representation: acting on behalf of citizens and groups.", "Manifesto: a party's public programme and commitments."],
      causesEffects: ["Cause: citizens need organised choices in elections. Effect: parties become key democratic institutions.", "Cause: public pressure for accountability. Effect: parties must respond to citizen concerns.", "Cause: weak internal democracy. Effect: party systems can become less representative and less transparent."],
      mnemonics: "A party connects people, power, and policy.",
      visual: { label: "Party and public voice", kind: "meeting", points: ["Voter choice", "Party programme", "Election", "Government"] },
      story: ["Without parties, elections would be harder to organise and policies less coherent.", "Parties help voters compare options and hold leaders accountable.", "Good parties strengthen representation and democratic responsibility.", "Weak parties can reduce public trust and democratic quality."],
      simple: ["Parties are the main link between citizens and government.", "They contest elections and shape policy.", "They should be accountable and open to criticism.", "Strong parties support democratic participation."],
      summary: "Political parties are essential to democracy because they organise public choice, form governments, and turn citizens' demands into policy. Their accountability matters as much as their electoral strength.",
      oneMinute: ["Parties contest elections and shape governance.", "They organise public choice and representation.", "Accountability is central to democratic life."]
    },
    {
      id: "civics-5",
      number: 5,
      title: "Outcomes of Democracy",
      description: "Explain what democracies are expected to achieve: equality, accountability, participation, and better governance.",
      topics: ["Accountability", "Participation", "Equality", "Public welfare"],
      overview: "Democracy is not simply a method of choosing rulers. It is also judged by the outcomes it produces: equality, justice, rights, participation, and public welfare. These outcomes shape whether citizens trust the system.",
      fiveMinutes: "Democracies are expected to produce accountable governments, representative institutions, and fairer public policies. They allow citizens to participate, seek redress, and deliberate over important decisions. Yet democratic outcomes depend on institutional quality, economic conditions, and social fairness.",
      people: ["Citizens: shape the quality of democratic outcomes through participation.", "Leaders: must be accountable and responsive.", "Institutions: courts, legislature, and bureaucracy influence policy and fairness."],
      dates: ["Modern democracies continue to evolve through participation and reform.", "Electoral systems and legal institutions shape democratic performance.", "Public demands for fairness and accountability keep changing the democratic agenda."],
      events: ["Participation: citizens vote, organise, and influence decisions.", "Accountability: government must justify its actions to the people.", "Rights and welfare: democratic systems aim to ensure security and equality."],
      terms: ["Accountability: government answers to citizens for decisions and actions.", "Participation: citizens take part in political and public life.", "Equality: equal status and treatment before the law.", "Public welfare: improvement in social and economic conditions.", "Democratic outcome: the practical result of rule by the people."],
      causesEffects: ["Cause: active political participation. Effect: stronger public trust and better policy feedback.", "Cause: accountability and transparent institutions. Effect: reduced corruption and greater legitimacy.", "Cause: exclusion and weak institutions. Effect: poor democratic outcomes and reduced confidence."],
      mnemonics: "Democracy is judged by the quality of life it makes possible, not only by elections.",
      visual: { label: "Democratic results", kind: "meeting", points: ["Participation", "Rights", "Accountability", "Public welfare"] },
      story: ["Democracy is not only about choosing leaders.", "It is also about whether people can live with dignity, security, and equality.", "When institutions work well, public welfare improves.", "When they fail, citizens lose trust and social confidence."],
      simple: ["Democracy should bring accountability and fairness.", "People should be able to participate and influence decisions.", "Successful democracies also protect rights and welfare.", "The outcomes of democracy matter as much as the process."],
      summary: "Democracy is judged not only by elections but by the real outcomes it produces. Participation, accountability, equality, and welfare together define a healthy democratic system.",
      oneMinute: ["Democracy must deliver rights and accountability.", "People must be able to participate in public life.", "Fair outcomes build trust in democratic institutions."]
    },
    {
      id: "civics-6",
      number: 6,
      title: "Challenges to Democracy",
      description: "Study the problems democracies face and the ways citizens and institutions can strengthen democratic practice.",
      topics: ["Democratic challenges", "Corruption", "Participation", "Reform"],
      overview: "Democracies face challenges such as low participation, inequality, corruption, and frustration with institutions. Addressing these challenges requires reform, awareness, and active citizenship.",
      fiveMinutes: "Democracy is fragile if citizens are disengaged or if institutions fail to respond fairly. Challenges such as money power, corruption, and weak accountability can reduce democratic quality. Citizens, media, civil society, and institutions all contribute to reform and everyday democratic renewal.",
      people: ["Citizens: decide whether to participate and demand accountability.", "Journalists and civil society: monitor institutions and public decisions.", "Reformers: propose changes to strengthen public trust and fairness."],
      dates: ["Democratic challenges are continuous and vary by place and time.", "Public reforms and institutional improvements strengthen accountability over time.", "Modern democracies grapple with trust, communication, and inclusion."],
      events: ["Low participation: people disengage when they feel ignored or powerless.", "Corruption: unfair use of public office weakens trust.", "Reform efforts: institutions respond through legal, civic, and administrative change."],
      terms: ["Challenge: issue that makes democratic governance more difficult.", "Corruption: misuse of public office or power for private gain.", "Accountability: answerability of governments to citizens.", "Participation: active involvement in political and public life.", "Reform: deliberate change to improve democratic practice."],
      causesEffects: ["Cause: weak accountability and low trust. Effect: citizens withdraw from politics.", "Cause: inequality and misinformation. Effect: democratic debate becomes less informed and inclusive.", "Cause: democratic reform and participation. Effect: system becomes more responsive and resilient."],
      mnemonics: "Democracy needs vigilance, participation, and accountability every day.",
      visual: { label: "Strengthening democracy", kind: "meeting", points: ["Informed citizens", "Accountable leaders", "Fair institutions", "Reform"] },
      story: ["Democracies can become weak if citizens stop engaging.", "Corruption and inequality undermine trust in institutions.", "Effective reform means rebuilding confidence and strengthening participation.", "A strong democracy depends on both institutions and active citizenship."],
      simple: ["Democracy faces problems that must be solved.", "Citizens must remain informed, active, and critical.", "Good institutions and reforms strengthen public trust.", "No democracy can function well without active participation."],
      summary: "Democracy is not secure without public participation and accountability. Reform, transparency, and active citizenship are essential to meet the challenges that arise in any democratic system.",
      oneMinute: ["Democracy faces issues such as corruption and low participation.", "Public trust depends on accountability and fairness.", "Active citizenship and reform help strengthen democracy."]
    }
  ];

  for (const chapter of [...geographyChapters, ...civicsChapters]) {
    chapter.people = [];
    chapter.dates = [];
  }

  const subjects = [
    { id: "history", name: "History", shortName: "History", icon: "fa-book-open", color: "coral", status: "available", description: "People, ideas, and events that shaped the modern world.", bookTitle: "India and the Contemporary World - II", chapters },
    { id: "geography", name: "Geography", shortName: "Geography", icon: "fa-earth-asia", color: "green", status: "available", description: "Explore the places, resources, and landscapes that shape our world.", bookTitle: "Contemporary India - II", chapters: geographyChapters },
    { id: "civics", name: "Political Science / Civics", shortName: "Civics", icon: "fa-landmark", color: "blue", status: "available", description: "Discover democracy, power, and how people shape public life.", bookTitle: "Democratic Politics - II", chapters: civicsChapters },
    { id: "economics", name: "Economics", shortName: "Economics", icon: "fa-coins", color: "yellow", status: "available", description: "Understand development, livelihoods, and our changing economy.", bookTitle: "Understanding Economic Development", chapters: [] }
  ];

  const quiz = {};

  const timeline = subjects.filter((subject) => subject.id === "history").flatMap((subject) => subject.chapters.flatMap((chapter) => (chapter.dates || []).map((entry) => {
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
