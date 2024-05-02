const height_DOM_graph = 700;
let graph;

class Graph
{
    constructor() 
    {
        this.nodes = {
            "Q100": {
                "name": "Boston",
                "wikidata_aliases": "[\"Beantown\",\"The Cradle of Liberty\",\"The Hub\",\"The Cradle of Modern America\",\"The Athens of America\",\"The Walking City\",\"The Hub of the Universe\",\"Bostonia\",\"Boston, Massachusetts\",\"Boston, MA\",\"Boston, Mass.\",\"Puritan City\",\"Boston (MA)\",\"The hub of the universe\",\"City of Boston\",\"Boston, USA\",\"Capital of Massachusetts\",\"Bean Town\",\"Boston, United States\",\"Boston, Massachusetts, United States\",\"Boston, Massachusetts, US\",\"Boston, Massachusetts, United States of America\",\"Boston MA, United States\",\"Boston, Mass\"]",
                "wikidata_summary": "capital and largest city of Massachusetts, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q100",
                "wikipedia_summary": "Boston (US: ), officially the City of Boston, is the capital and most populous city in the Commonwealth of Massachusetts in the United States. The city serves as the cultural and financial center of the New England region of the Northeastern United States. It has an area of 48.4 sq mi (125 km2) and a population of 675,647 as of the 2020 census, making it the third-largest city in the Northeast after New York City and Philadelphia. The Greater Boston metropolitan statistical area, including and surrounding the city, is the largest in New England and eleventh-largest in the country.Boston was founded on the Shawmut Peninsula in 1630 by Puritan settlers. The city was named after Boston, Lincolnshire, England.During the American Revolution, Boston was home to several events that proved central to the revolution and subsequent Revolutionary War, including the Boston Massacre (1770), the Boston Tea Party (1773), Paul Revere's Midnight Ride (1775), the Battle of Bunker Hill (1775), and the Siege of Boston (1775-1776). Following American independence from Great Britain, the city continued to play an important role as a port, manufacturing hub, and center for education and culture.The city expanded significantly beyond the original peninsula through filling in land and annexing neighboring towns. It now attracts many tourists, with Faneuil Hall alone drawing more than 20 million visitors per year. Boston's many firsts include the United States' first public park (Boston Common, 1634), the first public school (Boston Latin School, 1635), and the first subway system (Tremont Street subway, 1897).Since the nation's founding, Boston has been a national leader in higher education and research. Boston University and Northeastern University are both located within the city. Two of the world's most prestigious and consistently highly-ranked universities, Harvard University, the nation's oldest university, and the Massachusetts Institute of Technology, are both located in neighboring Cambridge, Massachusetts.Boston also has emerged as the largest biotechnology hub in the world. The city is also a national leader in scientific research, law, medicine, engineering, and business. With nearly 5,000 startup companies, the city is considered a global pioneer in innovation and entrepreneurship, and more recently in artificial intelligence. Boston's economy also includes finance, professional and business services, information technology, and government activities. Households in the city claim the highest average rate of philanthropy in the United States. Furthermore, Boston's businesses and institutions rank among the top in the country overall for environmental sustainability and new investment.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Boston"
            },
            "Q100431127": {
                "name": "SARS-CoV-2 coronavirus in water and wastewater: A critical review about presence and concern",
                "wikidata_aliases": "[]",
                "wikidata_summary": "scientific article published on 01 October 2020",
                "wikidata_url": "https://www.wikidata.org/wiki/Q100431127",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q101497": {
                "name": "Aldehyde",
                "wikidata_aliases": "[\"aldehyde\"]",
                "wikidata_summary": "organic compounds containing a functional group with the structure −CHO, consisting of a carbonyl center (a carbon double-bonded to oxygen) with the carbon atom also bonded to hydrogen and to an R group, which is any generic alkyl or side chain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q101497",
                "wikipedia_summary": "In organic chemistry, an aldehyde () is an organic compound containing a functional group with the structure R−CH=O. The functional group itself (without the 'R' side chain) can be referred to as an aldehyde but can also be classified as a formyl group. Aldehydes are a common motif in many chemicals important in technology and biology.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Aldehyde"
            },
            "Q104129950": {
                "name": "Christopher B Kaelin",
                "wikidata_aliases": "[\"Christopher Kaelin\"]",
                "wikidata_summary": "researcher",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104129950",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q104161310": {
                "name": "The Acolyte",
                "wikidata_aliases": "[]",
                "wikidata_summary": "upcoming American streaming television series set in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104161310",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1047009": {
                "name": "Disney Store",
                "wikidata_aliases": "[\"shopDisney\",\"Shop Disney\",\"The Disney Store\"]",
                "wikidata_summary": "company selling Disney products",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1047009",
                "wikipedia_summary": "The Disney Store is a chain of specialty stores selling only Disney related items, many of them exclusive, under its own name and Disney Outlet. It was a business unit of Disney Consumer Products with the Disney Experiences segment of The Walt Disney Company conglomerate.\nDisney Store was the first 'retail-tainment', or entertainment store. The company had operated a number of store chains beyond its flagship Disney Store chain such as ESPN-The Store and the short-lived Mickey's Kitchen restaurant. Currently, the company operates the stand-alone stores, Disney Baby, Walt Disney Gallery and Disney's Soda Fountain and Studio Store. Disney Store was a partner for Disney at Harrods, which included a Bibbidi Bobbidi Boutique salon.\nNorth America stores were owned and operated by The Children's Place's subsidiary Hoop Holdings from 2004 to 2008. The Oriental Land Company's subsidiary Retail Networks Co., Ltd. owned and operated the Japanese stores from 2002 to 2010. Since 2012, Disney departments exist in JCPenney  in about 520 Penney locations. In India, two licensed chains, Disney Jeans and Disney Artist, are owned and operated by Indus Clothing and Ravi Jaipuria Corporation respectively. At the 2019 D23 Expo, it was announced that Disney departments were opening at Target stores across the United States starting in October prior to the release of Frozen II. Disney Store items are also being sold on Target.com in addition to the Disney Store website (previously known as 'shopDisney' from 2017 to 2024).Disney's Character Warehouse Outlet Store was licensed out to liquidator Asset Management & Sales LLC to sell overstock and discontinued Disney Parks merchandise. The Character Warehouses just have a few permanent locations while having temporary stores at times. Asset Management & Sales is owned by Janie and Gary Stump.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Disney_Store"
            },
            "Q104781875": {
                "name": "Light of the Jedi",
                "wikidata_aliases": "[\"Star Wars: The High Republic: Light of the Jedi\",\"Star Wars: Light of the Jedi\",\"The High Republic: Light of the Jedi\",\"Star Wars: Light of the Jedi (The High Republic)\"]",
                "wikidata_summary": "2021 novel by Charles Soule",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104781875",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q104996560": {
                "name": "Dark Side",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2021 single by Blind Channel",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104996560",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q10514602": {
                "name": "Terry",
                "wikidata_aliases": "[\"Terry (given name)\",\"Terry (first name)\"]",
                "wikidata_summary": "unisex given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10514602",
                "wikipedia_summary": "Terry is a unisex given name, derived from French Thierry and Theodoric. It can also be used as a diminutive nickname for the names Teresa or Theresa (feminine) or Terence, Terrance  or Terrier (masculine).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Terry"
            },
            "Q105438405": {
                "name": "Thrawn: Alliances",
                "wikidata_aliases": "[\"Star Wars: Thrawn: Alliances\"]",
                "wikidata_summary": "book by Timothy Zahn",
                "wikidata_url": "https://www.wikidata.org/wiki/Q105438405",
                "wikipedia_summary": "Thrawn: Alliances is a 2018 Star Wars novel by Timothy Zahn, published on July 24, 2018 by Del Rey Books.  It continues the chronicles of Grand Admiral Thrawn, a character that Zahn originated in his Heir to the Empire trilogy published in 1991–1993. It is the sequel to Zahn's Star Wars: Thrawn novel, the second installment of the newer Thrawn trilogy, and the ninth Thrawn novel overall.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Thrawn:_Alliances"
            },
            "Q105669174": {
                "name": "University of California, Davis, Genome Center",
                "wikidata_aliases": "[\"UCD Genome Center\",\"Genome Center, UC Davis\",\"Genome Center, University of California, Davis\",\"UC Davis Genome Center\"]",
                "wikidata_summary": "research center at the University of California, Davis",
                "wikidata_url": "https://www.wikidata.org/wiki/Q105669174",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q105674": {
                "name": "Running",
                "wikidata_aliases": "[\"running (sport)\"]",
                "wikidata_summary": "activity that involves the rapid terrestrial locomotion of feet",
                "wikidata_url": "https://www.wikidata.org/wiki/Q105674",
                "wikipedia_summary": "Running is a method of terrestrial locomotion by which humans and other animals move rapidly on foot. Running is a gait with an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight, and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride co-occur, with energy storage accomplished by springy tendons and passive muscle elasticity. The term 'running' can refer to a variety of speeds ranging from jogging to sprinting.\nRunning in humans is associated with improved health and life expectancy.It is hypothesized that the ancestors of humankind developed the ability to run for long distances about 2.6 million years ago, probably to hunt animals. Competitive running grew out of religious festivals in various areas. Records of competitive racing date back to the Tailteann Games in Ireland between 632 BCE and 1171 BCE, while the first recorded Olympic Games took place in 776 BCE. Running has been described as the world's most accessible sport.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Running"
            },
            "Q105888035": {
                "name": "Richie Cody",
                "wikidata_aliases": "[\"Richard Cody\"]",
                "wikidata_summary": "film editor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q105888035",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q106001462": {
                "name": "MPR News",
                "wikidata_aliases": "[\"Minnesota Public Radio News\",\"MPRNews.org\"]",
                "wikidata_summary": "news service of Minnesota Public Radio",
                "wikidata_url": "https://www.wikidata.org/wiki/Q106001462",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1061596": {
                "name": "Lactobacillus",
                "wikidata_aliases": "[]",
                "wikidata_summary": "genus of bacteria",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1061596",
                "wikipedia_summary": "Lactobacillus is a genus of gram-positive, aerotolerant anaerobes or microaerophilic, rod-shaped, non-spore-forming bacteria. Until 2020, the genus Lactobacillus comprised over 260 phylogenetically, ecologically, and metabolically diverse species; a taxonomic revision of the genus assigned lactobacilli to 25 genera (see § Taxonomy below).Lactobacillus species constitute a significant component of the  human and animal microbiota at a number of body sites, such as the digestive system, and the female genital system. In women of European ancestry, Lactobacillus species are normally a major part of the vaginal microbiota. Lactobacillus forms biofilms in the vaginal and gut microbiota, allowing them to persist during harsh environmental conditions and maintain ample populations. Lactobacillus exhibits a mutualistic relationship with the human body, as it protects the host against potential invasions by pathogens, and in turn, the host provides a source of nutrients. Lactobacilli are among the most common probiotic found in food such as yogurt, and it is diverse in its application to maintain human well-being, as it can help treat diarrhea, vaginal infections, and skin disorders such as eczema.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lactobacillus"
            },
            "Q1063455": {
                "name": "The Lego Group",
                "wikidata_aliases": "[\"Lego Group\",\"Lego A/S\",\"Lego\",\"LEGO System A/S\",\"Lego company\",\"Lego Aktieselskab\"]",
                "wikidata_summary": "Danish toy manufacturer best known for interlocking-brick construction toys",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1063455",
                "wikipedia_summary": "The LEGO Group (formally LEGO A/S) is a Danish construction toy production company based in Billund, Denmark. It manufactures Lego-branded toys, consisting mostly of interlocking plastic bricks. The LEGO Group has also built several amusement parks around the world, each known as Legoland, and operates numerous retail stores.\nThe company was founded on 10 August 1932, by Ole Kirk Christiansen. The name Lego is derived from the Danish phrase leg godt, meaning 'play well'. In the first half of 2015, The LEGO Group became the world's largest toy company by revenue, with sales amounting to US$2.1 billion, surpassing Mattel, which had US$1.9 billion in sales.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Lego_Group"
            },
            "Q106708832": {
                "name": "If I fits I sits: A citizen science investigation into illusory contour susceptibility in domestic cats (Felis silvestris catus)",
                "wikidata_aliases": "[]",
                "wikidata_summary": "July 2021 scholarly article in Applied Animal Behaviour Science",
                "wikidata_url": "https://www.wikidata.org/wiki/Q106708832",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q106834240": {
                "name": "Star Wars Kids",
                "wikidata_aliases": "[]",
                "wikidata_summary": "website",
                "wikidata_url": "https://www.wikidata.org/wiki/Q106834240",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q10829106": {
                "name": "Thai Nguyen University of Agriculture and Forestry",
                "wikidata_aliases": "[\"TUAF\"]",
                "wikidata_summary": "education organization in Thành Phố Thái Nguyên, Vietnam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10829106",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q10861331": {
                "name": "zoopsychology",
                "wikidata_aliases": "[\"animal psychology\"]",
                "wikidata_summary": "academic discipline",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10861331",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q10876": {
                "name": "Bacteria",
                "wikidata_aliases": "[\"eubacteria\"]",
                "wikidata_summary": "domain of micro-organisms",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10876",
                "wikipedia_summary": "Bacteria ( ; sg.: bacterium) are ubiquitous, mostly free-living organisms often consisting of one biological cell. They constitute a large domain of prokaryotic microorganisms. Typically a few micrometres in length, bacteria were among the first life forms to appear on Earth, and are present in most of its habitats. Bacteria inhabit soil, water, acidic hot springs, radioactive waste, and the deep biosphere of Earth's crust. Bacteria play a vital role in many stages of the nutrient cycle by recycling nutrients and the fixation of nitrogen from the atmosphere. The nutrient cycle includes the decomposition of dead bodies; bacteria are responsible for the putrefaction stage in this process. In the biological communities surrounding hydrothermal vents and cold seeps, extremophile bacteria provide the nutrients needed to sustain life by converting dissolved compounds, such as hydrogen sulphide and methane, to energy. Bacteria also live in mutualistic, commensal and parasitic relationships with plants and animals. Most bacteria have not been characterised and there are many species that cannot be grown in the laboratory. The study of bacteria is known as bacteriology, a branch of microbiology.\nLike all animals, humans carry vast numbers (approximately 1013 to 1014) of bacteria. Most are in the gut, though there are many on the skin. Most of the bacteria in and on the body are harmless or rendered so by the protective effects of the immune system, and many are beneficial, particularly the ones in the gut. However, several species of bacteria are pathogenic and cause infectious diseases, including cholera, syphilis, anthrax, leprosy, tuberculosis, tetanus and bubonic plague. The most common fatal bacterial diseases are respiratory infections. Antibiotics are used to treat bacterial infections and are also used in farming, making antibiotic resistance a growing problem. Bacteria are important in sewage treatment and the breakdown of oil spills, the production of cheese and yogurt through fermentation, the recovery of gold, palladium, copper and other metals in the mining sector, as well as in biotechnology, and the manufacture of antibiotics and other chemicals.\nOnce regarded as plants constituting the class Schizomycetes ('fission fungi'), bacteria are now classified as prokaryotes. Unlike cells of animals and other eukaryotes, bacterial cells do not contain a nucleus and rarely harbour membrane-bound organelles. Although the term bacteria traditionally included all prokaryotes, the scientific classification changed after the discovery in the 1990s that prokaryotes consist of two very different groups of organisms that evolved from an ancient common ancestor. These evolutionary domains are called Bacteria and Archaea.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bacteria"
            },
            "Q1093766": {
                "name": "The Force",
                "wikidata_aliases": "[\"Force\"]",
                "wikidata_summary": "fictional energy source in Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1093766",
                "wikipedia_summary": "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe. 'Force-sensitive' characters use the Force throughout the franchise. Heroes like the Jedi seek to 'become one with the Force', matching their personal wills with the will of the Force, while the Sith and other villains exploit the Force and try to bend it toward their own selfish and destructive desires. The Force has been compared to aspects of several world religions, and the phrase 'May the Force be with you' has become part of pop culture vernacular.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Force"
            },
            "Q10990": {
                "name": "Meat",
                "wikidata_aliases": "[]",
                "wikidata_summary": "animal flesh eaten as food",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10990",
                "wikipedia_summary": "Meat is animal tissue, often muscle, that is eaten as food. Humans have hunted and farmed other animals for meat since prehistoric times. The Neolithic Revolution allowed the domestication of animals including chickens, sheep, goats, pigs, horses, and cattle, starting around 11,000 years ago. Since then, selective breeding has enabled farmers to produce meat with the qualities desired by producers and consumers.\nMeat is mainly composed of water, protein, and fat. Its quality is affected by many factors, including the genetics and nutritional status of the animal involved. It is edible raw, but is normally eaten cooked, such as by stewing or roasting, or processed, such as by smoking or salting. Bacteria and fungi decompose and spoil unprocessed meat within hours or days.\nThe consumption of meat, especially red and processed meat, causes health effects including increased risks of cancer, coronary heart disease, and diabetes. Meat production is a major contributor to environmental issues including global warming, pollution, and biodiversity loss, at every scale from local to global.\nMeat is important to economies and cultures around the world. Some people choose not to eat meat (vegetarians) for reasons such as ethics, environmental effects, health concerns, or religious dietary rules.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Meat"
            },
            "Q110059874": {
                "name": "I Am Your Mother",
                "wikidata_aliases": "[]",
                "wikidata_summary": "sketch from Saturday Night Live",
                "wikidata_url": "https://www.wikidata.org/wiki/Q110059874",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q110876442": {
                "name": "Jody Houser",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American comics writer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q110876442",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11190": {
                "name": "Medicine",
                "wikidata_aliases": "[\"medical\",\"medicalism\"]",
                "wikidata_summary": "field of study for diagnosing, treating and preventing disease",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11190",
                "wikipedia_summary": "Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness. Contemporary medicine applies biomedical sciences, biomedical research, genetics, and medical technology to diagnose, treat, and prevent injury and disease, typically through pharmaceuticals or surgery, but also through therapies as diverse as psychotherapy, external splints and traction, medical devices, biologics, and ionizing radiation, amongst others.Medicine has been practiced since prehistoric times, and for most of this time it was an art (an area of creativity and skill), frequently having connections to the religious and philosophical beliefs of local culture. For example, a medicine man would apply herbs and say prayers for healing, or an ancient philosopher and physician would apply bloodletting according to the theories of humorism. In recent centuries, since the advent of modern science, most medicine has become a combination of art and science (both basic and applied, under the umbrella of medical science). For example, while stitching technique for sutures is an art learned through practice, knowledge of what happens at the cellular and molecular level in the tissues being stitched arises through science.\nPrescientific forms of medicine, now known as traditional medicine or folk medicine, remain commonly used in the absence of scientific medicine and are thus called alternative medicine. Alternative treatments outside of scientific medicine with ethical, safety and efficacy concerns are termed quackery.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Medicine"
            },
            "Q112562149": {
                "name": "Fico Ossio",
                "wikidata_aliases": "[]",
                "wikidata_summary": "argentinský ilustrátor, autor komiksů",
                "wikidata_url": "https://www.wikidata.org/wiki/Q112562149",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q112965645": {
                "name": "Signs and symptoms",
                "wikidata_aliases": "[\"symptom or sign type\",\"primary care encounter class\",\"clinical symptom or sign class\",\"symptoms or signs\",\"symptom or sign class\",\"signs and symptoms\"]",
                "wikidata_summary": "clinical symptom or sign as a first-order metaclass. To be used as P31 values for all symptom or sign classes. Its instances are classes (e. g. sneezing or coughing)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q112965645",
                "wikipedia_summary": "Signs and symptoms are the observed or detectable signs, and experienced symptoms of an illness, injury, or condition.\nSigns are objective and externally observable; symptoms are a person's reported subjective experiences. A sign for example may be a higher or lower temperature than normal, raised or lowered blood pressure or an abnormality showing on a medical scan. A symptom is something out of the ordinary that is experienced by an individual such as feeling feverish, a headache or other pains in the body.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Signs_and_symptoms"
            },
            "Q1139344": {
                "name": "grade",
                "wikidata_aliases": "[\"slope\",\"incline\",\"gradient\",\"pitch\",\"rise\"]",
                "wikidata_summary": "tangent of the angle of a surface to the horizontal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1139344",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11395": {
                "name": "Domestication",
                "wikidata_aliases": "[]",
                "wikidata_summary": "modification by humans of wild forms of animals or plants for coexistence with them",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11395",
                "wikipedia_summary": "Domestication is a multi-generational mutualistic relationship between humans and other organisms, in which humans took over control and care to obtain a steady supply of resources including food. The process was gradual and geographically diffuse, based on trial and error. \nThe first animal to be domesticated was the dog, as a commensal, at least 15,000 years ago. Other animals including goat, sheep, and cow were domesticated starting around 11,000 years ago. Among birds, the chicken was domesticated in East Asia, seemingly for cockfighting, some 7,000 years ago. The horse came under domestication around 5,500 years ago in central Asia as a working animal. Among invertebrates, the silkworm and the western honey bee were domesticated over 5,000 years ago for silk and honey, respectively.\nThe domestication of plants began around 13,000–11,000 years ago with cereals such as wheat and barley in the Middle East, alongside crops such as lentil, pea, chickpea, and flax. Rice was first cultivated in China some 13,500 to 8,200 years ago. Beginning around 10,000 years ago, Indigenous peoples in the Americas began to cultivate peanuts, squash, maize, potatoes, cotton, and cassava. In Africa, crops such as sorghum were domesticated. Agriculture developed in some 13 centres around the world, domesticating different crops and animals.\nDomestication affected genes for behavior in animals, making them less aggressive. In plants, domestication affected genes for morphology, such as increasing seed size and stopping the shattering of seed-heads such as in wheat. Such changes both make domesticated organisms easier to handle, and reduce their ability to survive in the wild.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Domestication"
            },
            "Q113961026": {
                "name": "Like a Dragon: Ishin!",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2023 video game remake developed by Ryū Ga Gotoku Studios",
                "wikidata_url": "https://www.wikidata.org/wiki/Q113961026",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q113961028": {
                "name": "Rise of the Rōnin",
                "wikidata_aliases": "[\"Rise of Ronin\",\"RotR\",\"RoR\"]",
                "wikidata_summary": "2024 video game developed by Team Ninja",
                "wikidata_url": "https://www.wikidata.org/wiki/Q113961028",
                "wikipedia_summary": "Rise of the Rōnin is a 2024 action-role playing video game developed by Koei Tecmo's Team Ninja and published by Sony Interactive Entertainment. The game was released for the PlayStation 5 on 22 March 2024. Upon release, it received generally positive reviews from critics.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rise_of_the_R%C5%8Dnin"
            },
            "Q11402": {
                "name": "Force",
                "wikidata_aliases": "[\"mass times acceleration\"]",
                "wikidata_summary": "physical influence that tends to cause an object to change motion unless opposed by other forces",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11402",
                "wikipedia_summary": "In physics, a force is an influence that can cause an object to change its velocity, i.e., to accelerate, meaning a change in speed or direction, unless counterbalanced by other forces. The concept of force makes the everyday notion of pushing or pulling mathematically precise. Because the magnitude and direction of a force are both important, force is a vector quantity. The SI unit of force is the newton (N), and force is often represented by the symbol F.Force plays a central role in classical mechanics, figuring in all three of Newton's laws of motion, which specify that the force on an object with an unchanging mass is equal to the product of the object's mass and the acceleration that it undergoes. \nTypes of forces often encountered in classical mechanics include elastic, frictional, contact or 'normal' forces, and gravitational. The rotational version of force is torque, which produces changes in the rotational speed of an object. In an extended body, each part often applies forces on the adjacent parts; the distribution of such forces through the body is the internal mechanical stress. In equilibrium these stresses cause no acceleration of the body as the forces balance one another. If these are not in equilibrium they can cause deformation of solid materials, or flow in fluids.\nIn modern physics, which includes relativity and quantum mechanics, the laws governing motion are revised to rely on fundamental interactions as the ultimate origin of force. However, the understanding of force provided by classical mechanics is useful for practical purposes.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Force"
            },
            "Q115959335": {
                "name": "cat litter",
                "wikidata_aliases": "[\"kitty litter\"]",
                "wikidata_summary": "absorbent material to fill a receptacle in which a cat urinates and defecates",
                "wikidata_url": "https://www.wikidata.org/wiki/Q115959335",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1161297": {
                "name": "University of Sussex",
                "wikidata_aliases": "[\"Sussex University\"]",
                "wikidata_summary": "university in Brighton and Hove, UK",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1161297",
                "wikipedia_summary": "The University of Sussex is a public research university located in Falmer, East Sussex, England. It lies mostly within the city boundaries of Brighton and Hove. Its large campus site is surrounded by the South Downs National Park, and provides convenient access to central Brighton 5.5 kilometres (3.4 mi) away. The university received its royal charter in August 1961, the first of the plate glass university generation.More than a third of its students are enrolled in postgraduate programmes and approximately a third of staff are from outside the United Kingdom. Sussex has a diverse community of nearly 20,000 students, with around one in three being foreign students, and over 1,000 academics, representing over 140 different nationalities. The annual income of the institution for 2022–23 was £380.1 million with an expenditure of £345.1 million.Sussex counts five Nobel Prize winners, 15 Fellows of the Royal Society, 10 Fellows of the British Academy, 24 fellows of the Academy of Social Sciences and a winner of the Crafoord Prize among its faculty. By 2011, many of its faculty members had also received the Royal Society of Literature Prize, the Order of the British Empire and the Bancroft Prize. Alumni include heads of states, diplomats, politicians, eminent scientists and activists.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/University_of_Sussex"
            },
            "Q116763978": {
                "name": "Star Wars: Young Jedi Adventures",
                "wikidata_aliases": "[\"Young Jedi Adventures\"]",
                "wikidata_summary": "2023 animated television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q116763978",
                "wikipedia_summary": "Star Wars: Young Jedi Adventures is an American animated children's television series created for the streaming service Disney+ and the television network Disney Junior. It is part of the Star Wars franchise and follows a group of younglings as they learn to become Jedi Knights during the High Republic era, centuries before the main Star Wars films. The series is produced by Lucasfilm Animation and Wild Canary Animation, with Michael Olson as showrunner and Elliot Bour as supervising director. It is the first full-length animated Star Wars series targeted at young audiences.\nThe series stars Jamaal Avery Jr., Emma Berman, Juliet Donenfeld, Dee Bradley Baker, Jonathan Lipow, and Piotr Michael. It was announced in May 2022, with Olson and Bour already attached to the project. Casting was revealed in February 2023. Six shorts were released on YouTube ahead of the series premiere, before also becoming available on Disney+.\nStar Wars: Young Jedi Adventures premiered on May 4, 2023, and was positively received, with critics praising the show for being an engaging first Star Wars experience for young viewers.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars:_Young_Jedi_Adventures"
            },
            "Q1190058": {
                "name": "Physical intimacy",
                "wikidata_aliases": "[\"physical contact\"]",
                "wikidata_summary": "sensual proximity or touching",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1190058",
                "wikipedia_summary": "Physical intimacy is sensuous proximity or touching. It is an act or reaction, such as an expression of feelings (including close friendship, platonic love, romantic love, or sexual attraction), between people. Examples of physical intimacy include being inside someone's personal space, holding hands, hugging, kissing, caressing and sexual activity. Physical intimacy can often convey the real meaning or intention of an interaction in a way that accompanying speech cannot do. Physical intimacy can be exchanged between any people but as it is often used to communicate positive and intimate feelings, it most often occurs in people who have a preexisting relationship, whether familial, platonic or romantic, with romantic relationships having increased physical intimacy. Several forms of romantic touch have been noted including holding hands, hugging, kissing, cuddling, as well as caressing and massaging. Physical affection is highly correlated with overall relationship and partner satisfaction.It is possible to be physically intimate with someone without actually touching them; however, a certain proximity is necessary. For instance, a sustained eye contact is considered a form of physical intimacy, analogous to touching. When a person enters someone else's personal space for the purpose of being intimate, it is physical intimacy, regardless of the lack of actual physical contact.\nMost people partake in physical intimacy, which is a natural part of interpersonal relationships and human sexuality, and research has shown it has health benefits. A hug or touch can result in the release of the hormone oxytocin and in a reduction in stress hormones. Massages, stroking and cuddling have furthermore shown that they have widespread beneficial effects on well-being. The most pronounced effects can be found for a reduction of pain as well as feelings of depression and anxiety. However, also blood pressure and momentary mood can be improved through physical touch.Due to the important role that language-based communication plays in humans, the role of touch is often downplayed; however, there is ample evidence that physical touch still plays an important role in everyday human relationships. While humans often communicate verbally, they also participate in close contact. Physical touch has emotional and social connotations that often far outweigh anything that can be expressed via language.Inducements towards physical intimacy can come from various sources. During colder seasons, humans as well as other animals seek physical intimacy with one another as a means to apportion thermoregulation. Some forms of physical touch among monkeys and apes serve multiple functions, including cleaning, treatment of a lice influx or infection and social grooming.Some forms of physical intimacy may be received negatively. This attitude is especially marked amongst those with haphephobia. One study has shown that there is generally a higher level of physical intimacy allowed between immediate family members than between second-degree relatives. Intimacy norms are usually more negative near erogenous zones. Some jurisdictions may specify this as referring to the genitals, buttocks and female breasts.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Physical_intimacy"
            },
            "Q119216306": {
                "name": "St Cloud",
                "wikidata_aliases": "[]",
                "wikidata_summary": "painting by Roger Eliot Fry (1866–1934), Salford Museum & Art Gallery",
                "wikidata_url": "https://www.wikidata.org/wiki/Q119216306",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q119361001": {
                "name": "Star Wars Outlaws",
                "wikidata_aliases": "[\"Star Wars: Outlaws\",\"SWO\"]",
                "wikidata_summary": "2024 video game developed by Massive Entertainment",
                "wikidata_url": "https://www.wikidata.org/wiki/Q119361001",
                "wikipedia_summary": "Star Wars Outlaws is an upcoming action-adventure game set in the Star Wars universe developed by Massive Entertainment and published by Ubisoft under license by Lucasfilm Games. The game takes place during the period between The Empire Strikes Back and Return of the Jedi. It is scheduled to release for PlayStation 5, Windows, and Xbox Series X/S on 30 August 2024.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars_Outlaws"
            },
            "Q120597088": {
                "name": "Michael Siglain",
                "wikidata_aliases": "[]",
                "wikidata_summary": "americký editor a autor knih pro děti",
                "wikidata_url": "https://www.wikidata.org/wiki/Q120597088",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12078": {
                "name": "cancer",
                "wikidata_aliases": "[\"malignant neoplasm\",\"malignant tumor\",\"primary cancer\"]",
                "wikidata_summary": "group of diseases involving abnormal cell growth and spread",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12078",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q121032563": {
                "name": "Detect cancer before it starts by finding cell changes",
                "wikidata_aliases": "[]",
                "wikidata_summary": "scientific article published in 2011",
                "wikidata_url": "https://www.wikidata.org/wiki/Q121032563",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12140": {
                "name": "Medication",
                "wikidata_aliases": "[\"medicine\",\"pharmaceutical drug\",\"pharmaceutical\",\"suprative substance\",\"proactive substance\",\"drug\",\"curative substance\",\"pharmaceutical drug product\"]",
                "wikidata_summary": "substance used to diagnose, cure, treat, or prevent disease",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12140",
                "wikipedia_summary": "A medication (also called medicament, medicine, pharmaceutical drug, medicinal drug or simply drug) is a drug used to diagnose, cure, treat, or prevent disease. Drug therapy (pharmacotherapy) is an important part of the medical field and relies on the science of pharmacology for continual advancement and on pharmacy for appropriate management.\nDrugs are classified in many ways. One of the key divisions is by level of control, which distinguishes prescription drugs (those that a pharmacist dispenses only on the order of a physician, physician assistant, or qualified nurse) from over-the-counter drugs (those that consumers can order for themselves). Another key distinction is between traditional small molecule drugs, usually derived from chemical synthesis, and biopharmaceuticals, which include recombinant proteins, vaccines, blood products used therapeutically (such as IVIG), gene therapy, monoclonal antibodies and cell therapy (for instance, stem cell therapies). Other ways to classify medicines are by mode of action, route of administration, biological system affected, or therapeutic effects. An elaborate and widely used classification system is the Anatomical Therapeutic Chemical Classification System. The World Health Organization keeps a list of essential medicines.\nDrug discovery and drug development are complex and expensive endeavors undertaken by pharmaceutical companies, academic scientists, and governments. As a result of this complex path from discovery to commercialization, partnering has become a standard practice for advancing drug candidates through development pipelines.  Governments generally regulate what drugs can be marketed, how drugs are marketed, and in some jurisdictions, drug pricing. Controversies have arisen over drug pricing and disposal of used drugs.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Medication"
            },
            "Q12206942": {
                "name": "Darth Vader",
                "wikidata_aliases": "[\"Lord Vader\",\"Anakin Skywalker\",\"Vader\"]",
                "wikidata_summary": "main villain of the Star Wars Trilogy",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12206942",
                "wikipedia_summary": "Darth Vader is a character in the Star Wars franchise. He is the primary antagonist of the original film trilogy and, as Anakin Skywalker, is the protagonist of the prequel trilogy. Originally a slave on the planet Tatooine, he becomes a powerful Jedi. He is lured to the dark side of the Force by Chancellor Palpatine, and becomes the Sith Lord Darth Vader. After being severely wounded in a lightsaber battle, he is transformed into a cyborg. He is the husband of Padmé Amidala and the biological father of Luke Skywalker and Leia Organa.David Prowse physically portrayed Vader in the original trilogy, while James Earl Jones provided his voice in all of the films and some television series. Sebastian Shaw portrayed the unmasked Anakin in Return of the Jedi, as well as the character's spirit in the original release of that film. Jake Lloyd played young Anakin in The Phantom Menace (1999), while Hayden Christensen portrayed him as a young adult in Attack of the Clones (2002) and Revenge of the Sith (2005). Christensen also played Anakin in post-2004 releases of Return of the Jedi and in the series Obi-Wan Kenobi (2022) and Ahsoka (2023). In the standalone film Rogue One: A Star Wars Story (2016), Vader is portrayed by Spencer Wilding and Daniel Naprous. Vader has also appeared in books, comics, and video games. He has become an iconic villain of cinema.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Darth_Vader"
            },
            "Q122367466": {
                "name": "dog caresses sick sheep: shepherd knows that it hopes for sheep's death",
                "wikidata_aliases": "[\"K2061.3.\"]",
                "wikidata_summary": "narrative motif documented in Thompson's Motif-Index of Folk-Literature",
                "wikidata_url": "https://www.wikidata.org/wiki/Q122367466",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q124149424": {
                "name": "Part Eight",
                "wikidata_aliases": "[\"Iwo Jima\"]",
                "wikidata_summary": "episode of The Pacific",
                "wikidata_url": "https://www.wikidata.org/wiki/Q124149424",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q124246549": {
                "name": "The Mandalorian & Grogu",
                "wikidata_aliases": "[\"The Mandalorian and Grogu\"]",
                "wikidata_summary": "upcoming film by Jon Favreau",
                "wikidata_url": "https://www.wikidata.org/wiki/Q124246549",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12478418": {
                "name": "Catster",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Publisher of content dedicated to cats, owners of cats, and breeders of cats",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12478418",
                "wikipedia_summary": "Catster is a North American monthly magazine dedicated to cats, owners of cats, and breeders of cats and also a website that publishes content for cat lovers. Its sister publication is Dogster, a website for dog lovers.\nIn October 2023, Pangolia acquired the historic Catster and Dogster brands from Belvoir Media Group.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Catster"
            },
            "Q12488383": {
                "name": "content",
                "wikidata_aliases": "[\"contents\"]",
                "wikidata_summary": "matter or entity that is contained",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12488383",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q129421": {
                "name": "University of California, Davis",
                "wikidata_aliases": "[\"UC Davis\",\"UCD\",\"Davis\",\"Davis University of California\",\"University of California at Davis\",\"Univ. of California, Davis\",\"U.C.D.\",\"ucdavis.edu\"]",
                "wikidata_summary": "public university in Davis, California; part of the University of California system",
                "wikidata_url": "https://www.wikidata.org/wiki/Q129421",
                "wikipedia_summary": "The University of California, Davis (UC Davis, UCD, or Davis) is a public land-grant research university in Davis, California, United States. It is the northernmost of the ten campuses of the University of California system. The institution was first founded as an agricultural branch of the system in 1905 and became the seventh campus of the University of California in 1959.\nFounded as a primarily agricultural campus, the university has expanded over the past century to include graduate and professional programs in medicine (which includes the UC Davis Medical Center), law, veterinary medicine, education, nursing, and business management, in addition to 90 research programs offered by UC Davis Graduate Studies. The UC Davis School of Veterinary Medicine is the largest veterinary school in the United States. The UC Center Sacramento, a public-service oriented program founded in 2004, is operated by UC Davis. UC Davis also offers certificates and courses, including online classes, for adults and non-traditional learners through its Division of Continuing and Professional Education.The university is classified among 'R1: Doctoral Universities – Very high research activity'. The UC Davis Aggies athletic teams compete in NCAA Division I, primarily as members of the Big West Conference with additional sports in the Big Sky Conference (football only) and the Mountain Pacific Sports Federation. Athletes from UC Davis have won a total of 10 Olympic medals. University faculty, alumni, and researchers have been the recipients of two Nobel Prizes, one Fields Medal, a Presidential Medal of Freedom, three Pulitzer Prizes, three MacArthur Fellowships, and a National Medal of Science.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/University_of_California,_Davis"
            },
            "Q131491": {
                "name": "Brighton",
                "wikidata_aliases": "[\"Brighthelmston\",\"Brighthelmstone\",\"Brighton, East Sussex\",\"Brighton, England\"]",
                "wikidata_summary": "city of Brighton & Hove, south coast of England",
                "wikidata_url": "https://www.wikidata.org/wiki/Q131491",
                "wikipedia_summary": "Brighton ( BRY-tən) is a seaside resort and one of the two main areas of the city of Brighton and Hove in the county of East Sussex, England. It is located 47 miles (76 km) south of London.\nArchaeological evidence of settlement in the area dates back to the Bronze Age, Roman and Anglo-Saxon periods. The ancient settlement of 'Brighthelmstone' was documented in the Domesday Book (1086). The town's importance grew in the Middle Ages as the Old Town developed, but it languished in the early modern period, affected by foreign attacks, storms, a suffering economy and a declining population. Brighton began to attract more visitors following improved road transport to London and becoming a boarding point for boats travelling to France. The town also developed in popularity as a health resort for sea bathing as a purported cure for illnesses.\nIn the Georgian era, Brighton developed as a highly fashionable seaside resort, encouraged by the patronage of the Prince Regent, later King George IV, who spent much time in the town and constructed the Royal Pavilion in the Regency era. Brighton continued to grow as a major centre of tourism following the arrival of the railways in 1841, becoming a popular destination for day-trippers from London. Many of the major attractions were built in the Victorian era, including the Grand Hotel, the Hilton Brighton Metropole, the Palace Pier and the West Pier. The town continued to grow into the 20th century, expanding to incorporate more areas into the town's boundaries before joining Hove to form the unitary authority of Brighton and Hove in 1997, which was granted city status in 2000. Today, Brighton and Hove district has a resident population of about 276,334 and the wider Brighton and Hove conurbation has a population of 474,485 (2011 census).Brighton's location has made it a popular destination for tourists, renowned for its diverse communities, shopping areas, large and vibrant cultural, music and arts scene, and its large LGBT population, leading to its recognition as the 'unofficial gay capital of the UK' and as of the 2021 census, 10.7% of the population of Brighton and Hove over the age of 18 identify as gay, lesbian or bisexual, the highest percentage in the entire UK. Brighton has been called the UK's 'hippest city' and 'the happiest place to live in the UK'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Brighton"
            },
            "Q1320143": {
                "name": "purebred",
                "wikidata_aliases": "[\"purebreed\",\"prure-bred\",\"pure breed\"]",
                "wikidata_summary": "'cultivated variety' of a species",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1320143",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1323132": {
                "name": "A Passage to India",
                "wikidata_aliases": "[\"Passage to India\"]",
                "wikidata_summary": "1984 film directed by David Lean",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1323132",
                "wikipedia_summary": "A Passage to India is a 1924 novel by English author E. M. Forster set against the backdrop of the British Raj and the Indian independence movement in the 1920s. It was selected as one of the 100 great works of 20th century English literature by the Modern Library and won the 1924 James Tait Black Memorial Prize for fiction. Time magazine included the novel in its 'All Time 100 Novels' list. The novel is based on Forster's experiences in India, deriving the title from Walt Whitman's 1870 poem 'Passage to India' in Leaves of Grass.The story revolves around four characters: Dr. Aziz, his British friend Mr. Cyril Fielding, Mrs. Moore, and Miss Adela Quested. During a trip to the fictitious Marabar Caves (modeled on the Barabar Caves of Bihar), Adela thinks she finds herself alone with Dr. Aziz in one of the caves (when in fact he is in an entirely different cave; whether the attacker is real or a reaction to the cave is ambiguous), and subsequently panics and flees; it is assumed that Dr. Aziz has attempted to assault her. Aziz's trial, and its run-up and aftermath, bring to a boil the common racial tensions and prejudices between Indians and the British during the colonial era.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/A_Passage_to_India"
            },
            "Q133186": {
                "name": "Bacteroides",
                "wikidata_aliases": "[]",
                "wikidata_summary": "genus of bacteria",
                "wikidata_url": "https://www.wikidata.org/wiki/Q133186",
                "wikipedia_summary": "Bacteroides is a genus of Gram-negative, obligate anaerobic bacteria. Bacteroides species are non endospore-forming bacilli, and may be either motile or nonmotile, depending on the species. The DNA base composition is 40–48% GC. Unusual in bacterial organisms, Bacteroides membranes contain sphingolipids. They also contain meso-diaminopimelic acid in their peptidoglycan layer.\nBacteroides species are normally mutualistic, making up the most substantial portion of the mammalian gastrointestinal microbiota, where they play a fundamental role in processing of complex molecules to simpler ones in the host intestine. As many as 1010–1011 cells per gram of human feces have been reported. They can use simple sugars when available; however, the main sources of energy for Bacteroides species in the gut are complex host-derived and plant glycans.  Studies indicate that long-term diet is strongly associated with the gut microbiome composition—those who eat plenty of protein and animal fats have predominantly Bacteroides bacteria, while for those who consume more carbohydrates the Prevotella species dominate.One of the most important clinically is Bacteroides fragilis.Bacteroides melaninogenicus has recently been reclassified and split into Prevotella melaninogenica and Prevotella intermedia.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bacteroides"
            },
            "Q133500": {
                "name": "learning",
                "wikidata_aliases": "[\"acquisition\",\"seeking knowledge\"]",
                "wikidata_summary": "any process in an organism in which a relatively long-lasting adaptive behavioral change occurs as the result of experience",
                "wikidata_url": "https://www.wikidata.org/wiki/Q133500",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q13371": {
                "name": "Harvard University",
                "wikidata_aliases": "[\"Harvard\",\"University of Harvard\",\"Harvard Graduate School\",\"harvard.edu\",\"Harvard university\",\"Kremlin on the Charles\",\"New College, Cambridge, Massachusetts\",\"Harvard U.\",\"Harvard Univ.\",\"Harvard.edu\"]",
                "wikidata_summary": "private university in Cambridge, Massachusetts",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13371",
                "wikipedia_summary": "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States.\nIts influence, wealth, and rankings have made it one of the most prestigious universities in the world.Harvard's founding was authorized by the Massachusetts colonial legislature, 'dreading to leave an illiterate ministry to the churches'. Though never formally affiliated with any denomination, in its early years Harvard College primarily trained Congregational clergy. Its curriculum and student body were gradually secularized during the 18th century. By the 19th century, Harvard emerged as the most prominent academic and cultural institution among the Boston elite. Following the American Civil War, under President Charles William Eliot's long tenure (1869–1909), the college developed multiple affiliated professional schools that transformed the college into a modern research university. In 1900, Harvard co-founded the Association of American Universities. James B. Conant led the university through the Great Depression and World War II, and liberalized admissions after the war.\nThe university is composed of ten academic faculties and the Harvard Radcliffe Institute. The Faculty of Arts and Sciences offers study in a wide range of undergraduate and graduate academic disciplines, and other faculties offer only graduate degrees, including professional degrees. Harvard has three main campuses:\nthe 209-acre (85 ha) Cambridge campus centered on Harvard Yard; an adjoining campus immediately across Charles River in the Allston neighborhood of Boston; and the medical campus in Boston's Longwood Medical Area. Harvard's endowment is valued at $50.7 billion, making it the wealthiest academic institution in the world.  Endowment income enables the undergraduate college to admit students regardless of financial need and provide financial aid with no loans. According to the American Library Association, Harvard University has the fourth-largest library by volumes held in the United States.\nHarvard alumni, faculty, and researchers have included 188 living billionaires, 8 U.S. presidents, numerous heads of state, founders of notable companies, Nobel laureates, Fields Medalists, members of Congress, MacArthur Fellows, Rhodes Scholars, Marshall Scholars, Turing Award Recipients, Pulitzer Prize winners, and Fulbright Scholars; by most metrics, Harvard ranks among the top globally in each of these categories. Additionally, students and alumni have won 10 Academy Awards and 110 Olympic medals (46 gold).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Harvard_University"
            },
            "Q1337354": {
                "name": "Steven Knight",
                "wikidata_aliases": "[]",
                "wikidata_summary": "British screenwriter and film director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1337354",
                "wikipedia_summary": "Steven Knight  (born 1 April 1959) is a British screenwriter, film and television producer and director. Knight wrote the screenplays for the films Closed Circuit, Dirty Pretty Things, and Eastern Promises, and also wrote and directed the films Locke and Hummingbird (a.k.a. Redemption).\nKnight is one of three creators of Who Wants to Be a Millionaire?, a game show that has been remade and aired in around 160 countries worldwide. He is also the creator of the BBC's Peaky Blinders and has written for Commercial Breakdown, The Detectives, See and Taboo.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Steven_Knight"
            },
            "Q133780": {
                "name": "plague",
                "wikidata_aliases": "[\"Yersinia pestis infectious disease\",\"obsolete Yersinia pestis infectious disease\",\"The Plague\"]",
                "wikidata_summary": "specific contagious and frequently fatal human disease caused by Yersinia pestis",
                "wikidata_url": "https://www.wikidata.org/wiki/Q133780",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q133976": {
                "name": "Corynebacterium",
                "wikidata_aliases": "[]",
                "wikidata_summary": "genus of bacteria",
                "wikidata_url": "https://www.wikidata.org/wiki/Q133976",
                "wikipedia_summary": "Corynebacterium () is a genus of  Gram-positive bacteria and most are aerobic. They are bacilli (rod-shaped), and in some phases of life they are, more specifically, club-shaped, which inspired the genus name (coryneform means 'club-shaped').\nThey are widely distributed in nature in the microbiota of animals (including the human microbiota) and are mostly innocuous, most commonly existing in commensal relationships with their hosts. Some, such as C. glutamicum, are commercially and industrially useful. Others can cause human disease, including, most notably, diphtheria, which is caused by C. diphtheriae. As with various species of microbiota (including their relatives in the genera Arcanobacterium and Trueperella), they usually are not pathogenic, but can occasionally opportunistically capitalize on atypical access to tissues (via wounds) or weakened host defenses.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Corynebacterium"
            },
            "Q134808": {
                "name": "Vaccine",
                "wikidata_aliases": "[\"vaccines\"]",
                "wikidata_summary": "substance used to stimulate the production of antibodies and provide immunity against one or several diseases,agent of a disease, its products, or a synthetic substitute",
                "wikidata_url": "https://www.wikidata.org/wiki/Q134808",
                "wikipedia_summary": "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious or malignant disease. The safety and effectiveness of vaccines has been widely studied and verified. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins. The agent stimulates the body's immune system to recognize the agent as a threat, destroy it, and recognize further and destroy any of the microorganisms associated with that agent that it may encounter in the future.\nVaccines can be  prophylactic (to prevent or alleviate the effects of a future infection by a natural or 'wild' pathogen), or therapeutic (to fight a disease that has already occurred, such as cancer). Some vaccines offer full sterilizing immunity, in which infection is prevented completely.The administration of vaccines is called vaccination. Vaccination is the most effective method of preventing infectious diseases; widespread immunity due to vaccination is largely responsible for the worldwide eradication of smallpox and the restriction of diseases such as polio, measles, and tetanus from much of the world. The World Health Organization (WHO) reports that licensed vaccines are currently available for twenty-five different preventable infections.The first recorded use of inoculation to prevent smallpox occurred in the 16th century in China, with the earliest hints of the practice in China coming during the 10th century. It was also the first disease for which a vaccine was produced. The folk practice of inoculation against smallpox was brought from Turkey to Britain in 1721 by Lady Mary Wortley Montagu.\nThe terms vaccine and vaccination are derived from Variolae vaccinae (smallpox of the cow), the term devised by Edward Jenner (who both developed the concept of vaccines and created the first vaccine) to denote cowpox. He used the phrase in 1798 for the long title of his Inquiry into the Variolae vaccinae Known as the Cow Pox, in which he described the protective effect of cowpox against smallpox. In 1881, to honor Jenner, Louis Pasteur proposed that the terms should be extended to cover the new protective inoculations then being developed. The science of vaccine development and production is termed vaccinology.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vaccine"
            },
            "Q13563071": {
                "name": "Leslye Headland",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American playwright, screenwriter and director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13563071",
                "wikipedia_summary": "Leslye Headland (born 1980) is an American film and television director, producer, screenwriter, and playwright. She is known for the play and 2012 film Bachelorette and 2015 film Sleeping with Other People. She co-created the Netflix series Russian Doll, along with Natasha Lyonne and Amy Poehler.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Leslye_Headland"
            },
            "Q1360577": {
                "name": "Masters",
                "wikidata_aliases": "[]",
                "wikidata_summary": "snooker tournament",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1360577",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1373493": {
                "name": "Lowe's",
                "wikidata_aliases": "[\"Lowe's Companies, Inc.\",\"Lowe's Home Improvement\",\"Lowes\"]",
                "wikidata_summary": "American home improvement retail chain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1373493",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1408": {
                "name": "New Jersey",
                "wikidata_aliases": "[\"Garden State\",\"Jersey\",\"NJ\",\"New Jersey, United States\",\"State of New Jersey\",\"N.J.\",\"US-NJ\",\"the State of New Jersey\",\"the Garden State\",\"Iersey\",\"New Iersey\"]",
                "wikidata_summary": "state of the United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1408",
                "wikipedia_summary": "New Jersey is a state situated within both the Mid-Atlantic and Northeastern regions of the United States. It is the most densely populated of all 50 U.S. states, and is situated at the center of the Northeast megalopolis. New Jersey is bordered on its north and east by New York state; on its east, southeast, and south by the Atlantic Ocean; on its west by the Delaware River and Pennsylvania; and on its southwest by Delaware Bay and Delaware. At 7,354 square miles (19,050 km2), New Jersey is the fifth-smallest state in land area, but with close to 9.3 million residents as of the 2020 United States census, its highest decennial count ever, it ranks 11th in population. The state capital is Trenton, and the state's most populous city is Newark. New Jersey is the only U.S. state in which every county is deemed urban by the U.S. Census Bureau with 13 counties included in the New York metropolitan area, seven counties in the Philadelphia metropolitan area, and Warren County part of the heavily industrialized Lehigh Valley metropolitan area.\nNew Jersey was first inhabited by Paleo-Indians as early as 13,000 B.C.E., with the Lenape being the dominant Indigenous group when Europeans arrived in the early 17th century. Dutch and Swedish colonists founded the first European settlements in the state, with the British later seizing control of the region and establishing the Province of New Jersey, named after the largest of the Channel Islands. The colony's fertile lands and relative religious tolerance drew a large and diverse population. New Jersey was among the Thirteen Colonies that supported the American Revolution, hosting several pivotal battles and military commands in the American Revolutionary War. On December 18, 1787, New Jersey became the third state to ratify the United States Constitution, which granted it admission to the Union, and it was the first state to ratify the U.S. Bill of Rights on November 20, 1789.\nNew Jersey remained in the Union during the American Civil War and provided troops, resources, and military leaders in support of the Union Army. After the war, the state emerged as a major manufacturing center and a leading destination for immigrants, helping drive the Industrial Revolution in the U.S. New Jersey was the site of many industrial, technological, and commercial innovations, including the first town (Roselle) to be illuminated by electricity, the first incandescent light bulb, and the first steam locomotive. Many prominent Americans associated with New Jersey have proven influential nationally and globally, including in academia, advocacy, business, entertainment, government, military, non-profit leadership, and other fields.\nNew Jersey's central location in the Northeast megalopolis helped fuel its rapid growth and suburbanization in the second half of the 20th century. Since the beginning of the 21st century, the state's economy has become highly diversified, with major sectors including biotechnology, pharmaceuticals, information technology, finance, and tourism, and it has become an Atlantic seaboard epicenter for logistics and distribution. New Jersey remains a major destination for immigrants and is home to one of the world's most ethnically diverse and multicultural populations. Echoing historical trends, the state has increasingly re-urbanized, with growth in cities outpacing suburbs since 2008.As of 2022, New Jersey had the highest annual median household income, at $96,346, of all 50 states. Almost one-tenth of all households in the state, or over 323,000, are millionaires, the highest representation of millionaires among all states. New Jersey's public school system consistently ranks at or among the top of all U.S. states. According to climatology research by the U.S. National Oceanic and Atmospheric Administration, New Jersey has been the fastest-warming state by average air temperature over a 100-year period beginning in the early 20th century, which has been attributed to warming of the North Atlantic Ocean.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/New_Jersey"
            },
            "Q1409501": {
                "name": "Ewok",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional race that appear in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1409501",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q142": {
                "name": "France",
                "wikidata_aliases": "[\"fr\",\"FR\",\"French Republic\",\"Republic of France\",\"FRA\",\"the Hexagon\"]",
                "wikidata_summary": "country in Western Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q142",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1425095": {
                "name": "Ogg Tarkin",
                "wikidata_aliases": "[\"Tarkin\"]",
                "wikidata_summary": "video codec",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1425095",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1425428": {
                "name": "Newcastle upon Tyne",
                "wikidata_aliases": "[\"Newcastle\",\"Newcastle-on-Tyne\",\"Newcastle upon Tyne (parish)\",\"Newcastle-upon-Tyne\"]",
                "wikidata_summary": "city in Tyne and Wear, England, UK",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1425428",
                "wikipedia_summary": "Newcastle upon Tyne, or simply Newcastle (  new-KASS-əl, RP:   NEW-kah-səl), is a city and metropolitan borough in Tyne and Wear, England. It is England's northernmost metropolitan borough, located on the River Tyne's northern bank opposite Gateshead to the south. It is the most populous settlement in the Tyneside conurbation and North East England.Newcastle developed around a Roman settlement called Pons Aelius. The settlement became known as Monkchester before taking on the name of a castle built in 1080 by William the Conqueror's eldest son, Robert Curthose. It was one of the world's largest ship building and repair centres during the industrial revolution. Newcastle is historically part of the county of Northumberland but was governed as a county corporate after 1400. In 1974, Newcastle became part of Tyne and Wear. Since 2018, the city council has been part of the North of Tyne Combined Authority.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Newcastle_upon_Tyne"
            },
            "Q1433745": {
                "name": "Hammer Film Productions",
                "wikidata_aliases": "[\"Hammer Films\",\"Hammer\"]",
                "wikidata_summary": "British horror film studio",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1433745",
                "wikipedia_summary": "Hammer Film Productions Ltd. is a British film production company based in London. Founded in 1934, the company is best known for a series of Gothic horror and fantasy films made from the mid-1950s until the 1970s. Many of these involve classic horror characters such as Baron Victor Frankenstein, Count Dracula, and the Mummy, which Hammer reintroduced to audiences by filming them in vivid colour for the first time. Hammer also produced science fiction, thrillers, film noir and comedies, as well as, in later years, television series.\nDuring its most successful years, Hammer dominated the horror film market, enjoying worldwide distribution and considerable financial success. This success was, in part, due to its distribution partnerships with American companies United Artists, Warner Bros., Universal Pictures, Columbia Pictures, Paramount Pictures, 20th Century Studios, Metro-Goldwyn-Mayer, American International Pictures and Seven Arts Productions.\nDuring the late 1960s and 1970s, the saturation of the horror film market by competitors and the loss of American funding forced changes to the previously lucrative Hammer formula with varying degrees of success. The company eventually ceased production in the mid-1980s. In 2000, the studio was bought by a consortium including advertising executive and art collector Charles Saatchi and publishing millionaires Neil Mendoza and William Sieghart. The company announced plans to begin making films again, but none was produced.\nIn May 2007, the company name was sold to a consortium headed by Dutch media tycoon John de Mol, who announced plans to spend some $50 million (£25m) on new horror films. The new organization acquired the Hammer group's film library of 295 pictures. Simon Oakes, who took over as CEO of the new Hammer, said, 'Hammer is a great British brand—we intend to take it back into production and develop its global potential. The brand is still alive but no one has invested in it for a long time.'Since then, Hammer has produced several films, including Beyond the Rave (2008), Let Me In (2010), The Resident (2011), The Woman in Black (2012), The Quiet Ones (2014), and The Lodge (2019).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hammer_Film_Productions"
            },
            "Q14339857": {
                "name": "Japanese folklore",
                "wikidata_aliases": "[]",
                "wikidata_summary": "folk traditions of Japan, expressed in oral traditions, customs, and material culture",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14339857",
                "wikipedia_summary": "Japanese folklore encompasses the informally learned folk traditions of Japan and the Japanese people as expressed in its oral traditions, customs, and material culture.\nIn Japanese, the term minkan denshō (民間伝承, 'transmissions among the folk') is used to describe folklore. The academic study of folklore is known as minzokugaku (民俗学). Folklorists also employ the term minzoku shiryō (民俗資料) or 'folklore material' (民俗資料) to refer to the objects and arts they study.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Japanese_folklore"
            },
            "Q144": {
                "name": "Dog",
                "wikidata_aliases": "[\"domestic dog\",\"Canis lupus familiaris\",\"Canis familiaris\",\"dogs\",\"🐶\",\"🐕\"]",
                "wikidata_summary": "domestic animal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q144",
                "wikipedia_summary": "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves, and the gray wolf is the dog's closest living relative. The dog was the first species to be domesticated by humans. Experts estimate that hunter-gatherers domesticated dogs more than 15,000 years ago, which was before the development of agriculture. Due to their long association with humans, dogs have expanded to a large number of domestic individuals and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.The dog has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and the military, companionship, therapy, and aiding disabled people. Over the millennia, dogs became uniquely adapted to human behavior, and the human–canine bond has been a topic of frequent study. This influence on human society has given them the sobriquet of 'man's best friend'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dog"
            },
            "Q14417": {
                "name": "Asajj Ventress",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14417",
                "wikipedia_summary": "Asajj Ventress () is a character from the Star Wars franchise. Originally intended to appear as an antagonist in the 2002 film Star Wars: Episode II – Attack of the Clones, she was first introduced in the 2003 micro-series Star Wars: Clone Wars (voiced by Grey DeLisle), and is part of the Star Wars Legends continuity. A different version of Ventress was featured in the 2008 animated film The Clone Wars and the subsequent television series of the same name, in which she is voiced by Nika Futterman. The character also appears in tie-in Star Wars media such as books, comics, and video games, and has become a favorite among fans.\nIn the Star Wars universe, Ventress is a former member of the Nightsisters, a mysterious matriarchal cult of witches from the red planet Dathomir, who was sold into slavery as a child, and was subsequently taken in as a Jedi Padawan by the Jedi Master who saved her. Following her master's death in battle, Ventress falls to the dark side of the Force and becomes Count Dooku's informal Sith apprentice and personal assassin. As a Sith assassin, she wields two lightsabers with curved handles that can attach together and form a double bladed weapon with a curve in the middle. Originally a villain opposing the Jedi and the Galactic Republic, she is eventually betrayed by Dooku and, after a failed attempt to exact revenge on him, tries to distance herself from her old life by turning to bounty hunting. Despite her efforts, however, Ventress finds herself drawn back into the Clone Wars when she helps her former Jedi enemies in various situations, slowly redeeming herself. In the 2015 novel Star Wars: Dark Disciple, adapted from an eight-episode arc intended for the seventh season of The Clone Wars, Ventress works with the Jedi Quinlan Vos in a secret mission to assassinate Dooku, and seemingly sacrifices her life to save Vos from him. Ventress later appears in Star Wars: The Bad Batch with the circumstances of her survival unclear.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Asajj_Ventress"
            },
            "Q1446181": {
                "name": "Hunter College",
                "wikidata_aliases": "[\"Hunter\",\"Normal College of the City of New York)\",\"Normal College of the City of New York\",\"CUNY Hunter\",\"New York Normal College\"]",
                "wikidata_summary": "university in New York City",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1446181",
                "wikipedia_summary": "Hunter College is a public university in New York City. It is one of the constituent colleges of the City University of New York and offers studies in more than one hundred undergraduate and postgraduate fields across five schools. It also administers Hunter College High School and Hunter College Elementary School.Hunter was founded in 1870 as a women's college; it first admitted male freshmen in 1946. The main campus has been located on Park Avenue since 1873. In 1943, Eleanor Roosevelt dedicated Franklin Delano Roosevelt's and her former townhouse to the college; the building was reopened in 2010 as the Roosevelt House Public Policy Institute at Hunter College. The institution has a 57% undergraduate graduation rate within six years.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hunter_College"
            },
            "Q146": {
                "name": "house cat",
                "wikidata_aliases": "[\"cat\",\"domestic cat\",\"housecat\",\"puss\",\"cats\"]",
                "wikidata_summary": "domesticated feline",
                "wikidata_url": "https://www.wikidata.org/wiki/Q146",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1466613": {
                "name": "Massive Entertainment",
                "wikidata_aliases": "[\"Ubisoft Massive\",\"Ubisoft Massive Entertainment\"]",
                "wikidata_summary": "Swedish video game developer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1466613",
                "wikipedia_summary": "Massive Entertainment AB is a Swedish video game developer and a studio of Ubisoft based in Malmö. The company has been fully owned by Ubisoft since 2008. The studio is known for Tom Clancy's The Division, The Division 2, Ground Control, and World in Conflict.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Massive_Entertainment"
            },
            "Q1474329": {
                "name": "Tabby cat",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Domestic cat with a distinctive coat marked by stripes, dots, lines, or other patterns",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1474329",
                "wikipedia_summary": "A tabby cat, or simply tabby, is any domestic cat (Felis catus) with a distinctive M-shaped marking on their forehead, stripes by their eyes and across their cheeks, along their back, around their legs and tail, and characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body: neck, shoulders, sides, flanks, chest, and abdomen. The four known distinct patterns, each having a sound genetic explanation, are the mackerel, classic or blotched, ticked, and spotted tabby patterns.\n'Tabby' is not a breed of cat but a coat pattern found in many official cat breeds. It is very common among the general population of mixed-breed cats around the world. The tabby pattern occurs naturally and is connected both to the coat of the domestic cat's direct ancestor and to those of their close relatives: the African wildcat (Felis lybica lybica), the European wildcat (Felis silvestris) and the Asiatic wildcat (Felis lybica ornata), all of which have similar coats, both by pattern and coloration. One genetic study of domestic cats found at least five founders.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Tabby_cat"
            },
            "Q148": {
                "name": "China",
                "wikidata_aliases": "[\"Red China\",\"PR China\",\"Communist China\",\"Mainland China\",\"China PR\",\"CHN\",\"RPC\",\"PRC\",\"CN\",\"🇨🇳\",\"cn\",\"China\",\"The PRC\"]",
                "wikidata_summary": "country in East Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q148",
                "wikipedia_summary": "China, officially the People's Republic of China (PRC), is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country. China spans the equivalent of five time zones and borders fourteen countries by land. With an area of nearly 9.6 million square kilometers (3,700,000 sq mi), it is the third-largest country by total land area. The country is divided into 33 province-level divisions, inclusive of 22 provinces, five autonomous regions, four municipalities, and two semi-autonomous special administrative regions. Beijing is the national capital, while Shanghai is its most populous city and largest financial center.\nOne of the cradles of civilization, China has been inhabited since the Paleolithic era, with the earliest dynasties emerging in the Yellow River basin before the late second millennium BCE. The eighth to third centuries BCE saw a breakdown in the authority of the Zhou dynasty, accompanied by the emergence of administrative and military techniques, literature, philosophy, and historiography. In 221 BCE, China was unified under an emperor for the first time. Appointed non-hereditary officials began ruling counties instead of the aristocracy, ushering in more than two millennia of imperial dynasties including the Qin, Han, Tang, Yuan, Ming, and Qing. With the invention of gunpowder and paper, the establishment of the Silk Road, and the building of the Great Wall, Chinese culture—including languages, traditions, architecture, philosophy and technology—flourished and has heavily influenced East Asia and beyond.\nAfter decades of struggle, the monarchy was overthrown in 1912 and the Republic of China (ROC) was established. Despite China's eventual victory in the Second Sino-Japanese War and the Pacific War in general, numerous atrocities such as the Nanjing Massacre left lasting effects on the country. Concurrently during this period, the Chinese Communist Party (CCP) and the Kuomintang (KMT) government were fighting sporadically since 1927, with a brief truce as a united front when Japan began invading the country. The second phase of the civil war resumed not long after Japan was defeated, and by 1949, the CCP had established control on most of the territories of the country. As the KMT retreated to Taiwan, the country was split with both sides claiming to be the sole legitimate government of China. After the land reforms, later attempts to realize communism failed—the Great Leap Forward led to a massive famine of millions of citizens, while the Cultural Revolution caused a chaotic period of persecution and zealous Maoist populism. In 1971, the PRC replaced the ROC as China's representation in the United Nations (UN). Following the Sino-Soviet split, the Shanghai Communiqué in 1972 marked the beginning of normalized relations with the United States. Economic reforms that began in 1978 led by reformists within the CCP moved the country away from a socialist planned economy toward an increasingly capitalist market economy, spurring significant economic growth, although liberal and democratic political reforms stalled after the June Fourth Incident in 1989.\nChina is a unitary one-party socialist republic led by the CCP. It is a founding member of the UN and one of the five permanent members of the UN Security Council. It is a founding member of several multilateral and regional organizations such as the AIIB, the Silk Road Fund, the New Development Bank, and the RCEP. It is a member of the BRICS, the G20, APEC, the SCO, and the East Asia Summit. Making up around one-fifth of the world economy, the Chinese economy is the world's largest economy by GDP at purchasing power parity, the second-largest economy by nominal GDP, and the second-wealthiest country, albeit ranking poorly in measures of democracy, human rights and religious freedoms. The country has been one of the fastest-growing major economies and is the world's largest manufacturer and exporter, as well as the second-largest importer. China is a nuclear-weapon state with the world's largest standing army by military personnel and the second-largest defense budget. It is a great power and a regional power.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/China"
            },
            "Q14927695": {
                "name": "Dark Horse",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2013 song by Katy Perry",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14927695",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q14944179": {
                "name": "Peaky Blinders",
                "wikidata_aliases": "[]",
                "wikidata_summary": "British period drama television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14944179",
                "wikipedia_summary": "The Peaky Blinders were a street gang based in Birmingham, England, which operated from the 1880s until the 1920s. The group consisted largely of young criminals from lower- to working-class backgrounds. They engaged in robbery, violence, racketeering, illegal bookmaking, and control of gambling. Members wore signature outfits that typically included tailored jackets, lapelled overcoats, buttoned waistcoats, silk scarves, bell-bottom trousers, leather boots, and peaked flat caps. Contrary to the television series of the same name, it is unlikely that they had razor blades sewn into these caps, instead gaining their name from the manner in which they wore them with the cap tilted so that the peak covered one eye.\nThe Blinders' dominance came about from beating rivals, including the 'Sloggers', 'a pugilistic term for someone who could strike a heavy blow in the ring', whom they fought for territory in Birmingham and its surrounding districts. They held 'control' for nearly 30 years until 1920, when a larger gang, the Birmingham Boys, led by Billy Kimber, overtook them. Although they had disappeared by the 1920s, the name 'Peaky Blinders' became synonymous slang for any street gang in Birmingham.\nIn 2013, the name was reused for a BBC Television series entitled Peaky Blinders. The series, which stars Cillian Murphy, Paul Anderson, Sam Neill, Helen McCrory and Joe Cole, is a crime story about a fictional crime family operating in Birmingham just after World War I.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Peaky_Blinders"
            },
            "Q153": {
                "name": "ethanol",
                "wikidata_aliases": "[\"EtOH\",\"C2H5OH\",\"hydroxyethane\",\"1-hydroxyethane\",\"E1510\",\"ethyl alcohol\",\"anhydrol\",\"ethyl alcohol anhydrous\",\"ethyl hydroxide\",\"anhydrous alcohol\",\"alcohol anhydrous\",\"alcohol\",\"methylcarbinol\",\"dehydrated ethanol\",\"ethyl hydrate\",\"dehydrated alcohol\",\"acid alcohol\"]",
                "wikidata_summary": "chemical compound",
                "wikidata_url": "https://www.wikidata.org/wiki/Q153",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1542815": {
                "name": "Hero's journey",
                "wikidata_aliases": "[\"hero's journey\"]",
                "wikidata_summary": "pattern in storytelling",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1542815",
                "wikipedia_summary": "In narratology and comparative mythology, the hero's journey, also known as the monomyth, is the common template of stories that involve a hero who goes on an adventure, is victorious in a decisive crisis, and comes home changed or transformed.\nEarlier figures had proposed similar concepts, including psychoanalyst Otto Rank and amateur anthropologist Lord Raglan. Eventually, hero myth pattern studies were popularized by Joseph Campbell, who was influenced by Carl Jung's analytical psychology. Campbell used the monomyth to analyze and compare religions. In his famous book The Hero with a Thousand Faces (1949), he describes the narrative pattern as follows:\n\nA hero ventures forth from the world of common day into a region of supernatural wonder: fabulous forces are there encountered and a decisive victory is won: the hero comes back from this mysterious adventure with the power to bestow boons on his fellow man.\nCampbell's theories regarding the concept of a 'monomyth' have been the subject of criticism from scholars, particularly folklorists (scholars active in folklore studies), who have dismissed the concept as a non-scholarly approach suffering from source-selection bias, among other criticisms. More recently, the hero's journey has been analyzed as an example of the sympathetic plot, a universal narrative structure in which a goal-directed protagonist confronts obstacles, overcomes them, and eventually reaps rewards.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hero%27s_journey"
            },
            "Q1570892": {
                "name": "Middle Village",
                "wikidata_aliases": "[\"Nanaweyah Omīnīhekan\",\"Middle Village, WI\"]",
                "wikidata_summary": "census designated place in Wisconsin",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1570892",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q15856": {
                "name": "Proteus",
                "wikidata_aliases": "[\"Proteus anguinus\",\"Cave salamander\",\"human fish\",\"white salamander\",\"proteus\"]",
                "wikidata_summary": "species of amphibian",
                "wikidata_url": "https://www.wikidata.org/wiki/Q15856",
                "wikipedia_summary": "In Greek mythology, Proteus ( PROH-tee-əs, PROHT-yooss; Ancient Greek: Πρωτεύς, romanized: Prōteús) is an early prophetic sea god or god of rivers and oceanic bodies of water, one of several deities whom Homer calls the 'Old Man of the Sea' (hálios gérôn). Some who ascribe a specific domain to Proteus call him the god of 'elusive sea change', which suggests the changeable nature of the sea or the liquid quality of water. He can foretell the future, but, in a mytheme familiar to several cultures, will change his shape to avoid doing so; he answers only to those who are capable of capturing him. From this feature of Proteus comes the adjective protean, meaning 'versatile', 'mutable', or 'capable of assuming many forms'. 'Protean' has positive connotations of flexibility, versatility and adaptability.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Proteus"
            },
            "Q160122": {
                "name": "Influenza A virus subtype H5N1",
                "wikidata_aliases": "[\"H5N1\",\"A(H5N1)\",\"Influenza A Virus, H5N1 Subtype\"]",
                "wikidata_summary": "subtype of influenza A virus",
                "wikidata_url": "https://www.wikidata.org/wiki/Q160122",
                "wikipedia_summary": "Influenza A virus subtype H5N1 (A/H5N1) is a subtype of the influenza A virus which can cause illness in humans and many other species. A bird-adapted strain of H5N1, called HPAI A(H5N1) for highly pathogenic avian influenza virus of type A of subtype H5N1, is the highly pathogenic causative agent of H5N1 flu, commonly known as avian influenza ('bird flu'). It is enzootic (maintained in the population) in many bird populations, especially in Southeast Asia. One strain of HPAI A(H5N1) is spreading globally after first appearing in Asia. It is epizootic (an epidemic in nonhumans) and panzootic (affecting animals of many species, especially over a wide area), killing tens of millions of birds and spurring the culling of hundreds of millions of others to stem its spread. Many references to 'bird flu' and H5N1 in the popular media refer to this strain.According to the World Health Organization (WHO) and the United Nations Food and Agriculture Organization (FAO), H5N1 pathogenicity is gradually continuing to rise in endemic areas, but the avian influenza disease situation in farmed birds is being held in check by vaccination, and there is 'no evidence of sustained human-to-human transmission' of the virus. Eleven outbreaks of H5N1 were reported worldwide in June 2008, in five countries (China, Egypt, Indonesia, Pakistan and Vietnam) compared to 65 outbreaks in June 2006, and 55 in June 2007. The global HPAI situation significantly improved in the first half of 2008, but FAO reports that imperfect disease surveillance systems mean that occurrence of the virus remains underestimated and underreported. As of March 2024, the WHO reported a total of 888 confirmed human cases which resulted in the deaths of 463 people since 2003.Several H5N1 vaccines have been developed and approved, and stockpiled by a number of countries, including the United States (in its National Stockpile), Britain, France, Canada, and Australia, for use in an emergency.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Influenza_A_virus_subtype_H5N1"
            },
            "Q16559": {
                "name": "Austin",
                "wikidata_aliases": "[\"Austin, Texas\",\"Austin, TX\"]",
                "wikidata_summary": "city in and county seat of Travis County, Texas, United States, that is also the capital of the State of Texas",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16559",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q16565": {
                "name": "Charlotte, North Carolina",
                "wikidata_aliases": "[\"Charlotte, North Carolina\",\"Charlotte, NC\"]",
                "wikidata_summary": "city in and county seat of Mecklenburg County, North Carolina, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16565",
                "wikipedia_summary": "Charlotte ( SHAR-lət) is the most populous city in the U.S. state of North Carolina and the county seat of Mecklenburg County. The population was 874,579 at the 2020 census, making Charlotte the 15th-most populous city in the United States, the seventh-most populous city in the South, and the second-most populous city in the Southeast behind Jacksonville, Florida. The city is the cultural, economic, and transportation center of the Charlotte metropolitan area, whose estimated 2023 population of 2,805,115 ranked 22nd in the United States. Metrolina is part of an eighteen-county market region or combined statistical area with an estimated 2023 population of 3,387,115.Between 2004 and 2014, Charlotte was among the country's fastest-growing metropolitan areas, with 888,000 new residents. Based on U.S. census data from 2005 to 2015, Charlotte tops the U.S. in millennial population growth. It is the third-fastest-growing major city in the United States. Residents of Charlotte are referred to as 'Charlotteans'.Charlotte is home to the corporate headquarters of Bank of America, Truist Financial, and the East Coast headquarters of Wells Fargo, which along with other financial institutions has made it the second-largest banking center in the United States.Charlotte's notable attractions include three professional sports teams, the Carolina Panthers of the NFL, the Charlotte Hornets of the NBA, and Charlotte FC of MLS. The city is also home to the NASCAR Hall of Fame, Opera Carolina, the Charlotte Symphony, the Charlotte Ballet, Children's Theatre of Charlotte, Mint Museum, Harvey B. Gantt Center, Bechtler Museum of Modern Art, the Billy Graham Library, Levine Museum of the New South, Charlotte Museum of History, Carowinds amusement park, and the U.S. National Whitewater Center.Charlotte has a humid subtropical climate. It is located several miles east of the Catawba River and southeast of Lake Norman, the largest human-made lake in North Carolina. Lake Wylie and Mountain Island Lake are two smaller human-made lakes located near the city.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
            },
            "Q165713": {
                "name": "Star Wars: Episode I – The Phantom Menace",
                "wikidata_aliases": "[\"The Phantom Menace\",\"Star Wars Episode I - The Phantom Menace\",\"Star Wars: Episode I - The Phantom Menace\",\"Star Wars: Episode I -- The Phantom Menace\",\"Star Wars Episode I\"]",
                "wikidata_summary": "1999 American epic space opera film directed by George Lucas",
                "wikidata_url": "https://www.wikidata.org/wiki/Q165713",
                "wikipedia_summary": "Star Wars: Episode I – The Phantom Menace is a 1999 American epic space opera film written and directed by George Lucas. It stars Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd, Ahmed Best, Ian McDiarmid, Anthony Daniels, Kenny Baker, Pernilla August and Frank Oz. It is the fourth film in the Star Wars film series, the first film of the prequel trilogy and the first chronological chapter of the 'Skywalker Saga'. Set 32 years before the original trilogy (13 years before the formation of the Galactic Empire), during the era of the Galactic Republic, the plot follows Jedi Master Qui-Gon Jinn and his apprentice Obi-Wan Kenobi as they try to protect Queen Padmé Amidala of Naboo in hopes of securing a peaceful end to an interplanetary trade dispute. Joined by Anakin Skywalker—a young slave with unusually strong natural powers of the Force—they simultaneously contend with the mysterious return of the Sith. The film was produced by Lucasfilm and distributed by 20th Century Fox.Following the release of Return of the Jedi (1983), talks of a follow-up were proposed, but Lucas was unmotivated to return to the franchise. During the hiatus, the backstories he created for the characters, particularly Anakin's, sparked interest in him to develop a prequel trilogy during the 1990s. After he determined that computer-generated imagery (CGI) had advanced to the level he wanted for the prequel trilogy's visual effects, Lucas began writing The Phantom Menace in 1993, and production began in 1994. Filming started in June 1997—at locations at Leavesden Film Studios and the Tunisian desert—and ended in September. The film marked Lucas's first directorial effort after a 22-year hiatus following the original Star Wars in 1977.\nThe Phantom Menace was released in theaters on May 19, 1999, almost 16 years after the premiere of Return of the Jedi. The film's premiere was extensively covered by media and was widely anticipated because of the large cultural following the Star Wars saga had cultivated. Upon its release, The Phantom Menace received mixed reviews from critics. While the visual effects were praised, its exposition and characters—particularly Jar Jar Binks—received criticism. The movie was a box-office success and broke numerous box-office records during its debut. It grossed more than $924.3 million worldwide during its initial theatrical run, becoming the highest-grossing film of 1999, the second-highest-grossing film worldwide and in North America (behind Titanic), and the highest-grossing Star Wars film at the time (inflation notwithstanding). A 3D reissue was released in 2012 and brought the film's overall worldwide takings to over $1 billion. Attack of the Clones (2002) and Revenge of the Sith (2005) followed The Phantom Menace, rounding out the Star Wars prequel trilogy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace"
            },
            "Q1657681": {
                "name": "Michel Jouvet",
                "wikidata_aliases": "[\"Michel Valentin Marcel Jouvet\"]",
                "wikidata_summary": "French neurobiologist (1925-2017)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1657681",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q16738674": {
                "name": "Daisy Ridley",
                "wikidata_aliases": "[\"Daisy Jazz Isobel Ridley\"]",
                "wikidata_summary": "British actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16738674",
                "wikipedia_summary": "Daisy Jazz Isobel Ridley (born 10 April 1992) is an English actress. She rose to prominence for her role as Rey in the Star Wars sequel trilogy: The Force Awakens (2015), The Last Jedi (2017), and The Rise of Skywalker (2019). \nShe also appeared in the mystery film Murder on the Orient Express (2017), played the title character of the romantic drama Ophelia (2018), and has done occasional voice acting, such as the live-action/animated film Peter Rabbit (2018) and video games including Twelve Minutes (2021).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Daisy_Ridley"
            },
            "Q167676": {
                "name": "Sensor",
                "wikidata_aliases": "[\"measuring element\",\"Sensor\"]",
                "wikidata_summary": "device that measures a physical quantity and converts it into a signal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q167676",
                "wikipedia_summary": "A sensor is a device that produces an output signal for the purpose of detecting a physical phenomenon.\nIn the broadest definition, a sensor is a device, module, machine, or subsystem that detects events or changes in its environment and sends the information to other electronics, frequently a computer processor. \nSensors are used in everyday objects such as touch-sensitive elevator buttons (tactile sensor) and lamps which dim or brighten by touching the base, and in innumerable applications of which most people are never aware. With advances in micromachinery and easy-to-use microcontroller platforms, the uses of sensors have expanded beyond the traditional fields of temperature, pressure and flow measurement, for example into MARG sensors.\nAnalog sensors such as potentiometers and force-sensing resistors are still widely used. Their applications include manufacturing and machinery, airplanes and aerospace, cars, medicine, robotics and many other aspects of our day-to-day life. There is a wide range of other sensors that measure chemical and physical properties of materials, including optical sensors for refractive index measurement, vibrational sensors for fluid viscosity measurement, and electro-chemical sensors for monitoring pH of fluids.\nA sensor's sensitivity indicates how much its output changes when the input quantity it measures changes. For instance, if the mercury in a thermometer moves 1  cm when the temperature changes by 1 °C, its sensitivity is 1 cm/°C (it is basically the slope dy/dx assuming a linear characteristic). Some sensors can also affect what they measure; for instance, a room temperature thermometer inserted into a hot cup of liquid cools the liquid while the liquid heats the thermometer.  Sensors are usually designed to have a small effect on what is measured; making the sensor smaller often improves this and may introduce other advantages.Technological progress allows more and more sensors to be manufactured on a microscopic scale as microsensors using MEMS technology. In most cases, a microsensor reaches a significantly faster measurement time and higher sensitivity compared with macroscopic approaches. Due to the increasing demand for rapid, affordable and reliable information in today's world, disposable sensors—low-cost and easy‐to‐use devices for short‐term monitoring or single‐shot measurements—have recently gained growing importance. Using this class of sensors, critical analytical information can be obtained by anyone, anywhere and at any time, without the need for recalibration and worrying about contamination.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sensor"
            },
            "Q17": {
                "name": "Japan",
                "wikidata_aliases": "[\"State of Japan\",\"Land of the Rising Sun\",\"Nihon\",\"Nippon\",\"JP\",\"Nippon-koku\",\"Nihon-koku\",\"JPN\",\"jp\",\"JAP\",\"Jap\",\"JA\",\"Ja\",\"🇯🇵\",\"Iapan\",\"Iapon\",\"Land of Rising Sun\"]",
                "wikidata_summary": "island country in East Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q17",
                "wikipedia_summary": "Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 14,125 islands, with the five main islands being Hokkaido, Honshu (the 'mainland'), Shikoku, Kyushu, and Okinawa. Tokyo is the country's capital and largest city, followed by Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.\nJapan has over 125 million inhabitants and is the 11th most populous country in the world, as well as one of the most densely populated. About three-fourths of the country's terrain is mountainous, concentrating its highly urbanized population on narrow coastal plains. Japan is divided into 47 administrative prefectures and eight traditional regions. The Greater Tokyo Area is the most populous metropolitan area in the world. Japan has the world's highest life expectancy, although it is experiencing a population decline due to its very low birth rate.\nJapan has been inhabited since the Upper Paleolithic period (30,000 BC). Between the fourth and ninth centuries AD, the kingdoms of Japan became unified under an emperor and the imperial court based in Heian-kyō. Beginning in the 12th century, political power was held by a series of military dictators (shōgun) and feudal lords (daimyō), and enforced by a class of warrior nobility (samurai). After a century-long period of civil war, the country was reunified in 1603 under the Tokugawa shogunate, which enacted an isolationist foreign policy. In 1854, a United States fleet forced Japan to open trade to the West, which led to the end of the shogunate and the restoration of imperial power in 1868. In the Meiji period, the Empire of Japan adopted a Western-modeled constitution, and pursued a program of industrialization and modernization. Amidst a rise in militarism and overseas colonization, Japan invaded China in 1937 and entered World War II as an Axis power in 1941. After suffering defeat in the Pacific War and two atomic bombings, Japan surrendered in 1945 and came under a seven-year Allied occupation, during which it adopted a new constitution.\nUnder the 1947 constitution, Japan has maintained a unitary parliamentary constitutional monarchy with a bicameral legislature, the National Diet. Japan is a developed country and a great power, with one of the largest economies by nominal GDP. Japan has renounced its right to declare war, though it maintains a Self-Defense Force that ranks as one of the world's strongest militaries. A global leader in the automotive, robotics, and electronics industries, the country has made significant contributions to science and technology, and is one of the world's largest exporters and importers. It is part of multiple major international and intergovernmental institutions.\nJapan is a cultural superpower as the culture of Japan is well known around the world, including its art, cuisine, film, music, and popular culture, which encompasses prominent manga, anime, and video game industries.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Japan"
            },
            "Q170201": {
                "name": "Veterinary medicine",
                "wikidata_aliases": "[\"veterinary science\",\"veterinary sciences\",\"veterinary studies\"]",
                "wikidata_summary": "medical speciality dealing with the diseases of animals, animal welfare, etc.",
                "wikidata_url": "https://www.wikidata.org/wiki/Q170201",
                "wikipedia_summary": "Veterinary medicine is the branch of medicine that deals with the prevention, management, diagnosis, and treatment of disease, disorder, and injury in non-human animals. The scope of veterinary medicine is wide, covering all animal species, both domesticated and wild, with a wide range of conditions that can affect different species.\nVeterinary medicine is widely practiced, both with and without professional supervision. Professional care is most often led by a veterinary physician (also known as a veterinarian, veterinary surgeon, or 'vet'), but also by paraveterinary workers, such as veterinary nurses, veterinary technicians, and veterinary assistants. This can be augmented by other paraprofessionals with specific specialties, such as animal physiotherapy or dentistry, and species-relevant roles such as farriers.\nVeterinary science helps human health through the monitoring and control of zoonotic disease (infectious disease transmitted from nonhuman animals to humans), food safety, and through human applications via medical research. They also help to maintain food supply through livestock health monitoring and treatment, and mental health by keeping pets healthy and long-living. Veterinary scientists often collaborate with epidemiologists and other health or natural scientists, depending on type of work. Ethically, veterinarians are usually obliged to look after animal welfare. Veterinarians diagnose, treat, and help keep animals safe and healthy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Veterinary_medicine"
            },
            "Q170430": {
                "name": "Predation",
                "wikidata_aliases": "[\"Carnivora\",\"predator\"]",
                "wikidata_summary": "biological interaction where a predator feeds on a prey organism",
                "wikidata_url": "https://www.wikidata.org/wiki/Q170430",
                "wikipedia_summary": "Predation is a biological interaction where one organism, the predator, kills and eats another organism, its prey. It is one of a family of common feeding behaviours that includes parasitism and micropredation (which usually do not kill the host) and parasitoidism (which always does, eventually). It is distinct from scavenging on dead prey, though many predators also scavenge; it overlaps with herbivory, as seed predators and destructive frugivores are predators.\nPredators may actively search for or pursue prey or wait for it, often concealed. When prey is detected, the predator assesses whether to attack it. This may involve ambush or pursuit predation, sometimes after stalking the prey. If the attack is successful, the predator kills the prey, removes any inedible parts like the shell or spines, and eats it.\nPredators are adapted and often highly specialized for hunting, with acute senses such as vision, hearing, or smell. Many predatory animals, both vertebrate and invertebrate, have sharp claws or jaws to grip, kill, and cut up their prey. Other adaptations include stealth and aggressive mimicry that improve hunting efficiency.\nPredation has a powerful selective effect on prey, and the prey develop antipredator adaptations such as warning coloration, alarm calls and other signals, camouflage, mimicry of well-defended species, and defensive spines and chemicals. Sometimes predator and prey find themselves in an evolutionary arms race, a cycle of adaptations and counter-adaptations. Predation has been a major driver of evolution since at least the Cambrian period.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Predation"
            },
            "Q170744": {
                "name": "Ketone",
                "wikidata_aliases": "[\"ketones\"]",
                "wikidata_summary": "class of organic compounds having structure RCOR´",
                "wikidata_url": "https://www.wikidata.org/wiki/Q170744",
                "wikipedia_summary": "In organic chemistry, a ketone  is an organic compound with the structure R−C(=O)−R', where R and R' can be a variety of carbon-containing substituents. Ketones contain a carbonyl group −C(=O)− (which contains a carbon-oxygen double bond C=O). The simplest ketone is acetone (where R and R' is methyl), with the formula (CH3)2CO. Many ketones are of great importance in biology and in industry. Examples include many sugars (ketoses), many steroids (e.g., testosterone), and the solvent acetone.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ketone"
            },
            "Q170885": {
                "name": "Essential oil",
                "wikidata_aliases": "[\"volatile oil\",\"ethereal oil\",\"aetherolea\",\"oil of the plant\",\"Oils, Volatile\"]",
                "wikidata_summary": "hydrophobic liquid containing volatile aroma compounds from plants",
                "wikidata_url": "https://www.wikidata.org/wiki/Q170885",
                "wikipedia_summary": "An essential oil is a concentrated hydrophobic liquid containing volatile (easily evaporated at normal temperatures) chemical compounds from plants. Essential oils are also known as volatile oils, ethereal oils, aetheroleum, or simply as the oil of the plant from which they were extracted, such as oil of clove. An essential oil is essential in the sense that it contains the essence of the plant's fragrance—the characteristic fragrance of the plant from which it is derived. The term 'essential' used here does not mean indispensable or usable by the human body, as with the terms essential amino acid or essential fatty acid, which are so called because they are nutritionally required by a living organism.Essential oils are generally extracted by distillation, often by using steam. Other processes include expression, solvent extraction, sfumatura, absolute oil extraction, resin tapping, wax embedding, and cold pressing. They are used in perfumes, cosmetics, soaps, air fresheners and other products, for flavoring food and drink, and for adding scents to incense and household cleaning products.\nEssential oils are often used for aromatherapy, a form of alternative medicine in which healing effects are ascribed to aromatic compounds. Aromatherapy may be useful to induce relaxation, but there is not sufficient evidence that essential oils can effectively treat any condition. Improper use of essential oils may cause harm including allergic reactions, inflammation and skin irritation.  Children may be particularly susceptible to the toxic effects of improper use. Essential oils can be poisonous if ingested or absorbed through the skin.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Essential_oil"
            },
            "Q173496": {
                "name": "Marvel Comics",
                "wikidata_aliases": "[\"Marvel\",\"Marvel Publishing, Inc.\",\"Marvel Comics Group\",\"Zenith Publishing Corporation\",\"Olympia Publications, Inc.\",\"Leading Magazine Corporation\",\"Mutual Magazine Corporation\",\"20th Century Comic Corporation\",\"Animirth Comics, Inc.\",\"Bard Publishing Corp.\",\"Canam Publishers Sales Corp.\",\"Chipiden Publishing Corp.\",\"Classic Syndicate, Inc.\",\"Current Detective Stories, Inc.\",\"Interstate Publishing Corp.\",\"Magazine Management Co., Inc.\",\"Male Publishing Corp.\",\"Manvis Publications, Inc.\",\"Newsstand Publications, Inc.\",\"Non-Pareil Publishing Corp.\",\"Prime Publications, Inc.\",\"Sphere Publications, Inc.\",\"U.S.A. Comic Magazine Corp.\",\"Vista Publications, Inc.\",\"Western Fiction Publishing Co., Inc.\"]",
                "wikidata_summary": "company that publishes comic books and related media",
                "wikidata_url": "https://www.wikidata.org/wiki/Q173496",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q173626": {
                "name": "Pac-Man",
                "wikidata_aliases": "[]",
                "wikidata_summary": "1980 arcade game developed by Namco",
                "wikidata_url": "https://www.wikidata.org/wiki/Q173626",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1736906": {
                "name": "Cat food",
                "wikidata_aliases": "[\"food for cats\"]",
                "wikidata_summary": "food for consumption by cats",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1736906",
                "wikipedia_summary": "Cat food is food specifically designed for consumption by cats. As obligate carnivores, cats have specific requirements for their dietary nutrients, namely nutrients found only in meat or synthesised, such as taurine and Vitamin A. Certain nutrients, including many vitamins and amino acids, are degraded by the temperatures, pressures and chemical treatments used during manufacture, and hence must be added after manufacture to avoid nutritional deficiency. Cat food is typically sold as dry kibble, or as wet food in cans and pouches.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cat_food"
            },
            "Q174211": {
                "name": "Organic compound",
                "wikidata_aliases": "[\"organic molecule\",\"organic substance\",\"organic chemical\",\"organic chemicals\"]",
                "wikidata_summary": "chemical compound that contains carbon atoms (with a few exceptions traditionally classified as inorganic compounds)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q174211",
                "wikipedia_summary": "Some chemical authorities define an organic compound as a chemical compound that contains a carbon–hydrogen or carbon–carbon bond; others consider an organic compound to be any chemical compound that contains carbon. For example, carbon-containing compounds such as alkanes (e.g. methane CH4) and its derivatives are universally considered organic, but many others are sometimes considered inorganic, such as halides of carbon without carbon-hydrogen and carbon-carbon bonds (e.g. carbon tetrachloride CCl4), and certain compounds of carbon with nitrogen and oxygen (e.g. cyanide ion CN−, hydrogen cyanide HCN, chloroformic acid ClCO2H, carbon dioxide CO2, and carbonate ion CO2−3).Due to carbon's ability to catenate (form chains with other carbon atoms), millions of organic compounds are known. The study of the properties, reactions, and syntheses of organic compounds comprise the discipline known as organic chemistry. For historical reasons, a few classes of carbon-containing compounds (e.g., carbonate salts and cyanide salts), along with a few other exceptions (e.g., carbon dioxide, and even hydrogen cyanide despite the fact it contains a carbon-hydrogen bond), are generally considered inorganic. Other than those just named, little consensus exists among chemists on precisely which carbon-containing compounds are excluded, making any rigorous definition of an organic compound elusive.Although organic compounds make up only a small percentage of Earth's crust, they are of central importance because all known life is based on organic compounds. Living things incorporate inorganic carbon compounds into organic compounds through a network of processes (the carbon cycle) that begins with the conversion of carbon dioxide and a hydrogen source like water into simple sugars and other organic molecules by autotrophic organisms using light (photosynthesis) or other sources of energy. Most synthetically-produced organic compounds are ultimately derived from petrochemicals consisting mainly of hydrocarbons, which are themselves formed from the high pressure and temperature degradation of organic matter underground over geological timescales. This ultimate derivation notwithstanding, organic compounds are no longer defined as compounds originating in living things, as they were historically.\nIn chemical nomenclature, an organyl group, frequently represented by the letter R, refers to any monovalent substituent whose open valence is on a carbon atom.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Organic_compound"
            },
            "Q174923": {
                "name": "optical illusion",
                "wikidata_aliases": "[\"visual illusion\",\"optical illusions\",\"visual illusions\"]",
                "wikidata_summary": "visual perception that differs from objective reality",
                "wikidata_url": "https://www.wikidata.org/wiki/Q174923",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1758839": {
                "name": "Litter box",
                "wikidata_aliases": "[\"catbox\",\"sandbox\",\"litter tray\",\"litter pan\"]",
                "wikidata_summary": "indoor feces and urine collection box for pets",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1758839",
                "wikipedia_summary": "A litter box, also known as a sandbox, cat box, litter tray, cat pan, potty, pot or litter pan, is an indoor feces and urine collection box for cats, as well as rabbits, ferrets, miniature pigs, small dogs, and other pets that instinctively or through training will make use of such a repository. They are provided for pets that are permitted free roam of a home but who cannot or do not always go outside to excrete their metabolic waste.In the wild, cats naturally excrete in soft or sandy soil for easy burial. They use their paws in a backward sweeping motion to cover their feces. To stimulate this instinctive desire, a litter box's bottom is typically filled with 2 inches (5 cm) or less of cat litter. Litter box filler is a loose, granular material that absorbs moisture and odors such as ammonia. Some litter brands contain baking soda to absorb such odors, or owners may sprinkle a thin layer in the bottom of the box, under the cat litter. The litter material also satisfies a cat's instinctive desire to hide their scent by allowing them to bury their waste. The most common material is clay, although recycled paper 'pellets' and silica-based 'crystal' variants are also used. Sometimes, when an owner wishes to stimulate the cat's natural instincts, natural dirt is used.\nThe litter can give off a strong odor, and must be disposed of periodically. It is recommended that the litter box be kept in low traffic areas of the home, such as a basement or laundry room to avoid litter box aversion. There are commercially available special types of litter to help cover or lessen the odor produced. They contain baking soda, plant extracts and/or odorized crystals. If kept in a room with an intake vent, an air freshener may be added on the furnace filter to isolate the odor from the rest of the house.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Litter_box"
            },
            "Q177860": {
                "name": "Valhalla",
                "wikidata_aliases": "[]",
                "wikidata_summary": "in Norse mythology enormous hall located in Asgard",
                "wikidata_url": "https://www.wikidata.org/wiki/Q177860",
                "wikipedia_summary": "In Norse mythology Valhalla () is the anglicised name for Old Norse: Valhǫll ('hall of the slain'). It is described as a majestic hall located in Asgard and presided over by the god Odin. Half of those who die in combat enter Valhalla, while the other half are chosen by the goddess Freyja to reside in Fólkvangr. The masses of those killed in combat (known as the Einherjar) along with various legendary Germanic heroes and kings, live in Valhalla until Ragnarök when they will march out of its many doors to fight in aid of Odin against the jötnar. \nValhalla is attested in the Poetic Edda, compiled in the 13th century from earlier traditional sources, in the Prose Edda (written in the 13th century by Snorri Sturluson), in Heimskringla (also written in the 13th century by Snorri Sturluson), and in stanzas of an anonymous 10th-century poem commemorating the death of Eric Bloodaxe known as Eiríksmál as compiled in Fagrskinna. Valhalla inspired innumerable works of art, publication titles, and elements of popular culture, and is synonymous with a martial (or otherwise) hall of the chosen dead. The name is rendered in modern Scandinavian languages as Valhöll in Icelandic, while the Swedish and Norwegian form is Valhall; in Faroese it is Valhøll, and in Danish it is Valhal.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Valhalla"
            },
            "Q18042814": {
                "name": "AKR1B10",
                "wikidata_aliases": "[\"AKR1B11\",\"AKR1B12\",\"ALDRLn\",\"ARL-1\",\"ARL1\",\"HIS\",\"HSI\",\"aldo-keto reductase family 1, member B10 (aldose reductase)\",\"aldo-keto reductase family 1 member B10\"]",
                "wikidata_summary": "protein-coding gene in the species Homo sapiens",
                "wikidata_url": "https://www.wikidata.org/wiki/Q18042814",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q181795": {
                "name": "The Empire Strikes Back",
                "wikidata_aliases": "[\"Star Wars V\",\"Star Wars 5\",\"Star Wars Episode V: The Empire Strikes Back\",\"The Empire Strikes Back\",\"Star Wars: Episode V The Empire Strikes Back\"]",
                "wikidata_summary": "1980 American epic space opera film directed by Irvin Kershner",
                "wikidata_url": "https://www.wikidata.org/wiki/Q181795",
                "wikipedia_summary": "The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner from a screenplay by Leigh Brackett and Lawrence Kasdan, based on a story by George Lucas. The sequel to Star Wars (1977), it is the second film in the Star Wars film series and the fifth chronological chapter of the 'Skywalker Saga'. Set three years after the events of Star Wars, the film recounts the battle between the malevolent Galactic Empire, led by the Emperor, and the Rebel Alliance, led by Princess Leia. Rebel ally Luke Skywalker trains to master the Force so he can confront the Emperor's powerful disciple, Darth Vader. The ensemble cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, and Frank Oz.\nFollowing the success of Star Wars, Lucas hired Brackett to write the sequel. After she died in 1978, he outlined the whole Star Wars saga and wrote the next draft himself, before hiring Raiders of the Lost Ark (1981) writer Kasdan to enhance his work. To avoid the stress he faced directing Star Wars, Lucas handed the responsibility to Kershner and focused on expanding his special effects company Industrial Light & Magic instead. Filmed from March to September 1979 in Finse, Norway, and at Elstree Studios in England, The Empire Strikes Back faced production difficulties, including actor injuries, illnesses, fires, and problems securing additional financing as costs rose. Initially budgeted at $8 million, costs had risen to $30.5 million by the project's conclusion.\nReleased on May 21, 1980, the highly anticipated sequel became the highest-grossing film that year, earning approximately $401.5 million worldwide. Unlike its lighthearted predecessor, Empire met with mixed reviews from critics, and fans were conflicted about its darker and more mature themes. Critics praised the expressive features and characterization of the puppeteered character Yoda, a diminutive creature who serves as Luke's teacher. The film was nominated for various awards and won two Academy Awards, two Grammy Awards, and a BAFTA, among others. Subsequent releases have raised the film's worldwide gross to $538–549 million and, adjusted for inflation, it is the 13th-highest-grossing film in the United States and Canada.\nSince its release, The Empire Strikes Back has been critically reassessed and is now often regarded as the best film in the Star Wars series and among the greatest films ever made. It has had a significant impact on filmmaking and popular culture and is often considered an example of a sequel superior to its predecessor. The climax, in which Vader reveals he is Luke's father, is often ranked as one of the greatest plot twists in cinema. The film spawned a variety of merchandise and adaptations, including video games and a radio play. The United States Library of Congress selected it for preservation in the National Film Registry in 2010. Return of the Jedi (1983) followed Empire, concluding the original Star Wars trilogy. Prequel and sequel trilogies have since been released.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
            },
            "Q18226": {
                "name": "cat meat",
                "wikidata_aliases": "[]",
                "wikidata_summary": "meat prepared from domestic cats for human consumption",
                "wikidata_url": "https://www.wikidata.org/wiki/Q18226",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q182672": {
                "name": "Zoonosis",
                "wikidata_aliases": "[\"zoonoses\",\"zoonotic infectious disease\",\"zoonotic infection\",\"zoonotic disease\"]",
                "wikidata_summary": "infectious disease that can be transmitted from one animal species to another (or human)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q182672",
                "wikipedia_summary": "A zoonosis (; plural zoonoses) or zoonotic disease is an infectious disease of humans caused by a pathogen (an infectious agent, such as a bacterium, virus, parasite, or prion) that can jump from a non-human (usually a vertebrate) to a human and vice versa.Major modern diseases such as Ebola and salmonellosis are zoonoses. HIV was a zoonotic disease transmitted to humans in the early part of the 20th century, though it has now evolved into a separate human-only disease. Human infection with animal influenza viruses is rare, as they do not transmit easily to or among humans. However, avian and swine influenza viruses in particular possess high zoonotic potential, and these occasionally recombine with human strains of the flu and can cause pandemics such as the 2009 swine flu. Taenia solium infection is one of the neglected tropical diseases with public health and veterinary concern in endemic regions. Zoonoses can be caused by a range of disease pathogens such as emergent viruses, bacteria, fungi and parasites; of 1,415 pathogens known to infect humans, 61% were zoonotic. Most human diseases originated in non-humans; however, only diseases that routinely involve non-human to human transmission, such as rabies, are considered direct zoonoses.Zoonoses have different modes of transmission. In direct zoonosis the disease is directly transmitted from non-humans to humans through media such as air (influenza) or bites and saliva (rabies). In contrast, transmission can also occur via an intermediate species (referred to as a vector), which carry the disease pathogen without getting sick. When humans infect non-humans, it is called reverse zoonosis or anthroponosis. The term is from Greek: ζῷον zoon 'animal' and νόσος nosos 'sickness'.\nHost genetics plays an important role in determining which non-human viruses will be able to make copies of themselves in the human body. Dangerous non-human viruses are those that require few mutations to begin replicating themselves in human cells. These viruses are dangerous since the required combinations of mutations might randomly arise in the natural reservoir.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Zoonosis"
            },
            "Q183816": {
                "name": "master's degree",
                "wikidata_aliases": "[\"master degree\",\"masters degree\",\"master\"]",
                "wikidata_summary": "postgraduate academic degree",
                "wikidata_url": "https://www.wikidata.org/wiki/Q183816",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1842497": {
                "name": "Woodhaven",
                "wikidata_aliases": "[\"Woodhaven, Michigan\",\"Woodhaven, MI\"]",
                "wikidata_summary": "city in Wayne County, Michigan, United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1842497",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1858": {
                "name": "Hanoi",
                "wikidata_aliases": "[\"Thang Long\",\"Dong Do\",\"Tonkin\",\"Hà Nội\",\"Ha Noi\",\"Đại La\"]",
                "wikidata_summary": "capital of Vietnam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1858",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q188273": {
                "name": "Ubisoft",
                "wikidata_aliases": "[\"Ubisoft Entertainment\",\"Ubi Soft Entertainment\"]",
                "wikidata_summary": "French video game company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q188273",
                "wikipedia_summary": "Ubisoft Entertainment SA (; French: [ybisɔft]; formerly Ubi Soft Entertainment SA) is a French video game publisher headquartered in Saint-Mandé with development studios across the world. Its video game franchises include Assassin's Creed, Far Cry, For Honor, Just Dance, Prince of Persia, Rabbids, Rayman, Tom Clancy's, and Watch Dogs.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ubisoft"
            },
            "Q189153": {
                "name": "Saint-Cloud",
                "wikidata_aliases": "[\"Pont-la-Montagne\",\"La Montagne-Chérie\",\"St. Cloud\"]",
                "wikidata_summary": "town in Hauts-de-Seine, France",
                "wikidata_url": "https://www.wikidata.org/wiki/Q189153",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q190087": {
                "name": "data type",
                "wikidata_aliases": "[\"type\",\"data type (computer programming)\",\"type of data\",\"type (computer science)\",\"computing type\"]",
                "wikidata_summary": "classification of data in computer science",
                "wikidata_url": "https://www.wikidata.org/wiki/Q190087",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q190161": {
                "name": "Streptococcus",
                "wikidata_aliases": "[]",
                "wikidata_summary": "genus of bacteria",
                "wikidata_url": "https://www.wikidata.org/wiki/Q190161",
                "wikipedia_summary": "Streptococcus is a genus of gram-positive coccus (pl.: cocci) or spherical bacteria that belongs to the family Streptococcaceae, within the order Lactobacillales (lactic acid bacteria), in the phylum Bacillota. Cell division in streptococci occurs along a single axis, so as they grow, they tend to form pairs or chains that may appear bent or twisted. This differs from staphylococci, which divide along multiple axes, thereby generating irregular, grape-like clusters of cells. Most streptococci are oxidase-negative and catalase-negative, and many are facultative anaerobes (capable of growth both aerobically and anaerobically).\nThe term was coined in 1877 by Viennese surgeon Albert Theodor Billroth (1829–1894), by combining the prefix 'strepto-' (from Ancient Greek: στρεπτός, romanized: streptós, lit. 'easily twisted, pliant'), together with the suffix '-coccus' (from Modern Latin: coccus, from Ancient Greek: κόκκος, romanized: kókkos, lit. 'grain, seed, berry'.) In 1984, many bacteria formerly grouped in the genus Streptococcus were separated out into the genera Enterococcus and Lactococcus. Currently, over 50 species are recognised in this genus. This genus has been found to be part of the salivary microbiome.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Streptococcus"
            },
            "Q192581": {
                "name": "job activity",
                "wikidata_aliases": "[\"work\",\"activity\",\"gainful employment\"]",
                "wikidata_summary": "activity done by a person to earn money",
                "wikidata_url": "https://www.wikidata.org/wiki/Q192581",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q192995": {
                "name": "Vaccination",
                "wikidata_aliases": "[\"vaccinated\"]",
                "wikidata_summary": "administration of a vaccine to protect against disease",
                "wikidata_url": "https://www.wikidata.org/wiki/Q192995",
                "wikipedia_summary": "Vaccination is the administration of a vaccine to help the immune system develop immunity from a disease. Vaccines contain a microorganism or virus in a weakened, live or killed state, or proteins or toxins from the organism. In stimulating the body's adaptive immunity, they help prevent sickness from an infectious disease. When a sufficiently large percentage of a population has been vaccinated, herd immunity results. Herd immunity protects those who may be immunocompromised and cannot get a vaccine because even a weakened version would harm them. The effectiveness of vaccination has been widely studied and verified. Vaccination is the most effective method of preventing infectious diseases; widespread immunity due to vaccination is largely responsible for the worldwide eradication of smallpox and the elimination of diseases such as polio and tetanus from much of the world. However, some diseases, such as measles outbreaks in America, have seen rising cases due to relatively low vaccination rates in the 2010s – attributed, in part, to vaccine hesitancy. According to the World Health Organization, vaccination prevents 3.5–5 million deaths per year.The first disease people tried to prevent by inoculation was most likely smallpox, with the first recorded use of variolation occurring in the 16th century in China. It was also the first disease for which a vaccine was produced. Although at least six people had used the same principles years earlier, the smallpox vaccine was invented in 1796 by English physician Edward Jenner. He was the first to publish evidence that it was effective and to provide advice on its production. Louis Pasteur furthered the concept through his work in microbiology. The immunization was called vaccination because it was derived from a virus affecting cows (Latin: vacca 'cow'). Smallpox was a contagious and deadly disease, causing the deaths of 20–60% of infected adults and over 80% of infected children. When smallpox was finally eradicated in 1979, it had already killed an estimated 300–500 million people in the 20th century.Vaccination and immunization have a similar meaning in everyday language. This is distinct from inoculation, which uses unweakened live pathogens. Vaccination efforts have been met with some reluctance on scientific, ethical, political, medical safety, and religious grounds, although no major religions oppose vaccination, and some consider it an obligation due to the potential to save lives. In the United States, people may receive compensation for alleged injuries under the National Vaccine Injury Compensation Program. Early success brought widespread acceptance, and mass vaccination campaigns have greatly reduced the incidence of many diseases in numerous geographic regions. The Centers for Disease Control and Prevention lists vaccination as one of the ten great public health achievements of the 20th century in the U.S.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vaccination"
            },
            "Q193294": {
                "name": "sunrise",
                "wikidata_aliases": "[\"sun up\",\"daybreak\",\"rising sun\",\"🌅\",\"🌄\"]",
                "wikidata_summary": "instant at which the upper edge of the Sun appears over the eastern horizon in the morning",
                "wikidata_url": "https://www.wikidata.org/wiki/Q193294",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q19760770": {
                "name": "early detection of disease",
                "wikidata_aliases": "[\"early detection\"]",
                "wikidata_summary": "应用医学检查来识别、发现尚未以疼痛或不适形式表现出来的疾病",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19760770",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q19873": {
                "name": "Lightsaber",
                "wikidata_aliases": "[\"lightsabers\",\"lightsabre\",\"laser sword\"]",
                "wikidata_summary": "type of fictional weapon in the Star Wars franchise",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19873",
                "wikipedia_summary": "A lightsaber is a fictional energy sword featured throughout Star Wars. A typical lightsaber is depicted as a luminescent laser sword about 3 feet (0.91 m) in length emitted from a metal hilt around 10.5 inches (27 cm) in length. First introduced in the original Star Wars film, it has since appeared in most Star Wars films, with at least one lightsaber duel occurring in each installment of the 'Skywalker saga'. The lightsaber's distinct appearance was created using rotoscoping for the original films, and with digital effects for the prequel and sequel trilogies.\nIn the Star Wars universe, the lightsaber is the signature weapon of the light-side-wielding Jedi Order and the dark-side-wielding Sith Order. However, the lightsaber can also be wielded by non-Force-sensitive characters as an ordinary weapon or tool. The Jedi use different colored lightsabers. The most common lightsaber colors are blue and green, but other colors also exist, that being purple, white, black and yellow. The Sith wield exclusively red-bladed sabers to distinguish themselves from the Jedi. The color of a lightsaber's blade is given by a kyber crystal. A kyber crystal has no color until it is approached by a Jedi, it then turns into a color determined by the wielders connection to the Force. A lightsaber's hilt is built by its wielder and is, therefore, unique in design. There are several variations outside of the traditional single-bladed lightsaber, such as the double-bladed lightsaber (most famously wielded by Darth Maul), the curved-hilted lightsaber (wielded by Asajj Ventress and most famously by Count Dooku), crossguard lightsabers (used by Kylo Ren and occasionally by Jedi), and the Darksaber, forged by the Mandalorian Jedi Tarre Vizsla, but primarily wielded by the non-Force-sensitive Mandalorian rulers of Mandalore (including Pre Vizsla, Maul, Bo-Katan Kryze, Sabine Wren, Moff Gideon, and Din Djarin).\nAs presented in the films, a lightsaber's energy blade can cut, burn, and melt through most substances with little resistance. It leaves cauterized wounds in flesh, but can be deflected by another lightsaber blade, by energy shields, or by the metal beskar (found in Mandalorian armor) and phrik (metal used to create electrostaffs). The blade has even been used as a tool to weld metal. Other times, the lightsaber has been shown to cause bleeding wounds in the flesh, sometimes accompanied by burns. Some exotic saber-proof melee weapons have been introduced in the Expanded Universe as well as later episodic films. An active lightsaber gives off a distinctive hum, which rises in pitch and volume as the blade is moved rapidly through the air. Bringing the blade into contact with another lightsaber's blade produces a loud crackle.\nThe lightsaber has become one of the most widely recognized elements of the Star Wars franchise. In 2008, a survey of approximately 2,000 film fans found it to be the most popular weapon in film history.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lightsaber"
            },
            "Q19907": {
                "name": "Death Star",
                "wikidata_aliases": "[\"DS-1 Orbital Battle Station\"]",
                "wikidata_summary": "fictional space station used as a superweapon by the Galactic Empire in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19907",
                "wikipedia_summary": "The Death Star is a fictional space station and superweapon featured in the Star Wars space-opera franchise. Constructed by the autocratic Galactic Empire, the Death Star is capable of obliterating entire planets, and serves to enforce the Empire's reign of terror. Appearing in the original 1977 film Star Wars, the Death Star serves as the central plot point and setting for the movie, and is destroyed in an assault by the Rebel Alliance during the climax of the film, with the 2016 prequel film Rogue One and the 2022 television series Andor exploring its construction. A larger second Death Star is being built in the events of the 1983 film Return of the Jedi, featuring substantially improved capabilities compared to its predecessor, before it is destroyed by the Rebel Alliance while under construction.\nSince its first appearance, the Death Star has become a cultural icon and a widely recognized element of the Star Wars franchise. It inspired numerous similar superweapons in fiction as well as in other Star Wars works. The 2015 film The Force Awakens introduces Starkiller Base, a planet (Ilum) converted by the First Order into a Death Star-like superweapon. While more powerful and technologically advanced than both Death Stars, it is also destroyed by the Resistance. The 2019 film The Rise of Skywalker introduces the Final Order, a massive fleet of Xyston-class Star Destroyers built by the Sith Eternal, individual warships each carrying 'planet-killing' weapons; the film also features the remains of the second Death Star, on the ocean moon of Kef Bir.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Death_Star"
            },
            "Q1999796": {
                "name": "incantation",
                "wikidata_aliases": "[\"spell\",\"charm\",\"enchantment\"]",
                "wikidata_summary": "magical formula intended to trigger a magical effect",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1999796",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2002": {
                "name": "2015",
                "wikidata_aliases": "[\"2015 AD\",\"2015 CE\",\"twenty fifteen\",\"two thousand and fifteen\",\"MMXV\"]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2002",
                "wikipedia_summary": "2015 (MMXV) was a common year starting on Thursday of the Gregorian calendar, the 2015th year of the Common Era (CE) and Anno Domini (AD) designations, the 15th  year of the 3rd millennium and the 21st century, and the  6th   year of the 2010s decade.  \n2015 was designated by the United Nations as:\n\nInternational Year of Light\nInternational Year of Soil",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2015"
            },
            "Q20021710": {
                "name": "Pi",
                "wikidata_aliases": "[\"Pee\",\"Phee\",\"Phi\",\"Phy\",\"Pih\",\"피\",\"皮\",\"P'i\"]",
                "wikidata_summary": "Korean family name 피",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20021710",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q205662": {
                "name": "Tokugawa shogunate",
                "wikidata_aliases": "[\"Shogunate of Japan\",\"Japan\",\"Edo Japan\",\"Tokugawa Shogunate\"]",
                "wikidata_summary": "1603–1868 Japanese military government",
                "wikidata_url": "https://www.wikidata.org/wiki/Q205662",
                "wikipedia_summary": "The Tokugawa shogunate ( TOK-oo-GAH-wə; Japanese: 徳川幕府, romanized: Tokugawa bakufu, IPA: [tokɯgawa, tokɯŋawa baꜜkɯ̥ɸɯ]), also known as the Edo shogunate (江戸幕府, Edo bakufu), was the military government of Japan during the Edo period from 1603 to 1868.The Tokugawa shogunate was established by Tokugawa Ieyasu after victory at the Battle of Sekigahara, ending the civil wars of the Sengoku period following the collapse of the Ashikaga shogunate. Ieyasu became the shōgun, and the Tokugawa clan governed Japan from Edo Castle in the eastern city of Edo (Tokyo) along with the daimyō lords of the samurai class. The Tokugawa shogunate organized Japanese society under the strict Tokugawa class system and banned most foreigners under the isolationist policies of Sakoku to promote political stability. The Tokugawa shoguns governed Japan in a feudal system, with each daimyō administering a han (feudal domain), although the country was still nominally organized as imperial provinces. Under the Tokugawa shogunate, Japan experienced rapid economic growth and urbanization, which led to the rise of the merchant class and Ukiyo culture.\nThe Tokugawa shogunate declined during the Bakumatsu period from 1853 and was overthrown by supporters of the Imperial Court in the Meiji Restoration in 1868. The Empire of Japan was established under the Meiji government, and Tokugawa loyalists continued to fight in the Boshin War until the defeat of the Republic of Ezo at the Battle of Hakodate in June 1869.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Tokugawa_shogunate"
            },
            "Q205835": {
                "name": "Snoring",
                "wikidata_aliases": "[\"zzz\",\"mouth cow\"]",
                "wikidata_summary": "sound made while sleeping",
                "wikidata_url": "https://www.wikidata.org/wiki/Q205835",
                "wikipedia_summary": "Snoring is the vibration of respiratory structures and the resulting sound due to obstructed air movement during breathing while sleeping. The sound may be soft or loud and unpleasant. Snoring during sleep may be a sign, or first alarm, of obstructive sleep apnea (OSA). Research suggests that snoring is one of the factors of sleep deprivation.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Snoring"
            },
            "Q207063": {
                "name": "Squad",
                "wikidata_aliases": "[\"Sqd.\",\"group\",\"military squad\",\"squad (military)\"]",
                "wikidata_summary": "military unit size designation",
                "wikidata_url": "https://www.wikidata.org/wiki/Q207063",
                "wikipedia_summary": "In military terminology, a squad is among the smallest of military organizations and is led by a non-commissioned officer. NATO and U.S. doctrine define a squad as an organization 'larger than a team, but smaller than a section.' while U.S. Army doctrine further defines a squad as a 'small military unit typically containing two or more fire teams.' In American usage, a squad consists of eight to fourteen soldiers, and may be further subdivided into fireteams.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Squad"
            },
            "Q20709649": {
                "name": "Teal Lake",
                "wikidata_aliases": "[]",
                "wikidata_summary": "lake in Marquette County, Michigan, United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20709649",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q207627": {
                "name": "Happy Tree Friends",
                "wikidata_aliases": "[\"HTF\"]",
                "wikidata_summary": "American animated series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q207627",
                "wikipedia_summary": "Happy Tree Friends (commonly abbreviated as HTF) is an American adult animated web series created by Aubrey Ankrum, Rhode Montijo, and Kenn Navarro, and developed by Montijo, Navarro, and Warren Graff for Mondo Media. Disguised as a kids' cartoon, the show follows the misadventures of cute anthropomorphic forest animals, whose initially peaceful lives always end with sudden, usually accidental, graphically violent incidents. Debuting on December 24, 1999, Happy Tree Friends has achieved a cult following on Mondo's website and YouTube channel and expanded into a multimedia franchise, which includes the television series of the same name.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Happy_Tree_Friends"
            },
            "Q208376": {
                "name": "Pet",
                "wikidata_aliases": "[\"PET\",\"PET scan\",\"PETscan\",\"PET can\",\"positron-emission tomography\",\"PET imaging\"]",
                "wikidata_summary": "medicine imaging technique",
                "wikidata_url": "https://www.wikidata.org/wiki/Q208376",
                "wikipedia_summary": "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal. Popular pets are often considered to have attractive/cute appearances, intelligence, and relatable personalities, but some pets may be taken in on an altruistic basis (such as a stray animal) and accepted by the owner regardless of these characteristics.\nTwo of the most popular pets are dogs and cats. Other animals commonly kept include rabbits; ferrets; pigs; rodents such as gerbils, hamsters, chinchillas, rats, mice, and guinea pigs; birds such as parrots, passerines, and fowls; reptiles such as turtles, lizards, snakes, and iguanas; aquatic pets such as fish, freshwater snails, and saltwater snails; amphibians such as frogs and salamanders; and arthropod pets such as tarantulas and hermit crabs. Smaller pets include rodents, while the equine and bovine group include the largest companion animals.\nPets provide their owners, or guardians, both physical and emotional benefits. Walking a dog can provide both the human and the dog with exercise, fresh air, and social interaction. Pets can give companionship to people who are living alone or elderly adults who do not have adequate social interaction with other people. There is a medically approved class of therapy animals that are brought to visit confined humans, such as children in hospitals or elders in nursing homes. Pet therapy utilizes trained animals and handlers to achieve specific physical, social, cognitive, or emotional goals with patients.\nPeople most commonly get pets for companionship, to protect a home or property, or because of the perceived beauty or attractiveness of the animals. A 1994 Canadian study found that the most common reasons for not owning a pet were lack of ability to care for the pet when traveling (34.6%), lack of time (28.6%), and lack of suitable housing (28.3%), with dislike of pets being less common (19.6%). Some scholars, ethicists, and animal rights organizations have raised concerns over keeping pets because of the lack of autonomy and the objectification of non-human animals.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Pet"
            },
            "Q2095": {
                "name": "Food",
                "wikidata_aliases": "[\"foodstuff\",\"edibles\",\"feed\",\"chow\",\"foodstuffs\",\"sustenance\",\"food item\"]",
                "wikidata_summary": "any substance consumed to provide nutritional support for the body; form of energy stored in chemical",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2095",
                "wikipedia_summary": "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.\nOmnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. Humans generally use cooking to prepare food for consumption. The majority of the food energy required is supplied by the industrial food industry, which produces food through intensive agriculture and distributes it through complex food processing and food distribution systems. This system of conventional agriculture relies heavily on fossil fuels, which means that the food and agricultural systems are one of the major contributors to climate change, accounting for as much as 37% of total greenhouse gas emissions.The food system has significant impacts on a wide range of other social and political issues, including sustainability, biological diversity, economics, population growth, water supply, and food security. Food safety and security are monitored by international agencies like the International Association for Food Protection, the World Resources Institute, the World Food Programme, the Food and Agriculture Organization, and the International Food Information Council.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Food"
            },
            "Q20977110": {
                "name": "Star Wars: The Rise of Skywalker",
                "wikidata_aliases": "[\"Star Wars: Episode IX\",\"The Rise of Skywalker\",\"Star Wars: The Rise of Skywalker\",\"Star Wars Episode IX\",\"Rise of Skywalker\",\"Star Wars: Episode IX – The Rise of Skywalker\",\"TROS\"]",
                "wikidata_summary": "2019 film directed by J. J. Abrams",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20977110",
                "wikipedia_summary": "Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. Produced by Lucasfilm and Abrams' production company Bad Robot, and distributed by Walt Disney Studios Motion Pictures, it is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part 'Skywalker saga'. Its ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, with Ian McDiarmid and Billy Dee Williams. Set one year after The Last Jedi, The Rise of Skywalker follows Rey, Finn, and Poe Dameron as they lead the Resistance's final stand against Supreme Leader Kylo Ren and the First Order, who are aided by the Sith Lord, Emperor Palpatine.\nFollowing initial reports that The Last Jedi director Rian Johnson would write the script for Episode IX, in August 2015, Colin Trevorrow was hired to direct and to write a script with his collaborator Derek Connolly; both ultimately retain story credit with Abrams and Chris Terrio. In September 2017, Trevorrow left the project following creative differences with producer Kathleen Kennedy, and Abrams returned as director. John Williams, composer for the previous episodic films, returned to compose the score—his final score for the franchise. Principal photography began in August 2018 at Pinewood Studios in England and wrapped in February 2019, with post-production completed in November 2019. With a budget of $416 million, it is the third most expensive film ever made.\nThe Rise of Skywalker premiered in Hollywood, Los Angeles, on December 16, 2019, and was released in the United States on December 20. It received mixed reviews from critics, but would gross over $1.077 billion worldwide, making it the seventh-highest-grossing film of 2019, but the lowest-grossing of the trilogy. It received three nominations at the 92nd Academy Awards (Best Original Score, Best Visual Effects, and Best Sound Editing) as well as three at the 73rd British Academy Film Awards (also Best Special Visual Effects, Best Original Music, and Best Sound). It won five awards at the 46th Saturn Awards, including Best Science Fiction Film.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars:_The_Rise_of_Skywalker"
            },
            "Q20996030": {
                "name": "Crosby",
                "wikidata_aliases": "[]",
                "wikidata_summary": "family name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20996030",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q21102959": {
                "name": "Deinococcus radiodurans R1",
                "wikidata_aliases": "[\"R1\"]",
                "wikidata_summary": "bacterial strain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21102959",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q211402": {
                "name": "Rapid eye movement sleep",
                "wikidata_aliases": "[\"REM sleep\",\"REMS\",\"paradoxical sleep\",\"PS\",\"desynchronized sleep\",\"Rapid eye movement sleep, REM sleep\",\"Sleep, REM\",\"dream sleep\",\"REM\"]",
                "wikidata_summary": "unique phase of sleep in mammals and birds, characterized by random/rapid movement of the eyes",
                "wikidata_url": "https://www.wikidata.org/wiki/Q211402",
                "wikipedia_summary": "Rapid eye movement sleep (REM sleep or REMS) is a unique phase of sleep in mammals (including humans) and birds, characterized by random rapid movement of the eyes, accompanied by low muscle tone throughout the body, and the propensity of the sleeper to dream vividly.\nThe REM phase is also known as paradoxical sleep (PS) and sometimes  desynchronized sleep or dreamy sleep, because of physiological similarities to waking states including rapid, low-voltage desynchronized brain waves. Electrical and chemical activity regulating this phase seem to originate in the brain stem, and is characterized most notably by an abundance of the neurotransmitter acetylcholine, combined with a nearly complete absence of monoamine neurotransmitters histamine, serotonin and norepinephrine. Experiences of REM sleep are not transferred to permanent memory due to absence of norepinephrine.REM sleep is physiologically different from the other phases of sleep, which are collectively referred to as non-REM sleep (NREM sleep, NREMS, synchronized sleep). The absence of visual and auditory stimulation (sensory deprivation) during REM sleep can cause hallucinations. REM and non-REM sleep alternate within one sleep cycle, which lasts about 90 minutes in adult humans. As sleep cycles continue, they shift towards a higher proportion of REM sleep. The transition to REM sleep brings marked physical changes, beginning with electrical bursts called 'ponto-geniculo-occipital waves' (PGO waves) originating in the brain stem. REM sleep occurs 4 times in a 7-hour sleep. Organisms in REM sleep suspend central homeostasis, allowing large fluctuations in respiration, thermoregulation and circulation which do not occur in any other modes of sleeping or waking. The body abruptly loses muscle tone, a state known as REM atonia.In 1953, Professor Nathaniel Kleitman and his student Eugene Aserinsky defined rapid eye movement and linked it to dreams. REM sleep was further described by researchers, including William Dement and Michel Jouvet. Many experiments have involved awakening test subjects whenever they begin to enter the REM phase, thereby producing a state known as REM deprivation. Subjects allowed to sleep normally again usually experience a modest REM rebound. Techniques of neurosurgery, chemical injection, electroencephalography, positron emission tomography, and reports of dreamers upon waking have all been used to study this phase of sleep.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rapid_eye_movement_sleep"
            },
            "Q215028": {
                "name": "peer review",
                "wikidata_aliases": "[]",
                "wikidata_summary": "evaluation of work by one or more people of similar competence to the producers of the work",
                "wikidata_url": "https://www.wikidata.org/wiki/Q215028",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2151963": {
                "name": "Aroma compound",
                "wikidata_aliases": "[\"fragrance\",\"odorant\",\"aroma\",\"flavor\"]",
                "wikidata_summary": "chemical compound that has a smell or odor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2151963",
                "wikipedia_summary": "An aroma compound, also known as an odorant, aroma, fragrance or flavoring, is a chemical compound that has a smell or odor. For an individual chemical or class of chemical compounds to impart a smell or fragrance, it must be sufficiently volatile for transmission via the air to the olfactory system in the upper part of the nose. As examples, various fragrant fruits have diverse aroma compounds, particularly strawberries which are commercially cultivated to have appealing aromas, and contain several hundred aroma compounds.Generally, molecules meeting this specification have molecular weights of less than 310. Flavors affect both the sense of taste and smell, whereas fragrances affect only smell.  Flavors tend to be naturally occurring, and the term fragrances may also apply to synthetic compounds, such as those used in cosmetics.Aroma compounds can naturally be found in various foods, such as fruits and their peels, wine, spices, floral scent, perfumes, fragrance oils, and essential oils. For example, many form biochemically during the ripening of fruits and other crops. Wines have more than 100 aromas that form as byproducts of fermentation. Also, many of the aroma compounds play a significant role in the production of compounds used in the food service industry to flavor, improve, and generally increase the appeal of their products.An odorizer may add a detectable odor to a dangerous odorless substance, like propane, natural gas, or hydrogen, as a safety measure.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Aroma_compound"
            },
            "Q21527419": {
                "name": "List of Star Wars films",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21527419",
                "wikipedia_summary": "The Star Wars franchise involves multiple live-action and animated films. The film series started with a trilogy set in medias res that was later expanded to a trilogy of trilogies, known as the 'Skywalker Saga'.\nThe 1977 self-titled film, later subtitled Episode IV – A New Hope, was followed by the sequels The Empire Strikes Back (1980) and Return of the Jedi (1983), subtitled onscreen as Episode V and Episode VI; these films form the original trilogy. Sixteen years later, the prequel trilogy was released, consisting of The Phantom Menace (1999), Attack of the Clones (2002), and Revenge of the Sith (2005). After creator George Lucas sold Lucasfilm to Disney in 2012, a sequel trilogy consisting of Episodes VII through IX was released, consisting of The Force Awakens (2015), The Last Jedi (2017), and The Rise of Skywalker (2019).\nThe first three spin-off films produced were the made-for-television Star Wars Holiday Special (1978), The Ewok Adventure (1984) and Ewoks: The Battle for Endor (1985). Following Disney's 2012 acquisition of the franchise, these earlier films were dropped from the official canon, but the theatrical animated film Star Wars: The Clone Wars (2008) and its television series continuation retain their canonical status. Two standalone films were produced and released between the sequel trilogy films: Rogue One (2016) and Solo: A Star Wars Story (2018), both set between the original and prequel trilogies. A yearslong hiatus began in late 2019, during which time numerous films were announced and often shelved. Five officially announced projects were reputedly being developed as of early 2024.\nThe combined box office revenue of the films amounts to over US$10 billion, and it is currently the third-highest-grossing film franchise. The major live-action releases (including all the films within the Skywalker Saga) were nominated for Academy Awards. The original film was nominated for most of the major categories, including Best Picture, Best Director, Best Original Screenplay, and Best Supporting Actor for Alec Guinness (who played Obi-Wan Kenobi), while all theatrical live-action films have been nominated for particular categories. Several official Star Wars television series have also been released, all now on Disney+.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_Star_Wars_films"
            },
            "Q21541731": {
                "name": "BB-8",
                "wikidata_aliases": "[\"Beebee-Ate\",\"Beebee-Eight\"]",
                "wikidata_summary": "fictional robot in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21541731",
                "wikipedia_summary": "BB-8 (or Beebee-Ate) is a droid character in the Star Wars franchise. He appeared in the three films of the sequel trilogy, Star Wars: The Force Awakens (2015),  Star Wars: The Last Jedi (2017), and Star Wars: The Rise of Skywalker (2019). He also appeared as a major supporting character in the animated series Star Wars Resistance, appearing in the first 17 episodes of season 1, and in the 2023 short film Rogue Not Quite One. He is a BB astromech droid serving the Resistance, and is owned by Poe Dameron. Spherical with a free-moving domed head, BB-8 is portrayed by both a rod puppet and a remote-controlled robotic unit. The character has been well received by critics and fans, and has become one of the most beloved and recognizable characters of the Star Wars saga in recent years.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/BB-8"
            },
            "Q21590660": {
                "name": "Western (genre)",
                "wikidata_aliases": "[\"Western genre\",\"Western fiction\",\"Western art\",\"Old West art\"]",
                "wikidata_summary": "multimedia genre of stories set primarily in the American Old West",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21590660",
                "wikipedia_summary": "The Western is a genre of fiction typically set in the American frontier between the California Gold Rush of 1849 and the closing of the frontier in 1890, and commonly associated with folk tales of the Western United States, particularly the Southwestern United States, as well as Northern Mexico and Western Canada.: 7 The frontier was commonly referred to as the 'Old West' or the 'Wild West' and depicted in Western media as a sparsely populated hostile region patrolled by cowboys, outlaws, sheriffs, and numerous other stock 'gunslinger' characters. Western narratives often concern the gradual attempts to tame the crime-ridden American West using wider themes of justice, freedom, rugged individualism, manifest destiny, and the national history and identity of the United States. Native American 'Indian' populations were often portrayed as averse foes and/or savages.\nOriginating in vaquero heritage and Western fiction, the genre popularized the Western lifestyle, country-Western music, and Western wear globally. Throughout the history of the genre, it has seen popular revivals and been incorporated into various subgenres.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Western_(genre)"
            },
            "Q216151": {
                "name": "Vietnamese people",
                "wikidata_aliases": "[\"Kinh people\"]",
                "wikidata_summary": "ethnic group originally from northern Vietnam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q216151",
                "wikipedia_summary": "The Vietnamese people (Vietnamese: người Việt , lit. 'Việt people'  or 'Việt humans') or the Kinh people (Vietnamese: người Kinh , lit. 'Metropolitan people'), also recognized as the Viet people or the Viets, are a Southeast Asian ethnic group native to modern-day Northern Vietnam and Southern China who speak Vietnamese, the most widely spoken Austroasiatic language.\nVietnamese Kinh people account for just over 85.32% of the population of Vietnam in the 2019 census, and are officially designated and recognized as the Kinh people (người Kinh) to distinguish them from the other minority groups residing in the country such as the Hmong, Cham, or Mường. The Vietnamese are one of the four main groups of Vietic speakers in Vietnam, the others being the Mường, Thổ, and Chứt people. They are related to the Gin people, a minority ethnic group in China.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vietnamese_people"
            },
            "Q217": {
                "name": "Moldova",
                "wikidata_aliases": "[\"Republic of Moldova\",\"Moldavia\",\"Republica Moldova\",\"🇲🇩\",\"MDA\",\"MD\"]",
                "wikidata_summary": "country in Eastern Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q217",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q21932315": {
                "name": "Daniel José Older",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American fantasy and young adult fiction writer (1980-)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21932315",
                "wikipedia_summary": "Daniel José Older is an American fantasy and young adult fiction writer. His work includes the Shadowshaper Cypher series as well as novels in the Star Wars series.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Daniel_Jos%C3%A9_Older"
            },
            "Q2210354": {
                "name": "Hawkgirl",
                "wikidata_aliases": "[\"Shiera Sanders Hall\",\"Shayera Hol\",\"Kendra Saunders\",\"Hawkwoman\"]",
                "wikidata_summary": "name of several female fictional superhero characters, all owned by DC Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2210354",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2273202": {
                "name": "Holly Springs",
                "wikidata_aliases": "[\"Holly Springs, Mississippi\",\"Holly Springs, MS\"]",
                "wikidata_summary": "city in and county seat of Marshall County, Mississippi, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2273202",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q228692": {
                "name": "Rosario Dawson",
                "wikidata_aliases": "[\"Rosario Isabel Dawson\"]",
                "wikidata_summary": "American actress (born 1979)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q228692",
                "wikipedia_summary": "Rosario Isabel Dawson (born May 9, 1979) is an American actress. She made her feature-film debut in the 1995 independent drama Kids. Her subsequent film roles include He Got Game (1998), Josie and the Pussycats (2001), Men in Black II (2002), The Rundown (2003), Rent (2005), Sin City (2005), Clerks II (2006), Death Proof (2007), Seven Pounds (2008), Percy Jackson & the Olympians: The Lightning Thief (2010), Unstoppable (2010), Zookeeper (2011), Trance (2013), Top Five (2014), Zombieland: Double Tap (2019), and Clerks 3 (2022). Dawson has provided voice-over work for Disney/Marvel, Warner Bros./DC Comics, and ViacomCBS's Nickelodeon unit.\nDawson is also known for having several roles in film and television adaptations of comic books. These include Gail in Sin City (2005) and Sin City: A Dame to Kill For (2014), Claire Temple in five of the Marvel Netflix series (2015–2018), and providing the voices of Diana Prince / Wonder Woman in the DC Animated Movie Universe and Space Jam: A New Legacy and Barbara Gordon / Batgirl in The Lego Batman Movie. In 2020, she portrayed Ahsoka Tano in the second season of The Mandalorian and The Book of Boba Fett, and stars in Disney+ original series Ahsoka. In 2021, she had a recurring role in the Dwayne Johnson autobiographical comedy series Young Rock and a main role in the Hulu miniseries Dopesick.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rosario_Dawson"
            },
            "Q2359610": {
                "name": "Hawkman",
                "wikidata_aliases": "[\"Carter Hall\",\"Katar Hol\",\"Fel Andar\",\"Charley Parker\"]",
                "wikidata_summary": "fictional character, a superhero who appears in comic books published by DC Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2359610",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q23653": {
                "name": "anthology series",
                "wikidata_aliases": "[\"almanac\"]",
                "wikidata_summary": "radio or television series that presents a different story and a different set of characters in each episode",
                "wikidata_url": "https://www.wikidata.org/wiki/Q23653",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q237194": {
                "name": "Wanda Sykes",
                "wikidata_aliases": "[\"Wanda Sykes-Hall\",\"Wanda Yvette Sykes\",\"Wanda Yvette Sykes-Hall\",\"Wanda Sykes\"]",
                "wikidata_summary": "American comedian, writer, actress and voice artist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q237194",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q237207": {
                "name": "Kathleen Kennedy",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American film producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q237207",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q240648": {
                "name": "501st Legion",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Star Wars fan club dedicated to replicas of Imperial Stormtrooper armor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q240648",
                "wikipedia_summary": "The 501st Legion is an international fan-based organization dedicated to the construction and wearing of screen-accurate replicas of Imperial Stormtrooper armor, Sith Lords, Clone Troopers, bounty hunters, and other villains from the Star Wars universe. The 501st Legion, called by its nickname Vader's Fist, is made up entirely of volunteers.Formed in South Carolina by residents Albin Johnson and Tom Crews in August 1997, the Legion now has over 14,000 active members worldwide, with over 26,000 approved costumes. The Legion is active on 6 continents, with local units known as 'Garrisons' and 'Outposts' in over 60 countries.\nLegion members make appearances at casual, promotional, and charitable events, often at the request of Lucasfilm's Fan Events department. Although not officially affiliated with the Walt Disney Company or Lucasfilm LLC., the 501st Legion is Lucasfilm's preferred Imperial costuming organization, and its members were featured as extras in the official series The Mandalorian.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/501st_Legion"
            },
            "Q24199571": {
                "name": "Annie Awards",
                "wikidata_aliases": "[]",
                "wikidata_summary": "The Hollywood Reporter article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24199571",
                "wikipedia_summary": "The Annie Awards are accolades which the Los Angeles branch of the International Animated Film Association, ASIFA-Hollywood, has presented each year since 1972 to recognize excellence in animation shown in American cinema and television. Originally designed to celebrate lifetime or career contributions to animation, the award has been given to individual works since 1992.\nMembership in ASIFA-Hollywood is divided into three main categories: General Member (for professionals), Patron (for enthusiasts of animation), and Student Member. Members in each category pay a fee to belong to the branch. Selected professional members of the branch are permitted to vote to decide the awards.\nThe 48th and 49th Annie Awards ceremonies were held virtually on April 16, 2021, and March 12, 2022, respectively, due to the then ongoing COVID-19 pandemic.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Annie_Awards"
            },
            "Q242446": {
                "name": "Lucasfilm",
                "wikidata_aliases": "[\"Lucasfilm Limited, LLC\",\"Lucasfilm Limited\",\"LFL\",\"Lucasfilm Ltd.\",\"Lucasfilm, Ltd.\",\"Lucasfilm Ltd. LLC\"]",
                "wikidata_summary": "American film and television production company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q242446",
                "wikipedia_summary": "Lucasfilm Ltd. LLC is an American film and television production company founded by filmmaker George Lucas in 1971 in San Rafael, California, though most of the company's operations were moved to San Francisco in 2005. It has been a subsidiary of Walt Disney Studios since 2012 and is best known for creating and producing the Star Wars and Indiana Jones franchises, as well as its leadership in developing special effects, sound, and computer animation for films.\nThe company's films Star Wars: Episode I – The Phantom Menace (1999), Star Wars: The Force Awakens (2015), Rogue One: A Star Wars Story (2016), Star Wars: The Last Jedi (2017), and Star Wars: The Rise of Skywalker (2019) are all among the 50 highest-grossing films of all time, with The Force Awakens becoming the highest-grossing film in the United States and Canada. On October 30, 2012, Disney acquired Lucasfilm for $4.05 billion in the form of cash and stock with $1.855 billion in stock.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lucasfilm"
            },
            "Q24259397": {
                "name": "Ethan Sacks",
                "wikidata_aliases": "[]",
                "wikidata_summary": "editor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24259397",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2432": {
                "name": "1984",
                "wikidata_aliases": "[]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2432",
                "wikipedia_summary": "1984 (MCMLXXXIV) was a leap year starting on Sunday of the Gregorian calendar, the 1984th year of the Common Era (CE) and Anno Domini (AD) designations, the 984th  year of the 2nd millennium, the 84th  year of the 20th century, and the  5th   year of the 1980s decade.  \n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1984"
            },
            "Q244700": {
                "name": "ultimate",
                "wikidata_aliases": "[\"ultimate frisbee\"]",
                "wikidata_summary": "team sport played with a disc",
                "wikidata_url": "https://www.wikidata.org/wiki/Q244700",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2459901": {
                "name": "compound feed",
                "wikidata_aliases": "[\"kibble\",\"mixed feeds\"]",
                "wikidata_summary": "animal food",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2459901",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q246693": {
                "name": "Ząbkowice Śląskie",
                "wikidata_aliases": "[\"Frankenstein\",\"Ząbkowice\"]",
                "wikidata_summary": "city of Poland",
                "wikidata_url": "https://www.wikidata.org/wiki/Q246693",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q24672271": {
                "name": "Kedi",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2016 film directed by Ceyda Torun",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24672271",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2474": {
                "name": "1970",
                "wikidata_aliases": "[\"MCMLXX\",\"nineteen seventy\"]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2474",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q24776795": {
                "name": "Fido domain",
                "wikidata_aliases": "[\"Fido\",\"IPR003812\"]",
                "wikidata_summary": "InterPro Domain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24776795",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q24953533": {
                "name": "Kanan Jarrus",
                "wikidata_aliases": "[\"Caleb Dume\"]",
                "wikidata_summary": "fictional character from the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24953533",
                "wikipedia_summary": "Kanan Jarrus (born Caleb Dume) is a fictional character in the Star Wars franchise, voiced by Freddie Prinze Jr. He is featured as one of the main characters of the animated series Star Wars Rebels (2014–2018) and related works. His Force spirit also appears as a disembodied voice in the film The Rise of Skywalker (2019), while a young Caleb Dume makes appearances in the seventh season of The Clone Wars (2020), The Bad Batch (2021) and Tales of the Jedi (2022).\nIn the Star Wars universe, Kanan is a Jedi Padawan who survived the Great Jedi Purge after his master, Depa Billaba, sacrificed herself to save him. From that point onwards, Kanan lived most of his life on the run, hiding from the Galactic Empire, before eventually meeting Hera Syndulla and joining the Ghost crew as its de facto leader. Although he initially keeps his Force abilities hidden from his comrades, he re-embraces his Jedi role after meeting Ezra Bridger, whom he begins training in the Jedi arts, while also attempting to complete his own training and become a Jedi Knight. Later, Kanan and his crew join the Rebel Alliance to assist them in their fight against the Empire. While Kanan ultimately sacrifices himself to save his friends, his legacy lives on through their memories of him, as well as his and Hera's son, Jacen Syndulla.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kanan_Jarrus"
            },
            "Q24953547": {
                "name": "Ezra Bridger",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character from the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24953547",
                "wikipedia_summary": "Ezra Bridger is a fictional character in the Star Wars franchise, voiced by Taylor Gray. He is featured as the main protagonist of the animated series Star Wars Rebels (2014–2018) and appears in related works. Ezra also appears in Forces of Destiny (2018) with Gray reprising his role. The character makes his live-action debut in the television series Ahsoka (2023), portrayed by Eman Esfandi.\nIn Rebels, Ezra is introduced as a 14-year old orphaned street urchin and con artist who joins the crew of the Ghost in freeing his home planet of Lothal from the tyranny of the Galactic Empire and is taken under the wing of Kanan Jarrus, who trains him in the Jedi arts, and later former Sith Maul, who trains him in how to wield the dark side of the Force. Ezra and the crew join the Rebel Alliance to assist them in their fight to free the galaxy as a whole, and face enemies such as the Inquisitors, Darth Vader, and Grand Admiral Thrawn—the latter of whom Ezra sacrifices himself to defeat, disappearing with him into another galaxy. In Ahsoka, years after the fall of the Empire, Sabine Wren travels to the other galaxy to rescue Ezra; while Ezra returns to the galaxy with Thrawn, Sabine and Ahsoka Tano are left stranded in his place.\nThe character has received a generally positive critical reception, with his character dynamics with Hondo Ohnaka and Thrawn receiving particular praise.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ezra_Bridger"
            },
            "Q2503497": {
                "name": "Kazuma Kiryu",
                "wikidata_aliases": "[\"Kiryu Kazuma\"]",
                "wikidata_summary": "protagonist in the video game series Yakuza",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2503497",
                "wikipedia_summary": "Kazuma Kiryu (Japanese: 桐生 一馬, Hepburn: Kiryū Kazuma) is a fictional character and the initial main protagonist of Sega's action-adventure beat 'em up Japanese role-playing game series Yakuza / Like a Dragon. He is popularly known as 'the Dragon of Dojima' (堂島の龍, Dōjima no Ryū) due to the tattoo of a dragon on his back and him originally being a fearsome member of the yakuza group known as the Dojima Family, a subsidiary of the Tojo Clan. He was introduced in the series' 2005 debut game, where he took the blame for his boss's death to protect his sworn-brother Akira Nishikiyama, resulting in his expulsion from the clan and a ten-year stay in prison. After leaving prison, he fights against the new threats in his life, during which he meets Haruka Sawamura, to whom he eventually becomes an adoptive father. He is voiced by Takaya Kuroda in Japanese and by Darryl Kurylo (2005, 2020) and Yong Yea (2023-present) in the series’ English-dubbed releases. Besides the main series, Kiryu has also appeared in two “Like a Dragon” live-action films, as well as other video games including Project X Zone 2 and as downloadable content in the spin-off game, Fist of the North Star: Lost Paradise.\nSega producer Toshihiro Nagoshi stated he was created to appeal to a broad audience. Kiryu was the sole playable character for the first three games; in the next three, additional playable characters are included, causing him to take on a smaller role. He was once again the sole playable character in the series' seventh main installment, Yakuza 6: The Song of Life. The eighth installment, Yakuza: Like a Dragon, stars a new protagonist, Ichiban Kasuga, though Kiryu makes an appearance as a supporting character. Kiryu returns as the primary protagonist in the spinoff title Like a Dragon Gaiden, and is one of the two primary protagonists, alongside Kasuga, in Like a Dragon: Infinite Wealth.\nCritical reception to Kiryu has been generally positive. Several critics have praised how Kiryu, despite his history as a yakuza, stood out because of his kindness and character development across the series' story. On the other hand, he has also been viewed as a somewhat typical gaming protagonist. Kiryu is also often considered a PlayStation mascot.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kazuma_Kiryu"
            },
            "Q2503794": {
                "name": "Northumbria University",
                "wikidata_aliases": "[\"University of Northumbria at Newcastle\"]",
                "wikidata_summary": "university in Newcastle upon Tyne, England",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2503794",
                "wikipedia_summary": "Northumbria University (legally the University of Northumbria at Newcastle) is a public research university located in Newcastle upon Tyne, North East of England. It has been a university since 1992, but has its origins in the Rutherford College, founded in 1877.Northumbria University is primarily based within City Campus located in Newcastle upon Tyne city centre and at Coach Lane campus on the outskirts of the city centre, London and Amsterdam. It is organised into four faculties—Arts, Design and Social Sciences; Business and Law; Engineering and Environment, and Health and Life Sciences. Northumbria University has approximately 37,000 students.According to the 2021 Research Excellence Framework, Northumbria University was rated 23rd in the UK for research power (the grade point average score of a university, multiplied by the full-time equivalent number of researchers submitted). This determines how much funding is awarded to universities to spend on research activity and represented the largest percentage-point rise in market share since the previous exercise. The annual income of the institution for 2022–23 was £338.3 million of which £16.4 million was from research grants and contracts, with an expenditure of £340.2 million.Northumbria is a member of the Association of Commonwealth Universities, Universities UK and the Wallace Group.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Northumbria_University"
            },
            "Q25208763": {
                "name": "Bounty Hunters",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2016 film",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25208763",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2523206": {
                "name": "Livestock farming",
                "wikidata_aliases": "[\"n5 Livestock farming\"]",
                "wikidata_summary": "German term: procreation and keeping of farm animals to produce food and raw materials",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2523206",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q25274": {
                "name": "2019",
                "wikidata_aliases": "[\"MMXIX\",\"twenty nineteen\",\"two thousand and nineteen\",\"2019 AD\",\"2019 CE\"]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25274",
                "wikipedia_summary": "2019 (MMXIX) was a common year starting on Tuesday of the Gregorian calendar, the 2019th year of the Common Era (CE) and Anno Domini (AD) designations, the 19th  year of the 3rd millennium and the 21st century, and the  10th  and last year of the 2010s decade.  This was the year in which the first known human case of COVID-19 was documented, preceding the pandemic which was declared by the World Health Organization the following year.Up to that point, 2019 had been described as the 'best year in human history' by some newspapers and media outlets in the United States, including The New York Times and WNYC.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2019"
            },
            "Q25306": {
                "name": "Carnivore",
                "wikidata_aliases": "[\"carnivoran\",\"carnivore\",\"carnivores\",\"carnivoran predators\",\"carnivorans\"]",
                "wikidata_summary": "order of mammals",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25306",
                "wikipedia_summary": "A carnivore , or meat-eater (Latin, caro, genitive carnis, meaning meat or 'flesh' and vorare meaning 'to devour'), is an animal or plant whose food and energy requirements derive from the consumption of animal tissues (mainly muscle, fat and other soft tissues) whether through hunting or scavenging.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Carnivore"
            },
            "Q25307": {
                "name": "Magpie",
                "wikidata_aliases": "[\"Pica pica\",\"common magpie\",\"magpie\"]",
                "wikidata_summary": "species of bird",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25307",
                "wikipedia_summary": "Magpies are birds of the family Corvidae. Like other members of their family, they are widely considered to be intelligent creatures. The Eurasian magpie, for instance, is thought to rank among the world's most intelligent creatures and is one of the few nonmammalian species able to recognize itself in a mirror test. Magpies have shown the ability to make and use tools, imitate human speech, grieve, play games, and work in teams. They are particularly well known for their songs and were once popular as cagebirds. In addition to other members of the genus Pica, corvids considered as magpies are in the genera Cissa, Urocissa, and Cyanopica.\nMagpies of the genus Pica are generally found in temperate regions of Europe, Asia, and western North America, with populations also present in Tibet and high-elevation areas of Kashmir. Magpies of the genus Cyanopica are found in East Asia and the Iberian Peninsula. The birds called magpies in Australia are, however, not related to the magpies in the rest of the world.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Magpie"
            },
            "Q25337": {
                "name": "2020",
                "wikidata_aliases": "[\"MMXX\",\"twenty twenty\",\"2020 AD\",\"2020 CE\",\"two thousand and twenty\",\"2020 Adelaide International\"]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25337",
                "wikipedia_summary": "2020 (MMXX) was a leap year starting on Wednesday of the Gregorian calendar, the 2020th year of the Common Era (CE) and Anno Domini (AD) designations, the 20th  year of the 3rd millennium and the 21st century, and the  1st   year of the 2020s decade.  \nThe year 2020 was heavily defined by the COVID-19 pandemic, which led to global social and economic disruption, mass cancellations and postponements of events, worldwide lockdowns and the largest economic recession since the Great Depression in the 1930s. Geospatial World also called 2020 'the worst year in terms of climate change' in part due to major climate disasters worldwide, including major bushfires in Australia and the western United States, as well as extreme tropical cyclone activity affecting large parts of North America. A United Nations progress report published in December 2020 indicated that none of the international Sustainable Development Goals for 2020 were achieved. Time magazine used its sixth ever Red X cover to declare 2020 'the worst year ever', although the cover article itself did not go as far, instead saying 'There have been worse years in U.S. history, and certainly worse years in world history, but most of us alive today have seen nothing like this one.' The Golden Raspberry Awards also awarded the year the Special Governor's Award for The Worst Calendar Year EVER! at their 41st ceremony.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2020"
            },
            "Q25379": {
                "name": "play",
                "wikidata_aliases": "[\"drama\",\"drama play\",\"dramas\",\"dramatic theatrical work\",\"plays\",\"stage drama\",\"stage play\",\"theater play\",\"theatre drama\",\"theatre play\",\"theatrical play\",\"staged dramatic work\",\"theatrical dramatic work\"]",
                "wikidata_summary": "theatrical dramatic work intended to be performed by actors (in theatre, radio or recorded for TV)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25379",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q25455117": {
                "name": "Sabine Wren",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character from the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25455117",
                "wikipedia_summary": "Sabine Wren is a fictional character in the Star Wars franchise, voiced by Tiya Sircar in the animated series Star Wars Rebels (2014–2018) and Forces of Destiny (2017–2018), and portrayed by Natasha Liu Bordizzo in the live-action miniseries Ahsoka (2023).\nIn Star Wars Rebels, Sabine is introduced as a Mandalorian graffiti artist and bounty hunter who left the Empire for the Rebel Alliance after a weapon she developed for them was used against her people; as a rebel, she joins the crew of the Ghost, recruiting Wedge Antilles to their cause, and on stealing the Darksaber from Maul, is trained in lightsaber combat by Kanan Jarrus, in spite of an inability to use the Force, eventually giving the Darksaber to Bo-Katan Kryze, and moving to Lothal after Ezra Bridger sacrifices himself to banish himself and Grand Admiral Thrawn to another galaxy. Between the events of Rebels and Ahsoka, Sabine becomes the Jedi Padawan of Ahsoka Tano offscreen, studying Jedi practices in a failed attempt to learn how to wield the Force herself, before leaving Ahsoka after her family is killed during the genocidal Purge of Mandalore, a conflict Ahsoka had prevented Sabine from participating in. In Ahsoka, Sabine reunites with Ahsoka to investigate rumors of Thrawn's and Ezra' survival; after Ahsoka is apparently killed by former Jedi Baylan Skoll, Sabine joins him in tracking down Thrawn and Ezra, ensuring both return to the galaxy, while Sabine herself, a still-alive Ahsoka, Baylan, and his own apprentice Shin Hati are all left stranded in the other galaxy.\nThe character has received a generally positive critical reception, for both Sircar's vocal performance and Liu Bordizzo's physical portrayal.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sabine_Wren"
            },
            "Q25475054": {
                "name": "Ádám Miklósi",
                "wikidata_aliases": "[\"Adam Miklosi\"]",
                "wikidata_summary": "Hungarian university teacher",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25475054",
                "wikipedia_summary": "Ádám Miklósi (born 25 September 1962) is a Hungarian ethologist, expert on dog cognition and behavior. He holds the position of professor and the head of the Ethology Department at the Faculty of Sciences of the Eötvös Loránd University in Budapest, Hungary. In 2016 he was elected as a corresponding member, in 2022 as a full member of the Hungarian Academy of Sciences. He is the co-founder and leader of the Family Dog Project, which aims to study human-dog interaction from an ethological perspective. In 2014 he published the 2nd edition of an academic volume entitled Dog Behaviour, Evolution, and Cognition by Oxford University Press",
                "wikipedia_url": "https://en.wikipedia.org/wiki/%C3%81d%C3%A1m_Mikl%C3%B3si"
            },
            "Q25540924": {
                "name": "Star Wars prequel trilogy",
                "wikidata_aliases": "[\"Star Wars: The Prequel Trilogy\",\"Star Wars I-III\",\"Star Wars I to III\",\"Star Wars 1-3\",\"Star Wars 1 to 3\",\"Star Wars movies I-III\",\"Star Wars movies I to III\",\"Star Wars movies 1-3\",\"Star Wars movies 1 to 3\",\"second trilogy in Star Wars\",\"second trilogy (Star Wars)\",\"second Star Wars trilogy\"]",
                "wikidata_summary": "second film trilogy in the Star Wars franchise",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25540924",
                "wikipedia_summary": "The Star Wars prequel trilogy, colloquially referred to as the prequels, is a series of epic space-opera films written and directed by George Lucas. It was produced by Lucasfilm Ltd. and distributed by 20th Century Fox. The trilogy was released from 1999 to 2005 and is set before the original Star Wars trilogy (1977–1983), chronologically making it the first act of the Skywalker Saga. Lucas had planned a prequel trilogy (as well as a sequel trilogy) before the release of the original film, but halted major Star Wars films beyond the original trilogy by 1981. When computer-generated imagery (CGI) had advanced to the level he wanted for the visual effects he wanted for subsequent films, Lucas revived plans for the prequels by the early 1990s. The trilogy marked Lucas's return to directing after a 22-year hiatus following the original Star Wars film in 1977, as well as a 16-year hiatus between the classic and prequel trilogies.\nThe trilogy consists of Episode I – The Phantom Menace (1999), Episode II – Attack of the Clones (2002), and Episode III – Revenge of the Sith (2005). The films follow the training of the powerful youth Anakin Skywalker (the father of the original trilogy protagonists Luke Skywalker and Leia Organa) as a Jedi under the tutelage of Jedi Masters Qui-Gon Jinn (1999), Obi-Wan Kenobi and Yoda, his fall to the dark side of the Force and rebirth as Darth Vader. The trilogy also depicts the corruption of the Galactic Republic, the annihilation of the Jedi Order, and the rise of the Empire under Palpatine (secretly the Sith lord Darth Sidious). The first two films received mixed reviews, while the third's reception was more positive. However, all three enjoyed box-office success.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars_prequel_trilogy"
            },
            "Q2558748": {
                "name": "Rapid Eye Movement",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2007 album by Riverside",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2558748",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2559261": {
                "name": "Dave Filoni",
                "wikidata_aliases": "[\"David Filoni\",\"David Christopher Filoni\"]",
                "wikidata_summary": "American film director (born 1974)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2559261",
                "wikipedia_summary": "David Filoni (born June 7, 1974) is an American director, producer, and screenwriter currently serving as the Chief Creative Officer of Lucasfilm. He directed multiple episodes of Avatar: The Last Airbender, before being hired by George Lucas to oversee direction on the television series Star Wars: The Clone Wars as well as directing and writing numerous episodes, including its theatrical film. He was the creator of follow-up series Star Wars Rebels, and served as a supervising director, executive producer and writer. \nFiloni is the creator, executive producer and sole writer of live-action miniseries Ahsoka, and is an executive producer on The Mandalorian, The Book of Boba Fett, and Skeleton Crew. Filoni is also the creator and executive producer of the animated series Star Wars Resistance, Star Wars: The Bad Batch and Tales of the Jedi, and an executive producer of the web series Star Wars Forces of Destiny. Filoni is an Executive Vice President at Lucasfilm, and in 2023 accepted a promotion to Chief Creative Officer.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dave_Filoni"
            },
            "Q2564783": {
                "name": "Paratransit",
                "wikidata_aliases": "[\"transportation service\",\"taxi service for the disabled\",\"Intermediate Public Transport\"]",
                "wikidata_summary": "transportation service for people with disabilities",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2564783",
                "wikipedia_summary": "Paratransit (the term used in North America) or Intermediate Public Transport (also known by other names such as community transport (UK)), is a type of transportation services that supplement fixed-route mass transit by providing individualized rides without fixed routes or timetables. Paratransit services may vary considerably on the degree of flexibility they provide their customers. At their simplest they may consist of a taxi or small bus that will run along a more or less defined route and then stop to pick up or discharge passengers on request. At the other end of the spectrum—fully demand responsive transport—the most flexible paratransit systems offer on-demand call-up door-to-door service from any origin to any destination in a service area. In addition to public transit agencies, paratransit services may be operated by community groups or not-for-profit organizations, and for-profit private companies or operators.\nThe concept of Intermediate Public Transport (IPT) or paratransit, exhibits considerable variation between developed and developing nations. In developed countries, it is typically a flexible, demand-responsive form of public transportation designed to provide point-to-point service. These systems are generally well-structured and organized. On the other hand, in developing countries, IPT often operates as an informal, cost-effective alternative to formal transportation modes. It tends to be unorganized and subject to minimal government regulation, serving as a prevalent form of spontaneous public transport that facilitates quick and convenient travel.The importance of IPT may extends beyond mobility, as it can also contribute to the economic well-being of those who operate these services. In some cases, drivers of vehicles such as tempos and autorickshaws can earn a substantial daily income, which supports their livelihoods.Typically, minibuses are used to provide paratransit service in USA.  Most paratransit vehicles are equipped with wheelchair lifts or ramps to facilitate access. In the United States, private transportation companies often provide paratransit service in cities and metropolitan areas under contract to local public transportation agencies.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Paratransit"
            },
            "Q2612834": {
                "name": "Plagues",
                "wikidata_aliases": "[]",
                "wikidata_summary": "album by The Devil Wears Prada",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2612834",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q26214577": {
                "name": "Igor",
                "wikidata_aliases": "[\"Igor (given name)\",\"Igor (first name)\"]",
                "wikidata_summary": "male given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26214577",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2635753": {
                "name": "The Nameless",
                "wikidata_aliases": "[]",
                "wikidata_summary": "single by Slipknot",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2635753",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q26575": {
                "name": "Thái Nguyên",
                "wikidata_aliases": "[\"Thai Nguyen\",\"Thai Nguyen Eyaleti\"]",
                "wikidata_summary": "province in northeastern Vietnam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26575",
                "wikipedia_summary": "Thái Nguyên () is a city in Vietnam. It is the capital and largest city of Thái Nguyên Province. The city is listed as a first class city and is the ninth largest city in Vietnam. It has long been famous throughout Vietnam for its Tân Cương tea, among the most recognized Vietnamese tea regions. In 1959, it become the site of Vietnam's first steel mill, and is now home to a large and growing major regional university complex.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Th%C3%A1i_Nguy%C3%AAn"
            },
            "Q26689564": {
                "name": "Insecure",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American comedy-drama television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26689564",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q271716": {
                "name": "Personality psychology",
                "wikidata_aliases": "[\"psychology of personality\"]",
                "wikidata_summary": "branch of psychology focused on personality",
                "wikidata_url": "https://www.wikidata.org/wiki/Q271716",
                "wikipedia_summary": "Personality psychology is a branch of psychology that examines personality and its variation among individuals. It aims to show how people are individually different due to psychological forces. Its areas of focus include:\n\nDescribing what personality is\nDocumenting how personalities develop\nExplaining the mental processes of personality and how they affect functioning\nProviding a framework for understanding individuals'Personality' is a dynamic and organized set of characteristics possessed by an individual that uniquely influences their environment, cognition, emotions, motivations, and behaviors in various situations. The word personality originates from the Latin persona, which means 'mask'.\nPersonality also pertains to the pattern of thoughts, feelings, social adjustments, and behaviors persistently exhibited over time that strongly influences one's expectations, self-perceptions, values, and attitudes. Personality also predicts human reactions to other people, problems, and stress. Gordon Allport (1937) described two major ways to study personality: the nomothetic and the idiographic. Nomothetic psychology seeks general laws that can be applied to many different people, such as the principle of self-actualization or the trait of extraversion. Idiographic psychology is an attempt to understand the unique aspects of a particular individual.\nThe study of personality has a broad and varied history in psychology, with an abundance of theoretical traditions. The major theories include dispositional (trait) perspective, psychodynamic, humanistic, biological, behaviorist, evolutionary, and social learning perspective. Many researchers and psychologists do not explicitly identify themselves with a certain perspective and instead take an eclectic approach. Research in this area is empirically driven – such as dimensional models, based on multivariate statistics such as factor analysis – or emphasizes theory development, such as that of the psychodynamic theory. There is also a substantial emphasis on the applied field of personality testing. In psychological education and training, the study of the nature of personality and its psychological development is usually reviewed as a prerequisite to courses in abnormal psychology or clinical psychology.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Personality_psychology"
            },
            "Q27261089": {
                "name": "Semaglutide",
                "wikidata_aliases": "[\"Semaglutide\"]",
                "wikidata_summary": "medication used to treat type 2 diabetes and obesity",
                "wikidata_url": "https://www.wikidata.org/wiki/Q27261089",
                "wikipedia_summary": "Semaglutide is an antidiabetic medication used for the treatment of type 2 diabetes and an anti-obesity medication used for long-term weight management. It is a peptide similar to the hormone glucagon-like peptide-1 (GLP-1), modified with a side chain. It can be administered by subcutaneous injection or taken orally. It is sold under the brand names Ozempic and Rybelsus for diabetes, and under the brand name Wegovy for weight loss.Semaglutide is a glucagon-like peptide-1 receptor agonist. The most common side effects include nausea, vomiting, diarrhea, abdominal pain, and constipation.It was approved for medical use in the US in 2017. In 2021, it was the 90th most commonly prescribed medication in the United States, with more than 8 million prescriptions.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Semaglutide"
            },
            "Q273131": {
                "name": "Incense",
                "wikidata_aliases": "[]",
                "wikidata_summary": "material that produces fragrant smoke when burned",
                "wikidata_url": "https://www.wikidata.org/wiki/Q273131",
                "wikipedia_summary": "Incense is an aromatic biotic material that releases fragrant smoke when burnt. The term is used for either the material or the aroma. Incense is used for aesthetic reasons, religious worship, aromatherapy, meditation, and ceremony. It may also be used as a simple deodorant or insect repellent.Incense is composed of aromatic plant materials, often combined with essential oils. The forms taken by incense differ with the underlying culture, and have changed with advances in technology and increasing number of uses.Incense can generally be separated into two main types: 'indirect-burning' and 'direct-burning'. Indirect-burning incense (or 'non-combustible incense') is not capable of burning on its own, and requires a separate heat source. Direct-burning incense (or 'combustible incense') is lit directly by a flame and then fanned or blown out, leaving a glowing ember that smoulders and releases a smoky fragrance. Direct-burning incense is either a paste formed around a bamboo stick, or a paste that is extruded into a stick or cone shape.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Incense"
            },
            "Q2739176": {
                "name": "Feral",
                "wikidata_aliases": "[\"feral animal\"]",
                "wikidata_summary": "formerly domestic animals which survive in the wild",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2739176",
                "wikipedia_summary": "A feral (from Latin  fera 'a wild beast') animal or plant is one that lives in the wild but is descended from domesticated individuals. As with an introduced species, the introduction of feral animals or plants to non-native regions may disrupt ecosystems and has, in some cases, contributed to extinction of indigenous species.  The removal of feral species is a major focus of island restoration.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Feral"
            },
            "Q2740414": {
                "name": "Team Ninja",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Japanese video game developer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2740414",
                "wikipedia_summary": "Team Ninja (Japanese: チームニンジャ) is a Japanese video game developer, and a division of Koei Tecmo, founded in 1995 as a part of Tecmo. It was founded by Tomonobu Itagaki, and is best known for franchises such as Ninja Gaiden, Dead or Alive and Nioh.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Team_Ninja"
            },
            "Q2763": {
                "name": "The Holocaust",
                "wikidata_aliases": "[\"Holocaust\",\"the Holocaust\",\"the Shoah\",\"Shoah\"]",
                "wikidata_summary": "genocide of European Jews by Nazi Germany carried out during the second world war",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2763",
                "wikipedia_summary": "The Holocaust was the genocide of European Jews during World War II. Between 1941 and 1945, Nazi Germany and its collaborators systematically murdered some six million Jews across German-occupied Europe, around two-thirds of Europe's Jewish population. The murders were carried out primarily through mass shootings and poison gas in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, and Chełmno in occupied Poland.\nThe Nazis developed their ideology based on racism and pursuit of 'living space', and seized power in early 1933. Meant to force all German Jews regardless of means to attempt to emigrate, the regime passed anti-Jewish laws, encouraged harassment, and orchestrated a nationwide pogrom in November 1938. After Germany invaded Poland in September 1939, occupation authorities began to establish ghettos to segregate Jews. Following the invasion of the Soviet Union in June 1941, 1.5 to 2 million Jews were shot by German forces and local collaborators.\nLater in 1941 or early 1942, the highest levels of the German government decided to murder all Jews in Europe. Victims were deported by rail to extermination camps where, if they survived the journey, most were killed with poison gas. Other Jews continued to be employed in forced labor camps where many died from starvation, abuse, exhaustion, or being used as test subjects in deadly medical experiments. Although many Jews tried to escape, surviving in hiding was difficult due to factors such as the lack of money to pay helpers and the risk of denunciation. The property, homes, and jobs belonging to murdered Jews were redistributed to the German occupiers and other non-Jews. Although the majority of Holocaust victims died in 1942, the killing continued at a lower rate until the end of the war in May 1945. Separate Nazi persecutions killed a similar or larger number of non-Jewish civilians and POWs; the term Holocaust is sometimes used to also refer to the persecution of these other groups.\nMany Jewish survivors emigrated outside of Europe after the war. A few Holocaust perpetrators faced criminal trials. Billions of dollars in reparations have been paid, although falling short of the Jews' losses. The Holocaust has also been commemorated in museums, memorials, and culture. It has become central to Western historical consciousness as a symbol of the ultimate human evil.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Holocaust"
            },
            "Q27881473": {
                "name": "Vivek Ramaswamy",
                "wikidata_aliases": "[\"Vivek G. Ramaswamy\",\"Vivek Ganapathy Ramaswamy\"]",
                "wikidata_summary": "American presidential candidate and businessman (born 1985)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q27881473",
                "wikipedia_summary": "Vivek Ganapathy Ramaswamy (; vih-VAYK rah-mə-SWAH-mee; born August 9, 1985) is an American entrepreneur and politician. He founded Roivant Sciences, a pharmaceutical company, in 2014. In February 2023, Ramaswamy declared his candidacy for the Republican Party nomination in the 2024 United States presidential election. He suspended his campaign in January 2024, after finishing fourth in Iowa's caucuses.Ramaswamy was born in Cincinnati to Indian immigrant parents. He graduated from Harvard College with a bachelor's degree in biology and later earned a law degree from Yale Law School. Ramaswamy worked as an investment partner at a hedge fund before founding Roivant Sciences. He also co-founded an investment firm, Strive Asset Management.\nRamaswamy claims the United States is in the middle of a national identity crisis precipitated by what he calls 'new secular religions like COVID-ism, climate-ism, and gender ideology'. He is also a critic of environmental, social, and corporate governance initiatives (ESG). In January 2024, Forbes estimated Ramaswamy's net worth at more than $960 million; his wealth comes from biotech and financial businesses.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vivek_Ramaswamy"
            },
            "Q28151379": {
                "name": "Rogue One",
                "wikidata_aliases": "[\"Rogue One\"]",
                "wikidata_summary": "2016 soundtrack album by Michael Giacchino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28151379",
                "wikipedia_summary": "Rogue One: A Star Wars Story (or simply Rogue One) is a 2016 American epic space opera film directed by Gareth Edwards. The screenplay by Chris Weitz and Tony Gilroy is from a story by John Knoll and Gary Whitta. It was produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures. It is the first installment of the Star Wars anthology series, and an immediate prequel to Star Wars (1977). The main cast consists of Felicity Jones, Diego Luna, Ben Mendelsohn, Donnie Yen, Mads Mikkelsen, Alan Tudyk, Riz Ahmed, Jiang Wen, and Forest Whitaker. Set a week before Star Wars, the plot follows a group of rebels who band together to steal plans of the Death Star, the ultimate weapon of the Galactic Empire. It details the Rebel Alliance's first effective victory against the Empire, first referenced in Star Wars' opening crawl.Based on an idea first pitched by Knoll ten years before it entered development, the film was made to be different in tone and style from the traditional Star Wars films, omitting the customary opening crawl and transitional screen wipes. Principal photography on the film began at Pinewood Studios, Buckinghamshire, in early August 2015 and wrapped in February 2016. The film then went through extensive reshoots in mid-2016. The film's score was composed by Michael Giacchino, rather than John Williams, who composed the score of all prior Skywalker Saga films up to that point. With an estimated production budget of at least $200-265 million, it is one of the most expensive films ever made.\nRogue One premiered in Los Angeles on December 10, 2016, and was theatrically released in the United States on December 16. The film received positive reviews from critics, with praise for its acting, story, visuals, musical score, cinematography, and the darker and more serious tone compared to previous Star Wars films, but criticism for its pacing, characters, and digital recreations of Peter Cushing and Carrie Fisher. It grossed over $1 billion worldwide, making it the 20th-highest-grossing film of all time and the second-highest-grossing film of 2016 during its theatrical run. It received two Academy Award nominations for Best Sound Mixing and Best Visual Effects.\nA spin-off television series Andor, debuted on Disney+ on September 21, 2022, with Luna returning as the title character.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rogue_One"
            },
            "Q2818": {
                "name": "August 30",
                "wikidata_aliases": "[\"August 30th\",\"30th of August\",\"30 August\",\"Aug 30\"]",
                "wikidata_summary": "day of the year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2818",
                "wikipedia_summary": "August 30 is the 242nd day of the year (243rd in leap years) in the Gregorian calendar;  123 days remain until the end of the year.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/August_30"
            },
            "Q28787": {
                "name": "Star Wars Rebels",
                "wikidata_aliases": "[\"Star Wars: Rebels\",\"Rebels\"]",
                "wikidata_summary": "American 3D CGI animated television series from 2014–2018",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28787",
                "wikipedia_summary": "Star Wars Rebels is an American 3D animated science fiction television series produced by Lucasfilm Animation and set in the Star Wars universe.  It takes place 14 years after Star Wars: Episode III – Revenge of the Sith (2005) and progressing toward the events of the original Star Wars film (1977). It depicts the Galactic Empire hunting down the last of the Jedi while a fledgling rebellion against the Empire emerges. The visual style of the series is inspired by the original Star Wars trilogy concept art by Ralph McQuarrie. The series features new characters, along with some from the original trilogy and from the previous animated series, Star Wars: The Clone Wars (2008–2020). The series comprises four seasons.\nThe series premiered as a one-hour television film, Spark of Rebellion, on October 3, 2014, on Disney Channel prior to the premiere of the series on October 13 on Disney XD. The second season premiered on June 20, 2015, with a one-hour television film, The Siege of Lothal. The third season premiered on September 24, 2016, with the television film, Steps Into Shadow. The fourth and final season premiered on October 16, 2017, with another one-hour television film, Heroes of Mandalore. Its final episode aired on March 5, 2018.Dave Filoni, Simon Kinberg, and Greg Weisman served as executive producers of the first season. Weisman left the show after the first season. Filoni was also the supervising director for the first two seasons, a role he relinquished after accepting a promotion that expanded his creative role into overseeing all Lucasfilm Animation projects; he chose Justin Ridge to succeed him for the third season. Filoni re-assumed the role for the fourth season.\nRebels has been generally well-received with several award wins and nominations. The show was nominated for the Critics' Choice Television Award for Best Animated Series and the Primetime Emmy Award for Outstanding Children's Program. Rebels became the first recipient of the Saturn Award for Best Animated Series on Television, winning for its final two seasons.\nA number of tie-in media have been released to expand upon the series' lore such as the comic book series Kanan, the novel A New Dawn, and the novel series Thrawn. Characters, storylines, and elements introduced in the series would also appear in subsequent Star Wars media. The series' storyline continues in the Disney+ live-action series Ahsoka.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars_Rebels"
            },
            "Q2940649": {
                "name": "Cartoon Saloon",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Irish animation studio",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2940649",
                "wikipedia_summary": "Cartoon Saloon is an Irish animation film, short film and television studio based in Kilkenny which provides film TV and short film services. The studio is best known for its animated feature films The Secret of Kells, Song of the Sea, The Breadwinner and Wolfwalkers. Their works have received five Academy Award nominations, their first four feature length works all received nominations for Best Animated Feature and one for Best Animated Short Film (Late Afternoon). The company also developed the cartoon series Skunk Fu!, Puffin Rock, Dorg Van Dango and Viking Skool. As of 2020, the studio employs 300 animators.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cartoon_Saloon"
            },
            "Q295964": {
                "name": "Jon Favreau",
                "wikidata_aliases": "[\"Jonathan Favreau\",\"Jonathan Kolia Favreau\"]",
                "wikidata_summary": "American actor and filmmaker (born 1966)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q295964",
                "wikipedia_summary": "Jonathan Kolia Favreau ( FAV-roh; born October 19, 1966) is an American filmmaker and actor. As an actor, Favreau has appeared in films such as Rudy (1993), PCU (1994), Swingers (1996), Very Bad Things (1998), Deep Impact (1998), The Replacements (2000), Daredevil (2003), The Break-Up (2006), Four Christmases (2008), Couples Retreat (2009), I Love You, Man (2009), People Like Us (2012), The Wolf of Wall Street (2013), Chef (2014), and several films created by Marvel Studios.\nAs a filmmaker, Favreau has been significantly involved with the Marvel Cinematic Universe. He directed, produced, and appeared as Happy Hogan in the films Iron Man (2008) and Iron Man 2 (2010). He also served as an executive producer for or appeared as the character in the films The Avengers (2012), Iron Man 3 (2013), Avengers: Age of Ultron (2015), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), Spider-Man: Far From Home (2019), and Spider-Man: No Way Home (2021).\nHe has also directed the films Elf (2003), Zathura: A Space Adventure (2005), Cowboys & Aliens (2011), Chef (2014), The Jungle Book (2016), and The Lion King (2019). Recently, Favreau has been known for his work on the Star Wars franchise with Dave Filoni, creating the Disney+ original series The Mandalorian (2019–present), which Filoni helped develop, with both serving as executive producers. Alongside Filoni, he serves as an executive producer on all of the show's spin-off series, including The Book of Boba Fett, Ahsoka, and the upcoming Skeleton Crew. He produces films under his production company banner, Fairview Entertainment, and also presents the television cooking series The Chef Show.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jon_Favreau"
            },
            "Q30": {
                "name": "United States",
                "wikidata_aliases": "[\"United States\",\"the States\",\"the United States of America\",\"US of America\",\"USA\",\"U.S.A.\",\"America\",\"the US\",\"the U.S.\",\"the US of A\",\"U.S. of America\",\"the US of America\",\"US\",\"the USA\",\"U.S.\",\"the U.S.A.\",\"the U.S. of A\",\"US of A\",\"the U.S. of America\",\"U. S.\",\"U. S. A.\",\"the United States\",\"Merica\",\"America (United States)\"]",
                "wikidata_summary": "country primarily located in North America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q30",
                "wikipedia_summary": "The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America. It is a federation of 50 states, a federal capital district (Washington, D.C.), and 326 Indian reservations. Outside the union of states, it asserts sovereignty over five major unincorporated island territories and various uninhabited islands. The country has the world's third-largest land area, second-largest exclusive economic zone, and third-largest population, exceeding 334 million.Paleo-Indians migrated across the Bering land bridge more than 12,000 years ago. British colonization led to the first settlement of the Thirteen Colonies in Virginia in 1607. Clashes with the British Crown over taxation and political representation sparked the American Revolution, with the Second Continental Congress formally declaring independence on July 4, 1776. Following its victory in the Revolutionary War (1775–1783), the country continued to expand across North America. As more states were admitted, sectional division over slavery led to the secession of the Confederate States of America, which fought the remaining states of the Union during the 1861–1865 American Civil War. With the Union's victory and preservation, slavery was abolished nationally. By 1890, the United States had established itself as a great power. After Japan's attack on Pearl Harbor in December 1941, the U.S. entered World War II. The aftermath of the war left the U.S. and the Soviet Union as the world's two superpowers and led to the Cold War, during which both countries engaged in a struggle for ideological dominance and international influence. Following the Soviet Union's collapse and the end of the Cold War in 1991, the U.S. emerged as the world's sole superpower.\nThe U.S. national government is a presidential constitutional republic and liberal democracy with three separate branches: legislative, executive, and judicial. It has a bicameral national legislature composed of the House of Representatives, a lower house based on population; and the Senate, an upper house based on equal representation for each state. Substantial autonomy is given to states and several territories, with a political culture that emphasizes liberty, equality under the law, individualism, and limited government.\nOne of the world's most developed countries, the United States has had the largest nominal GDP since 1890 and accounted for 15% of the global economy in 2023. It possesses by far the largest amount of wealth of any country and the highest median income per capita of any non-microstate. The U.S. ranks among the world's highest in economic competitiveness, productivity, innovation, human rights, and higher education. Its hard power and cultural influence have a global reach. The U.S. is a founding member of the World Bank, IMF, Organization of American States, NATO, World Health Organization, and a permanent member of the UN Security Council.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/United_States"
            },
            "Q3071471": {
                "name": "Fido Solutions",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Canadian telecommunication company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3071471",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q30862": {
                "name": "311",
                "wikidata_aliases": "[]",
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q30862",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q309589": {
                "name": "Peter Cushing",
                "wikidata_aliases": "[\"Peter Wilton Cushing\"]",
                "wikidata_summary": "British actor (1913–1994)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q309589",
                "wikipedia_summary": "Peter Wilton Cushing  (26 May 1913 – 11 August 1994) was an English actor. His acting career spanned over six decades and included appearances in more than 100 films, as well as many television, stage and radio roles. He achieved recognition for his leading performances in the Hammer Productions horror films from the 1950s to 1970s, and as Grand Moff Tarkin in Star Wars (1977).\nBorn in Kenley, Surrey, Cushing made his stage debut in 1935 and spent three years at a repertory theatre before moving to Hollywood to pursue a film career. After making his motion picture debut in the film The Man in the Iron Mask (1939), Cushing began to find modest success in American films before returning to England at the outbreak of the Second World War. Despite performing in a string of roles, including one as Osric in Laurence Olivier's film adaptation of Hamlet (1948), Cushing struggled to find work during this period. His career was revitalised once he started to work in live television plays and he soon became one of the most recognisable faces in British television. He earned particular acclaim for his lead performance as Winston Smith in a BBC adaptation of George Orwell's Nineteen Eighty-Four (1954).\nCushing gained worldwide fame for his appearances in twenty-two horror films from the Hammer studio, particularly for his role as Baron Frankenstein in six of their seven Frankenstein films and Doctor Van Helsing in five Dracula films. Cushing often appeared alongside actor Christopher Lee, who became one of his closest friends, and occasionally with the American horror star Vincent Price. Cushing appeared in several other Hammer films, including The Abominable Snowman (1957), The Mummy and The Hound of the Baskervilles (both 1959), the last of which marked the first of the several occasions he portrayed the detective Sherlock Holmes. Cushing continued to perform in a variety of roles, although he was often typecast as a horror film actor. He played Dr. Who in Dr. Who and the Daleks (1965) and Daleks' Invasion Earth 2150 A.D. (1966) and became even better known through his part in the original Star Wars film. Cushing continued acting into the early to mid-1990s and wrote two autobiographies.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Peter_Cushing"
            },
            "Q3152967": {
                "name": "emotional insecurity",
                "wikidata_aliases": "[\"insecurity\"]",
                "wikidata_summary": "unease caused by seeing oneself as inferior or vulnerable",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3152967",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3153652": {
                "name": "Confined",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2010 television film",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3153652",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q318": {
                "name": "Galaxy",
                "wikidata_aliases": "[\"galaxies\"]",
                "wikidata_summary": "large gravitationally bound system of stars and interstellar matter",
                "wikidata_url": "https://www.wikidata.org/wiki/Q318",
                "wikipedia_summary": "A galaxy is a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity. The word is derived from the Greek galaxias (γαλαξίας), literally 'milky', a reference to the Milky Way galaxy that contains the Solar System. Galaxies, averaging an estimated 100 million stars, range in size from dwarfs with less than a thousand stars, to the largest galaxies known – supergiants with one hundred trillion stars, each orbiting its galaxy's center of mass. Most of the mass in a typical galaxy is in the form of dark matter, with only a few percent of that mass visible in the form of stars and nebulae. Supermassive black holes are a common feature at the centres of galaxies.\nGalaxies are categorized according to their visual morphology as elliptical, spiral, or irregular. Many are thought to have supermassive black holes at their centers. The Milky Way's central black hole, known as Sagittarius A*, has a mass four million times greater than the Sun.It is estimated that there are between 200 billion (2×1011) to 2 trillion galaxies in the observable universe. Most galaxies are 1,000 to 100,000 parsecs in diameter (approximately 3,000 to 300,000 light years) and are separated by distances on the order of millions of parsecs (or megaparsecs). For comparison, the Milky Way has a diameter of at least 26,800 parsecs (87,400 ly) and is separated from the Andromeda Galaxy (with diameter of about 152,000 ly), its nearest large neighbor, by 780,000 parsecs (2.5 million ly.)\nThe space between galaxies is filled with a tenuous gas (the intergalactic medium) with an average density of less than one atom per cubic meter. Most galaxies are gravitationally organized into groups, clusters and superclusters. The Milky Way is part of the Local Group, which it dominates along with the Andromeda Galaxy. The group is part of the Virgo Supercluster. At the largest scale, these associations are generally arranged into sheets and filaments surrounded by immense voids. Both the Local Group and the Virgo Supercluster are contained in a much larger cosmic structure named Laniakea.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Galaxy"
            },
            "Q3224307": {
                "name": "The Courtship of Princess Leia",
                "wikidata_aliases": "[]",
                "wikidata_summary": "1994 novel by Dave Wolverton",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3224307",
                "wikipedia_summary": "The Courtship of Princess Leia is a 1994 science fiction novel by American writer Dave Wolverton, part of the Star Wars franchise. It continued the streak of New York Times Bestsellers, which started with 1991's Heir to the Empire. The Courtship of Princess Leia is set in the Star Wars expanded universe, and deals with the downfall of Warlord Zsinj and the circumstances leading to the marriage of Han Solo and Princess Leia, characters that originated in the 1977 film Star Wars: A New Hope.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Courtship_of_Princess_Leia"
            },
            "Q32566": {
                "name": "computed tomography",
                "wikidata_aliases": "[\"X-ray computed tomography\",\"CT scan\",\"CAT scan\",\"CT\",\"CAT\",\"CT machine\",\"CT Machine\",\"tomography\",\"CT imaging\",\"X-Ray Computed\",\"Tomography, X-Ray Computed\",\"computerized tomography\",\"computed tomography scan\",\"computed axial tomography scan\",\"CT Scan Machine\"]",
                "wikidata_summary": "medical imaging procedure using X-rays to produce cross-sectional images",
                "wikidata_url": "https://www.wikidata.org/wiki/Q32566",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q33133727": {
                "name": "Hera Syndulla",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character from the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q33133727",
                "wikipedia_summary": "General Hera Syndulla is a fictional character in the Star Wars franchise, voiced by Vanessa Marshall in the animated series Star Wars Rebels, The Freemaker Adventures, Forces of Destiny, and The Bad Batch, and the video game Star Wars: Squadrons, and portrayed by Mary Elizabeth Winstead in the live-action miniseries Ahsoka. The Twi'lek daughter of Ryloth freedom fighter Cham Syndulla, and widowed lover of Jedi knight Kanan Jarrus/Caleb Dume, with whom she has a son, Jacen Syndulla, General Syndulla is an expert pilot and central figure in the formation of the Rebel Alliance in its fight against the Galactic Empire after leading a small rebel insurgency on the planet of Lothal that gained the attention of Senator Bail Organa.\nMarshall's portrayal of Hera Syndulla has received a universally positive critical reception.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hera_Syndulla"
            },
            "Q33271": {
                "name": "Đồng Nai",
                "wikidata_aliases": "[\"Dong Nai\"]",
                "wikidata_summary": "province of Vietnam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q33271",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q333886": {
                "name": "Georgetown University",
                "wikidata_aliases": "[\"Georgetown\",\"GU\",\"georgetown.edu\",\"University of Georgetown\",\"Georgetown Univ.\"]",
                "wikidata_summary": "private university in Washington, D.C., United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q333886",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q34316": {
                "name": "Doctor Who",
                "wikidata_aliases": "[\"Dr Who\",\"Dr. Who\"]",
                "wikidata_summary": "British science fiction TV series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q34316",
                "wikipedia_summary": "Doctor Who is a British science fiction television series broadcast by the BBC since 1963. The series, created by Sydney Newman, C. E. Webber and Donald Wilson, depicts the adventures of an extraterrestrial being called the Doctor, part of a humanoid species called Time Lords. The Doctor travels in the universe and in time using a time travelling spaceship called the TARDIS, which externally appears as a British police box. While travelling, the Doctor works to save lives and liberate oppressed peoples by combating foes. The Doctor often travels with companions.\nBeginning with William Hartnell, fourteen actors have headlined the series as the Doctor; as of 2023, Ncuti Gatwa leads the series as the Fifteenth Doctor. The transition from one actor to another is written into the plot of the series with the concept of regeneration into a new incarnation, a plot device in which, when a Time Lord is fatally injured, their cells regenerate and they are reincarnated. Each actor's portrayal is distinct, but all represent stages in the life of the same character and, together, they form a single lifetime with a single narrative. The time-travelling nature of the plot means that different incarnations of the Doctor occasionally meet. In 2017, Jodie Whittaker, as the Thirteenth Doctor, became the first woman to be cast in the lead role.\nThe series is a significant part of popular culture in Britain and elsewhere; it has gained a cult following. It has influenced generations of British television professionals, many of whom grew up watching the series. Fans of the series are sometimes referred to as Whovians. The series has been listed in Guinness World Records as the longest-running science-fiction television series in the world, as well as the 'most successful' science-fiction series of all time, based on its overall broadcast ratings, DVD and book sales.The series originally ran from 1963 to 1989. There was an unsuccessful attempt to revive regular production in 1996 with a backdoor pilot in the form of a television film titled Doctor Who. The series was relaunched in 2005 and was produced in-house by BBC Wales in Cardiff. Since 2023, the show has been co-produced by Bad Wolf and BBC Studios Productions in Cardiff. Doctor Who has also spawned numerous spin-offs, including comic books, films, novels and audio dramas, and the television series Torchwood (2006–2011), The Sarah Jane Adventures (2007–2011), K9 (2009–2010) and Class (2016). It has been the subject of many parodies and references in popular culture.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Doctor_Who"
            },
            "Q343568": {
                "name": "Action-adventure game",
                "wikidata_aliases": "[\"a-avg\",\"action adventure video games\"]",
                "wikidata_summary": "video game genre",
                "wikidata_url": "https://www.wikidata.org/wiki/Q343568",
                "wikipedia_summary": "An action-adventure game is a video game hybrid genre that combines core elements from both the action game and adventure game genres.\nTypically, classical adventure games have situational problems for the player to explore and solve to complete a storyline, involving very little to no action. If there is action, it is generally confined to isolated instances. Classical action games, on the other hand, have gameplay based on real-time interactions that challenges the player's reflexes and eye-hand coordination. Action-adventure games combine these genres by engaging both eye-hand coordination and problem-solving skills.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Action-adventure_game"
            },
            "Q34433": {
                "name": "University of Oxford",
                "wikidata_aliases": "[\"Oxford University\",\"Oxon.\",\"Oxf\",\"Universitas Oxoniensis\",\"Oxford\",\"Univ. of Oxford\"]",
                "wikidata_summary": "collegiate research university in Oxford, England",
                "wikidata_url": "https://www.wikidata.org/wiki/Q34433",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3482590": {
                "name": "Neutering",
                "wikidata_aliases": "[\"spaying\",\"castration\",\"de-sexing\",\"sterilization\",\"Neutering\"]",
                "wikidata_summary": "removal of an animal's reproductive organ",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3482590",
                "wikipedia_summary": "Neutering, from the Latin neuter ('of neither sex'), is the removal of a non-human animal's reproductive organ, either all of it or a considerably large part. The male-specific term is castration, while spaying is usually reserved for female animals. Colloquially, both terms are often referred to as fixing. In male horses, castrating is referred to as gelding. An animal that has not been neutered is sometimes referred to as entire or intact.\nNeutering is the most common method for animal sterilization. Humane societies, animal shelters, and rescue groups urge pet owners to have their pets neutered to prevent the births of unwanted litters, which contribute to the overpopulation of unwanted animals in the rescue system. Many countries require that all adopted cats and dogs be sterilized before going to their new homes.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Neutering"
            },
            "Q3482689": {
                "name": "Shutterstock",
                "wikidata_aliases": "[\"Shutter stock\"]",
                "wikidata_summary": "American stock photography, stock footage, stock music, and editing tools provider",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3482689",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3487014": {
                "name": "Smithsonian (magazine)",
                "wikidata_aliases": "[\"Smithsonian magazine\",\"smithsonianmag\"]",
                "wikidata_summary": "magazine",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3487014",
                "wikipedia_summary": "Smithsonian is a science and nature magazine (and associated website, SmithsonianMag.com), and is the official journal published by the Smithsonian Institution in Washington, D.C., although editorially independent from its parent organization. The first issue was published in 1970. The Smithsonian holds events such as the American Ingenuity Awards, Future Con, and Museum Day.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Smithsonian_(magazine)"
            },
            "Q349375": {
                "name": "Fortnite",
                "wikidata_aliases": "[\"FN\"]",
                "wikidata_summary": "2017 video game developed by Epic Games",
                "wikidata_url": "https://www.wikidata.org/wiki/Q349375",
                "wikipedia_summary": "Fortnite is an online video game and game platform developed by Epic Games and released in 2017. It is available in six distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas, Lego Fortnite, Rocket Racing and Fortnite Festival.\nSave the World and Battle Royale were released in 2017 as early access titles, while Creative was released on December 6, 2018.\nWhile the Save the World and Creative versions have been successful for Epic Games, Fortnite Battle Royale in particular became an overwhelming success and a cultural phenomenon, drawing more than 125 million players in less than a year, earning hundreds of millions of dollars per month. Fortnite as a whole generated $9 billion in gross revenue up until December 2019.\nSave the World is available for macOS, PlayStation 4, Windows, and Xbox One, while Battle Royale and Creative were released for all those platforms, and also for Android and iOS devices and Nintendo Switch. The game also launched with the release of the ninth-generation PlayStation 5 and Xbox Series X/S consoles. Furthermore, Lego Fortnite, Rocket Racing and Fortnite Festival are releasing on all available platforms.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Fortnite"
            },
            "Q35127": {
                "name": "Website",
                "wikidata_aliases": "[\"World Wide Web site\",\"web site\",\"site\",\"WWW site\",\"Internet site\"]",
                "wikidata_summary": "set of related web pages served from a single web domain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35127",
                "wikipedia_summary": "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce, entertainment, or social media. Hyperlinking between web pages guides the navigation of the site, which often starts with a home page. The most-visited sites are Google, YouTube, and Facebook.\nAll publicly-accessible websites collectively constitute the World Wide Web. There are also private websites that can only be accessed on a private network, such as a company's internal website for its employees. Users can access websites on a range of devices, including desktops, laptops, tablets, and smartphones. The app used on these devices is called a web browser.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Website"
            },
            "Q3529328": {
                "name": "Labored breathing",
                "wikidata_aliases": "[\"labored respiration\"]",
                "wikidata_summary": "abnormal respiration characterized by evidence of increased effort to breathe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3529328",
                "wikipedia_summary": "Labored respiration or labored breathing is an abnormal respiration characterized by evidence of increased effort to breathe, including the use of accessory muscles of respiration, stridor, grunting, or nasal flaring.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Labored_breathing"
            },
            "Q3563826": {
                "name": "Sharmeen Obaid-Chinoy",
                "wikidata_aliases": "[\"Sharmeen Obaid Chinoy\"]",
                "wikidata_summary": "Pakistani filmmaker and journalist (born 1978)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3563826",
                "wikipedia_summary": "Sharmeen Obaid-Chinoy (Urdu: شرمین عبید چنائے; born November 12, 1978) is a Canadian-Pakistani journalist, filmmaker and political activist known for her work in films that highlight gender inequality against women.\nObaid-Chinoy is slated to direct the next Star Wars film, due for release in 2026, and which will feature Daisy Ridley.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sharmeen_Obaid-Chinoy"
            },
            "Q3564777": {
                "name": "WPVI-TV",
                "wikidata_aliases": "[\"WPVI\",\"6abc.com\"]",
                "wikidata_summary": "ABC television station in Philadelphia, Pennsylvania, USA",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3564777",
                "wikipedia_summary": "WPVI-TV (channel 6), branded 6 ABC, is a television station in Philadelphia, Pennsylvania, United States, serving as the market's ABC outlet. Owned and operated by the network's ABC Owned Television Stations division, the station maintains studios on City Avenue in the Wynnefield Heights section of Philadelphia, and a transmitter in the city's Roxborough neighborhood.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/WPVI-TV"
            },
            "Q35684": {
                "name": "TARDIS",
                "wikidata_aliases": "[\"Time And Relative Dimension In Space\",\"Time And Relative Dimensions In Space\",\"Blue Box\",\"Time and Relative Dimension in Space\",\"Time and Relative Dimensions in Space\"]",
                "wikidata_summary": "fictional time-travelling device",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35684",
                "wikipedia_summary": "The TARDIS (; acronym for 'Time And Relative Dimension In Space') is a fictional hybrid of a time machine and spacecraft that appears in the British science fiction television series Doctor Who and its various spin-offs. While a TARDIS is capable of disguising itself, the exterior appearance of the Doctor's TARDIS typically mimics a police box, an obsolete type of telephone kiosk that was once commonly seen on streets in Britain in the 1950s. Paradoxically, its interior is shown as being much larger than its exterior, commonly described as being 'bigger on the inside'.\nDue to the significance of Doctor Who in popular British culture, the shape of the police box is now more strongly associated with the TARDIS than its real-world inspiration. The name and design of the TARDIS is a registered trademark of the British Broadcasting Corporation (BBC), although the design was originally created by the Metropolitan Police Service.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/TARDIS"
            },
            "Q35687320": {
                "name": "Visual Puzzles, Figure Weights, and Cancellation: Some Preliminary Hypotheses on the Functional and Neural Substrates of These Three New WAIS-IV Subtests",
                "wikidata_aliases": "[]",
                "wikidata_summary": "scientific article published on 23 August 2011",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35687320",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3570980": {
                "name": "Xie",
                "wikidata_aliases": "[\"Tse\",\"Chia\",\"Hsieh\",\"謝\",\"Dea\",\"Dear\",\"Dare\",\"Der\",\"Shieh\",\"Cheah\",\"Chay\",\"谢\",\"Zia\",\"Jair\",\"Shea\",\"Shei\"]",
                "wikidata_summary": "Chinese family name (謝 / 谢)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3570980",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q35831": {
                "name": "Sleep",
                "wikidata_aliases": "[\"sleeping\",\"rest\"]",
                "wikidata_summary": "naturally recurring resting state of mind and body",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35831",
                "wikipedia_summary": "Sleep is a state of reduced mental and physical activity in which consciousness is altered and certain sensory activity is inhibited. During sleep, there is a marked decrease in muscle activity and interactions with the surrounding environment. While sleep differs from wakefulness in terms of the ability to react to stimuli, it still involves active brain patterns, making it more reactive than a coma or disorders of consciousness.Sleep occurs in repeating periods, during which the body alternates between two distinct modes: REM and non-REM sleep. Although REM stands for 'rapid eye movement', this mode of sleep has many other aspects, including virtual paralysis of the body. Dreams are a succession of images, ideas, emotions, and sensations that usually occur involuntarily in the mind during certain stages of sleep.\nDuring sleep, most of the body's systems are in an anabolic state, helping to restore the immune, nervous, skeletal, and muscular systems; these are vital processes that maintain mood, memory, and cognitive function, and play a large role in the function of the endocrine and immune systems. The internal circadian clock promotes sleep daily at night. The diverse purposes and mechanisms of sleep are the subject of substantial ongoing research. Sleep is a highly conserved behavior across animal evolution, likely going back hundreds of millions of years.Humans may suffer from various sleep disorders, including dyssomnias such as insomnia, hypersomnia, narcolepsy, and sleep apnea; parasomnias such as sleepwalking and rapid eye movement sleep behavior disorder; bruxism; and circadian rhythm sleep disorders. The use of artificial light has substantially altered humanity's sleep patterns. Common sources of artificial light include outdoor lighting and the screens of electronic devices such as smartphones and televisions, which emit large amounts of blue light, a form of light typically associated with daytime. This disrupts the release of the hormone melatonin needed to regulate the sleep cycle.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sleep"
            },
            "Q360501": {
                "name": "Paul Young",
                "wikidata_aliases": "[\"Paul Anthony Young\",\"Paul Antony Young\"]",
                "wikidata_summary": "English musician",
                "wikidata_url": "https://www.wikidata.org/wiki/Q360501",
                "wikipedia_summary": "Paul Antony Young (born 17 January 1956) is an English musician, singer and songwriter. Formerly the frontman of the short-lived bands Kat Kool & the Kool Cats, Streetband and Q-Tips, he became a teen idol with his solo success in the 1980s. His hit singles include 'Love of the Common People', 'Wherever I Lay My Hat', 'Come Back and Stay', 'Every Time You Go Away' and 'Everything Must Change', all reaching the top 10 of the UK Singles Chart. Released in 1983, his debut album, No Parlez, was the first of three UK number-one albums.Young's smooth yet soulful voice belongs to a genre known as 'blue-eyed soul'. He won a Brit Award for Best British Male in 1985, and his hit 'Every Time You Go Away' reached number one on the Billboard Hot 100 and won Best British Video at the 1986 Brit Awards. Performing on the 1984 charity single 'Do They Know It's Christmas?' which included singing the opening lines, Young played Live Aid held at Wembley Stadium, London in July 1985. He sang the Crowded House track 'Don't Dream It's Over' at the Nelson Mandela 70th Birthday Tribute in 1988. In 1992, he sang 'Radio Ga Ga' with the surviving members of Queen at The Freddie Mercury Tribute Concert. Since the mid-1990s, Young has performed with the band Los Pacaminos.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Paul_Young"
            },
            "Q362": {
                "name": "World War II",
                "wikidata_aliases": "[\"WW2\",\"WWII\",\"WW 2\",\"WW II\",\"World War Two\",\"2nd World War\",\"World War 2\",\"the Second World War\",\"Second World War\",\"II World War\",\"World War 2, 1939-1945\"]",
                "wikidata_summary": "1939–1945 global conflict",
                "wikidata_url": "https://www.wikidata.org/wiki/Q362",
                "wikipedia_summary": "World War II or the Second World War was a global conflict that lasted from 1939 to 1945. The vast majority of the world's countries, including all the great powers, fought as part of two opposing military alliances: the Allies and the Axis. Many participating countries invested all available economic, industrial, and scientific capabilities into this total war, blurring the distinction between civilian and military resources. Aircraft played a major role, enabling the strategic bombing of population centres and delivery of the only two nuclear weapons ever used in war. It was by far the deadliest conflict in history, resulting in 70–85 million fatalities. Millions died due to genocides, including the Holocaust, as well as starvation, massacres, and disease. In the wake of Axis defeat, Germany, Austria, and Japan were occupied, and war crime tribunals were conducted against German and Japanese leaders.\nThe causes of the war are debated; contributing factors included the rise of fascism in Europe, the Spanish Civil War, the Second Sino-Japanese War, Soviet–Japanese border conflicts, and tensions in the aftermath of World War I. World War II is generally considered to have begun on 1 September 1939, when Nazi Germany, under Adolf Hitler, invaded Poland. The United Kingdom and France declared war on Germany on 3 September. Under the Molotov–Ribbentrop Pact of August 1939, Germany and the Soviet Union had partitioned Poland and marked out their 'spheres of influence' across Finland, Estonia, Latvia, Lithuania, and Romania. From late 1939 to early 1941, in a series of campaigns and treaties, Germany conquered or controlled much of continental Europe in a military alliance called the Axis with Italy, Japan, and other countries. Following the onset of campaigns in North and East Africa, and the fall of France in mid-1940, the war continued primarily between the European Axis powers and the British Empire, with the war in the Balkans, the aerial Battle of Britain, the Blitz of the UK, and the Battle of the Atlantic. In June 1941, Germany led the European Axis powers in an invasion of the Soviet Union, opening the Eastern Front, the largest land theatre of war in history.\nJapan aimed to dominate East Asia and the Asia-Pacific, and by 1937 was at war with the Republic of China. In December 1941, Japan attacked American and British territories with near-simultaneous offensives against Southeast Asia and the Central Pacific, including an attack on Pearl Harbor which resulted in the United States and the United Kingdom declaring war against Japan. The European Axis powers declared war on the US in solidarity. Japan soon conquered much of the western Pacific, but its advances were halted in 1942 after losing the critical Battle of Midway; Germany and Italy were defeated in North Africa and at Stalingrad in the Soviet Union. Key setbacks in 1943—including German defeats on the Eastern Front, the Allied invasions of Sicily and the Italian mainland, and Allied offensives in the Pacific—cost the Axis powers their initiative and forced them into strategic retreat on all fronts. In 1944, the Western Allies invaded German-occupied France, while the Soviet Union regained its territorial losses and pushed Germany and its allies back. During 1944–1945, Japan suffered reversals in mainland Asia, while the Allies crippled the Japanese Navy and captured key western Pacific islands. The war in Europe concluded with the liberation of German-occupied territories; the invasion of Germany by the Western Allies and the Soviet Union, culminating in the Fall of Berlin to Soviet troops; Hitler's suicide; and the German unconditional surrender on 8 May 1945. Following the refusal of Japan to surrender on the terms of the Potsdam Declaration, the US dropped the first atomic bombs on Hiroshima on 6 August and Nagasaki on 9 August. Faced with imminent invasion of the Japanese archipelago, the possibility of more atomic bombings, and the Soviet Union's declared entry into the war against Japan on the eve of invading Manchuria, Japan announced on 10 August its intention to surrender, signing a surrender document on 2 September 1945.\nWorld War II changed the political alignment and social structure of the world, and it set the foundation for the international order for the rest of the 20th century and into the 21st century. The United Nations was established to foster international cooperation and prevent conflicts, with the victorious great powers—China, France, the Soviet Union, the UK, and the US—becoming the permanent members of its Security Council. The Soviet Union and the United States emerged as rival superpowers, setting the stage for the Cold War. In the wake of European devastation, the influence of its great powers waned, triggering the decolonisation of Africa and Asia. Most countries whose industries had been damaged moved towards economic recovery and expansion.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/World_War_II"
            },
            "Q36348": {
                "name": "dream",
                "wikidata_aliases": "[\"dreaming\",\"dreams\"]",
                "wikidata_summary": "series of images, thoughts, and emotions, often with a story-like quality, generated by mental activity during sleep; the state in which this occurs",
                "wikidata_url": "https://www.wikidata.org/wiki/Q36348",
                "wikipedia_summary": "A dream is a succession of images, ideas, emotions, and sensations that usually occur involuntarily in the mind during certain stages of sleep. Humans spend about two hours dreaming per night, and each dream lasts around 5 to 20 minutes, although the dreamer may perceive the dream as being much longer than this.The content and function of dreams have been topics of scientific, philosophical and religious interest throughout recorded history. Dream interpretation, practiced by the Babylonians in the third millennium BCE and even earlier by the ancient Sumerians, figures prominently in religious texts in several traditions, and has played a lead role in psychotherapy. The scientific study of dreams is called oneirology. Most modern dream study focuses on the neurophysiology of dreams and on proposing and testing hypotheses regarding dream function. It is not known where in the brain dreams originate, if there is a single origin for dreams or if multiple regions of the brain are involved, or what the purpose of dreaming is for the body or mind.\nThe human dream experience and what to make of it has undergone sizable shifts over the course of history. Long ago, according to writings from Mesopotamia and Ancient Egypt, dreams dictated post-dream behaviors to an extent that was sharply reduced in later millennia. These ancient writings about dreams highlight visitation dreams, where a dream figure, usually a deity or a prominent forebear, commands the dreamer to take specific actions, and which may predict future events. Framing the dream experience varies across cultures as well as through time.\nDreaming and sleep are intertwined. Dreams occur mainly in the rapid-eye movement (REM) stage of sleep—when brain activity is high and resembles that of being awake. Because REM sleep is detectable in many species, and because research suggests that all mammals experience REM, linking dreams to REM sleep has led to conjectures that animals dream. However, humans dream during non-REM sleep, also, and not all REM awakenings elicit dream reports. To be studied, a dream must first be reduced to a verbal report, which is an account of the subject's memory of the dream, not the subject's dream experience itself. So, dreaming by non-humans is currently unprovable, as is dreaming by human fetuses and pre-verbal infants.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dream"
            },
            "Q36574036": {
                "name": "Influenza A(H5N1) virus surveillance at live poultry markets, Cambodia, 2011.",
                "wikidata_aliases": "[]",
                "wikidata_summary": "scientific article published on February 2013",
                "wikidata_url": "https://www.wikidata.org/wiki/Q36574036",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q372947": {
                "name": "Ray Stevenson",
                "wikidata_aliases": "[\"George Raymond Stevenson\",\"George Raymond \\\"Ray\\\" Stevenson\"]",
                "wikidata_summary": "Northern Irish actor (1964–2023)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q372947",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3744290": {
                "name": "instruction fetch",
                "wikidata_aliases": "[\"fetching\",\"instruction fetching\"]",
                "wikidata_summary": "step in the instruction cycle of a CPU",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3744290",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q375560": {
                "name": "fur farming",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Breeding or raising animals for their fur",
                "wikidata_url": "https://www.wikidata.org/wiki/Q375560",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q37792381": {
                "name": "David A. Coil",
                "wikidata_aliases": "[\"David Coil\",\"David A Coil\"]",
                "wikidata_summary": "microbiologist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q37792381",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q378450": {
                "name": "Sakamoto Ryōma",
                "wikidata_aliases": "[\"Sakamoto Ryouma\",\"Sakamoto Ryoma\",\"Saitani Umetarō\",\"Sakamoto Naonari\",\"Sakamoto Naokage\",\"Jinendō\"]",
                "wikidata_summary": "Japanese samurai and politician (1836–1867)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q378450",
                "wikipedia_summary": "Sakamoto Ryōma (坂本龍馬 or 坂本竜馬, 3 January 1836 – 10 December 1867) was a Japanese samurai, a shishi and influential figure of the Bakumatsu, and establishment of the Empire of Japan in the late Edo period.\nSakamoto was a low-ranking samurai from the Tosa Domain on Shikoku and became an active opponent of the Tokugawa Shogunate after the end of Japan's sakoku isolationist policy. Under the alias Saitani Umetarō (才谷梅太郎) he worked against the Bakufu, the government of the Tokugawa shogunate, and was often hunted by their supporters and the Shinsengumi. Sakamoto advocated for democracy, Japanese nationalism, return of power to the Imperial Court, abolition of feudalism, and moderate modernization and industrialization of Japan. Sakamoto successfully negotiated the Satchō Alliance between the powerful rival Chōshū and Satsuma domains and united them against the Bakufu. Sakamoto was assassinated in December 1867 with his companion Nakaoka Shintarō, shortly before the Boshin War and the Meiji Restoration.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sakamoto_Ry%C5%8Dma"
            },
            "Q38283": {
                "name": "Yokohama",
                "wikidata_aliases": "[]",
                "wikidata_summary": "designated city in Kanagawa prefecture, Japan",
                "wikidata_url": "https://www.wikidata.org/wiki/Q38283",
                "wikipedia_summary": "Yokohama (Japanese: 横浜, pronounced [jokohama] ) is the second-largest city in Japan by population and by area, and the country's most populous municipality. It is the capital city and the most populous city in Kanagawa Prefecture, with a 2020 population of 3.8 million. It lies on Tokyo Bay, south of Tokyo, in the Kantō region of the main island of Honshu. Yokohama is also the major economic, cultural, and commercial hub of the Greater Tokyo Area along the Keihin Industrial Zone.\nYokohama was one of the cities to open for trade with the West following the 1859 end of the policy of seclusion and has since been known as a cosmopolitan port city, after Kobe opened in 1853. Yokohama is the home of many Japan's firsts in the Meiji period, including the first foreign trading port and Chinatown (1859), European-style sport venues (1860s), English-language newspaper (1861), confectionery and beer manufacturing (1865), daily newspaper (1870), gas-powered street lamps (1870s), railway station (1872), and power plant (1882). Yokohama developed rapidly as Japan's prominent port city following the end of Japan's relative isolation in the mid-19th century and is today one of its major ports along with Kobe, Osaka, Nagoya, Fukuoka, Tokyo and Chiba.\nYokohama is the largest port city and high tech industrial hub in the Greater Tokyo Area and the Kantō region. The city proper is headquarters to companies such as Isuzu, Nissan, JVCKenwood, Keikyu, Koei Tecmo, Sotetsu, Salesforce Japan and Bank of Yokohama. Famous landmarks in Yokohama include Minato Mirai 21, Nippon Maru Memorial Park, Yokohama Chinatown, Motomachi Shopping Street, Yokohama Marine Tower, Yamashita Park, and Ōsanbashi Pier.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Yokohama"
            },
            "Q385494": {
                "name": "The Return",
                "wikidata_aliases": "[\"Return\",\"Vozvrashcheniye\",\"Vozvraschenie\"]",
                "wikidata_summary": "2003 film directed by Andrey Zvyagintsev",
                "wikidata_url": "https://www.wikidata.org/wiki/Q385494",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q385557": {
                "name": "Slaughterhouse",
                "wikidata_aliases": "[\"abattoir\",\"slaughterhouses\",\"abattoirs\",\"slaughter\",\"freezing works\"]",
                "wikidata_summary": "facility where animals are killed for consumption as food products",
                "wikidata_url": "https://www.wikidata.org/wiki/Q385557",
                "wikipedia_summary": "In livestock agriculture and the meat industry, a slaughterhouse, also called an abattoir ( ), is a facility where livestock animals are slaughtered to provide food. Slaughterhouses supply meat, which then becomes the responsibility of a meat-packing facility.\nSlaughterhouses that produce meat that is not intended for human consumption are sometimes referred to as knacker's yards or knackeries. This is where animals are slaughtered that are not fit for human consumption or that can no longer work on a farm, such as retired work horses.\nSlaughtering animals on a large scale poses significant issues in terms of logistics, animal welfare, and the environment, and the process must meet public health requirements. Due to public aversion in different cultures, determining where to build slaughterhouses is also a matter of some consideration.\nFrequently, animal rights groups raise concerns about the methods of transport to and from slaughterhouses, preparation prior to slaughter, animal herding, stunning methods, and the killing itself.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Slaughterhouse"
            },
            "Q388162": {
                "name": "Flea",
                "wikidata_aliases": "[\"fleas\",\"flea\",\"Aphaniptera\"]",
                "wikidata_summary": "order of insects",
                "wikidata_url": "https://www.wikidata.org/wiki/Q388162",
                "wikipedia_summary": "Flea, the common name for the order Siphonaptera, includes 2,500 species of small flightless insects that live as external parasites of mammals and birds. Fleas live by ingesting the blood of their hosts. Adult fleas grow to about 3 millimetres (1⁄8 inch) long, are usually brown, and have bodies that are 'flattened' sideways or narrow, enabling them to move through their hosts' fur or feathers. They lack wings; their hind legs are extremely well adapted for jumping. Their claws keep them from being dislodged, and their mouthparts are adapted for piercing skin and sucking blood. They can leap 50 times their body length, a feat second only to jumps made by another group of insects, the superfamily of froghoppers. Flea larvae are worm-like, with no limbs; they have chewing mouthparts and feed on organic debris left on their hosts' skin.\nGenetic evidence indicates that fleas are a specialised lineage of parasitic scorpionflies (Mecoptera) sensu lato, most closely related to the family Nannochoristidae. The earliest known fleas lived in the Middle Jurassic; modern-looking forms appeared in the Cenozoic. Fleas probably originated on mammals first and expanded their reach to birds. Each species of flea specializes, more or less, on one species of host: many species of flea never breed on any other host; some are less selective. Some families of fleas are exclusive to a single host group; for example, the Malacopsyllidae are found only on armadillos, the Ischnopsyllidae only on bats, and the Chimaeropsyllidae only on elephant shrews.\nThe oriental rat flea, Xenopsylla cheopis, is a vector of Yersinia pestis, the bacterium that causes bubonic plague. The disease was spread to humans by rodents, such as the black rat, which were bitten by infected fleas. Major outbreaks included the Plague of Justinian, about 540, and the Black Death, about 1350, each of which killed a sizeable fraction of the world's people.\nFleas appear in human culture in such diverse forms as flea circuses; poems, such as John Donne's erotic 'The Flea'; works of music, such as those by Modest Mussorgsky; and a film by Charlie Chaplin.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Flea"
            },
            "Q3884": {
                "name": "Amazon",
                "wikidata_aliases": "[\"Amazon.com, Inc.\",\"Amazon.Inc\"]",
                "wikidata_summary": "American multinational technology company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3884",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q39": {
                "name": "Switzerland",
                "wikidata_aliases": "[\"Swiss Confederation\",\"SUI\",\"Swiss\",\"CHE\",\"CH\",\"Confoederatio Helvetica\"]",
                "wikidata_summary": "country in Central Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q39",
                "wikipedia_summary": "Switzerland, officially the Swiss Confederation, is a landlocked country located in west-central Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east. Switzerland is geographically divided among the Swiss Plateau, the Alps and the Jura; the Alps occupy the greater part of the territory, whereas most of the country's population of 9 million are concentrated on the plateau, which hosts its largest cities and economic centres, including Zürich, Geneva and Basel.Switzerland originates from the Old Swiss Confederacy established in the Late Middle Ages, following a series of military successes against Austria and Burgundy; the Federal Charter of 1291 is considered the country's founding document. Swiss independence from the Holy Roman Empire was formally recognised in the Peace of Westphalia in 1648. Switzerland has maintained a policy of armed neutrality since the 16th century and has not fought an international war since 1815. It joined the United Nations only in 2002 but pursues an active foreign policy that includes frequent involvement in peace building.Switzerland is the birthplace of the Red Cross and hosts the headquarters or offices of most major international institutions, including the WTO, the WHO, the ILO, FIFA, and the United Nations. It is a founding member of the European Free Trade Association (EFTA), but not part of the European Union (EU), the European Economic Area, or the eurozone; however, it participates in the European single market and the Schengen Area. Switzerland is a federal republic composed of 26 cantons, with federal authorities based in Bern.Switzerland is one of the world's most developed countries, with the highest nominal wealth per adult and the eighth-highest gross domestic product (GDP) per capita. Switzerland ranks first in the Human Development Index since 2021 and performs highly also on several international metrics, including economic competitiveness and democratic governance. Cities such as Zürich, Geneva and Basel rank among the highest in terms of quality of life, albeit with some of the highest costs of living.It has four main linguistic and cultural regions: German, French, Italian and Romansh. Although most Swiss are German-speaking, national identity is fairly cohesive, being rooted in a common historical background, shared values such as federalism and direct democracy, and Alpine symbolism. Swiss identity transcends language, ethnicity, and religion, leading to Switzerland being described as a Willensnation ('nation of volition') rather than a nation state. Due to its linguistic diversity, Switzerland is known by multiple native names: Schweiz [ˈʃvaɪts] (German); Suisse [sɥis(ə)]  (French); Svizzera [ˈzvittsera] (Italian); and Svizra [ˈʒviːtsrɐ, ˈʒviːtsʁɐ] (Romansh). On coins and stamps, the Latin name, Confoederatio Helvetica—frequently shortened to 'Helvetia'—is used instead of the spoken languages.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Switzerland"
            },
            "Q39018": {
                "name": "Emperor",
                "wikidata_aliases": "[\"empress\",\"imperator\"]",
                "wikidata_summary": "type of monarch",
                "wikidata_url": "https://www.wikidata.org/wiki/Q39018",
                "wikipedia_summary": "The word emperor (from Latin: imperator, via Old French: empereor) can mean the male ruler of an empire. Empress, the female equivalent, may indicate an emperor's wife (empress consort), mother/grandmother (empress dowager/grand empress dowager), or a woman who rules in her own right and name (empress regnant or suo jure). Emperors are generally recognized to be of the highest monarchic honour and rank, surpassing kings. In Europe, the title of Emperor has been used since the Middle Ages, considered in those times equal or almost equal in dignity to that of Pope due to the latter's position as visible head of the Church and spiritual leader of the Catholic part of Western Europe. The emperor of Japan is the only currently reigning monarch whose title is translated into English as 'Emperor'.Both emperors and kings are monarchs or sovereigns, both emperor and empress are considered monarchical titles. In as much as there is a strict definition of emperor, it is that an emperor has no relations implying the superiority of any other ruler and typically rules over more than one nation. Therefore, a king might be obliged to pay tribute to another ruler, or be restrained in his actions in some unequal fashion, but an emperor should in theory be completely free of such restraints. However, monarchs heading empires have not always used the title in all contexts—the British sovereign did not assume the title Empress of the British Empire even during the incorporation of India, though she was declared Empress of India.\nIn Western Europe, the title of Emperor was used exclusively by the Holy Roman Emperor, whose imperial authority was derived from the concept of translatio imperii, i.e., they claimed succession to the authority of the Roman emperors, thus linking themselves to Roman institutions and traditions as part of state ideology. Although initially ruling much of Central Europe and northern Italy, by the 19th century, the emperor exercised little power beyond the German-speaking states.\nAlthough technically an elective title, by the late 16th century, the imperial title had in practice come to be inherited by the Habsburg Archdukes of Austria and, following the Thirty Years' War, their control over the states (outside the Habsburg monarchy, i.e. Austria, Bohemia and various territories outside the empire) had become nearly non-existent. However, Napoleon Bonaparte was crowned Emperor of the French in 1804 and was shortly followed by Francis II, Holy Roman Emperor, who declared himself Emperor of Austria in the same year. The position of Holy Roman Emperor nonetheless continued until Francis II abdicated that position in 1806. In Eastern Europe, the monarchs of Russia also used translatio imperii to wield imperial authority as successors to the Eastern Roman Empire. Their status was officially recognized by the Holy Roman Emperor in 1514, although not officially used by the Russian monarchs until 1547. However, the Russian emperors are better known by their Russian-language title of Tsar even after Peter the Great adopted the title of Emperor of All Russia in 1721.\nHistorians have liberally used 'emperor' and 'empire' anachronistically and out of its Roman and European context to describe any large state from the past or the present. Such pre-Roman titles as Great King or King of Kings, used by the kings of Persia and others, are often considered as the equivalent. Sometimes this reference has even extended to non-monarchically ruled states and their spheres of influence, such as the Athenian Empire of the late 5th century BC, the Angevin Empire of the Plantagenets and the Soviet and American 'empires' of the Cold War era. However, such 'empires' did not need to be headed by an 'emperor'. 'Empire' became identified instead with vast territorial holdings rather than the title of its ruler by the mid-18th century.\nFor purposes of protocol, the size and scope of a kingdom or empire may determine precedence in international diplomatic relations, but currently, precedence among heads of state who are sovereigns—whether they be kings, queens, emperors, empresses, princes, princesses and presidents may be determined by the size and scope or time that each one has been continuously in office. Outside the European context, 'emperor' was the translation given to holders of titles who were accorded the same precedence as European emperors in diplomatic terms. In reciprocity, these rulers might accredit equal titles in their native languages to their European peers. Through centuries of international convention, this has become the dominant rule to identifying an emperor in the modern era.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Emperor"
            },
            "Q39231": {
                "name": "Mount Fuji",
                "wikidata_aliases": "[\"Mt Fuji\",\"Fuji Mountain\",\"Fuji-san\",\"Mt. Fuji\",\"Fujisan\",\"Fuji-yama\",\"Fujiyama\",\"🗻\"]",
                "wikidata_summary": "volcano in Yamanashi and Shizuoka Prefectures, Japan",
                "wikidata_url": "https://www.wikidata.org/wiki/Q39231",
                "wikipedia_summary": "Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] ) is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the tallest mountain in Japan, the second-highest volcano located on an island in Asia (after Mount Kerinci on the Indonesian island of Sumatra), and seventh-highest peak of an island on Earth. Mount Fuji last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from the Japanese capital on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and is frequently depicted in art and photography, as well as visited by sightseers, hikers and mountain climbers.Mount Fuji is one of Japan's 'Three Holy Mountains' (三霊山, Sanreizan) along with Mount Tate and Mount Haku. It is a Special Place of Scenic Beauty and one of Japan's Historic Sites. It was added to the World Heritage List as a Cultural Site on June 22, 2013. According to UNESCO, Mount Fuji has 'inspired artists and poets and been the object of pilgrimage for centuries'. UNESCO recognizes 25 sites of cultural interest within the Mount Fuji locality. These 25 locations include the mountain and the Shinto shrine, Fujisan Hongū Sengen Taisha.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mount_Fuji"
            },
            "Q3957": {
                "name": "town",
                "wikidata_aliases": "[\"small city\"]",
                "wikidata_summary": "settlement that is smaller than a city but bigger than a large village (or a large borough in some areas)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3957",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q4032": {
                "name": "Claude Bernard University Lyon 1",
                "wikidata_aliases": "[\"Université Lyon 1\",\"UCBL\",\"Université Claude Bernard Lyon 1\",\"univ-lyon1.fr\"]",
                "wikidata_summary": "public university of Lyon, France since 1970",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4032",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q406": {
                "name": "Istanbul",
                "wikidata_aliases": "[\"Constantinople\",\"Scarlet Apple\"]",
                "wikidata_summary": "city in Turkey located at the Bosporus Strait",
                "wikidata_url": "https://www.wikidata.org/wiki/Q406",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q408": {
                "name": "Australia",
                "wikidata_aliases": "[\"Commonwealth of Australia\",\"AU\",\"AUS\",\"au\",\"🇦🇺\",\"Straya\",\"Aussieland\",\"Oz\",\"Stralia\",\"New Holland\",\"New Hollandia\",\"Nova Hollandia\",\"Down Under\",\"Stria\"]",
                "wikidata_summary": "country in Oceania",
                "wikidata_url": "https://www.wikidata.org/wiki/Q408",
                "wikipedia_summary": "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest, flattest, and driest inhabited continent, with the least fertile soils. It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, tropical savannas in the north, and mountain ranges in the south-east.\nThe ancestors of Aboriginal Australians began arriving from south-east Asia 50,000 to 65,000 years ago, during the last glacial period. They settled the continent and had formed approximately 250 distinct language groups by the time of European settlement, maintaining some of the longest known continuing artistic and religious traditions in the world. Australia's written history commenced with European maritime exploration. The Dutch were the first known Europeans to reach Australia, in 1606. British colonisation began in 1788 with the establishment of the penal colony of New South Wales. By the mid-19th century, most of the continent had been explored by European settlers and five additional self-governing British colonies were established, each gaining responsible government by 1890. The colonies federated in 1901, forming the Commonwealth of Australia. This continued a process of increasing autonomy from the United Kingdom, highlighted by the Statute of Westminster Adoption Act 1942, and culminating in the Australia Acts of 1986.Australia is a federal parliamentary constitutional monarchy comprising six states and ten territories: the states of New South Wales, Victoria, Queensland, Tasmania, South Australia and Western Australia; the major mainland Australian Capital Territory and Northern Territory; and other minor or external territories. Its population of nearly 27 million is highly urbanised and heavily concentrated on the eastern seaboard. Canberra is the nation's capital, while its most populous cities are Sydney, Melbourne, Brisbane, Perth and Adelaide. Australian governments have promoted multiculturalism since the 1970s. Australia is culturally diverse and has one of the highest foreign-born populations in the world. Its abundant natural resources and well-developed international trade relations are crucial to the country's economy, which generates its income from various sources: predominantly services (including banking, real estate and international education) as well as mining, manufacturing and agriculture. It ranks highly for quality of life, health, education, economic freedom, civil liberties and political rights.Australia has a highly developed market economy and one of the highest per capita incomes globally. It is a middle power, and has the world's thirteenth-highest military expenditure. It is a member of international groups including the United Nations; the G20; the OECD; the World Trade Organization; Asia-Pacific Economic Cooperation; the Pacific Islands Forum; the Pacific Community; the Commonwealth of Nations; and the defence and security organisations ANZUS, AUKUS, and the Five Eyes. It is also a major non-NATO ally of the United States.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Australia"
            },
            "Q4112660": {
                "name": "Wish list",
                "wikidata_aliases": "[\"wishlist\",\"wantlist\"]",
                "wikidata_summary": "list of wishes of an individual or organization",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4112660",
                "wikipedia_summary": "A wish list, wishlist or want list is a list of goods or services that a person or organization desires. The author may distribute copies of their list to family, friends, and other stakeholders who are likely to purchase gifts for the would-be recipient or to offer some of the listed items for sale. The goal of a wish list is to facilitate communication between the gift receiver and the gift giver. Wish lists often contain items that a gift purchaser can obtain from a variety of retailers.  Some wish lists are specialized for particular purposes or concentrated at individual retailers, such as gift registries (e.g., bridal registries).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wish_list"
            },
            "Q41298": {
                "name": "magazine",
                "wikidata_aliases": "[\"glossy\",\"serial\",\"quarterly\",\"journal\",\"Magazines\"]",
                "wikidata_summary": "publication that is typically distributed at a regular interval",
                "wikidata_url": "https://www.wikidata.org/wiki/Q41298",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q4167836": {
                "name": "Cat",
                "wikidata_aliases": "[\"project category\",\"Project:Categorization\",\"Project:Category\",\"category page\",\"Wikimedia category page\",\"Wikipedia category\",\"wmcat\",\"category\",\"cat\",\"p31cat\",\"catp31\",\"category (Wikimedia)\",\"WM category\",\"Wikinews:Categories\",\"Categories\",\"wiki cat\"]",
                "wikidata_summary": "use with 'instance of' (P31) for Wikimedia category",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4167836",
                "wikipedia_summary": "The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Its retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It also secretes and perceives pheromones.\nFemale domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Animal population control of cats may be achieved by spaying and neutering, but their proliferation and the abandonment of pets has resulted in large numbers of feral cats worldwide, contributing to the extinction of bird, mammal and reptile species.\nAs of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated 220 million owned and 480 million stray cats in the world.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cat"
            },
            "Q42005": {
                "name": "Black Death",
                "wikidata_aliases": "[\"Great Plague\",\"Great Mortality\",\"plague\",\"Bubonic Plague\",\"Great Pestilence\"]",
                "wikidata_summary": "1346–1353 pandemic in Eurasia and North Africa",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42005",
                "wikipedia_summary": "The Black Death was a bubonic plague pandemic occurring in Europe from 1346 to 1353. One of the most fatal pandemics in human history, as many as 50 million people perished, perhaps 50% of Europe's 14th century population.  Bubonic plague is caused by the bacterium Yersinia pestis and spread by fleas. One of the most significant events in European history, the Black Death had far-reaching population, economic, and cultural impacts.\nThe Black Death was the beginning of the second plague pandemic. The plague created religious, social and economic upheavals, with profound effects on the course of European history.\nThe origin of the Black Death is disputed. Genetic analysis points to the evolution of Yersinia pestis in the Tian Shan mountains on the border between Kyrgyzstan and China 2,600 years ago. The immediate territorial origins of the Black Death and its outbreak remain unclear, with some evidence pointing towards Central Asia, China, the Middle East, and Europe. The pandemic was reportedly first introduced to Europe during the siege of the Genoese trading port of Kaffa in Crimea by the Golden Horde army of Jani Beg in 1347. From Crimea, it was most likely carried by fleas living on the black rats that travelled on Genoese ships, spreading through the Mediterranean Basin and reaching North Africa, Western Asia, and the rest of Europe via Constantinople, Sicily, and the Italian Peninsula. There is evidence that once it came ashore, the Black Death mainly spread from person-to-person as pneumonic plague, thus explaining the quick inland spread of the epidemic, which was faster than would be expected if the primary vector was rat fleas causing bubonic plague. In 2022, it was discovered that there was a sudden surge of deaths in what is today Kyrgyzstan from the Black Death in the late 1330s; when combined with genetic evidence, this implies that the initial spread may not have been due to Mongol conquests in the 14th century, as previously speculated.The Black Death was the second great natural disaster to strike Europe during the Late Middle Ages (the first one being the Great Famine of 1315–1317) and is estimated to have killed 30% to 60% of the European population, as well as approximately 33% of the population of the Middle East. There were further outbreaks throughout the Late Middle Ages and, also due to other contributing factors (the Crisis of the Late Middle Ages), the European population did not regain its 14th century level until the 16th century. Outbreaks of the plague recurred around the world until the early 19th century.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Black_Death"
            },
            "Q420292": {
                "name": "Assassin's Creed",
                "wikidata_aliases": "[\"AC\"]",
                "wikidata_summary": "video game series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q420292",
                "wikipedia_summary": "Assassin's Creed is a historical action-adventure video game series and media franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives. Created by Patrice Désilets, Jade Raymond, and Corey May, the Assassin's Creed video game series depicts a fictional millennia-old struggle between the Order of Assassins, who fight for peace and free will, and the Knights Templar, who desire peace through order and control. The series features historical fiction, science fiction, and fictional characters intertwined with real-world historical events and historical figures. In most games, players control a historical Assassin while also playing as an Assassin Initiate or someone caught in the Assassin–Templar conflict in the present-day framing story. Considered a spiritual successor to the Prince of Persia series, Assassin's Creed took inspiration from the novel Alamut by the Slovenian writer Vladimir Bartol, based on the historical Hashashin sect of the medieval Middle East.\nThe first Assassin's Creed game was released in 2007, and the series has featured thirteen main installments in total, the most recent being Assassin's Creed Mirage in 2023. Main games in the Assassin's Creed series are set in an open world and played from the third-person view. Gameplay revolves around combat, stealth, and exploration, including the use of parkour to navigate the environment. The games feature both main and side missions, and some titles also include competitive and cooperative multiplayer game modes.\nA new story and occasionally new time periods are introduced in each entry, with the gameplay elements also evolving. There are three overarching story arcs in the series. The first five main games follow Desmond Miles, a descendant of several important Assassins throughout history, who uses a machine called the Animus to relive his ancestors' memories and find powerful artifacts called Pieces of Eden in an attempt to prevent a catastrophic event, referencing the 2012 phenomenon. From Assassin's Creed IV: Black Flag to Assassin's Creed Syndicate, Assassin initiates and employees of Abstergo (a company used as a front by the modern-day Templars) record genetic memories using the Helix software, helping the Templars and Assassins find new Pieces of Eden in the modern world. The next three games, Assassin's Creed Origins, Odyssey, and Valhalla, follow ex-Abstergo employee Layla Hassan on her own quest to save humanity from another disaster.\nThe main games in the Assassin's Creed franchise have received generally positive reviews for their ambition in visuals, game design, and narratives, with criticism for the yearly release cycle and frequent bugs, as well as the prioritising of role-playing mechanics in later titles. The series has received multiple awards and nominations, including multiple Game of the Year awards. It is commercially successful, selling over 200 million copies as of September 2022, becoming Ubisoft's best-selling franchise and one of the highest selling video game franchises of all time. While main titles are produced for major consoles and desktop platforms, multiple spin-off games have been released for consoles, mobiles, and handheld platforms. A series of art books, encyclopedias, comics, and novels have also been published. A live-action film adaptation of the series, titled Assassin's Creed, was released in 2016.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Assassin%27s_Creed"
            },
            "Q420421": {
                "name": "acolyte",
                "wikidata_aliases": "[]",
                "wikidata_summary": "profession",
                "wikidata_url": "https://www.wikidata.org/wiki/Q420421",
                "wikipedia_summary": "An acolyte is an assistant or follower assisting the celebrant in a religious service or procession. In many Christian denominations, an acolyte is anyone performing ceremonial duties such as lighting altar candles. In others, the term is used for one who has been inducted into a particular liturgical ministry, even when not performing those duties.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Acolyte"
            },
            "Q42080": {
                "name": "Gimpo",
                "wikidata_aliases": "[\"Kimpo\"]",
                "wikidata_summary": "city in Gyeonggi Province, South Korea",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42080",
                "wikipedia_summary": "Gimpo (Korean pronunciation: [ˈkim.pʰo]) is a city in Gyeonggi Province, South Korea. It borders Incheon, with which it shares the South Korean side of the Han River estuary, as well as Seoul and the lesser cities of Paju and Goyang. North Korea is across the Han River. The current mayor is Jeong Hayoung (정하영). The city's population of more than 300,000 is made up of more than 71,000 households.\nGimpo International Airport (formerly Kimpo International Airport) used to be located inside the city, but is now part of Seoul. Tertiary educational institutions located in the city include Kimpo College and Joong-ang Seungga University. The city has 27 elementary schools, 12 middle schools, and 8 high schools, including Gimpo Foreign Language High School. Three elementary schools, two middle schools, and two high schools are located in the area of Tongjin.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Gimpo"
            },
            "Q42627": {
                "name": "Bengal cat",
                "wikidata_aliases": "[\"Prionailurus bengalensis\",\"Bengal cat\"]",
                "wikidata_summary": "species of mammal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42627",
                "wikipedia_summary": "The Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat (Prionailurus bengalensis), with domestic cats, especially the spotted Egyptian Mau. It is then usually bred with a breed that demonstrates a friendlier personality, because after breeding a domesticated cat with a wildcat, its friendly personality may not manifest in the kitten. The breed's name derives from the leopard cat's taxonomic name.\nBengals have a wild appearance; their golden shimmer comes from their leopard cat ancestry, and their coats may show spots, rosettes, arrowhead markings, or marbling. They are an energetic breed that needs much exercise and play.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_cat"
            },
            "Q42702746": {
                "name": "David Leavens",
                "wikidata_aliases": "[]",
                "wikidata_summary": "researcher",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42702746",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q427730": {
                "name": "85",
                "wikidata_aliases": "[\"eighty five\",\"eighty-five\"]",
                "wikidata_summary": "natural number",
                "wikidata_url": "https://www.wikidata.org/wiki/Q427730",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q43": {
                "name": "Turkey",
                "wikidata_aliases": "[\"TR\",\"TUR\",\"Republic of Türkiye\",\"Türkiye\",\"Turkiye\",\"Republic of Turkey\"]",
                "wikidata_summary": "country straddling Southeast Europe and West Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q43",
                "wikipedia_summary": "Turkey, officially the Republic of Türkiye, is a country mainly in Anatolia in West Asia, with a smaller part called East Thrace in Southeast Europe. It borders the Black Sea to the north; Georgia, Armenia, Azerbaijan, and Iran to the east; Iraq, Syria, and the Mediterranean Sea (and Cyprus) to the south; and the Aegean Sea, Greece, and Bulgaria to the west. Turkey is home to over 85 million people; most are ethnic Turks, while ethnic Kurds are the largest ethnic minority. Officially a secular state, Turkey has a Muslim-majority population. Ankara is Turkey's capital and second-largest city; Istanbul is its largest city, and its economic and financial center, as well as the largest city in Europe. Other major cities include İzmir, Bursa, Antalya, Konya and Adana.\nHuman habitation began in Late Paleolithic. Home to important Neolithic sites like Göbekli Tepe and some of the earliest farming areas, present-day Turkey was inhabited by various ancient peoples. Hattians were assimilated by the incoming Anatolian peoples. Increasing diversity during Classical Anatolia transitioned into cultural Hellenization following the conquests of Alexander the Great; Hellenization continued during the Roman and Byzantine eras. The Seljuk Turks began migrating into Anatolia in the 11th century, starting the Turkification process. The Seljuk Sultanate of Rum ruled Anatolia until the Mongol invasion in 1243, when it disintegrated into Turkish principalities. Beginning in 1299, the Ottomans united the principalities and expanded; Mehmed II conquered Istanbul in 1453. During the reigns of Selim I and Suleiman the Magnificent, the Ottoman Empire became a global power.From the late 18th century onwards, the empire's power and territory declined; reforms were also made. In the 19th and early 20th centuries, persecution of Muslims during the Ottoman contraction and in the Russian Empire resulted in large-scale loss of life and mass migration into modern-day Turkey from the Balkans, Caucasus, and Crimea. The Second Constitutional Era ended with the 1913 coup d'état. Under the control of Three Pashas, the Ottoman Empire entered World War I in 1914. During the war, the Ottoman government committed genocides against its Armenian, Greek and Assyrian subjects. After its defeat, the Ottoman Empire was partitioned. The Turkish War of Independence resulted in the abolition of the sultanate in 1922 and the signing of the Treaty of Lausanne in 1923. The Republic was proclaimed on 29 October 1923, modelled on the reforms initiated by the country's first president, Mustafa Kemal Atatürk.\nTurkey is an upper-middle-income and emerging country; its economy is the 17th- or 11th-largest in the world. It is a unitary presidential republic with a multi-party system. Turkey is a founding member of the OECD, G20, and Organization of Turkic States. With a geopolitically significant location, Turkey is a regional power and an early member of NATO. An EU-candidate, Turkey is part of the EU Customs Union, CoE, OIC, and TURKSOY. Turkey has coastal plains, a high central plateau, and various mountain ranges; its climate is temperate with harsher conditions in the interior. Home to three biodiversity hotspots, Turkey is prone to frequent earthquakes and is highly vulnerable to climate change. Turkey has universal healthcare, growing access to education, and increasing innovativeness. It has 21 UNESCO World Heritage sites, 30 UNESCO cultural heritage inscriptions, and a rich and diverse cuisine. Turkey is a leading TV content exporter and is the fourth most visited country in the world.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Turkey"
            },
            "Q43175": {
                "name": "flag of Japan",
                "wikidata_aliases": "[\"Nisshōki\",\"Hinomaru\",\"🇯🇵\",\"Japanese flag\",\"Japan flag\"]",
                "wikidata_summary": "national flag",
                "wikidata_url": "https://www.wikidata.org/wiki/Q43175",
                "wikipedia_summary": "The national flag of Japan is a rectangular white banner bearing a crimson-red circle at its center. This flag is officially called the Nisshōki (日章旗, 'flag of the sun'), but is more commonly known in Japan as the Hinomaru (日の丸, 'Ball of the sun'). It embodies the country's sobriquet: the Land of the Rising Sun.\nThe Nisshoki flag is designated as the national flag in the Act on National Flag and Anthem, which was promulgated and became effective on 13 August 1999. Although no earlier legislation had specified a national flag, the sun-disc flag had already become the de facto national flag of Japan. Two proclamations issued in 1870 by the Daijō-kan, the governmental body of the early Meiji period, each had a provision for a design of the national flag. A sun-disc flag was adopted as the national flag for merchant ships under Proclamation No. 57 of Meiji 3 (issued on 27 February 1870), and as the national flag used by the Navy under Proclamation No. 651 of Meiji 3 (issued on 27 October 1870). Use of the Hinomaru was severely restricted during the early years of the Allied occupation of Japan after World War II; these restrictions were later relaxed.\nThe sun plays an important role in Japanese mythology and religion, as the Emperor is said to be the direct descendant of the Shinto sun goddess Amaterasu, and the legitimacy of the ruling house rested on this divine appointment. The name of the country as well as the design of the flag reflect this central importance of the sun. The ancient history Shoku Nihongi says that Emperor Monmu used a flag representing the sun in his court in 701, the first recorded use of a sun-motif flag in Japan. The oldest existing flag is preserved in Unpō-ji temple, Kōshū, Yamanashi, which is older than the 16th century, and an ancient legend says that the flag was given to the temple by Emperor Go-Reizei in the 11th century.  During the Meiji Restoration, the sun disc and the Rising Sun Ensign of the Imperial Japanese Navy and Army became major symbols in the emerging Japanese Empire. Propaganda posters, textbooks, and films depicted the flag as a source of pride and patriotism. In Japanese homes, citizens were required to display the flag during national holidays, celebrations and other occasions as decreed by the government. Different tokens of devotion to Japan and its Emperor featuring the Hinomaru motif became popular among the public during the Second Sino-Japanese War and other conflicts. These tokens ranged from slogans written on the flag to clothing items and dishes that resembled the flag.\nPublic perception of the national flag varies. Historically, both Western and Japanese sources claimed the flag was a powerful and enduring symbol to the Japanese. Since the end of World War II (the Pacific War), the use of the flag and the national anthem Kimigayo has been a contentious issue for Japan's public schools, and disputes about their use have led to protests and lawsuits. Several military banners of Japan are based on the Hinomaru, including the sunrayed naval ensign. The Hinomaru also serves as a template for other Japanese flags in public and private use.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Flag_of_Japan"
            },
            "Q434029": {
                "name": "Timothy Zahn",
                "wikidata_aliases": "[]",
                "wikidata_summary": "science fiction novelist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q434029",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q438964": {
                "name": "Age verification system",
                "wikidata_aliases": "[\"age gate\"]",
                "wikidata_summary": "measure used to restrict access to digital content by age",
                "wikidata_url": "https://www.wikidata.org/wiki/Q438964",
                "wikipedia_summary": "An age verification system, also known as an age gate, is any technical system that externally verifies a person's age. These systems are used primarily to restrict access to content classified, either voluntarily or by local laws, as being inappropriate for users under a specific age, such as alcohol, tobacco, gambling, video games with objectionable content, pornography, or to remain in compliance with online privacy laws that regulate the collection of personal information from minors, such as COPPA in the United States.Age verification substantially increased in 2023-2024, with the passage of the U.K. Online Safety Act, a law in France, laws in eight  U.S. states including Texas and Utah, and proposals at the federal level in the US, Canada, Denmark, and the EU.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Age_verification_system"
            },
            "Q43987": {
                "name": "Avian influenza",
                "wikidata_aliases": "[\"HPAI\",\"avian flu\",\"bird flu\",\"influenza in birds\"]",
                "wikidata_summary": "influenza caused by viruses adapted to birds",
                "wikidata_url": "https://www.wikidata.org/wiki/Q43987",
                "wikipedia_summary": "Avian influenza, also known as avian flu, is a bird flu caused by the influenza A virus, which can infect people.  It is similar to other types of animal flu in that it is caused by a virus strain that has adapted to a specific host. The type with the greatest risk is highly pathogenic avian influenza (HPAI).\nThough influenza A is adapted to birds, it can also stably adapt and sustain person-to-person transmission. Recent influenza research into the genes of the Spanish flu virus shows it to have genes adapted from both human and avian strains. Pigs can also be infected with human, avian, and swine influenza viruses, allowing for mixtures of genes (reassortment) to create a new virus, which can cause an antigenic shift to a new influenza A virus subtype which most people have little to no immune protection against.Avian influenza strains are divided into two types based on their pathogenicity: high pathogenicity (HP) or low pathogenicity (LP). The most well-known HPAI strain, H5N1, was first isolated from a farmed goose in Guangdong Province, China in 1996, and also has low pathogenic strains found in North America. Companion birds in captivity are unlikely to contract the virus and there has been no report of a companion bird with avian influenza since 2003. Pigeons can contract avian strains, but rarely become ill and are incapable of transmitting the virus efficiently to humans or other animals.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Avian_influenza"
            },
            "Q46": {
                "name": "Europe",
                "wikidata_aliases": "[\"European continent\",\"Old Continent\"]",
                "wikidata_summary": "continent",
                "wikidata_url": "https://www.wikidata.org/wiki/Q46",
                "wikipedia_summary": "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east. Europe shares the landmass of Eurasia with Asia, and of Afro-Eurasia with both Asia and Africa. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea, and the waterway of the Bosporus Strait.Europe covers about 10.18 million km2 (3.93 million sq mi), or 2% of Earth's surface (6.8% of land area), making it the second-smallest continent (using the seven-continent model). Politically, Europe is divided into about fifty sovereign states, of which Russia is the largest and most populous, spanning 39% of the continent and comprising 15% of its population. Europe had a total population of about 745 million (about 10% of the world population) in 2021; the third-largest after Asia and Africa. The European climate is affected by warm Atlantic currents, such as the Gulf Stream, which produce a temperate climate, tempering winters and summers, on much of the continent. Further from the sea, seasonal differences are more noticeable producing more continental climates.\nEuropean culture consists of a range of national and regional cultures, which form the central roots of the wider Western civilisation, and together commonly reference ancient Greece and ancient Rome, particularly through their Christian successors, as crucial and shared roots. Beginning with the fall of the Western Roman Empire in 476 CE, Christian consolidation of Europe in the wake of the Migration Period marked the European post-classical Middle Ages. The Italian Renaissance, radiating from Florence, spread to the rest of the continent a new humanist interest in art and science which led to the modern era. Since the Age of Discovery, led by Spain and Portugal, Europe played a predominant role in global affairs with multiple explorations and conquests around the world.\nBetween the 16th and 20th centuries, European powers colonised at various times the Americas, almost all of Africa and Oceania, and the majority of Asia.\nThe Age of Enlightenment, the French Revolution, and the Napoleonic Wars shaped the continent culturally, politically and economically from the end of the 17th century until the first half of the 19th century. The Industrial Revolution, which began in Great Britain at the end of the 18th century, gave rise to radical economic, cultural and social change in Western Europe and eventually the wider world. Both world wars began and were fought to a great extent in Europe, contributing to a decline in Western European dominance in world affairs by the mid-20th century as the Soviet Union and the United States took prominence and competed over dominance in Europe and globally. The resulting Cold War divided Europe along the Iron Curtain, with NATO in the West and the Warsaw Pact in the East. This divide ended with the Revolutions of 1989, the fall of the Berlin Wall, and the dissolution of the Soviet Union, which allowed European integration to advance significantly.\nEuropean integration is being advanced institutionally since 1948 with the founding of the Council of Europe, and significantly through the realisation of the European Union (EU), which represents today the majority of Europe. The European Union is a supranational political entity that lies between a confederation and a federation and is based on a system of European treaties. The EU originated in Western Europe but has been expanding eastward since the dissolution of the Soviet Union in 1991. A majority of its members have adopted a common currency, the euro, and participate in the European single market and a customs union. A large bloc of countries, the Schengen Area, have also abolished internal border and immigration controls. Regular popular elections take place every five years within the EU; they are considered to be the second-largest democratic elections in the world after India's. The EU is the third-largest economy in the world.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Europe"
            },
            "Q460679": {
                "name": "Maneki-neko",
                "wikidata_aliases": "[\"beckoning cat\",\"money cat\",\"welcoming cat\",\"fortune cat\",\"maneki neko\"]",
                "wikidata_summary": "Japanese figurine of a cat, said to bring good luck and money especially to business owners",
                "wikidata_url": "https://www.wikidata.org/wiki/Q460679",
                "wikipedia_summary": "The maneki-neko (招き猫, lit. 'beckoning cat') is a common Japanese figurine which is often believed to bring good luck to the owner. In modern times, they are usually made of ceramic or plastic. The figurine depicts a cat, traditionally a calico Japanese Bobtail, with a paw raised in a beckoning gesture. The figurines are often displayed in shops, restaurants, pachinko parlors, dry cleaners, laundromats, bars, casinos, hotels, nightclubs, and other businesses, generally near the entrance, as well as households. Some maneki-neko are equipped with a mechanical paw which slowly moves back and forth.\nManeki-neko come in different colors and styles and vary in degrees of detail. Common colors are white, black, red, and gold. In addition to statues, maneki-neko can be found in the form of keychains, piggy banks, air fresheners, pots, and numerous other media. Maneki-neko are sometimes referred to simply as 'lucky cats' or 'calling cats'.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Maneki-neko"
            },
            "Q462": {
                "name": "Star Wars",
                "wikidata_aliases": "[\"SW\"]",
                "wikidata_summary": "epic space opera multimedia franchise created by George Lucas",
                "wikidata_url": "https://www.wikidata.org/wiki/Q462",
                "wikipedia_summary": "Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.\nThe original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).\nAll nine films, collectively referred to as the 'Skywalker Saga', were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action 'anthology' films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, making Star Wars the third-highest-grossing film franchise of all time.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars"
            },
            "Q4656436": {
                "name": "A Different Approach",
                "wikidata_aliases": "[\"Different Approach\"]",
                "wikidata_summary": "1978 film",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4656436",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q474191": {
                "name": "diet",
                "wikidata_aliases": "[]",
                "wikidata_summary": "sum of food consumed by an organism",
                "wikidata_url": "https://www.wikidata.org/wiki/Q474191",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q4746137": {
                "name": "Amicus",
                "wikidata_aliases": "[]",
                "wikidata_summary": "British trade union (2001–2007)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4746137",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q4822770": {
                "name": "List of earthquakes in Turkey",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4822770",
                "wikipedia_summary": "Turkey has had many earthquakes. This list includes any notable historical earthquakes that have epicenters within the current boundaries of Turkey, or which caused significant effects in this area. Overall, the population in major cities like Istanbul resides in structures that are a mix of vulnerable and earthquake resistant construction.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_Turkey"
            },
            "Q484645": {
                "name": "Anal gland",
                "wikidata_aliases": "[\"anal glands\",\"anal sacs\",\"anal sac\"]",
                "wikidata_summary": "glands found near the anus in many mammals",
                "wikidata_url": "https://www.wikidata.org/wiki/Q484645",
                "wikipedia_summary": "The anal glands or anal sacs are small glands near the anus in many mammals. They are situated in between the external anal sphincter muscle and internal anal sphincter muscle. Their function in humans is unclear.Sebaceous glands within the lining secrete a liquid that is used for identification of members within a species. These sacs are found in many species of carnivorans, including wolves, bears, sea otters and kinkajous.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Anal_gland"
            },
            "Q485537": {
                "name": "odor",
                "wikidata_aliases": "[\"scent\",\"smell\",\"odour\",\"fragrance\",\"aroma\",\"malodor\",\"stench\",\"stink\",\"odorant\",\"odorants\"]",
                "wikidata_summary": "thing sensed by smell",
                "wikidata_url": "https://www.wikidata.org/wiki/Q485537",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q49127": {
                "name": "Harvard Kennedy School",
                "wikidata_aliases": "[\"HKS\",\"Harvard University Kennedy School of Government\",\"Harvard Kennedy School\",\"Harvard Kennedy School of Government\",\"John Fitzgerald Kennedy School of Government\",\"Kennedy School of Government\",\"John F Kennedy School of Government\"]",
                "wikidata_summary": "school of public administration of Harvard University",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49127",
                "wikipedia_summary": "Harvard Kennedy School (HKS), officially the John F. Kennedy School of Government, is the school of public policy and government of Harvard University in Cambridge, Massachusetts. The school offers master's degrees in public policy, public administration, and international development, four doctoral degrees, and various executive education programs. It conducts research in subjects relating to politics, government, international affairs, and economics. As of 2021, HKS had an endowment of $1.7 billion. It is a member of the Association of Professional Schools of International Affairs (APSIA), a global consortium of schools that trains leaders in international affairs.The primary campus of Harvard Kennedy School is on John F. Kennedy Street in Cambridge. The main buildings overlook the Charles River and are southwest of Harvard Yard and Harvard Square, on the site of a former MBTA Red Line trainyard. The School is adjacent to the public riverfront John F. Kennedy Memorial Park.\nHarvard Kennedy School alumni include 20 heads of state or government from around the world, the most of any graduate institution in the world. Alumni also include cabinet officials, military leaders, heads of central banks, and legislators.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Harvard_Kennedy_School"
            },
            "Q49233": {
                "name": "Orlando, Florida",
                "wikidata_aliases": "[\"Orlando, Florida\",\"City of Orlando\",\"Orlando, FL\",\"The Beautiful city\",\"Theme Park Capital of the World\"]",
                "wikidata_summary": "city in and county seat of Orange County, Florida, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49233",
                "wikipedia_summary": "Orlando ( or-LAN-doh) is a city in, and the county seat of, Orange County, Florida, United States. Part of Central Florida, it is the center of the Orlando metropolitan area, which had a population of 2,509,831 in 2017, according to the U.S. Census Bureau. It is the sixth-largest metropolitan area in the Southern United States and the third-largest metropolitan area in Florida behind Miami and Tampa Bay. Orlando had a city population of 307,573 in the 2020 census, making it the fourth-most populous city in Florida behind Jacksonville, Miami, and Tampa. It is the state's most populous inland city.\nOrlando is one of the most-visited cities in the world primarily due to tourism, major events, and convention traffic. It is the third-most visited city in the U.S. after New York City and Miami, with over 2.9 million visitors as of 2022. Orlando International Airport is the 13th-busiest airport in the United States and the 29th-busiest in the world. The two largest and most internationally renowned tourist attractions in the Orlando area are the Walt Disney World Resort, opened by the Walt Disney Company in 1971 and located about 21 miles (34 km) southwest of downtown Orlando in Bay Lake, and the Universal Orlando Resort, opened in 1990 as a major expansion of Universal Studios Florida and the only theme park inside Orlando city limits.\nWith the exception of the theme parks, most major cultural sites like the Orlando Museum of Art and Dr. Phillips Center for the Performing Arts and world-renowned nightlife, bars and clubs are located in Downtown Orlando. Other attractions like The Wheel at ICON Park are located along International Drive. The city is also one of the busiest American cities for conferences and conventions; Orange County Convention Center is the second-largest convention facility in the United States.\nLike other major cities in the Sun Belt, Orlando grew rapidly from the 1960s into the first decade of the 21st century. Orlando is home to the University of Central Florida, which became the largest university campus in the United States in terms of enrollment as of 2015. In 2010, Orlando was listed as a 'Gamma+' level global city by the Globalization and World Cities Research Network.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Orlando,_Florida"
            },
            "Q496": {
                "name": "feces",
                "wikidata_aliases": "[\"💩\",\"faeces\",\"excrement\",\"stool\",\"poo\",\"fecal matter\",\"kak\",\"poop\",\"dung\"]",
                "wikidata_summary": "solid or semisolid remains of the food that passes through the bowel, from any animal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q496",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q49619": {
                "name": "2024",
                "wikidata_aliases": "[\"MMXXIV\",\"two thousand twenty-four\",\"two thousand and twenty-four\",\"twenty twenty-four\",\"2024 AD\",\"2024 CE\"]",
                "wikidata_summary": "current calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49619",
                "wikipedia_summary": "2024 (MMXXIV) is the current year, and is a leap year starting on Monday of the Gregorian calendar, the 2024th year of the Common Era (CE) and Anno Domini (AD) designations, the 24th  year of the 3rd millennium and the 21st century, and the  5th   year of the 2020s decade.  \nSo far, this year has witnessed the continuation of major armed conflicts, including the Russian invasion of Ukraine, the Myanmar civil war, the war in Sudan, and the Islamist insurgency in the Sahel. The continuation of the Israel–Hamas war has further caused spillover into many countries, including a crisis in the Red Sea impacting global shipping. \nApproximately 79 countries, representing around four billion people, are expected to conduct national elections throughout the course of the year, including eight out of ten of the world's most populous countries (Bangladesh, Brazil, Pakistan, Russia, India, Mexico, Indonesia, and the United States). The European Parliament will also hold elections.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2024"
            },
            "Q49622": {
                "name": "2023",
                "wikidata_aliases": "[\"MMXXIII\",\"2023 AD\",\"2023 CE\",\"two thousand twenty-three\",\"twenty twenty-three\",\"two thousand and twenty-three\",\"two zero two three\"]",
                "wikidata_summary": "calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49622",
                "wikipedia_summary": "2023 (MMXXIII) was a common year starting on Sunday of the Gregorian calendar, the 2023rd year of the Common Era (CE) and Anno Domini (AD) designations, the 23rd  year of the 3rd millennium and the 21st century, and the  4th   year of the 2020s decade.  \nThe year 2023 saw the decline in severity of the COVID-19 pandemic, with the WHO (World Health Organization) ending its global health emergency status in May. Catastrophic natural disasters included the fifth-deadliest earthquake of the 21st century striking Turkey and Syria, leaving up to 62,000 people dead, Cyclone Freddy – the longest-lasting recorded tropical cyclone in history – leading to over 1,400 deaths in Malawi and Mozambique, Storm Daniel, which became the deadliest cyclone worldwide since Cyclone Nargis after killing at least 11,000 people in Libya, a major 6.8 magnitude earthquake striking western Morocco, killing 2,960 people, and a 6.3 magnitude quadruple earthquake striking western Afghanistan, killing over 1,400 people.\nThe Russian invasion of Ukraine and Myanmar civil war continued in 2023, and a series of coups, several armed conflicts, and political crises broke out in numerous African nations, most notably a war in Sudan. An escalation of the Israeli-Palestinian conflict occurred in October when Hamas, which governs the Gaza Strip, led an attack on Israel, leading the latter to declare war on Hamas. The Nagorno-Karabakh conflict ended after over 100,000 Armenians fled the region after an Azeri military invasion.\nA banking crisis resulted in the collapse of numerous American regional banks as well as the buyout of Credit Suisse by UBS in Switzerland. The two largest American banks to collapse were Silicon Valley Bank and First Republic Bank, two of the three largest banking collapses in US history. The most notable of numerous acquisitions in various industries included October's energy acquisitions with ExxonMobil and Chevron buying Pioneer Natural Resources and Hess respectively, the luxury fashion holding company Tapestry (Coach New York and Kate Spade New York) announcing its purchase of Capri Holdings (Michael Kors and Versace), and the closure of Microsoft's acquisition of Activision Blizzard.\nIn the realm of technology, 2023 saw the continued rise of generative AI models, with increasing applications across various industries. These models, leveraging advancements in machine learning and natural language processing, had become capable of creating realistic and coherent text, images, and music. An AI arms race between private companies has continued since the late 2010s, with Microsoft-backed OpenAI and Google owner Alphabet today most dominant among firms.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2023"
            },
            "Q4978319": {
                "name": "Bruce Sterling Jenkins",
                "wikidata_aliases": "[\"Bruce Jenkins\",\"Bruce S. Jenkins\"]",
                "wikidata_summary": "United States federal judge (1927-2023)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4978319",
                "wikipedia_summary": "Bruce Sterling Jenkins (May 27, 1927 – November 7, 2023) was an American attorney, politician, and jurist who served as a United States district judge of the United States District Court for the District of Utah from 1978 to 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bruce_Sterling_Jenkins"
            },
            "Q499210": {
                "name": "Animal cognition",
                "wikidata_aliases": "[]",
                "wikidata_summary": "intelligence of non-human animals",
                "wikidata_url": "https://www.wikidata.org/wiki/Q499210",
                "wikipedia_summary": "Animal cognition encompasses the mental capacities of non-human animals including insect cognition. The study of animal conditioning and learning used in this field was developed from comparative psychology. It has also been strongly influenced by research in ethology, behavioral ecology, and evolutionary psychology;  the alternative name cognitive ethology is sometimes used. Many behaviors associated with the term animal intelligence are also subsumed within animal cognition.Researchers have examined animal cognition in mammals (especially primates, cetaceans, elephants, dogs, cats, pigs, horses, cattle, raccoons and rodents), birds (including parrots, fowl, corvids and pigeons), reptiles (lizards, snakes, and turtles), fish and invertebrates (including cephalopods, spiders and insects).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Animal_cognition"
            },
            "Q5": {
                "name": "human",
                "wikidata_aliases": "[\"human being\",\"people\",\"humans\",\"man\",\"men\",\"individual human\",\"individual Homo sapien\",\"nonfictional human\",\"non-fictional human\",\"person\"]",
                "wikidata_summary": "any member of Homo sapiens, unique extant species of the genus Homo, from embryo to adult",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q5054855": {
                "name": "Cavan Scott",
                "wikidata_aliases": "[]",
                "wikidata_summary": "British comics writer and author",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5054855",
                "wikipedia_summary": "Cavan Scott (born 18 April 1973), is a New York Times bestselling comic writer and author. He is best known for his work on a variety of spin-offs from both Doctor Who and Star Wars, as well as comics and novels for Teen Titans Black Adam, Ghostbusters, Transformers, Back to the Future, Vikings, Pacific Rim, Sherlock Holmes, and Penguins of Madagascar.\nCavan Scott, along with Justina Ireland, Claudia Gray, Daniel Jose Older, and Charles Soule are crafting a new era in the Star Wars publishing world called Star Wars: The High Republic. Cavan's first contribution to the era was a comic book series released through Marvel Comics titled Star Wars: The High Republic. and he has also written two novels in the series, the New York Times bestseller, The Rising Storm and Path of Vengeance, numerous short stories in Star Wars Insider and the Life Day Treasury, a four issue mini-series for IDW, The Monster of Temple Peak and the audio drama, Tempest Runner.\nIn April 2020, Vault Comics announced their supernatural spy series Shadow Service, written by Cavan Scott with art by Corin M. Howell, for release in July 2020. This was Cavan Scott's first creator-owned comic series.  He has since written three more creator-owned series: The Ward, from Dark Horse Comics, Sleep Terrors from Legendary Comics, and Dead Seas from Dark Horse.\nIn April 2016, his 2016 World Book Day book Star Wars: The Escape became the UK's number one bestselling book.\nHe was also script editor on the first series of Highlander audiobooks and produced Blakes 7 for Big Finish Productions.\nHe has written a number of books based upon the BBC Television series Countryfile and Planet Dinosaur, as well as children's books and comic based on such popular children's franchises Skylanders, Disney Infinity, Adventure Time, and Angry Birds.\nHe wrote a series of Sherlock Holmes novels for Titan Books, the first of which, 'The Patchwork Devil', was published in 2016.\nScott conceived and launched Countryfile Magazine in 2007 and has written for over 30 national magazines and newspapers. He regularly appears on local and national radio commentating on rural affairs and has been a judge of various countryside awards including the RSPB Farming for Nature Award and the FARMA Farm Retailer of the Year. He appeared on BBC Breakfast to discuss the casting of Peter Capaldi as Doctor Who's Twelfth Doctor.He also wrote serialized children's books for Fiction Express, including two volumes of Snaffles the Cat Burglar.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cavan_Scott"
            },
            "Q5083": {
                "name": "Seattle",
                "wikidata_aliases": "[\"Seattle, Washington\",\"Seattle, WA\",\"Duwamps\",\"New York Alki\"]",
                "wikidata_summary": "city in and county seat of King County, Washington, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5083",
                "wikipedia_summary": "Seattle (  see-AT-əl) is a seaport city on the West Coast of the United States. It is the seat of King County, Washington. With a 2022 population of 749,256 it is the most populous city in both the state of Washington and the Pacific Northwest region of North America, and the 18th-most populous city in the United States. The Seattle metropolitan area's population is 4.02 million, making it the 15th-largest in the United States. Its growth rate of 21.1% between 2010 and 2020 made it one of the country's fastest-growing large cities.Seattle is situated on an isthmus between Puget Sound, an inlet of the Pacific Ocean, and Lake Washington. It is the northernmost major city in the United States, located about 100 miles (160 km) south of the Canadian border. A gateway for trade with East Asia, the Port of Seattle is the fourth-largest port in North America in terms of container handling as of 2021.The Seattle area has been inhabited by Native Americans (such as the Duwamish, who had at least 17 villages around Elliot Bay) for at least 4,000 years before the first permanent European settlers. Arthur A. Denny and his group of travelers, subsequently known as the Denny Party, arrived from Illinois via Portland, Oregon, on the schooner Exact at Alki Point on November 13, 1851. The settlement was moved to the eastern shore of Elliott Bay in 1852 and named 'Seattle' in honor of Chief Seattle, a prominent 19th-century leader of the local Duwamish and Suquamish tribes. Seattle currently has high populations of Native Americans alongside Americans with strong Asian, African, European, and Scandinavian ancestry, and, as of 2015, hosts the fifth-largest LGBT community in the U.S.Logging was Seattle's first major industry, but by the late 19th century the city had become a commercial and shipbuilding center as a gateway to Alaska during the Klondike Gold Rush. The city grew after World War II, partly due to the local Boeing company, which established Seattle as a center for its manufacturing of aircraft.  \nBeginning in the 1980s, the Seattle area developed into a technology center; Microsoft established its headquarters in the region. In 1994, Internet retailer Amazon was founded in Seattle, and Alaska Airlines is based in SeaTac, Washington, serving Seattle–Tacoma International Airport, Seattle's international airport. The stream of new software, biotechnology, and Internet companies led to an economic revival, which increased the city's population by almost 50,000 in the decade between 1990 and 2000.\nThe culture of Seattle is heavily defined by its significant musical history. Between 1918 and 1951, nearly 24 jazz nightclubs existed along Jackson Street, from the current Chinatown/International District to the Central District. The jazz scene nurtured the early careers of Ernestine Anderson, Ray Charles, Quincy Jones, and others. In the late 20th and early 21st century, the city also was the origin of several rock bands, including Foo Fighters, Heart, and Jimi Hendrix, and the subgenre of grunge and its pioneering bands, including Alice in Chains, Nirvana, Pearl Jam, Soundgarden, and others.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Seattle"
            },
            "Q5085831": {
                "name": "Charlotte Area Transit System",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Public transit authority serving the Charlotte, NC Metropolitian Area",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5085831",
                "wikipedia_summary": "The Charlotte Area Transit System (CATS) is the agency responsible for public transportation in the Charlotte metropolitan area. CATS operates bus and rail transit services in Mecklenburg County and surrounding areas. Established in 1999, CATS' bus and rail operations carry about 320,000 riders on an average week. CATS is governed by the Metropolitan Transit Commission and is operated as a department of the City of Charlotte. In 2023, the system had a ridership of 13,476,600, or about 42,600 per weekday as of the fourth quarter of 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Charlotte_Area_Transit_System"
            },
            "Q5119": {
                "name": "capital city",
                "wikidata_aliases": "[\"capital\"]",
                "wikidata_summary": "primary governing city of a top-level (country) or first-level and second-level subdivision (country, state, province, regency, etc) political entity",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5119",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q512003": {
                "name": "Creatures",
                "wikidata_aliases": "[\"Creatures Inc.\"]",
                "wikidata_summary": "Japanese video game developer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q512003",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q5129181": {
                "name": "Claudia Gray",
                "wikidata_aliases": "[\"Amy Vincent\"]",
                "wikidata_summary": "American writer of young-adult speculative fiction (1970-)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5129181",
                "wikipedia_summary": "Claudia Gray is the pseudonym of Amy Vincent, an American writer of paranormal romance young adult fiction, best known for the Evernight series and her Star Wars novels: Lost Stars, Bloodline, Leia, Princess of Alderaan, Master and Apprentice, Into the Dark, and Star Wars: The Fallen Star.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Claudia_Gray"
            },
            "Q515": {
                "name": "city",
                "wikidata_aliases": "[\"cities\"]",
                "wikidata_summary": "large human settlement",
                "wikidata_url": "https://www.wikidata.org/wiki/Q515",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q51724": {
                "name": "Jedi",
                "wikidata_aliases": "[\"Jedi Order\",\"Jedi Knights\"]",
                "wikidata_summary": "religio-political-cultural group in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51724",
                "wikipedia_summary": "Jedi (), Jedi Knights, or collectively the Jedi Order are fictional characters, and often protagonists, featured in many works within the Star Wars franchise. Working symbiotically alongside the Old Galactic Republic, the Jedi Order is depicted as a religious, academic, meritocratic, and military (peacekeeping) organization whose origin dates back thousands of years before the events of the first film released in the franchise. The fictional organization has inspired a real-world new religious movement and parody religion: Jediism.Within the Star Wars galaxy, the Jedi are powerful guardians of order and justice, who, through intuition, rigorous training, and intensive self-discipline, are able to wield a supernatural power known as the Force, thus achieving, for example, the ability to move objects with the mind, perform incredible feats of strength, and connect to certain people's thoughts. As Star Wars creator George Lucas explains, the Jedi are 'warrior-monks who keep peace in the universe', avoiding the use of violence except as a last resort, with a mission to 'use their power to keep the governments of all the planets in line, so that they don't do terrible things'. The Jedi have the 'moral authority to do that' since they are 'the most moral of anybody in the galaxy'. Throughout the franchise, Jedi are often recognizable by their robes and tunics in various shades of brown and their use of lightsabers: sword-like weapons with a colorful blade made of plasma.\nAlong with New Age elements, Lucas developed the Jedi creed by adopting certain elements from Eastern religions—namely Buddhism and potentially Taoism. In that same vein, the creed focuses on compassion for others, mindfulness, non-attachment, and meditation, which are all characteristics of what Jedi characters call the 'light side' of the Force. Furthermore, the Jedi view fear to be the root of suffering: fear leading to anger, anger leading to hate, and hate leading to suffering. The Jedi warn that an excess of these negative emotions can turn practitioners away from the light side of the Force towards the dark side, which embraces passions, aggression, hate, rage, fear, and bitterness as a way of life. The Sith are followers of the dark side and the traditional enemies of the Jedi. While the Sith ultimately seek violent and absolute rule over the galaxy, the Jedi work to protect democracy, harmony, and justice.\nThe Jedi are depicted, in the franchise's Old Republic era, as a monastic and martial organization that cooperates intimately with the galactic government, bringing 'peace into the galaxy by being ambassadors and troubleshooters', according to Lucas. It is also the duty of Jedi to investigate certain crimes ranging from high-profile murder to political corruption, act as diplomats between powerful interplanetary groups, protect the highest government officials of the Republic, track down fugitives, and serve as leaders in the Republic's army during the Clone Wars. Still, their creed demands that they defend and protect all life and use their power only for knowledge and defense. With the rise of the Sith Lord Darth Sidious and the Galactic Empire, the Jedi Order is outlawed and most of its members killed in the ensuing political purge. Later efforts are made to revive the organization.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jedi"
            },
            "Q51727": {
                "name": "Count Dooku",
                "wikidata_aliases": "[\"Darth Tyranus\",\"Count Dooku of Serenno\",\"Dooku\",\"Tyranus\",\"Dooku of Serenno\"]",
                "wikidata_summary": "fictional character in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51727",
                "wikipedia_summary": "Count Dooku of Serenno, also known by his Sith name Darth Tyranus, is a fictional character in the Star Wars franchise, created by George Lucas. He is an antagonist in the Star Wars prequel trilogy, appearing in both Episode II – Attack of the Clones (2002) and Episode III – Revenge of the Sith (2005), played by Christopher Lee, as well as associated media, such as books, comics, video games, and television series. Actor Corey Burton has voiced Dooku in most of his animated and video game appearances, most notably Star Wars: Clone Wars (2003–2005), Star Wars: The Clone Wars (2008–2014; 2020), and the miniseries Tales of the Jedi (2022). Lee reprised the role in the 2008 animated film that launched The Clone Wars series.\nIn the fictional Star Wars universe, Dooku is a prominent political figure as the Count of his home planet of Serenno, as well as a former Jedi Master, who was trained by Yoda and mentored Obi-Wan Kenobi's master Qui-Gon Jinn. After becoming disillusioned with the corruption within the Galactic Republic's Senate and losing his faith in the Jedi Order, he eventually falls to the dark side of the Force and becomes Darth Sidious' second Sith apprentice, after Darth Maul. Dooku plays a pivotal role in Sidious' rise to power, leading the Confederacy of Independent Systems (made up of numerous planetary systems seeking independence from the Republic) throughout the Clone Wars, all the while engineering the creation of the Republic's clone army. Although Dooku hopes this will allow him to rule the galaxy alongside Sidious, as well as eventually overthrow him, he is ultimately betrayed by his master who arranges his death at the hands of his replacement, Anakin Skywalker, falling to the dark side and becoming Darth Vader.\nDooku's character and Christopher Lee's portrayal in the prequel films were met with generally positive reactions from fans and critics. Since the release of the films, Dooku has been highlighted as one of the best Star Wars villains, and a foil for Anakin Skywalker, whose transformation into Darth Vader is foreshadowed through Dooku's own fall to the dark side.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Count_Dooku"
            },
            "Q51730": {
                "name": "Yoda",
                "wikidata_aliases": "[\"Master Yoda\",\"Grandmaster Yoda\"]",
                "wikidata_summary": "fictional character in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51730",
                "wikipedia_summary": "Yoda () is a fictional character in the Star Wars universe, first appearing in the 1980 film The Empire Strikes Back. He is a small, green humanoid alien who is powerful with The Force and is a leading member of the Jedi Order until its near annihilation. In The Empire Strikes Back, Yoda was voiced and puppeteered by Frank Oz, who reprised the role in Return of the Jedi, the prequel trilogy, and the sequel trilogy. Outside of the films, the character was mainly voiced by Tom Kane, starting with the 2003 Clone Wars animated television series until his retirement from voice acting in 2021. Yoda is an iconic figure in popular culture due to his distinct pattern of speech and role as a wise mentor.\n\nIn his first appearance in the original trilogy, Yoda is described as the mentor of Obi-Wan Kenobi, and lives in exile on the swamp planet of Dagobah. He trains Luke Skywalker in the ways of the Force until his death at the age of 900 in Return of the Jedi, though he later returns as a Force spirit. In the prequel trilogy, Yoda leads the Jedi High Council and trains the young generations of Jedi until they are assigned to a master. When the Clone Wars break out, he becomes a general in the Galactic Republic army and leads several legions of clone troopers. Yoda is one of the few Jedi to survive the events of Order 66 at the end of the war, when he battles Darth Sidious and is forced to go into hiding. Yoda's spirit appears again in the sequel trilogy, advising an older Luke on his training of Rey.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Yoda"
            },
            "Q51736": {
                "name": "Qui-Gon Jinn",
                "wikidata_aliases": "[\"Qui-Gon\"]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51736",
                "wikipedia_summary": "Qui-Gon Jinn () is a fictional character in the Star Wars franchise, played by Liam Neeson. He is a main character in the prequel film trilogy, serving as one of the protagonists of The Phantom Menace (1999). He appears briefly as a Force ghost in the 2008 animated series The Clone Wars, the season finale of the 2022 live-action series Obi-Wan Kenobi, along with Attack of the Clones and The Rise of Skywalker as a disembodied voice, with Neeson reprising his role in all of the above. Qui-Gon also appears in two episodes of Tales of the Jedi, which depicts some scenes from his life before the events of The Phantom Menace; Neeson voices adult Qui-Gon in the series, while his son Micheál Richardson voices Qui-Gon as a padawan.\nWithin the fictional Star Wars universe, Qui-Gon mentors Obi-Wan Kenobi, and is a powerful and wise, yet maverick and controversial Jedi Master, who has many uncommon beliefs regarding The Force. In The Phantom Menace, his and Obi-Wan's mission to protect Queen Padmé Amidala leads him to encounter the young slave Anakin Skywalker, whom he believes to be the prophesied 'Chosen One' who will bring balance to the Force and insists upon his training as a Jedi against the wishes of the Jedi High Council, who believe Skywalker to be too old for training. Qui-Gon is fatally wounded in a lightsaber duel by the Sith Lord Darth Maul; in his final moments, he makes Obi-Wan promise that he will train Skywalker. Attack of the Clones introduces his former Jedi mentor Count Dooku, who fell to the dark side of the Force and became a Sith Lord. At the end of Revenge of the Sith, it is revealed that Qui-Gon has learned how to become a Force spirit after death, teaching the idea to Yoda during the Clone Wars and later to Obi-Wan.\nOutside of the films, the character appears in various canon and non-canon Star Wars media, such as books, comics, and video games. Since the release of The Phantom Menace, Qui-Gon has become one of the most popular Star Wars characters, gaining a cult status. Neeson's portrayal of Qui-Gon has been met with positive reviews, with some critics saying he helped hold the film together significantly. For his role in The Phantom Menace, Neeson was nominated for a 2000 Saturn Award for Best Actor.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Qui-Gon_Jinn"
            },
            "Q51740": {
                "name": "Obi-Wan Kenobi",
                "wikidata_aliases": "[\"Ben Kenobi\",\"Obi Wan Kenobi\",\"Obi Wan\",\"General Kenobi\",\"Obi-Wan \\\"Ben\\\" Kenobi\",\"Obi-Wan\",\"Master Kenobi\"]",
                "wikidata_summary": "fictional character in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51740",
                "wikipedia_summary": "Obi-Wan Kenobi () is a fictional character in the Star Wars franchise. Within the original trilogy, Obi-Wan is a Jedi Master as a supporting character and is portrayed by English actor Alec Guinness. In the later-released prequel trilogy, a younger version of the character serves as one of the two main protagonists, alongside Anakin Skywalker, and is portrayed by Scottish actor Ewan McGregor. In the original trilogy he is introduced as Ben Kenobi, an alias he uses while in hiding from the Empire. He is a mentor to Luke Skywalker, to whom he introduces the ways of the Jedi. After sacrificing himself in a duel against Darth Vader, Obi-Wan guides Luke through the Force in his fight against the Galactic Empire. In the prequel trilogy, set two decades earlier, he is initially a Padawan (apprentice) to Jedi Master Qui-Gon Jinn, and later mentor and friend of Luke's father Anakin, who falls to the dark side of the Force and becomes Vader. The character briefly appears in the sequel trilogy as a disembodied voice, speaking to protagonist Rey, and serving as the namesake of Ben Solo. He is frequently featured as a main character in various other Star Wars media, including the streaming television miniseries Obi-Wan Kenobi, in which McGregor reprised the role.\nGuinness' performance as Obi-Wan in the original Star Wars (1977) earned him a nomination for the Academy Award for Best Supporting Actor, the only acting nomination to date for a Star Wars film. McGregor's performance as the character in the prequels received praise as well, considered to be among the highlights of the trilogy. Guinness won the Saturn Award for Best Supporting Actor for his performance in A New Hope, while McGregor was nominated for the same category 20 years later for his performance in The Phantom Menace.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Obi-Wan_Kenobi"
            },
            "Q51746": {
                "name": "Luke Skywalker",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51746",
                "wikipedia_summary": "Luke Skywalker is a fictional character and the protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. Portrayed by Mark Hamill, Luke first appeared in Star Wars (1977), and he returned in The Empire Strikes Back (1980) and Return of the Jedi (1983). Over three decades later, Hamill returned as Luke in the Star Wars sequel trilogy, with a cameo in The Force Awakens (2015) before playing a major role in The Last Jedi (2017) and The Rise of Skywalker (2019). He later played a digitally de-aged version of the character in the Disney+ series The Mandalorian, appearing in the second-season finale, which premiered in 2020, and The Book of Boba Fett, in the sixth episode, released in 2022.\nOriginally a farmer on Tatooine living with his uncle and aunt, Luke becomes a pivotal figure in the Rebel Alliance's struggle against the Galactic Empire. The son of fallen Jedi Knight Anakin Skywalker (turned Sith Lord Darth Vader) and Padmé Amidala, Luke is the twin brother of Rebellion leader Princess Leia and eventual brother-in-law of the smuggler Han Solo. Luke trains to be a Jedi under Jedi Masters Obi-Wan Kenobi and Yoda and rebuilds the Jedi Order. He later trains his nephew Ben Solo and mentors Rey. Though Luke dies at the end of The Last Jedi, he returns as a Force spirit in The Rise of Skywalker, encouraging Rey to face her grandfather, the resurrected Emperor Palpatine. At the end of the film, the spirits of Luke and Leia give Rey their blessing to adopt the Skywalker surname and continue their family's legacy.\nThe character also briefly appears in the prequel film Episode III – Revenge of the Sith as an infant, portrayed by Aidan Barton, and in the Disney+ series Obi-Wan Kenobi as a child, portrayed by Grant Feely. In the de-canonized Star Wars Expanded Universe (renamed Legends), Luke is a main character in many stories set after Return of the Jedi, which depict him as a powerful Jedi Master, the husband of Mara Jade, father of Ben Skywalker, and maternal uncle of Jaina, Jacen and Anakin Solo.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Luke_Skywalker"
            },
            "Q51752": {
                "name": "Anakin Skywalker",
                "wikidata_aliases": "[\"The Chosen One\",\"Ani\",\"Anakin\",\"General Skywalker\"]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51752",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q51755": {
                "name": "Ahsoka Tano",
                "wikidata_aliases": "[\"Ahsoka\",\"Snips\",\"Ashla\",\"Fulcrum\"]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51755",
                "wikipedia_summary": "Ahsoka Tano is a fictional character in the Star Wars franchise. She was introduced as the 14-year-old Togruta Jedi Padawan of Anakin Skywalker in the animated film Star Wars: The Clone Wars (2008) before appearing in the subsequent animated television series (2008–2014; 2020); the sequel series Star Wars Rebels (2014–2018); in the live-action film Star Wars: The Rise of Skywalker (2019) as a voiceover cameo; and in the miniseries Tales of the Jedi (2022), voiced by Ashley Eckstein. In 2020, Ahsoka made her live-action debut in the second season of the Disney+ series The Mandalorian, portrayed by Rosario Dawson. Dawson reprised the role in a 2022 episode of the spin-off series The Book of Boba Fett, and the 2023 series, Ahsoka.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ahsoka_Tano"
            },
            "Q51770": {
                "name": "Palpatine",
                "wikidata_aliases": "[\"Darth Sidious\",\"Emperor Palpatine\",\"Chancellor Palpatine\",\"Sheev Palpatine\",\"The Senate\"]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51770",
                "wikipedia_summary": "Sheev Palpatine is a fictional character in the Star Wars franchise created by George Lucas. He first appears on screen in The Empire Strikes Back (1980), in which he is credited as The Emperor, and is the overarching antagonist of the three film trilogies in the Skywalker Saga, in which he is portrayed by Ian McDiarmid. The character is also known by his Sith name, Darth Sidious, which was first used in the novelization of The Phantom Menace (1999). In creating Palpatine, Lucas was inspired by real-world examples of democratic backsliding during the rise and rule of dictators such as Julius Caesar, Napoleon Bonaparte, and Adolf Hitler.\nIn the original trilogy, Palpatine is depicted as the evil Emperor of the Galactic Empire and the master of Darth Vader. The character has a larger role in the prequel trilogy, which chronicles his rise from senator to emperor. He is portrayed as a charismatic politician—and, secretly, a powerful Sith lord—who orchestrates the invasion of his home planet Naboo in a plot to become Supreme Chancellor of the Galactic Republic. Palpatine subsequently masterminds the Clone Wars to covertly turn the Republic into the Empire. He destroys the Jedi Order and manipulates Jedi Knight Anakin Skywalker into becoming his apprentice, Vader, by promising him the power to prevent the death of his wife, Padmé Amidala. In The Rise of Skywalker (2019), the final film in the sequel trilogy, a resurrected Palpatine is revealed to be the paternal grandfather of the trilogy's primary protagonist, Rey. He is also the mastermind behind Snoke, whom he created to lead the First Order against the New Republic and seduce Skywalker's grandson, Ben Solo, into becoming the villainous Kylo Ren. \nSince the release of the original trilogy, Palpatine has become a widely recognized symbol of evil in popular culture. Since the prequel trilogy, the character has been a symbol of sinister deception and the subversion of democracy. The Star Wars Databank describes him as 'the supreme ruler of the most powerful tyrannical regime the galaxy had ever witnessed'. Aside from the films, Palpatine appears in various canon and non-canon Star Wars media, including Clone Wars (2003–5), The Clone Wars (2008–14, 2020), Rebels (2014–18), The Bad Batch (2021–), Obi-Wan Kenobi (2022) and Tales of the Jedi (2022–), all set before the original trilogy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Palpatine"
            },
            "Q51771": {
                "name": "Sith",
                "wikidata_aliases": "[\"Sith Order\"]",
                "wikidata_summary": "fictional title in the Star Wars series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51771",
                "wikipedia_summary": "The Sith are the main antagonists of many works in the fictional universe of the Star Wars franchise. They are the antithesis and ancient enemies of the Jedi. The Sith Order is depicted as an ancient cult of warriors who draw strength from the dark side of the Force and use it to seize power by any means necessary, including terrorism and mass murder; their ultimate goals are to destroy the Jedi and rule the galaxy. The various antagonistic factions in the franchise, namely the Confederacy of Independent Systems, the First Galactic Empire, the Imperial Remnant and the First Order all originated, with the Sith. Sith, known individually as Sith Lords, are, by nature, ruthless. At any point a single individual assumes absolute authority amongst their kind and is granted the honorific Dark Lord of the Sith. Sith culture is based on perpetual treachery and betrayal. The fate of Sith Lords is, typically, to be murdered and replaced by their own apprentices. Sith teach their apprentices to revere the dark side of the Force, to give full reign to aggressive emotions such as rage and hatred, and to believe that others are expendable in the pursuit of power, it makes the Lords' demise inevitable.\nLike the Jedi, the Sith use the lightsaber as their traditional weapon, a device that generates a blade-like plasma powered by a kyber crystal. In contrast to the Jedi, who primarily use blue and green lightsabers, the usual color for a Sith lightsaber is red, born of an unnatural corruption of the kyber crystal through the dark side's malignancy, causing it to 'bleed'. This even affects the sound of ignition, with a harsher hiss.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sith"
            },
            "Q51780": {
                "name": "Grand Admiral Thrawn",
                "wikidata_aliases": "[\"Th'raw'n\",\"Thrawn\",\"Kivu'raw'nuru\",\"Vurawn\",\"Mitth'raw'nuruodo\",\"Mitth'raw'nuru\"]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51780",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q51800": {
                "name": "Grand Moff Tarkin",
                "wikidata_aliases": "[\"Grand Moff Tarkin\",\"Grand Moff Wilhuff Tarkin\",\"Governor Tarkin\"]",
                "wikidata_summary": "fictional character in the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51800",
                "wikipedia_summary": "Grand Moff Wilhuff Tarkin is a fictional character in the Star Wars franchise, introduced as the main antagonist of the  original 1977 Star Wars film (although he has less screen time than his iconic equal Darth Vader), in which he was played by Peter Cushing. In the film, Tarkin is depicted as a high-ranking officer of the Galactic Empire, placed in charge of the operations on the Death Star, the Empire's moon–sized battle station. He orders the destruction of the planet Alderaan by the station's superlaser, and dies at the end of the film when the Death Star is destroyed by Luke Skywalker.\nApart from the original film, Tarkin has made appearances in various canon and non-canon Star Wars media, including the animated series The Clone Wars, Rebels, and The Bad Batch, and the films Revenge of the Sith and Rogue One. He is also the protagonist of the 2014 novel Tarkin, which details the character's backstory and rise to power within the Empire's ranks. In the novel, Tarkin advocates for the Tarkin Doctrine, a military system based on 'the threat of force, rather than force itself'. His philosophy becomes central to Imperial policy and earns him the position of the first Grand Moff in the Empire. (In the Galactic Empire, a 'Moff' is the governor of a Sector, or subdivision of the Empire; a 'Grand Moff' is the governor of an Oversector, a grouping of several Sectors.)\nTarkin's character has been well received, and he has been called 'one of the most formidable villains in Star Wars history.'\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Grand_Moff_Tarkin"
            },
            "Q51802": {
                "name": "Han Solo",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fictional character from Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51802",
                "wikipedia_summary": "Han Solo is a fictional character in the Star Wars franchise created by George Lucas. The character first appeared in the 1977 film Star Wars portrayed by Harrison Ford, who reprised his role in The Holiday Special (1978), The Empire Strikes Back (1980), and Return of the Jedi (1983). Ford returned to the role for The Force Awakens (2015), as well as a brief cameo in The Rise of Skywalker (2019). In the spin-off film Solo (2018), a younger version of the character is portrayed by Alden Ehrenreich, while in the animated series Forces of Destiny (2017–2018), the character is voiced by Kiff VandenHeuvel and A. J. Locascio.\nFirst appearing in the original trilogy, Han Solo and his first mate Chewbacca are smugglers who are hired by Ben Kenobi and Luke Skywalker to transport them to Alderaan so they can deliver the stolen plans for the Death Star. Although initially unwilling to join the Rebel Alliance in their fight against the Galactic Empire, he eventually does so and in the process falls in love with Princess Leia, whom he eventually marries, becoming Luke's brother in-law. In the sequel trilogy set decades later, Solo joins forces with scavenger Rey and former stormtrooper Finn to help them and the Resistance in their fight against the First Order, whose forces are led by Supreme Leader Snoke and Kylo Ren, the latter of whom is his and Leia's son, Ben Solo, who fell to the dark side of the Force, which caused him and Leia to separate. Han is killed by his son but eventually returns as a memory to his son and helps redeem him back to the light side of the Force.\nThe American Film Institute has named Solo as the 14th best film hero. Mythologist Joseph Campbell has described the character, 'He thinks he's an egoist; but he really isn't. ... there's something else pushing [him].' In 1997, Lucas described Han as 'a cynical loner who realizes the importance of being part of a group and helping for the common good'.\nEver since his debut, Han Solo has remained one of the most famous characters from the Star Wars series. In addition to the character being hailed as one of cinema's greatest heroes, Harrison Ford's performances in the franchise have received significant acclaim from critics and fans. Alden Ehrenreich's performance in Solo was also well received. Ford received two nominations for the Saturn Award for Best Actor, winning for his performance in The Force Awakens.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Han_Solo"
            },
            "Q5193368": {
                "name": "Cultural impact of Star Wars",
                "wikidata_aliases": "[\"cultural influence of Star Wars\"]",
                "wikidata_summary": "overview of the cultural impact of Star Wars",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5193368",
                "wikipedia_summary": "George Lucas's science fiction multi-film Star Wars saga has had a significant impact on modern popular culture. Star Wars references are deeply embedded in popular culture; references to the main characters and themes of Star Wars are casually made in many English-speaking countries with the assumption that others will understand the reference. Darth Vader has become an iconic villain, while characters such as Luke Skywalker, Han Solo, Princess Leia, Chewbacca, C-3PO and R2-D2 have all become widely recognized characters around the world. Phrases such as 'evil empire', 'May the Force be with you', Jedi mind trick and 'I am your father' have become part of the popular lexicon. The first Star Wars film in 1977 was a cultural unifier, enjoyed by a wide spectrum of people.Many efforts produced in the science fiction genre (particularly in filming) can now be seen to draw heavy influence and inspiration from the original Star Wars trilogy, as well as the magnitude of sequels, spin-offs, series, games, and texts that it spawned. Sounds, visuals, and even the iconic score of the films have become integral components in American society. The film helped launch the science fiction boom of the late 1970s and early 1980s, making science fiction films a blockbuster genre. This impact also made it a prime target for parody works and homages, with popular examples including Spaceballs, Family Guy's 'Blue Harvest' special, Seth Green's 'Robot Chicken: Star Wars', Steve Oedekerk's 'Thumb Wars', and Lucas's self-proclaimed favorite parody, Hardware Wars by Ernie Fosselius.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cultural_impact_of_Star_Wars"
            },
            "Q540672": {
                "name": "Auburn University",
                "wikidata_aliases": "[\"AU\",\"AUM\",\"Auburn College\",\"Alabama Polytechnic Institute\",\"auburn.edu\"]",
                "wikidata_summary": "public university in Auburn, Alabama, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q540672",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q54289": {
                "name": "Mandalorians",
                "wikidata_aliases": "[\"Mandalorian\"]",
                "wikidata_summary": "fictional multi-species warrior people in the Star Wars universe.",
                "wikidata_url": "https://www.wikidata.org/wiki/Q54289",
                "wikipedia_summary": "Mandalorians are a fictional group of people associated with the planet Mandalore in the Star Wars universe and franchise created by Joe Johnston and George Lucas. Their appearance is often distinguished by gear such as battle helmets, armor, and jetpacks.\nFirst conceptualized for The Empire Strikes Back as a group of white-armored 'supercommandos', the idea developed into a single bounty hunter character, Boba Fett. Although Fett was not identified as a Mandalorian in the film, his popularity inspired an extensive inquisition into Mandalorians in future Star Wars media, including novels, comics, television series, and video games.The Star Wars Expanded Universe and the television series The Clone Wars, Rebels, and The Mandalorian expanded upon Mandalorian lore with the introduction of additional characters, and established the Mandalorians not as an 'alien race or species', but a distinct ideology of humans and various aliens from Mandalore and nearby worlds united by a common creed with a stoic, spartan warrior tradition.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mandalorians"
            },
            "Q54557330": {
                "name": "Tri-County Humane Society",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American nonprofit organization",
                "wikidata_url": "https://www.wikidata.org/wiki/Q54557330",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q54958752": {
                "name": "Disney+",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American video streaming service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q54958752",
                "wikipedia_summary": "Disney+ is an American subscription video on-demand over-the-top streaming media service owned and operated by Disney Streaming, the streaming division of Disney Entertainment, a major business segment of the Walt Disney Company. The service primarily distributes films and television shows produced by Walt Disney Studios and Disney Television Studios, with dedicated content hubs for Disney's flagship brands; Disney, Pixar, Marvel, Star Wars, National Geographic, Star (international only) and Hulu (US only), as well as showcasing original and exclusive films and television shows.\nDisney+ relies on technology developed by Disney Streaming, which was originally established as BAMTech in 2015 when it was spun off from MLB Advanced Media (MLBAM). Disney increased its ownership share of BAMTech to a controlling stake in 2017 and subsequently transferred ownership to Walt Disney Direct-to-Consumer & International, as part of a corporate restructuring in anticipation of Disney's acquisition of 21st Century Fox, through which the Star brand was inherited and got retooled as a content platform within the service in some regions, with Latin America having its own standalone service, Star+.\nWith BAMTech helping to launch ESPN+ in early 2018, and Disney's streaming distribution deal with Netflix ending in 2019, Disney took the opportunity to use technologies being developed for ESPN+ to establish a Disney-branded streaming service that would feature its content. Production of films and television shows for exclusive release on the platform began in late 2017.\nDisney+ was launched on November 12, 2019, in the United States, Canada, and the Netherlands, and expanded to Australia, New Zealand, and Puerto Rico a week later. It became available in select European countries in March 2020 and in India in April through Star India's Hotstar streaming service, which was rebranded as Disney+ Hotstar. Additional European countries received Disney+ in September 2020, with the service expanding to Latin America in November 2020. It later expanded in Southeast Asian countries since 2021, followed by countries in Northern and Eastern Europe, Middle East, and parts of Africa since May 2022.\nUpon launch, it was met with positive reception of its content library, but was criticized for technical problems and missing content. Alterations made to films and television shows also attracted media attention. Ten million users had subscribed to Disney+ by the end of its first day of operation.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Disney%2B"
            },
            "Q55216": {
                "name": "Lego Star Wars",
                "wikidata_aliases": "[\"LEGO Star Wars: The Video Game\",\"Lego Star Wars\",\"LEGO Star Wars\",\"Lego Star Wars (video game)\",\"LEGO Star Wars (video game)\"]",
                "wikidata_summary": "2005 video game",
                "wikidata_url": "https://www.wikidata.org/wiki/Q55216",
                "wikipedia_summary": "Lego Star Wars (stylized as LEGO Star Wars) is a Lego theme based on the Star Wars media franchise created by George Lucas. It includes over 928 Lego building toy sets, 1389 Lego minifigures, an eponymous video game series containing six games, and multiple animated short films and television series.\nOriginally it was only licensed from 1999 to 2008, but The Lego Group extended the license with Lucasfilm, first until 2011, then until 2016, then again until 2022, and then once more until 2032.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lego_Star_Wars"
            },
            "Q55760188": {
                "name": "Marc Bernardin",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American journalist, writer and podcaster",
                "wikidata_url": "https://www.wikidata.org/wiki/Q55760188",
                "wikipedia_summary": "Marc Bernardin (born November 29, 1971) is an American journalist, public speaker, TV and comic book writer, and podcaster.  He has served as film editor for the Los Angeles Times and senior editor for The Hollywood Reporter and Entertainment Weekly.  He has written for GQ, Wired, Details, Vulture, Playboy, and Empire. He has been a staff writer for Castle Rock, Treadstone and Carnival Row, and is currently a supervising producer on Star Trek: Picard.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Marc_Bernardin"
            },
            "Q5614101": {
                "name": "Michael Culver",
                "wikidata_aliases": "[]",
                "wikidata_summary": "English actor (1938-)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5614101",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q56166733": {
                "name": "Peter P. Marra",
                "wikidata_aliases": "[\"Peter P Marra\",\"Peter Marra\",\"P P Marra\",\"P. P. Marra\",\"P.P. Marra\",\"Peter Philip Marra\"]",
                "wikidata_summary": "ecologist, biologist, scientist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q56166733",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q56297455": {
                "name": "self doubt",
                "wikidata_aliases": "[]",
                "wikidata_summary": "når man tviler på seg selv",
                "wikidata_url": "https://www.wikidata.org/wiki/Q56297455",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q5633421": {
                "name": "Scientific journal",
                "wikidata_aliases": "[\"scientific magazine\",\"journal\",\"science journal\",\"scientific journals\",\"journals\"]",
                "wikidata_summary": "periodical journal publishing scientific research",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5633421",
                "wikipedia_summary": "In academic publishing, scientific journal is a periodical publication designed to further the progress of science by disseminating new research findings to the scientific community. These journals serve as a platform for researchers, scholars, and scientists to share their latest discoveries, insights, and methodologies across a multitude of scientific disciplines. Unlike professional or trade magazines, scientific journals are characterized by their rigorous peer-review process, which aims to ensure the validity, reliability, and quality of the published content. With origins dating back to the 17th century, the publication of scientific journals has evolved significantly, playing a pivotal role in the advancement of scientific knowledge, fostering academic discourse, and facilitating collaboration within the scientific community.As of 2012, it is estimated that over 28,100 active scientific journals are in publication, covering a broad spectrum of disciplines from the general sciences, as seen in journals like Science and Nature, to highly specialized fields. These journals primarily publish peer-reviewed articles, including original research, review articles, and perspectives, each serving distinct purposes within the academic landscape. The advent of electronic publishing has further expanded the reach and accessibility of scientific journals, enabling more efficient dissemination and retrieval of information, while also addressing challenges related to cost and copyright.Scientific journals not only contribute to the dissemination and archival of scientific knowledge but also play a critical role in the academic and research careers of scientists. They are instrumental in keeping researchers informed about the latest developments in their field, supporting the integrity of research through reproducibility and replicability, and influencing the direction of future research endeavors.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Scientific_journal"
            },
            "Q56865900": {
                "name": "The Face Vietnam, season 3",
                "wikidata_aliases": "[\"Season 3\"]",
                "wikidata_summary": "season of television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q56865900",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q568723": {
                "name": "MASSIVE",
                "wikidata_aliases": "[]",
                "wikidata_summary": "software package for generating crowd-related visual effects for film and television",
                "wikidata_url": "https://www.wikidata.org/wiki/Q568723",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q56876444": {
                "name": "The Mandalorian",
                "wikidata_aliases": "[\"Mandalorian\"]",
                "wikidata_summary": "American space opera streaming television series from 2019",
                "wikidata_url": "https://www.wikidata.org/wiki/Q56876444",
                "wikipedia_summary": "The Mandalorian is an American space Western television series created by Jon Favreau for the streaming service Disney+. It is the first live-action series in the Star Wars franchise and begins five years after the events of the film Return of the Jedi (1983). It follows a lone bounty hunter who protects a Force-sensitive child, Grogu, from remnant Imperial forces.\nPedro Pascal stars as the title character, with Katee Sackhoff co-starring in the third season. Star Wars creator George Lucas had begun developing a live-action Star Wars television series by 2009, but it was deemed too expensive to produce. He sold Lucasfilm to Disney in October 2012, and work on a new Star Wars series began for Disney+. Favreau signed on as writer and showrunner in March 2018. He executive produces alongside Dave Filoni, Kathleen Kennedy, and Colin Wilson; Rick Famuyiwa joined them for the third season. The title was announced in October 2018 when filming started at Manhattan Beach Studios in California. Visual effects company Industrial Light & Magic developed the StageCraft technology for the series, displaying digital backgrounds on a 360-degree video wall. This has since been adopted by other film and television productions.\nThe Mandalorian premiered with the launch of Disney+ on November 12, 2019. The rest of the first season was released through December 27. A second season was released from October to December 2020, and a third season was released from March to April 2023. The series has received largely positive reviews from critics and several accolades, including Primetime Creative Arts Emmy Award wins for all three seasons. A feature film, The Mandalorian & Grogu, is being directed by Favreau and is scheduled for release in May 2026. A fourth season of the series had been in development, but it is unclear if it will proceed following the announcement of the film. Interconnected spin-off series The Book of Boba Fett, Ahsoka, and Skeleton Crew expand on The Mandalorian's timeframe, with an untitled feature film directed by Filoni set to serve as a conclusion to the interconnected stories.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Mandalorian"
            },
            "Q573880": {
                "name": "Nature Communications",
                "wikidata_aliases": "[\"Nat Commun\",\"Nature communications\"]",
                "wikidata_summary": "scientific journal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q573880",
                "wikipedia_summary": "Nature Communications is a peer-reviewed, open access, scientific journal published by Nature Portfolio since 2010. It is a multidisciplinary journal that covers the natural sciences, including physics, chemistry, earth sciences, medicine, and biology. The journal has editorial offices in London, Berlin, New York City, and Shanghai.\nThe founding editor-in-chief was Lesley Anson, followed by Joerg Heber, Magdalena Skipper, and Elisa De Ranieri. As of 2022, the editors are Nathalie Le Bot for health and clinical sciences, Stephane Larochelle for biological sciences, Enda Bergin for chemistry and biotechnology, and Prabhjot Saini for physics and earth sciences.\nStarting October 2014, the journal only accepted submissions from authors willing to pay an article processing charge. Until the end of 2015, part of the published submissions were only available to subscribers. In January 2016, all content became freely accessible.Starting from 2017, the journal offers a deposition service to authors for preprints of articles 'under consideration' as part of the submission process.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Nature_Communications"
            },
            "Q5772961": {
                "name": "Hissing",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Korean manhwa series by Kang EunYoung",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5772961",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60": {
                "name": "New York City",
                "wikidata_aliases": "[\"NYC\",\"the five boroughs\",\"Big Apple\",\"City of New York\",\"NY City\",\"New York, New York\",\"New York City, New York\",\"New York, NY\",\"New York City, NY\",\"Caput Mundi\",\"The City So Nice They Named It Twice\",\"Capital of the World\",\"New York\",\"New York City (NYC)\",\"New York (city)\",\"city of New York\",\"Center of the Universe\",\"New York City, USA\",\"N.Y.C.\",\"UN/LOCODE:USNYC\",\"New York City, United States of America\",\"New York, New York, USA\",\"New York (NY)\",\"New York, N.Y.\",\"NY, NY\",\"N. Y. C.\",\"New York City, United States\",\"N. Y., N. Y.\",\"New York City, New York, United States\"]",
                "wikidata_summary": "most populous city in the United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60186259": {
                "name": "Dog and Cat Meat Trade Prohibition Act of 2018",
                "wikidata_aliases": "[]",
                "wikidata_summary": "federal law banning the dog and cat meat trade in the United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60186259",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60462126": {
                "name": "Last Year",
                "wikidata_aliases": "[\"Last Year: The Nightmare\",\"Forest Hills: The Last Year\"]",
                "wikidata_summary": "2018 asymmetric horror video game",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60462126",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q6074": {
                "name": "Star Wars: The Force Awakens",
                "wikidata_aliases": "[\"TFA\",\"The Force Awakens\",\"Force Awakens\",\"Star Wars: Episode VII – The Force Awakens\",\"Star Wars: TFA\",\"Star Wars: Episode VII\",\"Star Wars: Episode 7\",\"Star Wars VII\",\"Star Wars 7\",\"Star Wars: The Force Awakens\"]",
                "wikidata_summary": "2015 film directed by J. J. Abrams",
                "wikidata_url": "https://www.wikidata.org/wiki/Q6074",
                "wikipedia_summary": "Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American epic space opera film co-produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi (1983), it is the seventh film in the 'Skywalker Saga'. Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire. The ensemble cast includes Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow.\nWork on a seventh entry in the 'Skywalker Saga' commenced after the Walt Disney Company's acquisition of Lucasfilm in 2012. The film is the first Star Wars film to not extensively involve franchise creator George Lucas, who only served as a creative consultant in the early stages of production. The Force Awakens was produced by Abrams, his longtime collaborator Bryan Burk, and Lucasfilm president Kathleen Kennedy. Abrams and Lawrence Kasdan, co-writer of the original trilogy films The Empire Strikes Back (1980) and Return of the Jedi, rewrote an initial script by Michael Arndt. John Williams, composer for the previous episodic films, returned to compose the score. Principal photography began in April 2014 and concluded the following November. Filming took place on sets at Pinewood Studios in England, and on location mainly in Abu Dhabi, Iceland, and Ireland. On a budget of $447 million, it is the most expensive film ever made.\nThe Force Awakens premiered in Hollywood, Los Angeles, on December 14, 2015, and was released in the United States on December 18. It was positively received by critics, who found it an action-packed film with the mix of new and familiar actors capturing the nostalgia of the original trilogy and giving the franchise new energy. The film grossed $2.07 billion worldwide, breaking various box office records and becoming the highest-grossing film in the United States and Canada, the highest-grossing film of 2015, and the third-highest-grossing film at the time of its release. It was nominated for five awards at the 88th Academy Awards and received numerous other accolades. The film was followed by The Last Jedi (2017) and The Rise of Skywalker (2019), rounding out the Star Wars sequel trilogy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens"
            },
            "Q61": {
                "name": "Washington, D.C.",
                "wikidata_aliases": "[\"Washington, District of Columbia\",\"Washington D.C.\",\"D.C.\",\"Washington, D. C.\",\"Washington\",\"Washington DC\",\"Washington, DC\",\"Washington, D.C., U.S.\",\"D.C. Washington\",\"The District\",\"District of Columbia\",\"US-DC\",\"DC\"]",
                "wikidata_summary": "capital city of the United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q61",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q622664": {
                "name": "University of California",
                "wikidata_aliases": "[\"UCSD\",\"UC San Diego\",\"UCSanDiego\",\"University of California at San Diego\",\"University of California San Diego\",\"University of California\",\"U.C.S.D.\",\"ucsd.edu\",\"Univ. of California, La Jolla\"]",
                "wikidata_summary": "public university in La Jolla, California, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q622664",
                "wikipedia_summary": "The University of California (UC) is a public land-grant research university system in the U.S. state of California. Headquartered in Oakland, the system is composed of its ten campuses at Berkeley, Davis, Irvine, Los Angeles, Merced, Riverside, San Diego, San Francisco, Santa Barbara, and Santa Cruz, along with numerous research centers and academic abroad centers. The system is the state's land-grant university. Major publications generally rank most UC campuses as being among the best universities in the world. In 1900, UC was one of the founders of the Association of American Universities and since the 1970s seven of its campuses, in addition to Berkeley, have been admitted to the association. Berkeley, Davis, Santa Cruz, Irvine, Los Angeles, Santa Barbara, and San Diego are considered Public Ivies, making California the state with the most universities in the nation to hold the title. UC campuses have large numbers of distinguished faculty in almost every academic discipline, with UC faculty and researchers having won 71 Nobel Prizes as of 2021.The system's ten campuses have a combined student body of 295,573 students, 25,400 faculty members, 173,300 staff members and over two million living alumni. Its newest campus in Merced opened in fall 2005. Nine campuses enroll both undergraduate and graduate students; one campus, UC San Francisco, enrolls only graduate and professional students in the medical and health sciences. In addition, the University of California College of the Law located in San Francisco is legally affiliated with UC and shares its name but is otherwise autonomous. Under the California Master Plan for Higher Education, the University of California is a part of the state's three-system public higher education plan, which also includes the California State University system and the California Community Colleges system. UC is governed by a Board of Regents whose autonomy from the rest of the state government is protected by the state constitution. The University of California also manages or co-manages three national laboratories for the U.S. Department of Energy: Lawrence Berkeley National Laboratory (LBNL), Lawrence Livermore National Laboratory (LLNL), and Los Alamos National Laboratory (LANL).The University of California was founded on March 23, 1868, and operated in Oakland, where it absorbed the assets of the College of California before moving to Berkeley in 1873. It also affiliated with independent medical and law schools in San Francisco. Over the next eight decades, several branch locations and satellite programs were established across the state. In March 1951, the University of California began to reorganize itself into something distinct from its campus in Berkeley, with UC President Robert Gordon Sproul staying in place as chief executive of the UC system, while Clark Kerr became Berkeley's first chancellor and Raymond B. Allen became the first chancellor of UCLA. However, the 1951 reorganization was stalled by resistance from Sproul and his allies, and it was not until Kerr succeeded Sproul as UC president that UC was able to evolve into a university system from 1957 to 1960. At that time, chancellors were appointed for additional campuses and each was granted some degree of greater autonomy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/University_of_California"
            },
            "Q630866": {
                "name": "Arby's",
                "wikidata_aliases": "[\"Arbys\"]",
                "wikidata_summary": "American fast food restaurant chain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q630866",
                "wikipedia_summary": "Arby's is an American fast food sandwich restaurant chain with more than 3,300 restaurants. The flagship property of Inspire Brands, it ranked third in systemwide sales in the United States in the quick-service and fast-casual restaurant industries in 2012, behind Subway and Panera Bread. In October 2017, Food & Wine called Arby's 'America's second largest sandwich chain (after Subway)'.Roark Capital Group acquired 81.5% of Arby's Restaurant Group in July 2011 and is now a majority-owner of Inspire Brands. The Wendy's Company held a minority stake of 18.5% in Arby's after the acquisition by Roark Capital; that share was reduced to 12.3% upon the purchase of Buffalo Wild Wings, and was sold back to Inspire Brands on August 16, 2018, for $450 million, a 38 percent premium.Arby's is best known for selling roast beef sandwiches. Other menu items the chain is known for include gyros, wraps, chicken sandwiches, and milkshakes. Its headquarters are in Sandy Springs, Georgia, a suburb of Atlanta which uses Atlanta mailing addresses.\nIn 2019, there were 3,472 restaurants. There are locations in seven countries outside the United States: Canada, Costa Rica, Egypt, Mexico, Saudi Arabia, South Korea and Turkey.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Arby%27s"
            },
            "Q636188": {
                "name": "Ray",
                "wikidata_aliases": "[\"Rhages\",\"Rayy\",\"al-Rayy\",\"Ray, Iran\",\"Rey\"]",
                "wikidata_summary": "city in Tehran Province, Iran",
                "wikidata_url": "https://www.wikidata.org/wiki/Q636188",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q65": {
                "name": "Los Angeles",
                "wikidata_aliases": "[\"Los Angeles, California\",\"Pink City\",\"The town of Our Lady the Queen of the Angels of the Little Portion\",\"La La Land\",\"Tinsel Town\",\"City of Angels\",\"City of Los Angeles\",\"LA, California\",\"L.A.\",\"LA\",\"Double Dubuque\",\"Los Ángeles\",\"Los Angeles, CA\",\"L.A\"]",
                "wikidata_summary": "largest city in California, United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q65",
                "wikipedia_summary": "Los Angeles, often referred to by its initials L.A., is the most populous city in the U.S. state of California. With roughly 3.9 million residents within the city limits as of 2020, Los Angeles is the second-most populous city in the United States, behind only New York City; it is also the commercial, financial and cultural center of Southern California. Los Angeles has a Mediterranean climate, an ethnically and culturally diverse population, and is the principal city of a metropolitan area of 13.2 million people. Greater Los Angeles, which includes the Los Angeles and Riverside–San Bernardino metropolitan areas, is a sprawling metropolis of over 18 million residents.\nThe majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2), and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022. It is the fourth-most visited city in the U.S. with over 2.7 million visitors as of 2022.The area that became Los Angeles was originally inhabited by the indigenous Tongva people and later claimed by Juan Rodríguez Cabrillo for Spain in 1542. The city was founded on September 4, 1781, under Spanish governor Felipe de Neve, on the village of Yaanga. It became a part of Mexico in 1821 following the Mexican War of Independence. In 1848, at the end of the Mexican–American War, Los Angeles and the rest of California were purchased as part of the Treaty of Guadalupe Hidalgo and became part of the United States. Los Angeles was incorporated as a municipality on April 4, 1850, five months before California achieved statehood. The discovery of oil in the 1890s brought rapid growth to the city. The city was further expanded with the completion of the Los Angeles Aqueduct in 1913, which delivers water from Eastern California.\nLos Angeles has a diverse economy with a broad range of industries. Los Angeles is best known as the home of the Hollywood film industry, the world's largest by revenue; the city was an important site in the history of film. It also has one of the busiest container ports in the Americas. In 2018, the Los Angeles metropolitan area had a gross metropolitan product of over $1.0 trillion, making it the city with the third-largest GDP in the world, after New York and Tokyo. Los Angeles hosted the Summer Olympics in 1932 and 1984, and will also host in 2028. More recently, statewide droughts in California have strained both the city's and Los Angeles County's water security.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Los_Angeles"
            },
            "Q65030437": {
                "name": "Frankenstein",
                "wikidata_aliases": "[\"Dr. Frankenstein\",\"Frankenstein UV\",\"Funkmaster Frankenstein\",\"Frank Fallico\",\"Frankie Ano\",\"Francesco Fallico\"]",
                "wikidata_summary": "Rapper, producer & remixer from T-Dot (Toronto), Canada",
                "wikidata_url": "https://www.wikidata.org/wiki/Q65030437",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q65090123": {
                "name": "List of Star Wars television series",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q65090123",
                "wikipedia_summary": "The Star Wars franchise has spawned multiple films and television series. Two animated series were released in the mid-1980s. Further animated series began to be released in the 2000s, the first two of which focused on the prequel trilogy-era Clone Wars. After Disney's acquisition of Lucasfilm, only The Clone Wars was kept in the canon of continuity of the episodic Star Wars films. Two additional half-hour animated series were created: Rebels, which ties into the original trilogy, and Resistance, which ties into the sequel trilogy. An additional spin-off series from The Clone Wars, titled The Bad Batch, debuted on Disney+ in 2021. Two animated anthology series have been produced: Visions in 2021 and Star Wars: Tales, with Tales of the Jedi in 2022 and Tales of the Empire in 2024. The first young audience animated series, Young Jedi Adventures, set during the High Republic era, premiered in May 2023.\nThe first live-action series in the franchise, The Mandalorian, premiered on Disney+ in November 2019 and spawned two spin-offs set in the same timeline, The Book of Boba Fett and Ahsoka, as well as another set around the same era, Skeleton Crew. Additional live-action series include Obi-Wan Kenobi, Andor, and The Acolyte.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_Star_Wars_television_series"
            },
            "Q66707670": {
                "name": "Master & Apprentice",
                "wikidata_aliases": "[\"Master and Apprentice\"]",
                "wikidata_summary": "Star Wars novel by Claudia Gray",
                "wikidata_url": "https://www.wikidata.org/wiki/Q66707670",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q67301619": {
                "name": "George E. Mann",
                "wikidata_aliases": "[\"George Mann\",\"GE Mann\"]",
                "wikidata_summary": "researcher",
                "wikidata_url": "https://www.wikidata.org/wiki/Q67301619",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q6825283": {
                "name": "Metropolitan Transit Commission",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia disambiguation page",
                "wikidata_url": "https://www.wikidata.org/wiki/Q6825283",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q69307189": {
                "name": "June 4, 2024",
                "wikidata_aliases": "[\"4 June 2024\",\"2024-06-04\"]",
                "wikidata_summary": "date in Gregorian calendar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q69307189",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7021239": {
                "name": "Nextdoor",
                "wikidata_aliases": "[\"nextdoor.com\",\"Nextdoor, Inc.\"]",
                "wikidata_summary": "social networking service for neighborhoods",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7021239",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7093850": {
                "name": "Ongoing series",
                "wikidata_aliases": "[]",
                "wikidata_summary": "comic series format",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7093850",
                "wikipedia_summary": "In comics, an ongoing series is a series that runs indefinitely. This is in contrast to limited series (a series intended to end after a certain number of issues thus limited), a one shot (a comic book which is not a part of an ongoing series), a graphic novel, or a trade paperback. However, a series of graphic novels may be considered ongoing as well. The term may also informally refer to a current or incomplete limited series with a predetermined number of issues.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ongoing_series"
            },
            "Q7162": {
                "name": "genetics",
                "wikidata_aliases": "[\"genetic science\"]",
                "wikidata_summary": "science of genes, heredity, and variation in living organisms",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7162",
                "wikipedia_summary": "Genetics is the study of genes, genetic variation, and heredity in organisms. It is an important branch in biology because heredity is vital to organisms' evolution. Gregor Mendel, a Moravian Augustinian friar working in the 19th century in Brno, was the first to study genetics scientifically. Mendel studied 'trait inheritance', patterns in the way traits are handed down from parents to offspring over time. He observed that organisms (pea plants) inherit traits by way of discrete 'units of inheritance'. This term, still used today, is a somewhat ambiguous definition of what is referred to as a gene.\nTrait inheritance and molecular inheritance mechanisms of genes are still primary principles of genetics in the 21st century, but modern genetics has expanded to study the function and behavior of genes. Gene structure and function, variation, and distribution are studied within the context of the cell, the organism (e.g. dominance), and within the context of a population. Genetics has given rise to a number of subfields, including molecular genetics, epigenetics and population genetics. Organisms studied within the broad field span the domains of life (archaea, bacteria, and eukarya).\nGenetic processes work in combination with an organism's environment and experiences to influence development and behavior, often referred to as nature versus nurture. The intracellular or extracellular environment of a living cell or organism may increase or decrease gene transcription. A classic example is two seeds of genetically identical corn, one placed in a temperate climate and one in an arid climate (lacking sufficient waterfall or rain). While the average height of the two corn stalks may be genetically determined to be equal, the one in the arid climate only grows to half the height of the one in the temperate climate due to lack of water and nutrients in its environment.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Genetics"
            },
            "Q7187": {
                "name": "Gene",
                "wikidata_aliases": "[\"genes\"]",
                "wikidata_summary": "basic physical and functional unit of heredity",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7187",
                "wikipedia_summary": "In biology, the word gene (Greek: γένος, génos; generation, or birth, or gender) has two meanings. The Mendelian gene is a basic unit of heredity. The molecular gene is a sequence of nucleotides in DNA, that is transcribed to produce a functional RNA. There are two types of molecular genes: protein-coding genes and non-coding genes.During gene expression, DNA is first copied into RNA. RNA can be directly functional or be the intermediate template for the synthesis of a protein.\nThe transmission of genes to an organism's offspring, is the basis of the inheritance of phenotypic traits from one generation to the next. These genes make up different DNA sequences, together called a genotype, that is specific to every given individual, within the genepool of a population of a given species. The genotype, along with environmental and developmental factors, ultimately determines the phenotype of the individual. Most biological traits occur under the combined influence of polygenes (a set of different genes) and gene–environment interactions. Some genetic traits are instantly visible, such as eye color or the number of limbs, others are not, such as blood type, the risk for specific diseases, or the thousands of basic biochemical processes that constitute life.\nA gene can acquire mutations in its sequence, leading to different variants, known as alleles, in the population. These alleles encode slightly different versions of a gene, which may cause different phenotypical traits. Genes evolve due to natural selection / survival of the fittest and genetic drift of the alleles.\nThe term gene was introduced by Danish botanist, plant physiologist and geneticist Wilhelm Johannsen in 1909. It is inspired by the Ancient Greek: γόνος, gonos, that means offspring and procreation.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Gene"
            },
            "Q7188": {
                "name": "Government",
                "wikidata_aliases": "[\"gov\",\"govt.\",\"gvmnt\"]",
                "wikidata_summary": "system or group of people governing an organized community, often a state",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7188",
                "wikipedia_summary": "A government is the system or group of people governing an organized community, generally a state.\nIn the case of its broad associative definition, government normally consists of legislature, executive, and judiciary. Government is a means by which organizational policies are enforced, as well as a mechanism for determining policy. In many countries, the government has a kind of constitution, a statement of its governing principles and philosophy.\nWhile all types of organizations have governance, the term government is often used more specifically to refer to the approximately 200 independent national governments and subsidiary organizations.\nThe main types of modern  political systems recognized are democracies, totalitarian regimes, and, sitting between these two, authoritarian regimes with a variety of hybrid regimes. Modern classification system also include monarchies as a standalone entity or as a hybrid system of the main three. Historically prevalent forms of government include monarchy, aristocracy, timocracy, oligarchy, democracy, theocracy, and tyranny. These forms are not always mutually exclusive, and mixed governments are common. The main aspect of any philosophy of government is how political power is obtained, with the two main forms being electoral contest and hereditary succession.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Government"
            },
            "Q72": {
                "name": "Zürich",
                "wikidata_aliases": "[\"City of Zurich\",\"Zurich\",\"ZH\",\"Stadt Zürich\",\"Zurich, Switzerland\"]",
                "wikidata_summary": "capital of the canton of Zürich, Switzerland",
                "wikidata_url": "https://www.wikidata.org/wiki/Q72",
                "wikipedia_summary": "Zürich ( ZURE-ik, German: [ˈtsyːrɪç] ; see below) is the largest city in Switzerland and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2023 the municipality had 443,037 inhabitants, the urban area 1.315 million (2009), and the Zürich metropolitan area 1.83 million (2011). Zürich is a hub for railways, roads, and air traffic. Both Zurich Airport and Zürich's main railway station are the largest and busiest in the country.\nPermanently settled for over 2,000 years, Zürich was founded by the Romans, who called it Turicum. However, early settlements have been found dating back more than 6,400 years (although this only indicates human presence in the area and not the presence of a town that early). During the Middle Ages, Zürich gained the independent and privileged status of imperial immediacy and, in 1519, became a primary centre of the Protestant Reformation in Europe under the leadership of Huldrych Zwingli.The official language of Zürich is German, but the main spoken language is Zürich German, the local variant of the Alemannic Swiss German dialect.\nMany museums and art galleries can be found in the city, including the Swiss National Museum and Kunsthaus. Schauspielhaus Zürich is generally considered to be one of the most important theatres in the German-speaking world.As one of Switzerland's primary financial centres, Zürich is home to many financial institutions and banking companies.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Z%C3%BCrich"
            },
            "Q724351": {
                "name": "asexuality",
                "wikidata_aliases": "[\"nonsexuality\",\"asexual\",\"ace\",\"aces\"]",
                "wikidata_summary": "sexual orientation where there is a absence of sexual attraction to anyone",
                "wikidata_url": "https://www.wikidata.org/wiki/Q724351",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q729": {
                "name": "Animal",
                "wikidata_aliases": "[\"Animalia\",\"Metazoa\",\"animals\",\"the animal kingdom\"]",
                "wikidata_summary": "kingdom of multicellular eukaryotic organisms",
                "wikidata_url": "https://www.wikidata.org/wiki/Q729",
                "wikipedia_summary": "Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, have myocytes and are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Animals form a clade, meaning they arose from a single common ancestor.\nOver 1.5 million living animal species have been described—of which around 1.05 million are insects, over 85,000 are molluscs, and around 65,000 are vertebrates. It has been estimated there are as many as 7.77 million animal species on Earth. Animal body lengths range from 8.5 μm (0.00033 in) to 33.6 m (110 ft). They have complex ecologies and interactions with each other and their environments, forming intricate food webs. The scientific study of animals is known as zoology, and the study of animal behaviors is known as ethology.\nMost living animal species belong to the infrakingdom Bilateria, a highly proliferative clade whose members have a bilaterally symmetric body plan. Extant bilaterians include the basal group Xenacoelomorpha, but the vast majority belong to two large superphyla: the protostomes, which includes organisms such as the arthropods, molluscs, flatworms, annelids and nematodes; and the deuterostomes, which include the echinoderms, hemichordates and chordates, the latter of which contains the vertebrates. \nAnimals first appear in the fossil record in the late Cryogenian period, and diversified in the subsequent Ediacaran. Earlier evidence of animals is still controversial; the sponge-like organism Otavia has been dated all the way back to the Tonian period, but its identity as an animal is heavily contested. Nearly all modern animal phyla became clearly established in the fossil record as marine species during the Cambrian explosion, which began around 539 million years ago (Mya), and most classes during the Ordovician radiation 485.4 Mya. 6,331 groups of genes common to all living animals have been identified; these may have arisen from a single common ancestor that lived about 650 Mya during the Cryogenian period.\nHistorically, Aristotle divided animals into those with blood and those without. Carl Linnaeus created the first hierarchical biological classification for animals in 1758 with his Systema Naturae, which Jean-Baptiste Lamarck expanded into 14 phyla by 1809. In 1874, Ernst Haeckel divided the animal kingdom into the multicellular Metazoa (now synonymous with Animalia) and the Protozoa, single-celled organisms no longer considered animals. In modern times, the biological classification of animals relies on advanced techniques, such as molecular phylogenetics, which are effective at demonstrating the evolutionary relationships between taxa.\nHumans make use of many other animal species for food (including meat, eggs and dairies), for materials (such as leather, fur and wool), as pets and as working animals for transportation, and services. Dogs, the first domesticated animal, have been used in hunting, in security and in warfare, as have horses, pigeons and birds of prey, while other terrestrial and aquatic animals are hunted for sports, trophies or profits. Non-human animals are also an important cultural element of human evolution, having appeared in cave arts and totems since the earliest times, and are frequently featured in mythology, religion, arts, literature, heraldry, politics and sports.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Animal"
            },
            "Q732413": {
                "name": "Ester",
                "wikidata_aliases": "[\"Ester\"]",
                "wikidata_summary": "Biblical Jewish queen of Persia and Medes (Book of Esther)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q732413",
                "wikipedia_summary": "In chemistry, an ester is a compound derived from an acid (organic or inorganic) in which the hydrogen atom (H) of at least one acidic hydroxyl group (−OH) of that acid is replaced by an organyl group (−R). Analogues derived from oxygen replaced by other chalcogens belong to the ester category as well. According to some authors, organyl derivatives of acidic hydrogen of other acids are esters as well (e.g. amides), but not according to the IUPAC.Glycerides are fatty acid esters of glycerol; they are important in biology, being one of the main classes of lipids and comprising the bulk of animal fats and vegetable oils. Lactones are cyclic carboxylic esters; naturally occurring lactones are mainly 5- and 6-membered ring lactones. Lactones contribute to the aroma of fruits, butter, cheese, vegetables like celery and other foods.\nEsters can be formed from oxoacids (e.g. esters of acetic acid, carbonic acid, sulfuric acid, phosphoric acid, nitric acid, xanthic acid), but also from acids that do not contain oxygen (e.g. esters of thiocyanic acid and trithiocarbonic acid). An example of an ester formation is the substitution reaction between a carboxylic acid (R−C(=O)−OH) and an alcohol (R'−OH), forming an ester (R−C(=O)−O−R'), where R stands for any group (typically hydrogen or organyl) and R′ stands for organyl group.\nOrganyl esters of carboxylic acids typically have a pleasant smell; those of low molecular weight are commonly used as fragrances and are found in essential oils and pheromones. They perform as high-grade solvents for a broad array of plastics, plasticizers, resins, and lacquers, and are one of the largest classes of synthetic lubricants on the commercial market. Polyesters are important plastics, with monomers linked by ester moieties. Esters of phosphoric acid form the backbone of DNA molecules. Esters of nitric acid, such as nitroglycerin, are known for their explosive properties.\nThere are compounds in which an acidic hydrogen of acids mentioned in this article are not replaced by an organyl, but by some other group. According to some authors, those compounds are esters as well, especially when the first carbon atom of the organyl group replacing acidic hydrogen, is replaced by another atom from the group 14 elements (Si, Ge, Sn, Pb); for example, according to them, trimethylstannyl acetate (or trimethyltin acetate) CH3COOSn(CH3)3 is a trimethylstannyl ester of acetic acid, and dibutyltin dilaurate (CH3(CH2)10COO)2Sn((CH2)3CH3)2 is a dibutylstannylene ester of lauric acid, and the Phillips catalyst CrO2(OSi(OCH3)3)2 is a trimethoxysilyl ester of chromic acid (H2CrO4).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ester"
            },
            "Q737498": {
                "name": "academic journal",
                "wikidata_aliases": "[\"scholarly journal\",\"journal\",\"learned journal\",\"academic review\",\"peer-reviewed journal\",\"refereed journal\"]",
                "wikidata_summary": "peer-reviewed periodical relating to an academic discipline",
                "wikidata_url": "https://www.wikidata.org/wiki/Q737498",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q739711": {
                "name": "Epic Games",
                "wikidata_aliases": "[\"Epic MegaGames, Inc.\",\"Epic Games, Inc.\",\"Potomac Computer Systems\",\"Epic Games Inc.\",\"Epic MegaGames\",\"Epic\"]",
                "wikidata_summary": "American video game and software developer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q739711",
                "wikipedia_summary": "Epic Games, Inc. is an American video game and software developer and publisher based in Cary, North Carolina. The company was founded by Tim Sweeney as Potomac Computer Systems in 1991, originally located in his parents' house in Potomac, Maryland. Following its first commercial video game release, ZZT (1991), the company became Epic MegaGames, Inc. in early 1992 and brought on Mark Rein, who has been its vice president since. After moving the headquarters to Cary in 1999, the studio changed its name to Epic Games.\nEpic Games developed Unreal Engine, a commercially available game engine which also powers its internally developed video games like Fortnite and the Unreal, Gears of War, and Infinity Blade series. In 2014, Unreal Engine was named the 'most successful videogame engine' by Guinness World Records.Epic Games owns the game developers  Psyonix, Mediatonic, and Harmonix, and operates studios in multiple locations around the world. While Sweeney remains the controlling shareholder, Tencent acquired a 48.4% outstanding stake, equating to 40% of total Epic, in the company in 2012, as part of an agreement aimed at moving Epic towards a games as a service model. Following the release of the popular Fortnite Battle Royale in 2017, the company gained additional investments that enabled it to expand its Unreal Engine offerings, establish esports events around Fortnite, and launch the Epic Games Store. As of April 2022, the company has a US$32 billion equity valuation.\nOn August 13, 2020, Epic released a version of Fortnite that included a permanent discount on V-bucks across all platforms (except iOS and Android devices) if they purchased directly through Epic, bypassing Apple and Google's storefronts. Both Apple and Google immediately delisted the game for violating the storefronts' terms of service by including their own storefront, which led Epic to file lawsuits against both companies the same day, accusing them of antitrust behavior in how they operate their app stores. While Apple was ultimately victorious in a bench trial in September 2021 and upheld through appeals, Google's actions were found to be monopolistic by a jury trial in December 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Epic_Games"
            },
            "Q7414": {
                "name": "The Walt Disney Company",
                "wikidata_aliases": "[\"Disney\",\"Disney Brothers Cartoon Studio\",\"The Walt Disney Studio\",\"Walt Disney Productions\",\"Walt Disney Company\",\"Walt Disney\"]",
                "wikidata_summary": "American multinational mass media company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7414",
                "wikipedia_summary": "The Walt Disney Company, commonly known as Disney ( DIZ-nee), is an American multinational mass media and entertainment conglomerate that is headquartered at the Walt Disney Studios complex in Burbank, California. Disney was founded on October 16, 1923, by brothers Walt Disney and Roy Disney as Disney Brothers Studio; it also operated under the names Walt Disney Studio and Walt Disney Productions before changing its name to the Walt Disney Company in 1986. In 1928, Disney established itself as a leader in the animation industry with the short film Steamboat Willie. The film used synchronized sound to become the first post-produced sound cartoon, and popularized Mickey Mouse, who became Disney's mascot and corporate icon.\nAfter becoming a major success by the early 1940s, Disney diversified into live-action films, television, and theme parks in the 1950s. However, following Walt Disney's death in 1966, the company's profits, especially in the animation division, began to decline. In 1984, Disney's shareholders voted Michael Eisner as CEO, who led a reversal of the company's decline through a combination of international theme park expansion and the highly successful Disney Renaissance period of animation in the 1990s. In 2005, under new CEO Bob Iger, the company continued to expand into a major entertainment conglomerate with the acquisitions of Marvel Studios, Lucasfilm, and 20th Century Studios. In 2020, Bob Chapek became the head of Disney after Iger's retirement. However, Chapek was ousted in 2022 and Iger was reinstated as CEO.The company is known for its film studio division Walt Disney Studios, which includes Walt Disney Pictures, Walt Disney Animation Studios, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, 20th Century Animation, and Searchlight Pictures. Disney's other main business units include divisions in television, broadcasting, streaming media, theme park resorts, consumer products, publishing, and international operations. Through these divisions, Disney owns and operates the ABC television network; cable television networks such as Disney Channel, ESPN, Freeform, FX, and National Geographic; publishing, merchandising, music, and theater divisions; direct-to-consumer streaming services such as Disney+, Star+, ESPN+, Hulu, and Hotstar; and Disney Experiences, which includes several theme parks, resort hotels, and cruise lines around the world.\nDisney is one of the biggest and best-known companies in the world, and has been ranked number 53 on the 2022 Fortune 500 list of biggest companies in the United States by revenue. In 2023, the company's seat in Forbes Global 2000 was 87. Since its founding, the company has won 135 Academy Awards, 26 of which have been awarded to Walt. The company has been said to have produced some of the greatest films of all time, as well as revolutionizing the theme park industry. The company, which has been public since 1940, trades on the New York Stock Exchange (NYSE) with ticker symbol DIS and has been a component of the Dow Jones Industrial Average since 1991. In August 2020, about two-thirds of the stock was owned by large financial institutions. The company celebrated their 100th anniversary on October 16, 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Walt_Disney_Company"
            },
            "Q7542": {
                "name": "Christopher",
                "wikidata_aliases": "[\"Jamie Starr\",\"Christopher\",\"Alexander Nevermind\",\"The Purple One\",\"Joey Coco\",\"The artist formerly known as Prince\",\"Artist Formerly Known as Prince\",\"Prince Rogers Nelson\",\"TAFKAP\",\"Prince Nelson\",\"Camille\",\"Prince (musician)\"]",
                "wikidata_summary": "American musician (1958–2016)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7542",
                "wikipedia_summary": "Christopher is the English version of a Europe-wide name derived from the Greek name Χριστόφορος (Christophoros or Christoforos). The constituent parts are Χριστός (Christós), 'Christ' or 'Anointed', and φέρειν (phérein), 'to bear'; hence the 'Christ-bearer'.\nAs a given name, 'Christopher' has been in use since the 10th century.\nIn English, Christopher may be abbreviated as 'Chris', 'Topher', and sometimes 'Kit'.\nIt was frequently the most popular male first name in the United Kingdom, having been in the top twenty in England and Wales from the 1940s until 1995, although it has since dropped out of the top 100.  The name is most common in England and not so common in Wales, Scotland, or Ireland.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Christopher"
            },
            "Q7567568": {
                "name": "South Jersey",
                "wikidata_aliases": "[\"southern New Jersey\"]",
                "wikidata_summary": "geographical region of New Jersey",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7567568",
                "wikipedia_summary": "South Jersey comprises the southern portion of the U.S. state of New Jersey. It is located between Pennsylvania and the lower Delaware River to its west, the Atlantic Ocean to its east, Delaware to its south, and Central Jersey or North Jersey to its north, depending on the definition of North Jersey.\nSouth Jersey is part of the Philadelphia metropolitan area, the seventh-largest metropolitan region in the nation with 6.288 million residents in the core metropolitan statistical area and 7.366 million residents in the combined statistical area as of 2020. South Jersey is known for containing the unique ecoregion known as the Pine Barrens, which remains largely undisturbed despite its location within the Northeastern megalopolis. The South Jersey Pine Barrens are the largest remaining example of the Atlantic coastal pine barrens ecosystem.\nBenjamin Franklin called New Jersey 'a barrel tapped at both ends', referencing the Philadelphia influence on South Jersey and the New York City influence on North Jersey. South Jersey may be defined geographically as the area below I-195 that includes the state's lower seven counties: Atlantic, Burlington, Camden, Cape May, Cumberland, Gloucester, and Salem.South Jersey and the wider Philadelphia metropolitan area are situated near the center of the Northeast megalopolis and have become a U.S. East Coast epicenter for logistics and warehouse construction; Salem County, the lower portion of Gloucester County, and the upper portion of Cumberland County additionally serve as residential communities for the petrochemical industry of New Castle County, Delaware. South Jersey shore communities, including Atlantic City and others in Atlantic and Cape May counties, have a distinct economy centered around the tourism industry. Burlington, Camden, and Gloucester counties have several older streetcar towns, and many residents from these three counties commute to Philadelphia, the nation's sixth-most populous city, which is located immediately west of South Jersey across the Delaware River, accessible by the Benjamin Franklin Bridge, Betsy Ross Bridge, Tacony Palmyra Bridge and Walt Whitman Bridge.\nThe designation of South Jersey with a distinct toponym is a colloquialism rather than an administrative definition and reflects geographical and  perceived cultural and other differences between South Jersey and the northern part of the state.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/South_Jersey"
            },
            "Q7601119": {
                "name": "Star Wars Celebration",
                "wikidata_aliases": "[]",
                "wikidata_summary": "fan gathering to celebrate the Star Wars franchise",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7601119",
                "wikipedia_summary": "Star Wars Celebration is a large fan convention held to celebrate the Star Wars franchise. The event is usually held annually (with a few exceptions) in varying locations around the world, and commonly features a host of Star Wars project announcements, panel discussions featuring actors, producers and writers, screenings, exhibits, cosplay and merchandise sales. It began in 1999, when Lucasfilm held the first Star Wars Celebration in Denver, Colorado to celebrate the upcoming release of Star Wars: Episode I – The Phantom Menace.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars_Celebration"
            },
            "Q762266": {
                "name": "City University of New York",
                "wikidata_aliases": "[\"CUNY\",\"The City University of New York\",\"C.U.N.Y.‏\",\"Colleges of the City of New York\",\"cuny.edu\"]",
                "wikidata_summary": "public university system in New York City",
                "wikidata_url": "https://www.wikidata.org/wiki/Q762266",
                "wikipedia_summary": "The City University of New York (CUNY, spoken , KYOO-nee) is the public university system of New York City. It is the largest urban university system in the United States, comprising 25 campuses: eleven senior colleges, seven community colleges, and seven professional institutions. In 1960, John R. Everett became the first chancellor of the Municipal College System of New York City, later known as the City University of New York (CUNY). CUNY, established by New York State legislation in 1961 and signed into law by Governor Nelson Rockefeller, was an amalgamation of existing institutions and a new graduate school.\nThe system was governed by the Board of Higher Education of the City of New York, created in 1926, and later renamed the Board of Trustees of the CUNY in 1979. The institutions merged into CUNY included the Free Academy (later City College of New York), the Female Normal and High School (later Hunter College), Brooklyn College, and Queens College. CUNY has historically provided accessible education, especially to those excluded or unable to afford private universities. The first community college in New York City was established in 1955 with shared funding between the state and the city, but unlike the senior colleges, community college students had to pay tuition.\nThe integration of CUNY's colleges into a single university system took place in 1961, under a chancellor and with state funding. The Graduate Center, serving as the principal doctorate-granting institution, was also established that year. In 1964, Mayor Robert F. Wagner Jr. extended the senior colleges' free tuition policy to community colleges.The 1960s saw student protests demanding more racial diversity and academic representation in CUNY, leading to the establishment of Medgar Evers College and the implementation of the Open Admissions policy in 1970. This policy dramatically increased student diversity but also introduced challenges like low retention rates. The 1976 fiscal crisis ended the free tuition policy, leading to the introduction of tuition fees for all CUNY colleges. The university enrolls more than 275,000 students and counts thirteen Nobel Prize winners and twenty-four MacArthur Fellows among its alumni.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/City_University_of_New_York"
            },
            "Q77001957": {
                "name": "Grogu",
                "wikidata_aliases": "[\"The Child\",\"Baby Yoda\",\"Grogu “The Child”\",\"Din Grogu\"]",
                "wikidata_summary": "character from the Star Wars universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q77001957",
                "wikipedia_summary": "Din Grogu (), colloquially referred to as Baby Yoda, is a character from the Star Wars Disney+ original television series The Mandalorian and The Book of Boba Fett. He is a toddler member of the same species as the Star Wars characters Yoda and Yaddle, with whom he shares a strong ability in the Force. In the series, the protagonist known as 'the Mandalorian' is hired to track down and capture Grogu for a remnant of the fallen Galactic Empire, but instead, he becomes his adoptive father and protects him from the Imperials. The character's real name was not revealed until 'Chapter 13: The Jedi', which also explained that Grogu was raised at the Jedi Temple on Coruscant during the Clone Wars. Before this, the character's official name, used in subtitles and captions, was 'the Child'. At the end of 'Chapter 24: The Return', he is given the name Din Grogu after being formally adopted by the Mandalorian, whose family name is 'Din'.\nGrogu has appeared in every episode of the first three seasons, except 'Chapter 15: The Believer'. He was created by The Mandalorian creator and showrunner Jon Favreau based upon his desire to explore the mystery around Yoda and his species. The character was further developed in early conversations between Favreau and executive producer Dave Filoni, and the character's imagery was defined by concept artist Christian Alzmann. Grogu is mostly a work of animatronics and puppetry, although accentuated with computer-generated imagery.\nThe puppet was designed by Legacy Effects.  Actor Adam Pally has stated that showrunner Jon Favreau told him it cost about $5 million to make. It is controlled by two technicians, one who operates the eyes and mouth and another who controls other facial expressions. The character's voice and sounds were created using a combination of adult and infant vocals, as well as recordings of a bat-eared fox and kinkajou.  The dynamic between the Mandalorian and Grogu embodies a theme of parenting and fatherhood prevalent in The Mandalorian, with the character also raising questions about good and evil and nature versus nurture in the series.\nGrogu has received a positive reception from fans and reviewers, is widely considered the show's breakout character, and quickly became a popular Internet meme. The Guardian called him '2019's biggest new character', and The Hollywood Reporter has said the character 'represents the future of Hollywood'. Many writers have described Grogu as a key part in the success of Disney+. Grogu was kept secret and was deliberately withheld from The Mandalorian's pre-release marketing and merchandise plans to avoid leaks and spoiling Grogu's reveal before the show aired.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Grogu"
            },
            "Q780384": {
                "name": "Crime Spree",
                "wikidata_aliases": "[\"Wanted\"]",
                "wikidata_summary": "2003 film by Brad Mirman",
                "wikidata_url": "https://www.wikidata.org/wiki/Q780384",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7809": {
                "name": "UNESCO",
                "wikidata_aliases": "[\"Unesco\",\"United Nations Educational, Scientific and Cultural Organization\"]",
                "wikidata_summary": "specialised agency of the United Nations for education, sciences, and culture",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7809",
                "wikipedia_summary": "The United Nations Educational, Scientific and Cultural Organization (UNESCO) is a specialized agency of the United Nations (UN) with the aim of promoting world peace and security through international cooperation in education, arts, sciences and culture. It has 194 member states and 12 associate members, as well as partners in the non-governmental, intergovernmental and private sector. Headquartered in Paris, France, UNESCO has 53 regional field offices and 199 national commissions.UNESCO was founded in 1945 as the successor to the League of Nations' International Committee on Intellectual Cooperation. Its constitution establishes the agency's goals, governing structure, and operating framework. UNESCO's founding mission, which was shaped by the events of World War II, is to advance peace, sustainable development and human rights by facilitating collaboration and dialogue among nations. It pursues this objective through five major programme areas: education, natural sciences, social/human sciences, culture and communication/information. UNESCO sponsors projects that improve literacy, provide technical training and education, advance science, protect independent media and press freedom, preserve regional and cultural history, and promote cultural diversity.UNESCO's activities have broadened over the years. It assists in the translation and dissemination of world literature, helps establish and secure World Heritage Sites of cultural and natural importance, works to bridge the worldwide digital divide, and creates inclusive knowledge societies through information and communication. UNESCO has launched several initiatives and global movements, such as Education For All.\nUNESCO is governed by the General Conference composed of member states and associate members, which meets biannually to set the agency's programs and budget. It also elects members of the executive board, which manages UNESCO's work, and appoints every four years a Director-General, who serves as UNESCO's chief administrator. UNESCO is a member of the United Nations Sustainable Development Group, a coalition of UN agencies and organizations aimed at fulfilling the Sustainable Development Goals.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/UNESCO"
            },
            "Q782662": {
                "name": "Michael Gross",
                "wikidata_aliases": "[\"Michael Edward Gross\",\"Michael E. Gross\"]",
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q782662",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7935305": {
                "name": "Viruses",
                "wikidata_aliases": "[]",
                "wikidata_summary": "journal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7935305",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q795052": {
                "name": "Individual",
                "wikidata_aliases": "[\"individuals\",\"individual person\",\"individual organism\"]",
                "wikidata_summary": "individual person or organism",
                "wikidata_url": "https://www.wikidata.org/wiki/Q795052",
                "wikipedia_summary": "An individual is that which exists as a distinct entity. Individuality (or self-hood) is the state or quality of living as an individual; particularly (in the case of humans) of as a person unique from other people and possessing one's own needs or goals, rights and responsibilities. The concept of an individual features in diverse fields, including biology, law, and philosophy. Every individual contributes significantly to the growth of a civilization. Society is a multifaceted concept that is shaped and influenced by a wide range of elements, including human behaviors, attitudes, and ideas. The culture, morals, and beliefs of others as well as the general direction and trajectory of the society can all be influenced and shaped by an individual's activities.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Individual"
            },
            "Q7961148": {
                "name": "Waking",
                "wikidata_aliases": "[]",
                "wikidata_summary": "American alternative rock band",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7961148",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q804558": {
                "name": "Bakumatsu",
                "wikidata_aliases": "[]",
                "wikidata_summary": "final years of the Edo period",
                "wikidata_url": "https://www.wikidata.org/wiki/Q804558",
                "wikipedia_summary": "Bakumatsu (幕末, 'End of the bakufu') was the final years of the Edo period when the Tokugawa shogunate ended. Between 1853 and 1867, under foreign diplomatic and military pressure, Japan ended its isolationist foreign policy known as sakoku and changed from a feudal Tokugawa shogunate to the modern empire of the Meiji government. The major ideological-political divide during this period was between the pro-imperial nationalists called ishin shishi and the shogunate forces, which included the elite shinsengumi swordsmen.\nAlthough these two groups were the most visible powers, many other factions attempted to use the chaos of bakumatsu to seize personal power. Furthermore, there were two other main driving forces for dissent: first, growing resentment on the part of the tozama daimyō (or outside lords), and second, growing anti-Western sentiment following the arrival of Matthew C. Perry. The first related to those lords whose predecessors had fought against Tokugawa forces at the Battle of Sekigahara in 1600, after which they had been permanently excluded from all powerful positions within the shogunate. The second was to be expressed in the phrase sonnō jōi, or 'revere the Emperor, expel the barbarians'. The turning point of the Bakumatsu was during the Boshin War and the Battle of Toba–Fushimi when pro-shogunate forces were defeated.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bakumatsu"
            },
            "Q80702": {
                "name": "Empire",
                "wikidata_aliases": "[\"Imperio español\",\"Monarquía universal Española\",\"Spain\",\"Empire\"]",
                "wikidata_summary": "colonial empire governed by Spain between 1492 and 1976",
                "wikidata_url": "https://www.wikidata.org/wiki/Q80702",
                "wikipedia_summary": "An empire is a political unit made up of several territories and peoples, 'usually created by conquest, and divided between a dominant center and subordinate peripheries'. The center of the empire (sometimes referred to as the metropole) exercises political control over the peripheries. Within an empire, different populations have different sets of rights and are governed differently. Narrowly defined, an empire is a sovereign state whose head of state is an emperor or empress; but not all states with aggregate territory under the rule of supreme authorities are called empires or are ruled by an emperor; nor have all self-described empires been accepted as such by contemporaries and historians (the Central African Empire, and some Anglo-Saxon kingdoms in early England being examples).\nThere have been 'ancient and modern, centralized and decentralized, ultra-brutal and relatively benign' empires. An important distinction has been between land empires made up solely of contiguous territories, such as the Austro-Hungarian Empire or the Russian Empire; and those created by sea-power, which include territories that are remote from the 'home' country of the empire, such as the Carthaginian Empire or the British Empire. Aside from the more formal usage, the word empire can also refer colloquially to a large-scale business enterprise (e.g. a transnational corporation), a political organization controlled by a single individual (a political boss), or a group (political bosses). The concept of empire is associated with other such concepts as imperialism, colonialism, and globalization, with imperialism referring to the creation and maintenance of unequal relationships between nations and not necessarily the policy of a state headed by an emperor or empress. Empire is often used as a term to describe overpowering situations causing displeasure.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Empire"
            },
            "Q80962": {
                "name": "Animal husbandry",
                "wikidata_aliases": "[\"animal management\",\"animal culture\",\"animal farming\",\"animal agriculture\"]",
                "wikidata_summary": "branch of agriculture concerned with animals that are raised for meat, fiber, milk, or other products",
                "wikidata_url": "https://www.wikidata.org/wiki/Q80962",
                "wikipedia_summary": "Animal husbandry is the branch of agriculture concerned with animals that are raised for meat, fibre, milk, or other products. It includes day-to-day care, management, production, nutrition, selective breeding, and the raising of livestock. Husbandry has a long history, starting with the Neolithic Revolution when animals were first domesticated, from around 13,000 BC onwards, predating farming of the first crops. By the time of early civilisations such as ancient Egypt, cattle, sheep, goats, and pigs were being raised on farms.\nMajor changes took place in the Columbian exchange, when Old World livestock were brought to the New World, and then in the British Agricultural Revolution of the 18th century, when livestock breeds like the Dishley Longhorn cattle and Lincoln Longwool sheep were rapidly improved by agriculturalists, such as Robert Bakewell, to yield more meat, milk, and wool. A wide range of other species, such as horse, water buffalo, llama, rabbit, and guinea pig, are used as livestock in some parts of the world. Insect farming, as well as aquaculture of fish, molluscs, and crustaceans, is widespread. Modern animal husbandry relies on production systems adapted to the type of land available. Subsistence farming is being superseded by intensive animal farming in the more developed parts of the world, where, for example, beef cattle are kept in high-density feedlots, and thousands of chickens may be raised in broiler houses or batteries. On poorer soil, such as in uplands, animals are often kept more extensively and may be allowed to roam widely, foraging for themselves. \nMost livestock are herbivores, except for pigs and chickens which are omnivores. Ruminants like cattle and sheep are adapted to feed on grass; they can forage outdoors or may be fed entirely or in part on rations richer in energy and protein, such as pelleted cereals. Pigs and poultry cannot digest the cellulose in forage and require other high-protein foods.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Animal_husbandry"
            },
            "Q83030": {
                "name": "Dementia",
                "wikidata_aliases": "[\"senility\",\"rare dementia\"]",
                "wikidata_summary": "long-term brain disorder causing personality changes and impaired memory, reasoning, and social function",
                "wikidata_url": "https://www.wikidata.org/wiki/Q83030",
                "wikipedia_summary": "Dementia is a syndrome associated with many neurodegenerative diseases (most commonly Alzheimer's), which is characterized by a general decline in cognitive abilities that impacts a person's ability to perform everyday activities. This typically involves problems with memory, thinking, behavior, and motor control. Aside from memory impairment and a disruption in thought patterns, the most common symptoms include emotional problems, difficulties with language, and decreased motivation. The symptoms may be described as occurring in a continuum over several stages. Dementia ultimately has a significant effect on the individual, caregivers, and on social relationships in general. A diagnosis of dementia requires the observation of a change from a person's usual mental functioning and a greater cognitive decline than what is caused by normal aging.Several diseases and injuries to the brain such as a stroke can give rise to dementia. However, the most common cause is Alzheimer's disease, a neurodegenerative disorder. The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5), has re-described dementia as either a mild or major neurocognitive disorder with varying degrees of severity and many causative subtypes. The International Classification of Diseases (ICD-11) also classes dementia as a neurocognitive disorder (NCD) with many forms or subclasses. Dementia is listed as an acquired brain syndrome, marked by a decline in cognitive function, and is contrasted with neurodevelopmental disorders. Dementia is also described as a spectrum of disorders with causative subtypes of dementia based on a known disorder, such as Parkinson's disease, for Parkinson's disease dementia; Huntington's disease, for Huntington's disease dementia; vascular disease, for vascular dementia; HIV infection, causing HIV dementia; frontotemporal lobar degeneration for frontotemporal dementia; or Lewy body disease for dementia with Lewy bodies, and prion diseases. Subtypes of neurodegenerative dementias may also be based on the underlying pathology of misfolded proteins such as synucleinopathies, and tauopathies. More than one type of dementia existing together is known as mixed dementia.Many neurocognitive disorders may be caused by another medical condition or disorder that includes brain tumours, and subdural hematoma; endocrine disorders such as hypothyroidism, and hypoglycemia; nutritional deficiencies including thiamine, and niacin; infections, immune disorders, liver or kidney failure, metabolic disorders such as Kufs disease, and some leukodystrophies, and neurological disorders such as epilepsy, and multiple sclerosis. Some of the neurocognitive deficits may sometimes show improvement with treatment of the medical condition.Diagnosis is usually based on history of the illness and cognitive testing with imaging. Blood tests may be taken to rule out other possible causes that may be reversible, such as hypothyroidism (an underactive thyroid), and to determine the dementia subtype. One commonly used cognitive test is the mini–mental state examination. The greatest risk factor for developing dementia is aging, however dementia is not a normal part of aging. Many people aged 90 and above show no signs of dementia. Several risk factors for dementia, such as smoking and obesity, are preventable by lifestyle changes. Screening the general older population for the disorder is not seen to affect the outcome.Dementia is currently the seventh leading cause of death worldwide and has 10 million new cases reported every year (one every ~3 seconds). There is no known cure for dementia. Acetylcholinesterase inhibitors such as donepezil are often used and may be beneficial in mild to moderate disorder. The overall benefit, however, may be minor. There are many measures that can improve the quality of life of people with dementia and their caregivers. Cognitive and behavioral interventions may be appropriate for treating associated symptoms of depression.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dementia"
            },
            "Q83360": {
                "name": "Thumb",
                "wikidata_aliases": "[]",
                "wikidata_summary": "first finger of the hand",
                "wikidata_url": "https://www.wikidata.org/wiki/Q83360",
                "wikipedia_summary": "The thumb is the first digit of the hand, next to the index finger. When a person is standing in the medical anatomical position (where the palm is facing to the front), the thumb is the outermost digit. The Medical Latin English noun for thumb is pollex (compare hallux for big toe), and the corresponding adjective for thumb is pollical.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Thumb"
            },
            "Q84": {
                "name": "London",
                "wikidata_aliases": "[\"London, UK\",\"London, United Kingdom\",\"London, England\",\"London UK\",\"London U.K.\",\"Greater London\",\"Londinium\",\"Loñ\",\"Lundenwic\",\"Londinio\",\"Londini\",\"Londiniensium\",\"Augusta\",\"Trinovantum\",\"Kaerlud\",\"Karelundein\",\"Lunden\",\"Big Smoke\",\"the Big Smoke\",\"Lundenburh\",\"Lundenburgh\",\"Llyn Dain\",\"Llan Dian\",\"Londinion\",\"Loniniensi\",\"Lon.\",\"Loñ.\",\"Lond.\",\"LDN\"]",
                "wikidata_summary": "capital and largest city of England and the United Kingdom",
                "wikidata_url": "https://www.wikidata.org/wiki/Q84",
                "wikipedia_summary": "London is the capital and largest city of England, and the United Kingdom, with a population of around 8.8 million, and the largest city in Western Europe by metropolitan area, with a population of 14.8 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for nearly two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. In the 19th century, London grew rapidly, becoming the world's largest city at the time, as it expanded and absorbed the neighbouring county of Middlesex, and parts of Surrey and Kent. In 1965 it was combined with parts of Essex and Hertfordshire to create the administrative area of Greater London, which is governed by 33 local authorities and the Greater London Authority.As one of the world's major global cities, London exerts a strong influence on world art, entertainment, fashion, commerce and finance, education, health care, media, science and technology, tourism, transport, and communications. Despite a post-Brexit exodus of stock listings from the London Stock Exchange, London is still Europe's most economically powerful city, and it remains one of the major financial centres in the world. With Europe's largest concentration of higher education institutions, it is home to some of the highest-ranked academic institutions in the world—Imperial College London in natural and applied sciences, the London School of Economics in social sciences, and the comprehensive University College London. London is the most visited city in Europe and has the busiest city airport system in the world. The London Underground is the oldest rapid transit system in the world.London's diverse cultures encompass over 300 languages. The 2023 population of Greater London of just under 10 million made it Europe's third-most populous city, accounting for 13.4% of the population of the United Kingdom and over 16% of the population of England. The Greater London Built-up Area is the fourth-most populous in Europe, with about 9.8 million inhabitants at the 2011 census. The London metropolitan area is the third-most populous in Europe, with about 14 million inhabitants in 2016, granting London the status of a megacity.\nLondon has four World Heritage Sites: the Tower of London; Kew Gardens; the combined Palace of Westminster, Westminster Abbey, and St Margaret's Church; and the historic settlement in Greenwich, where the Royal Observatory, Greenwich, defines the prime meridian (0° longitude) and Greenwich Mean Time. Other landmarks include Buckingham Palace, the London Eye, Piccadilly Circus, St Paul's Cathedral, Tower Bridge, and Trafalgar Square. London has many museums, galleries, libraries, and cultural venues, including the British Museum, National Gallery, Natural History Museum, Tate Modern, British Library, and numerous West End theatres. Important sporting events held in London include the FA Cup Final, the Wimbledon Tennis Championships, and the London Marathon. In 2012, London became the first city to host three Summer Olympic Games.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/London"
            },
            "Q842438": {
                "name": "British",
                "wikidata_aliases": "[\"Britishers\",\"Brits\",\"the British\",\"Britons\",\"British people\"]",
                "wikidata_summary": "citizens or residents of the United Kingdom of Great Britain and Northern Ireland, British Overseas Territories, Crown Dependencies, and their descendants",
                "wikidata_url": "https://www.wikidata.org/wiki/Q842438",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q842486": {
                "name": "admiral of the fleet",
                "wikidata_aliases": "[\"fleet admiral\",\"grand admiral\",\"Admiral of the Fleet\"]",
                "wikidata_summary": "military naval officer of the highest rank; generic term for a senior admiral",
                "wikidata_url": "https://www.wikidata.org/wiki/Q842486",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q84263196": {
                "name": "COVID-19",
                "wikidata_aliases": "[\"coronavirus disease 2019\",\"nCOVD-19\",\"2019-nCoV acute respiratory disease\",\"Novel Coronavirus Pneumonia\",\"Covid-19\",\"Severe Acute Respiratory Syndrome Coronavirus 2\",\"Wuhan respiratory syndrome\",\"severe acute respiratory syndrome type 2\",\"nCOVD 19\",\"CD-19\",\"SARS-CoV-2\",\"2019 novel coronavirus pneumonia\",\"Wuhan pneumonia\",\"COVID\",\"COVID 19\",\"Coronavirus disease 2019\",\"nCOVD19\",\"2019 NCP\",\"COVID19\",\"2019 novel coronavirus respiratory syndrome\",\"seafood market pneumonia\",\"SARS-CoV-2 infection\",\"COVID-2019\",\"WuRS\"]",
                "wikidata_summary": "Contagious disease caused by SARS-CoV-2",
                "wikidata_url": "https://www.wikidata.org/wiki/Q84263196",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q84712813": {
                "name": "Ms. Marvel",
                "wikidata_aliases": "[\"Ms Marvel\"]",
                "wikidata_summary": "2022 superhero television miniseries",
                "wikidata_url": "https://www.wikidata.org/wiki/Q84712813",
                "wikipedia_summary": "Ms. Marvel is the name of several superheroines appearing in comic books published by Marvel Comics. The character was originally conceived as a female counterpart to the superhero Mar-Vell / Captain Marvel. Like Captain Marvel, most of the bearers of the Ms. Marvel codename gain their powers through Kree technology or genetics. The first incarnation of Ms. Marvel, Carol Danvers, first appeared in Marvel Super-Heroes #13 (March 1968). The second incarnation, Sharon Ventura, debuted in The Thing #27 (September 1985). The third incarnation, Karla Sofen, made her first appearance in Captain America #192 (December 1975). The fourth and current incarnation, Kamala Khan, made her debut in Captain Marvel #14 (August 2013).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ms._Marvel"
            },
            "Q85951363": {
                "name": "Elizabeth Renner",
                "wikidata_aliases": "[]",
                "wikidata_summary": "researcher",
                "wikidata_url": "https://www.wikidata.org/wiki/Q85951363",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q86010165": {
                "name": "List of The Mandalorian characters",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q86010165",
                "wikipedia_summary": "The Mandalorian, an American space Western television series set in the Star Wars universe created by Jon Favreau and released on Disney+, features an extensive cast of characters. Since the show's debut on November 12, 2019, only one character has appeared in every episode: the protagonist and title character, a bounty hunter primarily known simply as 'The Mandalorian' (Din Djarin). Grogu (The Child) is a young alien of the same species as Star Wars character Yoda and the show's hugely popular breakout character, colloquially known among the fandom as 'Baby Yoda'.Several supporting characters appeared in at least three episodes of the first season of The Mandalorian, credited as co-starring. These include allies of the Mandalorian such as Cara Dune, Greef Karga, IG-11, Kuiil, and The Armorer. The primary villains of the series belong to a remnant of the Galactic Empire, which is led by Moff Gideon and includes such agents as The Client and Penn Pershing. A handful of guest characters made appearances in single episodes, including villagers from the planet Sorgan in 'Chapter 4: Sanctuary', a band of mercenaries in 'Chapter 6: The Prisoner', and several minor antagonists.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_The_Mandalorian_characters"
            },
            "Q860465": {
                "name": "Roast beef",
                "wikidata_aliases": "[]",
                "wikidata_summary": "traditional English dish of beef which is roasted",
                "wikidata_url": "https://www.wikidata.org/wiki/Q860465",
                "wikipedia_summary": "Roast beef is a dish of beef that is roasted, generally served as the main dish of a meal. In the Anglosphere, roast beef is one of the meats often served at Sunday lunch or dinner. Yorkshire pudding is a standard side dish. Sliced roast beef is also sold as a cold cut, and used as a sandwich filling. Leftover roast beef may be minced and made into hash.\nRoast beef is a characteristic national dish of England and holds cultural meaning for the English dating back to the 1731 ballad 'The Roast Beef of Old England'. The dish is so synonymous with England and its cooking methods from the 18th century that a French nickname for the English is 'les Rosbifs'.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Roast_beef"
            },
            "Q862452": {
                "name": "Makuhari Messe",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Japanese convention center in the Mihama-ku of Chiba city",
                "wikidata_url": "https://www.wikidata.org/wiki/Q862452",
                "wikipedia_summary": "Makuhari Messe (幕張メッセ) is a Japanese convention center outside Tokyo, located in the Mihama-ku ward of Chiba City, in the northwest corner of Chiba Prefecture. Designed by Fumihiko Maki, it is accessible by Tokyo's commuter rail system. Makuhari is the name of the area, and Messe is a German language word meaning 'trade fair'.\nThe convention center opened on 9 October 1989. It hosts many high-technology events.\nMakuhari Messe is close to Tokyo Disney Resort in Urayasu, and to Chiba prefecture's black sand beaches. It is accessible from Kaihimmakuhari station on the Keiyō Line of East Japan Railway Company (JR East). The center is the host of the annual Tokyo Auto Salon (modified car show, in January), the biennial Tokyo Motor Show (in October), the annual Tokyo Game Show (video game hardware and software exhibition, in September), the annual Jump Festa (manga, anime, and video game exposition, in December), and the biannual Wonder Festival (toys, scale figures, and garage kits exposition, in February and July). The venue was host to several Nintendo Space World events.\nIt was the venue for several sports during the Tokyo 2020 Olympic and Paralympic Games.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Makuhari_Messe"
            },
            "Q864407": {
                "name": "The Home Depot",
                "wikidata_aliases": "[\"Home Depot\",\"The Home Depot, Inc.\"]",
                "wikidata_summary": "American home improvement supplies retailing company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q864407",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q86450949": {
                "name": "Star Wars: The High Republic",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Star Wars series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q86450949",
                "wikipedia_summary": "Star Wars: The High Republic is a multimedia project consisting of various stories from the Star Wars franchise set during the 'High Republic' era, which spans 500 to 100 years before the Skywalker Saga and is set hundreds of years after the fall of the 'Old Republic'. The initiating event of the sub-franchise is 'The Great Disaster' involving the antagonistic 'space Vikings' known as the Nihil and the subsequent intervention of the Jedi.\nThe series is divided into three phases. The first, Light of the Jedi, ran from January 2021 to February 2022. The second phase, Quest of the Jedi, started in October 2022. The third phase, Trials of the Jedi, began in November 2023 with the release of George Mann's novel The Eye of Darkness.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Star_Wars:_The_High_Republic"
            },
            "Q865422": {
                "name": "game controller",
                "wikidata_aliases": "[\"controller\",\"video game controll\",\"videogame controller\",\"gaming controller\",\"video gaming controller\"]",
                "wikidata_summary": "device used with games or entertainment systems",
                "wikidata_url": "https://www.wikidata.org/wiki/Q865422",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q867123": {
                "name": "Open world",
                "wikidata_aliases": "[\"free roam\",\"free-roaming\"]",
                "wikidata_summary": "type of computer game design",
                "wikidata_url": "https://www.wikidata.org/wiki/Q867123",
                "wikipedia_summary": "In video games, an open world is a virtual world in which the player can approach objectives freely, as opposed to a world with more linear and structured gameplay. Notable games in this category include The Legend of Zelda (1986), Grand Theft Auto III (2001) and Minecraft (2011).Games with open or free-roaming worlds typically lack level structures like walls and locked doors, or the invisible walls in more open areas that prevent the player from venturing beyond them; only at the bounds of an open-world game will players be limited by geographic features like vast oceans or impassable mountains. Players typically do not encounter loading screens common in linear level designs when moving about the game world, with the open-world game using strategic storage and memory techniques to load the game world in a dynamic and seamless manner. Open-world games still enforce many restrictions in the game environment, either because of absolute technical limitations or in-game limitations imposed by a game's linearity.While the openness of the game world is an important facet to games featuring open worlds, the main draw of open-world games is about providing the player with autonomy—not so much the freedom to do anything they want in the game (which is nearly impossible with current computing technology), but the ability to choose how to approach the game and its challenges in the order and manner as the player desires while still constrained by gameplay rules. Examples of high level of autonomy in computer games can be found in massively multiplayer online role-playing games (MMORPG) or in single-player games adhering to the open-world concept such as the Fallout series. The main appeal of open-world gameplay is that it provides a simulated reality and allows players to develop their character and its behavior in the direction and pace of their own choosing. In these cases, there is often no concrete goal or end to the game, although there may be the main storyline, such as with games like The Elder Scrolls V: Skyrim.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Open_world"
            },
            "Q8684": {
                "name": "Seoul",
                "wikidata_aliases": "[\"Seoul Special City\",\"Sŏul T'ŭkpyŏlsi\",\"Wiryeseong\",\"Namgyeong\",\"Hanseong\",\"Hanyang\",\"Keijō\",\"Keijou\",\"Gyeongseong\"]",
                "wikidata_summary": "capital and largest city of South Korea",
                "wikidata_url": "https://www.wikidata.org/wiki/Q8684",
                "wikipedia_summary": "Seoul, officially Seoul Special City, and formerly known as Hanseong and Keijō, is the capital of the Republic of Korea (ROK), commonly known as South Korea, and the country's most extensive urban center. The broader Seoul Capital Area, encompassing Gyeonggi province and Incheon metropolitan city, emerged as the world's fourth largest metropolitan economy in 2014, trailing only Tokyo, New York City, and Los Angeles, hosting more than half of South Korea's population. Although Seoul's population peaked at slightly over 10 million, it has gradually decreased since 2014, standing at approximately 9.97 million residents as of 2020. Seoul is the seat of the South Korean government.\nSeoul's history traces back to 18 BC when it was founded by the people of Baekje, one of the Three Kingdoms of Korea. During the Joseon dynasty, Seoul was officially designated as the capital, surrounded by the Fortress Wall of Seoul. In the early 20th century, Seoul was occupied by the Japanese Empire, temporarily renamed 'Gyeongseong.' The Korean War brought fierce battles, with Seoul changing hands four times and leaving the city mostly in ruins. Nevertheless, the city has since undergone significant reconstruction and rapid urbanization.\nSeoul was rated Asia's most livable city, with the second-highest quality of life globally according to Arcadis in 2015 and a GDP per capita (PPP) of approximately $40,000. 15 Fortune Global 500 companies, including industry giants such as Samsung, LG, and Hyundai, are headquartered in the Seoul Capital Area, which has major technology hubs, such as Gangnam and Digital Media City. Seoul is ranked seventh in the Global Power City Index and the Global Financial Centres Index, and is one of the five leading hosts of global conferences. The city has also hosted major events such as the 1986 Asian Games, the 1988 Summer Olympics, and the 2010 G20 Seoul summit.\nSeoul is geographically set in a mountainous and hilly terrain, with Bukhan Mountain positioned on its northern edge. Within the Seoul Capital Area lie five UNESCO World Heritage Sites: Changdeok Palace, Hwaseong Fortress, Jongmyo Shrine, Namhansanseong, and the Royal Tombs of the Joseon dynasty. Furthermore, Seoul has witnessed a surge in modern architectural development, with iconic landmarks including the N Seoul Tower, the 63 Building, the Lotte World Tower, the Dongdaemun Design Plaza, Lotte World, the Trade Tower, COEX, IFC Seoul, and Parc1. Seoul was named the World Design Capital in 2010 and has served as the national hub for the music, entertainment, and cultural industries that have propelled K-pop and the Korean Wave to international prominence.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Seoul"
            },
            "Q88058672": {
                "name": "COVID-19 disease in pregnancy",
                "wikidata_aliases": "[\"pregnancy-associated COVID-19\"]",
                "wikidata_summary": "medical consequences of COVID-19 for pregnant women and foetuses",
                "wikidata_url": "https://www.wikidata.org/wiki/Q88058672",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q881": {
                "name": "Vietnam",
                "wikidata_aliases": "[\"Socialist Republic of Vietnam\",\"VN\",\"VIE\",\"🇻🇳\",\"Việt Nam\",\"Viet Nam\",\"SRV\",\"VNM\"]",
                "wikidata_summary": "country in Southeast Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q881",
                "wikipedia_summary": "Vietnam,  officially the Socialist Republic of Vietnam (SRV), is a country at the eastern edge of mainland Southeast Asia, with an area of about 331,000 square kilometres (128,000 sq mi) and a population of over 100 million, making it the world's fifteenth-most populous country. Vietnam shares land borders with China to the north, and Laos and Cambodia to the west. It shares maritime borders with Thailand through the Gulf of Thailand, and the Philippines, Indonesia, and Malaysia through the South China Sea. Its capital is Hanoi and its largest city is Ho Chi Minh City (commonly referred to by its former name, Saigon).\nVietnam was inhabited by the Paleolithic age, with states established in the first millennium BC on the Red River Delta in modern-day northern Vietnam. The Han dynasty annexed Northern and Central Vietnam under Chinese rule from 111 BC, until the first dynasty emerged in 939. Successive monarchical dynasties absorbed Chinese influences through Confucianism and Buddhism, and expanded southward to the Mekong Delta, conquering Champa. During most of the 17th and 18th centuries, Vietnam was effectively divided into two domains of Đàng Trong and Đàng Ngoài. The Nguyễn—the last imperial dynasty—surrendered to France in 1883. In 1887, its territory was integrated into French Indochina as three separate regions. In the immediate aftermath of World War II, the nationalist coalition Viet Minh, led by the communist revolutionary Ho Chi Minh, launched the August Revolution and declared Vietnam's independence in 1945.\nVietnam went through prolonged warfare in the 20th century. After World War II, France returned to reclaim colonial power in the First Indochina War, from which Vietnam emerged victorious in 1954. As a result of the treaties signed between the Viet Minh and France, Vietnam was also separated into two parts. The Vietnam War began shortly after, between the communist North Vietnam, supported by the Soviet Union and China, and the anti-communist South Vietnam, supported by the United States. Upon the North Vietnamese victory in 1975, Vietnam reunified as a unitary socialist state under the Communist Party of Vietnam (CPV) in 1976. An ineffective planned economy, a trade embargo by the West, and wars with Cambodia and China crippled the country further. In 1986, the CPV initiated economic and political reforms similar to the Chinese economic reform, transforming the country to a socialist-oriented market economy. The reforms facilitated Vietnamese reintegration into the global economy and politics.\nVietnam is a developing country with a lower-middle-income economy. It has high levels of corruption, censorship, environmental issues and a poor human rights record; the country ranks among the lowest in international measurements of civil liberties, freedom of the press, and freedom of religion and ethnic minorities. It is part of international and intergovernmental institutions including the ASEAN, the APEC, the CPTPP, the Non-Aligned Movement, the OIF, and the WTO. It has assumed a seat on the United Nations Security Council twice.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vietnam"
            },
            "Q884": {
                "name": "South Korea",
                "wikidata_aliases": "[\"Republic of Korea\",\"ROK\",\"kr\",\"Rep. Korea\",\"S. Korea\",\"Korea Republic\",\"🇰🇷\",\"KOR\",\"Hanguk\",\"Daehan Minguk\",\"Daehanminguk\",\"SK\",\"Korea (South)\"]",
                "wikidata_summary": "country in East Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q884",
                "wikipedia_summary": "South Korea, officially the Republic of Korea (ROK), is a country in East Asia. It constitutes the southern part of the Korean Peninsula and borders North Korea along the Korean Demilitarized Zone; though it also claims the land border with China and Russia. The country's western border is formed by the Yellow Sea, while its eastern border is defined by the Sea of Japan. South Korea claims to be the sole legitimate government of the entire peninsula and adjacent islands. It has a population of 51.96 million, of which roughly half live in the Seoul Capital Area, the ninth most populous metropolitan area in the world. Other major cities include Incheon, Busan, and Daegu.\nThe Korean Peninsula was inhabited as early as the Lower Paleolithic period. Its first kingdom was noted in Chinese records in the early 7th century BCE. Following the unification of the Three Kingdoms of Korea into Silla and Balhae in the late 7th century, Korea was ruled by the Goryeo dynasty (918–1392) and the Joseon dynasty (1392–1897). The succeeding Korean Empire (1897–1910) was annexed in 1910 into the Empire of Japan. Japanese rule ended following Japan's surrender in World War II, after which Korea was divided into two zones: a northern zone occupied by the Soviet Union, and a southern zone occupied by the United States. After negotiations on reunification failed, the southern zone became the Republic of Korea in August 1948, while the northern zone became the communist Democratic People's Republic of Korea the following month.\nIn 1950, a North Korean invasion began the Korean War, which ended in 1953 after extensive fighting involving the American-led United Nations Command and the People's Volunteer Army from China with Soviet assistance. The war left 3 million Koreans dead and the economy in ruins. The authoritarian First Republic of Korea led by Syngman Rhee was overthrown in the April Revolution of 1960. However, the Second Republic was incompetent as it could not control the revolutionary fervor. The May 16 coup of 1961 led by Park Chung Hee put an end to the Second Republic, signaling the start of the Third Republic in 1963. South Korea's devastated economy began to soar under Park's leadership, recording the one of fastest rises in average GDP per capita. Despite lacking natural resources, the nation rapidly developed to become one of the Four Asian Tigers based on international trade and economic globalization, integrating itself within the world economy with export-oriented industrialization. The Fourth Republic was established after the October Restoration of 1972, in which Park wielded absolute power. The Yushin Constitution declared that the president could suspend basic human rights and appoint a third of the parliament. Suppression of the opposition and human rights abuse by the government became more severe in this period. Even after Park's assassination in 1979, the authoritarian rule continued in the Fifth Republic led by Chun Doo-hwan, which violently seized power by two coups and brutally suppressing the Gwangju Uprising. The June Democratic Struggle of 1987 ended authoritarian rule, forming the current Sixth Republic. The country is now considered among the most advanced democracies in Continental and East Asia.\nSouth Korea maintains a unitary presidential republic under the 1987 constitution with a unicameral legislature, the National Assembly. It is considered a regional power and a developed country, with its economy ranked as the world's twelfth-largest by nominal GDP and the fourteenth-largest by GDP (PPP). Its citizens enjoy one of the world's fastest Internet connection speeds and densest high-speed railway networks. The country is the world's ninth-largest exporter and ninth-largest importer. Its armed forces are ranked as one of the world's strongest militaries, with the world's second-largest standing army by military and paramilitary personnel. In the 21st century, South Korea has been renowned for its globally influential pop culture, particularly in music, TV dramas and cinema, a phenomenon referred to as the Korean Wave. It is a member of the OECD's Development Assistance Committee, the G20, the IPEF, and the Paris Club.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/South_Korea"
            },
            "Q89695113": {
                "name": "DualSense",
                "wikidata_aliases": "[\"DualSense controller\",\"PlayStation 5 game contoller\",\"PlayStation 5 controller\",\"PS5 game controller\",\"PS5 controller\"]",
                "wikidata_summary": "primary video game controller for PlayStation 5",
                "wikidata_url": "https://www.wikidata.org/wiki/Q89695113",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q900956": {
                "name": "Visions",
                "wikidata_aliases": "[]",
                "wikidata_summary": "1997 studio album by Stratovarius",
                "wikidata_url": "https://www.wikidata.org/wiki/Q900956",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q910267": {
                "name": "Volatile organic compound",
                "wikidata_aliases": "[\"VOC\",\"volatile organic compounds\",\"VOCs\"]",
                "wikidata_summary": "organic chemicals having a high vapor pressure at room temperature",
                "wikidata_url": "https://www.wikidata.org/wiki/Q910267",
                "wikipedia_summary": "Volatile organic compounds (VOCs) are organic compounds that have a high vapor pressure at room temperature. High vapor pressure correlates with a low boiling point, which relates to the number of the sample's molecules in the surrounding air, a trait known as volatility.VOCs are responsible for the odor of scents and perfumes as well as pollutants. VOCs play an important role in communication between animals and plants, e.g. attractants for pollinators, protection from predation, and even inter-plant interactions. Some VOCs are dangerous to human health or cause harm to the environment. Anthropogenic VOCs are regulated by law, especially indoors, where concentrations are the highest. Most VOCs are not acutely toxic, but may have long-term chronic health effects. Some VOCs have been used in pharmacy, while others are target of administrative controls because of their recreational use.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Volatile_organic_compound"
            },
            "Q91377533": {
                "name": "Gregory Barshtein",
                "wikidata_aliases": "[]",
                "wikidata_summary": "researcher (ORCID 0000-0001-6588-7229)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q91377533",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q91747985": {
                "name": "Christopher A. Lepczyk",
                "wikidata_aliases": "[\"Christopher Lepczyk\",\"Christopher A Lepczyk\",\"C A Lepczyk\",\"CA Lepczyk\",\"C. A. Lepczyk\",\"C.A. Lepczyk\"]",
                "wikidata_summary": "researcher (ORCID 0000-0002-5316-3159)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q91747985",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q9217": {
                "name": "Thai",
                "wikidata_aliases": "[\"Central Thai\",\"Siamese\",\"Thai language\",\"Siamese language\",\"th\",\"tha\"]",
                "wikidata_summary": "Tai language",
                "wikidata_url": "https://www.wikidata.org/wiki/Q9217",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q9259": {
                "name": "World Heritage Site",
                "wikidata_aliases": "[\"United Nations Educational, Scientific and Cultural Organization (UNESCO) World Heritage Site\",\"WHS\",\"World heritage site\",\"World Heritage List Site\",\"Patrimonio de la Humanidad\"]",
                "wikidata_summary": "place of significance listed by UNESCO",
                "wikidata_url": "https://www.wikidata.org/wiki/Q9259",
                "wikipedia_summary": "A World Heritage Site is a landmark or area with legal protection by an international convention administered by the UNESCO. World Heritage Sites are designated by UNESCO for having cultural, historical, scientific or other forms of significance. The sites are judged to contain 'cultural and natural heritage around the world considered to be of outstanding value to humanity'.To be selected, a World Heritage Site is nominated by their host country and determined by the international committee to be a unique landmark which is geographically and historically identifiable and having a special cultural or physical significance. For example, World Heritage Sites might be ancient ruins or historical structures, buildings, cities, deserts, forests, islands, lakes, monuments, mountains or wilderness areas.A World Heritage Site may signify a remarkable accomplishment of humanity, and serve as evidence of our intellectual history on the planet or it might be a place of great natural beauty. As of September 2023, a total of 1,199 World Heritage Sites (933 cultural, 227 natural and 39 mixed cultural and natural properties) exist across 168 countries. With 59 selected areas, Italy is the country with the most sites; followed by China with 57, then France and Germany with 52 each.The sites are intended for practical conservation for posterity, which otherwise would be subject to risk from human or animal trespassing, unmonitored, uncontrolled or unrestricted access, or threat from local administrative negligence. Sites are demarcated by UNESCO as protected zones. The World Heritage Sites list is maintained by the international World Heritage Program administered by the UNESCO World Heritage Committee, composed of 21 'states parties' that are elected by the United Nations General Assembly, and advised by reviews of international panels of experts in natural or cultural history, and education.The programme catalogues, names, and conserves sites of outstanding cultural or natural importance to the common culture and heritage of humanity. The programme began with the Convention Concerning the Protection of the World Cultural and Natural Heritage, which was adopted by the General Conference of UNESCO on 16 November 1972. Since then, 195 states have ratified the convention, making it one of the most widely recognised international agreements and the world's most popular cultural programme.  To be considered, the properties must be under some form of state protection or conservation and be nominated by the host member country.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/World_Heritage_Site"
            },
            "Q937228": {
                "name": "property",
                "wikidata_aliases": "[\"attribute\",\"characteristic\"]",
                "wikidata_summary": "predominant feature that characterizes a being, a thing, a phenomenon, etc. and which differentiates one being from another, one thing from another",
                "wikidata_url": "https://www.wikidata.org/wiki/Q937228",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q959755": {
                "name": "South by Southwest",
                "wikidata_aliases": "[\"SXSW\",\"South By\"]",
                "wikidata_summary": "annual festival held in Austin, USA",
                "wikidata_url": "https://www.wikidata.org/wiki/Q959755",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q96247255": {
                "name": "Stray",
                "wikidata_aliases": "[]",
                "wikidata_summary": "2022 adventure video game developed by BlueTwelve Studio",
                "wikidata_url": "https://www.wikidata.org/wiki/Q96247255",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q96381012": {
                "name": "High Republic",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Wikimedia disambiguation page",
                "wikidata_url": "https://www.wikidata.org/wiki/Q96381012",
                "wikipedia_summary": "High Republic may refer to:\n\nHigh Republic of Heldon, a fictional eugenic mutant-killing polity from Lord of the Swastika, a fictional novel in the 1972 Norman Spinrad alternate history novel The Iron Dream.\nStar Wars: The High Republic, a subfranchise of the Star Wars media franchise set in the era of the same name, first introduced in 2020\nThe High Republic [philosophy] (Russian: Вищу Республіку, romanized: Vyshchu Respubliku), a construct of faith, society, and politics, under the Christian church, developed in the 18th century by Gregory Skovoroda",
                "wikipedia_url": "https://en.wikipedia.org/wiki/High_Republic"
            },
            "Q97002749": {
                "name": "Eric Isselee",
                "wikidata_aliases": "[]",
                "wikidata_summary": "Belgisch beeldend kunstenaar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q97002749",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q97365172": {
                "name": "Star Wars: The Bad Batch",
                "wikidata_aliases": "[\"The Bad Batch\"]",
                "wikidata_summary": "animated television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q97365172",
                "wikipedia_summary": null,
                "wikipedia_url": null
            }
        };
        this.edges = [
            {
                "label": "instance_of",
                "source": {
                    "id": "Q573880",
                    "name": "Nature Communications",
                    "__indexColor": "#f00134",
                    "index": 307,
                    "x": -422.9634091065472,
                    "y": 862.8488569741974,
                    "vx": -1.779497007423846e-18,
                    "vy": 4.015537562054903e-18
                },
                "target": {
                    "id": "Q5633421",
                    "name": "Scientific journal",
                    "__indexColor": "#400130",
                    "index": 303,
                    "x": -389.95064867422525,
                    "y": 864.7919678429142,
                    "vx": -1.7769659210385924e-18,
                    "vy": 4.0110420694804295e-18
                },
                "__indexColor": "#14017f",
                "__controlPoints": null,
                "nodePairId": "Q5633421_Q573880",
                "index": 0
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "target": {
                    "id": "Q208376",
                    "name": "Pet",
                    "__indexColor": "#000080",
                    "index": 127,
                    "x": 272.9931283465106,
                    "y": -537.5222811743239,
                    "vx": 1.412487514104299e-18,
                    "vy": -2.435655260654165e-18
                },
                "__indexColor": "#000180",
                "__controlPoints": null,
                "nodePairId": "Q208376_Q4167836",
                "index": 1
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q1570892",
                    "name": "Middle Village",
                    "__indexColor": "#980052",
                    "index": 81,
                    "x": 814.0185851736585,
                    "y": -578.33746011412,
                    "vx": 3.1987832457618694e-18,
                    "vy": -2.3879436074044058e-18
                },
                "target": {
                    "id": "Q1842497",
                    "name": "Woodhaven",
                    "__indexColor": "#90006c",
                    "index": 107,
                    "x": 814.0067177005633,
                    "y": -610.342114709141,
                    "vx": 3.2201338065696546e-18,
                    "vy": -2.3782411001596806e-18
                },
                "__indexColor": "#ec0181",
                "__controlPoints": null,
                "nodePairId": "Q1570892_Q1842497",
                "index": 2
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q1842497",
                    "name": "Woodhaven",
                    "__indexColor": "#90006c",
                    "index": 107,
                    "x": 814.0067177005633,
                    "y": -610.342114709141,
                    "vx": 3.2201338065696546e-18,
                    "vy": -2.3782411001596806e-18
                },
                "target": {
                    "id": "Q1570892",
                    "name": "Middle Village",
                    "__indexColor": "#980052",
                    "index": 81,
                    "x": 814.0185851736585,
                    "y": -578.33746011412,
                    "vx": 3.1987832457618694e-18,
                    "vy": -2.3879436074044058e-18
                },
                "__indexColor": "#d80182",
                "__controlPoints": null,
                "nodePairId": "Q1570892_Q1842497",
                "index": 3
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#c40183",
                "__controlPoints": null,
                "nodePairId": "Q4167836_Q4167836",
                "index": 4
            },
            {
                "label": "different_from",
                "source": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#b00184",
                "__controlPoints": null,
                "index": 5
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q56166733",
                    "name": "Peter P. Marra",
                    "__indexColor": "#68012e",
                    "index": 301,
                    "x": 1195.207112777316,
                    "y": -370.45204444433676,
                    "vx": 4.607246900799429e-18,
                    "vy": -1.493035822547904e-18
                },
                "target": {
                    "id": "Q333886",
                    "name": "Georgetown University",
                    "__indexColor": "#fc00cd",
                    "index": 204,
                    "x": 1185.0800308926498,
                    "y": -400.78067864852676,
                    "vx": 4.6052649624980215e-18,
                    "vy": -1.4825524240034438e-18
                },
                "__indexColor": "#9c0185",
                "__controlPoints": null,
                "index": 6
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q1570892",
                    "name": "Middle Village",
                    "__indexColor": "#980052",
                    "index": 81,
                    "x": 814.0185851736585,
                    "y": -578.33746011412,
                    "vx": 3.1987832457618694e-18,
                    "vy": -2.3879436074044058e-18
                },
                "target": {
                    "id": "Q1842497",
                    "name": "Woodhaven",
                    "__indexColor": "#90006c",
                    "index": 107,
                    "x": 814.0067177005633,
                    "y": -610.342114709141,
                    "vx": 3.2201338065696546e-18,
                    "vy": -2.3782411001596806e-18
                },
                "__indexColor": "#880186",
                "__controlPoints": null,
                "index": 7
            },
            {
                "label": "educated_at",
                "source": {
                    "id": "Q56166733",
                    "name": "Peter P. Marra",
                    "__indexColor": "#68012e",
                    "index": 301,
                    "x": 1195.207112777316,
                    "y": -370.45204444433676,
                    "vx": 4.607246900799429e-18,
                    "vy": -1.493035822547904e-18
                },
                "target": {
                    "id": "Q333886",
                    "name": "Georgetown University",
                    "__indexColor": "#fc00cd",
                    "index": 204,
                    "x": 1185.0800308926498,
                    "y": -400.78067864852676,
                    "vx": 4.6052649624980215e-18,
                    "vy": -1.4825524240034438e-18
                },
                "__indexColor": "#740187",
                "__controlPoints": null,
                "index": 8
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q91377533",
                    "name": "Gregory Barshtein",
                    "__indexColor": "#dc0175",
                    "index": 372,
                    "x": 426.024733145557,
                    "y": 305.7818929663559,
                    "vx": 2.271791366488169e-18,
                    "vy": 1.5127358182243686e-18
                },
                "target": {
                    "id": "Q7162",
                    "name": "genetics",
                    "__indexColor": "#740147",
                    "index": 326,
                    "x": 395.58377022744696,
                    "y": 287.58560805644186,
                    "vx": 2.2586572511068133e-18,
                    "vy": 1.5148309844232216e-18
                },
                "__indexColor": "#600188",
                "__controlPoints": null,
                "index": 9
            },
            {
                "label": "product_or_material_produced",
                "source": {
                    "id": "Q11395",
                    "name": "Domestication",
                    "__indexColor": "#a8001e",
                    "index": 29,
                    "x": 342.82510201505926,
                    "y": -538.1933496026162,
                    "vx": 1.4203506827008792e-18,
                    "vy": -2.1568397405106888e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#4c0189",
                "__controlPoints": null,
                "index": 10
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q104129950",
                    "name": "Christopher B Kaelin",
                    "__indexColor": "#b00004",
                    "index": 3,
                    "x": 363.90299867423596,
                    "y": 296.09721648554074,
                    "vx": 2.2405900278322354e-18,
                    "vy": 1.5360039056769028e-18
                },
                "target": {
                    "id": "Q7162",
                    "name": "genetics",
                    "__indexColor": "#740147",
                    "index": 326,
                    "x": 395.58377022744696,
                    "y": 287.58560805644186,
                    "vx": 2.2586572511068133e-18,
                    "vy": 1.5148309844232216e-18
                },
                "__indexColor": "#38018a",
                "__controlPoints": null,
                "index": 11
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q11395",
                    "name": "Domestication",
                    "__indexColor": "#a8001e",
                    "index": 29,
                    "x": 342.82510201505926,
                    "y": -538.1933496026162,
                    "vx": 1.4203506827008792e-18,
                    "vy": -2.1568397405106888e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#24018b",
                "__controlPoints": null,
                "index": 12
            },
            {
                "label": "occupation",
                "source": {
                    "id": "Q91377533",
                    "name": "Gregory Barshtein",
                    "__indexColor": "#dc0175",
                    "index": 372,
                    "x": 426.024733145557,
                    "y": 305.7818929663559,
                    "vx": 2.271791366488169e-18,
                    "vy": 1.5127358182243686e-18
                },
                "target": {
                    "id": "Q217",
                    "name": "Moldova",
                    "__indexColor": "#10008c",
                    "index": 139,
                    "x": 455.04993768607085,
                    "y": 321.09940813722267,
                    "vx": 2.2898088545464253e-18,
                    "vy": 1.5283445060831108e-18
                },
                "__indexColor": "#10018c",
                "__controlPoints": null,
                "index": 13
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q11395",
                    "name": "Domestication",
                    "__indexColor": "#a8001e",
                    "index": 29,
                    "x": 342.82510201505926,
                    "y": -538.1933496026162,
                    "vx": 1.4203506827008792e-18,
                    "vy": -2.1568397405106888e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#fc018d",
                "__controlPoints": null,
                "index": 14
            },
            {
                "label": "parent_taxon",
                "source": {
                    "id": "Q1474329",
                    "name": "Tabby cat",
                    "__indexColor": "#10004c",
                    "index": 75,
                    "x": 317.34429001649494,
                    "y": -572.960951182967,
                    "vx": 1.759402621308287e-18,
                    "vy": -2.2087656609767224e-18
                },
                "target": {
                    "id": "Q42627",
                    "name": "Bengal cat",
                    "__indexColor": "#8c00f9",
                    "index": 248,
                    "x": 320.37298857746305,
                    "y": -612.8841652451129,
                    "vx": 2.0760192436755563e-18,
                    "vy": -2.209745593431138e-18
                },
                "__indexColor": "#e8018e",
                "__controlPoints": null,
                "index": 15
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q41298",
                    "name": "magazine",
                    "__indexColor": "#0400f3",
                    "index": 242,
                    "x": -458.798600671365,
                    "y": 860.1202689327786,
                    "vx": -1.7852518542448437e-18,
                    "vy": 4.06010391568946e-18
                },
                "target": {
                    "id": "Q737498",
                    "name": "academic journal",
                    "__indexColor": "#e8014e",
                    "index": 333,
                    "x": -487.51581294673684,
                    "y": 876.2426521125773,
                    "vx": -1.7218142900534313e-18,
                    "vy": 4.153331292966773e-18
                },
                "__indexColor": "#d4018f",
                "__controlPoints": null,
                "index": 16
            },
            {
                "label": "studied_by",
                "source": {
                    "id": "Q7187",
                    "name": "Gene",
                    "__indexColor": "#600148",
                    "index": 327,
                    "x": 389.14349661078046,
                    "y": 255.38818030860858,
                    "vx": 2.2636549976777057e-18,
                    "vy": 1.4965516903552212e-18
                },
                "target": {
                    "id": "Q7162",
                    "name": "genetics",
                    "__indexColor": "#740147",
                    "index": 326,
                    "x": 395.58377022744696,
                    "y": 287.58560805644186,
                    "vx": 2.2586572511068133e-18,
                    "vy": 1.5148309844232216e-18
                },
                "__indexColor": "#c00190",
                "__controlPoints": null,
                "index": 17
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q1474329",
                    "name": "Tabby cat",
                    "__indexColor": "#10004c",
                    "index": 75,
                    "x": 317.34429001649494,
                    "y": -572.960951182967,
                    "vx": 1.759402621308287e-18,
                    "vy": -2.2087656609767224e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#ac0191",
                "__controlPoints": null,
                "index": 18
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q41298",
                    "name": "magazine",
                    "__indexColor": "#0400f3",
                    "index": 242,
                    "x": -458.798600671365,
                    "y": 860.1202689327786,
                    "vx": -1.7852518542448437e-18,
                    "vy": 4.06010391568946e-18
                },
                "target": {
                    "id": "Q215028",
                    "name": "peer review",
                    "__indexColor": "#880086",
                    "index": 133,
                    "x": -484.4763536427143,
                    "y": 839.4317282298337,
                    "vx": -1.7043157635764126e-18,
                    "vy": 3.9960859694360054e-18
                },
                "__indexColor": "#980192",
                "__controlPoints": null,
                "index": 19
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q208376",
                    "name": "Pet",
                    "__indexColor": "#000080",
                    "index": 127,
                    "x": 272.9931283465106,
                    "y": -537.5222811743239,
                    "vx": 1.412487514104299e-18,
                    "vy": -2.435655260654165e-18
                },
                "target": {
                    "id": "Q729",
                    "name": "Animal",
                    "__indexColor": "#10014c",
                    "index": 331,
                    "x": 258.8364345090439,
                    "y": -505.91974850405455,
                    "vx": 1.2497189578409178e-18,
                    "vy": -2.465539662733399e-18
                },
                "__indexColor": "#840193",
                "__controlPoints": null,
                "index": 20
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q30862",
                    "name": "311",
                    "__indexColor": "#b000c4",
                    "index": 195,
                    "x": -1202.0130343629853,
                    "y": -230.550225713165,
                    "vx": -4.977260464971189e-18,
                    "vy": -1.1619662056327076e-18
                },
                "target": {
                    "id": "Q515",
                    "name": "city",
                    "__indexColor": "#200118",
                    "index": 279,
                    "x": -1192.2561656005967,
                    "y": -261.0761138225596,
                    "vx": -4.957761262747503e-18,
                    "vy": -1.1489707647894528e-18
                },
                "__indexColor": "#700194",
                "__controlPoints": null,
                "index": 21
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q1736906",
                    "name": "Cat food",
                    "__indexColor": "#580062",
                    "index": 97,
                    "x": 368.67601257901407,
                    "y": -550.288246197966,
                    "vx": 1.3989220444036289e-18,
                    "vy": -2.2081283161607213e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#5c0195",
                "__controlPoints": null,
                "index": 22
            },
            {
                "label": "applies_to_jurisdiction",
                "source": {
                    "id": "Q30862",
                    "name": "311",
                    "__indexColor": "#b000c4",
                    "index": 195,
                    "x": -1202.0130343629853,
                    "y": -230.550225713165,
                    "vx": -4.977260464971189e-18,
                    "vy": -1.1619662056327076e-18
                },
                "target": {
                    "id": "Q515",
                    "name": "city",
                    "__indexColor": "#200118",
                    "index": 279,
                    "x": -1192.2561656005967,
                    "y": -261.0761138225596,
                    "vx": -4.957761262747503e-18,
                    "vy": -1.1489707647894528e-18
                },
                "__indexColor": "#480196",
                "__controlPoints": null,
                "index": 23
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q1736906",
                    "name": "Cat food",
                    "__indexColor": "#580062",
                    "index": 97,
                    "x": 368.67601257901407,
                    "y": -550.288246197966,
                    "vx": 1.3989220444036289e-18,
                    "vy": -2.2081283161607213e-18
                },
                "target": {
                    "id": "Q2095",
                    "name": "Food",
                    "__indexColor": "#ec0081",
                    "index": 128,
                    "x": 426.994515365897,
                    "y": -573.0191141609454,
                    "vx": 1.428531674878206e-18,
                    "vy": -2.353345414724917e-18
                },
                "__indexColor": "#340197",
                "__controlPoints": null,
                "index": 24
            },
            {
                "label": "operator",
                "source": {
                    "id": "Q30862",
                    "name": "311",
                    "__indexColor": "#b000c4",
                    "index": 195,
                    "x": -1202.0130343629853,
                    "y": -230.550225713165,
                    "vx": -4.977260464971189e-18,
                    "vy": -1.1619662056327076e-18
                },
                "target": {
                    "id": "Q515",
                    "name": "city",
                    "__indexColor": "#200118",
                    "index": 279,
                    "x": -1192.2561656005967,
                    "y": -261.0761138225596,
                    "vx": -4.957761262747503e-18,
                    "vy": -1.1489707647894528e-18
                },
                "__indexColor": "#200198",
                "__controlPoints": null,
                "index": 25
            },
            {
                "label": "subsidiary",
                "source": {
                    "id": "Q864407",
                    "name": "The Home Depot",
                    "__indexColor": "#b8016a",
                    "index": 361,
                    "x": 723.767057808894,
                    "y": -951.133435745494,
                    "vx": 3.2429841950429758e-18,
                    "vy": -3.8066617633245815e-18
                },
                "target": {
                    "id": "Q1373493",
                    "name": "Lowe's",
                    "__indexColor": "#14003f",
                    "index": 62,
                    "x": 711.0116129017107,
                    "y": -980.563993491065,
                    "vx": 3.2813108524161244e-18,
                    "vy": -3.8200089243533436e-18
                },
                "__indexColor": "#0c0199",
                "__controlPoints": null,
                "index": 26
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q192995",
                    "name": "Vaccination",
                    "__indexColor": "#040073",
                    "index": 114,
                    "x": -882.5880810150343,
                    "y": -459.27534463913935,
                    "vx": -3.8134475777940304e-18,
                    "vy": -2.343108453431064e-18
                },
                "target": {
                    "id": "Q11190",
                    "name": "Medicine",
                    "__indexColor": "#f8001a",
                    "index": 25,
                    "x": -889.7009222497552,
                    "y": -427.6877692069026,
                    "vx": -3.874567946665365e-18,
                    "vy": -2.3611203726694383e-18
                },
                "__indexColor": "#f8019a",
                "__controlPoints": null,
                "index": 27
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q1373493",
                    "name": "Lowe's",
                    "__indexColor": "#14003f",
                    "index": 62,
                    "x": 711.0116129017107,
                    "y": -980.563993491065,
                    "vx": 3.2813108524161244e-18,
                    "vy": -3.8200089243533436e-18
                },
                "target": {
                    "id": "Q864407",
                    "name": "The Home Depot",
                    "__indexColor": "#b8016a",
                    "index": 361,
                    "x": 723.767057808894,
                    "y": -951.133435745494,
                    "vx": 3.2429841950429758e-18,
                    "vy": -3.8066617633245815e-18
                },
                "__indexColor": "#e4019b",
                "__controlPoints": null,
                "index": 28
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q134808",
                    "name": "Vaccine",
                    "__indexColor": "#50003c",
                    "index": 59,
                    "x": -901.6897232080973,
                    "y": -397.5805482480631,
                    "vx": -3.89000185112203e-18,
                    "vy": -2.3650579706329625e-18
                },
                "target": {
                    "id": "Q11190",
                    "name": "Medicine",
                    "__indexColor": "#f8001a",
                    "index": 25,
                    "x": -889.7009222497552,
                    "y": -427.6877692069026,
                    "vx": -3.874567946665365e-18,
                    "vy": -2.3611203726694383e-18
                },
                "__indexColor": "#d0019c",
                "__controlPoints": null,
                "index": 29
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q864407",
                    "name": "The Home Depot",
                    "__indexColor": "#b8016a",
                    "index": 361,
                    "x": 723.767057808894,
                    "y": -951.133435745494,
                    "vx": 3.2429841950429758e-18,
                    "vy": -3.8066617633245815e-18
                },
                "target": {
                    "id": "Q1373493",
                    "name": "Lowe's",
                    "__indexColor": "#14003f",
                    "index": 62,
                    "x": 711.0116129017107,
                    "y": -980.563993491065,
                    "vx": 3.2813108524161244e-18,
                    "vy": -3.8200089243533436e-18
                },
                "__indexColor": "#bc019d",
                "__controlPoints": null,
                "index": 30
            },
            {
                "label": "subsidiary",
                "source": {
                    "id": "Q1373493",
                    "name": "Lowe's",
                    "__indexColor": "#14003f",
                    "index": 62,
                    "x": 711.0116129017107,
                    "y": -980.563993491065,
                    "vx": 3.2813108524161244e-18,
                    "vy": -3.8200089243533436e-18
                },
                "target": {
                    "id": "Q864407",
                    "name": "The Home Depot",
                    "__indexColor": "#b8016a",
                    "index": 361,
                    "x": 723.767057808894,
                    "y": -951.133435745494,
                    "vx": 3.2429841950429758e-18,
                    "vy": -3.8066617633245815e-18
                },
                "__indexColor": "#a8019e",
                "__controlPoints": null,
                "index": 31
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q1190058",
                    "name": "Physical intimacy",
                    "__indexColor": "#1c0025",
                    "index": 36,
                    "x": 942.3118815763365,
                    "y": -337.86942796297893,
                    "vx": 3.7104358163330954e-18,
                    "vy": -1.4675378384850655e-18
                },
                "target": {
                    "id": "Q35127",
                    "name": "Website",
                    "__indexColor": "#5c00d5",
                    "index": 212,
                    "x": 950.3318197417769,
                    "y": -306.79398756304465,
                    "vx": 3.68181024767554e-18,
                    "vy": -1.4475292935235486e-18
                },
                "__indexColor": "#94019f",
                "__controlPoints": null,
                "index": 32
            },
            {
                "label": "product_or_material_produced",
                "source": {
                    "id": "Q630866",
                    "name": "Arby's",
                    "__indexColor": "#50013c",
                    "index": 315,
                    "x": 408.52981271289326,
                    "y": 763.0617540902196,
                    "vx": 1.8639475853362126e-18,
                    "vy": 3.437224356214269e-18
                },
                "target": {
                    "id": "Q496",
                    "name": "feces",
                    "__indexColor": "#10010c",
                    "index": 267,
                    "x": 434.6192258562873,
                    "y": 782.5949992185687,
                    "vx": 1.89777903745955e-18,
                    "vy": 3.38553715331913e-18
                },
                "__indexColor": "#8001a0",
                "__controlPoints": null,
                "index": 33
            },
            {
                "label": "distributed_by",
                "source": {
                    "id": "Q630866",
                    "name": "Arby's",
                    "__indexColor": "#50013c",
                    "index": 315,
                    "x": 408.52981271289326,
                    "y": 763.0617540902196,
                    "vx": 1.8639475853362126e-18,
                    "vy": 3.437224356214269e-18
                },
                "target": {
                    "id": "Q7021239",
                    "name": "Nextdoor",
                    "__indexColor": "#9c0145",
                    "index": 324,
                    "x": 416.0630488830019,
                    "y": 731.3579524792119,
                    "vx": 1.8231055205066306e-18,
                    "vy": 3.4218383798729526e-18
                },
                "__indexColor": "#6c01a1",
                "__controlPoints": null,
                "index": 34
            },
            {
                "label": "location",
                "source": {
                    "id": "Q1161297",
                    "name": "University of Sussex",
                    "__indexColor": "#440023",
                    "index": 34,
                    "x": 788.2115530492391,
                    "y": 457.42262295860513,
                    "vx": 3.0747368456202112e-18,
                    "vy": 2.1468650350920173e-18
                },
                "target": {
                    "id": "Q131491",
                    "name": "Brighton",
                    "__indexColor": "#040033",
                    "index": 50,
                    "x": 756.6429650295464,
                    "y": 451.1751719754456,
                    "vx": 3.0887287565587273e-18,
                    "vy": 2.0942563509340178e-18
                },
                "__indexColor": "#5801a2",
                "__controlPoints": null,
                "index": 35
            },
            {
                "label": "manufacturer",
                "source": {
                    "id": "Q860465",
                    "name": "Roast beef",
                    "__indexColor": "#e00168",
                    "index": 359,
                    "x": 390.2817582628632,
                    "y": 790.1477022453013,
                    "vx": 1.7963143538180396e-18,
                    "vy": 3.4010973705572327e-18
                },
                "target": {
                    "id": "Q630866",
                    "name": "Arby's",
                    "__indexColor": "#50013c",
                    "index": 315,
                    "x": 408.52981271289326,
                    "y": 763.0617540902196,
                    "vx": 1.8639475853362126e-18,
                    "vy": 3.437224356214269e-18
                },
                "__indexColor": "#4401a3",
                "__controlPoints": null,
                "index": 36
            },
            {
                "label": "headquarters_location",
                "source": {
                    "id": "Q2503794",
                    "name": "Northumbria University",
                    "__indexColor": "#4400a3",
                    "index": 162,
                    "x": 322.371132493055,
                    "y": -930.9963502377985,
                    "vx": 9.570155077530501e-19,
                    "vy": -4.103286809430138e-18
                },
                "target": {
                    "id": "Q1425428",
                    "name": "Newcastle upon Tyne",
                    "__indexColor": "#b00044",
                    "index": 67,
                    "x": 290.3889965776881,
                    "y": -933.7048743942436,
                    "vx": 9.69840374603929e-19,
                    "vy": -4.134759973986173e-18
                },
                "__indexColor": "#3001a4",
                "__controlPoints": null,
                "index": 37
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q146",
                    "name": "house cat",
                    "__indexColor": "#38004a",
                    "index": 73,
                    "x": 422.0492864422461,
                    "y": -448.26401241931586,
                    "vx": 1.2902081699400447e-18,
                    "vy": -2.1519808102014627e-18
                },
                "target": {
                    "id": "Q512003",
                    "name": "Creatures",
                    "__indexColor": "#480116",
                    "index": 277,
                    "x": 455.0729039507424,
                    "y": -426.6654634006363,
                    "vx": 1.29722846406441e-18,
                    "vy": -2.1499621328631147e-18
                },
                "__indexColor": "#1c01a5",
                "__controlPoints": null,
                "index": 38
            },
            {
                "label": "location",
                "source": {
                    "id": "Q2503794",
                    "name": "Northumbria University",
                    "__indexColor": "#4400a3",
                    "index": 162,
                    "x": 322.371132493055,
                    "y": -930.9963502377985,
                    "vx": 9.570155077530501e-19,
                    "vy": -4.103286809430138e-18
                },
                "target": {
                    "id": "Q1425428",
                    "name": "Newcastle upon Tyne",
                    "__indexColor": "#b00044",
                    "index": 67,
                    "x": 290.3889965776881,
                    "y": -933.7048743942436,
                    "vx": 9.69840374603929e-19,
                    "vy": -4.134759973986173e-18
                },
                "__indexColor": "#0801a6",
                "__controlPoints": null,
                "index": 39
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q83360",
                    "name": "Thumb",
                    "__indexColor": "#800160",
                    "index": 351,
                    "x": 342.09852890661267,
                    "y": -475.3980116406252,
                    "vx": 1.3215388282447189e-18,
                    "vy": -2.1755420437377077e-18
                },
                "target": {
                    "id": "Q83360",
                    "name": "Thumb",
                    "__indexColor": "#800160",
                    "index": 351,
                    "x": 342.09852890661267,
                    "y": -475.3980116406252,
                    "vx": 1.3215388282447189e-18,
                    "vy": -2.1755420437377077e-18
                },
                "__indexColor": "#f401a7",
                "__controlPoints": null,
                "index": 40
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q2503794",
                    "name": "Northumbria University",
                    "__indexColor": "#4400a3",
                    "index": 162,
                    "x": 322.371132493055,
                    "y": -930.9963502377985,
                    "vx": 9.570155077530501e-19,
                    "vy": -4.103286809430138e-18
                },
                "target": {
                    "id": "Q1425428",
                    "name": "Newcastle upon Tyne",
                    "__indexColor": "#b00044",
                    "index": 67,
                    "x": 290.3889965776881,
                    "y": -933.7048743942436,
                    "vx": 9.69840374603929e-19,
                    "vy": -4.134759973986173e-18
                },
                "__indexColor": "#e001a8",
                "__controlPoints": null,
                "index": 41
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q83360",
                    "name": "Thumb",
                    "__indexColor": "#800160",
                    "index": 351,
                    "x": 342.09852890661267,
                    "y": -475.3980116406252,
                    "vx": 1.3215388282447189e-18,
                    "vy": -2.1755420437377077e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#cc01a9",
                "__controlPoints": null,
                "index": 42
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q9217",
                    "name": "Thai",
                    "__indexColor": "#b40177",
                    "index": 374,
                    "x": 562.2954554525754,
                    "y": -859.8605800582864,
                    "vx": 2.595155124884096e-18,
                    "vy": -3.7440610554937845e-18
                },
                "target": {
                    "id": "Q1320143",
                    "name": "purebred",
                    "__indexColor": "#f00034",
                    "index": 51,
                    "x": 530.5346734511746,
                    "y": -855.5146105280504,
                    "vx": 2.5712251399599094e-18,
                    "vy": -3.939879884389111e-18
                },
                "__indexColor": "#b801aa",
                "__controlPoints": null,
                "index": 43
            },
            {
                "label": "country",
                "source": {
                    "id": "Q27261089",
                    "name": "Semaglutide",
                    "__indexColor": "#b400b7",
                    "index": 182,
                    "x": -1099.9837100997925,
                    "y": 320.5013465021615,
                    "vx": -4.695413910788907e-18,
                    "vy": 1.4354042418789953e-18
                },
                "target": {
                    "id": "Q17",
                    "name": "Japan",
                    "__indexColor": "#e4005b",
                    "index": 90,
                    "x": -1099.167753966347,
                    "y": 352.948014252128,
                    "vx": -4.635567373500825e-18,
                    "vy": 1.4269790011522521e-18
                },
                "__indexColor": "#a401ab",
                "__controlPoints": null,
                "index": 44
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q9217",
                    "name": "Thai",
                    "__indexColor": "#b40177",
                    "index": 374,
                    "x": 562.2954554525754,
                    "y": -859.8605800582864,
                    "vx": 2.595155124884096e-18,
                    "vy": -3.7440610554937845e-18
                },
                "target": {
                    "id": "Q1320143",
                    "name": "purebred",
                    "__indexColor": "#f00034",
                    "index": 51,
                    "x": 530.5346734511746,
                    "y": -855.5146105280504,
                    "vx": 2.5712251399599094e-18,
                    "vy": -3.939879884389111e-18
                },
                "__indexColor": "#9001ac",
                "__controlPoints": null,
                "index": 45
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q97002749",
                    "name": "Eric Isselee",
                    "__indexColor": "#3c017d",
                    "index": 380,
                    "x": 1061.9324188445835,
                    "y": 173.11762051936265,
                    "vx": 4.224108963136908e-18,
                    "vy": 6.393023852961351e-19
                },
                "target": {
                    "id": "Q3482689",
                    "name": "Shutterstock",
                    "__indexColor": "#9800d2",
                    "index": 209,
                    "x": 1077.0261766656597,
                    "y": 144.9088344818908,
                    "vx": 4.27152199447842e-18,
                    "vy": 6.531247893611566e-19
                },
                "__indexColor": "#7c01ad",
                "__controlPoints": null,
                "index": 46
            },
            {
                "label": "has_effect",
                "source": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "target": {
                    "id": "Q83030",
                    "name": "Dementia",
                    "__indexColor": "#94015f",
                    "index": 350,
                    "x": 226.4730204021095,
                    "y": -621.7501596674181,
                    "vx": 1.735722211040912e-18,
                    "vy": -2.7323535129098776e-18
                },
                "__indexColor": "#6801ae",
                "__controlPoints": null,
                "index": 47
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q205835",
                    "name": "Snoring",
                    "__indexColor": "#50007c",
                    "index": 123,
                    "x": 535.1870678299543,
                    "y": -757.8431593622477,
                    "vx": 2.7184530239221785e-18,
                    "vy": -3.540989164942864e-18
                },
                "target": {
                    "id": "Q35831",
                    "name": "Sleep",
                    "__indexColor": "#d000dc",
                    "index": 219,
                    "x": 506.55982467475263,
                    "y": -743.1161329474794,
                    "vx": 2.7324508486425927e-18,
                    "vy": -3.535593459816819e-18
                },
                "__indexColor": "#5401af",
                "__controlPoints": null,
                "index": 48
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q1446181",
                    "name": "Hunter College",
                    "__indexColor": "#4c0049",
                    "index": 72,
                    "x": -1193.4412420636645,
                    "y": 48.62425010611581,
                    "vx": -4.998299322064145e-18,
                    "vy": 3.298280296555178e-19
                },
                "target": {
                    "id": "Q762266",
                    "name": "City University of New York",
                    "__indexColor": "#700154",
                    "index": 339,
                    "x": -1196.805204702838,
                    "y": 80.41276660110893,
                    "vx": -4.9575300316964635e-18,
                    "vy": 3.3385744183383887e-19
                },
                "__indexColor": "#4001b0",
                "__controlPoints": null,
                "index": 49
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q205835",
                    "name": "Snoring",
                    "__indexColor": "#50007c",
                    "index": 123,
                    "x": 535.1870678299543,
                    "y": -757.8431593622477,
                    "vx": 2.7184530239221785e-18,
                    "vy": -3.540989164942864e-18
                },
                "target": {
                    "id": "Q35831",
                    "name": "Sleep",
                    "__indexColor": "#d000dc",
                    "index": 219,
                    "x": 506.55982467475263,
                    "y": -743.1161329474794,
                    "vx": 2.7324508486425927e-18,
                    "vy": -3.535593459816819e-18
                },
                "__indexColor": "#2c01b1",
                "__controlPoints": null,
                "index": 50
            },
            {
                "label": "country_of_origin",
                "source": {
                    "id": "Q27261089",
                    "name": "Semaglutide",
                    "__indexColor": "#b400b7",
                    "index": 182,
                    "x": -1099.9837100997925,
                    "y": 320.5013465021615,
                    "vx": -4.695413910788907e-18,
                    "vy": 1.4354042418789953e-18
                },
                "target": {
                    "id": "Q17",
                    "name": "Japan",
                    "__indexColor": "#e4005b",
                    "index": 90,
                    "x": -1099.167753966347,
                    "y": 352.948014252128,
                    "vx": -4.635567373500825e-18,
                    "vy": 1.4269790011522521e-18
                },
                "__indexColor": "#1801b2",
                "__controlPoints": null,
                "index": 51
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q1161297",
                    "name": "University of Sussex",
                    "__indexColor": "#440023",
                    "index": 34,
                    "x": 788.2115530492391,
                    "y": 457.42262295860513,
                    "vx": 3.0747368456202112e-18,
                    "vy": 2.1468650350920173e-18
                },
                "target": {
                    "id": "Q131491",
                    "name": "Brighton",
                    "__indexColor": "#040033",
                    "index": 50,
                    "x": 756.6429650295464,
                    "y": 451.1751719754456,
                    "vx": 3.0887287565587273e-18,
                    "vy": 2.0942563509340178e-18
                },
                "__indexColor": "#0401b3",
                "__controlPoints": null,
                "index": 52
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q205835",
                    "name": "Snoring",
                    "__indexColor": "#50007c",
                    "index": 123,
                    "x": 535.1870678299543,
                    "y": -757.8431593622477,
                    "vx": 2.7184530239221785e-18,
                    "vy": -3.540989164942864e-18
                },
                "target": {
                    "id": "Q35831",
                    "name": "Sleep",
                    "__indexColor": "#d000dc",
                    "index": 219,
                    "x": 506.55982467475263,
                    "y": -743.1161329474794,
                    "vx": 2.7324508486425927e-18,
                    "vy": -3.535593459816819e-18
                },
                "__indexColor": "#f001b4",
                "__controlPoints": null,
                "index": 53
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q122367466",
                    "name": "dog caresses sick sheep: shepherd knows that it hopes for sheep's death",
                    "__indexColor": "#7c002d",
                    "index": 44,
                    "x": 203.9741320054283,
                    "y": -653.5933411217185,
                    "vx": 1.903014219890384e-18,
                    "vy": -2.833331948798686e-18
                },
                "target": {
                    "id": "Q83030",
                    "name": "Dementia",
                    "__indexColor": "#94015f",
                    "index": 350,
                    "x": 226.4730204021095,
                    "y": -621.7501596674181,
                    "vx": 1.735722211040912e-18,
                    "vy": -2.7323535129098776e-18
                },
                "__indexColor": "#dc01b5",
                "__controlPoints": null,
                "index": 54
            },
            {
                "label": "has_effect",
                "source": {
                    "id": "Q122367466",
                    "name": "dog caresses sick sheep: shepherd knows that it hopes for sheep's death",
                    "__indexColor": "#7c002d",
                    "index": 44,
                    "x": 203.9741320054283,
                    "y": -653.5933411217185,
                    "vx": 1.903014219890384e-18,
                    "vy": -2.833331948798686e-18
                },
                "target": {
                    "id": "Q83030",
                    "name": "Dementia",
                    "__indexColor": "#94015f",
                    "index": 350,
                    "x": 226.4730204021095,
                    "y": -621.7501596674181,
                    "vx": 1.735722211040912e-18,
                    "vy": -2.7323535129098776e-18
                },
                "__indexColor": "#c801b6",
                "__controlPoints": null,
                "index": 55
            },
            {
                "label": "subsidiary",
                "source": {
                    "id": "Q762266",
                    "name": "City University of New York",
                    "__indexColor": "#700154",
                    "index": 339,
                    "x": -1196.805204702838,
                    "y": 80.41276660110893,
                    "vx": -4.9575300316964635e-18,
                    "vy": 3.3385744183383887e-19
                },
                "target": {
                    "id": "Q1446181",
                    "name": "Hunter College",
                    "__indexColor": "#4c0049",
                    "index": 72,
                    "x": -1193.4412420636645,
                    "y": 48.62425010611581,
                    "vx": -4.998299322064145e-18,
                    "vy": 3.298280296555178e-19
                },
                "__indexColor": "#b401b7",
                "__controlPoints": null,
                "index": 56
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q2558748",
                    "name": "Rapid Eye Movement",
                    "__indexColor": "#6800ae",
                    "index": 173,
                    "x": 525.4031975128108,
                    "y": -716.4101651855834,
                    "vx": 2.6551607050807835e-18,
                    "vy": -3.5018053957678e-18
                },
                "target": {
                    "id": "Q35831",
                    "name": "Sleep",
                    "__indexColor": "#d000dc",
                    "index": 219,
                    "x": 506.55982467475263,
                    "y": -743.1161329474794,
                    "vx": 2.7324508486425927e-18,
                    "vy": -3.535593459816819e-18
                },
                "__indexColor": "#a001b8",
                "__controlPoints": null,
                "index": 57
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q190087",
                    "name": "data type",
                    "__indexColor": "#400070",
                    "index": 111,
                    "x": -976.8054197537667,
                    "y": 44.26492028849462,
                    "vx": -4.7875063399240386e-18,
                    "vy": 3.002951008044322e-19
                },
                "target": {
                    "id": "Q133500",
                    "name": "learning",
                    "__indexColor": "#b40037",
                    "index": 54,
                    "x": -982.3083572191408,
                    "y": 12.699993490778501,
                    "vx": -4.835581561004267e-18,
                    "vy": 3.146384413617402e-19
                },
                "__indexColor": "#8c01b9",
                "__controlPoints": null,
                "index": 58
            },
            {
                "label": "use",
                "source": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "target": {
                    "id": "Q167676",
                    "name": "Sensor",
                    "__indexColor": "#f8005a",
                    "index": 89,
                    "x": 179.68641600666916,
                    "y": -578.934022567503,
                    "vx": 1.395560738890211e-18,
                    "vy": -2.95919140311515e-18
                },
                "__indexColor": "#7801ba",
                "__controlPoints": null,
                "index": 59
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q54557330",
                    "name": "Tri-County Humane Society",
                    "__indexColor": "#cc0129",
                    "index": 296,
                    "x": 951.7624550922854,
                    "y": 379.31858032573047,
                    "vx": 3.753341790619664e-18,
                    "vy": 1.5699589090690769e-18
                },
                "target": {
                    "id": "Q189153",
                    "name": "Saint-Cloud",
                    "__indexColor": "#54006f",
                    "index": 110,
                    "x": 953.9690471188645,
                    "y": 345.1848679388888,
                    "vx": 3.714349010402033e-18,
                    "vy": 1.5776783565014944e-18
                },
                "__indexColor": "#6401bb",
                "__controlPoints": null,
                "index": 60
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q2558748",
                    "name": "Rapid Eye Movement",
                    "__indexColor": "#6800ae",
                    "index": 173,
                    "x": 525.4031975128108,
                    "y": -716.4101651855834,
                    "vx": 2.6551607050807835e-18,
                    "vy": -3.5018053957678e-18
                },
                "target": {
                    "id": "Q35831",
                    "name": "Sleep",
                    "__indexColor": "#d000dc",
                    "index": 219,
                    "x": 506.55982467475263,
                    "y": -743.1161329474794,
                    "vx": 2.7324508486425927e-18,
                    "vy": -3.535593459816819e-18
                },
                "__indexColor": "#5001bc",
                "__controlPoints": null,
                "index": 61
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q485537",
                    "name": "odor",
                    "__indexColor": "#4c0109",
                    "index": 264,
                    "x": 262.4352509251852,
                    "y": 576.3011549884149,
                    "vx": 1.3835435184433277e-18,
                    "vy": 2.6877393982358057e-18
                },
                "target": {
                    "id": "Q12078",
                    "name": "cancer",
                    "__indexColor": "#cc0029",
                    "index": 40,
                    "x": 235.4245414550133,
                    "y": 594.3396985996519,
                    "vx": 1.4211682269356218e-18,
                    "vy": 2.737634251932667e-18
                },
                "__indexColor": "#3c01bd",
                "__controlPoints": null,
                "index": 62
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q190087",
                    "name": "data type",
                    "__indexColor": "#400070",
                    "index": 111,
                    "x": -976.8054197537667,
                    "y": 44.26492028849462,
                    "vx": -4.7875063399240386e-18,
                    "vy": 3.002951008044322e-19
                },
                "target": {
                    "id": "Q133500",
                    "name": "learning",
                    "__indexColor": "#b40037",
                    "index": 54,
                    "x": -982.3083572191408,
                    "y": 12.699993490778501,
                    "vx": -4.835581561004267e-18,
                    "vy": 3.146384413617402e-19
                },
                "__indexColor": "#2801be",
                "__controlPoints": null,
                "index": 63
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q54557330",
                    "name": "Tri-County Humane Society",
                    "__indexColor": "#cc0129",
                    "index": 296,
                    "x": 951.7624550922854,
                    "y": 379.31858032573047,
                    "vx": 3.753341790619664e-18,
                    "vy": 1.5699589090690769e-18
                },
                "target": {
                    "id": "Q119216306",
                    "name": "St Cloud",
                    "__indexColor": "#080026",
                    "index": 37,
                    "x": 954.3969975277732,
                    "y": 412.40572190476394,
                    "vx": 3.812800855590388e-18,
                    "vy": 1.5662623266630341e-18
                },
                "__indexColor": "#1401bf",
                "__controlPoints": null,
                "index": 64
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q36348",
                    "name": "dream",
                    "__indexColor": "#9400df",
                    "index": 222,
                    "x": 553.4932575111361,
                    "y": -107.96667123688496,
                    "vx": 2.431322655356137e-18,
                    "vy": -1.9538794057688118e-19
                },
                "target": {
                    "id": "Q192581",
                    "name": "job activity",
                    "__indexColor": "#180072",
                    "index": 113,
                    "x": 574.7931535272735,
                    "y": -132.54620903551663,
                    "vx": 2.413765306964311e-18,
                    "vy": -1.7590285275317916e-19
                },
                "__indexColor": "#0001c0",
                "__controlPoints": null,
                "index": 65
            },
            {
                "label": "studied_by",
                "source": {
                    "id": "Q12078",
                    "name": "cancer",
                    "__indexColor": "#cc0029",
                    "index": 40,
                    "x": 235.4245414550133,
                    "y": 594.3396985996519,
                    "vx": 1.4211682269356218e-18,
                    "vy": 2.737634251932667e-18
                },
                "target": {
                    "id": "Q19760770",
                    "name": "early detection of disease",
                    "__indexColor": "#dc0075",
                    "index": 116,
                    "x": 209.85054581087124,
                    "y": 615.784546403654,
                    "vx": 1.390938957869361e-18,
                    "vy": 2.831355397017833e-18
                },
                "__indexColor": "#ec01c1",
                "__controlPoints": null,
                "index": 66
            },
            {
                "label": "headquarters_location",
                "source": {
                    "id": "Q54557330",
                    "name": "Tri-County Humane Society",
                    "__indexColor": "#cc0129",
                    "index": 296,
                    "x": 951.7624550922854,
                    "y": 379.31858032573047,
                    "vx": 3.753341790619664e-18,
                    "vy": 1.5699589090690769e-18
                },
                "target": {
                    "id": "Q189153",
                    "name": "Saint-Cloud",
                    "__indexColor": "#54006f",
                    "index": 110,
                    "x": 953.9690471188645,
                    "y": 345.1848679388888,
                    "vx": 3.714349010402033e-18,
                    "vy": 1.5776783565014944e-18
                },
                "__indexColor": "#d801c2",
                "__controlPoints": null,
                "index": 67
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q24776795",
                    "name": "Fido domain",
                    "__indexColor": "#94009f",
                    "index": 158,
                    "x": 241.4050189089679,
                    "y": -530.2841032423739,
                    "vx": 1.4457170920800316e-18,
                    "vy": -2.9019045945722214e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#c401c3",
                "__controlPoints": null,
                "index": 68
            },
            {
                "label": "studies",
                "source": {
                    "id": "Q19760770",
                    "name": "early detection of disease",
                    "__indexColor": "#dc0075",
                    "index": 116,
                    "x": 209.85054581087124,
                    "y": 615.784546403654,
                    "vx": 1.390938957869361e-18,
                    "vy": 2.831355397017833e-18
                },
                "target": {
                    "id": "Q12078",
                    "name": "cancer",
                    "__indexColor": "#cc0029",
                    "index": 40,
                    "x": 235.4245414550133,
                    "y": 594.3396985996519,
                    "vx": 1.4211682269356218e-18,
                    "vy": 2.737634251932667e-18
                },
                "__indexColor": "#b001c4",
                "__controlPoints": null,
                "index": 69
            },
            {
                "label": "different_from",
                "source": {
                    "id": "Q36348",
                    "name": "dream",
                    "__indexColor": "#9400df",
                    "index": 222,
                    "x": 553.4932575111361,
                    "y": -107.96667123688496,
                    "vx": 2.431322655356137e-18,
                    "vy": -1.9538794057688118e-19
                },
                "target": {
                    "id": "Q211402",
                    "name": "Rapid eye movement sleep",
                    "__indexColor": "#9c0085",
                    "index": 132,
                    "x": 521.5619047849109,
                    "y": -103.21701231542714,
                    "vx": 2.410902813201869e-18,
                    "vy": -1.3429988921050885e-19
                },
                "__indexColor": "#9c01c5",
                "__controlPoints": null,
                "index": 70
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q121032563",
                    "name": "Detect cancer before it starts by finding cell changes",
                    "__indexColor": "#b8002a",
                    "index": 41,
                    "x": 184.53490085287845,
                    "y": 636.2807849538549,
                    "vx": 1.4542183724396381e-18,
                    "vy": 2.8994406199459112e-18
                },
                "target": {
                    "id": "Q19760770",
                    "name": "early detection of disease",
                    "__indexColor": "#dc0075",
                    "index": 116,
                    "x": 209.85054581087124,
                    "y": 615.784546403654,
                    "vx": 1.390938957869361e-18,
                    "vy": 2.831355397017833e-18
                },
                "__indexColor": "#8801c6",
                "__controlPoints": null,
                "index": 71
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q24776795",
                    "name": "Fido domain",
                    "__indexColor": "#94009f",
                    "index": 158,
                    "x": 241.4050189089679,
                    "y": -530.2841032423739,
                    "vx": 1.4457170920800316e-18,
                    "vy": -2.9019045945722214e-18
                },
                "target": {
                    "id": "Q5",
                    "name": "human",
                    "__indexColor": "#ac0111",
                    "index": 272,
                    "x": 210.8063387797364,
                    "y": -509.18123197545094,
                    "vx": 1.1765634083402088e-18,
                    "vy": -3.1966344267965396e-18
                },
                "__indexColor": "#7401c7",
                "__controlPoints": null,
                "index": 72
            },
            {
                "label": "different_from",
                "source": {
                    "id": "Q211402",
                    "name": "Rapid eye movement sleep",
                    "__indexColor": "#9c0085",
                    "index": 132,
                    "x": 521.5619047849109,
                    "y": -103.21701231542714,
                    "vx": 2.410902813201869e-18,
                    "vy": -1.3429988921050885e-19
                },
                "target": {
                    "id": "Q36348",
                    "name": "dream",
                    "__indexColor": "#9400df",
                    "index": 222,
                    "x": 553.4932575111361,
                    "y": -107.96667123688496,
                    "vx": 2.431322655356137e-18,
                    "vy": -1.9538794057688118e-19
                },
                "__indexColor": "#6001c8",
                "__controlPoints": null,
                "index": 73
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q42702746",
                    "name": "David Leavens",
                    "__indexColor": "#7800fa",
                    "index": 249,
                    "x": 811.6742237964537,
                    "y": 479.5408603446533,
                    "vx": 3.0753014979278455e-18,
                    "vy": 2.1460054481872556e-18
                },
                "target": {
                    "id": "Q1161297",
                    "name": "University of Sussex",
                    "__indexColor": "#440023",
                    "index": 34,
                    "x": 788.2115530492391,
                    "y": 457.42262295860513,
                    "vx": 3.0747368456202112e-18,
                    "vy": 2.1468650350920173e-18
                },
                "__indexColor": "#4c01c9",
                "__controlPoints": null,
                "index": 74
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q106001462",
                    "name": "MPR News",
                    "__indexColor": "#e8000e",
                    "index": 13,
                    "x": 948.6983909573942,
                    "y": 312.6838220410114,
                    "vx": 3.7069363056048295e-18,
                    "vy": 1.568226161995462e-18
                },
                "target": {
                    "id": "Q189153",
                    "name": "Saint-Cloud",
                    "__indexColor": "#54006f",
                    "index": 110,
                    "x": 953.9690471188645,
                    "y": 345.1848679388888,
                    "vx": 3.714349010402033e-18,
                    "vy": 1.5776783565014944e-18
                },
                "__indexColor": "#3801ca",
                "__controlPoints": null,
                "index": 75
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q27881473",
                    "name": "Vivek Ramaswamy",
                    "__indexColor": "#5000bc",
                    "index": 187,
                    "x": 264.86851342901963,
                    "y": -584.2254370336736,
                    "vx": 1.6422502054619469e-18,
                    "vy": -2.497530789818023e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#2401cb",
                "__controlPoints": null,
                "index": 76
            },
            {
                "label": "sport",
                "source": {
                    "id": "Q24776795",
                    "name": "Fido domain",
                    "__indexColor": "#94009f",
                    "index": 158,
                    "x": 241.4050189089679,
                    "y": -530.2841032423739,
                    "vx": 1.4457170920800316e-18,
                    "vy": -2.9019045945722214e-18
                },
                "target": {
                    "id": "Q3744290",
                    "name": "instruction fetch",
                    "__indexColor": "#5800e2",
                    "index": 225,
                    "x": 226.60375084284323,
                    "y": -495.65193623624293,
                    "vx": 1.0691353281653814e-18,
                    "vy": -3.0502454031280837e-18
                },
                "__indexColor": "#1001cc",
                "__controlPoints": null,
                "index": 77
            },
            {
                "label": "educated_at",
                "source": {
                    "id": "Q42702746",
                    "name": "David Leavens",
                    "__indexColor": "#7800fa",
                    "index": 249,
                    "x": 811.6742237964537,
                    "y": 479.5408603446533,
                    "vx": 3.0753014979278455e-18,
                    "vy": 2.1460054481872556e-18
                },
                "target": {
                    "id": "Q1161297",
                    "name": "University of Sussex",
                    "__indexColor": "#440023",
                    "index": 34,
                    "x": 788.2115530492391,
                    "y": 457.42262295860513,
                    "vx": 3.0747368456202112e-18,
                    "vy": 2.1468650350920173e-18
                },
                "__indexColor": "#fc01cd",
                "__controlPoints": null,
                "index": 78
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q12478418",
                    "name": "Catster",
                    "__indexColor": "#400030",
                    "index": 47,
                    "x": 933.3015536031039,
                    "y": -279.39569827456137,
                    "vx": 3.702936867092449e-18,
                    "vy": -1.4466094761061988e-18
                },
                "target": {
                    "id": "Q35127",
                    "name": "Website",
                    "__indexColor": "#5c00d5",
                    "index": 212,
                    "x": 950.3318197417769,
                    "y": -306.79398756304465,
                    "vx": 3.68181024767554e-18,
                    "vy": -1.4475292935235486e-18
                },
                "__indexColor": "#e801ce",
                "__controlPoints": null,
                "index": 79
            },
            {
                "label": "significant_event",
                "source": {
                    "id": "Q27881473",
                    "name": "Vivek Ramaswamy",
                    "__indexColor": "#5000bc",
                    "index": 187,
                    "x": 264.86851342901963,
                    "y": -584.2254370336736,
                    "vx": 1.6422502054619469e-18,
                    "vy": -2.497530789818023e-18
                },
                "target": {
                    "id": "Q83030",
                    "name": "Dementia",
                    "__indexColor": "#94015f",
                    "index": 350,
                    "x": 226.4730204021095,
                    "y": -621.7501596674181,
                    "vx": 1.735722211040912e-18,
                    "vy": -2.7323535129098776e-18
                },
                "__indexColor": "#d401cf",
                "__controlPoints": null,
                "index": 80
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q25475054",
                    "name": "Ádám Miklósi",
                    "__indexColor": "#9000ac",
                    "index": 171,
                    "x": -1047.6160926593373,
                    "y": 585.3020986505189,
                    "vx": -4.437205709914166e-18,
                    "vy": 2.2924377659066948e-18
                },
                "target": {
                    "id": "Q499210",
                    "name": "Animal cognition",
                    "__indexColor": "#c00110",
                    "index": 271,
                    "x": -1058.5788784128947,
                    "y": 555.2909416385487,
                    "vx": -4.4331939685412735e-18,
                    "vy": 2.2896076502683253e-18
                },
                "__indexColor": "#c001d0",
                "__controlPoints": null,
                "index": 81
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q27881473",
                    "name": "Vivek Ramaswamy",
                    "__indexColor": "#5000bc",
                    "index": 187,
                    "x": 264.86851342901963,
                    "y": -584.2254370336736,
                    "vx": 1.6422502054619469e-18,
                    "vy": -2.497530789818023e-18
                },
                "target": {
                    "id": "Q83030",
                    "name": "Dementia",
                    "__indexColor": "#94015f",
                    "index": 350,
                    "x": 226.4730204021095,
                    "y": -621.7501596674181,
                    "vx": 1.735722211040912e-18,
                    "vy": -2.7323535129098776e-18
                },
                "__indexColor": "#ac01d1",
                "__controlPoints": null,
                "index": 82
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q106708832",
                    "name": "If I fits I sits: A citizen science investigation into illusory contour susceptibility in domestic cats (Felis silvestris catus)",
                    "__indexColor": "#ac0011",
                    "index": 16,
                    "x": 699.356570723228,
                    "y": -244.78422376205134,
                    "vx": 2.802446256852442e-18,
                    "vy": -1.1686000109489442e-18
                },
                "target": {
                    "id": "Q174923",
                    "name": "optical illusion",
                    "__indexColor": "#300064",
                    "index": 99,
                    "x": 705.1560875232472,
                    "y": -276.3783056140277,
                    "vx": 2.837148161452235e-18,
                    "vy": -1.1686927776141749e-18
                },
                "__indexColor": "#9801d2",
                "__controlPoints": null,
                "index": 83
            },
            {
                "label": "narrative_location",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q38283",
                    "name": "Yokohama",
                    "__indexColor": "#0800e6",
                    "index": 229,
                    "x": -81.18621504162375,
                    "y": -535.0493554955888,
                    "vx": 3.5162551075095944e-20,
                    "vy": -3.2929897565871736e-18
                },
                "__indexColor": "#8401d3",
                "__controlPoints": null,
                "index": 84
            },
            {
                "label": "country",
                "source": {
                    "id": "Q72",
                    "name": "Zürich",
                    "__indexColor": "#38014a",
                    "index": 329,
                    "x": -1042.5653705113498,
                    "y": -363.36628691324415,
                    "vx": -4.5190561928414926e-18,
                    "vy": -1.640890701661579e-18
                },
                "target": {
                    "id": "Q39",
                    "name": "Switzerland",
                    "__indexColor": "#a400eb",
                    "index": 234,
                    "x": -1058.8441715801794,
                    "y": -335.94697123350943,
                    "vx": -4.4851345410238434e-18,
                    "vy": -1.6178421243609792e-18
                },
                "__indexColor": "#7001d4",
                "__controlPoints": null,
                "index": 85
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q36348",
                    "name": "dream",
                    "__indexColor": "#9400df",
                    "index": 222,
                    "x": 553.4932575111361,
                    "y": -107.96667123688496,
                    "vx": 2.431322655356137e-18,
                    "vy": -1.9538794057688118e-19
                },
                "target": {
                    "id": "Q7961148",
                    "name": "Waking",
                    "__indexColor": "#e4015b",
                    "index": 346,
                    "x": 572.8474896526972,
                    "y": -81.72122896747948,
                    "vx": 2.459427330135553e-18,
                    "vy": -2.1046341295956151e-19
                },
                "__indexColor": "#5c01d5",
                "__controlPoints": null,
                "index": 86
            },
            {
                "label": "developer",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q2740414",
                    "name": "Team Ninja",
                    "__indexColor": "#7800ba",
                    "index": 185,
                    "x": -69.26136330036097,
                    "y": -561.5543465701152,
                    "vx": 8.003785867631209e-21,
                    "vy": -3.267411822926403e-18
                },
                "__indexColor": "#4801d6",
                "__controlPoints": null,
                "index": 87
            },
            {
                "label": "country",
                "source": {
                    "id": "Q26575",
                    "name": "Thái Nguyên",
                    "__indexColor": "#f000b4",
                    "index": 179,
                    "x": -103.38272874048621,
                    "y": 705.4505561821425,
                    "vx": -6.136953218062125e-19,
                    "vy": 2.825398318025506e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#3401d7",
                "__controlPoints": null,
                "index": 88
            },
            {
                "label": "use",
                "source": {
                    "id": "Q2095",
                    "name": "Food",
                    "__indexColor": "#ec0081",
                    "index": 128,
                    "x": 426.994515365897,
                    "y": -573.0191141609454,
                    "vx": 1.428531674878206e-18,
                    "vy": -2.353345414724917e-18
                },
                "target": {
                    "id": "Q25379",
                    "name": "play",
                    "__indexColor": "#b800aa",
                    "index": 169,
                    "x": 464.0275183365342,
                    "y": -583.4210355717632,
                    "vx": 1.4847285906838191e-18,
                    "vy": -2.428388281616197e-18
                },
                "__indexColor": "#2001d8",
                "__controlPoints": null,
                "index": 89
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q2740414",
                    "name": "Team Ninja",
                    "__indexColor": "#7800ba",
                    "index": 185,
                    "x": -69.26136330036097,
                    "y": -561.5543465701152,
                    "vx": 8.003785867631209e-21,
                    "vy": -3.267411822926403e-18
                },
                "__indexColor": "#0c01d9",
                "__controlPoints": null,
                "index": 90
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q85951363",
                    "name": "Elizabeth Renner",
                    "__indexColor": "#080166",
                    "index": 357,
                    "x": -455.4060919254936,
                    "y": 1095.0911968787955,
                    "vx": -1.6382566506183386e-18,
                    "vy": 4.782175408281303e-18
                },
                "target": {
                    "id": "Q10861331",
                    "name": "zoopsychology",
                    "__indexColor": "#700014",
                    "index": 19,
                    "x": -428.27327517348186,
                    "y": 1112.1755431776528,
                    "vx": -1.637288252604331e-18,
                    "vy": 4.78046580084056e-18
                },
                "__indexColor": "#f801da",
                "__controlPoints": null,
                "index": 91
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q388162",
                    "name": "Flea",
                    "__indexColor": "#cc00e9",
                    "index": 232,
                    "x": -265.8122038119365,
                    "y": -810.4466723375135,
                    "vx": -1.3003394388028048e-18,
                    "vy": -4.344366659734056e-18
                },
                "target": {
                    "id": "Q12140",
                    "name": "Medication",
                    "__indexColor": "#a4002b",
                    "index": 42,
                    "x": -263.26589381448076,
                    "y": -778.7251440827137,
                    "vx": -1.336309023408159e-18,
                    "vy": -4.340657306403681e-18
                },
                "__indexColor": "#e401db",
                "__controlPoints": null,
                "index": 92
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q173626",
                    "name": "Pac-Man",
                    "__indexColor": "#6c0061",
                    "index": 96,
                    "x": 453.5359758194337,
                    "y": -1153.9498472399753,
                    "vx": 1.923062329783196e-18,
                    "vy": -4.922750066869081e-18
                },
                "target": {
                    "id": "Q35687320",
                    "name": "Visual Puzzles, Figure Weights, and Cancellation: Some Preliminary Hypotheses on the Functional and Neural Substrates of These Three New WAIS-IV Subtests",
                    "__indexColor": "#f800da",
                    "index": 217,
                    "x": 483.4504970792763,
                    "y": -1142.1083052969436,
                    "vx": 1.9044244995769557e-18,
                    "vy": -4.891055128585991e-18
                },
                "__indexColor": "#d001dc",
                "__controlPoints": null,
                "index": 93
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q54557330",
                    "name": "Tri-County Humane Society",
                    "__indexColor": "#cc0129",
                    "index": 296,
                    "x": 951.7624550922854,
                    "y": 379.31858032573047,
                    "vx": 3.753341790619664e-18,
                    "vy": 1.5699589090690769e-18
                },
                "target": {
                    "id": "Q20996030",
                    "name": "Crosby",
                    "__indexColor": "#c40083",
                    "index": 130,
                    "x": 919.552656119736,
                    "y": 385.2180809958492,
                    "vx": 3.779449528287226e-18,
                    "vy": 1.7449632281672134e-18
                },
                "__indexColor": "#bc01dd",
                "__controlPoints": null,
                "index": 94
            },
            {
                "label": "has_effect",
                "source": {
                    "id": "Q100431127",
                    "name": "SARS-CoV-2 coronavirus in water and wastewater: A critical review about presence and concern",
                    "__indexColor": "#d80002",
                    "index": 1,
                    "x": -175.19787372259643,
                    "y": -1042.4638103114412,
                    "vx": -1.023594718567568e-18,
                    "vy": -4.483642943823222e-18
                },
                "target": {
                    "id": "Q88058672",
                    "name": "COVID-19 disease in pregnancy",
                    "__indexColor": "#54016f",
                    "index": 366,
                    "x": -143.31105462175162,
                    "y": -1044.8862833135329,
                    "vx": -1.0237963232049425e-18,
                    "vy": -4.464554595513433e-18
                },
                "__indexColor": "#a801de",
                "__controlPoints": null,
                "index": 95
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q1657681",
                    "name": "Michel Jouvet",
                    "__indexColor": "#200058",
                    "index": 87,
                    "x": 803.2270962902338,
                    "y": -171.42750591726946,
                    "vx": 3.234549889586704e-18,
                    "vy": -5.357801409896402e-19
                },
                "target": {
                    "id": "Q4032",
                    "name": "Claude Bernard University Lyon 1",
                    "__indexColor": "#5400ef",
                    "index": 238,
                    "x": 807.1101355467185,
                    "y": -203.3852267470187,
                    "vx": 3.241432824974291e-18,
                    "vy": -5.235458461432843e-19
                },
                "__indexColor": "#9401df",
                "__controlPoints": null,
                "index": 96
            },
            {
                "label": "genre",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q343568",
                    "name": "Action-adventure game",
                    "__indexColor": "#d400cf",
                    "index": 206,
                    "x": -46.05335848818867,
                    "y": -567.6479039926267,
                    "vx": 4.638271692608044e-20,
                    "vy": -3.3085862304274123e-18
                },
                "__indexColor": "#8001e0",
                "__controlPoints": null,
                "index": 97
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q622664",
                    "name": "University of California",
                    "__indexColor": "#64013b",
                    "index": 314,
                    "x": 445.86565766328494,
                    "y": -1010.9900037765946,
                    "vx": 1.7448576831960523e-18,
                    "vy": -4.369915793896635e-18
                },
                "target": {
                    "id": "Q129421",
                    "name": "University of California, Davis",
                    "__indexColor": "#180032",
                    "index": 49,
                    "x": 418.8886589032742,
                    "y": -1029.4956486036012,
                    "vx": 1.7166204430265443e-18,
                    "vy": -4.348917683218349e-18
                },
                "__indexColor": "#6c01e1",
                "__controlPoints": null,
                "index": 98
            },
            {
                "label": "has_cause",
                "source": {
                    "id": "Q88058672",
                    "name": "COVID-19 disease in pregnancy",
                    "__indexColor": "#54016f",
                    "index": 366,
                    "x": -143.31105462175162,
                    "y": -1044.8862833135329,
                    "vx": -1.0237963232049425e-18,
                    "vy": -4.464554595513433e-18
                },
                "target": {
                    "id": "Q100431127",
                    "name": "SARS-CoV-2 coronavirus in water and wastewater: A critical review about presence and concern",
                    "__indexColor": "#d80002",
                    "index": 1,
                    "x": -175.19787372259643,
                    "y": -1042.4638103114412,
                    "vx": -1.023594718567568e-18,
                    "vy": -4.483642943823222e-18
                },
                "__indexColor": "#5801e2",
                "__controlPoints": null,
                "index": 99
            },
            {
                "label": "drug_used_for_treatment",
                "source": {
                    "id": "Q388162",
                    "name": "Flea",
                    "__indexColor": "#cc00e9",
                    "index": 232,
                    "x": -265.8122038119365,
                    "y": -810.4466723375135,
                    "vx": -1.3003394388028048e-18,
                    "vy": -4.344366659734056e-18
                },
                "target": {
                    "id": "Q12140",
                    "name": "Medication",
                    "__indexColor": "#a4002b",
                    "index": 42,
                    "x": -263.26589381448076,
                    "y": -778.7251440827137,
                    "vx": -1.336309023408159e-18,
                    "vy": -4.340657306403681e-18
                },
                "__indexColor": "#4401e3",
                "__controlPoints": null,
                "index": 100
            },
            {
                "label": "educated_at",
                "source": {
                    "id": "Q1657681",
                    "name": "Michel Jouvet",
                    "__indexColor": "#200058",
                    "index": 87,
                    "x": 803.2270962902338,
                    "y": -171.42750591726946,
                    "vx": 3.234549889586704e-18,
                    "vy": -5.357801409896402e-19
                },
                "target": {
                    "id": "Q4032",
                    "name": "Claude Bernard University Lyon 1",
                    "__indexColor": "#5400ef",
                    "index": 238,
                    "x": 807.1101355467185,
                    "y": -203.3852267470187,
                    "vx": 3.241432824974291e-18,
                    "vy": -5.235458461432843e-19
                },
                "__indexColor": "#3001e4",
                "__controlPoints": null,
                "index": 101
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q129421",
                    "name": "University of California, Davis",
                    "__indexColor": "#180032",
                    "index": 49,
                    "x": 418.8886589032742,
                    "y": -1029.4956486036012,
                    "vx": 1.7166204430265443e-18,
                    "vy": -4.348917683218349e-18
                },
                "target": {
                    "id": "Q622664",
                    "name": "University of California",
                    "__indexColor": "#64013b",
                    "index": 314,
                    "x": 445.86565766328494,
                    "y": -1010.9900037765946,
                    "vx": 1.7448576831960523e-18,
                    "vy": -4.369915793896635e-18
                },
                "__indexColor": "#1c01e5",
                "__controlPoints": null,
                "index": 102
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "target": {
                    "id": "Q16565",
                    "name": "Charlotte, North Carolina",
                    "__indexColor": "#480056",
                    "index": 85,
                    "x": 909.8355276402859,
                    "y": 79.7140780564557,
                    "vx": 3.509561323877975e-18,
                    "vy": 1.5436448266010634e-19
                },
                "__indexColor": "#0801e6",
                "__controlPoints": null,
                "index": 103
            },
            {
                "label": "has_cause",
                "source": {
                    "id": "Q84263196",
                    "name": "COVID-19",
                    "__indexColor": "#300164",
                    "index": 355,
                    "x": -207.32719381275933,
                    "y": -1040.206212426451,
                    "vx": -1.0333168268882753e-18,
                    "vy": -4.50421007712248e-18
                },
                "target": {
                    "id": "Q100431127",
                    "name": "SARS-CoV-2 coronavirus in water and wastewater: A critical review about presence and concern",
                    "__indexColor": "#d80002",
                    "index": 1,
                    "x": -175.19787372259643,
                    "y": -1042.4638103114412,
                    "vx": -1.023594718567568e-18,
                    "vy": -4.483642943823222e-18
                },
                "__indexColor": "#f401e7",
                "__controlPoints": null,
                "index": 104
            },
            {
                "label": "country",
                "source": {
                    "id": "Q4032",
                    "name": "Claude Bernard University Lyon 1",
                    "__indexColor": "#5400ef",
                    "index": 238,
                    "x": 807.1101355467185,
                    "y": -203.3852267470187,
                    "vx": 3.241432824974291e-18,
                    "vy": -5.235458461432843e-19
                },
                "target": {
                    "id": "Q142",
                    "name": "France",
                    "__indexColor": "#d80042",
                    "index": 65,
                    "x": 809.0783723893554,
                    "y": -235.82662344215632,
                    "vx": 3.2395397292943278e-18,
                    "vy": -5.20338933353502e-19
                },
                "__indexColor": "#e001e8",
                "__controlPoints": null,
                "index": 105
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q484645",
                    "name": "Anal gland",
                    "__indexColor": "#600108",
                    "index": 263,
                    "x": 304.80586930994315,
                    "y": -554.7359249661815,
                    "vx": 1.1698217564718512e-18,
                    "vy": -2.196890712702953e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#cc01e9",
                "__controlPoints": null,
                "index": 106
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q271716",
                    "name": "Personality psychology",
                    "__indexColor": "#c800b6",
                    "index": 181,
                    "x": 364.20556887081574,
                    "y": -520.4303711815347,
                    "vx": 1.3559796994467327e-18,
                    "vy": -2.1609320808538216e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#b801ea",
                "__controlPoints": null,
                "index": 107
            },
            {
                "label": "headquarters_location",
                "source": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "target": {
                    "id": "Q16565",
                    "name": "Charlotte, North Carolina",
                    "__indexColor": "#480056",
                    "index": 85,
                    "x": 909.8355276402859,
                    "y": 79.7140780564557,
                    "vx": 3.509561323877975e-18,
                    "vy": 1.5436448266010634e-19
                },
                "__indexColor": "#a401eb",
                "__controlPoints": null,
                "index": 108
            },
            {
                "label": "followed_by",
                "source": {
                    "id": "Q804558",
                    "name": "Bakumatsu",
                    "__indexColor": "#d0015c",
                    "index": 347,
                    "x": -1118.7271104366512,
                    "y": -539.0234946994112,
                    "vx": -4.466814560305306e-18,
                    "vy": -2.4873352741530554e-18
                },
                "target": {
                    "id": "Q205662",
                    "name": "Tokugawa shogunate",
                    "__indexColor": "#64007b",
                    "index": 122,
                    "x": -1104.001872728231,
                    "y": -567.6432102640606,
                    "vx": -4.484977977197932e-18,
                    "vy": -2.4855370624647013e-18
                },
                "__indexColor": "#9001ec",
                "__controlPoints": null,
                "index": 109
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q24776795",
                    "name": "Fido domain",
                    "__indexColor": "#94009f",
                    "index": 158,
                    "x": 241.4050189089679,
                    "y": -530.2841032423739,
                    "vx": 1.4457170920800316e-18,
                    "vy": -2.9019045945722214e-18
                },
                "target": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "__indexColor": "#7c01ed",
                "__controlPoints": null,
                "index": 110
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q101497",
                    "name": "Aldehyde",
                    "__indexColor": "#c40003",
                    "index": 2,
                    "x": -515.767027308935,
                    "y": -818.5027253687439,
                    "vx": -2.4785230194650653e-18,
                    "vy": -3.850722440157378e-18
                },
                "target": {
                    "id": "Q174211",
                    "name": "Organic compound",
                    "__indexColor": "#440063",
                    "index": 98,
                    "x": -495.1464723629831,
                    "y": -786.5037786225464,
                    "vx": -2.389951975448127e-18,
                    "vy": -3.827606683003902e-18
                },
                "__indexColor": "#6801ee",
                "__controlPoints": null,
                "index": 111
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q2459901",
                    "name": "compound feed",
                    "__indexColor": "#e4009b",
                    "index": 154,
                    "x": 214.9360619368958,
                    "y": -1082.3532628603261,
                    "vx": 6.768684060523093e-19,
                    "vy": -4.630707941027e-18
                },
                "target": {
                    "id": "Q115959335",
                    "name": "cat litter",
                    "__indexColor": "#580022",
                    "index": 33,
                    "x": 196.35162975513302,
                    "y": -1056.1962461366356,
                    "vx": 7.415908767840855e-19,
                    "vy": -4.582225269328021e-18
                },
                "__indexColor": "#5401ef",
                "__controlPoints": null,
                "index": 112
            },
            {
                "label": "operating_area",
                "source": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "target": {
                    "id": "Q16565",
                    "name": "Charlotte, North Carolina",
                    "__indexColor": "#480056",
                    "index": 85,
                    "x": 909.8355276402859,
                    "y": 79.7140780564557,
                    "vx": 3.509561323877975e-18,
                    "vy": 1.5436448266010634e-19
                },
                "__indexColor": "#4001f0",
                "__controlPoints": null,
                "index": 113
            },
            {
                "label": "country",
                "source": {
                    "id": "Q8684",
                    "name": "Seoul",
                    "__indexColor": "#68016e",
                    "index": 365,
                    "x": -201.99633897152722,
                    "y": 655.9928046058351,
                    "vx": -3.4717697436528203e-19,
                    "vy": 3.3668538953006646e-18
                },
                "target": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "__indexColor": "#2c01f1",
                "__controlPoints": null,
                "index": 114
            },
            {
                "label": "follows",
                "source": {
                    "id": "Q205662",
                    "name": "Tokugawa shogunate",
                    "__indexColor": "#64007b",
                    "index": 122,
                    "x": -1104.001872728231,
                    "y": -567.6432102640606,
                    "vx": -4.484977977197932e-18,
                    "vy": -2.4855370624647013e-18
                },
                "target": {
                    "id": "Q804558",
                    "name": "Bakumatsu",
                    "__indexColor": "#d0015c",
                    "index": 347,
                    "x": -1118.7271104366512,
                    "y": -539.0234946994112,
                    "vx": -4.466814560305306e-18,
                    "vy": -2.4873352741530554e-18
                },
                "__indexColor": "#1801f2",
                "__controlPoints": null,
                "index": 115
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q24776795",
                    "name": "Fido domain",
                    "__indexColor": "#94009f",
                    "index": 158,
                    "x": 241.4050189089679,
                    "y": -530.2841032423739,
                    "vx": 1.4457170920800316e-18,
                    "vy": -2.9019045945722214e-18
                },
                "target": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "__indexColor": "#0401f3",
                "__controlPoints": null,
                "index": 116
            },
            {
                "label": "country_of_origin",
                "source": {
                    "id": "Q18226",
                    "name": "cat meat",
                    "__indexColor": "#cc0069",
                    "index": 104,
                    "x": -75.45595893600019,
                    "y": 689.854839318673,
                    "vx": -4.840976382445841e-19,
                    "vy": 2.7738944766437444e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#f001f4",
                "__controlPoints": null,
                "index": 117
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q153",
                    "name": "ethanol",
                    "__indexColor": "#c00050",
                    "index": 79,
                    "x": -470.7025121688372,
                    "y": -804.6746337584615,
                    "vx": -2.3625385625083787e-18,
                    "vy": -3.843305342294217e-18
                },
                "target": {
                    "id": "Q174211",
                    "name": "Organic compound",
                    "__indexColor": "#440063",
                    "index": 98,
                    "x": -495.1464723629831,
                    "y": -786.5037786225464,
                    "vx": -2.389951975448127e-18,
                    "vy": -3.827606683003902e-18
                },
                "__indexColor": "#dc01f5",
                "__controlPoints": null,
                "index": 118
            },
            {
                "label": "contains_administrative_territorial_entity",
                "source": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "target": {
                    "id": "Q8684",
                    "name": "Seoul",
                    "__indexColor": "#68016e",
                    "index": 365,
                    "x": -201.99633897152722,
                    "y": 655.9928046058351,
                    "vx": -3.4717697436528203e-19,
                    "vy": 3.3668538953006646e-18
                },
                "__indexColor": "#c801f6",
                "__controlPoints": null,
                "index": 119
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q271716",
                    "name": "Personality psychology",
                    "__indexColor": "#c800b6",
                    "index": 181,
                    "x": 364.20556887081574,
                    "y": -520.4303711815347,
                    "vx": 1.3559796994467327e-18,
                    "vy": -2.1609320808538216e-18
                },
                "target": {
                    "id": "Q795052",
                    "name": "Individual",
                    "__indexColor": "#f8015a",
                    "index": 345,
                    "x": 404.69415217032764,
                    "y": -517.4142993265906,
                    "vx": 1.4082898805347787e-18,
                    "vy": -2.17403644684567e-18
                },
                "__indexColor": "#b401f7",
                "__controlPoints": null,
                "index": 120
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q3071471",
                    "name": "Fido Solutions",
                    "__indexColor": "#c400c3",
                    "index": 194,
                    "x": 191.1774695770512,
                    "y": -595.9858455268452,
                    "vx": 1.348304522822673e-18,
                    "vy": -2.957315322189588e-18
                },
                "target": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "__indexColor": "#a001f8",
                "__controlPoints": null,
                "index": 121
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q7567568",
                    "name": "South Jersey",
                    "__indexColor": "#980152",
                    "index": 337,
                    "x": -189.92510744617266,
                    "y": -1220.2706270546855,
                    "vx": -1.070411535996457e-18,
                    "vy": -4.780415423235518e-18
                },
                "target": {
                    "id": "Q7567568",
                    "name": "South Jersey",
                    "__indexColor": "#980152",
                    "index": 337,
                    "x": -189.92510744617266,
                    "y": -1220.2706270546855,
                    "vx": -1.070411535996457e-18,
                    "vy": -4.780415423235518e-18
                },
                "__indexColor": "#8c01f9",
                "__controlPoints": null,
                "index": 122
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q732413",
                    "name": "Ester",
                    "__indexColor": "#fc014d",
                    "index": 332,
                    "x": -466.60101161683383,
                    "y": -816.9191436057604,
                    "vx": -2.409007548807069e-18,
                    "vy": -3.8530289459356705e-18
                },
                "target": {
                    "id": "Q174211",
                    "name": "Organic compound",
                    "__indexColor": "#440063",
                    "index": 98,
                    "x": -495.1464723629831,
                    "y": -786.5037786225464,
                    "vx": -2.389951975448127e-18,
                    "vy": -3.827606683003902e-18
                },
                "__indexColor": "#7801fa",
                "__controlPoints": null,
                "index": 123
            },
            {
                "label": "replaced_by",
                "source": {
                    "id": "Q804558",
                    "name": "Bakumatsu",
                    "__indexColor": "#d0015c",
                    "index": 347,
                    "x": -1118.7271104366512,
                    "y": -539.0234946994112,
                    "vx": -4.466814560305306e-18,
                    "vy": -2.4873352741530554e-18
                },
                "target": {
                    "id": "Q205662",
                    "name": "Tokugawa shogunate",
                    "__indexColor": "#64007b",
                    "index": 122,
                    "x": -1104.001872728231,
                    "y": -567.6432102640606,
                    "vx": -4.484977977197932e-18,
                    "vy": -2.4855370624647013e-18
                },
                "__indexColor": "#6401fb",
                "__controlPoints": null,
                "index": 124
            },
            {
                "label": "contains_administrative_territorial_entity",
                "source": {
                    "id": "Q7567568",
                    "name": "South Jersey",
                    "__indexColor": "#980152",
                    "index": 337,
                    "x": -189.92510744617266,
                    "y": -1220.2706270546855,
                    "vx": -1.070411535996457e-18,
                    "vy": -4.780415423235518e-18
                },
                "target": {
                    "id": "Q7567568",
                    "name": "South Jersey",
                    "__indexColor": "#980152",
                    "index": 337,
                    "x": -189.92510744617266,
                    "y": -1220.2706270546855,
                    "vx": -1.070411535996457e-18,
                    "vy": -4.780415423235518e-18
                },
                "__indexColor": "#5001fc",
                "__controlPoints": null,
                "index": 125
            },
            {
                "label": "inception",
                "source": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "target": {
                    "id": "Q2002",
                    "name": "2015",
                    "__indexColor": "#8c0079",
                    "index": 120,
                    "x": -191.2473288121932,
                    "y": 635.6093418270611,
                    "vx": -3.5836427531701783e-19,
                    "vy": 3.1782989995034637e-18
                },
                "__indexColor": "#3c01fd",
                "__controlPoints": null,
                "index": 126
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q170744",
                    "name": "Ketone",
                    "__indexColor": "#a8005e",
                    "index": 93,
                    "x": -521.0230229885756,
                    "y": -806.772060368353,
                    "vx": -2.3909223401875746e-18,
                    "vy": -3.743439727415525e-18
                },
                "target": {
                    "id": "Q174211",
                    "name": "Organic compound",
                    "__indexColor": "#440063",
                    "index": 98,
                    "x": -495.1464723629831,
                    "y": -786.5037786225464,
                    "vx": -2.389951975448127e-18,
                    "vy": -3.827606683003902e-18
                },
                "__indexColor": "#2801fe",
                "__controlPoints": null,
                "index": 127
            },
            {
                "label": "replaces",
                "source": {
                    "id": "Q205662",
                    "name": "Tokugawa shogunate",
                    "__indexColor": "#64007b",
                    "index": 122,
                    "x": -1104.001872728231,
                    "y": -567.6432102640606,
                    "vx": -4.484977977197932e-18,
                    "vy": -2.4855370624647013e-18
                },
                "target": {
                    "id": "Q804558",
                    "name": "Bakumatsu",
                    "__indexColor": "#d0015c",
                    "index": 347,
                    "x": -1118.7271104366512,
                    "y": -539.0234946994112,
                    "vx": -4.466814560305306e-18,
                    "vy": -2.4873352741530554e-18
                },
                "__indexColor": "#1401ff",
                "__controlPoints": null,
                "index": 128
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q3564777",
                    "name": "WPVI-TV",
                    "__indexColor": "#2000d8",
                    "index": 215,
                    "x": 922.3391503418626,
                    "y": 697.4411483717794,
                    "vx": 3.7700329424361295e-18,
                    "vy": 2.840487740874616e-18
                },
                "target": {
                    "id": "Q1408",
                    "name": "New Jersey",
                    "__indexColor": "#000040",
                    "index": 63,
                    "x": 920.4047341891969,
                    "y": 665.5289250236725,
                    "vx": 3.7672963542801e-18,
                    "vy": 2.8532087686767495e-18
                },
                "__indexColor": "#000200",
                "__controlPoints": null,
                "index": 129
            },
            {
                "label": "capital",
                "source": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "target": {
                    "id": "Q8684",
                    "name": "Seoul",
                    "__indexColor": "#68016e",
                    "index": 365,
                    "x": -201.99633897152722,
                    "y": 655.9928046058351,
                    "vx": -3.4717697436528203e-19,
                    "vy": 3.3668538953006646e-18
                },
                "__indexColor": "#ec0201",
                "__controlPoints": null,
                "index": 130
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q101497",
                    "name": "Aldehyde",
                    "__indexColor": "#c40003",
                    "index": 2,
                    "x": -515.767027308935,
                    "y": -818.5027253687439,
                    "vx": -2.4785230194650653e-18,
                    "vy": -3.850722440157378e-18
                },
                "target": {
                    "id": "Q910267",
                    "name": "Volatile organic compound",
                    "__indexColor": "#f00174",
                    "index": 371,
                    "x": -491.8772338301496,
                    "y": -837.023563727579,
                    "vx": -2.3442062023012483e-18,
                    "vy": -3.905006072886789e-18
                },
                "__indexColor": "#d80202",
                "__controlPoints": null,
                "index": 131
            },
            {
                "label": "diplomatic_relation",
                "source": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#c40203",
                "__controlPoints": null,
                "index": 132
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q2503497",
                    "name": "Kazuma Kiryu",
                    "__indexColor": "#5800a2",
                    "index": 161,
                    "x": -26.558576526070738,
                    "y": -493.7924794667282,
                    "vx": -1.6385235137068705e-20,
                    "vy": -3.2631257491459326e-18
                },
                "__indexColor": "#b00204",
                "__controlPoints": null,
                "index": 133
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q153",
                    "name": "ethanol",
                    "__indexColor": "#c00050",
                    "index": 79,
                    "x": -470.7025121688372,
                    "y": -804.6746337584615,
                    "vx": -2.3625385625083787e-18,
                    "vy": -3.843305342294217e-18
                },
                "target": {
                    "id": "Q910267",
                    "name": "Volatile organic compound",
                    "__indexColor": "#f00174",
                    "index": 371,
                    "x": -491.8772338301496,
                    "y": -837.023563727579,
                    "vx": -2.3442062023012483e-18,
                    "vy": -3.905006072886789e-18
                },
                "__indexColor": "#9c0205",
                "__controlPoints": null,
                "index": 134
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q113961026",
                    "name": "Like a Dragon: Ishin!",
                    "__indexColor": "#94001f",
                    "index": 30,
                    "x": -22.627646970772485,
                    "y": -459.20448292214155,
                    "vx": -9.734451675869096e-20,
                    "vy": -3.244736801848857e-18
                },
                "target": {
                    "id": "Q2503497",
                    "name": "Kazuma Kiryu",
                    "__indexColor": "#5800a2",
                    "index": 161,
                    "x": -26.558576526070738,
                    "y": -493.7924794667282,
                    "vx": -1.6385235137068705e-20,
                    "vy": -3.2631257491459326e-18
                },
                "__indexColor": "#880206",
                "__controlPoints": null,
                "index": 135
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q732413",
                    "name": "Ester",
                    "__indexColor": "#fc014d",
                    "index": 332,
                    "x": -466.60101161683383,
                    "y": -816.9191436057604,
                    "vx": -2.409007548807069e-18,
                    "vy": -3.8530289459356705e-18
                },
                "target": {
                    "id": "Q910267",
                    "name": "Volatile organic compound",
                    "__indexColor": "#f00174",
                    "index": 371,
                    "x": -491.8772338301496,
                    "y": -837.023563727579,
                    "vx": -2.3442062023012483e-18,
                    "vy": -3.905006072886789e-18
                },
                "__indexColor": "#740207",
                "__controlPoints": null,
                "index": 136
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q378450",
                    "name": "Sakamoto Ryōma",
                    "__indexColor": "#1c00e5",
                    "index": 228,
                    "x": 0.5611117934402532,
                    "y": -471.9854541331103,
                    "vx": -4.424625123738737e-21,
                    "vy": -3.2841993013660344e-18
                },
                "target": {
                    "id": "Q2503497",
                    "name": "Kazuma Kiryu",
                    "__indexColor": "#5800a2",
                    "index": 161,
                    "x": -26.558576526070738,
                    "y": -493.7924794667282,
                    "vx": -1.6385235137068705e-20,
                    "vy": -3.2631257491459326e-18
                },
                "__indexColor": "#600208",
                "__controlPoints": null,
                "index": 137
            },
            {
                "label": "operator",
                "source": {
                    "id": "Q2564783",
                    "name": "Paratransit",
                    "__indexColor": "#4000b0",
                    "index": 175,
                    "x": 931.1089976096175,
                    "y": 17.745652024121757,
                    "vx": 3.456190808544765e-18,
                    "vy": 1.5608083884740663e-19
                },
                "target": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "__indexColor": "#4c0209",
                "__controlPoints": null,
                "index": 138
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q170744",
                    "name": "Ketone",
                    "__indexColor": "#a8005e",
                    "index": 93,
                    "x": -521.0230229885756,
                    "y": -806.772060368353,
                    "vx": -2.3909223401875746e-18,
                    "vy": -3.743439727415525e-18
                },
                "target": {
                    "id": "Q910267",
                    "name": "Volatile organic compound",
                    "__indexColor": "#f00174",
                    "index": 371,
                    "x": -491.8772338301496,
                    "y": -837.023563727579,
                    "vx": -2.3442062023012483e-18,
                    "vy": -3.905006072886789e-18
                },
                "__indexColor": "#38020a",
                "__controlPoints": null,
                "index": 139
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q2564783",
                    "name": "Paratransit",
                    "__indexColor": "#4000b0",
                    "index": 175,
                    "x": 931.1089976096175,
                    "y": 17.745652024121757,
                    "vx": 3.456190808544765e-18,
                    "vy": 1.5608083884740663e-19
                },
                "target": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "__indexColor": "#24020b",
                "__controlPoints": null,
                "index": 140
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "target": {
                    "id": "Q21102959",
                    "name": "Deinococcus radiodurans R1",
                    "__indexColor": "#b00084",
                    "index": 131,
                    "x": 1021.9632779508612,
                    "y": -471.08768292882496,
                    "vx": 4.129379302566543e-18,
                    "vy": -1.907542217219162e-18
                },
                "__indexColor": "#10020c",
                "__controlPoints": null,
                "index": 141
            },
            {
                "label": "country",
                "source": {
                    "id": "Q60186259",
                    "name": "Dog and Cat Meat Trade Prohibition Act of 2018",
                    "__indexColor": "#b40137",
                    "index": 310,
                    "x": -122.5022286058427,
                    "y": 699.75788002072,
                    "vx": -6.479420083397357e-19,
                    "vy": 2.7006857731916546e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#fc020d",
                "__controlPoints": null,
                "index": 142
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "target": {
                    "id": "Q2564783",
                    "name": "Paratransit",
                    "__indexColor": "#4000b0",
                    "index": 175,
                    "x": 931.1089976096175,
                    "y": 17.745652024121757,
                    "vx": 3.456190808544765e-18,
                    "vy": 1.5608083884740663e-19
                },
                "__indexColor": "#e8020e",
                "__controlPoints": null,
                "index": 143
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q5772961",
                    "name": "Hissing",
                    "__indexColor": "#dc0135",
                    "index": 308,
                    "x": 329.8248323379595,
                    "y": -552.0255296985976,
                    "vx": 1.3913620856119714e-18,
                    "vy": -2.204159183284921e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#d4020f",
                "__controlPoints": null,
                "index": 144
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q160122",
                    "name": "Influenza A virus subtype H5N1",
                    "__indexColor": "#700054",
                    "index": 83,
                    "x": -747.4003418808504,
                    "y": 841.0700248425525,
                    "vx": -2.780415040366356e-18,
                    "vy": 3.777985758862942e-18
                },
                "target": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "__indexColor": "#c00210",
                "__controlPoints": null,
                "index": 145
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "target": {
                    "id": "Q10990",
                    "name": "Meat",
                    "__indexColor": "#340017",
                    "index": 22,
                    "x": 180.47951958588433,
                    "y": -557.4850589632258,
                    "vx": 1.3687192696862553e-18,
                    "vy": -3.0234769577937905e-18
                },
                "__indexColor": "#ac0211",
                "__controlPoints": null,
                "index": 146
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q2564783",
                    "name": "Paratransit",
                    "__indexColor": "#4000b0",
                    "index": 175,
                    "x": 931.1089976096175,
                    "y": 17.745652024121757,
                    "vx": 3.456190808544765e-18,
                    "vy": 1.5608083884740663e-19
                },
                "target": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "__indexColor": "#980212",
                "__controlPoints": null,
                "index": 147
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q21102959",
                    "name": "Deinococcus radiodurans R1",
                    "__indexColor": "#b00084",
                    "index": 131,
                    "x": 1021.9632779508612,
                    "y": -471.08768292882496,
                    "vx": 4.129379302566543e-18,
                    "vy": -1.907542217219162e-18
                },
                "target": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "__indexColor": "#840213",
                "__controlPoints": null,
                "index": 148
            },
            {
                "label": "country",
                "source": {
                    "id": "Q18042814",
                    "name": "AKR1B10",
                    "__indexColor": "#f40067",
                    "index": 102,
                    "x": -72.60026154199895,
                    "y": 656.6673641925546,
                    "vx": -6.071324196117677e-19,
                    "vy": 2.5767839031468668e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#700214",
                "__controlPoints": null,
                "index": 149
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "target": {
                    "id": "Q21102959",
                    "name": "Deinococcus radiodurans R1",
                    "__indexColor": "#b00084",
                    "index": 131,
                    "x": 1021.9632779508612,
                    "y": -471.08768292882496,
                    "vx": 4.129379302566543e-18,
                    "vy": -1.907542217219162e-18
                },
                "__indexColor": "#5c0215",
                "__controlPoints": null,
                "index": 150
            },
            {
                "label": "country",
                "source": {
                    "id": "Q60462126",
                    "name": "Last Year",
                    "__indexColor": "#a00138",
                    "index": 311,
                    "x": -168.95073412063283,
                    "y": 625.3116607743867,
                    "vx": -2.5005071822716944e-19,
                    "vy": 3.1853799110501803e-18
                },
                "target": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "__indexColor": "#480216",
                "__controlPoints": null,
                "index": 151
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "target": {
                    "id": "Q865422",
                    "name": "game controller",
                    "__indexColor": "#90016c",
                    "index": 363,
                    "x": 990.5464112621113,
                    "y": -522.4305020584513,
                    "vx": 4.1127955315967944e-18,
                    "vy": -1.9358023097820906e-18
                },
                "__indexColor": "#340217",
                "__controlPoints": null,
                "index": 152
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q96247255",
                    "name": "Stray",
                    "__indexColor": "#64017b",
                    "index": 378,
                    "x": 367.26408696689424,
                    "y": -485.26391580065837,
                    "vx": 1.4749158735236203e-18,
                    "vy": -2.2298424210620965e-18
                },
                "target": {
                    "id": "Q146",
                    "name": "house cat",
                    "__indexColor": "#38004a",
                    "index": 73,
                    "x": 422.0492864422461,
                    "y": -448.26401241931586,
                    "vx": 1.2902081699400447e-18,
                    "vy": -2.1519808102014627e-18
                },
                "__indexColor": "#200218",
                "__controlPoints": null,
                "index": 153
            },
            {
                "label": "country",
                "source": {
                    "id": "Q42080",
                    "name": "Gimpo",
                    "__indexColor": "#a000f8",
                    "index": 247,
                    "x": -193.76739139121406,
                    "y": 679.3677055531891,
                    "vx": -1.599149182837054e-19,
                    "vy": 3.450637006877183e-18
                },
                "target": {
                    "id": "Q884",
                    "name": "South Korea",
                    "__indexColor": "#2c0171",
                    "index": 368,
                    "x": -166.07682428996984,
                    "y": 659.2152320424264,
                    "vx": -3.705082173828148e-19,
                    "vy": 3.184648563483821e-18
                },
                "__indexColor": "#0c0219",
                "__controlPoints": null,
                "index": 154
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "target": {
                    "id": "Q865422",
                    "name": "game controller",
                    "__indexColor": "#90016c",
                    "index": 363,
                    "x": 990.5464112621113,
                    "y": -522.4305020584513,
                    "vx": 4.1127955315967944e-18,
                    "vy": -1.9358023097820906e-18
                },
                "__indexColor": "#f8021a",
                "__controlPoints": null,
                "index": 155
            },
            {
                "label": "different_from",
                "source": {
                    "id": "Q385557",
                    "name": "Slaughterhouse",
                    "__indexColor": "#e000e8",
                    "index": 231,
                    "x": 200.24570031024598,
                    "y": 1202.6466221679866,
                    "vx": 8.943693762919895e-19,
                    "vy": 4.866192632104124e-18
                },
                "target": {
                    "id": "Q385557",
                    "name": "Slaughterhouse",
                    "__indexColor": "#e000e8",
                    "index": 231,
                    "x": 200.24570031024598,
                    "y": 1202.6466221679866,
                    "vx": 8.943693762919895e-19,
                    "vy": 4.866192632104124e-18
                },
                "__indexColor": "#e4021b",
                "__controlPoints": null,
                "index": 156
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "target": {
                    "id": "Q484645",
                    "name": "Anal gland",
                    "__indexColor": "#600108",
                    "index": 263,
                    "x": 304.80586930994315,
                    "y": -554.7359249661815,
                    "vx": 1.1698217564718512e-18,
                    "vy": -2.196890712702953e-18
                },
                "__indexColor": "#d0021c",
                "__controlPoints": null,
                "index": 157
            },
            {
                "label": "operator",
                "source": {
                    "id": "Q5085831",
                    "name": "Charlotte Area Transit System",
                    "__indexColor": "#700114",
                    "index": 275,
                    "x": 918.2987621985056,
                    "y": 47.8888307003083,
                    "vx": 3.4540267047153965e-18,
                    "vy": 1.4846855579362264e-19
                },
                "target": {
                    "id": "Q6825283",
                    "name": "Metropolitan Transit Commission",
                    "__indexColor": "#c40143",
                    "index": 322,
                    "x": 949.1205276973105,
                    "y": 58.69553484536467,
                    "vx": 3.4329273401337235e-18,
                    "vy": 2.084545722870732e-19
                },
                "__indexColor": "#bc021d",
                "__controlPoints": null,
                "index": 158
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q1139344",
                    "name": "grade",
                    "__indexColor": "#bc001d",
                    "index": 28,
                    "x": 963.343864301725,
                    "y": -489.1927670862034,
                    "vx": 4.152716843764101e-18,
                    "vy": -1.8367336957895904e-18
                },
                "target": {
                    "id": "Q89695113",
                    "name": "DualSense",
                    "__indexColor": "#180172",
                    "index": 369,
                    "x": 996.0724604533613,
                    "y": -490.292373931361,
                    "vx": 4.156451310555802e-18,
                    "vy": -1.9450979351857135e-18
                },
                "__indexColor": "#a8021e",
                "__controlPoints": null,
                "index": 159
            },
            {
                "label": "country",
                "source": {
                    "id": "Q216151",
                    "name": "Vietnamese people",
                    "__indexColor": "#24008b",
                    "index": 138,
                    "x": -87.0294658873097,
                    "y": 700.9174668694614,
                    "vx": -5.624021371571056e-19,
                    "vy": 2.8430906872717335e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#94021f",
                "__controlPoints": null,
                "index": 160
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q133976",
                    "name": "Corynebacterium",
                    "__indexColor": "#64003b",
                    "index": 58,
                    "x": 253.44711623383057,
                    "y": 42.55143099800984,
                    "vx": 1.9353703093113234e-18,
                    "vy": 6.825329468561838e-19
                },
                "target": {
                    "id": "Q10876",
                    "name": "Bacteria",
                    "__indexColor": "#5c0015",
                    "index": 20,
                    "x": 225.1889357222131,
                    "y": 60.26645773635175,
                    "vx": 1.964878526396945e-18,
                    "vy": 6.860249294132478e-19
                },
                "__indexColor": "#800220",
                "__controlPoints": null,
                "index": 161
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q96247255",
                    "name": "Stray",
                    "__indexColor": "#64017b",
                    "index": 378,
                    "x": 367.26408696689424,
                    "y": -485.26391580065837,
                    "vx": 1.4749158735236203e-18,
                    "vy": -2.2298424210620965e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#6c0221",
                "__controlPoints": null,
                "index": 162
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q1999796",
                    "name": "incantation",
                    "__indexColor": "#a00078",
                    "index": 119,
                    "x": -1022.2577354402575,
                    "y": -517.4809310358826,
                    "vx": -3.919077130725434e-18,
                    "vy": -2.5762149786001644e-18
                },
                "target": {
                    "id": "Q937228",
                    "name": "property",
                    "__indexColor": "#8c0179",
                    "index": 376,
                    "x": -1006.2508732673919,
                    "y": -545.3842443428631,
                    "vx": -3.9363381191531175e-18,
                    "vy": -2.571446314052326e-18
                },
                "__indexColor": "#580222",
                "__controlPoints": null,
                "index": 163
            },
            {
                "label": "diplomatic_relation",
                "source": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#440223",
                "__controlPoints": null,
                "index": 164
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q1999796",
                    "name": "incantation",
                    "__indexColor": "#a00078",
                    "index": 119,
                    "x": -1022.2577354402575,
                    "y": -517.4809310358826,
                    "vx": -3.919077130725434e-18,
                    "vy": -2.5762149786001644e-18
                },
                "target": {
                    "id": "Q937228",
                    "name": "property",
                    "__indexColor": "#8c0179",
                    "index": 376,
                    "x": -1006.2508732673919,
                    "y": -545.3842443428631,
                    "vx": -3.9363381191531175e-18,
                    "vy": -2.571446314052326e-18
                },
                "__indexColor": "#300224",
                "__controlPoints": null,
                "index": 165
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q133186",
                    "name": "Bacteroides",
                    "__indexColor": "#c80036",
                    "index": 53,
                    "x": 250.6389101119244,
                    "y": 81.593670060001,
                    "vx": 1.9659354524370493e-18,
                    "vy": 6.824882352916977e-19
                },
                "target": {
                    "id": "Q10876",
                    "name": "Bacteria",
                    "__indexColor": "#5c0015",
                    "index": 20,
                    "x": 225.1889357222131,
                    "y": 60.26645773635175,
                    "vx": 1.964878526396945e-18,
                    "vy": 6.860249294132478e-19
                },
                "__indexColor": "#1c0225",
                "__controlPoints": null,
                "index": 166
            },
            {
                "label": "genre",
                "source": {
                    "id": "Q460679",
                    "name": "Maneki-neko",
                    "__indexColor": "#d80102",
                    "index": 257,
                    "x": 607.4468570064593,
                    "y": 1038.3461438564693,
                    "vx": 2.6779151853418476e-18,
                    "vy": 4.162522506566312e-18
                },
                "target": {
                    "id": "Q14339857",
                    "name": "Japanese folklore",
                    "__indexColor": "#880046",
                    "index": 69,
                    "x": 575.5774873234496,
                    "y": 1035.4659314516352,
                    "vx": 2.676342559410968e-18,
                    "vy": 4.177700521419596e-18
                },
                "__indexColor": "#080226",
                "__controlPoints": null,
                "index": 167
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q15856",
                    "name": "Proteus",
                    "__indexColor": "#840053",
                    "index": 82,
                    "x": 192.05233520410223,
                    "y": 62.34659083129199,
                    "vx": 1.9428206186102663e-18,
                    "vy": 6.389653915369366e-19
                },
                "target": {
                    "id": "Q10876",
                    "name": "Bacteria",
                    "__indexColor": "#5c0015",
                    "index": 20,
                    "x": 225.1889357222131,
                    "y": 60.26645773635175,
                    "vx": 1.964878526396945e-18,
                    "vy": 6.860249294132478e-19
                },
                "__indexColor": "#f40227",
                "__controlPoints": null,
                "index": 168
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#e00228",
                "__controlPoints": null,
                "index": 169
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q460679",
                    "name": "Maneki-neko",
                    "__indexColor": "#d80102",
                    "index": 257,
                    "x": 607.4468570064593,
                    "y": 1038.3461438564693,
                    "vx": 2.6779151853418476e-18,
                    "vy": 4.162522506566312e-18
                },
                "target": {
                    "id": "Q460679",
                    "name": "Maneki-neko",
                    "__indexColor": "#d80102",
                    "index": 257,
                    "x": 607.4468570064593,
                    "y": 1038.3461438564693,
                    "vx": 2.6779151853418476e-18,
                    "vy": 4.162522506566312e-18
                },
                "__indexColor": "#cc0229",
                "__controlPoints": null,
                "index": 170
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q1061596",
                    "name": "Lactobacillus",
                    "__indexColor": "#d4000f",
                    "index": 14,
                    "x": 214.564289673922,
                    "y": 91.93655332715994,
                    "vx": 1.9252077753323113e-18,
                    "vy": 6.649221111243108e-19
                },
                "target": {
                    "id": "Q10876",
                    "name": "Bacteria",
                    "__indexColor": "#5c0015",
                    "index": 20,
                    "x": 225.1889357222131,
                    "y": 60.26645773635175,
                    "vx": 1.964878526396945e-18,
                    "vy": 6.860249294132478e-19
                },
                "__indexColor": "#b8022a",
                "__controlPoints": null,
                "index": 171
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q3482590",
                    "name": "Neutering",
                    "__indexColor": "#ac00d1",
                    "index": 208,
                    "x": 293.9575305202146,
                    "y": -475.2274280057187,
                    "vx": 1.1321089850218248e-18,
                    "vy": -2.339833232182738e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#a4022b",
                "__controlPoints": null,
                "index": 172
            },
            {
                "label": "inception",
                "source": {
                    "id": "Q3487014",
                    "name": "Smithsonian (magazine)",
                    "__indexColor": "#8400d3",
                    "index": 210,
                    "x": 433.0987781227299,
                    "y": 1115.878889232914,
                    "vx": 1.7084549811655e-18,
                    "vy": 4.352350511218989e-18
                },
                "target": {
                    "id": "Q25337",
                    "name": "2020",
                    "__indexColor": "#cc00a9",
                    "index": 168,
                    "x": 464.14542902199094,
                    "y": 1108.6048206615515,
                    "vx": 1.7080449804080407e-18,
                    "vy": 4.351649562142123e-18
                },
                "__indexColor": "#90022c",
                "__controlPoints": null,
                "index": 173
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q190161",
                    "name": "Streptococcus",
                    "__indexColor": "#2c0071",
                    "index": 112,
                    "x": 218.56522187896013,
                    "y": 27.596981003371475,
                    "vx": 1.9048329984596298e-18,
                    "vy": 6.673847225264093e-19
                },
                "target": {
                    "id": "Q10876",
                    "name": "Bacteria",
                    "__indexColor": "#5c0015",
                    "index": 20,
                    "x": 225.1889357222131,
                    "y": 60.26645773635175,
                    "vx": 1.964878526396945e-18,
                    "vy": 6.860249294132478e-19
                },
                "__indexColor": "#7c022d",
                "__controlPoints": null,
                "index": 174
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q474191",
                    "name": "diet",
                    "__indexColor": "#9c0105",
                    "index": 260,
                    "x": 315.4921158079999,
                    "y": -478.3609363961292,
                    "vx": 1.1933121725859698e-18,
                    "vy": -2.2634564008288605e-18
                },
                "target": {
                    "id": "Q32566",
                    "name": "computed tomography",
                    "__indexColor": "#3800ca",
                    "index": 201,
                    "x": 325.47959246000056,
                    "y": -439.1109606402521,
                    "vx": 1.0712782868259796e-18,
                    "vy": -2.336587827919682e-18
                },
                "__indexColor": "#68022e",
                "__controlPoints": null,
                "index": 175
            },
            {
                "label": "different_from",
                "source": {
                    "id": "Q3482590",
                    "name": "Neutering",
                    "__indexColor": "#ac00d1",
                    "index": 208,
                    "x": 293.9575305202146,
                    "y": -475.2274280057187,
                    "vx": 1.1321089850218248e-18,
                    "vy": -2.339833232182738e-18
                },
                "target": {
                    "id": "Q3482590",
                    "name": "Neutering",
                    "__indexColor": "#ac00d1",
                    "index": 208,
                    "x": 293.9575305202146,
                    "y": -475.2274280057187,
                    "vx": 1.1321089850218248e-18,
                    "vy": -2.339833232182738e-18
                },
                "__indexColor": "#54022f",
                "__controlPoints": null,
                "index": 176
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "target": {
                    "id": "Q148",
                    "name": "China",
                    "__indexColor": "#fc004d",
                    "index": 76,
                    "x": -69.5273301355437,
                    "y": 674.6207857242672,
                    "vx": -4.829590634523562e-19,
                    "vy": 2.6787982767407407e-18
                },
                "__indexColor": "#400230",
                "__controlPoints": null,
                "index": 177
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q474191",
                    "name": "diet",
                    "__indexColor": "#9c0105",
                    "index": 260,
                    "x": 315.4921158079999,
                    "y": -478.3609363961292,
                    "vx": 1.1933121725859698e-18,
                    "vy": -2.2634564008288605e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#2c0231",
                "__controlPoints": null,
                "index": 178
            },
            {
                "label": "distributed_by",
                "source": {
                    "id": "Q113961028",
                    "name": "Rise of the Rōnin",
                    "__indexColor": "#800020",
                    "index": 31,
                    "x": -48.13942650034455,
                    "y": -533.3249915789729,
                    "vx": 4.931347491281732e-20,
                    "vy": -3.3272255977203004e-18
                },
                "target": {
                    "id": "Q3884",
                    "name": "Amazon",
                    "__indexColor": "#b800ea",
                    "index": 233,
                    "x": -21.705017047113245,
                    "y": -553.2627474739389,
                    "vx": 6.592467406054332e-20,
                    "vy": -3.230265800905249e-18
                },
                "__indexColor": "#180232",
                "__controlPoints": null,
                "index": 179
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q474191",
                    "name": "diet",
                    "__indexColor": "#9c0105",
                    "index": 260,
                    "x": 315.4921158079999,
                    "y": -478.3609363961292,
                    "vx": 1.1933121725859698e-18,
                    "vy": -2.2634564008288605e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#040233",
                "__controlPoints": null,
                "index": 180
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q148",
                    "name": "China",
                    "__indexColor": "#fc004d",
                    "index": 76,
                    "x": -69.5273301355437,
                    "y": 674.6207857242672,
                    "vx": -4.829590634523562e-19,
                    "vy": 2.6787982767407407e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#f00234",
                "__controlPoints": null,
                "index": 181
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q37792381",
                    "name": "David A. Coil",
                    "__indexColor": "#3000e4",
                    "index": 227,
                    "x": 389.9248688796942,
                    "y": -1051.1256455209607,
                    "vx": 1.6911048550789051e-18,
                    "vy": -4.3560455685964615e-18
                },
                "target": {
                    "id": "Q105669174",
                    "name": "University of California, Davis, Genome Center",
                    "__indexColor": "#24000b",
                    "index": 10,
                    "x": 364.3476888812709,
                    "y": -1072.4658784071676,
                    "vx": 1.6606203477062483e-18,
                    "vy": -4.329901273534585e-18
                },
                "__indexColor": "#dc0235",
                "__controlPoints": null,
                "index": 182
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q37792381",
                    "name": "David A. Coil",
                    "__indexColor": "#3000e4",
                    "index": 227,
                    "x": 389.9248688796942,
                    "y": -1051.1256455209607,
                    "vx": 1.6911048550789051e-18,
                    "vy": -4.3560455685964615e-18
                },
                "target": {
                    "id": "Q129421",
                    "name": "University of California, Davis",
                    "__indexColor": "#180032",
                    "index": 49,
                    "x": 418.8886589032742,
                    "y": -1029.4956486036012,
                    "vx": 1.7166204430265443e-18,
                    "vy": -4.348917683218349e-18
                },
                "__indexColor": "#c80236",
                "__controlPoints": null,
                "index": 183
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q3529328",
                    "name": "Labored breathing",
                    "__indexColor": "#4800d6",
                    "index": 213,
                    "x": -380.6568275096502,
                    "y": 1015.9262288839674,
                    "vx": -1.1368026982816312e-18,
                    "vy": 4.478141604066687e-18
                },
                "target": {
                    "id": "Q112965645",
                    "name": "Signs and symptoms",
                    "__indexColor": "#d0001c",
                    "index": 27,
                    "x": -349.84011882884806,
                    "y": 1024.7065895699077,
                    "vx": -1.1545982097634954e-18,
                    "vy": 4.480763460079923e-18
                },
                "__indexColor": "#b40237",
                "__controlPoints": null,
                "index": 184
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q208376",
                    "name": "Pet",
                    "__indexColor": "#000080",
                    "index": 127,
                    "x": 272.9931283465106,
                    "y": -537.5222811743239,
                    "vx": 1.412487514104299e-18,
                    "vy": -2.435655260654165e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#a00238",
                "__controlPoints": null,
                "index": 185
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q208376",
                    "name": "Pet",
                    "__indexColor": "#000080",
                    "index": 127,
                    "x": 272.9931283465106,
                    "y": -537.5222811743239,
                    "vx": 1.412487514104299e-18,
                    "vy": -2.435655260654165e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#8c0239",
                "__controlPoints": null,
                "index": 186
            },
            {
                "label": "country",
                "source": {
                    "id": "Q10829106",
                    "name": "Thai Nguyen University of Agriculture and Forestry",
                    "__indexColor": "#840013",
                    "index": 18,
                    "x": -88.11580628514207,
                    "y": 640.7662952093337,
                    "vx": -7.597132306501668e-19,
                    "vy": 2.6063983397463617e-18
                },
                "target": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "__indexColor": "#78023a",
                "__controlPoints": null,
                "index": 187
            },
            {
                "label": "has_effect",
                "source": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "target": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "__indexColor": "#64023b",
                "__controlPoints": null,
                "index": 188
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q144",
                    "name": "Dog",
                    "__indexColor": "#740047",
                    "index": 70,
                    "x": 215.05946821901483,
                    "y": -568.7278951812743,
                    "vx": 1.4349130608068153e-18,
                    "vy": -2.891146983324236e-18
                },
                "target": {
                    "id": "Q208376",
                    "name": "Pet",
                    "__indexColor": "#000080",
                    "index": 127,
                    "x": 272.9931283465106,
                    "y": -537.5222811743239,
                    "vx": 1.412487514104299e-18,
                    "vy": -2.435655260654165e-18
                },
                "__indexColor": "#50023c",
                "__controlPoints": null,
                "index": 189
            },
            {
                "label": "has_cause",
                "source": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "target": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "__indexColor": "#3c023d",
                "__controlPoints": null,
                "index": 190
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q881",
                    "name": "Vietnam",
                    "__indexColor": "#400170",
                    "index": 367,
                    "x": -105.57025389787378,
                    "y": 669.9678654997168,
                    "vx": -4.388497801149042e-19,
                    "vy": 2.808313073841943e-18
                },
                "target": {
                    "id": "Q18042814",
                    "name": "AKR1B10",
                    "__indexColor": "#f40067",
                    "index": 102,
                    "x": -72.60026154199895,
                    "y": 656.6673641925546,
                    "vx": -6.071324196117677e-19,
                    "vy": 2.5767839031468668e-18
                },
                "__indexColor": "#28023e",
                "__controlPoints": null,
                "index": 191
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q80962",
                    "name": "Animal husbandry",
                    "__indexColor": "#a8015e",
                    "index": 349,
                    "x": -191.85662294870951,
                    "y": 834.536099846629,
                    "vx": -7.624498242729836e-19,
                    "vy": 4.362083747831545e-18
                },
                "target": {
                    "id": "Q170201",
                    "name": "Veterinary medicine",
                    "__indexColor": "#d0005c",
                    "index": 91,
                    "x": -213.12482466924814,
                    "y": 810.4836649072524,
                    "vx": -8.757511152832695e-19,
                    "vy": 4.46084923735432e-18
                },
                "__indexColor": "#14023f",
                "__controlPoints": null,
                "index": 192
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "target": {
                    "id": "Q182672",
                    "name": "Zoonosis",
                    "__indexColor": "#b8006a",
                    "index": 105,
                    "x": -702.225473453956,
                    "y": 885.4692913431297,
                    "vx": -2.7963528124954298e-18,
                    "vy": 3.8237917273722824e-18
                },
                "__indexColor": "#000240",
                "__controlPoints": null,
                "index": 193
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q1858",
                    "name": "Hanoi",
                    "__indexColor": "#7c006d",
                    "index": 108,
                    "x": -773.8849648362888,
                    "y": 676.020037561495,
                    "vx": -3.324708338849893e-18,
                    "vy": 2.7476968308536426e-18
                },
                "target": {
                    "id": "Q5119",
                    "name": "capital city",
                    "__indexColor": "#5c0115",
                    "index": 276,
                    "x": -747.9535657258016,
                    "y": 695.2151650226343,
                    "vx": -3.3141352631248286e-18,
                    "vy": 2.7197681657650235e-18
                },
                "__indexColor": "#ec0241",
                "__controlPoints": null,
                "index": 194
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q43987",
                    "name": "Avian influenza",
                    "__indexColor": "#000100",
                    "index": 255,
                    "x": -723.5904830402052,
                    "y": 862.1738065525407,
                    "vx": -2.7827425289975237e-18,
                    "vy": 3.769340453447744e-18
                },
                "target": {
                    "id": "Q182672",
                    "name": "Zoonosis",
                    "__indexColor": "#b8006a",
                    "index": 105,
                    "x": -702.225473453956,
                    "y": 885.4692913431297,
                    "vx": -2.7963528124954298e-18,
                    "vy": 3.8237917273722824e-18
                },
                "__indexColor": "#d80242",
                "__controlPoints": null,
                "index": 195
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q375560",
                    "name": "fur farming",
                    "__indexColor": "#4400e3",
                    "index": 226,
                    "x": -992.0665033333563,
                    "y": 303.42901075397657,
                    "vx": -4.4411973692422316e-18,
                    "vy": 1.1870625250130535e-18
                },
                "target": {
                    "id": "Q2523206",
                    "name": "Livestock farming",
                    "__indexColor": "#1c00a5",
                    "index": 164,
                    "x": -1002.7102493161497,
                    "y": 273.05186154802885,
                    "vx": -4.4526278431099795e-18,
                    "vy": 1.1932777612584654e-18
                },
                "__indexColor": "#c40243",
                "__controlPoints": null,
                "index": 196
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q1858",
                    "name": "Hanoi",
                    "__indexColor": "#7c006d",
                    "index": 108,
                    "x": -773.8849648362888,
                    "y": 676.020037561495,
                    "vx": -3.324708338849893e-18,
                    "vy": 2.7476968308536426e-18
                },
                "target": {
                    "id": "Q33271",
                    "name": "Đồng Nai",
                    "__indexColor": "#1000cc",
                    "index": 203,
                    "x": -802.17204466011,
                    "y": 661.0094674108423,
                    "vx": -3.329364143511502e-18,
                    "vy": 2.7601431541032235e-18
                },
                "__indexColor": "#b00244",
                "__controlPoints": null,
                "index": 197
            },
            {
                "label": "shares_border_with",
                "source": {
                    "id": "Q33271",
                    "name": "Đồng Nai",
                    "__indexColor": "#1000cc",
                    "index": 203,
                    "x": -802.17204466011,
                    "y": 661.0094674108423,
                    "vx": -3.329364143511502e-18,
                    "vy": 2.7601431541032235e-18
                },
                "target": {
                    "id": "Q1858",
                    "name": "Hanoi",
                    "__indexColor": "#7c006d",
                    "index": 108,
                    "x": -773.8849648362888,
                    "y": 676.020037561495,
                    "vx": -3.324708338849893e-18,
                    "vy": 2.7476968308536426e-18
                },
                "__indexColor": "#9c0245",
                "__controlPoints": null,
                "index": 198
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q36574036",
                    "name": "Influenza A(H5N1) virus surveillance at live poultry markets, Cambodia, 2011.",
                    "__indexColor": "#8000e0",
                    "index": 223,
                    "x": -174.6853936271386,
                    "y": 1175.8080227238822,
                    "vx": -5.749353979365315e-19,
                    "vy": 4.896064014719083e-18
                },
                "target": {
                    "id": "Q7935305",
                    "name": "Viruses",
                    "__indexColor": "#0c0159",
                    "index": 344,
                    "x": -205.08788052147628,
                    "y": 1165.8448024026216,
                    "vx": -5.518018578553885e-19,
                    "vy": 4.8826489270567836e-18
                },
                "__indexColor": "#880246",
                "__controlPoints": null,
                "index": 199
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q36574036",
                    "name": "Influenza A(H5N1) virus surveillance at live poultry markets, Cambodia, 2011.",
                    "__indexColor": "#8000e0",
                    "index": 223,
                    "x": -174.6853936271386,
                    "y": 1175.8080227238822,
                    "vx": -5.749353979365315e-19,
                    "vy": 4.896064014719083e-18
                },
                "target": {
                    "id": "Q7935305",
                    "name": "Viruses",
                    "__indexColor": "#0c0159",
                    "index": 344,
                    "x": -205.08788052147628,
                    "y": 1165.8448024026216,
                    "vx": -5.518018578553885e-19,
                    "vy": 4.8826489270567836e-18
                },
                "__indexColor": "#740247",
                "__controlPoints": null,
                "index": 200
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q207063",
                    "name": "Squad",
                    "__indexColor": "#3c007d",
                    "index": 124,
                    "x": -360.00536359821524,
                    "y": 64.11396860449712,
                    "vx": -2.131135837747766e-18,
                    "vy": 2.536642243904029e-21
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#600248",
                "__controlPoints": null,
                "index": 201
            },
            {
                "label": "main_subject",
                "source": {
                    "id": "Q420421",
                    "name": "acolyte",
                    "__indexColor": "#b400f7",
                    "index": 246,
                    "x": -346.5696315429974,
                    "y": -223.99391598216963,
                    "vx": -1.2806606017486052e-18,
                    "vy": 7.300221226779961e-19
                },
                "target": {
                    "id": "Q780384",
                    "name": "Crime Spree",
                    "__indexColor": "#480156",
                    "index": 341,
                    "x": -300.5120908571964,
                    "y": -232.6155620813029,
                    "vx": -1.3552201337193508e-18,
                    "vy": -4.676381927305853e-20
                },
                "__indexColor": "#4c0249",
                "__controlPoints": null,
                "index": 202
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q438964",
                    "name": "Age verification system",
                    "__indexColor": "#1400ff",
                    "index": 254,
                    "x": 1093.350592633196,
                    "y": 364.0717019151406,
                    "vx": 4.451343269501969e-18,
                    "vy": 1.5659455199924596e-18
                },
                "target": {
                    "id": "Q4112660",
                    "name": "Wish list",
                    "__indexColor": "#1800f2",
                    "index": 241,
                    "x": 1108.252290633383,
                    "y": 392.90515302665483,
                    "vx": 4.412195941760389e-18,
                    "vy": 1.578475738771221e-18
                },
                "__indexColor": "#38024a",
                "__controlPoints": null,
                "index": 203
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q318",
                    "name": "Galaxy",
                    "__indexColor": "#6000c8",
                    "index": 199,
                    "x": -357.5052139123937,
                    "y": 25.582676825793094,
                    "vx": -2.2150430758938398e-18,
                    "vy": 2.1019449674360526e-19
                },
                "__indexColor": "#24024b",
                "__controlPoints": null,
                "index": 204
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q420421",
                    "name": "acolyte",
                    "__indexColor": "#b400f7",
                    "index": 246,
                    "x": -346.5696315429974,
                    "y": -223.99391598216963,
                    "vx": -1.2806606017486052e-18,
                    "vy": 7.300221226779961e-19
                },
                "target": {
                    "id": "Q51724",
                    "name": "Jedi",
                    "__indexColor": "#0c0119",
                    "index": 280,
                    "x": -390.85216893635317,
                    "y": -192.32482309285322,
                    "vx": -1.6821770275627616e-18,
                    "vy": 2.689298555724664e-19
                },
                "__indexColor": "#10024c",
                "__controlPoints": null,
                "index": 205
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q438964",
                    "name": "Age verification system",
                    "__indexColor": "#1400ff",
                    "index": 254,
                    "x": 1093.350592633196,
                    "y": 364.0717019151406,
                    "vx": 4.451343269501969e-18,
                    "vy": 1.5659455199924596e-18
                },
                "target": {
                    "id": "Q4112660",
                    "name": "Wish list",
                    "__indexColor": "#1800f2",
                    "index": 241,
                    "x": 1108.252290633383,
                    "y": 392.90515302665483,
                    "vx": 4.412195941760389e-18,
                    "vy": 1.578475738771221e-18
                },
                "__indexColor": "#fc024d",
                "__controlPoints": null,
                "index": 206
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q1093766",
                    "name": "The Force",
                    "__indexColor": "#480016",
                    "index": 21,
                    "x": -433.85453846653866,
                    "y": -28.228211252431624,
                    "vx": -1.9445049284918083e-18,
                    "vy": -2.5630616736448337e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#e8024e",
                "__controlPoints": null,
                "index": 207
            },
            {
                "label": "main_subject",
                "source": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "target": {
                    "id": "Q780384",
                    "name": "Crime Spree",
                    "__indexColor": "#480156",
                    "index": 341,
                    "x": -300.5120908571964,
                    "y": -232.6155620813029,
                    "vx": -1.3552201337193508e-18,
                    "vy": -4.676381927305853e-20
                },
                "__indexColor": "#d4024f",
                "__controlPoints": null,
                "index": 208
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q438964",
                    "name": "Age verification system",
                    "__indexColor": "#1400ff",
                    "index": 254,
                    "x": 1093.350592633196,
                    "y": 364.0717019151406,
                    "vx": 4.451343269501969e-18,
                    "vy": 1.5659455199924596e-18
                },
                "target": {
                    "id": "Q12488383",
                    "name": "content",
                    "__indexColor": "#2c0031",
                    "index": 48,
                    "x": 1068.2747505206562,
                    "y": 384.52603877857797,
                    "vx": 4.340688842142566e-18,
                    "vy": 1.4306497324365825e-18
                },
                "__indexColor": "#c00250",
                "__controlPoints": null,
                "index": 209
            },
            {
                "label": "original_broadcaster",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q54958752",
                    "name": "Disney+",
                    "__indexColor": "#b8012a",
                    "index": 297,
                    "x": -368.5605029469679,
                    "y": -224.14234916055673,
                    "vx": -1.430872223065401e-18,
                    "vy": -1.1743271469764706e-18
                },
                "__indexColor": "#ac0251",
                "__controlPoints": null,
                "index": 210
            },
            {
                "label": "production_company",
                "source": {
                    "id": "Q21527419",
                    "name": "List of Star Wars films",
                    "__indexColor": "#600088",
                    "index": 135,
                    "x": -474.779892374835,
                    "y": 173.40076829372586,
                    "vx": -2.315467862632688e-18,
                    "vy": -1.0300809083947022e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#980252",
                "__controlPoints": null,
                "index": 211
            },
            {
                "label": "occupation",
                "source": {
                    "id": "Q51730",
                    "name": "Yoda",
                    "__indexColor": "#e4011b",
                    "index": 282,
                    "x": -334.67152682242244,
                    "y": 130.81797311585504,
                    "vx": -2.0622647645687684e-18,
                    "vy": 2.375663209321264e-19
                },
                "target": {
                    "id": "Q1360577",
                    "name": "Masters",
                    "__indexColor": "#28003e",
                    "index": 61,
                    "x": -299.21596382070425,
                    "y": 190.13806305257694,
                    "vx": -2.0528522370765096e-18,
                    "vy": 1.7611908172058397e-19
                },
                "__indexColor": "#840253",
                "__controlPoints": null,
                "index": 212
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q1542815",
                    "name": "Hero's journey",
                    "__indexColor": "#ac0051",
                    "index": 80,
                    "x": -886.382436182071,
                    "y": -107.12008479953998,
                    "vx": -4.585046350753465e-18,
                    "vy": -5.972042597889616e-19
                },
                "target": {
                    "id": "Q228692",
                    "name": "Rosario Dawson",
                    "__indexColor": "#c00090",
                    "index": 143,
                    "x": -881.4319683618668,
                    "y": -75.04858770658085,
                    "vx": -4.627387766869645e-18,
                    "vy": -5.949267978428587e-19
                },
                "__indexColor": "#700254",
                "__controlPoints": null,
                "index": 213
            },
            {
                "label": "owner_of",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q21527419",
                    "name": "List of Star Wars films",
                    "__indexColor": "#600088",
                    "index": 135,
                    "x": -474.779892374835,
                    "y": 173.40076829372586,
                    "vx": -2.315467862632688e-18,
                    "vy": -1.0300809083947022e-19
                },
                "__indexColor": "#5c0255",
                "__controlPoints": null,
                "index": 214
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q51724",
                    "name": "Jedi",
                    "__indexColor": "#0c0119",
                    "index": 280,
                    "x": -390.85216893635317,
                    "y": -192.32482309285322,
                    "vx": -1.6821770275627616e-18,
                    "vy": 2.689298555724664e-19
                },
                "__indexColor": "#480256",
                "__controlPoints": null,
                "index": 215
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q21527419",
                    "name": "List of Star Wars films",
                    "__indexColor": "#600088",
                    "index": 135,
                    "x": -474.779892374835,
                    "y": 173.40076829372586,
                    "vx": -2.315467862632688e-18,
                    "vy": -1.0300809083947022e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#340257",
                "__controlPoints": null,
                "index": 216
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q66707670",
                    "name": "Master & Apprentice",
                    "__indexColor": "#ec0141",
                    "index": 320,
                    "x": -877.7933986382519,
                    "y": -42.80136131382758,
                    "vx": -4.604881362231042e-18,
                    "vy": -6.059638061444281e-19
                },
                "target": {
                    "id": "Q228692",
                    "name": "Rosario Dawson",
                    "__indexColor": "#c00090",
                    "index": 143,
                    "x": -881.4319683618668,
                    "y": -75.04858770658085,
                    "vx": -4.627387766869645e-18,
                    "vy": -5.949267978428587e-19
                },
                "__indexColor": "#200258",
                "__controlPoints": null,
                "index": 217
            },
            {
                "label": "occupation",
                "source": {
                    "id": "Q3570980",
                    "name": "Xie",
                    "__indexColor": "#e400db",
                    "index": 218,
                    "x": -278.4929520250832,
                    "y": 226.47672008602788,
                    "vx": -1.9402612527029025e-18,
                    "vy": 2.314758493601561e-19
                },
                "target": {
                    "id": "Q1360577",
                    "name": "Masters",
                    "__indexColor": "#28003e",
                    "index": 61,
                    "x": -299.21596382070425,
                    "y": 190.13806305257694,
                    "vx": -2.0528522370765096e-18,
                    "vy": 1.7611908172058397e-19
                },
                "__indexColor": "#0c0259",
                "__controlPoints": null,
                "index": 218
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q1466613",
                    "name": "Massive Entertainment",
                    "__indexColor": "#24004b",
                    "index": 74,
                    "x": -581.8980138095133,
                    "y": 346.84989282408594,
                    "vx": -1.4601051019012389e-18,
                    "vy": 4.1245155549238774e-19
                },
                "__indexColor": "#f8025a",
                "__controlPoints": null,
                "index": 219
            },
            {
                "label": "date_of_death",
                "source": {
                    "id": "Q5614101",
                    "name": "Michael Culver",
                    "__indexColor": "#7c012d",
                    "index": 300,
                    "x": -532.2602419085006,
                    "y": 20.453445571193726,
                    "vx": -2.3547684559395943e-18,
                    "vy": 1.4708481951281557e-18
                },
                "target": {
                    "id": "Q427730",
                    "name": "85",
                    "__indexColor": "#6400fb",
                    "index": 250,
                    "x": -572.6145359302081,
                    "y": 8.306316042660741,
                    "vx": -2.3580532178814434e-18,
                    "vy": 1.5598579769044272e-18
                },
                "__indexColor": "#e4025b",
                "__controlPoints": null,
                "index": 220
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q165713",
                    "name": "Star Wars: Episode I – The Phantom Menace",
                    "__indexColor": "#340057",
                    "index": 86,
                    "x": -151.85863054753636,
                    "y": -129.25772324818425,
                    "vx": -1.382531353078013e-18,
                    "vy": -9.307124465090716e-20
                },
                "__indexColor": "#d0025c",
                "__controlPoints": null,
                "index": 221
            },
            {
                "label": "position_held",
                "source": {
                    "id": "Q51730",
                    "name": "Yoda",
                    "__indexColor": "#e4011b",
                    "index": 282,
                    "x": -334.67152682242244,
                    "y": 130.81797311585504,
                    "vx": -2.0622647645687684e-18,
                    "vy": 2.375663209321264e-19
                },
                "target": {
                    "id": "Q1360577",
                    "name": "Masters",
                    "__indexColor": "#28003e",
                    "index": 61,
                    "x": -299.21596382070425,
                    "y": 190.13806305257694,
                    "vx": -2.0528522370765096e-18,
                    "vy": 1.7611908172058397e-19
                },
                "__indexColor": "#bc025d",
                "__controlPoints": null,
                "index": 222
            },
            {
                "label": "genre",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q867123",
                    "name": "Open world",
                    "__indexColor": "#7c016d",
                    "index": 364,
                    "x": -611.5565034872626,
                    "y": 297.66080392638736,
                    "vx": -1.8828339484778635e-18,
                    "vy": 6.929157920697128e-19
                },
                "__indexColor": "#a8025e",
                "__controlPoints": null,
                "index": 223
            },
            {
                "label": "country_of_citizenship",
                "source": {
                    "id": "Q5614101",
                    "name": "Michael Culver",
                    "__indexColor": "#7c012d",
                    "index": 300,
                    "x": -532.2602419085006,
                    "y": 20.453445571193726,
                    "vx": -2.3547684559395943e-18,
                    "vy": 1.4708481951281557e-18
                },
                "target": {
                    "id": "Q842438",
                    "name": "British",
                    "__indexColor": "#580162",
                    "index": 353,
                    "x": -458.0698682185208,
                    "y": 34.20981592140812,
                    "vx": -2.5588104423203823e-18,
                    "vy": 9.641090922242092e-19
                },
                "__indexColor": "#94025f",
                "__controlPoints": null,
                "index": 224
            },
            {
                "label": "distributed_by",
                "source": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "target": {
                    "id": "Q54958752",
                    "name": "Disney+",
                    "__indexColor": "#b8012a",
                    "index": 297,
                    "x": -368.5605029469679,
                    "y": -224.14234916055673,
                    "vx": -1.430872223065401e-18,
                    "vy": -1.1743271469764706e-18
                },
                "__indexColor": "#800260",
                "__controlPoints": null,
                "index": 225
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q188273",
                    "name": "Ubisoft",
                    "__indexColor": "#68006e",
                    "index": 109,
                    "x": -615.3185265159773,
                    "y": 313.30727273179144,
                    "vx": -1.737039279413703e-18,
                    "vy": 6.891248530877717e-19
                },
                "__indexColor": "#6c0261",
                "__controlPoints": null,
                "index": 226
            },
            {
                "label": "position_held",
                "source": {
                    "id": "Q3570980",
                    "name": "Xie",
                    "__indexColor": "#e400db",
                    "index": 218,
                    "x": -278.4929520250832,
                    "y": 226.47672008602788,
                    "vx": -1.9402612527029025e-18,
                    "vy": 2.314758493601561e-19
                },
                "target": {
                    "id": "Q1360577",
                    "name": "Masters",
                    "__indexColor": "#28003e",
                    "index": 61,
                    "x": -299.21596382070425,
                    "y": 190.13806305257694,
                    "vx": -2.0528522370765096e-18,
                    "vy": 1.7611908172058397e-19
                },
                "__indexColor": "#580262",
                "__controlPoints": null,
                "index": 227
            },
            {
                "label": "developer",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q1466613",
                    "name": "Massive Entertainment",
                    "__indexColor": "#24004b",
                    "index": 74,
                    "x": -581.8980138095133,
                    "y": 346.84989282408594,
                    "vx": -1.4601051019012389e-18,
                    "vy": 4.1245155549238774e-19
                },
                "__indexColor": "#440263",
                "__controlPoints": null,
                "index": 228
            },
            {
                "label": "original_broadcaster",
                "source": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "target": {
                    "id": "Q54958752",
                    "name": "Disney+",
                    "__indexColor": "#b8012a",
                    "index": 297,
                    "x": -368.5605029469679,
                    "y": -224.14234916055673,
                    "vx": -1.430872223065401e-18,
                    "vy": -1.1743271469764706e-18
                },
                "__indexColor": "#300264",
                "__controlPoints": null,
                "index": 229
            },
            {
                "label": "developer",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q188273",
                    "name": "Ubisoft",
                    "__indexColor": "#68006e",
                    "index": 109,
                    "x": -615.3185265159773,
                    "y": 313.30727273179144,
                    "vx": -1.737039279413703e-18,
                    "vy": 6.891248530877717e-19
                },
                "__indexColor": "#1c0265",
                "__controlPoints": null,
                "index": 230
            },
            {
                "label": "country_of_origin",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q842438",
                    "name": "British",
                    "__indexColor": "#580162",
                    "index": 353,
                    "x": -458.0698682185208,
                    "y": 34.20981592140812,
                    "vx": -2.5588104423203823e-18,
                    "vy": 9.641090922242092e-19
                },
                "__indexColor": "#080266",
                "__controlPoints": null,
                "index": 231
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q51771",
                    "name": "Sith",
                    "__indexColor": "#580122",
                    "index": 289,
                    "x": -435.97501415509385,
                    "y": 29.61473796302526,
                    "vx": -2.061681877254107e-18,
                    "vy": -3.990939646870264e-19
                },
                "__indexColor": "#f40267",
                "__controlPoints": null,
                "index": 232
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q1323132",
                    "name": "A Passage to India",
                    "__indexColor": "#dc0035",
                    "index": 52,
                    "x": 795.8658854075771,
                    "y": 13.50890272500139,
                    "vx": 2.9361115055333796e-18,
                    "vy": 1.789161969717084e-19
                },
                "target": {
                    "id": "Q2432",
                    "name": "1984",
                    "__indexColor": "#0c0099",
                    "index": 152,
                    "x": 797.4548792674409,
                    "y": 45.43827112557596,
                    "vx": 2.9623284558121636e-18,
                    "vy": 1.401825634755486e-19
                },
                "__indexColor": "#e00268",
                "__controlPoints": null,
                "index": 233
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q106834240",
                    "name": "Star Wars Kids",
                    "__indexColor": "#980012",
                    "index": 17,
                    "x": -461.16451831791613,
                    "y": 178.43917102143186,
                    "vx": -2.3323602019428376e-18,
                    "vy": -1.3594561004054785e-20
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#cc0269",
                "__controlPoints": null,
                "index": 234
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q116763978",
                    "name": "Star Wars: Young Jedi Adventures",
                    "__indexColor": "#300024",
                    "index": 35,
                    "x": -172.84139272305455,
                    "y": -198.48287155889582,
                    "vx": -1.556571232838112e-18,
                    "vy": -2.061836648606306e-19
                },
                "target": {
                    "id": "Q49619",
                    "name": "2024",
                    "__indexColor": "#fc010d",
                    "index": 268,
                    "x": -188.9581000554581,
                    "y": -294.60551872337413,
                    "vx": -1.7381805897330932e-18,
                    "vy": -2.1393336805589673e-20
                },
                "__indexColor": "#b8026a",
                "__controlPoints": null,
                "index": 235
            },
            {
                "label": "developer",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q568723",
                    "name": "MASSIVE",
                    "__indexColor": "#180132",
                    "index": 305,
                    "x": -611.630346847472,
                    "y": 326.445450736815,
                    "vx": -1.541971256682203e-18,
                    "vy": 5.722430634181419e-19
                },
                "__indexColor": "#a4026b",
                "__controlPoints": null,
                "index": 236
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q181795",
                    "name": "The Empire Strikes Back",
                    "__indexColor": "#e00068",
                    "index": 103,
                    "x": -415.2165034942531,
                    "y": 75.28725978075552,
                    "vx": -2.133567872510054e-18,
                    "vy": 2.5304100700870235e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#90026c",
                "__controlPoints": null,
                "index": 237
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51802",
                    "name": "Han Solo",
                    "__indexColor": "#1c0125",
                    "index": 292,
                    "x": -440.53112633177415,
                    "y": 103.11903640489395,
                    "vx": -1.8258064333547815e-18,
                    "vy": 4.852542877753778e-19
                },
                "target": {
                    "id": "Q181795",
                    "name": "The Empire Strikes Back",
                    "__indexColor": "#e00068",
                    "index": 103,
                    "x": -415.2165034942531,
                    "y": 75.28725978075552,
                    "vx": -2.133567872510054e-18,
                    "vy": 2.5304100700870235e-19
                },
                "__indexColor": "#7c026d",
                "__controlPoints": null,
                "index": 238
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q568723",
                    "name": "MASSIVE",
                    "__indexColor": "#180132",
                    "index": 305,
                    "x": -611.630346847472,
                    "y": 326.445450736815,
                    "vx": -1.541971256682203e-18,
                    "vy": 5.722430634181419e-19
                },
                "__indexColor": "#68026e",
                "__controlPoints": null,
                "index": 239
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q181795",
                    "name": "The Empire Strikes Back",
                    "__indexColor": "#e00068",
                    "index": 103,
                    "x": -415.2165034942531,
                    "y": 75.28725978075552,
                    "vx": -2.133567872510054e-18,
                    "vy": 2.5304100700870235e-19
                },
                "__indexColor": "#54026f",
                "__controlPoints": null,
                "index": 240
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q244700",
                    "name": "ultimate",
                    "__indexColor": "#f8009a",
                    "index": 153,
                    "x": -605.8725568971442,
                    "y": 338.2337199251601,
                    "vx": -1.353233361358688e-18,
                    "vy": 5.51820365168321e-19
                },
                "__indexColor": "#400270",
                "__controlPoints": null,
                "index": 241
            },
            {
                "label": "narrative_location",
                "source": {
                    "id": "Q116763978",
                    "name": "Star Wars: Young Jedi Adventures",
                    "__indexColor": "#300024",
                    "index": 35,
                    "x": -172.84139272305455,
                    "y": -198.48287155889582,
                    "vx": -1.556571232838112e-18,
                    "vy": -2.061836648606306e-19
                },
                "target": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "__indexColor": "#2c0271",
                "__controlPoints": null,
                "index": 242
            },
            {
                "label": "followed_by",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q244700",
                    "name": "ultimate",
                    "__indexColor": "#f8009a",
                    "index": 153,
                    "x": -605.8725568971442,
                    "y": 338.2337199251601,
                    "vx": -1.353233361358688e-18,
                    "vy": 5.51820365168321e-19
                },
                "__indexColor": "#180272",
                "__controlPoints": null,
                "index": 243
            },
            {
                "label": "production_company",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#040273",
                "__controlPoints": null,
                "index": 244
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#f00274",
                "__controlPoints": null,
                "index": 245
            },
            {
                "label": "follows",
                "source": {
                    "id": "Q244700",
                    "name": "ultimate",
                    "__indexColor": "#f8009a",
                    "index": 153,
                    "x": -605.8725568971442,
                    "y": 338.2337199251601,
                    "vx": -1.353233361358688e-18,
                    "vy": 5.51820365168321e-19
                },
                "target": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "__indexColor": "#dc0275",
                "__controlPoints": null,
                "index": 246
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q25540924",
                    "name": "Star Wars prequel trilogy",
                    "__indexColor": "#7c00ad",
                    "index": 172,
                    "x": -397.14406536534614,
                    "y": 76.24754630285413,
                    "vx": -2.118789147595849e-18,
                    "vy": 2.2817339130333485e-19
                },
                "__indexColor": "#c80276",
                "__controlPoints": null,
                "index": 247
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q56876444",
                    "name": "The Mandalorian",
                    "__indexColor": "#040133",
                    "index": 306,
                    "x": -230.50558878191197,
                    "y": -352.21658501677,
                    "vx": -1.9294342406358672e-18,
                    "vy": 2.0624642999609032e-19
                },
                "target": {
                    "id": "Q49619",
                    "name": "2024",
                    "__indexColor": "#fc010d",
                    "index": 268,
                    "x": -188.9581000554581,
                    "y": -294.60551872337413,
                    "vx": -1.7381805897330932e-18,
                    "vy": -2.1393336805589673e-20
                },
                "__indexColor": "#b40277",
                "__controlPoints": null,
                "index": 248
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q25540924",
                    "name": "Star Wars prequel trilogy",
                    "__indexColor": "#7c00ad",
                    "index": 172,
                    "x": -397.14406536534614,
                    "y": 76.24754630285413,
                    "vx": -2.118789147595849e-18,
                    "vy": 2.2817339130333485e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#a00278",
                "__controlPoints": null,
                "index": 249
            },
            {
                "label": "genre",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q21590660",
                    "name": "Western (genre)",
                    "__indexColor": "#38008a",
                    "index": 137,
                    "x": -593.4517273294776,
                    "y": 341.0590888719566,
                    "vx": -1.5949715181252355e-18,
                    "vy": 5.518768921602881e-19
                },
                "__indexColor": "#8c0279",
                "__controlPoints": null,
                "index": 250
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q177860",
                    "name": "Valhalla",
                    "__indexColor": "#080066",
                    "index": 101,
                    "x": -899.3974475208106,
                    "y": -703.851776721051,
                    "vx": -3.487427371977492e-18,
                    "vy": -3.282069067555907e-18
                },
                "target": {
                    "id": "Q420292",
                    "name": "Assassin's Creed",
                    "__indexColor": "#c800f6",
                    "index": 245,
                    "x": -928.7041001213287,
                    "y": -716.346568919851,
                    "vx": -3.493741066033672e-18,
                    "vy": -3.25965722891684e-18
                },
                "__indexColor": "#78027a",
                "__controlPoints": null,
                "index": 251
            },
            {
                "label": "owner_of",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q1063455",
                    "name": "The Lego Group",
                    "__indexColor": "#c00010",
                    "index": 15,
                    "x": -449.21020932871517,
                    "y": 193.31586878282226,
                    "vx": -2.4329882417039998e-18,
                    "vy": -2.7083616855540024e-20
                },
                "__indexColor": "#64027b",
                "__controlPoints": null,
                "index": 252
            },
            {
                "label": "location",
                "source": {
                    "id": "Q959755",
                    "name": "South by Southwest",
                    "__indexColor": "#78017a",
                    "index": 377,
                    "x": 1199.0189406111544,
                    "y": 204.22653369598407,
                    "vx": 4.7792515230320154e-18,
                    "vy": 8.262095362971584e-19
                },
                "target": {
                    "id": "Q16559",
                    "name": "Austin",
                    "__indexColor": "#5c0055",
                    "index": 84,
                    "x": 1192.7934211727506,
                    "y": 235.56809052732893,
                    "vx": 4.769682097538928e-18,
                    "vy": 8.211458757432273e-19
                },
                "__indexColor": "#50027c",
                "__controlPoints": null,
                "index": 253
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q177860",
                    "name": "Valhalla",
                    "__indexColor": "#080066",
                    "index": 101,
                    "x": -899.3974475208106,
                    "y": -703.851776721051,
                    "vx": -3.487427371977492e-18,
                    "vy": -3.282069067555907e-18
                },
                "target": {
                    "id": "Q420292",
                    "name": "Assassin's Creed",
                    "__indexColor": "#c800f6",
                    "index": 245,
                    "x": -928.7041001213287,
                    "y": -716.346568919851,
                    "vx": -3.493741066033672e-18,
                    "vy": -3.25965722891684e-18
                },
                "__indexColor": "#3c027d",
                "__controlPoints": null,
                "index": 254
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q1063455",
                    "name": "The Lego Group",
                    "__indexColor": "#c00010",
                    "index": 15,
                    "x": -449.21020932871517,
                    "y": 193.31586878282226,
                    "vx": -2.4329882417039998e-18,
                    "vy": -2.7083616855540024e-20
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#28027e",
                "__controlPoints": null,
                "index": 255
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q20977110",
                    "name": "Star Wars: The Rise of Skywalker",
                    "__indexColor": "#d80082",
                    "index": 129,
                    "x": -416.96648604636164,
                    "y": -41.64584458862325,
                    "vx": -2.512277409942551e-18,
                    "vy": 6.397829761345476e-19
                },
                "target": {
                    "id": "Q25274",
                    "name": "2019",
                    "__indexColor": "#0800a6",
                    "index": 165,
                    "x": -390.93929548363036,
                    "y": -67.8741804078184,
                    "vx": -2.6576337752749286e-18,
                    "vy": 4.98176038156988e-19
                },
                "__indexColor": "#14027f",
                "__controlPoints": null,
                "index": 256
            },
            {
                "label": "characters",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "__indexColor": "#000280",
                "__controlPoints": null,
                "index": 257
            },
            {
                "label": "director",
                "source": {
                    "id": "Q56876444",
                    "name": "The Mandalorian",
                    "__indexColor": "#040133",
                    "index": 306,
                    "x": -230.50558878191197,
                    "y": -352.21658501677,
                    "vx": -1.9294342406358672e-18,
                    "vy": 2.0624642999609032e-19
                },
                "target": {
                    "id": "Q295964",
                    "name": "Jon Favreau",
                    "__indexColor": "#ec00c1",
                    "index": 192,
                    "x": -199.10871497340494,
                    "y": -399.6454273844849,
                    "vx": -2.023728668013186e-18,
                    "vy": -1.8734602432904322e-19
                },
                "__indexColor": "#ec0281",
                "__controlPoints": null,
                "index": 258
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q20977110",
                    "name": "Star Wars: The Rise of Skywalker",
                    "__indexColor": "#d80082",
                    "index": 129,
                    "x": -416.96648604636164,
                    "y": -41.64584458862325,
                    "vx": -2.512277409942551e-18,
                    "vy": 6.397829761345476e-19
                },
                "target": {
                    "id": "Q16738674",
                    "name": "Daisy Ridley",
                    "__indexColor": "#0c0059",
                    "index": 88,
                    "x": -463.8056622383151,
                    "y": -127.243403830087,
                    "vx": -2.9378248756870927e-18,
                    "vy": 1.3399665128950732e-18
                },
                "__indexColor": "#d80282",
                "__controlPoints": null,
                "index": 259
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q20021710",
                    "name": "Pi",
                    "__indexColor": "#78007a",
                    "index": 121,
                    "x": 548.2689785414713,
                    "y": 158.45210496641312,
                    "vx": 2.590455112602305e-18,
                    "vy": 7.959606686979652e-19
                },
                "target": {
                    "id": "Q237194",
                    "name": "Wanda Sykes",
                    "__indexColor": "#840093",
                    "index": 146,
                    "x": 543.1417781676907,
                    "y": 126.87194455534923,
                    "vx": 2.5893540677957543e-18,
                    "vy": 8.140352453153098e-19
                },
                "__indexColor": "#c40283",
                "__controlPoints": null,
                "index": 260
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#b00284",
                "__controlPoints": null,
                "index": 261
            },
            {
                "label": "producer",
                "source": {
                    "id": "Q124246549",
                    "name": "The Mandalorian & Grogu",
                    "__indexColor": "#54002f",
                    "index": 46,
                    "x": 398.18354055381866,
                    "y": 481.26518486975885,
                    "vx": 2.1415000833728403e-18,
                    "vy": 2.24737940564831e-18
                },
                "target": {
                    "id": "Q237207",
                    "name": "Kathleen Kennedy",
                    "__indexColor": "#700094",
                    "index": 147,
                    "x": 413.58255555420584,
                    "y": 509.17275078550557,
                    "vx": 2.1798802940039292e-18,
                    "vy": 2.2397919099754615e-18
                },
                "__indexColor": "#9c0285",
                "__controlPoints": null,
                "index": 262
            },
            {
                "label": "occupation",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q183816",
                    "name": "master's degree",
                    "__indexColor": "#a4006b",
                    "index": 106,
                    "x": -473.2715845599199,
                    "y": -45.79262931652979,
                    "vx": -1.8149902224113576e-18,
                    "vy": -4.776290463981354e-19
                },
                "__indexColor": "#880286",
                "__controlPoints": null,
                "index": 263
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q237194",
                    "name": "Wanda Sykes",
                    "__indexColor": "#840093",
                    "index": 146,
                    "x": 543.1417781676907,
                    "y": 126.87194455534923,
                    "vx": 2.5893540677957543e-18,
                    "vy": 8.140352453153098e-19
                },
                "target": {
                    "id": "Q20021710",
                    "name": "Pi",
                    "__indexColor": "#78007a",
                    "index": 121,
                    "x": 548.2689785414713,
                    "y": 158.45210496641312,
                    "vx": 2.590455112602305e-18,
                    "vy": 7.959606686979652e-19
                },
                "__indexColor": "#740287",
                "__controlPoints": null,
                "index": 264
            },
            {
                "label": "producer",
                "source": {
                    "id": "Q56876444",
                    "name": "The Mandalorian",
                    "__indexColor": "#040133",
                    "index": 306,
                    "x": -230.50558878191197,
                    "y": -352.21658501677,
                    "vx": -1.9294342406358672e-18,
                    "vy": 2.0624642999609032e-19
                },
                "target": {
                    "id": "Q2559261",
                    "name": "Dave Filoni",
                    "__indexColor": "#5400af",
                    "index": 174,
                    "x": -306.08571582897525,
                    "y": -255.27768444185173,
                    "vx": -2.0074634590846283e-18,
                    "vy": 7.880629314652083e-20
                },
                "__indexColor": "#600288",
                "__controlPoints": null,
                "index": 265
            },
            {
                "label": "student",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q51752",
                    "name": "Anakin Skywalker",
                    "__indexColor": "#94011f",
                    "index": 286,
                    "x": -447.86289837323307,
                    "y": 44.38192079126628,
                    "vx": -1.792533122363198e-18,
                    "vy": -4.2275212710765973e-19
                },
                "__indexColor": "#4c0289",
                "__controlPoints": null,
                "index": 266
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q55216",
                    "name": "Lego Star Wars",
                    "__indexColor": "#a4012b",
                    "index": 298,
                    "x": -445.5379485629686,
                    "y": 234.08284399809875,
                    "vx": -2.6035701194257397e-18,
                    "vy": -8.129910737133278e-22
                },
                "target": {
                    "id": "Q1063455",
                    "name": "The Lego Group",
                    "__indexColor": "#c00010",
                    "index": 15,
                    "x": -449.21020932871517,
                    "y": 193.31586878282226,
                    "vx": -2.4329882417039998e-18,
                    "vy": -2.7083616855540024e-20
                },
                "__indexColor": "#38028a",
                "__controlPoints": null,
                "index": 267
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q51752",
                    "name": "Anakin Skywalker",
                    "__indexColor": "#94011f",
                    "index": 286,
                    "x": -447.86289837323307,
                    "y": 44.38192079126628,
                    "vx": -1.792533122363198e-18,
                    "vy": -4.2275212710765973e-19
                },
                "target": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "__indexColor": "#24028b",
                "__controlPoints": null,
                "index": 268
            },
            {
                "label": "subsidiary",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q1063455",
                    "name": "The Lego Group",
                    "__indexColor": "#c00010",
                    "index": 15,
                    "x": -449.21020932871517,
                    "y": 193.31586878282226,
                    "vx": -2.4329882417039998e-18,
                    "vy": -2.7083616855540024e-20
                },
                "__indexColor": "#10028c",
                "__controlPoints": null,
                "index": 269
            },
            {
                "label": "country",
                "source": {
                    "id": "Q65",
                    "name": "Los Angeles",
                    "__indexColor": "#28013e",
                    "index": 317,
                    "x": 79.08994601081505,
                    "y": -1073.2148895232656,
                    "vx": -1.181751054282784e-19,
                    "vy": -4.753051641758118e-18
                },
                "target": {
                    "id": "Q30",
                    "name": "United States",
                    "__indexColor": "#d800c2",
                    "index": 193,
                    "x": 58.045461011607344,
                    "y": -1098.9938878228072,
                    "vx": -1.5858070013988078e-19,
                    "vy": -4.715749708219216e-18
                },
                "__indexColor": "#fc028d",
                "__controlPoints": null,
                "index": 270
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q1063455",
                    "name": "The Lego Group",
                    "__indexColor": "#c00010",
                    "index": 15,
                    "x": -449.21020932871517,
                    "y": 193.31586878282226,
                    "vx": -2.4329882417039998e-18,
                    "vy": -2.7083616855540024e-20
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#e8028e",
                "__controlPoints": null,
                "index": 271
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q119361001",
                    "name": "Star Wars Outlaws",
                    "__indexColor": "#f40027",
                    "index": 38,
                    "x": -577.2118584056639,
                    "y": 307.10237605626486,
                    "vx": -1.8244838075317445e-18,
                    "vy": 3.4964176144082923e-19
                },
                "target": {
                    "id": "Q2818",
                    "name": "August 30",
                    "__indexColor": "#2800be",
                    "index": 189,
                    "x": -566.7858367717683,
                    "y": 342.5919250062361,
                    "vx": -1.591033278690298e-18,
                    "vy": 4.517017004648327e-19
                },
                "__indexColor": "#d4028f",
                "__controlPoints": null,
                "index": 272
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51730",
                    "name": "Yoda",
                    "__indexColor": "#e4011b",
                    "index": 282,
                    "x": -334.67152682242244,
                    "y": 130.81797311585504,
                    "vx": -2.0622647645687684e-18,
                    "vy": 2.375663209321264e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#c00290",
                "__controlPoints": null,
                "index": 273
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q14417",
                    "name": "Asajj Ventress",
                    "__indexColor": "#600048",
                    "index": 71,
                    "x": -556.1838908663567,
                    "y": -235.55063749336412,
                    "vx": -2.9005981376572788e-18,
                    "vy": -2.58241037588882e-18
                },
                "target": {
                    "id": "Q207627",
                    "name": "Happy Tree Friends",
                    "__indexColor": "#14007f",
                    "index": 126,
                    "x": -577.2172416133667,
                    "y": -204.52895797589946,
                    "vx": -4.805328288808732e-18,
                    "vy": -3.5725662856682384e-18
                },
                "__indexColor": "#ac0291",
                "__controlPoints": null,
                "index": 274
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q25455117",
                    "name": "Sabine Wren",
                    "__indexColor": "#a400ab",
                    "index": 170,
                    "x": -392.4930798974843,
                    "y": -253.47676354050427,
                    "vx": -1.6821208948761148e-18,
                    "vy": 2.344436024277941e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#980292",
                "__controlPoints": null,
                "index": 275
            },
            {
                "label": "country",
                "source": {
                    "id": "Q60",
                    "name": "New York City",
                    "__indexColor": "#c80136",
                    "index": 309,
                    "x": 86.41439208910442,
                    "y": -1116.2811536450474,
                    "vx": -1.6108620415558736e-19,
                    "vy": -4.73091689079513e-18
                },
                "target": {
                    "id": "Q30",
                    "name": "United States",
                    "__indexColor": "#d800c2",
                    "index": 193,
                    "x": 58.045461011607344,
                    "y": -1098.9938878228072,
                    "vx": -1.5858070013988078e-19,
                    "vy": -4.715749708219216e-18
                },
                "__indexColor": "#840293",
                "__controlPoints": null,
                "index": 276
            },
            {
                "label": "student",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q25455117",
                    "name": "Sabine Wren",
                    "__indexColor": "#a400ab",
                    "index": 170,
                    "x": -392.4930798974843,
                    "y": -253.47676354050427,
                    "vx": -1.6821208948761148e-18,
                    "vy": 2.344436024277941e-19
                },
                "__indexColor": "#700294",
                "__controlPoints": null,
                "index": 277
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#5c0295",
                "__controlPoints": null,
                "index": 278
            },
            {
                "label": "owner_of",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#480296",
                "__controlPoints": null,
                "index": 279
            },
            {
                "label": "country",
                "source": {
                    "id": "Q5083",
                    "name": "Seattle",
                    "__indexColor": "#840113",
                    "index": 274,
                    "x": 47.821724208183056,
                    "y": -1130.5975544897424,
                    "vx": -9.568824471292569e-20,
                    "vy": -4.74098190339299e-18
                },
                "target": {
                    "id": "Q30",
                    "name": "United States",
                    "__indexColor": "#d800c2",
                    "index": 193,
                    "x": 58.045461011607344,
                    "y": -1098.9938878228072,
                    "vx": -1.5858070013988078e-19,
                    "vy": -4.715749708219216e-18
                },
                "__indexColor": "#340297",
                "__controlPoints": null,
                "index": 280
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51752",
                    "name": "Anakin Skywalker",
                    "__indexColor": "#94011f",
                    "index": 286,
                    "x": -447.86289837323307,
                    "y": 44.38192079126628,
                    "vx": -1.792533122363198e-18,
                    "vy": -4.2275212710765973e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#200298",
                "__controlPoints": null,
                "index": 281
            },
            {
                "label": "original_broadcaster",
                "source": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "target": {
                    "id": "Q54958752",
                    "name": "Disney+",
                    "__indexColor": "#b8012a",
                    "index": 297,
                    "x": -368.5605029469679,
                    "y": -224.14234916055673,
                    "vx": -1.430872223065401e-18,
                    "vy": -1.1743271469764706e-18
                },
                "__indexColor": "#0c0299",
                "__controlPoints": null,
                "index": 282
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q636188",
                    "name": "Ray",
                    "__indexColor": "#3c013d",
                    "index": 316,
                    "x": -495.93429932382355,
                    "y": -149.34800364844384,
                    "vx": -3.0596982336872683e-18,
                    "vy": 1.5772906522656893e-18
                },
                "target": {
                    "id": "Q16738674",
                    "name": "Daisy Ridley",
                    "__indexColor": "#0c0059",
                    "index": 88,
                    "x": -463.8056622383151,
                    "y": -127.243403830087,
                    "vx": -2.9378248756870927e-18,
                    "vy": 1.3399665128950732e-18
                },
                "__indexColor": "#f8029a",
                "__controlPoints": null,
                "index": 283
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#e4029b",
                "__controlPoints": null,
                "index": 284
            },
            {
                "label": "country",
                "source": {
                    "id": "Q100",
                    "name": "Boston",
                    "__indexColor": "#ec0001",
                    "index": 0,
                    "x": 43.96221825367951,
                    "y": -1068.6372951620885,
                    "vx": -1.475505063226465e-19,
                    "vy": -4.6903116364564184e-18
                },
                "target": {
                    "id": "Q30",
                    "name": "United States",
                    "__indexColor": "#d800c2",
                    "index": 193,
                    "x": 58.045461011607344,
                    "y": -1098.9938878228072,
                    "vx": -1.5858070013988078e-19,
                    "vy": -4.715749708219216e-18
                },
                "__indexColor": "#d0029c",
                "__controlPoints": null,
                "index": 285
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q14417",
                    "name": "Asajj Ventress",
                    "__indexColor": "#600048",
                    "index": 71,
                    "x": -556.1838908663567,
                    "y": -235.55063749336412,
                    "vx": -2.9005981376572788e-18,
                    "vy": -2.58241037588882e-18
                },
                "target": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "__indexColor": "#bc029d",
                "__controlPoints": null,
                "index": 286
            },
            {
                "label": "characters",
                "source": {
                    "id": "Q124149424",
                    "name": "Part Eight",
                    "__indexColor": "#68002e",
                    "index": 45,
                    "x": -424.4995927506828,
                    "y": -254.0586582512488,
                    "vx": -2.0285436800118956e-18,
                    "vy": 1.5813099186341987e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#a8029e",
                "__controlPoints": null,
                "index": 287
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q21541731",
                    "name": "BB-8",
                    "__indexColor": "#4c0089",
                    "index": 136,
                    "x": -482.2667553533404,
                    "y": 159.440964316301,
                    "vx": -2.2555767920693866e-18,
                    "vy": -8.38050441859047e-20
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#94029f",
                "__controlPoints": null,
                "index": 288
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q56865900",
                    "name": "The Face Vietnam, season 3",
                    "__indexColor": "#2c0131",
                    "index": 304,
                    "x": -552.5318318939322,
                    "y": -257.37507678458894,
                    "vx": -1.7590928747550016e-18,
                    "vy": -2.427807704629757e-18
                },
                "target": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "__indexColor": "#8002a0",
                "__controlPoints": null,
                "index": 289
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q1093766",
                    "name": "The Force",
                    "__indexColor": "#480016",
                    "index": 21,
                    "x": -433.85453846653866,
                    "y": -28.228211252431624,
                    "vx": -1.9445049284918083e-18,
                    "vy": -2.5630616736448337e-20
                },
                "__indexColor": "#6c02a1",
                "__controlPoints": null,
                "index": 290
            },
            {
                "label": "country",
                "source": {
                    "id": "Q49233",
                    "name": "Orlando, Florida",
                    "__indexColor": "#24010b",
                    "index": 266,
                    "x": 24.780975274366217,
                    "y": -1098.9983822339063,
                    "vx": -1.7026535759120463e-19,
                    "vy": -4.7805176689295185e-18
                },
                "target": {
                    "id": "Q30",
                    "name": "United States",
                    "__indexColor": "#d800c2",
                    "index": 193,
                    "x": 58.045461011607344,
                    "y": -1098.9938878228072,
                    "vx": -1.5858070013988078e-19,
                    "vy": -4.715749708219216e-18
                },
                "__indexColor": "#5802a2",
                "__controlPoints": null,
                "index": 291
            },
            {
                "label": "mother",
                "source": {
                    "id": "Q86010165",
                    "name": "List of The Mandalorian characters",
                    "__indexColor": "#f40167",
                    "index": 358,
                    "x": -363.0833906992715,
                    "y": -271.64859125992604,
                    "vx": -2.495833079594332e-18,
                    "vy": -5.605147002415284e-19
                },
                "target": {
                    "id": "Q33133727",
                    "name": "Hera Syndulla",
                    "__indexColor": "#2400cb",
                    "index": 202,
                    "x": -297.1549420979196,
                    "y": -326.5131253093799,
                    "vx": -3.557685515046045e-18,
                    "vy": -1.8346042394734764e-18
                },
                "__indexColor": "#4402a3",
                "__controlPoints": null,
                "index": 292
            },
            {
                "label": "publication_date",
                "source": {
                    "id": "Q16738674",
                    "name": "Daisy Ridley",
                    "__indexColor": "#0c0059",
                    "index": 88,
                    "x": -463.8056622383151,
                    "y": -127.243403830087,
                    "vx": -2.9378248756870927e-18,
                    "vy": 1.3399665128950732e-18
                },
                "target": {
                    "id": "Q49622",
                    "name": "2023",
                    "__indexColor": "#e8010e",
                    "index": 269,
                    "x": -483.75930553184196,
                    "y": -161.21002498215083,
                    "vx": -3.0458783743635904e-18,
                    "vy": 1.484647259872298e-18
                },
                "__indexColor": "#3002a4",
                "__controlPoints": null,
                "index": 293
            },
            {
                "label": "product_or_material_produced",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#1c02a5",
                "__controlPoints": null,
                "index": 294
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "target": {
                    "id": "Q56865900",
                    "name": "The Face Vietnam, season 3",
                    "__indexColor": "#2c0131",
                    "index": 304,
                    "x": -552.5318318939322,
                    "y": -257.37507678458894,
                    "vx": -1.7590928747550016e-18,
                    "vy": -2.427807704629757e-18
                },
                "__indexColor": "#0802a6",
                "__controlPoints": null,
                "index": 295
            },
            {
                "label": "significant_event",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q1093766",
                    "name": "The Force",
                    "__indexColor": "#480016",
                    "index": 21,
                    "x": -433.85453846653866,
                    "y": -28.228211252431624,
                    "vx": -1.9445049284918083e-18,
                    "vy": -2.5630616736448337e-20
                },
                "__indexColor": "#f402a7",
                "__controlPoints": null,
                "index": 296
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q385494",
                    "name": "The Return",
                    "__indexColor": "#f400e7",
                    "index": 230,
                    "x": -546.7618526863822,
                    "y": -283.8606425644446,
                    "vx": -1.4905459466154498e-18,
                    "vy": -2.3432605066529333e-18
                },
                "target": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "__indexColor": "#e002a8",
                "__controlPoints": null,
                "index": 297
            },
            {
                "label": "child",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q51746",
                    "name": "Luke Skywalker",
                    "__indexColor": "#a8011e",
                    "index": 285,
                    "x": -399.3939971733653,
                    "y": -38.05291069304807,
                    "vx": -1.8205904766496245e-18,
                    "vy": -2.453912732469995e-19
                },
                "__indexColor": "#cc02a9",
                "__controlPoints": null,
                "index": 298
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q3153652",
                    "name": "Confined",
                    "__indexColor": "#7400c7",
                    "index": 198,
                    "x": -551.8230103726557,
                    "y": -271.4205451219818,
                    "vx": -1.6355654133121378e-18,
                    "vy": -2.4265749848279543e-18
                },
                "target": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "__indexColor": "#b802aa",
                "__controlPoints": null,
                "index": 299
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q51724",
                    "name": "Jedi",
                    "__indexColor": "#0c0119",
                    "index": 280,
                    "x": -390.85216893635317,
                    "y": -192.32482309285322,
                    "vx": -1.6821770275627616e-18,
                    "vy": 2.689298555724664e-19
                },
                "__indexColor": "#a402ab",
                "__controlPoints": null,
                "index": 300
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q24953533",
                    "name": "Kanan Jarrus",
                    "__indexColor": "#8000a0",
                    "index": 159,
                    "x": -382.052341642959,
                    "y": -240.771935061983,
                    "vx": -1.872189346766403e-18,
                    "vy": 3.596089439991151e-19
                },
                "target": {
                    "id": "Q51724",
                    "name": "Jedi",
                    "__indexColor": "#0c0119",
                    "index": 280,
                    "x": -390.85216893635317,
                    "y": -192.32482309285322,
                    "vx": -1.6821770275627616e-18,
                    "vy": 2.689298555724664e-19
                },
                "__indexColor": "#9002ac",
                "__controlPoints": null,
                "index": 301
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "__indexColor": "#7c02ad",
                "__controlPoints": null,
                "index": 302
            },
            {
                "label": "cast_member",
                "source": {
                    "id": "Q25307",
                    "name": "Magpie",
                    "__indexColor": "#e000a8",
                    "index": 167,
                    "x": -467.11232255064436,
                    "y": -165.26630374422174,
                    "vx": -3.063675024549634e-18,
                    "vy": 1.3517997425155952e-18
                },
                "target": {
                    "id": "Q16738674",
                    "name": "Daisy Ridley",
                    "__indexColor": "#0c0059",
                    "index": 88,
                    "x": -463.8056622383151,
                    "y": -127.243403830087,
                    "vx": -2.9378248756870927e-18,
                    "vy": 1.3399665128950732e-18
                },
                "__indexColor": "#6802ae",
                "__controlPoints": null,
                "index": 303
            },
            {
                "label": "father",
                "source": {
                    "id": "Q51746",
                    "name": "Luke Skywalker",
                    "__indexColor": "#a8011e",
                    "index": 285,
                    "x": -399.3939971733653,
                    "y": -38.05291069304807,
                    "vx": -1.8205904766496245e-18,
                    "vy": -2.453912732469995e-19
                },
                "target": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "__indexColor": "#5402af",
                "__controlPoints": null,
                "index": 304
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q24953533",
                    "name": "Kanan Jarrus",
                    "__indexColor": "#8000a0",
                    "index": 159,
                    "x": -382.052341642959,
                    "y": -240.771935061983,
                    "vx": -1.872189346766403e-18,
                    "vy": 3.596089439991151e-19
                },
                "target": {
                    "id": "Q19873",
                    "name": "Lightsaber",
                    "__indexColor": "#c80076",
                    "index": 117,
                    "x": -398.1491959608278,
                    "y": -272.31963799965416,
                    "vx": -1.7503722942333935e-18,
                    "vy": 3.301826313504889e-19
                },
                "__indexColor": "#4002b0",
                "__controlPoints": null,
                "index": 305
            },
            {
                "label": "student",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#2c02b1",
                "__controlPoints": null,
                "index": 306
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q4656436",
                    "name": "A Different Approach",
                    "__indexColor": "#b00104",
                    "index": 259,
                    "x": -535.6061442290636,
                    "y": -294.1262357898147,
                    "vx": -1.3463190750718087e-18,
                    "vy": -2.187904546206919e-18
                },
                "target": {
                    "id": "Q97365172",
                    "name": "Star Wars: The Bad Batch",
                    "__indexColor": "#28017e",
                    "index": 381,
                    "x": -513.2023346258911,
                    "y": -261.9637830202415,
                    "vx": -1.739993206308918e-18,
                    "vy": -1.938512455589376e-18
                },
                "__indexColor": "#1802b2",
                "__controlPoints": null,
                "index": 307
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q3224307",
                    "name": "The Courtship of Princess Leia",
                    "__indexColor": "#4c00c9",
                    "index": 200,
                    "x": -433.67453700403206,
                    "y": -241.81837937528465,
                    "vx": -2.054112310393882e-18,
                    "vy": 2.0693051726175377e-19
                },
                "__indexColor": "#0402b3",
                "__controlPoints": null,
                "index": 308
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q56297455",
                    "name": "self doubt",
                    "__indexColor": "#54012f",
                    "index": 302,
                    "x": -494.49341620899287,
                    "y": 720.4614006004422,
                    "vx": -2.4608510871620123e-18,
                    "vy": 3.1829122647486487e-18
                },
                "target": {
                    "id": "Q26689564",
                    "name": "Insecure",
                    "__indexColor": "#dc00b5",
                    "index": 180,
                    "x": -525.3742000942837,
                    "y": 711.5556240675658,
                    "vx": -2.4866827817598948e-18,
                    "vy": 3.218492296361657e-18
                },
                "__indexColor": "#f002b4",
                "__controlPoints": null,
                "index": 309
            },
            {
                "label": "sibling",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q86010165",
                    "name": "List of The Mandalorian characters",
                    "__indexColor": "#f40167",
                    "index": 358,
                    "x": -363.0833906992715,
                    "y": -271.64859125992604,
                    "vx": -2.495833079594332e-18,
                    "vy": -5.605147002415284e-19
                },
                "__indexColor": "#dc02b5",
                "__controlPoints": null,
                "index": 310
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q56297455",
                    "name": "self doubt",
                    "__indexColor": "#54012f",
                    "index": 302,
                    "x": -494.49341620899287,
                    "y": 720.4614006004422,
                    "vx": -2.4608510871620123e-18,
                    "vy": 3.1829122647486487e-18
                },
                "target": {
                    "id": "Q3152967",
                    "name": "emotional insecurity",
                    "__indexColor": "#8800c6",
                    "index": 197,
                    "x": -465.35237095057516,
                    "y": 734.8332691925186,
                    "vx": -2.404929106631318e-18,
                    "vy": 3.042235668707759e-18
                },
                "__indexColor": "#c802b6",
                "__controlPoints": null,
                "index": 311
            },
            {
                "label": "sibling",
                "source": {
                    "id": "Q86010165",
                    "name": "List of The Mandalorian characters",
                    "__indexColor": "#f40167",
                    "index": 358,
                    "x": -363.0833906992715,
                    "y": -271.64859125992604,
                    "vx": -2.495833079594332e-18,
                    "vy": -5.605147002415284e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#b402b7",
                "__controlPoints": null,
                "index": 312
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q56297455",
                    "name": "self doubt",
                    "__indexColor": "#54012f",
                    "index": 302,
                    "x": -494.49341620899287,
                    "y": 720.4614006004422,
                    "vx": -2.4608510871620123e-18,
                    "vy": 3.1829122647486487e-18
                },
                "target": {
                    "id": "Q26689564",
                    "name": "Insecure",
                    "__indexColor": "#dc00b5",
                    "index": 180,
                    "x": -525.3742000942837,
                    "y": 711.5556240675658,
                    "vx": -2.4866827817598948e-18,
                    "vy": 3.218492296361657e-18
                },
                "__indexColor": "#a002b8",
                "__controlPoints": null,
                "index": 313
            },
            {
                "label": "main_subject",
                "source": {
                    "id": "Q65090123",
                    "name": "List of Star Wars television series",
                    "__indexColor": "#000140",
                    "index": 319,
                    "x": -396.4574905255115,
                    "y": 10.277023460479418,
                    "vx": -1.6015631319792367e-18,
                    "vy": 2.5442672021430877e-22
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#8c02b9",
                "__controlPoints": null,
                "index": 314
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q3224307",
                    "name": "The Courtship of Princess Leia",
                    "__indexColor": "#4c00c9",
                    "index": 200,
                    "x": -433.67453700403206,
                    "y": -241.81837937528465,
                    "vx": -2.054112310393882e-18,
                    "vy": 2.0693051726175377e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#7802ba",
                "__controlPoints": null,
                "index": 315
            },
            {
                "label": "main_subject",
                "source": {
                    "id": "Q65090123",
                    "name": "List of Star Wars television series",
                    "__indexColor": "#000140",
                    "index": 319,
                    "x": -396.4574905255115,
                    "y": 10.277023460479418,
                    "vx": -1.6015631319792367e-18,
                    "vy": 2.5442672021430877e-22
                },
                "target": {
                    "id": "Q5193368",
                    "name": "Cultural impact of Star Wars",
                    "__indexColor": "#080126",
                    "index": 293,
                    "x": -430.1349528760799,
                    "y": 9.339003807693922,
                    "vx": -1.6004130568221558e-18,
                    "vy": -5.155665877780492e-19
                },
                "__indexColor": "#6402bb",
                "__controlPoints": null,
                "index": 316
            },
            {
                "label": "subsidiary",
                "source": {
                    "id": "Q7414",
                    "name": "The Walt Disney Company",
                    "__indexColor": "#c00150",
                    "index": 335,
                    "x": -441.3902274756757,
                    "y": 179.88805350887668,
                    "vx": -2.2676562408008727e-18,
                    "vy": 6.481562690494274e-20
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#5002bc",
                "__controlPoints": null,
                "index": 317
            },
            {
                "label": "based_on",
                "source": {
                    "id": "Q65090123",
                    "name": "List of Star Wars television series",
                    "__indexColor": "#000140",
                    "index": 319,
                    "x": -396.4574905255115,
                    "y": 10.277023460479418,
                    "vx": -1.6015631319792367e-18,
                    "vy": 2.5442672021430877e-22
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#3c02bd",
                "__controlPoints": null,
                "index": 318
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q19873",
                    "name": "Lightsaber",
                    "__indexColor": "#c80076",
                    "index": 117,
                    "x": -398.1491959608278,
                    "y": -272.31963799965416,
                    "vx": -1.7503722942333935e-18,
                    "vy": 3.301826313504889e-19
                },
                "__indexColor": "#2802be",
                "__controlPoints": null,
                "index": 319
            },
            {
                "label": "parent_organization",
                "source": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "target": {
                    "id": "Q7414",
                    "name": "The Walt Disney Company",
                    "__indexColor": "#c00150",
                    "index": 335,
                    "x": -441.3902274756757,
                    "y": 179.88805350887668,
                    "vx": -2.2676562408008727e-18,
                    "vy": 6.481562690494274e-20
                },
                "__indexColor": "#1402bf",
                "__controlPoints": null,
                "index": 320
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q19873",
                    "name": "Lightsaber",
                    "__indexColor": "#c80076",
                    "index": 117,
                    "x": -398.1491959608278,
                    "y": -272.31963799965416,
                    "vx": -1.7503722942333935e-18,
                    "vy": 3.301826313504889e-19
                },
                "target": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "__indexColor": "#0002c0",
                "__controlPoints": null,
                "index": 321
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q14944179",
                    "name": "Peaky Blinders",
                    "__indexColor": "#d4004f",
                    "index": 78,
                    "x": 127.32235912112671,
                    "y": -126.33678885290438,
                    "vx": 1.814364552103585e-18,
                    "vy": -3.1799422774962276e-19
                },
                "target": {
                    "id": "Q1337354",
                    "name": "Steven Knight",
                    "__indexColor": "#8c0039",
                    "index": 56,
                    "x": 131.45556421011597,
                    "y": -94.67412830758714,
                    "vx": 1.7725411939313563e-18,
                    "vy": -3.090370373693316e-19
                },
                "__indexColor": "#ec02c1",
                "__controlPoints": null,
                "index": 322
            },
            {
                "label": "director",
                "source": {
                    "id": "Q84712813",
                    "name": "Ms. Marvel",
                    "__indexColor": "#1c0165",
                    "index": 356,
                    "x": 854.8219589157019,
                    "y": -820.7221025410165,
                    "vx": 3.4600449678631742e-18,
                    "vy": -3.2047137331673267e-18
                },
                "target": {
                    "id": "Q3563826",
                    "name": "Sharmeen Obaid-Chinoy",
                    "__indexColor": "#3400d7",
                    "index": 214,
                    "x": 833.7979879296009,
                    "y": -844.6660786825499,
                    "vx": 3.470399351265997e-18,
                    "vy": -3.213800422945519e-18
                },
                "__indexColor": "#d802c2",
                "__controlPoints": null,
                "index": 323
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q25455117",
                    "name": "Sabine Wren",
                    "__indexColor": "#a400ab",
                    "index": 170,
                    "x": -392.4930798974843,
                    "y": -253.47676354050427,
                    "vx": -1.6821208948761148e-18,
                    "vy": 2.344436024277941e-19
                },
                "target": {
                    "id": "Q51724",
                    "name": "Jedi",
                    "__indexColor": "#0c0119",
                    "index": 280,
                    "x": -390.85216893635317,
                    "y": -192.32482309285322,
                    "vx": -1.6821770275627616e-18,
                    "vy": 2.689298555724664e-19
                },
                "__indexColor": "#c402c3",
                "__controlPoints": null,
                "index": 324
            },
            {
                "label": "ethnic_group",
                "source": {
                    "id": "Q51780",
                    "name": "Grand Admiral Thrawn",
                    "__indexColor": "#440123",
                    "index": 290,
                    "x": -197.69240025190516,
                    "y": -476.6805568218649,
                    "vx": -2.4732384803472028e-18,
                    "vy": 3.883356573078013e-19
                },
                "target": {
                    "id": "Q56876444",
                    "name": "The Mandalorian",
                    "__indexColor": "#040133",
                    "index": 306,
                    "x": -230.50558878191197,
                    "y": -352.21658501677,
                    "vx": -1.9294342406358672e-18,
                    "vy": 2.0624642999609032e-19
                },
                "__indexColor": "#b002c4",
                "__controlPoints": null,
                "index": 325
            },
            {
                "label": "mother",
                "source": {
                    "id": "Q24953547",
                    "name": "Ezra Bridger",
                    "__indexColor": "#6c00a1",
                    "index": 160,
                    "x": -258.9634393945803,
                    "y": -331.74501365520644,
                    "vx": -3.649052394336511e-18,
                    "vy": -2.6638648424274977e-18
                },
                "target": {
                    "id": "Q33133727",
                    "name": "Hera Syndulla",
                    "__indexColor": "#2400cb",
                    "index": 202,
                    "x": -297.1549420979196,
                    "y": -326.5131253093799,
                    "vx": -3.557685515046045e-18,
                    "vy": -1.8346042394734764e-18
                },
                "__indexColor": "#9c02c5",
                "__controlPoints": null,
                "index": 326
            },
            {
                "label": "ethnic_group",
                "source": {
                    "id": "Q33133727",
                    "name": "Hera Syndulla",
                    "__indexColor": "#2400cb",
                    "index": 202,
                    "x": -297.1549420979196,
                    "y": -326.5131253093799,
                    "vx": -3.557685515046045e-18,
                    "vy": -1.8346042394734764e-18
                },
                "target": {
                    "id": "Q54289",
                    "name": "Mandalorians",
                    "__indexColor": "#e00128",
                    "index": 295,
                    "x": -267.86224323649844,
                    "y": -351.89114050946955,
                    "vx": -4.005640345503266e-18,
                    "vy": -2.6720625720083813e-18
                },
                "__indexColor": "#8802c6",
                "__controlPoints": null,
                "index": 327
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q1093766",
                    "name": "The Force",
                    "__indexColor": "#480016",
                    "index": 21,
                    "x": -433.85453846653866,
                    "y": -28.228211252431624,
                    "vx": -1.9445049284918083e-18,
                    "vy": -2.5630616736448337e-20
                },
                "__indexColor": "#7402c7",
                "__controlPoints": null,
                "index": 328
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q1093766",
                    "name": "The Force",
                    "__indexColor": "#480016",
                    "index": 21,
                    "x": -433.85453846653866,
                    "y": -28.228211252431624,
                    "vx": -1.9445049284918083e-18,
                    "vy": -2.5630616736448337e-20
                },
                "__indexColor": "#6002c8",
                "__controlPoints": null,
                "index": 329
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q11402",
                    "name": "Force",
                    "__indexColor": "#6c0021",
                    "index": 32,
                    "x": -449.5873989787246,
                    "y": -103.32424026605617,
                    "vx": -1.673166737713285e-18,
                    "vy": -3.4345000993527294e-19
                },
                "__indexColor": "#4c02c9",
                "__controlPoints": null,
                "index": 330
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q104996560",
                    "name": "Dark Side",
                    "__indexColor": "#600008",
                    "index": 7,
                    "x": -382.6010542558409,
                    "y": 78.04516171738864,
                    "vx": -1.880069951075313e-18,
                    "vy": 1.6601364980351475e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#3802ca",
                "__controlPoints": null,
                "index": 331
            },
            {
                "label": "field_of_work",
                "source": {
                    "id": "Q240648",
                    "name": "501st Legion",
                    "__indexColor": "#5c0095",
                    "index": 148,
                    "x": -369.7153013008069,
                    "y": 74.21977123082901,
                    "vx": -2.057100659540385e-18,
                    "vy": 3.8671752732583974e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#2402cb",
                "__controlPoints": null,
                "index": 332
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "target": {
                    "id": "Q13563071",
                    "name": "Leslye Headland",
                    "__indexColor": "#3c003d",
                    "index": 60,
                    "x": -235.48381904273106,
                    "y": -208.26299655442384,
                    "vx": -1.0891370399639882e-18,
                    "vy": -7.837381249491701e-19
                },
                "__indexColor": "#1002cc",
                "__controlPoints": null,
                "index": 333
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q240648",
                    "name": "501st Legion",
                    "__indexColor": "#5c0095",
                    "index": 148,
                    "x": -369.7153013008069,
                    "y": 74.21977123082901,
                    "vx": -2.057100659540385e-18,
                    "vy": 3.8671752732583974e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#fc02cd",
                "__controlPoints": null,
                "index": 334
            },
            {
                "label": "occupation",
                "source": {
                    "id": "Q13563071",
                    "name": "Leslye Headland",
                    "__indexColor": "#3c003d",
                    "index": 60,
                    "x": -235.48381904273106,
                    "y": -208.26299655442384,
                    "vx": -1.0891370399639882e-18,
                    "vy": -7.837381249491701e-19
                },
                "target": {
                    "id": "Q105674",
                    "name": "Running",
                    "__indexColor": "#10000c",
                    "index": 11,
                    "x": -198.85469900233494,
                    "y": -212.82634730895504,
                    "vx": -9.937957686914513e-19,
                    "vy": -1.7523007410014174e-18
                },
                "__indexColor": "#e802ce",
                "__controlPoints": null,
                "index": 335
            },
            {
                "label": "location",
                "source": {
                    "id": "Q7601119",
                    "name": "Star Wars Celebration",
                    "__indexColor": "#840153",
                    "index": 338,
                    "x": -10.903338337626472,
                    "y": 1098.2320431116516,
                    "vx": 2.0029793376101379e-19,
                    "vy": 4.792399316936452e-18
                },
                "target": {
                    "id": "Q84",
                    "name": "London",
                    "__indexColor": "#6c0161",
                    "index": 352,
                    "x": -42.72030636056553,
                    "y": 1096.4806346548735,
                    "vx": 2.11156437021827e-19,
                    "vy": 4.7788058455573055e-18
                },
                "__indexColor": "#d402cf",
                "__controlPoints": null,
                "index": 336
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "__indexColor": "#c002d0",
                "__controlPoints": null,
                "index": 337
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q7601119",
                    "name": "Star Wars Celebration",
                    "__indexColor": "#840153",
                    "index": 338,
                    "x": -10.903338337626472,
                    "y": 1098.2320431116516,
                    "vx": 2.0029793376101379e-19,
                    "vy": 4.792399316936452e-18
                },
                "target": {
                    "id": "Q84",
                    "name": "London",
                    "__indexColor": "#6c0161",
                    "index": 352,
                    "x": -42.72030636056553,
                    "y": 1096.4806346548735,
                    "vx": 2.11156437021827e-19,
                    "vy": 4.7788058455573055e-18
                },
                "__indexColor": "#ac02d1",
                "__controlPoints": null,
                "index": 338
            },
            {
                "label": "country",
                "source": {
                    "id": "Q862452",
                    "name": "Makuhari Messe",
                    "__indexColor": "#cc0169",
                    "index": 360,
                    "x": -1131.20124217261,
                    "y": 356.1894560899075,
                    "vx": -4.6135689249125925e-18,
                    "vy": 1.6415290128031926e-18
                },
                "target": {
                    "id": "Q17",
                    "name": "Japan",
                    "__indexColor": "#e4005b",
                    "index": 90,
                    "x": -1099.167753966347,
                    "y": 352.948014252128,
                    "vx": -4.635567373500825e-18,
                    "vy": 1.4269790011522521e-18
                },
                "__indexColor": "#9802d2",
                "__controlPoints": null,
                "index": 339
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q372947",
                    "name": "Ray Stevenson",
                    "__indexColor": "#6c00e1",
                    "index": 224,
                    "x": -411.6248135587681,
                    "y": -260.74949580886476,
                    "vx": -2.0003479692055262e-18,
                    "vy": 1.6401173551176735e-19
                },
                "__indexColor": "#8402d3",
                "__controlPoints": null,
                "index": 340
            },
            {
                "label": "position_held",
                "source": {
                    "id": "Q51770",
                    "name": "Palpatine",
                    "__indexColor": "#6c0121",
                    "index": 288,
                    "x": 976.1292769113521,
                    "y": -654.7809612546147,
                    "vx": 3.669547850562488e-18,
                    "vy": -2.7863045793894932e-18
                },
                "target": {
                    "id": "Q39018",
                    "name": "Emperor",
                    "__indexColor": "#9000ec",
                    "index": 235,
                    "x": 956.576540271741,
                    "y": -680.0286047788427,
                    "vx": 3.6882039168783386e-18,
                    "vy": -2.7954008270277936e-18
                },
                "__indexColor": "#7002d4",
                "__controlPoints": null,
                "index": 341
            },
            {
                "label": "start_time",
                "source": {
                    "id": "Q104161310",
                    "name": "The Acolyte",
                    "__indexColor": "#9c0005",
                    "index": 4,
                    "x": -281.9569073229922,
                    "y": -199.33569504740524,
                    "vx": -1.4247647977505346e-18,
                    "vy": -4.8797767107984575e-19
                },
                "target": {
                    "id": "Q69307189",
                    "name": "June 4, 2024",
                    "__indexColor": "#b00144",
                    "index": 323,
                    "x": -256.6869860569424,
                    "y": -225.16072098439886,
                    "vx": -1.3331612659192895e-18,
                    "vy": -3.8642740195251625e-19
                },
                "__indexColor": "#5c02d5",
                "__controlPoints": null,
                "index": 342
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q349375",
                    "name": "Fortnite",
                    "__indexColor": "#7000d4",
                    "index": 211,
                    "x": -426.1076224235031,
                    "y": -286.274031126854,
                    "vx": -1.6048035489528892e-18,
                    "vy": 1.2617478466034096e-19
                },
                "__indexColor": "#4802d6",
                "__controlPoints": null,
                "index": 343
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q193294",
                    "name": "sunrise",
                    "__indexColor": "#f00074",
                    "index": 115,
                    "x": 608.0032345212177,
                    "y": 835.3756884429049,
                    "vx": 2.4824867797853713e-18,
                    "vy": 3.6049387446912565e-18
                },
                "target": {
                    "id": "Q43175",
                    "name": "flag of Japan",
                    "__indexColor": "#3c00fd",
                    "index": 252,
                    "x": 603.9760902215186,
                    "y": 867.121447471183,
                    "vx": 2.4466596755036946e-18,
                    "vy": 3.5817771452720985e-18
                },
                "__indexColor": "#3402d7",
                "__controlPoints": null,
                "index": 344
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q360501",
                    "name": "Paul Young",
                    "__indexColor": "#bc00dd",
                    "index": 220,
                    "x": 1229.095765230979,
                    "y": -28.659278004363877,
                    "vx": 4.831485878740777e-18,
                    "vy": 6.859730897030815e-20
                },
                "target": {
                    "id": "Q2940649",
                    "name": "Cartoon Saloon",
                    "__indexColor": "#0000c0",
                    "index": 191,
                    "x": 1239.712930936,
                    "y": -58.80205175146014,
                    "vx": 4.849195616035308e-18,
                    "vy": 7.236383843846025e-20
                },
                "__indexColor": "#2002d8",
                "__controlPoints": null,
                "index": 345
            },
            {
                "label": "student",
                "source": {
                    "id": "Q51736",
                    "name": "Qui-Gon Jinn",
                    "__indexColor": "#d0011c",
                    "index": 283,
                    "x": -509.60154252710015,
                    "y": -6.402049961664847,
                    "vx": -1.9787193422731583e-18,
                    "vy": -9.358761552329982e-19
                },
                "target": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "__indexColor": "#0c02d9",
                "__controlPoints": null,
                "index": 346
            },
            {
                "label": "genre",
                "source": {
                    "id": "Q900956",
                    "name": "Visions",
                    "__indexColor": "#040173",
                    "index": 370,
                    "x": -600.3832521595168,
                    "y": 1069.001175105558,
                    "vx": -2.3602466014739354e-18,
                    "vy": 4.335071346806703e-18
                },
                "target": {
                    "id": "Q23653",
                    "name": "anthology series",
                    "__indexColor": "#980092",
                    "index": 145,
                    "x": -627.8939737653175,
                    "y": 1052.7168207666457,
                    "vx": -2.3618453576485815e-18,
                    "vy": 4.328424994504886e-18
                },
                "__indexColor": "#f802da",
                "__controlPoints": null,
                "index": 347
            },
            {
                "label": "depicts",
                "source": {
                    "id": "Q43175",
                    "name": "flag of Japan",
                    "__indexColor": "#3c00fd",
                    "index": 252,
                    "x": 603.9760902215186,
                    "y": 867.121447471183,
                    "vx": 2.4466596755036946e-18,
                    "vy": 3.5817771452720985e-18
                },
                "target": {
                    "id": "Q193294",
                    "name": "sunrise",
                    "__indexColor": "#f00074",
                    "index": 115,
                    "x": 608.0032345212177,
                    "y": 835.3756884429049,
                    "vx": 2.4824867797853713e-18,
                    "vy": 3.6049387446912565e-18
                },
                "__indexColor": "#e402db",
                "__controlPoints": null,
                "index": 348
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q51736",
                    "name": "Qui-Gon Jinn",
                    "__indexColor": "#d0011c",
                    "index": 283,
                    "x": -509.60154252710015,
                    "y": -6.402049961664847,
                    "vx": -1.9787193422731583e-18,
                    "vy": -9.358761552329982e-19
                },
                "__indexColor": "#d002dc",
                "__controlPoints": null,
                "index": 349
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q28787",
                    "name": "Star Wars Rebels",
                    "__indexColor": "#1400bf",
                    "index": 190,
                    "x": -346.75259607068017,
                    "y": -89.81261278681568,
                    "vx": -2.2351817520305194e-18,
                    "vy": 2.506209010273065e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#bc02dd",
                "__controlPoints": null,
                "index": 350
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q900956",
                    "name": "Visions",
                    "__indexColor": "#040173",
                    "index": 370,
                    "x": -600.3832521595168,
                    "y": 1069.001175105558,
                    "vx": -2.3602466014739354e-18,
                    "vy": 4.335071346806703e-18
                },
                "target": {
                    "id": "Q23653",
                    "name": "anthology series",
                    "__indexColor": "#980092",
                    "index": 145,
                    "x": -627.8939737653175,
                    "y": 1052.7168207666457,
                    "vx": -2.3618453576485815e-18,
                    "vy": 4.328424994504886e-18
                },
                "__indexColor": "#a802de",
                "__controlPoints": null,
                "index": 351
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q12206942",
                    "name": "Darth Vader",
                    "__indexColor": "#90002c",
                    "index": 43,
                    "x": -416.85956525267983,
                    "y": -93.01492546482316,
                    "vx": -1.7218461140213561e-18,
                    "vy": -1.726169767625492e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#9402df",
                "__controlPoints": null,
                "index": 352
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q51736",
                    "name": "Qui-Gon Jinn",
                    "__indexColor": "#d0011c",
                    "index": 283,
                    "x": -509.60154252710015,
                    "y": -6.402049961664847,
                    "vx": -1.9787193422731583e-18,
                    "vy": -9.358761552329982e-19
                },
                "target": {
                    "id": "Q183816",
                    "name": "master's degree",
                    "__indexColor": "#a4006b",
                    "index": 106,
                    "x": -473.2715845599199,
                    "y": -45.79262931652979,
                    "vx": -1.8149902224113576e-18,
                    "vy": -4.776290463981354e-19
                },
                "__indexColor": "#8002e0",
                "__controlPoints": null,
                "index": 353
            },
            {
                "label": "depicts",
                "source": {
                    "id": "Q43175",
                    "name": "flag of Japan",
                    "__indexColor": "#3c00fd",
                    "index": 252,
                    "x": 603.9760902215186,
                    "y": 867.121447471183,
                    "vx": 2.4466596755036946e-18,
                    "vy": 3.5817771452720985e-18
                },
                "target": {
                    "id": "Q39231",
                    "name": "Mount Fuji",
                    "__indexColor": "#7c00ed",
                    "index": 236,
                    "x": 613.7507773596764,
                    "y": 897.7537233968741,
                    "vx": 2.4404004031948992e-18,
                    "vy": 3.5801379974386856e-18
                },
                "__indexColor": "#6c02e1",
                "__controlPoints": null,
                "index": 354
            },
            {
                "label": "developer",
                "source": {
                    "id": "Q349375",
                    "name": "Fortnite",
                    "__indexColor": "#7000d4",
                    "index": 211,
                    "x": -426.1076224235031,
                    "y": -286.274031126854,
                    "vx": -1.6048035489528892e-18,
                    "vy": 1.2617478466034096e-19
                },
                "target": {
                    "id": "Q739711",
                    "name": "Epic Games",
                    "__indexColor": "#d4014f",
                    "index": 334,
                    "x": -443.61826059391046,
                    "y": -328.9961022792519,
                    "vx": -1.3037723098328745e-18,
                    "vy": -1.8699084850652372e-19
                },
                "__indexColor": "#5802e2",
                "__controlPoints": null,
                "index": 355
            },
            {
                "label": "production_company",
                "source": {
                    "id": "Q51771",
                    "name": "Sith",
                    "__indexColor": "#580122",
                    "index": 289,
                    "x": -435.97501415509385,
                    "y": 29.61473796302526,
                    "vx": -2.061681877254107e-18,
                    "vy": -3.990939646870264e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#4402e3",
                "__controlPoints": null,
                "index": 356
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51746",
                    "name": "Luke Skywalker",
                    "__indexColor": "#a8011e",
                    "index": 285,
                    "x": -399.3939971733653,
                    "y": -38.05291069304807,
                    "vx": -1.8205904766496245e-18,
                    "vy": -2.453912732469995e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#3002e4",
                "__controlPoints": null,
                "index": 357
            },
            {
                "label": "student_of",
                "source": {
                    "id": "Q51740",
                    "name": "Obi-Wan Kenobi",
                    "__indexColor": "#bc011d",
                    "index": 284,
                    "x": -471.10397188718514,
                    "y": 7.082558053850892,
                    "vx": -1.8517333449994453e-18,
                    "vy": -4.555152451460619e-19
                },
                "target": {
                    "id": "Q183816",
                    "name": "master's degree",
                    "__indexColor": "#a4006b",
                    "index": 106,
                    "x": -473.2715845599199,
                    "y": -45.79262931652979,
                    "vx": -1.8149902224113576e-18,
                    "vy": -4.776290463981354e-19
                },
                "__indexColor": "#1c02e5",
                "__controlPoints": null,
                "index": 358
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q28787",
                    "name": "Star Wars Rebels",
                    "__indexColor": "#1400bf",
                    "index": 190,
                    "x": -346.75259607068017,
                    "y": -89.81261278681568,
                    "vx": -2.2351817520305194e-18,
                    "vy": 2.506209010273065e-19
                },
                "target": {
                    "id": "Q2559261",
                    "name": "Dave Filoni",
                    "__indexColor": "#5400af",
                    "index": 174,
                    "x": -306.08571582897525,
                    "y": -255.27768444185173,
                    "vx": -2.0074634590846283e-18,
                    "vy": 7.880629314652083e-20
                },
                "__indexColor": "#0802e6",
                "__controlPoints": null,
                "index": 359
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q56876444",
                    "name": "The Mandalorian",
                    "__indexColor": "#040133",
                    "index": 306,
                    "x": -230.50558878191197,
                    "y": -352.21658501677,
                    "vx": -1.9294342406358672e-18,
                    "vy": 2.0624642999609032e-19
                },
                "target": {
                    "id": "Q2559261",
                    "name": "Dave Filoni",
                    "__indexColor": "#5400af",
                    "index": 174,
                    "x": -306.08571582897525,
                    "y": -255.27768444185173,
                    "vx": -2.0074634590846283e-18,
                    "vy": 7.880629314652083e-20
                },
                "__indexColor": "#f402e7",
                "__controlPoints": null,
                "index": 360
            },
            {
                "label": "military_rank",
                "source": {
                    "id": "Q51780",
                    "name": "Grand Admiral Thrawn",
                    "__indexColor": "#440123",
                    "index": 290,
                    "x": -197.69240025190516,
                    "y": -476.6805568218649,
                    "vx": -2.4732384803472028e-18,
                    "vy": 3.883356573078013e-19
                },
                "target": {
                    "id": "Q842486",
                    "name": "admiral of the fleet",
                    "__indexColor": "#440163",
                    "index": 354,
                    "x": -186.17507208346402,
                    "y": -517.5521714387125,
                    "vx": -2.6381778398205724e-18,
                    "vy": 2.578716130328339e-19
                },
                "__indexColor": "#e002e8",
                "__controlPoints": null,
                "index": 361
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q77001957",
                    "name": "Grogu",
                    "__indexColor": "#5c0155",
                    "index": 340,
                    "x": -172.4749611388597,
                    "y": -428.8364468617177,
                    "vx": -2.2318779518712526e-18,
                    "vy": -5.886644620680587e-19
                },
                "target": {
                    "id": "Q295964",
                    "name": "Jon Favreau",
                    "__indexColor": "#ec00c1",
                    "index": 192,
                    "x": -199.10871497340494,
                    "y": -399.6454273844849,
                    "vx": -2.023728668013186e-18,
                    "vy": -1.8734602432904322e-19
                },
                "__indexColor": "#cc02e9",
                "__controlPoints": null,
                "index": 362
            },
            {
                "label": "production_company",
                "source": {
                    "id": "Q110059874",
                    "name": "I Am Your Mother",
                    "__indexColor": "#200018",
                    "index": 23,
                    "x": -426.5508575750042,
                    "y": 173.8868846481025,
                    "vx": -2.2552601140367323e-18,
                    "vy": 1.1055496184945863e-19
                },
                "target": {
                    "id": "Q242446",
                    "name": "Lucasfilm",
                    "__indexColor": "#340097",
                    "index": 150,
                    "x": -448.18562170015144,
                    "y": 142.96016226223725,
                    "vx": -2.1908131226885974e-18,
                    "vy": 4.3935271220782024e-20
                },
                "__indexColor": "#b802ea",
                "__controlPoints": null,
                "index": 363
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#a402eb",
                "__controlPoints": null,
                "index": 364
            },
            {
                "label": "author",
                "source": {
                    "id": "Q25208763",
                    "name": "Bounty Hunters",
                    "__indexColor": "#3000a4",
                    "index": 163,
                    "x": 24.340167421305672,
                    "y": 314.4713389225743,
                    "vx": 1.0262048298982171e-18,
                    "vy": 2.001231150164311e-18
                },
                "target": {
                    "id": "Q24259397",
                    "name": "Ethan Sacks",
                    "__indexColor": "#200098",
                    "index": 151,
                    "x": 14.25728452008216,
                    "y": 284.29493901427963,
                    "vx": 1.1473904134310935e-18,
                    "vy": 1.960118398190783e-18
                },
                "__indexColor": "#9002ec",
                "__controlPoints": null,
                "index": 365
            },
            {
                "label": "author",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q5129181",
                    "name": "Claudia Gray",
                    "__indexColor": "#340117",
                    "index": 278,
                    "x": -151.4385412134905,
                    "y": -115.08087698358139,
                    "vx": -1.4411775259455494e-18,
                    "vy": -3.11184165513098e-20
                },
                "__indexColor": "#7c02ed",
                "__controlPoints": null,
                "index": 366
            },
            {
                "label": "author",
                "source": {
                    "id": "Q105438405",
                    "name": "Thrawn: Alliances",
                    "__indexColor": "#38000a",
                    "index": 9,
                    "x": 242.79510676745412,
                    "y": 1064.877091426502,
                    "vx": 1.3170066443964405e-18,
                    "vy": 4.506815482078991e-18
                },
                "target": {
                    "id": "Q55760188",
                    "name": "Marc Bernardin",
                    "__indexColor": "#90012c",
                    "index": 299,
                    "x": 224.65763667251207,
                    "y": 1091.242944827544,
                    "vx": 1.2662300810001586e-18,
                    "vy": 4.4703486266396285e-18
                },
                "__indexColor": "#6802ee",
                "__controlPoints": null,
                "index": 367
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q51755",
                    "name": "Ahsoka Tano",
                    "__indexColor": "#800120",
                    "index": 287,
                    "x": -400.5223623856839,
                    "y": -223.3162803922654,
                    "vx": -1.9206705200248796e-18,
                    "vy": 2.9413348211412435e-19
                },
                "target": {
                    "id": "Q2559261",
                    "name": "Dave Filoni",
                    "__indexColor": "#5400af",
                    "index": 174,
                    "x": -306.08571582897525,
                    "y": -255.27768444185173,
                    "vx": -2.0074634590846283e-18,
                    "vy": 7.880629314652083e-20
                },
                "__indexColor": "#5402ef",
                "__controlPoints": null,
                "index": 368
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q2635753",
                    "name": "The Nameless",
                    "__indexColor": "#0400b3",
                    "index": 178,
                    "x": 1070.767096989361,
                    "y": -81.42362755274333,
                    "vx": 4.204909341930205e-18,
                    "vy": -7.677073598364484e-20
                },
                "target": {
                    "id": "Q120597088",
                    "name": "Michael Siglain",
                    "__indexColor": "#e00028",
                    "index": 39,
                    "x": 1046.8544540572598,
                    "y": -102.58747344074801,
                    "vx": 4.19322771544553e-18,
                    "vy": -4.678540187572749e-20
                },
                "__indexColor": "#4002f0",
                "__controlPoints": null,
                "index": 369
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q51780",
                    "name": "Grand Admiral Thrawn",
                    "__indexColor": "#440123",
                    "index": 290,
                    "x": -197.69240025190516,
                    "y": -476.6805568218649,
                    "vx": -2.4732384803472028e-18,
                    "vy": 3.883356573078013e-19
                },
                "target": {
                    "id": "Q434029",
                    "name": "Timothy Zahn",
                    "__indexColor": "#2800fe",
                    "index": 253,
                    "x": -200.87438437572456,
                    "y": -518.5637330829123,
                    "vx": -2.7353526784740145e-18,
                    "vy": 3.9741162916589987e-19
                },
                "__indexColor": "#2c02f1",
                "__controlPoints": null,
                "index": 370
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q51780",
                    "name": "Grand Admiral Thrawn",
                    "__indexColor": "#440123",
                    "index": 290,
                    "x": -197.69240025190516,
                    "y": -476.6805568218649,
                    "vx": -2.4732384803472028e-18,
                    "vy": 3.883356573078013e-19
                },
                "target": {
                    "id": "Q110876442",
                    "name": "Jody Houser",
                    "__indexColor": "#0c0019",
                    "index": 24,
                    "x": -173.3544353005871,
                    "y": -509.88162653117655,
                    "vx": -2.55076033864474e-18,
                    "vy": 3.1628075408177193e-19
                },
                "__indexColor": "#1802f2",
                "__controlPoints": null,
                "index": 371
            },
            {
                "label": "author",
                "source": {
                    "id": "Q86450949",
                    "name": "Star Wars: The High Republic",
                    "__indexColor": "#a4016b",
                    "index": 362,
                    "x": -200.86261851738092,
                    "y": 81.17241822824094,
                    "vx": -1.5035110491663475e-18,
                    "vy": -7.831028193518376e-19
                },
                "target": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "__indexColor": "#0402f3",
                "__controlPoints": null,
                "index": 372
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "target": {
                    "id": "Q86450949",
                    "name": "Star Wars: The High Republic",
                    "__indexColor": "#a4016b",
                    "index": 362,
                    "x": -200.86261851738092,
                    "y": 81.17241822824094,
                    "vx": -1.5035110491663475e-18,
                    "vy": -7.831028193518376e-19
                },
                "__indexColor": "#f002f4",
                "__controlPoints": null,
                "index": 373
            },
            {
                "label": "author",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "__indexColor": "#dc02f5",
                "__controlPoints": null,
                "index": 374
            },
            {
                "label": "award_received",
                "source": {
                    "id": "Q105888035",
                    "name": "Richie Cody",
                    "__indexColor": "#fc000d",
                    "index": 12,
                    "x": 701.4130801996212,
                    "y": 310.5681881654952,
                    "vx": 2.8468257098717103e-18,
                    "vy": 1.4663907110255083e-18
                },
                "target": {
                    "id": "Q724351",
                    "name": "asexuality",
                    "__indexColor": "#24014b",
                    "index": 330,
                    "x": 733.296035040872,
                    "y": 308.20247905534546,
                    "vx": 2.839292365537621e-18,
                    "vy": 1.392886311389365e-18
                },
                "__indexColor": "#c802f6",
                "__controlPoints": null,
                "index": 375
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q104781875",
                    "name": "Light of the Jedi",
                    "__indexColor": "#740007",
                    "index": 6,
                    "x": -138.47387060806784,
                    "y": 230.20446367629424,
                    "vx": -4.79882446244572e-19,
                    "vy": -1.3989693457722302e-18
                },
                "target": {
                    "id": "Q14927695",
                    "name": "Dark Horse",
                    "__indexColor": "#e8004e",
                    "index": 77,
                    "x": -128.3402397177562,
                    "y": 271.43487976910586,
                    "vx": -2.8431940984038e-19,
                    "vy": -1.5022728355999878e-18
                },
                "__indexColor": "#b402f7",
                "__controlPoints": null,
                "index": 376
            },
            {
                "label": "member_of",
                "source": {
                    "id": "Q105888035",
                    "name": "Richie Cody",
                    "__indexColor": "#fc000d",
                    "index": 12,
                    "x": 701.4130801996212,
                    "y": 310.5681881654952,
                    "vx": 2.8468257098717103e-18,
                    "vy": 1.4663907110255083e-18
                },
                "target": {
                    "id": "Q724351",
                    "name": "asexuality",
                    "__indexColor": "#24014b",
                    "index": 330,
                    "x": 733.296035040872,
                    "y": 308.20247905534546,
                    "vx": 2.839292365537621e-18,
                    "vy": 1.392886311389365e-18
                },
                "__indexColor": "#a002f8",
                "__controlPoints": null,
                "index": 377
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q86450949",
                    "name": "Star Wars: The High Republic",
                    "__indexColor": "#a4016b",
                    "index": 362,
                    "x": -200.86261851738092,
                    "y": 81.17241822824094,
                    "vx": -1.5035110491663475e-18,
                    "vy": -7.831028193518376e-19
                },
                "target": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "__indexColor": "#8c02f9",
                "__controlPoints": null,
                "index": 378
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q19907",
                    "name": "Death Star",
                    "__indexColor": "#b40077",
                    "index": 118,
                    "x": -335.1360878678678,
                    "y": 48.0926803576542,
                    "vx": -2.2364092078797114e-18,
                    "vy": 2.400465790737522e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#7802fa",
                "__controlPoints": null,
                "index": 379
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q86450949",
                    "name": "Star Wars: The High Republic",
                    "__indexColor": "#a4016b",
                    "index": 362,
                    "x": -200.86261851738092,
                    "y": 81.17241822824094,
                    "vx": -1.5035110491663475e-18,
                    "vy": -7.831028193518376e-19
                },
                "target": {
                    "id": "Q173496",
                    "name": "Marvel Comics",
                    "__indexColor": "#800060",
                    "index": 95,
                    "x": -162.64985998208417,
                    "y": 158.94901669979674,
                    "vx": -9.217469793382975e-19,
                    "vy": -1.1886083344627154e-18
                },
                "__indexColor": "#6402fb",
                "__controlPoints": null,
                "index": 380
            },
            {
                "label": "facet_of",
                "source": {
                    "id": "Q24199571",
                    "name": "Annie Awards",
                    "__indexColor": "#480096",
                    "index": 149,
                    "x": 1063.6718389281946,
                    "y": -674.4758485472041,
                    "vx": 4.259960916431057e-18,
                    "vy": -2.6802711278328102e-18
                },
                "target": {
                    "id": "Q24199571",
                    "name": "Annie Awards",
                    "__indexColor": "#480096",
                    "index": 149,
                    "x": 1063.6718389281946,
                    "y": -674.4758485472041,
                    "vx": 4.259960916431057e-18,
                    "vy": -2.6802711278328102e-18
                },
                "__indexColor": "#5002fc",
                "__controlPoints": null,
                "index": 381
            },
            {
                "label": "movement",
                "source": {
                    "id": "Q7542",
                    "name": "Christopher",
                    "__indexColor": "#ac0151",
                    "index": 336,
                    "x": 132.20711038074492,
                    "y": 950.9076541454635,
                    "vx": 1.0744552896969135e-18,
                    "vy": 3.626564035087394e-18
                },
                "target": {
                    "id": "Q1433745",
                    "name": "Hammer Film Productions",
                    "__indexColor": "#9c0045",
                    "index": 68,
                    "x": 160.4193836359238,
                    "y": 936.307191391829,
                    "vx": 1.1847082358459864e-18,
                    "vy": 3.791966000000181e-18
                },
                "__indexColor": "#3c02fd",
                "__controlPoints": null,
                "index": 382
            },
            {
                "label": "author",
                "source": {
                    "id": "Q7093850",
                    "name": "Ongoing series",
                    "__indexColor": "#880146",
                    "index": 325,
                    "x": 121.86133008579868,
                    "y": 1004.3996581610147,
                    "vx": 4.855319088634203e-19,
                    "vy": 4.568220581692973e-18
                },
                "target": {
                    "id": "Q21932315",
                    "name": "Daniel José Older",
                    "__indexColor": "#fc008d",
                    "index": 140,
                    "x": 92.67320344429167,
                    "y": 990.6806573857119,
                    "vx": 5.122743834246157e-19,
                    "vy": 4.534519093597301e-18
                },
                "__indexColor": "#2802fe",
                "__controlPoints": null,
                "index": 383
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51800",
                    "name": "Grand Moff Tarkin",
                    "__indexColor": "#300124",
                    "index": 291,
                    "x": -298.1177250247964,
                    "y": 66.06160680188103,
                    "vx": -2.0903530197531925e-18,
                    "vy": -2.2322462977417394e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#1402ff",
                "__controlPoints": null,
                "index": 384
            },
            {
                "label": "owned_by",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q1047009",
                    "name": "Disney Store",
                    "__indexColor": "#880006",
                    "index": 5,
                    "x": -158.2029155125559,
                    "y": -100.83418322103442,
                    "vx": -1.5741867554884805e-18,
                    "vy": -1.3090716604297008e-19
                },
                "__indexColor": "#000300",
                "__controlPoints": null,
                "index": 385
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q51727",
                    "name": "Count Dooku",
                    "__indexColor": "#f8011a",
                    "index": 281,
                    "x": -354.83820060313644,
                    "y": 48.10487010817671,
                    "vx": -2.1932411986157988e-18,
                    "vy": 8.597651659107484e-20
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#ec0301",
                "__controlPoints": null,
                "index": 386
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q26214577",
                    "name": "Igor",
                    "__indexColor": "#1800b2",
                    "index": 177,
                    "x": -1109.9120719047714,
                    "y": -139.73831506871156,
                    "vx": -4.987607000145125e-18,
                    "vy": -5.660769287360273e-19
                },
                "target": {
                    "id": "Q65030437",
                    "name": "Frankenstein",
                    "__indexColor": "#14013f",
                    "index": 318,
                    "x": -1125.2658239584262,
                    "y": -111.33043025514962,
                    "vx": -4.971539225657129e-18,
                    "vy": -5.628441000507993e-19
                },
                "__indexColor": "#d80302",
                "__controlPoints": null,
                "index": 387
            },
            {
                "label": "follows",
                "source": {
                    "id": "Q28151379",
                    "name": "Rogue One",
                    "__indexColor": "#3c00bd",
                    "index": 188,
                    "x": 721.2816455318164,
                    "y": 149.04086416528233,
                    "vx": 2.8986701364479587e-18,
                    "vy": 7.8326061376318e-19
                },
                "target": {
                    "id": "Q6074",
                    "name": "Star Wars: The Force Awakens",
                    "__indexColor": "#8c0139",
                    "index": 312,
                    "x": 727.3213518001639,
                    "y": 180.3476415000751,
                    "vx": 2.941689612149004e-18,
                    "vy": 7.680574785487461e-19
                },
                "__indexColor": "#c40303",
                "__controlPoints": null,
                "index": 388
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q26214577",
                    "name": "Igor",
                    "__indexColor": "#1800b2",
                    "index": 177,
                    "x": -1109.9120719047714,
                    "y": -139.73831506871156,
                    "vx": -4.987607000145125e-18,
                    "vy": -5.660769287360273e-19
                },
                "target": {
                    "id": "Q246693",
                    "name": "Ząbkowice Śląskie",
                    "__indexColor": "#d0009c",
                    "index": 155,
                    "x": -1077.8038868928272,
                    "y": -142.81074414430063,
                    "vx": -5.004196712639778e-18,
                    "vy": -7.991477849122117e-19
                },
                "__indexColor": "#b00304",
                "__controlPoints": null,
                "index": 389
            },
            {
                "label": "followed_by",
                "source": {
                    "id": "Q6074",
                    "name": "Star Wars: The Force Awakens",
                    "__indexColor": "#8c0139",
                    "index": 312,
                    "x": 727.3213518001639,
                    "y": 180.3476415000751,
                    "vx": 2.941689612149004e-18,
                    "vy": 7.680574785487461e-19
                },
                "target": {
                    "id": "Q28151379",
                    "name": "Rogue One",
                    "__indexColor": "#3c00bd",
                    "index": 188,
                    "x": 721.2816455318164,
                    "y": 149.04086416528233,
                    "vx": 2.8986701364479587e-18,
                    "vy": 7.8326061376318e-19
                },
                "__indexColor": "#9c0305",
                "__controlPoints": null,
                "index": 390
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q65030437",
                    "name": "Frankenstein",
                    "__indexColor": "#14013f",
                    "index": 318,
                    "x": -1125.2658239584262,
                    "y": -111.33043025514962,
                    "vx": -4.971539225657129e-18,
                    "vy": -5.628441000507993e-19
                },
                "target": {
                    "id": "Q26214577",
                    "name": "Igor",
                    "__indexColor": "#1800b2",
                    "index": 177,
                    "x": -1109.9120719047714,
                    "y": -139.73831506871156,
                    "vx": -4.987607000145125e-18,
                    "vy": -5.660769287360273e-19
                },
                "__indexColor": "#880306",
                "__controlPoints": null,
                "index": 391
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q104781875",
                    "name": "Light of the Jedi",
                    "__indexColor": "#740007",
                    "index": 6,
                    "x": -138.47387060806784,
                    "y": 230.20446367629424,
                    "vx": -4.79882446244572e-19,
                    "vy": -1.3989693457722302e-18
                },
                "target": {
                    "id": "Q173496",
                    "name": "Marvel Comics",
                    "__indexColor": "#800060",
                    "index": 95,
                    "x": -162.64985998208417,
                    "y": 158.94901669979674,
                    "vx": -9.217469793382975e-19,
                    "vy": -1.1886083344627154e-18
                },
                "__indexColor": "#740307",
                "__controlPoints": null,
                "index": 392
            },
            {
                "label": "part_of_the_series",
                "source": {
                    "id": "Q20977110",
                    "name": "Star Wars: The Rise of Skywalker",
                    "__indexColor": "#d80082",
                    "index": 129,
                    "x": -416.96648604636164,
                    "y": -41.64584458862325,
                    "vx": -2.512277409942551e-18,
                    "vy": 6.397829761345476e-19
                },
                "target": {
                    "id": "Q462",
                    "name": "Star Wars",
                    "__indexColor": "#c40103",
                    "index": 258,
                    "x": -389.548299230225,
                    "y": 41.24127662272012,
                    "vx": -2.2303275162774696e-18,
                    "vy": 1.759954535559518e-19
                },
                "__indexColor": "#600308",
                "__controlPoints": null,
                "index": 393
            },
            {
                "label": "present_in_work",
                "source": {
                    "id": "Q35684",
                    "name": "TARDIS",
                    "__indexColor": "#0c00d9",
                    "index": 216,
                    "x": -942.0728566778387,
                    "y": 711.5309868244635,
                    "vx": -3.972797098120265e-18,
                    "vy": 2.9256838462490126e-18
                },
                "target": {
                    "id": "Q34316",
                    "name": "Doctor Who",
                    "__indexColor": "#e800ce",
                    "index": 205,
                    "x": -923.0013977180022,
                    "y": 737.1322747079472,
                    "vx": -3.9616220203541704e-18,
                    "vy": 2.918559248565005e-18
                },
                "__indexColor": "#4c0309",
                "__controlPoints": null,
                "index": 394
            },
            {
                "label": "uses",
                "source": {
                    "id": "Q34316",
                    "name": "Doctor Who",
                    "__indexColor": "#e800ce",
                    "index": 205,
                    "x": -923.0013977180022,
                    "y": 737.1322747079472,
                    "vx": -3.9616220203541704e-18,
                    "vy": 2.918559248565005e-18
                },
                "target": {
                    "id": "Q35684",
                    "name": "TARDIS",
                    "__indexColor": "#0c00d9",
                    "index": 216,
                    "x": -942.0728566778387,
                    "y": 711.5309868244635,
                    "vx": -3.972797098120265e-18,
                    "vy": 2.9256838462490126e-18
                },
                "__indexColor": "#38030a",
                "__controlPoints": null,
                "index": 395
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q35684",
                    "name": "TARDIS",
                    "__indexColor": "#0c00d9",
                    "index": 216,
                    "x": -942.0728566778387,
                    "y": 711.5309868244635,
                    "vx": -3.972797098120265e-18,
                    "vy": 2.9256838462490126e-18
                },
                "target": {
                    "id": "Q34316",
                    "name": "Doctor Who",
                    "__indexColor": "#e800ce",
                    "index": 205,
                    "x": -923.0013977180022,
                    "y": 737.1322747079472,
                    "vx": -3.9616220203541704e-18,
                    "vy": 2.918559248565005e-18
                },
                "__indexColor": "#24030b",
                "__controlPoints": null,
                "index": 396
            },
            {
                "label": "inception",
                "source": {
                    "id": "Q4746137",
                    "name": "Amicus",
                    "__indexColor": "#880106",
                    "index": 261,
                    "x": 604.0240653747184,
                    "y": -980.6181934424908,
                    "vx": 2.700034082021061e-18,
                    "vy": -4.066829515437367e-18
                },
                "target": {
                    "id": "Q2474",
                    "name": "1970",
                    "__indexColor": "#a8009e",
                    "index": 157,
                    "x": 618.6930439258676,
                    "y": -952.1048147641172,
                    "vx": 2.708705135173424e-18,
                    "vy": -4.084297055813191e-18
                },
                "__indexColor": "#10030c",
                "__controlPoints": null,
                "index": 397
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q19907",
                    "name": "Death Star",
                    "__indexColor": "#b40077",
                    "index": 118,
                    "x": -335.1360878678678,
                    "y": 48.0926803576542,
                    "vx": -2.2364092078797114e-18,
                    "vy": 2.400465790737522e-19
                },
                "target": {
                    "id": "Q80702",
                    "name": "Empire",
                    "__indexColor": "#bc015d",
                    "index": 348,
                    "x": -294.2028755997039,
                    "y": 49.790310897817164,
                    "vx": -2.018974002936568e-18,
                    "vy": 8.490401672162359e-20
                },
                "__indexColor": "#fc030d",
                "__controlPoints": null,
                "index": 398
            },
            {
                "label": "author",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q67301619",
                    "name": "George E. Mann",
                    "__indexColor": "#d80142",
                    "index": 321,
                    "x": -158.61329572959337,
                    "y": -143.25308305444844,
                    "vx": -1.2340725849243019e-18,
                    "vy": -1.3646877993241765e-19
                },
                "__indexColor": "#e8030e",
                "__controlPoints": null,
                "index": 399
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q96381012",
                    "name": "High Republic",
                    "__indexColor": "#50017c",
                    "index": 379,
                    "x": -190.14753821573368,
                    "y": -121.36536155736958,
                    "vx": -1.3747818836554987e-18,
                    "vy": -3.288623615810342e-19
                },
                "target": {
                    "id": "Q67301619",
                    "name": "George E. Mann",
                    "__indexColor": "#d80142",
                    "index": 321,
                    "x": -158.61329572959337,
                    "y": -143.25308305444844,
                    "vx": -1.2340725849243019e-18,
                    "vy": -1.3646877993241765e-19
                },
                "__indexColor": "#d4030f",
                "__controlPoints": null,
                "index": 400
            },
            {
                "label": "notable_work",
                "source": {
                    "id": "Q112562149",
                    "name": "Fico Ossio",
                    "__indexColor": "#e4001b",
                    "index": 26,
                    "x": 181.47814307155238,
                    "y": 335.14527956971875,
                    "vx": 1.5747848314846627e-18,
                    "vy": 1.8289021685304328e-18
                },
                "target": {
                    "id": "Q1409501",
                    "name": "Ewok",
                    "__indexColor": "#ec0041",
                    "index": 64,
                    "x": 150.7649593779175,
                    "y": 327.0364862455229,
                    "vx": 1.564883079365501e-18,
                    "vy": 1.8430074069573367e-18
                },
                "__indexColor": "#c00310",
                "__controlPoints": null,
                "index": 401
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q2359610",
                    "name": "Hawkman",
                    "__indexColor": "#ac0091",
                    "index": 144,
                    "x": -575.8348697418363,
                    "y": -919.6718181724319,
                    "vx": -3.0349781370484218e-18,
                    "vy": -4.474295881753335e-18
                },
                "target": {
                    "id": "Q61",
                    "name": "Washington, D.C.",
                    "__indexColor": "#78013a",
                    "index": 313,
                    "x": -581.8387458421757,
                    "y": -951.1625000750549,
                    "vx": -2.7276862361472504e-18,
                    "vy": -4.5379194366546096e-18
                },
                "__indexColor": "#ac0311",
                "__controlPoints": null,
                "index": 402
            },
            {
                "label": "publisher",
                "source": {
                    "id": "Q2210354",
                    "name": "Hawkgirl",
                    "__indexColor": "#e8008e",
                    "index": 141,
                    "x": -554.8166410071339,
                    "y": -969.2688881873178,
                    "vx": -2.7329382248059325e-18,
                    "vy": -4.542391206693739e-18
                },
                "target": {
                    "id": "Q61",
                    "name": "Washington, D.C.",
                    "__indexColor": "#78013a",
                    "index": 313,
                    "x": -581.8387458421757,
                    "y": -951.1625000750549,
                    "vx": -2.7276862361472504e-18,
                    "vy": -4.5379194366546096e-18
                },
                "__indexColor": "#980312",
                "__controlPoints": null,
                "index": 403
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q51800",
                    "name": "Grand Moff Tarkin",
                    "__indexColor": "#300124",
                    "index": 291,
                    "x": -298.1177250247964,
                    "y": 66.06160680188103,
                    "vx": -2.0903530197531925e-18,
                    "vy": -2.2322462977417394e-20
                },
                "target": {
                    "id": "Q309589",
                    "name": "Peter Cushing",
                    "__indexColor": "#9c00c5",
                    "index": 196,
                    "x": -241.55603962680016,
                    "y": 101.63771381468332,
                    "vx": -2.087796248187962e-18,
                    "vy": 7.939765998903098e-20
                },
                "__indexColor": "#840313",
                "__controlPoints": null,
                "index": 404
            },
            {
                "label": "performer",
                "source": {
                    "id": "Q1425095",
                    "name": "Ogg Tarkin",
                    "__indexColor": "#c40043",
                    "index": 66,
                    "x": -205.10778419703553,
                    "y": 122.54717973607231,
                    "vx": -2.1384292483547833e-18,
                    "vy": 3.064523915036898e-19
                },
                "target": {
                    "id": "Q309589",
                    "name": "Peter Cushing",
                    "__indexColor": "#9c00c5",
                    "index": 196,
                    "x": -241.55603962680016,
                    "y": 101.63771381468332,
                    "vx": -2.087796248187962e-18,
                    "vy": 7.939765998903098e-20
                },
                "__indexColor": "#700314",
                "__controlPoints": null,
                "index": 405
            },
            {
                "label": "creator",
                "source": {
                    "id": "Q51800",
                    "name": "Grand Moff Tarkin",
                    "__indexColor": "#300124",
                    "index": 291,
                    "x": -298.1177250247964,
                    "y": 66.06160680188103,
                    "vx": -2.0903530197531925e-18,
                    "vy": -2.2322462977417394e-20
                },
                "target": {
                    "id": "Q5054855",
                    "name": "Cavan Scott",
                    "__indexColor": "#980112",
                    "index": 273,
                    "x": -245.71172116772868,
                    "y": 32.90325549927566,
                    "vx": -1.89976979904413e-18,
                    "vy": -2.9402616050043136e-19
                },
                "__indexColor": "#5c0315",
                "__controlPoints": null,
                "index": 406
            },
            {
                "label": "maintained_by",
                "source": {
                    "id": "Q9259",
                    "name": "World Heritage Site",
                    "__indexColor": "#a00178",
                    "index": 375,
                    "x": -448.86953954891897,
                    "y": 622.1140958705014,
                    "vx": -1.974912009615629e-18,
                    "vy": 2.8420938550375803e-18
                },
                "target": {
                    "id": "Q7809",
                    "name": "UNESCO",
                    "__indexColor": "#340157",
                    "index": 342,
                    "x": -461.5827461421397,
                    "y": 592.9929022502779,
                    "vx": -2.0848221189891184e-18,
                    "vy": 2.923681740653202e-18
                },
                "__indexColor": "#480316",
                "__controlPoints": null,
                "index": 407
            },
            {
                "label": "part_of",
                "source": {
                    "id": "Q49127",
                    "name": "Harvard Kennedy School",
                    "__indexColor": "#38010a",
                    "index": 265,
                    "x": 738.5110998397126,
                    "y": 824.3427027376314,
                    "vx": 3.193116818934634e-18,
                    "vy": 3.460896764199818e-18
                },
                "target": {
                    "id": "Q13371",
                    "name": "Harvard University",
                    "__indexColor": "#a00038",
                    "index": 55,
                    "x": 730.0440400543326,
                    "y": 793.5106660070059,
                    "vx": 3.1424529950161392e-18,
                    "vy": 3.4757262300084364e-18
                },
                "__indexColor": "#340317",
                "__controlPoints": null,
                "index": 408
            },
            {
                "label": "has_effect",
                "source": {
                    "id": "Q362",
                    "name": "World War II",
                    "__indexColor": "#a800de",
                    "index": 221,
                    "x": 257.3025019813056,
                    "y": 748.7378029896615,
                    "vx": 1.3048953432130322e-18,
                    "vy": 3.631384858370173e-18
                },
                "target": {
                    "id": "Q2763",
                    "name": "The Holocaust",
                    "__indexColor": "#6400bb",
                    "index": 186,
                    "x": 285.2928563412685,
                    "y": 733.2056575321658,
                    "vx": 1.2670117900554067e-18,
                    "vy": 3.5440818005296944e-18
                },
                "__indexColor": "#200318",
                "__controlPoints": null,
                "index": 409
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q573880",
                    "name": "Nature Communications",
                    "__indexColor": "#f00134",
                    "index": 307,
                    "x": -422.9634091065472,
                    "y": 862.8488569741974,
                    "vx": -1.779497007423846e-18,
                    "vy": 4.015537562054903e-18
                },
                "target": {
                    "id": "Q41298",
                    "name": "magazine",
                    "__indexColor": "#0400f3",
                    "index": 242,
                    "x": -458.798600671365,
                    "y": 860.1202689327786,
                    "vx": -1.7852518542448437e-18,
                    "vy": 4.06010391568946e-18
                },
                "__indexColor": "#0c0319",
                "__controlPoints": null,
                "index": 410
            },
            {
                "label": "has_part",
                "source": {
                    "id": "Q25306",
                    "name": "Carnivore",
                    "__indexColor": "#f400a7",
                    "index": 166,
                    "x": -147.9113964906844,
                    "y": 1002.5944232790602,
                    "vx": -2.9818889064759957e-19,
                    "vy": 4.434570871074381e-18
                },
                "target": {
                    "id": "Q170430",
                    "name": "Predation",
                    "__indexColor": "#bc005d",
                    "index": 92,
                    "x": -116.60823472626302,
                    "y": 995.9570253081148,
                    "vx": -3.072948577697271e-19,
                    "vy": 4.419752895564445e-18
                },
                "__indexColor": "#f8031a",
                "__controlPoints": null,
                "index": 411
            },
            {
                "label": "opposite_of",
                "source": {
                    "id": "Q25306",
                    "name": "Carnivore",
                    "__indexColor": "#f400a7",
                    "index": 166,
                    "x": -147.9113964906844,
                    "y": 1002.5944232790602,
                    "vx": -2.9818889064759957e-19,
                    "vy": 4.434570871074381e-18
                },
                "target": {
                    "id": "Q170430",
                    "name": "Predation",
                    "__indexColor": "#bc005d",
                    "index": 92,
                    "x": -116.60823472626302,
                    "y": 995.9570253081148,
                    "vx": -3.072948577697271e-19,
                    "vy": 4.419752895564445e-18
                },
                "__indexColor": "#e4031b",
                "__controlPoints": null,
                "index": 412
            },
            {
                "label": "spouse",
                "source": {
                    "id": "Q10514602",
                    "name": "Terry",
                    "__indexColor": "#4c0009",
                    "index": 8,
                    "x": 786.5555635342083,
                    "y": 673.4668770286654,
                    "vx": 3.232592621732397e-18,
                    "vy": 2.8167117032119562e-18
                },
                "target": {
                    "id": "Q4978319",
                    "name": "Bruce Sterling Jenkins",
                    "__indexColor": "#d4010f",
                    "index": 270,
                    "x": 799.2690646446517,
                    "y": 702.8392127396984,
                    "vx": 3.256592655251846e-18,
                    "vy": 2.808344954614656e-18
                },
                "__indexColor": "#d0031c",
                "__controlPoints": null,
                "index": 413
            },
            {
                "label": "spouse",
                "source": {
                    "id": "Q4978319",
                    "name": "Bruce Sterling Jenkins",
                    "__indexColor": "#d4010f",
                    "index": 270,
                    "x": 799.2690646446517,
                    "y": 702.8392127396984,
                    "vx": 3.256592655251846e-18,
                    "vy": 2.808344954614656e-18
                },
                "target": {
                    "id": "Q10514602",
                    "name": "Terry",
                    "__indexColor": "#4c0009",
                    "index": 8,
                    "x": 786.5555635342083,
                    "y": 673.4668770286654,
                    "vx": 3.232592621732397e-18,
                    "vy": 2.8167117032119562e-18
                },
                "__indexColor": "#bc031d",
                "__controlPoints": null,
                "index": 414
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q2739176",
                    "name": "Feral",
                    "__indexColor": "#8c00b9",
                    "index": 184,
                    "x": 328.4618878057355,
                    "y": -492.98285160356704,
                    "vx": 1.2349508489010509e-18,
                    "vy": -2.171815400749866e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#a8031e",
                "__controlPoints": null,
                "index": 415
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q20709649",
                    "name": "Teal Lake",
                    "__indexColor": "#28007e",
                    "index": 125,
                    "x": 96.97839445263878,
                    "y": 506.81327455568857,
                    "vx": 9.558326812933033e-19,
                    "vy": 2.3152532157211083e-18
                },
                "target": {
                    "id": "Q2273202",
                    "name": "Holly Springs",
                    "__indexColor": "#d4008f",
                    "index": 142,
                    "x": 67.80417777503041,
                    "y": 520.2130164653179,
                    "vx": 9.760688115783058e-19,
                    "vy": 2.3344216781612287e-18
                },
                "__indexColor": "#94031f",
                "__controlPoints": null,
                "index": 416
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q2273202",
                    "name": "Holly Springs",
                    "__indexColor": "#d4008f",
                    "index": 142,
                    "x": 67.80417777503041,
                    "y": 520.2130164653179,
                    "vx": 9.760688115783058e-19,
                    "vy": 2.3344216781612287e-18
                },
                "target": {
                    "id": "Q3957",
                    "name": "town",
                    "__indexColor": "#6800ee",
                    "index": 237,
                    "x": 39.93376453893694,
                    "y": 536.0047538690626,
                    "vx": 9.778046787814648e-19,
                    "vy": 2.340350479962902e-18
                },
                "__indexColor": "#800320",
                "__controlPoints": null,
                "index": 417
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q273131",
                    "name": "Incense",
                    "__indexColor": "#a000b8",
                    "index": 183,
                    "x": 1025.0858630629816,
                    "y": -221.21668153660542,
                    "vx": 4.1938085268548194e-18,
                    "vy": -8.310628375039452e-19
                },
                "target": {
                    "id": "Q2151963",
                    "name": "Aroma compound",
                    "__indexColor": "#740087",
                    "index": 134,
                    "x": 1003.2586920236461,
                    "y": -197.19958042902616,
                    "vx": 4.189561947580083e-18,
                    "vy": -8.353589500234534e-19
                },
                "__indexColor": "#6c0321",
                "__controlPoints": null,
                "index": 418
            },
            {
                "label": "subclass_of",
                "source": {
                    "id": "Q273131",
                    "name": "Incense",
                    "__indexColor": "#a000b8",
                    "index": 183,
                    "x": 1025.0858630629816,
                    "y": -221.21668153660542,
                    "vx": 4.1938085268548194e-18,
                    "vy": -8.310628375039452e-19
                },
                "target": {
                    "id": "Q170885",
                    "name": "Essential oil",
                    "__indexColor": "#94005f",
                    "index": 94,
                    "x": 1041.2937114540473,
                    "y": -249.25248859942292,
                    "vx": 4.223530852629689e-18,
                    "vy": -8.127738540688009e-19
                },
                "__indexColor": "#580322",
                "__controlPoints": null,
                "index": 419
            },
            {
                "label": "used_by",
                "source": {
                    "id": "Q1758839",
                    "name": "Litter box",
                    "__indexColor": "#1c0065",
                    "index": 100,
                    "x": 344.1392325515877,
                    "y": -510.71970169190445,
                    "vx": 1.3072897771996376e-18,
                    "vy": -2.0997660024193457e-18
                },
                "target": {
                    "id": "Q4167836",
                    "name": "Cat",
                    "__indexColor": "#f000f4",
                    "index": 243,
                    "x": 312.0985965657434,
                    "y": -522.0634480286678,
                    "vx": 1.2480489964290684e-18,
                    "vy": -2.2132120772051583e-18
                },
                "__indexColor": "#440323",
                "__controlPoints": null,
                "index": 420
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q782662",
                    "name": "Michael Gross",
                    "__indexColor": "#200158",
                    "index": 343,
                    "x": 1203.8263203125953,
                    "y": 409.1281194836516,
                    "vx": 4.682348123729461e-18,
                    "vy": 1.9997516265989793e-18
                },
                "target": {
                    "id": "Q34433",
                    "name": "University of Oxford",
                    "__indexColor": "#c000d0",
                    "index": 207,
                    "x": 1191.5944353306634,
                    "y": 438.9271801916902,
                    "vx": 4.669499111993114e-18,
                    "vy": 1.979808722444623e-18
                },
                "__indexColor": "#300324",
                "__controlPoints": null,
                "index": 421
            },
            {
                "label": "work_location",
                "source": {
                    "id": "Q782662",
                    "name": "Michael Gross",
                    "__indexColor": "#200158",
                    "index": 343,
                    "x": 1203.8263203125953,
                    "y": 409.1281194836516,
                    "vx": 4.682348123729461e-18,
                    "vy": 1.9997516265989793e-18
                },
                "target": {
                    "id": "Q34433",
                    "name": "University of Oxford",
                    "__indexColor": "#c000d0",
                    "index": 207,
                    "x": 1191.5944353306634,
                    "y": 438.9271801916902,
                    "vx": 4.669499111993114e-18,
                    "vy": 1.979808722444623e-18
                },
                "__indexColor": "#1c0325",
                "__controlPoints": null,
                "index": 422
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q42005",
                    "name": "Black Death",
                    "__indexColor": "#dc00f5",
                    "index": 244,
                    "x": 578.1648929318634,
                    "y": 624.4476143693913,
                    "vx": 2.6111192147949926e-18,
                    "vy": 2.6265746239925285e-18
                },
                "target": {
                    "id": "Q133780",
                    "name": "plague",
                    "__indexColor": "#78003a",
                    "index": 57,
                    "x": 560.9471177722502,
                    "y": 596.8335417597688,
                    "vx": 2.5557372745336864e-18,
                    "vy": 2.6653434096876675e-18
                },
                "__indexColor": "#080326",
                "__controlPoints": null,
                "index": 423
            },
            {
                "label": "instance_of",
                "source": {
                    "id": "Q42005",
                    "name": "Black Death",
                    "__indexColor": "#dc00f5",
                    "index": 244,
                    "x": 578.1648929318634,
                    "y": 624.4476143693913,
                    "vx": 2.6111192147949926e-18,
                    "vy": 2.6265746239925285e-18
                },
                "target": {
                    "id": "Q2612834",
                    "name": "Plagues",
                    "__indexColor": "#2c00b1",
                    "index": 176,
                    "x": 570.8182560312719,
                    "y": 656.0117998932689,
                    "vx": 2.609835354191015e-18,
                    "vy": 2.629596927362203e-18
                },
                "__indexColor": "#f40327",
                "__controlPoints": null,
                "index": 424
            },
            {
                "label": "location",
                "source": {
                    "id": "Q42005",
                    "name": "Black Death",
                    "__indexColor": "#dc00f5",
                    "index": 244,
                    "x": 578.1648929318634,
                    "y": 624.4476143693913,
                    "vx": 2.6111192147949926e-18,
                    "vy": 2.6265746239925285e-18
                },
                "target": {
                    "id": "Q46",
                    "name": "Europe",
                    "__indexColor": "#ec0101",
                    "index": 256,
                    "x": 606.5419066910658,
                    "y": 608.5669993198479,
                    "vx": 2.6450452590826344e-18,
                    "vy": 2.686195329474503e-18
                },
                "__indexColor": "#e00328",
                "__controlPoints": null,
                "index": 425
            },
            {
                "label": "applies_to_jurisdiction",
                "source": {
                    "id": "Q7188",
                    "name": "Government",
                    "__indexColor": "#4c0149",
                    "index": 328,
                    "x": -863.5632783031872,
                    "y": 290.3333318577135,
                    "vx": -4.279807099571344e-18,
                    "vy": 1.421649030807846e-18
                },
                "target": {
                    "id": "Q408",
                    "name": "Australia",
                    "__indexColor": "#2c00f1",
                    "index": 240,
                    "x": -864.401679855992,
                    "y": 258.20306714374493,
                    "vx": -4.361055885555687e-18,
                    "vy": 1.4320228726693927e-18
                },
                "__indexColor": "#cc0329",
                "__controlPoints": null,
                "index": 426
            },
            {
                "label": "country",
                "source": {
                    "id": "Q4822770",
                    "name": "List of earthquakes in Turkey",
                    "__indexColor": "#740107",
                    "index": 262,
                    "x": 1180.0455005530678,
                    "y": -156.4617715241438,
                    "vx": 4.783926167860867e-18,
                    "vy": -7.125894299734177e-19
                },
                "target": {
                    "id": "Q43",
                    "name": "Turkey",
                    "__indexColor": "#5000fc",
                    "index": 251,
                    "x": 1186.289368737303,
                    "y": -187.808356348843,
                    "vx": 4.782832505662001e-18,
                    "vy": -7.103566547622722e-19
                },
                "__indexColor": "#b8032a",
                "__controlPoints": null,
                "index": 427
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": {
                    "id": "Q24672271",
                    "name": "Kedi",
                    "__indexColor": "#bc009d",
                    "index": 156,
                    "x": -907.5595279814596,
                    "y": 520.449406964715,
                    "vx": -3.885283626744088e-18,
                    "vy": 2.2100279561059546e-18
                },
                "target": {
                    "id": "Q406",
                    "name": "Istanbul",
                    "__indexColor": "#4000f0",
                    "index": 239,
                    "x": -883.8651805456499,
                    "y": 541.8602264138887,
                    "vx": -3.883308729927536e-18,
                    "vy": 2.2079869946062798e-18
                },
                "__indexColor": "#a4032b",
                "__controlPoints": null,
                "index": 428
            },
            {
                "label": "employer",
                "source": {
                    "id": "Q91747985",
                    "name": "Christopher A. Lepczyk",
                    "__indexColor": "#c80176",
                    "index": 373,
                    "x": -905.0546367178725,
                    "y": 863.4356993073416,
                    "vx": -3.55785522672843e-18,
                    "vy": 3.604411592608842e-18
                },
                "target": {
                    "id": "Q540672",
                    "name": "Auburn University",
                    "__indexColor": "#f40127",
                    "index": 294,
                    "x": -881.4457054151226,
                    "y": 885.0312120295956,
                    "vx": -3.57536997424709e-18,
                    "vy": 3.608740445052339e-18
                },
                "__indexColor": "#90032c",
                "__controlPoints": null,
                "index": 429
            },
            {
                "label": "educated_at",
                "source": {
                    "id": "Q91747985",
                    "name": "Christopher A. Lepczyk",
                    "__indexColor": "#c80176",
                    "index": 373,
                    "x": -905.0546367178725,
                    "y": 863.4356993073416,
                    "vx": -3.55785522672843e-18,
                    "vy": 3.604411592608842e-18
                },
                "target": {
                    "id": "Q540672",
                    "name": "Auburn University",
                    "__indexColor": "#f40127",
                    "index": 294,
                    "x": -881.4457054151226,
                    "y": 885.0312120295956,
                    "vx": -3.57536997424709e-18,
                    "vy": 3.608740445052339e-18
                },
                "__indexColor": "#7c032d",
                "__controlPoints": null,
                "index": 430
            }
        ];
        this.graph = ForceGraph();
        this.selected_nodes = new Set();
        this.selected_edges = new Set();
    }

    get Nodes(){return this.nodes;}
    get Edges(){return this.edges;}

    static init_data_nodes(nodes)
    {
        let nodes_info = Object.keys(nodes).map(node => {
            return { 
                id: node,
                name: nodes[node]["name"],
            };
        });
        return nodes_info;
    }

    static init_data_edges(edges)
    {
        let edges_info = edges.map(edge => {
            return {
                source: edge.source,
                target: edge.target,
                label: edge.label,
            };
        });

        return edges_info;
    }

    static in_action_settings_1(elem, first_selected, second_selected)
    {
        first_selected.clear();
        const untoggle = second_selected.has(elem) && second_selected.size === 1;
        second_selected.clear();
        !untoggle && second_selected.add(elem);
    }

    in_action_settings_2(x, y)
    {
        $('#Info').empty();
        $('#Info').removeAttr('style');
        this.graph.width($('#container').width()/2);
        this.graph.centerAt(x, y, 1000);
    }

    static in_action_settings_3()
    {
        $('#Info').css({
            'position': 'absolute',
            'backgroundColor': '#777676',
            'right': '0',
            'top': '0',
            'height': height_DOM_graph,
            'width': $('#container').width() / 2,
            'overflow-y': 'auto', 
            'box-sizing': 'border-box',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'color': 'white',
        });
    }

    link_click(link, selected_nodes, selected_edges)
    {
        Graph.in_action_settings_1(link, selected_nodes, selected_edges);
        if (selected_edges.size === 1)
        {
            let source = link.source;
            let target = link.target;
            let id = link.index;

            this.in_action_settings_2(source.x, target.y);
            Graph.in_action_settings_3();

            let button = $('<button id="Delete-Edge" class="base-btn">Delete edge</button>').css({
                'position': 'absolute',
                'bottom': '10px', 
                'right': '10px', 
            });

            button.click(() => {
                this.graph.graphData().links = this.graph.graphData().links.filter(link => {
                    if (link.index !== undefined)
                    {
                        return link.index !== id;
                    }
                });
                $('#Info').empty();
            });


            $('#Info').append(button);

        }
        else
        {
            $('#Info').empty();
            $('#Info').removeAttr('style');
            this.graph.width($('#container').width());
        }
    }

    click_node(node, selected_edges, selected_nodes)
    {
        Graph.in_action_settings_1(node, selected_edges, selected_nodes);
        if (this.selected_nodes.size === 1)
        {
            this.in_action_settings_2(node.x, node.y);
            
            Graph.in_action_settings_3();
        
            let table = $('<table></table>').css({
                'border-collapse': 'collapse',
                'font-size': '20px'
            });
        
            let id = node.id;
            let entity = this.nodes[id];
        
            for (let key in entity) 
            {
                let row = $('<tr></tr>');
                let cell = $('<td></td>').text(key + ':').css('padding', '10px');
                row.append(cell);
        
                let contentWrapper = $('<div></div>').css({
                    'max-height': '100px',
                    'overflow-y': 'auto', 
                    'box-sizing': 'border-box',
                });
        
                if (key === "wikipedia_url" || key === "wikidata_url") 
                {
                    let linkCell = $('<a></a>').attr('href', entity[key]).text(entity[key]);
                    contentWrapper.append(linkCell);
                } 
                else 
                {
                    contentWrapper.text(entity[key]);
                }
        
                cell = $('<td></td>').append(contentWrapper); 
                row.append(cell);
                table.append(row);
            }
            
            $('#Info').append(table);

            let button = $('<button id="Delete-Node" class="base-btn">Delete node</button>').css({
                'position': 'absolute',
                'bottom': '10px', 
                'right': '10px', 
            });

            button.click(() => {
                delete this.nodes[id];
                let node_to_remove = node;
                this.graph.graphData().links = this.graph.graphData().links.filter(link => {
                    if (link.source !== undefined && link.target !== undefined)
                    {
                        return link.source.id !== node_to_remove.id && link.target.id !== node_to_remove.id;
                    }
                });
                this.graph.graphData().nodes = this.graph.graphData().nodes.filter(node => node.id !== node_to_remove.id);
                $('#Info').empty();
            });

            $('#Info').append(button);
        }
        else
        {
            $('#Info').empty();
            $('#Info').removeAttr('style');
            this.graph.width($('#container').width());
        }
    }

    muliple_edges()
    {
    const curvatureMinMax = 0.5;
    let sameNodesLinks = {};

    this.graph.graphData().links.forEach(link => 
    {
        link.nodePairId = link.source <= link.target ? (link.source + "_" + link.target) : (link.target + "_" + link.source);
        let map = link.source !== link.target ? sameNodesLinks : null;
        if (!map[link.nodePairId]) {
            map[link.nodePairId] = [];
        }
        map[link.nodePairId].push(link);
    });

    Object.keys(sameNodesLinks).filter(nodePairId => sameNodesLinks[nodePairId].length > 1).forEach(nodePairId => {
      let links = sameNodesLinks[nodePairId];
      let lastIndex = links.length - 1;
      let lastLink = links[lastIndex];
      lastLink.curvature = curvatureMinMax;
      let delta = 2 * curvatureMinMax / lastIndex;
      for (let i = 0; i < lastIndex; i++) {
        links[i].curvature = - curvatureMinMax + i * delta;
        if (lastLink.source !== links[i].source) {
          links[i].curvature *= -1; 
        }
      }
    });
    }

    draw_graph(DOM_elem, news_nodes, news_links, width)
    {   
        this.selected_nodes.clear();
        this.selected_edges.clear();
        let selected_edges = this.selected_edges;
        let selected_nodes = this.selected_nodes;
        let nodes = news_nodes;
        let links = news_links;
        this.graph
        .graphData({ nodes, links })
        .width(width)
        .height(height_DOM_graph)
        .linkDirectionalArrowLength(7)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature('curvature')
        .linkWidth(1)
        .nodeRelSize(8)
        .nodeColor(node => selected_nodes.has(node) ? 'darkorange' : 'blue')
        .linkColor(link => selected_edges.has(link) ? 'darkorange' : 'grey')
        //.nodeAutoColorBy("id")
        .backgroundColor('white')
        .nodeLabel('name')
        .linkLabel('label')
        .onLinkClick((link, event) => {
            this.link_click(link, selected_nodes, selected_edges);
        })
        .onNodeClick((node, event) => {
            this.click_node(node, selected_edges, selected_nodes);
        });
        this.graph($('#' + String(DOM_elem))[0]);
        this.muliple_edges();
    }
}

function get_all_graph()
{
    $('#btn-save').show();
    $('#btn-delete-all').show();
    $('#Info').empty();
    $('#Info').removeAttr('style');
    $('#View').empty();
    graph = new Graph();
    graph.draw_graph('View', Graph.init_data_nodes(graph.nodes), graph.edges, $('#container').width());
}

function import_graph() 
{
    let input = $('<input>').attr('type', 'file');

    input.on('change', () => 
    {
        if (input[0].files.length > 0) 
        {
            let file = input[0].files[0];
            __upload_file(file);
            input.val('');
        }
    });

    input.click();
}

function __upload_file(file) 
{
    let formData = new FormData();
    formData.append('file', file);

    $.ajax(
        {
            url: '/import',
            data: formData,
            type: 'POST',
            contentType: false,
            processData: false,
        }
    ).then(res=>
        {
            alert("Import is completed successfully");
            get_all_graph();
        });
}

$(document).ready(() =>
{
    let save_button = $('#btn-save');
    let delete_button = $('#btn-delete-all');

    $('#btn-All-graph').click(() =>
    {
        get_all_graph();
    });
});