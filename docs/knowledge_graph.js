const height_DOM_graph = 700;
let graph;

class Graph
{
    constructor() 
    {
        this.nodes = {
            "Q100361490": {
                "name": "Don't Look Up",
                "wikidata_aliases": [],
                "wikidata_summary": "2021 film directed by Adam McKay",
                "wikidata_url": "https://www.wikidata.org/wiki/Q100361490",
                "wikipedia_summary": "Don't Look Up is a 2021 American apocalyptic political satire black comedy film written, co-produced, and directed by Adam McKay from a story he co-wrote with David Sirota. It stars an ensemble cast featuring Leonardo DiCaprio, Jennifer Lawrence, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman, Ariana Grande, Kid Cudi, Cate Blanchett, and Meryl Streep. The film tells the story of two astronomers attempting to warn humanity about an approaching comet that will destroy human civilization. The impact event is an allegory for climate change, and the film is a satire of government, political, celebrity, and media indifference to the climate crisis.\nProduced by McKay's Hyperobject Industries and Bluegrass Films, the film was announced in November 2019. Originally set for a theatrical release by Paramount Pictures, the distribution rights were acquired by Netflix several months later. Lawrence became the first member of the cast to join, with DiCaprio signing on after his discussions with McKay on adjustments to the script; the rest of the cast was added through 2020. Filming was initially set to begin in April 2020 in Massachusetts, but it was delayed due to the COVID-19 pandemic; it eventually began in November 2020 and wrapped in February 2021. \nDon't Look Up began a limited theatrical release on December 10, 2021, before streaming on Netflix on December 24. It was praised for the cast's performances and the musical score, but critics were divided on the merits of McKay's satire; some found it deft, while others criticized it as smug and heavy-handed. The film was received more positively by scientists. Don't Look Up was named one of the top ten films of 2021 by the National Board of Review and American Film Institute. It received four Academy Award nominations (including Best Picture), four Golden Globe Award nominations (including Best Picture – Musical or Comedy), six Critics' Choice Award nominations, (including Best Picture), and also won Best Original Screenplay at the 74th Writers Guild of America Awards. The film set a new record for the most viewing hours in a single week on Netflix, and went on to become the second-most-watched movie on Netflix within 28 days of release.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Don%27t_Look_Up"
            },
            "Q102180106": {
                "name": "Deadpool & Wolverine",
                "wikidata_aliases": [
                    "Deadpool 3"
                ],
                "wikidata_summary": "upcoming Marvel Studios film",
                "wikidata_url": "https://www.wikidata.org/wiki/Q102180106",
                "wikipedia_summary": "Deadpool & Wolverine is an upcoming American superhero film based on the Marvel Comics characters Deadpool and Wolverine, produced by Marvel Studios, Maximum Effort, and 21 Laps Entertainment, and distributed by Walt Disney Studios Motion Pictures. It is intended to be the 34th film in the Marvel Cinematic Universe (MCU) and a sequel to Deadpool (2016) and Deadpool 2 (2018). The film is directed by Shawn Levy from a screenplay he wrote with Ryan Reynolds, Rhett Reese, Paul Wernick, and Zeb Wells. Reynolds and Hugh Jackman star as Deadpool and Wolverine, respectively, alongside Emma Corrin, Morena Baccarin, Rob Delaney, Leslie Uggams, Karan Soni, and Matthew Macfadyen. In the film, the Time Variance Authority (TVA) pulls Deadpool from his quiet life and sets him on a mission with Wolverine that will change the history of the MCU.\nDevelopment on a third Deadpool film began at 20th Century Fox by November 2016, but was placed on hold after the studio was acquired by Disney in March 2019. Control of the character was transferred to Marvel Studios, which began developing a new film with Reynolds. It integrates Deadpool with the MCU and is intended to retain the R rating of the previous films. Wendy Molyneux and Lizzie Molyneux-Logelin joined in November 2020 as writers. Reese and Wernick returned from the previous films for rewrites by March 2022, when Levy was hired as director. Jackman decided to reprise his role as Wolverine from Fox's X-Men films in August 2022. Wells, Reynolds, and Levy were confirmed to be contributing to the script by May 2023. Filming began later that month at Pinewood Studios in England, with additional filming in Norfolk and at Bovingdon Film Studios. Production was suspended in July due to the 2023 SAG-AFTRA strike, but resumed that November and wrapped in January 2024. The film's title was revealed a month later.\nDeadpool & Wolverine is scheduled to be released in the United States on July 26, 2024, as part of Phase Five of the MCU.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Deadpool_%26_Wolverine"
            },
            "Q10307713": {
                "name": "The Hunger Games: Mockingjay – Part 2",
                "wikidata_aliases": [
                    "Hunger Games: Mockingjay – Part 2",
                    "Mockingjay Part 2",
                    "The Hunger Games: Mockingjay, Part 2"
                ],
                "wikidata_summary": "2015 film directed by Francis Lawrence",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10307713",
                "wikipedia_summary": "The Hunger Games: Mockingjay – Part 2 is a 2015 American dystopian action film directed by Francis Lawrence from a screenplay by Peter Craig and Danny Strong, based on the 2010 novel Mockingjay by Suzanne Collins. The sequel to The Hunger Games: Mockingjay – Part 1 (2014), it is the fourth installment in The Hunger Games film series. It stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Julianne Moore, Jeffrey Wright, Stanley Tucci, Donald Sutherland and in his final film, Philip Seymour Hoffman. In the film, Katniss Everdeen (Lawrence) leads a team of rebels to Panem to liberate it from the tyrannical leadership of Coriolanus Snow (Sutherland). This marks Hoffman’s final film appearance prior to his death.\nTogether with its predecessor, principal photography began in September 2013 and lasted until June 2014, taking place back-to-back, with filming locations including Boston, Atlanta, Paris, Berlin, and Los Angeles. Hoffman, who died in February 2014, completed the majority of his scenes, although his death caused others to be rewritten.\nThe Hunger Games: Mockingjay – Part 2 premiered at the Sony Center in Berlin on November 4, 2015, and was released in the United States on November 20, by Lionsgate, in 2D, 3D, and IMAX. The film received generally positive reviews from critics, with praise for its performances (particularly Lawrence, Hutcherson and Sutherland's), screenplay, music, and action sequences; it was deemed a fitting end to the series, although some were divided on the decision to split the novel into two films. It grossed over $653 million, making it the ninth-highest-grossing film of 2015.\nAmong its accolades, the film was nominated for Best Fantasy Film at the 42nd Saturn Awards. It received three nominations at the 21st Empire Awards for Best Sci-Fi/Fantasy, Best Actress (Lawrence) and Best Production Design, while Lawrence was nominated for Best Actress in an Action Movie at the 21st Critics' Choice Awards.\nA prequel film, The Hunger Games: The Ballad of Songbirds & Snakes,  was released on November 17, 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Hunger_Games:_Mockingjay_%E2%80%93_Part_2"
            },
            "Q1033016": {
                "name": "Halle Berry",
                "wikidata_aliases": [
                    "Halle Maria Berry",
                    "Maria Halle Berry"
                ],
                "wikidata_summary": "American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1033016",
                "wikipedia_summary": "Halle Maria Berry ( HAL-ee; born Maria Halle Berry; August 14, 1966) is an American actress. She began her career as a model and entered several beauty contests, finishing as the first runner-up in the Miss USA pageant and coming in sixth in the Miss World 1986. Her breakthrough film role was in the romantic comedy Boomerang (1992), alongside Eddie Murphy, which led to roles in The Flintstones (1994) and Bulworth (1998) as well as the television film Introducing Dorothy Dandridge (1999), for which she won a Primetime Emmy Award and a Golden Globe Award.\nBerry established herself as one of the highest-paid actresses in Hollywood during the 2000s. For her performance of a struggling widow in the romantic drama Monster's Ball (2001), Berry became the only African-American woman to win the Academy Award for Best Actress, and the first woman of color. Berry took on high-profile roles such as Storm in four installments of the X-Men film series (2000–2014), the henchwoman of a robber in the thriller Swordfish (2001), Bond girl Jinx in Die Another Day (2002), and the title role in the much-derided Catwoman (2004).\nA varying critical and commercial reception followed in subsequent years, with Perfect Stranger (2007), Cloud Atlas (2012) and The Call (2013) being among her notable film releases in that period. Berry launched a production company, 606 Films, in 2014 and has been involved in the production of a number of projects in which she performed, such as the CBS science fiction series Extant (2014–2015). She appeared in the action films Kingsman: The Golden Circle (2017) and John Wick: Chapter 3 – Parabellum (2019) and made her directorial debut with the Netflix drama Bruised (2020).\nBerry has been a Revlon spokesmodel since 1996. She was formerly married to baseball player David Justice, singer-songwriter Eric Benét, and actor Olivier Martinez. She has two children, one with Martinez and another with model Gabriel Aubry.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Halle_Berry"
            },
            "Q103784": {
                "name": "Donald Sutherland",
                "wikidata_aliases": [
                    "Donald Edward McNichol Sutherland",
                    "Donald McNichol Sutherland"
                ],
                "wikidata_summary": "Canadian actor (born 1935)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q103784",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q104123": {
                "name": "Pulp Fiction",
                "wikidata_aliases": [],
                "wikidata_summary": "1994 film by Quentin Tarantino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104123",
                "wikipedia_summary": "Pulp Fiction is a 1994 American independent crime film written and directed by Quentin Tarantino from a story he conceived with Roger Avary. It tells four intertwining tales of crime and violence in Los Angeles, California. The film stars John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.\nTarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Its plot occurs out of chronological order. The film is also self-referential from its opening moments, beginning with a title card that gives two dictionary definitions of 'pulp'. Considerable screen time is devoted to monologues and casual conversations with eclectic dialogue revealing each character's perspectives on several subjects, and the film features an ironic combination of humor and strong violence. TriStar Pictures reportedly turned down the script as 'too demented'. Miramax co-chairman Harvey Weinstein was enthralled, however, and the film became the first that Miramax fully financed.\nPulp Fiction won the Palme d'Or at the 1994 Cannes Film Festival and was a major critical and commercial success. It was nominated for seven awards at the 67th Academy Awards, including Best Picture, and won Best Original Screenplay; it earned Travolta, Jackson, and Thurman Academy Award nominations, thus providing a major boost to their careers. Its development, marketing, distribution, and profitability had a sweeping effect on independent cinema.\nPulp Fiction is widely regarded as Tarantino's magnum opus, with particular praise for its screenwriting. The self-reflexivity, unconventional structure, and extensive homage and pastiche have led critics to describe it as a touchstone of postmodern film. It is often considered a cultural watershed, influencing films and other media that adopted elements of its style. The cast was also widely praised, with Travolta, Thurman, and Jackson earning high acclaim. In 2008, Entertainment Weekly named it the best film since 1983 and it has appeared on many critics' lists of the greatest films ever made. In 2013, Pulp Fiction was selected for preservation in the United States National Film Registry by the Library of Congress as 'culturally, historically, or aesthetically significant'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Pulp_Fiction"
            },
            "Q10441": {
                "name": "Phoenix",
                "wikidata_aliases": [
                    "Phoenicis",
                    "Phe",
                    "the Phoenix"
                ],
                "wikidata_summary": "constellation in the southern celestial hemisphere",
                "wikidata_url": "https://www.wikidata.org/wiki/Q10441",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q104844963": {
                "name": "X of Swords",
                "wikidata_aliases": [],
                "wikidata_summary": "Marvel Comics storyline",
                "wikidata_url": "https://www.wikidata.org/wiki/Q104844963",
                "wikipedia_summary": "'X of Swords' is a comic book crossover event which debuted in September 2020, being published by Marvel Comics. It is the next crossover event featured in the 'Dawn of X' relaunch after the House of X and Powers of X event. X of Swords was followed by the Hellfire Gala event.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X_of_Swords"
            },
            "Q105887530": {
                "name": "Tom Blyth",
                "wikidata_aliases": [
                    "Tom Keir Blyth"
                ],
                "wikidata_summary": "English actor (born 1995)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q105887530",
                "wikipedia_summary": "Tom Keir Blyth (born February 2, 1995) is an English actor. He took an interest in drama from a young age, studying acting at the Television Workshop in Nottingham and at the Juilliard School in New York City.\nHe had his first lead role in the film Scott and Sid (2018), and has since starred as Glen Byam Shaw in Benediction (2021) and Coriolanus Snow in The Hunger Games: The Ballad of Songbirds & Snakes (2023). On television, he plays the title role in the MGM+ series Billy the Kid (2022–).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Tom_Blyth"
            },
            "Q106545884": {
                "name": "How to Blow Up a Pipeline",
                "wikidata_aliases": [
                    "How to Blow Up a Pipeline"
                ],
                "wikidata_summary": "Book about climate activism by Andreas Malm",
                "wikidata_url": "https://www.wikidata.org/wiki/Q106545884",
                "wikipedia_summary": "How to Blow Up a Pipeline: Learning to Fight in a World on Fire is a nonfiction book written by Andreas Malm and published in 2021 by Verso Books. In the book, Malm argues that sabotage is a logical form of climate activism, and criticizes both pacifism within the climate movement and 'climate fatalism' outside it. The book inspired a film of the same name.\nAndreas Malm, a lecturer in human ecology at Lund University, wrote several other books on related subjects before his release of How to Blow Up a Pipeline. Prior to events in 2018 and 2019 including Fridays For Future and climate protest camps in Europe, the book was planned to be an argument that there was a lack of climate activism. These events caused the argument to become a critique of nonviolence and pacifism in the climate activist movement, and an argument for sabotage as a logical form of climate activism.\nThe book received both positive and negative reviews in various publications.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/How_to_Blow_Up_a_Pipeline"
            },
            "Q107029844": {
                "name": "Mackenzie Lansing",
                "wikidata_aliases": [],
                "wikidata_summary": "French-American actress and writer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q107029844",
                "wikipedia_summary": "Mackenzie Lansing is a French-American television and film actress.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mackenzie_Lansing"
            },
            "Q1079": {
                "name": "Breaking Bad",
                "wikidata_aliases": [
                    "BB",
                    "BrBa"
                ],
                "wikidata_summary": "American crime drama television series (2008–2013)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1079",
                "wikipedia_summary": "Breaking Bad is  an American crime drama television series created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to produce and distribute methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. Breaking Bad premiered on AMC on January 20, 2008, and concluded on September 29, 2013, after five seasons consisting of 62 episodes.\nAmong the show's co-stars are Anna Gunn and RJ Mitte as Walter's wife Skyler and son Walter Jr., and Betsy Brandt and Dean Norris as Skyler's sister Marie Schrader and her husband Hank, a DEA agent. Others include Bob Odenkirk as Walter's and Jesse's lawyer Saul Goodman, Jonathan Banks as private investigator and fixer Mike Ehrmantraut, and Giancarlo Esposito as drug kingpin Gus Fring. The final season introduces Jesse Plemons as the criminally ambitious Todd Alquist, and Laura Fraser as Lydia Rodarte-Quayle, a cunning business executive.\nBreaking Bad's first season received generally positive reviews, while the subsequent seasons received unanimous critical acclaim, with praise for the performances, direction, cinematography, writing, story, and character development. Since its conclusion, the show has been lauded by critics as one of the greatest television series of all time. It has also developed a cult following. The show had fair viewership in its first three seasons, but the fourth and fifth seasons saw a moderate rise in viewership when it was made available on Netflix just before the fourth season premiere. Viewership increased exponentially upon the premiere of the second half of the fifth season in 2013. By the time that the series finale aired, it was among the most-watched cable shows on American television. The show received numerous awards, including 16 Primetime Emmy Awards, eight Satellite Awards, two Golden Globe Awards, two Peabody Awards, two Critics' Choice Awards, and four Television Critics Association Awards. Cranston won the Primetime Emmy Award for Outstanding Lead Actor in a Drama Series four times, while Aaron Paul won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series three times; Anna Gunn won the Primetime Emmy Award for Outstanding Supporting Actress in a Drama Series twice. In 2013, Breaking Bad entered the Guinness World Records as the most critically acclaimed TV show of all time. In 2023, Breaking Bad was ranked as the best TV series in the last 25 years by critics in a poll conveyed by Rotten Tomatoes.\nThe series gave rise to the larger Breaking Bad franchise. Better Call Saul, a prequel series featuring Odenkirk, Banks, and Esposito reprising their Breaking Bad roles, as well as many others in guest and recurring appearances, debuted on AMC on February 8, 2015, and concluded on August 15, 2022. A sequel film, El Camino: A Breaking Bad Movie, starring Paul, was released on Netflix and in theaters on October 11, 2019.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Breaking_Bad"
            },
            "Q108086029": {
                "name": "Asteroid City",
                "wikidata_aliases": [],
                "wikidata_summary": "2023 film directed by Wes Anderson",
                "wikidata_url": "https://www.wikidata.org/wiki/Q108086029",
                "wikipedia_summary": "Asteroid City (or 'Asteroid City') is a 2023 American comedy-drama film written, directed, and produced by Wes Anderson, from a story he wrote with Roman Coppola. It features an ensemble cast, including Jason Schwartzman, Scarlett Johansson, Tom Hanks, Jeffrey Wright, Tilda Swinton, Bryan Cranston, Edward Norton, Adrien Brody, Liev Schreiber, Hope Davis, Steve Park, Rupert Friend, Maya Hawke, Steve Carell, Matt Dillon, Hong Chau, Willem Dafoe, Margot Robbie, Tony Revolori, Jake Ryan, and Jeff Goldblum. Its plot is mostly concerned with a play of the events of a Junior Stargazer convention in a retrofuturistic version of 1955, but it becomes metatextual because the making of the play is the subject of a television documentary. It is Anderson's homage to popular memory and mythology about extraterrestrials and UFOs witnessed in the American Southwestern desert in close proximity to atomic test sites during the postwar period of the 20th century.\nThe project was announced in September 2020 as an untitled romance film, with Anderson writing, producing and directing, alongside Jeremy Dawson of American Empirical Pictures and Steven Rales of Indian Paintbrush. In February 2021, it was described as being about a 'group of brainy teenagers'. Originally set for Rome, filming took place in Chinchón, Spain, between August and October, 2021, with cinematographer Robert D. Yeoman. Several sets resembling a desert landscape and a mock train station were used. Post-production included editor Barney Pilling and a musical score composed by frequent Anderson composer Alexandre Desplat, featuring country and western songs from many artists. The official title for Asteroid City was revealed in October 2021 at the BFI London Film Festival.\nAsteroid City premiered at the 76th Cannes Film Festival on May 23, 2023, where it competed for the Palme d'Or. It began a limited theatrical release through Focus Features in the United States on June 16, 2023, expanding to a wide release a week later. It grossed $54 million worldwide on a $25 million budget, and received generally positive reviews.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Asteroid_City"
            },
            "Q108128745": {
                "name": "Prime Video Ligue 1",
                "wikidata_aliases": [],
                "wikidata_summary": "TV channel",
                "wikidata_url": "https://www.wikidata.org/wiki/Q108128745",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q109260234": {
                "name": "Insider's explanation of Isagoge",
                "wikidata_aliases": [],
                "wikidata_summary": "Arabic Book",
                "wikidata_url": "https://www.wikidata.org/wiki/Q109260234",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q109440760": {
                "name": "Trish Summerville",
                "wikidata_aliases": [],
                "wikidata_summary": "American costume designer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q109440760",
                "wikipedia_summary": "Trish Summerville is an American costume designer. She is best known for her work on Francis Lawrence's dystopian science fiction film The Hunger Games: Catching Fire (2013), as well as her collaborations with David Fincher including his psychological thriller films; The Girl with the Dragon Tattoo (2011), Gone Girl (2014), and his black-and-white biographical drama film Mank (2020), for which she was nominated for both an Academy Award for Best Costume Design and BAFTA Award for Best Costume Design. Summerville was also nominated for an Primetime Emmy Award in the category Outstanding Period Costumes for her work on the television program Westworld.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Trish_Summerville"
            },
            "Q109558622": {
                "name": "X-Men '97",
                "wikidata_aliases": [],
                "wikidata_summary": "American animated television series, revival of 1992–1997 series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q109558622",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q110268031": {
                "name": "Jordan Belfort",
                "wikidata_aliases": [
                    "Jordan Belfort on His Incredible Life, Victimhood Mentality, and the Keys to Entrepreneurial Success |\\xa0Ep.\\xa0182"
                ],
                "wikidata_summary": "episode of the Megyn Kelly Show",
                "wikidata_url": "https://www.wikidata.org/wiki/Q110268031",
                "wikipedia_summary": "Jordan Ross Belfort (; born July 9, 1962) is an American former stockbroker, financial criminal, and businessman who pleaded guilty to fraud and related crimes in connection with stock-market manipulation and running a boiler room as part of a penny-stock scam in 1999.  Belfort spent 22 months in prison as part of an agreement under which, becoming an informant for the FBI and wearing a wire, he gave testimony against numerous partners and subordinates in his fraud scheme. He published the memoir The Wolf of Wall Street in 2007, which was adapted into a Martin Scorsese film of the same name released in 2013, in which he was played by Leonardo DiCaprio.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jordan_Belfort"
            },
            "Q110703949": {
                "name": "Irene Böhm",
                "wikidata_aliases": [],
                "wikidata_summary": "German actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q110703949",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q110741065": {
                "name": "Rick Dalton",
                "wikidata_aliases": [],
                "wikidata_summary": "actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q110741065",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q111550418": {
                "name": "First Class",
                "wikidata_aliases": [],
                "wikidata_summary": "2022 single by Jack Harlow",
                "wikidata_url": "https://www.wikidata.org/wiki/Q111550418",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11192": {
                "name": "Kimi Räikkönen",
                "wikidata_aliases": [
                    "Iceman",
                    "Kimi Raikkonen",
                    "Kimi-Matias Räikkönen",
                    "Kimi Matias Räikkönen",
                    "Kimi",
                    "Raikkonen"
                ],
                "wikidata_summary": "Finnish racing driver",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11192",
                "wikipedia_summary": "Kimi-Matias Räikkönen (Finnish pronunciation: [ˈkimi ˈmɑtiɑs ˈræi̯kːønen]; born 17 October 1979), nicknamed 'The Iceman', is a Finnish  racing driver who competed in Formula One between 2001 and 2021 for Sauber, McLaren, Ferrari, Lotus, and Alfa Romeo. Räikkönen won the 2007 Formula One World Championship while driving for Ferrari; he also managed to finish second overall twice and third three times. Räikkönen is the most successful Finnish Formula One driver by several metrics, and has the sixth-most podium finishes (103), third-most fastest laps (46), and second-most race starts (349) in Formula One history. He is known for his reserved personality and reluctance to participate in public relations events.\nRäikkönen entered Formula One as a regular driver for Sauber-Petronas in 2001, having previously competed in just 23 car races. He joined McLaren-Mercedes in 2002, and quickly established himself as a title contender by finishing runner-up in the championship to Michael Schumacher in 2003, and Fernando Alonso in 2005. Räikkönen's time at McLaren was marred by a succession of unreliable cars, prompting a move to Ferrari in 2007. This change saw him crowned Formula One World Drivers' Champion in his first season, pipping both McLaren drivers—Lewis Hamilton and Alonso—to the title by one point. In 2008, he equalled the record for the greatest number of fastest laps in a season for the second time.\nRäikkönen left both Scuderia Ferrari and the sport after the 2009 season, his sole victory that year having come in that season's Belgian Grand Prix due to driving an uncompetitive Ferrari F60. On his return to Formula One, Räikkönen drove for Lotus in 2012 and 2013, scoring the team's only victories. In September 2013, Ferrari announced his re-signing on a two-year contract, beginning in the 2014 season. This contract was subsequently extended until the end of the 2018 season. During his second Ferrari stint, Räikkönen scored 26 podiums, two pole positions, and a victory at the 2018 United States Grand Prix, 113 Grands Prix after his last victory. Räikkönen finished among the top four overall in the championship on multiple occasions during his second Ferrari stint, finishing his total eight-year long Ferrari career with a third place in the 2018 championship. Räikkönen left Ferrari at the end of the 2018 season, and moved to Alfa Romeo Racing on a two-year contract, later extending it until the end of 2021, after which he retired from Formula One.\nIn the World Rally Championship, Räikkönen drove Citroën cars for their Junior Team in 2010 and for ICE 1 Racing in 2011, managing to beat some more experienced rally drivers with a best result of fifth, a stage win and 10th in the championship in both seasons. Concurrently, Räikkönen also competed in NASCAR, making one-off appearances in the Camping World Truck Series and the Nationwide Series in 2011. Since retiring from Formula One, he has made appearances in the Cup Series in 2022 and 2023. Forbes magazine listed Räikkönen 36th in their 2008 'Celebrity 100' as the 26th highest paid celebrity and fifth highest paid sportsman. The same list in 2009 recorded him as the second highest-paid athlete.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen"
            },
            "Q112059737": {
                "name": "Anxieties, Expectations, and Truths of Contemporary Journalism: A Case Study of the Mike Daisey Scandal",
                "wikidata_aliases": [],
                "wikidata_summary": "master's thesis by Louisa Hunker, Communications, University of Washington, 2013",
                "wikidata_url": "https://www.wikidata.org/wiki/Q112059737",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1122565": {
                "name": "Grauman's Chinese Theatre",
                "wikidata_aliases": [
                    "TCL Chinese Theater",
                    "Mann's Chinese Theater"
                ],
                "wikidata_summary": "movie theater in Hollywood, Los Angeles, California, USA",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1122565",
                "wikipedia_summary": "The TCL Chinese Theatre, commonly referred to as Grauman's Chinese Theatre (its official name for much of its history), is a movie palace on the historic Hollywood Walk of Fame in the Hollywood neighborhood of Los Angeles.\nThe original Chinese Theatre was commissioned following the success of the nearby Grauman's Egyptian Theatre, which opened in 1922. Both were built as Exotic Revival style architecture. Built by a partnership headed by Sid Grauman over 18 months beginning in January 1926, the theater opened May 18, 1927, with the premiere of Cecil B. DeMille's The King of Kings. It has since been home to many premieres, including the 1977 debut of Star Wars, as well as many private events and three Academy Awards ceremonies. Among the theater's features are the concrete blocks set in the forecourt, which bear the signatures, footprints, and handprints of popular motion picture personalities from the 1920s to the present day.\nOriginally named Grauman's Chinese Theatre, it was renamed Mann's Chinese Theatre in 1973, and reverted to its original name in 2001. On January 11, 2013, Chinese electronics manufacturer TCL Corporation purchased the facility's naming rights for $5 million.\nIn 2013, the Chinese Theatre partnered with IMAX Corporation to convert the house into a custom-designed IMAX theater. The newly renovated theater seats 932 people and features one of the largest movie screens in North America.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Grauman%27s_Chinese_Theatre"
            },
            "Q1138674": {
                "name": "Jesse Plemons",
                "wikidata_aliases": [
                    "Jesse Lon Plemons"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1138674",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q114000963": {
                "name": "Martin Scorsese's unrealized projects",
                "wikidata_aliases": [],
                "wikidata_summary": "overview about Martin Scorsese's unrealized projects",
                "wikidata_url": "https://www.wikidata.org/wiki/Q114000963",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11424": {
                "name": "Film",
                "wikidata_aliases": [
                    "movie",
                    "motion picture",
                    "cinematic work",
                    "films",
                    "flick",
                    "moving picture",
                    "cinema",
                    "motion pictures"
                ],
                "wikidata_summary": "sequence of images that give the impression of movement, stored on film stock",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11424",
                "wikipedia_summary": "A film – also called a movie, motion picture, moving picture, picture, photoplay or (slang) flick – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. These images are generally accompanied by sound and, more rarely, other sensory stimulations. The word 'cinema', short for cinematography, is often used to refer to filmmaking and the film industry, and the art form that is the result of it.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Film"
            },
            "Q114529307": {
                "name": "The Covey",
                "wikidata_aliases": [],
                "wikidata_summary": "episode of The High Chaparral (S2 E5)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q114529307",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q115541": {
                "name": "Dakota Fanning",
                "wikidata_aliases": [
                    "Hannah Dakota Fanning"
                ],
                "wikidata_summary": "American actress (born 1994)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q115541",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1155729": {
                "name": "Scholastic Corporation",
                "wikidata_aliases": [
                    "Scholastic",
                    "Scholastic Entertainment",
                    "Scholastic Corporation (United States)",
                    "SCHL"
                ],
                "wikidata_summary": "American publishing, education, and media company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1155729",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11634": {
                "name": "Sculpture",
                "wikidata_aliases": [
                    "sculpture",
                    "sculpting"
                ],
                "wikidata_summary": "branch of the visual arts that operates in three dimensions",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11634",
                "wikipedia_summary": "Sculpture is the branch of the visual arts that operates in three dimensions. Sculpture is the three-dimensional art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts. Durable sculptural processes originally used carving (the removal of material) and modelling (the addition of material, as clay), in stone, metal, ceramics, wood and other materials but, since Modernism, there has been almost complete freedom of materials and process. A wide variety of materials may be worked by removal such as carving, assembled by welding or modelling, or moulded or cast.\nSculpture in stone survives far better than works of art in perishable materials, and often represents the majority of the surviving works (other than pottery) from ancient cultures, though conversely traditions of sculpture in wood may have vanished almost entirely. However, most ancient sculpture was brightly painted, and this has been lost.\nSculpture has been central in religious devotion in many cultures, and until recent centuries, large sculptures, too expensive for private individuals to create, were usually an expression of religion or politics. Those cultures whose sculptures have survived in quantities include the cultures of the ancient Mediterranean, India and China, as well as many in Central and South America and Africa.\nThe Western tradition of sculpture began in ancient Greece, and Greece is widely seen as producing great masterpieces in the classical period. During the Middle Ages, Gothic sculpture represented the agonies and passions of the Christian faith. The revival of classical models in the Renaissance produced famous sculptures such as Michelangelo's statue of David. Modernist sculpture moved away from traditional processes and the emphasis on the depiction of the human body, with the making of constructed sculpture, and the presentation of found objects as finished artworks.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sculpture"
            },
            "Q116673393": {
                "name": "Sibon irmelindicaprioae",
                "wikidata_aliases": [
                    "DiCaprio’s Snail-eating Snake"
                ],
                "wikidata_summary": "species of snake",
                "wikidata_url": "https://www.wikidata.org/wiki/Q116673393",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q11679": {
                "name": "The Hunger Games",
                "wikidata_aliases": [
                    "Hunger Games Saga",
                    "The Hunger Games Saga"
                ],
                "wikidata_summary": "three books by Suzanne Collins (2008–2010)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11679",
                "wikipedia_summary": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original.\nThe novels in the trilogy are titled The Hunger Games (2008), Catching Fire (2009), and Mockingjay (2010). Each was adapted for film, establishing The Hunger Games film series, with the film adaptation of Mockingjay split into two feature-length motion pictures. The first two books in the series were both New York Times best sellers, and Mockingjay topped all US bestseller lists upon its release. By the time the film adaptation of The Hunger Games was released in 2012, the publisher had reported over 26 million Hunger Games trilogy books in print, including movie tie-in books.\nThe Hunger Games universe is a dystopia set in Panem, a North American country consisting of the wealthy Capitol and 13 districts in varying states of poverty. Every year, children from the first 12 districts are selected via lottery to participate in a compulsory televised battle royale death match called The Hunger Games.\nThe 13th district was also subjected to this, but led a rebellion against the Capitol. Since District 13 specialized in nuclear weaponry, the Capitol quickly surrendered and agreed to a peace deal. The two sides agreed that the residents of District 13 would all move underground and the land above would be bombed to make it seem like the Capitol had won.\nThe novels were all well received. In August 2012, the series ranked second, exceeded only by the Harry Potter series in NPR’s poll of the top 100 teen novels, which asked voters to choose their favorite young adult books. On August 17, 2012, Amazon announced the Hunger Games trilogy as its top seller, surpassing the record previously held by the Harry Potter series. As of 2014, the trilogy has sold more than 65 million copies in the U.S. alone (more than 28 million copies of The Hunger Games, more than 19 million copies of Catching Fire, and more than 18 million copies of Mockingjay). The Hunger Games trilogy has been sold in 56 territories in 51 languages to date.\nA prequel novel, titled The Ballad of Songbirds and Snakes, about the early days of the Hunger Games, featuring a young Coriolanus Snow as the protagonist, was released on May 19, 2020. The prequel has been sold by Stimola Literary Studio into 35 territories to date.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Hunger_Games"
            },
            "Q116845": {
                "name": "Silver Linings Playbook",
                "wikidata_aliases": [],
                "wikidata_summary": "2012 film directed by David O. Russell",
                "wikidata_url": "https://www.wikidata.org/wiki/Q116845",
                "wikipedia_summary": "Silver Linings Playbook is a 2012 American romantic comedy-drama written and directed by David O. Russell. The film is based on Matthew Quick’s 2008 novel The Silver Linings Playbook. It stars Bradley Cooper and Jennifer Lawrence, with Robert De Niro, Jacki Weaver, Chris Tucker, John Ortiz, Shea Whigham, Anupam Kher and Julia Stiles in supporting roles.\nThe film is set in Ridley Park, Pennsylvania. Cooper plays Patrizio 'Pat' Solitano Jr., a man with bipolar disorder who is released from a psychiatric hospital and moves back in with his parents (De Niro and Weaver). Pat is determined to win back his estranged wife. He meets a young widow, Tiffany Maxwell (Lawrence), who offers to help him get his wife back if he enters a dance competition with her. The two become closer as they train, and Pat, his father, and Tiffany examine their relationships with each other as they cope with their situations.\nSilver Linings Playbook premiered at the 2012 Toronto International Film Festival on September 8, 2012, and was released in the United States on November 16, 2012. The film opened to critical acclaim, with praise for Russell's direction, and the performances of Cooper, and Lawrence. It grossed $236.4 million worldwide. A recipient of several accolades, it received eight nominations at the 85th Academy Awards, including Best Picture, Best Director, and Best Adapted Screenplay, with Lawrence winning the Academy Award for Best Actress.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Silver_Linings_Playbook"
            },
            "Q11690": {
                "name": "Wall Street",
                "wikidata_aliases": [
                    "Wall St"
                ],
                "wikidata_summary": "street in Manhattan",
                "wikidata_url": "https://www.wikidata.org/wiki/Q11690",
                "wikipedia_summary": "Wall Street is a street in the Financial District of Lower Manhattan in New York City. Eight city blocks long, it runs between Broadway in the west and South Street and the East River in the east. The term 'Wall Street' has become a metonym for the financial markets of the United States as a whole, the American financial services industry, New York–based financial interests, or the Financial District itself. Anchored by Wall Street, New York has been described as the world's principal fintech and financial center.\nThe street was originally known in Dutch as Het Cingel ('the Belt') when it was part of New Amsterdam during the 17th century. An actual wall existed on the street from 1653 to 1699, and during the 18th century, the location served as a slave market and securities trading site, and from 1703 onwards the location of New York's first city hall, Federal Hall. In the early 19th century, both residences and businesses occupied the area, but increasingly the latter predominated, and New York's financial industry became centered on Wall Street. During the 20th century, several early skyscrapers were built on Wall Street, including 40 Wall Street, once the world's tallest building.\nThe Wall Street area is home to the New York Stock Exchange, the world's largest stock exchange by total market capitalization, as well as the Federal Reserve Bank of New York, and several commercial banks and insurance companies. Several other stock and commodity exchanges have also been located in Lower Manhattan near Wall Street, including the New York Mercantile Exchange and other commodity futures exchanges, along with the NYSE American. To support the business they did on the exchanges, many brokerage firms owned offices nearby. The direct economic impacts of Wall Street activities extend worldwide. \nWall Street itself is a narrow and winding street running from the East River to Broadway and lined with skyscrapers, as well as the New York Stock Exchange Building, the Federal Hall and 1 Wall Street at its western end. The street is near multiple New York City Subway stations, ferry terminals, and the World Trade Center site.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wall_Street"
            },
            "Q117251498": {
                "name": "Cara Jade Myers",
                "wikidata_aliases": [],
                "wikidata_summary": "Native American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q117251498",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q118948414": {
                "name": "Fall of X",
                "wikidata_aliases": [],
                "wikidata_summary": "American comic books line",
                "wikidata_url": "https://www.wikidata.org/wiki/Q118948414",
                "wikipedia_summary": "'Fall of X' is a 2023 relaunch of American comic books line of the X-Men published by Marvel Comics. It is the sequel to the 'Destiny of X' publishing initiative, and is the final initiative in the Krakoan Age of the X-Men. It will culminate in the dual miniseries Fall of the House of X and Rise of the Powers of X beginning in January 2024 and followed by a new relaunch titled X-Men: From the Ashes.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Fall_of_X"
            },
            "Q1195566": {
                "name": "Adamant",
                "wikidata_aliases": [
                    "adamantite",
                    "adamantine",
                    "adamas"
                ],
                "wikidata_summary": "mythological hard metal",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1195566",
                "wikipedia_summary": "Adamant in classical mythology is an archaic form of diamond. In fact, the English word diamond is ultimately derived from adamas, via Late Latin diamas and Old French diamant. In ancient Greek ἀδάμας (adamas), genitive ἀδάμαντος (adamantos), literally 'unconquerable, untameable'. In those days, the qualities of hard metal (probably steel) were attributed to it, and adamant became as a result an independent concept.\nIn the Middle Ages adamant also became confused with the magnetic rock lodestone, and a folk etymology connected it with the Latin adamare, 'to love or be attached to'.  Another connection was the belief that adamant (the diamond definition) could block the effects of a magnet.  This was addressed in chapter III of Pseudodoxia Epidemica, for instance.\nSince the contemporary word diamond is now used for the hardest gemstone, the increasingly archaic noun adamant has been reduced to mostly poetic or anachronistic use. In that capacity, the name, and various derivatives of it, are frequently used in modern media to refer to a variety of fictional substances.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Adamant"
            },
            "Q120644278": {
                "name": "Hï Ibiza",
                "wikidata_aliases": [],
                "wikidata_summary": "Ibiza's Night Club",
                "wikidata_url": "https://www.wikidata.org/wiki/Q120644278",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q120679397": {
                "name": "Yuca's",
                "wikidata_aliases": [],
                "wikidata_summary": "restaurant in Los Angeles, California, U.S",
                "wikidata_url": "https://www.wikidata.org/wiki/Q120679397",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12131": {
                "name": "Disability",
                "wikidata_aliases": [
                    "handicap"
                ],
                "wikidata_summary": "impairments, activity and participation limitations of a person",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12131",
                "wikipedia_summary": "Disability is the experience of any condition that makes it more difficult for a person to do certain activities or have equitable access within a given society. Disabilities may be cognitive, developmental, intellectual, mental, physical, sensory, or a combination of multiple factors. Disabilities can be present from birth or can be acquired during a person's lifetime. Historically, disabilities have only been recognized based on a narrow set of criteria—however, disabilities are not binary and can be present in unique characteristics depending on the individual. A disability may be readily visible, or invisible in nature.\nThe United Nations Convention on the Rights of Persons with Disabilities defines disability as:\n\nlong-term physical, mental, intellectual or sensory impairments which in interaction with various barriers may hinder [a person's] full and effective participation in society on an equal basis with others.Disabilities have been perceived differently throughout history, through a variety of different theoretical lenses. There are two main models that attempt to explain disability in our society: the medical model and the social model. The medical model serves as a theoretical framework that considers disability as an undesirable medical condition that requires specialized treatment. Those who ascribe to the medical model tend to focus on finding the root causes of disabilities, as well as any cures—such as assistive technology. The social model centers disability as a societally-created limitation on individuals who do not have the same ability as the majority of the population. Although the medical model and social model are the most common frames for disability, there are a multitude of other models that theorize disability.\nThere are many terms that explain aspects of disability. While some terms solely exist to describe phenomena pertaining to disability, others have been centered around stigmatizing and ostracizing those with disabilities. Some terms have such a negative connotation that they are considered to be slurs. A current point of contention is whether it is appropriate to use person-first language (i.e. person who is disabled) or identity-first language (i.e. disabled person) when referring to disability and an individual.\nDue to the marginalization of disabled people, there have been several activist causes that push for equitable treatment and access in society. Disability activists have fought to receive equal and equitable rights under the law—though there are still political issues that enable or advance the oppression of disabled people. Although disability activism serves to dismantle ableist systems, social norms relating to the perception of disabilities are often reinforced by tropes used by the media. Since negative perceptions of disability are pervasive in modern society, disabled people have turned to self-advocacy in an attempt to push back against their marginalization. The recognition of disability as an identity that is experienced differently based on the other multi-faceted identities of the individual is one often pointed out by disabled self-advocates. The ostracization of disability from mainstream society has created the opportunity for a disability culture to emerge. While disabled activists still promote the integration of disabled people into mainstream society, several disabled-only spaces have been created to foster a disability community—such as with art, social media, and sports.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Disability"
            },
            "Q121641605": {
                "name": "Nadine Macaluso",
                "wikidata_aliases": [],
                "wikidata_summary": "American psychologist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q121641605",
                "wikipedia_summary": "Nadine Macaluso (née Caridi; born December 24, 1967), formerly Belfort, is a British-born American psychologist, author, internet personality, and former model. She was the second wife of the stockbroker and financial criminal Jordan Belfort, to whom she was married from 1991 to 2005. Throughout her marriage, she was referred to in the press as the 'Duchess of Bay Ridge'.\nMacaluso's marriage to Belfort was one of the subjects of Belfort's 2007 memoir, The Wolf of Wall Street, and the basis of Margot Robbie's character Naomi Lapaglia in the 2013 film The Wolf of Wall Street. Macaluso authored the book Run Like Hell: A Therapist’s Guide To Recognizing, Escaping, And Healing From Trauma Bonds.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Nadine_Macaluso"
            },
            "Q122157265": {
                "name": "Netho Díaz",
                "wikidata_aliases": [
                    "Netho Diaz"
                ],
                "wikidata_summary": "viaf:'308230869'; isni:'0000 0004 3385 6817'",
                "wikidata_url": "https://www.wikidata.org/wiki/Q122157265",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q123313708": {
                "name": "Can't Catch Me Now",
                "wikidata_aliases": [],
                "wikidata_summary": "2023 single by Olivia Rodrigo",
                "wikidata_url": "https://www.wikidata.org/wiki/Q123313708",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1233720": {
                "name": "young adult literature",
                "wikidata_aliases": [
                    "YA",
                    "juvenile literature",
                    "YA literature",
                    "youth literature"
                ],
                "wikidata_summary": "literature written for adolescents and young adults",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1233720",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q123705": {
                "name": "District",
                "wikidata_aliases": [
                    "neighbourhood",
                    "quarter",
                    "subdistrict",
                    "district",
                    "city section"
                ],
                "wikidata_summary": "geographically localized community within a larger city, town or suburb",
                "wikidata_url": "https://www.wikidata.org/wiki/Q123705",
                "wikipedia_summary": "A district is a type of administrative division that in some countries is managed by the local government. Across the world, areas known as 'districts' vary greatly in size, spanning regions or counties, several municipalities, subdivisions of municipalities, school district, or political district.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/District"
            },
            "Q124150398": {
                "name": "Lucy Gray Baird",
                "wikidata_aliases": [],
                "wikidata_summary": "Fictional character",
                "wikidata_url": "https://www.wikidata.org/wiki/Q124150398",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q124685159": {
                "name": "Casca Highbottom",
                "wikidata_aliases": [],
                "wikidata_summary": "إنسان خيالي",
                "wikidata_url": "https://www.wikidata.org/wiki/Q124685159",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q124687593": {
                "name": "Lucretius Flickerman",
                "wikidata_aliases": [
                    "Lucky Flickerman"
                ],
                "wikidata_summary": "personatge d'Els jocs de la fam",
                "wikidata_url": "https://www.wikidata.org/wiki/Q124687593",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q125243445": {
                "name": "X-Men: From the Ashes",
                "wikidata_aliases": [],
                "wikidata_summary": "comics event",
                "wikidata_url": "https://www.wikidata.org/wiki/Q125243445",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12577": {
                "name": "Adamantium",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional, indestructible metal alloy",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12577",
                "wikipedia_summary": "Adamantium is a fictional metal alloy, most famously appearing in American comic books published by Marvel Comics. It is best known as the substance bonded to the character Wolverine's skeleton and claws.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Adamantium"
            },
            "Q125928": {
                "name": "Climate change",
                "wikidata_aliases": [
                    "climatic variation"
                ],
                "wikidata_summary": "change in the statistical distribution of weather patterns for an extended period, not necessarily current or recent",
                "wikidata_url": "https://www.wikidata.org/wiki/Q125928",
                "wikipedia_summary": "In common usage, climate change describes global warming—the ongoing increase in global average temperature—and its effects on Earth's climate system. Climate change in a broader sense also includes previous long-term changes to Earth's climate. The current rise in global average temperature is more rapid than previous changes, and is primarily caused by humans burning fossil fuels. Fossil fuel use, deforestation, and some agricultural and industrial practices add to greenhouse gases, notably carbon dioxide and methane. Greenhouse gases absorb some of the heat that the Earth radiates after it warms from sunlight. Larger amounts of these gases trap more heat in Earth's lower atmosphere, causing global warming.\nClimate change has an increasingly large impact on the environment. Deserts are expanding, while heat waves and wildfires are becoming more common. Amplified warming in the Arctic has contributed to thawing permafrost, retreat of glaciers and sea ice decline. Higher temperatures are also causing more intense storms, droughts, and other weather extremes. Rapid environmental change in mountains, coral reefs, and the Arctic is forcing many species to relocate or become extinct. Even if efforts to minimise future warming are successful, some effects will continue for centuries. These include ocean heating, ocean acidification and sea level rise.\nClimate change threatens people with increased flooding, extreme heat, increased food and water scarcity, more disease, and economic loss. Human migration and conflict can also be a result. The World Health Organization (WHO) calls climate change the greatest threat to global health in the 21st century. Societies and ecosystems will experience more severe risks without action to limit warming. Adapting to climate change through efforts like flood control measures or drought-resistant crops partially reduces climate change risks, although some limits to adaptation have already been reached. Poorer communities are responsible for a small share of global emissions, yet have the least ability to adapt and are most vulnerable to climate change.\n\nMany climate change impacts have been felt in recent years, with 2023 the warmest on record at +1.48 °C (2.66 °F) since regular tracking began in 1850. Additional warming will increase these impacts and can trigger tipping points, such as melting all of the Greenland ice sheet. Under the 2015 Paris Agreement, nations collectively agreed to keep warming 'well under 2 °C'. However, with pledges made under the Agreement, global warming would still reach about 2.7 °C (4.9 °F) by the end of the century. Limiting warming to 1.5 °C will require halving emissions by 2030 and achieving net-zero emissions by 2050.\nFossil fuel use can be phased out by conserving energy and switching to energy sources that do not produce significant carbon pollution. These energy sources include wind, solar, hydro, and nuclear power. Cleanly generated electricity can replace fossil fuels for powering transportation, heating buildings, and running industrial processes. Carbon can also be removed from the atmosphere, for instance by increasing forest cover and farming with methods that capture carbon in soil.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Climate_change"
            },
            "Q1259759": {
                "name": "miniseries",
                "wikidata_aliases": [
                    "mini-series",
                    "TV miniseries",
                    "event series",
                    "television miniseries",
                    "TV mini series",
                    "television mini-series",
                    "limited serial",
                    "limited series"
                ],
                "wikidata_summary": "TV shows or series that have a predetermined number of episodes",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1259759",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q12803": {
                "name": "2029",
                "wikidata_aliases": [
                    "MMXXIX",
                    "two thousand twenty-nine",
                    "twenty twenty-nine"
                ],
                "wikidata_summary": "calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q12803",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q128430": {
                "name": "Cyclopes",
                "wikidata_aliases": [
                    "Cyclopes"
                ],
                "wikidata_summary": "member of a primordial race of giants in Greek mythology and later Roman mythology",
                "wikidata_url": "https://www.wikidata.org/wiki/Q128430",
                "wikipedia_summary": "In Greek mythology and later Roman mythology, the Cyclopes ( sy-KLOH-peez; Greek: Κύκλωπες, Kýklōpes, 'Circle-eyes' or 'Round-eyes'; singular Cyclops  SY-klops; Κύκλωψ, Kýklōps) are giant one-eyed creatures. Three groups of Cyclopes can be distinguished. In Hesiod's Theogony, the Cyclopes are the three brothers Brontes, Steropes, and Arges, who made for Zeus his weapon the thunderbolt. In Homer's Odyssey, they are an uncivilized group of shepherds, the brethren of Polyphemus encountered by Odysseus. Cyclopes were also famous as the builders of the Cyclopean walls of Mycenae and Tiryns.\nIn Cyclops, the fifth-century BC play by Euripides, a chorus of satyrs offers comic relief based on the encounter of Odysseus and Polyphemus. The third-century BC poet Callimachus makes the Hesiodic Cyclopes the assistants of smith-god Hephaestus; as does Virgil in the Latin epic Aeneid, where he seems to equate the Hesiodic and Homeric Cyclopes.\nFrom at least the fifth century BC, Cyclopes have been associated with the island of Sicily and the volcanic Aeolian Islands.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Cyclopes"
            },
            "Q128452": {
                "name": "X-Men",
                "wikidata_aliases": [
                    "The X-Men",
                    "X Men"
                ],
                "wikidata_summary": "fictional superhero team in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q128452",
                "wikipedia_summary": "The X-Men are a superhero team appearing in American comic books published by Marvel Comics. Created by writer/editer Stan Lee and artist/co-plotter Jack Kirby, the team first appeared in The X-Men #1 (September 1963). Although initially cancelled in 1970 due to low sales, following its 1975 revival and subsequent direction under writer Chris Claremont, it became one of Marvel's most recognizable and successful franchises. They have appeared in numerous books, television shows, 20th Century Studios's X-Men films, and video games. The X-Men title may refer to the superhero team itself, the eponymous comic series, or the broader franchise including various solo titles and team books such as the New Mutants, Excalibur, and X-Force.\nIn the Marvel Universe, mutants are humans who are born with a genetic trait called the X-gene which grants them natural superhuman abilities, generally manifesting during puberty. Due to their differences from the majority of humanity, mutants are subject to prejudice and discrimination; many X-Men stories feature social commentary on bigotry, justice, and other political themes. The X-Men have fought against a variety of enemies, including villainous mutants, human bigots, supervillains, mystical threats, extraterrestrials, and malevolent artificial intelligence. In most iterations of the team, they are led by their founder Charles 'Professor X' Xavier, a powerful telepath who runs a school for mutant children out of his mansion in Westchester, New York, which secretly is also the headquarters of the X-Men. Their stories have frequently involved Magneto, a powerful mutant with control over magnetic fields, who is depicted as an old friend of and foil to Xavier, variously acting as an adversary or as an ally.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Men"
            },
            "Q128723": {
                "name": "Wild type",
                "wikidata_aliases": [],
                "wikidata_summary": "phenotype of the typical form of a species as it occurs in nature. Most prevalent allele – i.e., the one with the highest gene frequency – is the one deemed as wild type",
                "wikidata_url": "https://www.wikidata.org/wiki/Q128723",
                "wikipedia_summary": "The wild type (WT) is the phenotype of the typical form of a species as it occurs in nature. Originally, the wild type was conceptualized as a product of the standard 'normal' allele at a locus, in contrast to that produced by a non-standard, 'mutant' allele.  'Mutant' alleles can vary to a great extent, and even become the wild type if a genetic shift occurs within the population.  Continued advancements in genetic mapping technologies have created a better understanding of how mutations occur and interact with other genes to alter phenotype. It is now appreciated that most or all gene loci exist in a variety of allelic forms, which vary in frequency throughout the geographic range of a species, and that a uniform wild type does not exist. In general, however, the most prevalent allele – i.e., the one with the highest gene frequency – is the one deemed wild type.\nThe concept of wild type is useful in some experimental organisms such as fruit flies Drosophila melanogaster, in which the standard phenotypes for features such as eye color or wing shape are known to be altered by particular mutations that produce distinctive phenotypes, such as 'white eyes' or 'vestigial wings'.  Wild-type alleles are indicated with a '+' superscript, for example w+ and vg+ for red eyes and full-size wings, respectively.  Manipulation of the genes behind these traits led to the current understanding of how organisms form and how traits mutate within a population.  Research involving the manipulation of wild-type alleles has application in many fields, including fighting disease and commercial food production.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wild_type"
            },
            "Q129": {
                "name": "Thursday",
                "wikidata_aliases": [
                    "Thu",
                    "Thurs",
                    "Thur",
                    "Th"
                ],
                "wikidata_summary": "day of the week",
                "wikidata_url": "https://www.wikidata.org/wiki/Q129",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q129591": {
                "name": "Hugh Jackman",
                "wikidata_aliases": [
                    "Hugh Michael Jackman"
                ],
                "wikidata_summary": "Australian actor (born 1968)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q129591",
                "wikipedia_summary": "Hugh Michael Jackman  (born 12 October 1968) is an Australian actor. Beginning in theatre and television, Jackman landed his breakthrough role as Wolverine in the X-Men film series (2000–2017, 2024), a role that earned him the Guinness World Record for 'longest career as a live-action Marvel character', until 2022. Prominent on both screen and stage, he has received various accolades, including a Primetime Emmy Award, a Grammy Award and two Tony Awards, along with nominations for an Academy Award and a British Academy Film Award. Jackman was appointed a Companion of the Order of Australia in 2019.\nJackman has headlined films in various genres, including the romantic comedy Kate & Leopold (2001), the action-horror Van Helsing (2004), the drama The Prestige (2006), the period romance Australia (2008), the musical Les Misérables (2012), the thriller Prisoners (2013), the musical The Greatest Showman (2017), the political drama The Front Runner (2018), and the crime drama Bad Education (2019). For his role as Jean Valjean in Les Misérables, he was nominated for the Academy Award for Best Actor and won a Golden Globe Award for Best Actor, and for The Greatest Showman soundtrack, Jackman received a Grammy Award for Best Compilation Soundtrack. He also provided voice roles in the animated films Flushed Away, Happy Feet (both 2006), and Rise of the Guardians (2012).\nJackman is also known for his early theatre roles in the original Australian productions of Beauty and the Beast as Gaston in 1995 and Sunset Boulevard as Joe Gillis in 1996. He earned a Laurence Olivier Award nomination for his performance as Curly McLain in the West End revival of Oklahoma! in 1998. In 2002, he was in an Off-Broadway concert of Carousel as Billy Bigelow. On Broadway, he won the 2004 Tony Award and Drama Desk Award for Best Actor in a Musical for his role of Peter Allen in The Boy from Oz. From 2021 to 2023 Jackman starred as con man Harold Hill in the Broadway revival of the musical The Music Man, earning another Tony Award nomination. A four-time host of the Tony Awards, he won an Emmy Award for hosting the 2005 ceremony. He also hosted the 81st Academy Awards in 2009.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hugh_Jackman"
            },
            "Q1296491": {
                "name": "National Geospatial-Intelligence Agency",
                "wikidata_aliases": [
                    "NGA",
                    "NIMA",
                    "National Imagery and Mapping Agency"
                ],
                "wikidata_summary": "intelligence agency of the United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1296491",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1303150": {
                "name": "compounding",
                "wikidata_aliases": [
                    "pharmaceutical compounding",
                    "Compounding",
                    "drug compounding"
                ],
                "wikidata_summary": "creation of a particular pharmaceutical product to fit the unique need of a patient",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1303150",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q13138161": {
                "name": "Suzanne",
                "wikidata_aliases": [
                    "Suzanne (given name)",
                    "Suzanne (first name)"
                ],
                "wikidata_summary": "female given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13138161",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q132": {
                "name": "Sunday",
                "wikidata_aliases": [
                    "Sun",
                    "Su",
                    "X"
                ],
                "wikidata_summary": "day of the week",
                "wikidata_url": "https://www.wikidata.org/wiki/Q132",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1321": {
                "name": "Spanish",
                "wikidata_aliases": [
                    "es",
                    "Castilian",
                    "Spanish language",
                    "Castilian language",
                    "Español"
                ],
                "wikidata_summary": "Romanic language originating in the Iberian Peninsula",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1321",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q132537": {
                "name": "J. Robert Oppenheimer",
                "wikidata_aliases": [
                    "Julius Robert Oppenheimer",
                    "J. Robert Oppenheimer"
                ],
                "wikidata_summary": "American theoretical physicist, known as 'father of the atomic bomb'",
                "wikidata_url": "https://www.wikidata.org/wiki/Q132537",
                "wikipedia_summary": "J. Robert Oppenheimer  (born Julius Robert Oppenheimer;  OP-ən-hy-mər; April 22, 1904 – February 18, 1967) was an American theoretical physicist. He was director of the Manhattan Project's Los Alamos Laboratory during World War II and is often called the 'father of the atomic bomb'.\nBorn in New York City, Oppenheimer earned a bachelor of arts degree in chemistry from Harvard University in 1925 and a doctorate in physics from the University of Göttingen in Germany in 1927, where he studied under Max Born. After research at other institutions, he joined the physics department at the University of California, Berkeley, where he became a full professor in 1936. He made significant contributions to theoretical physics, including achievements in quantum mechanics and nuclear physics such as the Born–Oppenheimer approximation for molecular wave functions, work on the theory of electrons and positrons, the Oppenheimer–Phillips process in nuclear fusion, and early work on quantum tunneling. With his students, he also made contributions to the theory of neutron stars and black holes, quantum field theory, and the interactions of cosmic rays.\nIn 1942, Oppenheimer was recruited to work on the Manhattan Project, and in 1943 he was appointed director of the project's Los Alamos Laboratory in New Mexico, tasked with developing the first nuclear weapons. His leadership and scientific expertise were instrumental in the project's success. On July 16, 1945, he was present at the first test of the atomic bomb, Trinity. In August 1945, the weapons were used against Japan in the bombings of Hiroshima and Nagasaki, the only use of nuclear weapons in an armed conflict.\nIn 1947, Oppenheimer became the director of the Institute for Advanced Study in Princeton, New Jersey, and chaired the influential General Advisory Committee of the newly created U.S. Atomic Energy Commission. He lobbied for international control of nuclear power to avert nuclear proliferation and a nuclear arms race with the Soviet Union. He opposed the development of the hydrogen bomb during a 1949–1950 governmental debate on the question and subsequently took positions on defense-related issues that provoked the ire of some U.S. government and military factions. During the second Red Scare, Oppenheimer's stances, together with his past associations with the Communist Party USA, led to the revocation of his security clearance, following a 1954 security hearing. This effectively ended his access to the government's atomic secrets and his career as a nuclear physicist. Although stripped of his direct political influence, Oppenheimer nevertheless continued to lecture, write, and work in physics. In 1963, as a gesture of political rehabilitation, he was given the Enrico Fermi Award. He died four years later, of throat cancer. In 2022, the federal government vacated the 1954 revocation of his security clearance.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer"
            },
            "Q13371": {
                "name": "Harvard University",
                "wikidata_aliases": [
                    "Harvard",
                    "University of Harvard",
                    "Harvard Graduate School",
                    "harvard.edu",
                    "Harvard university",
                    "Kremlin on the Charles",
                    "New College, Cambridge, Massachusetts",
                    "Harvard U.",
                    "Harvard Univ.",
                    "Harvard.edu"
                ],
                "wikidata_summary": "private university in Cambridge, Massachusetts",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13371",
                "wikipedia_summary": "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States. Its influence, wealth, and rankings have made it one of the most prestigious universities in the world.\nHarvard's founding was authorized by the Massachusetts colonial legislature, 'dreading to leave an illiterate ministry to the churches'. Though never formally affiliated with any denomination, in its early years Harvard College primarily trained Congregational clergy. Its curriculum and student body were gradually secularized during the 18th century. By the 19th century, Harvard emerged as the most prominent academic and cultural institution among the Boston elite. Following the American Civil War, under President Charles William Eliot's long tenure (1869–1909), the college developed multiple affiliated professional schools that transformed the college into a modern research university. In 1900, Harvard co-founded the Association of American Universities. James B. Conant led the university through the Great Depression and World War II, and liberalized admissions after the war.\nThe university is composed of ten academic faculties and the Harvard Radcliffe Institute. The Faculty of Arts and Sciences offers study in a wide range of undergraduate and graduate academic disciplines, and other faculties offer only graduate degrees, including professional degrees. Harvard has three main campuses:\nthe 209-acre (85 ha) Cambridge campus centered on Harvard Yard; an adjoining campus immediately across Charles River in the Allston neighborhood of Boston; and the medical campus in Boston's Longwood Medical Area. Harvard's endowment is valued at $50.7 billion, making it the wealthiest academic institution in the world.  Endowment income enables the undergraduate college to admit students regardless of financial need and provide financial aid with no loans. According to the American Library Association, Harvard University has the fourth-largest library by volumes held in the United States.\nHarvard alumni, faculty, and researchers have included 188 living billionaires, 8 U.S. presidents, numerous heads of state, founders of notable companies, Nobel laureates, Fields Medalists, members of Congress, MacArthur Fellows, Rhodes Scholars, Marshall Scholars, Turing Award Recipients, Pulitzer Prize winners, and Fulbright Scholars; by most metrics, Harvard ranks among the top globally in each of these categories. Additionally, students and alumni have won 10 Academy Awards and 110 Olympic medals (46 gold).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Harvard_University"
            },
            "Q13420339": {
                "name": "Earth Alliance",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional Babylon 5 government",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13420339",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1348989": {
                "name": "Earth observation",
                "wikidata_aliases": [
                    "EO"
                ],
                "wikidata_summary": "scientific field based on gathering information about planet Earth's physical, chemical and biological systems via remote sensing technologies",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1348989",
                "wikipedia_summary": "Earth observation (EO) is the gathering of information about the physical, chemical, and biological systems of the planet Earth. It can be performed via remote-sensing technologies (Earth observation satellites) or through direct-contact sensors in ground-based or airborne platforms (such as weather stations and weather balloons, for example). \nAccording to the Group on Earth Observations (GEO), the concept encompasses both 'space-based or remotely-sensed data, as well as ground-based or in situ data'. Earth observation is used to monitor and assess the status of and changes in natural and built environments.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Earth_observation"
            },
            "Q13634866": {
                "name": "Kingsguard",
                "wikidata_aliases": [
                    "White Swords",
                    "White Cloaks"
                ],
                "wikidata_summary": "A Song of Ice and Fire organization",
                "wikidata_url": "https://www.wikidata.org/wiki/Q13634866",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1392744": {
                "name": "The Wolf of Wall Street",
                "wikidata_aliases": [
                    "Wolf of Wall Street"
                ],
                "wikidata_summary": "2013 film directed by Martin Scorsese",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1392744",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1412141": {
                "name": "List of The Hunger Games characters",
                "wikidata_aliases": [],
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1412141",
                "wikipedia_summary": "The following is a list of characters in The Hunger Games novels, a series of young adult science fiction novels by Suzanne Collins whose original trilogy was later adapted into a series of feature films.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_The_Hunger_Games_characters"
            },
            "Q14136446": {
                "name": "75th Hunger Games",
                "wikidata_aliases": [
                    "Quarter Quell",
                    "3rd  Quarter Quell",
                    "Third  Quarter Quell"
                ],
                "wikidata_summary": "fictional event",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14136446",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q14429969": {
                "name": "Coriolanus Snow",
                "wikidata_aliases": [
                    "President Snow"
                ],
                "wikidata_summary": "Hunger Games character",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14429969",
                "wikipedia_summary": "Coriolanus 'Coryo' Snow is a character in The Hunger Games franchise, a book series and film series. In the original book trilogy (2008–2010), President Snow is a fascist dictator who leads the counter-revolutionary movement. In the prequel, The Ballad of Songbirds and Snakes (2020), he is an ambitious, intelligent and charismatic 18-year-old. He is assigned the role of mentoring a girl competing in the tenth Hunger Games—singer Lucy Gray Baird—and forms a relationship with her.\nIn the film adaptations, President Snow is portrayed by Donald Sutherland. He asked to be involved in the series as he believed it would engage young viewers in the politics of revolution. Tom Blyth was cast as the younger Snow in The Ballad of Songbirds & Snakes (2023): he saw the character as progressing through three stages, from naive and ambitious to the more reserved, Sutherland-like character.\nRoses are a symbol of the Snow family, connecting Coriolanus to his mother and grandmother. He uses roses to communicate with The Hunger Games' main character, Katniss Everdeen. His signature method of eliminating his enemies is with poison. Snow is influenced by Dr. Gaul's view of state control as a necessity to prevent disorder. He initially acts to help Lucy Gray out of self-interest but develops feelings for her. Lucy Gray bears similarities to Katniss, including their musicality, home and experience in the Hunger Games.\nCritics of both the book and film disapproved of the choice to center Snow in The Ballad of Songbirds and Snakes, as it is known that he will become a villain. However, Sutherland's performance in four The Hunger Games films—which expanded the role of President Snow from the books—garnered acclaim. Sutherland was nominated for a Teen Choice Award and an MTV Movie Award.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Coriolanus_Snow"
            },
            "Q145": {
                "name": "United Kingdom",
                "wikidata_aliases": [
                    "UK",
                    "United Kingdom of Great Britain and Northern Ireland",
                    "U.K.",
                    "GBR",
                    "GB",
                    "U. K.",
                    "U K",
                    "G.B.",
                    "G. B.",
                    "G B",
                    "Great Britain",
                    "G.B.R.",
                    "G B R",
                    "Britain",
                    "Great Britain and Northern Ireland",
                    "The United Kingdom of Great Britain and Northern Ireland",
                    "The UK"
                ],
                "wikidata_summary": "country in north-west Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q145",
                "wikipedia_summary": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a country in Northwestern Europe, off the coast of the continental mainland. It comprises England, Scotland, Wales, and Northern Ireland. The UK includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea, and the Irish Sea. The total area of the United Kingdom is 94,354 square miles (244,376 km2), with an estimated population of nearly 67.6 million people in 2022.\nIn 1707, the Kingdom of England (which included Wales) and the Kingdom of Scotland united under the Treaty of Union to create the Kingdom of Great Britain. The Acts of Union 1800 incorporated the Kingdom of Ireland to create the United Kingdom of Great Britain and Ireland in 1801. Most of Ireland seceded from the UK in 1922 as the Irish Free State, and the Royal and Parliamentary Titles Act 1927 created the present name, the United Kingdom of Great Britain and Northern Ireland.\nThe UK became the first industrialised country and was the world's foremost power for the majority of the 19th and early 20th centuries, particularly during the 'Pax Britannica' between 1815 and 1914. At its height in the 1920s, the British Empire encompassed almost a quarter of the world's landmass and population, and was the largest empire in history. However, its involvement in the First World War and the Second World War damaged Britain's economic power and a global wave of decolonisation led to the independence of most British colonies. British influence can be observed in the legal and political systems of many of its former colonies, and British culture remains globally influential, particularly in language, literature, music and sport. English is the world's most widely spoken language and the third-most spoken native language.\nThe United Kingdom is a constitutional monarchy and parliamentary democracy. The UK has three distinct jurisdictions; England and Wales, Scotland and Northern Ireland. Since 1998, Scotland, Wales and Northern Ireland have their own devolved governments and legislatures while England is governed directly by the UK Government. The capital and largest city of the United Kingdom is London. Other major cities include Birmingham, Liverpool, Nottingham, Sheffield, Bristol, Glasgow and Leicester. Scotland, Wales and Northern Ireland's national capital cities are Edinburgh, Cardiff and Belfast, respectively.\nThe UK has the world's sixth-largest economy by nominal gross domestic product (GDP), and the ninth-largest by purchasing power parity. It is a recognised nuclear state and is ranked fourth globally in military expenditure. The UK has been a permanent member of the UN Security Council since its first session in 1946. It is a member of the Commonwealth of Nations, the Council of Europe, the G7, the OECD, NATO, the Five Eyes, AUKUS and the CPTPP.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/United_Kingdom"
            },
            "Q14620": {
                "name": "Optics",
                "wikidata_aliases": [],
                "wikidata_summary": "branch of physics concerning light",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14620",
                "wikipedia_summary": "Optics is the branch of physics that studies the behaviour and properties of light, including its interactions with matter and the construction of instruments that use or detect it. Optics usually describes the behaviour of visible, ultraviolet, and infrared light. Light is a type of electromagnetic radiation, and other forms of electromagnetic radiation such as X-rays, microwaves, and radio waves exhibit similar properties.\nMost optical phenomena can be accounted for by using the classical electromagnetic description of light, however complete electromagnetic descriptions of light are often difficult to apply in practice. Practical optics is usually done using simplified models. The most common of these, geometric optics, treats light as a collection of rays that travel in straight lines and bend when they pass through or reflect from surfaces. Physical optics is a more comprehensive model of light, which includes wave effects such as diffraction and interference that cannot be accounted for in geometric optics. Historically, the ray-based model of light was developed first, followed by the wave model of light. Progress in electromagnetic theory in the 19th century led to the discovery that light waves were in fact electromagnetic radiation.\nSome phenomena depend on light having both wave-like and particle-like properties. Explanation of these effects requires quantum mechanics. When considering light's particle-like properties, the light is modelled as a collection of particles called 'photons'. Quantum optics deals with the application of quantum mechanics to optical systems.\nOptical science is relevant to and studied in many related disciplines including astronomy, various engineering fields, photography, and medicine (particularly ophthalmology and optometry, in which it is called physiological optics). Practical applications of optics are found in a variety of technologies and everyday objects, including mirrors, lenses, telescopes, microscopes, lasers, and fibre optics.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Optics"
            },
            "Q1465133": {
                "name": "time limit",
                "wikidata_aliases": [
                    "deadline",
                    "ddl"
                ],
                "wikidata_summary": "point in time by which an objective or task must be accomplished",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1465133",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1467960": {
                "name": "mbira",
                "wikidata_aliases": [
                    "African hand piano",
                    "hand piano",
                    "kalimba",
                    "kisaanj",
                    "kututeng",
                    "lamellaphone",
                    "lamellophone",
                    "likembe",
                    "linguaphone",
                    "marimba",
                    "marímbula",
                    "mbila",
                    "nsansi",
                    "sandza",
                    "sansa",
                    "sansi",
                    "thumb piano"
                ],
                "wikidata_summary": "African musical instrument of the lamellophone family",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1467960",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q14864997": {
                "name": "Investment management",
                "wikidata_aliases": [
                    "asset management",
                    "portfolio management",
                    "financial asset management"
                ],
                "wikidata_summary": "professional asset management of securities for the benefit of investors",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14864997",
                "wikipedia_summary": "Investment management (sometimes referred to more generally as asset management) is the professional asset management of various securities, including shareholdings, bonds, and other assets, such as real estate, to meet specified investment goals for the benefit of investors. Investors may be institutions, such as insurance companies, pension funds, corporations, charities, educational establishments, or private investors, either directly via investment contracts/mandates or via collective investment schemes like mutual funds, exchange-traded funds, or Real estate investment trusts.\nThe term investment management is often used to refer to the management of investment funds, most often specializing in private and public equity, real assets, alternative assets, and/or bonds. The more generic term asset management may refer to management of assets not necessarily primarily held for investment purposes.\nMost investment management clients can be classified as either institutional or retail/advisory, depending on if the client is an institution or private individual/family trust. Investment managers who specialize in advisory or discretionary management on behalf of (normally wealthy) private investors may often refer to their services as money management or portfolio management within the context of 'private banking'. Wealth management by financial advisors takes a more holistic view of a client, with allocations to particular asset management strategies.\nThe term fund manager, or investment adviser in the United States, refers to both a firm that provides investment management services and to the individual who directs fund management decisions.\nThe five largest asset managers are holding 22.7 percent of the externally held assets. Nevertheless, the market concentration, measured via the Herfindahl-Hirschmann Index, could be estimated at 173.4 in 2018, showing that the industry is not very concentrated.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Investment_management"
            },
            "Q14917756": {
                "name": "Lorenza Izzo",
                "wikidata_aliases": [
                    "Lorenza Francesca Izzo Parsons"
                ],
                "wikidata_summary": "Chilean actress and model",
                "wikidata_url": "https://www.wikidata.org/wiki/Q14917756",
                "wikipedia_summary": "Lorenza Francesca Izzo Parsons (; Spanish: [loˈɾensa ˈiso]; born September 19, 1989) is a Chilean actress and model. She has appeared in films, including Aftershock (2012), The Green Inferno (2013),  Knock Knock (2015), and Quentin Tarantino's Once Upon a Time in Hollywood (2019).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lorenza_Izzo"
            },
            "Q15208946": {
                "name": "Kamala Khan",
                "wikidata_aliases": [
                    "Ms. Marvel"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q15208946",
                "wikipedia_summary": "Kamala Khan is a superheroine who appears in American comic books published by Marvel Comics. Created by editors Sana Amanat and Stephen Wacker, writer G. Willow Wilson, and artists Adrian Alphona and Jamie McKelvie, Kamala is Marvel's first major Muslim protagonist character and South Asian American personality with her own comic book. In the Marvel Universe, she is a teenage Pakistani-American from Jersey City, New Jersey with body-morphing abilities who discovers that she has Inhuman genes in the aftermath of the 'Inhumanity' storyline. She assumes the mantle of Ms. Marvel from her idol, Carol Danvers, after Danvers becomes Captain Marvel.\nKamala made her first appearance in a background cameo in Captain Marvel #14 (August 2013), before appearing in the anthology All-New Marvel Now! Point One #1 (January 2014) and starring in the solo series Ms. Marvel from February 2014 to March 2019, in a second solo series, The Magnificent Ms. Marvel, from October 2019 to May 2021, and in three Ms. Marvel limited series from November 2019 to January 2023. From 2016 to 2021, the character played a supporting role in the team series Champions and Secret Warriors; Kamala was also the focus of the 2020 event series 'Outlawed' after being rendered comatose and made the face of 'Kamala's Law', a vigilante minimum age law. An alternate future widowed version of the character named Kamala Carrelli, known by the vigilante name Khan, appears as a main character in the team series Exiles, published from April 2018 to March 2019. Following her solo series' conclusion, Kamala became a reoccurring character in The Amazing Spider-Man (2022), culminating with her death in issue #26 of that series in May 2023. She was then resurrected in the July 2023 X-Men Hellfire Gala storyline where it was revealed that she was an Inhuman/mutant hybrid, synergetic with her MCU adaptation. From 2023 to 2024, Kamala's mutant status was explored in two limited series and the main ongoing X-Men series. Starting in July 2024, Kamala will headline in the second volume of NYX with other young mutants as they adapt to life in New York City in the post-Krakoan Age.\nMarvel's announcement that a Muslim character would headline a comic book attracted widespread attention, with The New York Times Best Seller Ms. Marvel: No Normal winning the 2015 Hugo Award for best graphic story. The character and her solo series have received an overwhelmingly positive critical reception, with strong sales for her solo series. However, her 2019 and 2023 deaths in Champions and The Amazing Spider-Man, respectively, have been criticized as fridging.\nIman Vellani plays the character in the Marvel Cinematic Universe (MCU) miniseries Ms. Marvel, the attraction Avengers: Quantum Encounter (both 2022), the film The Marvels (2023), and the animated series Marvel Zombies (2024); unlike the comic books, Kamala is reimagined as a latent mutant who uses a magical bangle to create glowing constructs out of hard light. From 2016 to 2019, the character was voiced by Kathreen Khavari in animated series such as Avengers Assemble, Marvel Rising, and Spider-Man. She was voiced by Sandra Saad in the video game Marvel's Avengers (2020) and the animated series Spidey and His Amazing Friends (2021).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kamala_Khan"
            },
            "Q152098": {
                "name": "Fantastic Four",
                "wikidata_aliases": [
                    "Fantastic Four"
                ],
                "wikidata_summary": "fictional superhero team",
                "wikidata_url": "https://www.wikidata.org/wiki/Q152098",
                "wikipedia_summary": "The Fantastic Four is a superhero team appearing in American comic books published by Marvel Comics. The team debuted in The Fantastic Four #1 (cover dated November 1961), helping usher in a new level of realism in the medium. It was the first superhero team created by artist/co-plotter Jack Kirby and editor/co-scripter Stan Lee, and through this title that the 'Marvel method' style of production came into prominence.\nThe four characters traditionally associated with the Fantastic Four, who gained superpowers after exposure to cosmic rays during a scientific mission to outer space, are: Mister Fantastic (Reed Richards), a scientific genius and the leader of the group, who can stretch his body into incredible lengths and shapes; the Invisible Woman (Susan 'Sue' Storm-Richards), Reed's girlfriend and later wife, who can render herself invisible and project powerful invisible force fields and blasts; the Human Torch (Johnny Storm), Sue's younger brother, who can generate flames, surround himself with them and fly; and the monstrous Thing (Ben Grimm), their grumpy but benevolent friend, a former college football star, Reed's college roommate and a skilled pilot, who possesses tremendous superhuman strength, durability and endurance due to his stone-like flesh.\nSince their 1961 introduction, the Fantastic Four has been portrayed as a somewhat dysfunctional, yet loving, family. Breaking convention with other comic archetypes, the members squabbled, held grudges both deep and petty, and eschewed anonymity or secret identities in favor of celebrity status. They are also well known for their recurring encounters with characters such as the villainous monarch Doctor Doom; the planet-devouring Galactus; the Kree Empire's ruthless and tyrannical enforcer Ronan the Accuser; the Negative Zone's ruler Annihilus; the sea-dwelling prince Namor; the spacefaring Silver Surfer; the Skrull warrior Kl'rt; and the Molecule Man.\nThe Fantastic Four have been adapted into other media, including several video games, animated series, and live-action films.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Fantastic_Four"
            },
            "Q1535153": {
                "name": "Superhero film",
                "wikidata_aliases": [
                    "superhero movie",
                    "superhero motion picture"
                ],
                "wikidata_summary": "film genre",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1535153",
                "wikipedia_summary": "A superhero film is a film that focuses on superheroes and their actions. Superheroes are individuals who usually possess superhuman abilities and are dedicated to protecting the public. These films typically feature action, adventure, fantasy, or science fiction elements. The first film about a particular character often focuses on the hero's origin story. It also frequently introduces the hero's nemesis. (See also: supervillain or archnemesis.)\nMany superhero films are based on superhero comics. By contrast, films such as the Ultraman, Kamen Rider, and Super Sentai franchises, the RoboCop series, The Meteor Man, the Unbreakable film series, Hancock, Darkman and They Call Me Jeeg, were either based on TV shows or produced as original projects for the screen. While The Green Hornet is based primarily on the original radio series and its 1960s television adaptation, both Underdog and The Powerpuff Girls are based on animated television series. Anime superhero films are based on manga and television shows.\nThe highest-grossing superhero film franchises (according to the box office income) since 1967 are Tsuburaya Productions' Ultra Series, Toei Company's Kamen Rider and Super Sentai, New Line Cinema's Blade, 20th Century Fox's X-Men, Sony Pictures' Spider-Man trilogy directed by Sam Raimi, and the Amazing Spider-Man duology directed by Marc Webb, Pixar's The Incredibles, Christopher Nolan's Dark Knight Trilogy, the Marvel Cinematic Universe (MCU), and the DC Extended Universe (DCEU). On its own, the superhero film has become a popular genre of film, earning over $28 billion for Marvel alone.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Superhero_film"
            },
            "Q15361747": {
                "name": "2012–14 Romanian protests against shale gas",
                "wikidata_aliases": [],
                "wikidata_summary": "",
                "wikidata_url": "https://www.wikidata.org/wiki/Q15361747",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q153723": {
                "name": "Inglourious Basterds",
                "wikidata_aliases": [],
                "wikidata_summary": "2009 film directed by Quentin Tarantino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q153723",
                "wikipedia_summary": "Inglourious Basterds is a 2009 historical war comedy-drama film written and directed by Quentin Tarantino, starring Brad Pitt, Christoph Waltz, Michael Fassbender, Eli Roth, Diane Kruger, Daniel Brühl, Til Schweiger and Mélanie Laurent. The film tells an alternate history story of two converging plots to assassinate Nazi Germany's leadership at a Paris cinema—one through a British operation largely carried out by a team of Jewish American soldiers led by First Lieutenant Aldo Raine (Pitt), and another by French Jewish cinema proprietor Shosanna Dreyfus (Laurent) who seeks to avenge her murdered family. Both are faced against Hans Landa (Waltz), an SS colonel with a fearsome reputation of hunting Jews. The title was inspired by Italian director Enzo G. Castellari's 1978 Euro War film The Inglorious Bastards, though Tarantino's film is not a remake of it.\nTarantino wrote the script in 1998, but struggled with the ending and chose instead to direct the two-part film Kill Bill. After directing Death Proof in 2007, Tarantino returned to work on Inglourious Basterds. A co-production of the United States and Germany, the film began principal photography in October 2008 and was filmed in Germany and France with a $70 million production budget. It premiered on May 20, 2009, at the 62nd Cannes Film Festival, and received a wide release in theaters in the United States and Europe in August 2009 by the Weinstein Company and Universal Pictures.\nInglourious Basterds grossed over $321.5 million in theaters worldwide, making it Tarantino's highest-grossing film to that point, until it was surpassed in box office by Django Unchained (2012) and Once Upon a Time in Hollywood (2019). The film received positive reviews, with Waltz's performance as Hans Landa being singled out for praise, but some criticized the historical liberties taken. It also won multiple awards and nominations, among them eight Academy Award nominations (including Best Picture, Best Director and Best Original Screenplay). For his role as Landa, Waltz won the Cannes Film Festival's Best Actor Award, as well as the BAFTA, Screen Actors Guild, Critics' Choice, Golden Globe, and Academy Award for Best Supporting Actor.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Inglourious_Basterds"
            },
            "Q154430": {
                "name": "Anxiety",
                "wikidata_aliases": [
                    "uneasiness and stomach spinning",
                    "anxiety, uneasiness and worry"
                ],
                "wikidata_summary": "unpleasant complex combination of emotions that includes fear, apprehension and worry, and is often accompanied by physical sensations such as palpitations, nausea, chest pain and/or shortness of breath",
                "wikidata_url": "https://www.wikidata.org/wiki/Q154430",
                "wikipedia_summary": "Anxiety is an emotion which is characterised by an unpleasant state of inner turmoil and includes feelings of dread over anticipated events. Anxiety is different from fear in that fear is defined as the emotional response to a present threat, whereas anxiety is the anticipation of a future one. It is often accompanied by nervous behavior such as pacing back and forth, somatic complaints, and rumination.\nAnxiety is a feeling of uneasiness and worry, usually generalized and unfocused as an overreaction to a situation that is only subjectively seen as menacing. It is often accompanied by muscular tension, restlessness, fatigue, inability to catch one's breath, tightness in the abdominal region, nausea, and problems in concentration. Anxiety is closely related to fear, which is a response to a real or perceived immediate threat (fight-or-flight response); anxiety involves the expectation of a future threat including dread. People facing anxiety may withdraw from situations which have provoked anxiety in the past.\nThe emotion of anxiety can persist beyond the developmentally appropriate time-periods in response to specific events, and thus turning into one of the multiple anxiety disorders (e.g. generalized anxiety disorder, panic disorder). The difference between anxiety disorder (as mental disorder) and anxiety (as normal emotion), is that people with an anxiety disorder experience anxiety most of the days during approximately 6 months, or even during shorter time-periods in children. Anxiety disorders are among the most persistent mental problems and often last decades. Anxiety can also be experienced within other mental disorders, e.g., obsessive-compulsive disorder, post-traumatic stress disorder.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Anxiety"
            },
            "Q155450": {
                "name": "Yukio",
                "wikidata_aliases": [
                    "Yukio"
                ],
                "wikidata_summary": "asteroid",
                "wikidata_url": "https://www.wikidata.org/wiki/Q155450",
                "wikipedia_summary": "Yukio  is a masculine Japanese given name.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Yukio"
            },
            "Q155904": {
                "name": "Aconitum",
                "wikidata_aliases": [
                    "wolf's bane",
                    "leopard's bane",
                    "mousebane",
                    "wolfsbane",
                    "aconite",
                    "monkshood",
                    "devil's helmet",
                    "blue rocket"
                ],
                "wikidata_summary": "genus of plants",
                "wikidata_url": "https://www.wikidata.org/wiki/Q155904",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q156907": {
                "name": "Fraxinus excelsior",
                "wikidata_aliases": [
                    "Ash",
                    "European Ash",
                    "ash",
                    "ash tree"
                ],
                "wikidata_summary": "species of plant",
                "wikidata_url": "https://www.wikidata.org/wiki/Q156907",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q157031": {
                "name": "foundation",
                "wikidata_aliases": [
                    "charitable foundation",
                    "foundations"
                ],
                "wikidata_summary": "type of nonprofit organization",
                "wikidata_url": "https://www.wikidata.org/wiki/Q157031",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1570672": {
                "name": "Team 10",
                "wikidata_aliases": [],
                "wikidata_summary": "organization of architect",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1570672",
                "wikipedia_summary": "Team 10 – just as often referred to as Team X or Team Ten – was a group of architects and other invited participants who assembled starting in July 1953 at the 9th Congress of the International Congresses of Modern Architecture (CIAM) and created a schism within CIAM by challenging its doctrinaire approach to urbanism.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Team_10"
            },
            "Q157652": {
                "name": "Sagittaria",
                "wikidata_aliases": [
                    "swamp potato",
                    "wapato"
                ],
                "wikidata_summary": "genus of plants",
                "wikidata_url": "https://www.wikidata.org/wiki/Q157652",
                "wikipedia_summary": "Sagittaria is a genus of about 30 species of aquatic plants whose members go by a variety of common names, including arrowhead, duck potato, swamp potato, tule potato, and wapato. Most are native to South, Central, and North America, but there are also some from Europe, Africa, and Asia.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sagittaria"
            },
            "Q159347": {
                "name": "Steve McQueen",
                "wikidata_aliases": [
                    "King of Cool",
                    "Terrence Stephen McQueen"
                ],
                "wikidata_summary": "American actor (1930–1980)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q159347",
                "wikipedia_summary": "Terrence Stephen McQueen (March 24, 1930 – November 7, 1980) was an American actor and racing driver. His antihero persona, emphasized during the height of the counterculture of the 1960s, made him a top box-office draw for his films of the 1960s and 1970s. He was nicknamed the 'King of Cool' and used the alias Harvey Mushman in motor races.\nMcQueen received an Academy Award nomination for his role in The Sand Pebbles (1966). His other popular films include The Cincinnati Kid (1965), Nevada Smith (1966), The Thomas Crown Affair (1968), Bullitt (1968), The Getaway (1972) and Papillon (1973). In addition, he starred in the all-star ensemble films The Magnificent Seven (1960), The Great Escape (1963) and The Towering Inferno (1974).\nIn 1974, McQueen became the highest-paid movie star in the world, although he did not act in film for another four years. He was combative with directors and producers, but his popularity placed him in high demand and enabled him to command the largest salaries.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Steve_McQueen"
            },
            "Q159846": {
                "name": "Paramount Pictures",
                "wikidata_aliases": [
                    "Paramount Pictures Corporation",
                    "Paramount",
                    "Paramount Filmed Entertainment"
                ],
                "wikidata_summary": "American film studio",
                "wikidata_url": "https://www.wikidata.org/wiki/Q159846",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q160117": {
                "name": "Broker",
                "wikidata_aliases": [],
                "wikidata_summary": "person who arranges transactions between a buyer and a seller, and gets a commission when the deal is executed",
                "wikidata_url": "https://www.wikidata.org/wiki/Q160117",
                "wikipedia_summary": "A broker is a person or firm who arranges transactions between a buyer and a seller. This may be done for a commission when the deal is executed. A broker who also acts as a seller or as a buyer becomes a principal party to the deal. Neither role should be confused with that of an agent—one who acts on behalf of a principal party in a deal.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Broker"
            },
            "Q161714": {
                "name": "Orchis",
                "wikidata_aliases": [],
                "wikidata_summary": "genus of plants",
                "wikidata_url": "https://www.wikidata.org/wiki/Q161714",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q16227466": {
                "name": "Sofía Sánchez",
                "wikidata_aliases": [],
                "wikidata_summary": "Argentine synchronized swimmer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16227466",
                "wikipedia_summary": "Sofía Sánchez (born 23 August 1989) is an Argentine synchronized swimmer.\nSofía competed in the women's duet at the 2012 Summer Olympics with her twin sister Etel and finished in 22nd place. She also competed at the 2016 Summer Olympics with her sister and finished in 19th place. She and Etel were born as a set of triplets with their brother Thomas who plays volleyball.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sof%C3%ADa_S%C3%A1nchez"
            },
            "Q16279078": {
                "name": "Marty",
                "wikidata_aliases": [
                    "Marty (given name)",
                    "Marty (first name)"
                ],
                "wikidata_summary": "unisex given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16279078",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q16296": {
                "name": "Patrick Stewart",
                "wikidata_aliases": [
                    "Sir Patrick Stewart",
                    "Patrick Hewes Stewart"
                ],
                "wikidata_summary": "British actor (born 1940)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16296",
                "wikipedia_summary": "Sir Patrick Stewart  (born 13 July 1940) is an English actor whose career has spanned seven decades in theatre, film, television and video games. He has received accolades throughout his career including two Laurence Olivier Awards and a Grammy Award, as well as nominations for a Tony Award, three Golden Globe Awards, four Emmy Awards, and three Screen Actors Guild Awards. He received a star on the Hollywood Walk of Fame in 1996 and was knighted by Queen Elizabeth II for services to drama in 2010.\nIn 1966, Stewart became a member of the Royal Shakespeare Company. He made his Broadway theatre debut in 1971 in a production of A Midsummer Night's Dream. In 1979, he received the Laurence Olivier Award for Best Actor in a Supporting Role for his performance in Antony and Cleopatra in the West End. His first television role was in Coronation Street in 1967. His first major screen roles were in Fall of Eagles (1974), I, Claudius (1976) and Tinker Tailor Soldier Spy (1979). In 2008 he reprised his role as King Claudius in Hamlet and received his second Olivier Award and his first Tony Award nomination for respectively the West End and Broadway theatre productions.\nStewart gained international stardom for his leading role as Captain Jean-Luc Picard in Star Trek: The Next Generation (1987–1994), its subsequent films and Star Trek: Picard (2020–23). He starred as Captain Ahab in the USA miniseries Moby Dick (1998), Ebenezer Scrooge in TNT television film A Christmas Carol (1999) and King Henry II in the Showtime made-for-television film The Lion in Winter (2003). He also became known for his comedic appearances on sitcoms Frasier and Extras for which he received a Primetime Emmy Award for Outstanding Guest Actor in a Comedy Series nomination. He also starred as the lead of Blunt Talk (2015–2016). He currently voices Avery Bullock on American Dad!. \nStewart's first film role was in Trevor Nunn's Hedda (1975) followed by roles in John Boorman's Excalibur (1981) and David Lynch's Dune (1984). He gained further stardom when he portrayed Professor Charles Xavier in the X-Men series (2000–2014), Logan (2017) and an alternate version of the eponymous character in the Marvel Cinematic Universe film Doctor Strange in the Multiverse of Madness (2022). He has acted in films such as L.A. Story (1991), Robin Hood: Men in Tights (1993), Jeffrey (1995) and The Kid Who Would Be King (2019). He has also voiced roles in The Pagemaster (1994), The Prince of Egypt (1998), Jimmy Neutron: Boy Genius (2001), Chicken Little (2005), Gnomeo & Juliet (2011) and Ted (2012).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Patrick_Stewart"
            },
            "Q1630304": {
                "name": "Hulu",
                "wikidata_aliases": [
                    "hulu.com"
                ],
                "wikidata_summary": "American provider of on-demand Internet streaming media and Internet live TV service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1630304",
                "wikipedia_summary": "Hulu (, styled hulu in its logo) is an American subscription streaming media and content hub within the Disney+ streaming service owned by The Walt Disney Company. It was launched on October 29, 2007.\nHulu was initially established as a joint venture between News Corporation and NBCUniversal, Providence Equity, and later The Walt Disney Company, serving as an aggregation of recent episodes of television series from their respective television broadcasting. In 2010, Hulu launched a subscription service, initially branded as 'Hulu Plus', which featured full seasons of programs from the companies and other partners, and un-delayed access to new episodes. In 2017, the company launched Hulu with Live TV—an over-the-top live TV service featuring broadcast programming channels.\nIn 2011, Hulu launched its services in Japan, marking its first and only international expansion. Three years later in 2014, Hulu Japan was acquired by Nippon TV and spun off from its American counterpart.\nA beta hub of Hulu launched on Disney+ in the United States on December 6, 2023, with a full release later followed on March 27, 2024. The hub shares similarities with the Star hub that was previously launched on Disney+ in February 2021 outside the U.S. as a substitute to Hulu.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hulu"
            },
            "Q163323": {
                "name": "Roman legion",
                "wikidata_aliases": [
                    "legio",
                    "legion",
                    "Roman legions",
                    "legions"
                ],
                "wikidata_summary": "Roman military unit",
                "wikidata_url": "https://www.wikidata.org/wiki/Q163323",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q163913": {
                "name": "The Grid",
                "wikidata_aliases": [],
                "wikidata_summary": "British band",
                "wikidata_url": "https://www.wikidata.org/wiki/Q163913",
                "wikipedia_summary": "The Grid are an English electronic dance group, consisting of David Ball (formerly of Soft Cell) and Richard Norris, with guest contributions from other musicians. They are best known for the hits 'Swamp Thing', 'Texas Cowboys', 'Crystal Clear', 'Rollercoaster' and 'Floatation'.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Grid"
            },
            "Q1649": {
                "name": "Oklahoma",
                "wikidata_aliases": [
                    "OK",
                    "State of Oklahoma",
                    "Oklahoma, United States",
                    "US-OK",
                    "The Sooner State",
                    "Okla."
                ],
                "wikidata_summary": "state of the United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1649",
                "wikipedia_summary": "Oklahoma (  OHK-lə-HOH-mə; Choctaw: Oklahumma, pronounced [oklahómma]; Cherokee: ᎣᎧᎳᎰᎹ, Okalahoma, pronounced [ògàlàhǒːmã́]) is a landlocked state in the South Central region of the United States. It borders Texas to the south and west, Kansas to the north, Missouri to the northeast, Arkansas to the east, New Mexico to the west, and Colorado to the northwest. Partially in the western extreme of the Upland South, it is the 20th-most extensive and the 28th-most populous of the 50 United States. Its residents are known as Oklahomans and its capital and largest city is Oklahoma City.\nThe state's name is derived from the Choctaw words okla, 'people' and humma, which translates as 'red'.  Oklahoma is also known informally by its nickname, 'The Sooner State', in reference to the Sooners, settlers who staked their claims in formerly American Indian-owned  lands until the Indian Appropriations Act of 1889 authorized the Land Rush of 1889 opening the land to white settlement.\nWith ancient mountain ranges, prairie, mesas, and eastern forests, most of Oklahoma lies in the Great Plains, Cross Timbers, and the U.S. Interior Highlands, all regions prone to severe weather. Oklahoma is at a confluence of three major American cultural regions. Historically, it served as a government-sanctioned territory for American Indians moved from east of the Mississippi River, a route for cattle drives from Texas and related regions, and a destination for Southern settlers. There are currently 26 Native American languages spoken in Oklahoma. According to the 2020 U.S. census, 14.2 percent of Oklahomans identify as American Indians, the highest indigenous population by percentage in any state.\nA major producer of natural gas, oil, and agricultural products, Oklahoma relies on an economic base of aviation, energy, telecommunications, and biotechnology. Oklahoma City and Tulsa serve as Oklahoma's primary economic anchors, with nearly two-thirds of Oklahomans living within their metropolitan statistical areas.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Oklahoma"
            },
            "Q166419": {
                "name": "Fox",
                "wikidata_aliases": [
                    "FOX"
                ],
                "wikidata_summary": "American commercial broadcast television network",
                "wikidata_url": "https://www.wikidata.org/wiki/Q166419",
                "wikipedia_summary": "Foxes are small- to medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull; upright, triangular ears; a pointed, slightly upturned snout; and a long, bushy tail ('brush').\nTwelve species belong to the monophyletic 'true fox' group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox.\nFoxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Fox"
            },
            "Q16679546": {
                "name": "The Film",
                "wikidata_aliases": [],
                "wikidata_summary": "French film production company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16679546",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q166887": {
                "name": "Thelma Schoonmaker",
                "wikidata_aliases": [
                    "Thelma Schoonmaker-Powell"
                ],
                "wikidata_summary": "American film editor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q166887",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q16781948": {
                "name": "SAG-AFTRA",
                "wikidata_aliases": [
                    "Screen Actors Guild‐American Federation of Television and Radio Artists"
                ],
                "wikidata_summary": "American labor union governing media professionals and entertainers",
                "wikidata_url": "https://www.wikidata.org/wiki/Q16781948",
                "wikipedia_summary": "The Screen Actors Guild-American Federation of Television and Radio Artists (SAG-AFTRA, pronounced  sag-AF-trə) is an American labor union that reflects the 2012 merger of SAG (the Screen Actors Guild) and AFTRA (the American Federation of Television and Radio Artists). It represents approximately 160,000 media professionals worldwide. SAG-AFTRA is a member of the AFL-CIO, the largest federation of unions in the United States. SAG-AFTRA is also a member of the International Federation of Actors (FIA).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/SAG-AFTRA"
            },
            "Q1681822": {
                "name": "Warwolf",
                "wikidata_aliases": [
                    "War Wolf"
                ],
                "wikidata_summary": "Largest trebuchet ever made",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1681822",
                "wikipedia_summary": "The Warwolf, also known as the Loup-de-Guerre or Ludgar, is believed to have been the largest trebuchet ever made. It was created in Scotland by order of Edward I of England, during the siege of Stirling Castle in 1304, as part of the Wars of Scottish Independence. A contemporary chronicle refers to it as une engine orrible.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Warwolf"
            },
            "Q168796": {
                "name": "Spirituality",
                "wikidata_aliases": [
                    "the spiritual"
                ],
                "wikidata_summary": "philosophical and theological term",
                "wikidata_url": "https://www.wikidata.org/wiki/Q168796",
                "wikipedia_summary": "The meaning of spirituality has developed and expanded over time, and various meanings can be found alongside each other. Traditionally, spirituality referred to a religious process of re-formation which 'aims to recover the original shape of man', oriented at 'the image of God' as exemplified by the founders and sacred texts of the religions of the world. The term was used within early Christianity to refer to a life oriented toward the Holy Spirit and broadened during the Late Middle Ages to include mental aspects of life.\nIn modern times, the term both spread to other religious traditions and broadened to refer to a wider range of experiences, including a range of esoteric and religious traditions. Modern usages tend to refer to a subjective experience of a sacred dimension, and the 'deepest values and meanings by which people live', often in a context separate from organized religious institutions. This may involve belief in a supernatural realm beyond the ordinarily observable world, personal growth, a quest for an ultimate or sacred meaning, religious experience,  or an encounter with one's own 'inner dimension'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Spirituality"
            },
            "Q17042878": {
                "name": "X-Men: Apocalypse",
                "wikidata_aliases": [],
                "wikidata_summary": "2016 film directed by Bryan Singer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q17042878",
                "wikipedia_summary": "X-Men: Apocalypse is a 2016 American superhero film directed and produced by Bryan Singer and written by Simon Kinberg from a story by Singer, Kinberg, Michael Dougherty, and Dan Harris. The film is based on the fictional X-Men characters that appear in Marvel Comics. It is the sixth mainline installment in the X-Men film series and the ninth installment overall. It is the sequel to X-Men: Days of Future Past (2014) and stars James McAvoy, Michael Fassbender, Jennifer Lawrence, Oscar Isaac, Nicholas Hoult, Rose Byrne, Tye Sheridan, Sophie Turner, Olivia Munn, and Lucas Till. In the film, the ancient mutant En Sabah Nur / Apocalypse is inadvertently revived in 1983, and he plans to wipe out modern civilization and take over the world, leading the X-Men to try to stop him and defeat his team of mutants.\nThe film was announced by Singer in December 2013, with Kinberg, Dougherty, and Harris attached to develop the story. Casting began in October 2014, while principal photography commenced in April 2015 in Montreal and ended in August of the same year.\nX-Men: Apocalypse premiered in London on May 9, 2016, and was released in the United States on May 27, 2016, in RealD 3D, IMAX 3D, 4DX and Dolby Cinema formats by 20th Century Fox. The film received mixed reviews from critics. A sequel, titled Dark Phoenix, was released on June 7, 2019.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Men:_Apocalypse"
            },
            "Q170510": {
                "name": "Ian McKellen",
                "wikidata_aliases": [
                    "Sir Ian Murray McKellen",
                    "Ian Murray McKellen",
                    "Sir Ian McKellen"
                ],
                "wikidata_summary": "English actor (born 1939)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q170510",
                "wikipedia_summary": "Sir Ian Murray McKellen  (born 25 May 1939) is an English actor. With a career spanning more than sixty years, he is noted for his roles on the screen and stage in genres ranging from Shakespearean dramas and modern theatre to popular fantasy and science fiction. He is regarded as a British cultural icon and was knighted by Queen Elizabeth II in 1991. He has received numerous accolades, including a Tony Award, six Olivier Awards, and a Golden Globe Award as well as nominations for two Academy Awards, five BAFTA Awards and five Emmy Awards.\nMcKellen made his stage debut in 1961 at the Belgrade Theatre as a member of its repertory company, and in 1965 made his first West End appearance. In 1969, he was invited to join the Prospect Theatre Company to play the lead parts in Shakespeare's Richard II and Marlowe's Edward II. In the 1970s McKellen became a stalwart of the Royal Shakespeare Company and the National Theatre of Great Britain. He has earned five Olivier Awards for his roles in Pillars of the Community (1977), The Alchemist (1978), Bent (1979), Wild Honey (1984), and Richard III (1995). McKellen made his Broadway debut in The Promise (1965). He went on to receive the Tony Award for Best Actor in a Play for his role as Antonio Salieri in Amadeus (1980). He was further nominated for Ian McKellen: Acting Shakespeare (1984). He returned to Broadway in Wild Honey (1986), Dance of Death (1990), No Man's Land (2013), and Waiting for Godot (2013), the latter being a joint production with Patrick Stewart.\nMcKellen achieved worldwide fame for his film roles, including the titular King in Richard III (1995), James Whale in Gods and Monsters (1998), Magneto in the X-Men films, and Gandalf in The Lord of the Rings (2001–2003) and The Hobbit (2012–2014) trilogies. Other notable film roles include A Touch of Love (1969), Plenty (1985), Six Degrees of Separation (1993), Restoration (1995), Mr. Holmes (2015), and The Good Liar (2019).\nMcKellen came out as gay in 1988, and has since championed LGBT social movements worldwide. He was awarded the Freedom of the City of London in October 2014. McKellen is a co-founder of Stonewall, an LGBT rights lobby group in the United Kingdom, named after the Stonewall riots. He is also patron of LGBT History Month, Pride London, Oxford Pride, GAY-GLOS, LGBT Foundation and FFLAG.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ian_McKellen"
            },
            "Q171446": {
                "name": "Coral",
                "wikidata_aliases": [
                    "corall"
                ],
                "wikidata_summary": "marine invertebrates of the class Anthozoa",
                "wikidata_url": "https://www.wikidata.org/wiki/Q171446",
                "wikipedia_summary": "Corals are colonial marine invertebrates within the class Anthozoa of the phylum Cnidaria. They typically form compact colonies of many identical individual polyps. Coral species include the important reef builders that inhabit tropical oceans and secrete calcium carbonate to form a hard skeleton.\nA coral 'group' is a colony of very many genetically identical polyps. Each polyp is a sac-like animal typically only a few millimeters in diameter and a few centimeters in height. A set of tentacles surround a central mouth opening. Each polyp excretes an exoskeleton near the base. Over many generations, the colony thus creates a skeleton characteristic of the species which can measure up to several meters in size. Individual colonies grow by asexual reproduction of polyps. Corals also breed sexually by spawning: polyps of the same species release gametes simultaneously overnight, often around a full moon. Fertilized eggs form planulae, a mobile early form of the coral polyp which, when mature, settles to form a new colony.\nAlthough some corals are able to catch plankton and small fish using stinging cells on their tentacles, most corals obtain the majority of their energy and nutrients from photosynthetic unicellular dinoflagellates of the genus Symbiodinium that live within their tissues. These are commonly known as zooxanthellae and give the coral color. Such corals require sunlight and grow in clear, shallow water, typically at depths less than 60 metres (200 feet; 33 fathoms), but corals in the genus Leptoseris has been found as deep as 172 metres (564 feet; 94 fathoms). Corals are major contributors to the physical structure of the coral reefs that develop in tropical and subtropical waters, such as the Great Barrier Reef off the coast of Australia. These corals are increasingly at risk of bleaching events where polyps expel the zooxanthellae in response to stress such as high water temperature or toxins.\nOther corals do not rely on zooxanthellae and can live globally in much deeper water, such as the cold-water genus Lophelia which can survive as deep as 3,300 metres (10,800 feet; 1,800 fathoms). Some have been found as far north as the Darwin Mounds, northwest of Cape Wrath, Scotland, and others off the coast of Washington state and the Aleutian Islands.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Coral"
            },
            "Q171495": {
                "name": "mattress",
                "wikidata_aliases": [],
                "wikidata_summary": "large pad for supporting the reclining body, used as or on a bed",
                "wikidata_url": "https://www.wikidata.org/wiki/Q171495",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q171545": {
                "name": "Belfort",
                "wikidata_aliases": [],
                "wikidata_summary": "commune in Territoire de Belfort, France",
                "wikidata_url": "https://www.wikidata.org/wiki/Q171545",
                "wikipedia_summary": "Belfort (French pronunciation: [bɛlfɔʁ] ; archaic German: Beffert, Beffort) is a city in northeastern France, situated approximately 25 km (16 mi) from the Swiss border. It is the prefecture of the Territoire de Belfort.\nBelfort is 400 km (250 mi) from Paris and 55 km (34 mi) from Basel. The residents of the city are called 'Belfortains'. The city is located on the river Savoureuse, on a strategically important natural route between the Rhine and the Rhône – the Belfort Gap (Trouée de Belfort) or Burgundian Gate (Porte de Bourgogne). It is located approximately 16 km (10 mi) south from the base of the Ballon d'Alsace mountain range, source of the Savoureuse. The city of Belfort has 46,443 inhabitants (2019). Belfort is the centre of a larger functional area (metropolitan area) with 133,597 inhabitants (2018), between the larger metropolitan areas of Mulhouse and Montbéliard.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Belfort"
            },
            "Q172030": {
                "name": "McLaren",
                "wikidata_aliases": [
                    "McLaren Racing Limited",
                    "McLaren F1 team",
                    "McLaren Formula One team",
                    "McLaren Formula 1 (tým)",
                    "McLaren Formula 1 Team"
                ],
                "wikidata_summary": "British Formula One team",
                "wikidata_url": "https://www.wikidata.org/wiki/Q172030",
                "wikipedia_summary": "McLaren Racing Limited is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England. McLaren is best known as a Formula One chassis constructor, the second-oldest active team and the second-most successful Formula One team after Ferrari, having won 184 races, 12 Drivers' Championships, and eight Constructors' Championships. McLaren also has a history in American open wheel racing as both an entrant and a chassis constructor, and has won the Canadian-American Challenge Cup (Can-Am) sports car racing championship. McLaren is also one of only three constructors to complete the Triple Crown of Motorsport (wins at the Indianapolis 500, 24 Hours of Le Mans, and Monaco Grand Prix), a feat that McLaren achieved as a chassis manufacturer by winning the 1995 24 Hours of Le Mans. The team is a subsidiary of the McLaren Group, which owns a majority of the team.\nFounded in 1963 by New Zealander Bruce McLaren, the team won its first Grand Prix at the 1968 Belgian Grand Prix, but their greatest initial success was in Can-Am, which they dominated from 1967 to 1971. Further American triumph followed, with Indianapolis 500 wins in McLaren cars for Mark Donohue in 1972 and Johnny Rutherford in 1974 and 1976. After Bruce McLaren died in a testing accident in 1970, Teddy Mayer took over and led the team to their first Formula One Constructors' Championship in 1974, with Emerson Fittipaldi and James Hunt winning the Drivers' Championship in 1974 and 1976 respectively. The year 1974 also marked the start of a long-standing sponsorship by the Marlboro cigarette brand.\nIn 1981, McLaren merged with Ron Dennis' Project Four Racing; Dennis took over as team principal, and shortly afterwards organised a buyout of the original McLaren shareholders to take full control of the team. This began the team's most successful era; with Porsche and Honda engines, Niki Lauda, Alain Prost, and Ayrton Senna won seven Drivers' Championships between them and the team took six Constructors' Championships. The combination of Prost and Senna was particularly dominant—together they won all but one race in 1988—but later their rivalry soured and Prost left for Ferrari. Fellow English team Williams offered the most consistent challenge during this period, the two winning every constructors' title between 1984 and 1994. By the mid-1990s, Honda had withdrawn from Formula One, Senna had moved to Williams, and the team went three seasons without a win. With Mercedes-Benz engines, West sponsorship, and former Williams designer Adrian Newey, further championships came in 1998 and 1999 with driver Mika Häkkinen, and during the 2000s the team were consistent front-runners, with driver Lewis Hamilton taking their latest title in 2008.\nRon Dennis retired as McLaren team principal in 2009, handing over to long-time McLaren employee Martin Whitmarsh. At the end of 2013, after the team's worst season since 2004, Whitmarsh was ousted. McLaren announced in 2013 that they would be using Honda engines from 2015 onwards, replacing Mercedes-Benz. The team raced as McLaren Honda for the first time since 1992 at the 2015 Australian Grand Prix. In September 2017, McLaren announced they had agreed on an engine supply with Renault from 2018 to 2020. McLaren is using Mercedes-Benz engines from the 2021 season until at least 2030.\nAfter initially returning to the Indianapolis 500 in 2017 as a backer of Andretti Autosport to run Fernando Alonso and then in 2019 as an independent entry, McLaren announced in August 2019 that they would run in conjunction with Arrow Schmidt Peterson Motorsports starting in 2020 to run the full IndyCar Series, the combined entry being named Arrow McLaren SP. Initially having no ownership interest in the team, McLaren would purchase 75% of the operation in 2021. McLaren entered the electric off-road racing series Extreme E in 2022, and also joined Formula E in the 2022–23 season.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/McLaren"
            },
            "Q1722708": {
                "name": "Manson Family",
                "wikidata_aliases": [
                    "big assassin"
                ],
                "wikidata_summary": "commune established in California in the late 1960s, led by Charles Manson",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1722708",
                "wikipedia_summary": "The Manson Family (known among its members as the Family) was a commune, gang, and cult led by criminal Charles Manson that was active in California in the late 1960s and early 1970s. The group at its peak consisted of approximately 100 followers, who lived an unconventional lifestyle, frequently using psychoactive drugs, including amphetamine and hallucinogens such as LSD. Most were young women from middle-class backgrounds, many of whom were attracted by hippie culture and communal living and then radicalized by Manson's teachings. The group is confirmed to have murdered 9 people, though they potentially killed up to 24.\nManson was born in 1934 and had been institutionalized or incarcerated for more than half of his life by the time he was released from prison in 1967. He began attracting acolytes in the San Francisco area. They gradually moved to a run-down ranch, called the Spahn Ranch, in Los Angeles County. The ranch burned down during a Southern California wildfire in September 1970. \nAccording to group member Susan Atkins, the members of the Family became convinced that Manson was a manifestation of Jesus Christ and believed in his prophecies concerning an imminent, apocalyptic race war.\nIn 1969, Family members Susan Atkins, Tex Watson, and Patricia Krenwinkel entered the home of Hollywood actress Sharon Tate and murdered her and four others. Linda Kasabian was also present, but did not take part. Members of the Manson Family also committed a number of assaults, petty crimes, theft and street vandalism, including an assassination attempt on U.S. President Gerald Ford in 1975 by Manson Family member Lynette “Squeaky” Fromme.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Manson_Family"
            },
            "Q172678": {
                "name": "Samuel L. Jackson",
                "wikidata_aliases": [
                    "Samuel Leroy Jackson",
                    "Sam Jackson",
                    "Sam L Jackson",
                    "Sam L. Jackson",
                    "Sam Leroy Jackson"
                ],
                "wikidata_summary": "American actor (born 1948)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q172678",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q173496": {
                "name": "Marvel Comics",
                "wikidata_aliases": [
                    "Marvel",
                    "Marvel Publishing, Inc.",
                    "Marvel Comics Group",
                    "Zenith Publishing Corporation",
                    "Olympia Publications, Inc.",
                    "Leading Magazine Corporation",
                    "Mutual Magazine Corporation",
                    "20th Century Comic Corporation",
                    "Animirth Comics, Inc.",
                    "Bard Publishing Corp.",
                    "Canam Publishers Sales Corp.",
                    "Chipiden Publishing Corp.",
                    "Classic Syndicate, Inc.",
                    "Current Detective Stories, Inc.",
                    "Interstate Publishing Corp.",
                    "Magazine Management Co., Inc.",
                    "Male Publishing Corp.",
                    "Manvis Publications, Inc.",
                    "Newsstand Publications, Inc.",
                    "Non-Pareil Publishing Corp.",
                    "Prime Publications, Inc.",
                    "Sphere Publications, Inc.",
                    "U.S.A. Comic Magazine Corp.",
                    "Vista Publications, Inc.",
                    "Western Fiction Publishing Co., Inc."
                ],
                "wikidata_summary": "company that publishes comic books and related media",
                "wikidata_url": "https://www.wikidata.org/wiki/Q173496",
                "wikipedia_summary": "Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023. Marvel was founded in 1939 by Martin Goodman as Timely Comics, and by 1951 had generally become known as Atlas Comics. The Marvel era began in August 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko, and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.\nMarvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Wolverine, Captain America, Black Widow, Thor, Hulk, Daredevil,  Doctor Strange, Black Panther, and Captain Marvel, as well as popular superhero teams such as the Avengers, X-Men, Fantastic Four, and Guardians of the Galaxy. Its staple of well-known supervillains includes the likes of Doctor Doom, Magneto, Green Goblin, Red Skull, Loki, Ultron, Thanos, Kang the Conqueror, Venom, and Galactus. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City, New York, United States.  Additionally, Marvel has published several licensed properties from other companies. This includes Star Wars comics twice from 1977 to 1986 and again since 2015.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Marvel_Comics"
            },
            "Q176494": {
                "name": "recession",
                "wikidata_aliases": [
                    "economic recession"
                ],
                "wikidata_summary": "business cycle contraction",
                "wikidata_url": "https://www.wikidata.org/wiki/Q176494",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q179179": {
                "name": "Interest rate",
                "wikidata_aliases": [
                    "key interest rate"
                ],
                "wikidata_summary": "percentage of a sum of money charged for its use",
                "wikidata_url": "https://www.wikidata.org/wiki/Q179179",
                "wikipedia_summary": "An interest rate is the amount of interest due per period, as a proportion of the amount lent, deposited, or borrowed (called the principal sum). The total interest on an amount lent or borrowed depends on the principal sum, the interest rate, the compounding frequency, and the length of time over which it is lent, deposited, or borrowed.\nThe annual interest rate is the rate over a period of one year. Other interest rates apply over different periods, such as a month or a day, but they are usually annualized.\nThe interest rate has been characterized as 'an index of the preference . . . for a dollar of present [income] over a dollar of future income.' The borrower wants, or needs, to have money sooner, and is willing to pay a fee—the interest rate—for that privilege.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Interest_rate"
            },
            "Q181900": {
                "name": "Stan Lee",
                "wikidata_aliases": [
                    "Stanley Lieber",
                    "Stanley Martin Lieber",
                    "Neel Nats",
                    "The Man",
                    "S. T. Anley"
                ],
                "wikidata_summary": "American comic book writer, editor, publisher, and producer (1922–2018)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q181900",
                "wikipedia_summary": "Stan Lee (born Stanley Martin Lieber ; December 28, 1922 – November 12, 2018) was an American comic book writer, editor, publisher and producer. He rose through the ranks of a family-run business called Timely Comics which would later become Marvel Comics. He was Marvel's primary creative leader for two decades, leading its expansion from a small division of a publishing house to a multimedia corporation that dominated the comics and film industries.\nIn collaboration with others at Marvel—particularly co-writers and artists Jack Kirby and Steve Ditko—he co-created iconic characters, including Spider-Man, the X-Men, Iron Man, Thor, the Hulk, Ant-Man, the Wasp, the Fantastic Four, Black Panther, Daredevil, Doctor Strange, the Scarlet Witch, and Black Widow. These and other characters' introductions in the 1960s pioneered a more naturalistic approach in superhero comics, and, in the 1970s, Lee challenged the restrictions of the Comics Code Authority, indirectly leading to changes in its policies. In the 1980s, he pursued the development of Marvel properties in other media, with mixed results.\n\nFollowing his retirement from Marvel in the 1990s, Lee remained a public figurehead for the company. He frequently made cameo appearances in films and television shows based on Marvel properties on which he received an executive producer credit, which allowed him to become the highest-grossing person in film of all time by a large margin.  He continued independent creative ventures until his death, aged 95, in 2018. Lee was inducted into the comic book industry's Will Eisner Award Hall of Fame in 1994 and the Jack Kirby Hall of Fame in 1995. He received the NEA's National Medal of Arts in 2008.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Stan_Lee"
            },
            "Q18205509": {
                "name": "Beyond Meat",
                "wikidata_aliases": [
                    "Beyond",
                    "Beyond Meat, Inc.",
                    "Beyond Meat Inc.",
                    "Beyond Meat",
                    "gobeyond"
                ],
                "wikidata_summary": "Los Angeles-based producer of plant-based meat",
                "wikidata_url": "https://www.wikidata.org/wiki/Q18205509",
                "wikipedia_summary": "Beyond Meat, Inc. is a Los Angeles–based producer of plant-based meat substitutes founded in 2009 by Ethan Brown. The company's initial products were launched in the United States in 2012. The company went public in 2019, becoming the first plant-based meat analogue company to go public.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Beyond_Meat"
            },
            "Q183": {
                "name": "Germany",
                "wikidata_aliases": [
                    "Federal Republic of Germany",
                    "Deutschland",
                    "GER",
                    "BR Deutschland",
                    "DE",
                    "BRD",
                    "Bundesrepublik Deutschland",
                    "de",
                    "GFR"
                ],
                "wikidata_summary": "country in Central Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q183",
                "wikipedia_summary": "Germany, officially the Federal Republic of Germany, is a country in the western region of Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany lies between the Baltic and North Sea to the north and the Alps to the south. Its 16 constituent states have a total population of over 84 million, covering a combined area of 357,600 km2 (138,100 sq mi) and sharing land borders with Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and most populous city is Berlin and its main financial centre is Frankfurt; the largest urban area is the Ruhr.\nSettlement in what is now Germany began in the Lower Paleolithic, with various tribes inhabiting it from the Neolithic onward, chiefly the Celts. Various Germanic tribes have inhabited the northern parts of modern Germany since classical antiquity. A region named Germania was documented before AD 100. In 962, the Kingdom of Germany formed the bulk of the Holy Roman Empire. During the 16th century, northern German regions became the centre of the Protestant Reformation. Following the Napoleonic Wars and the dissolution of the Holy Roman Empire in 1806, the German Confederation was formed in 1815.\nFormal unification of Germany into the modern nation-state commenced on 18 August 1866 with the North German Confederation Treaty establishing the Prussia-led North German Confederation later transformed in 1871 into the German Empire. After World War I and the German Revolution of 1918–1919, the Empire was in turn transformed into the semi-presidential Weimar Republic. The Nazi seizure of power in 1933 led to the establishment of a totalitarian dictatorship, World War II, and the Holocaust. After the end of World War II in Europe and a period of Allied occupation, in 1949, Germany as a whole was organized into two separate polities with limited sovereignty: the Federal Republic of Germany, generally known as West Germany, and the German Democratic Republic, known as East Germany, while Berlin continued its de jure Four Power status. The Federal Republic of Germany was a founding member of the European Economic Community and the European Union, while the German Democratic Republic was a communist Eastern Bloc state and member of the Warsaw Pact. After the fall of the communist led-government in East Germany, German reunification saw the former East German states join the Federal Republic of Germany on 3 October 1990.\nGermany has been described as a great power with a strong economy; it has the largest economy in Europe. As a global power in industrial, scientific and technological sectors, it is both the world's third-largest exporter and importer. As a developed country it offers social security, a universal health care system, and tuition-free university education. Germany is a member of the United Nations, European Union, NATO, Council of Europe, G7, G20, and OECD. It has the third-greatest number of UNESCO World Heritage Sites.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Germany"
            },
            "Q1861": {
                "name": "Bangkok",
                "wikidata_aliases": [
                    "Bangkok, Thailand",
                    "Krung Thep",
                    "Krung Thep Maha Nakhon",
                    "Sia-Yut'hia",
                    "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit"
                ],
                "wikidata_summary": "capital of Thailand",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1861",
                "wikipedia_summary": "Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 9.0 million as of 2021, 13% of the country's population. Over 17.4 million people (25%) lived within the surrounding Bangkok Metropolitan Region at the 2021 estimate, making Bangkok an extreme primate city, dwarfing Thailand's other urban centres in both size and importance to the national economy.\nBangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century, which eventually grew and became the site of two capital cities, Thonburi in 1767 and Rattanakosin in 1782. Bangkok was at the heart of the modernization of Siam, later renamed Thailand, during the late-19th century, as the country faced pressures from the West. The city was at the centre of Thailand's political struggles throughout the 20th century, as the country abolished absolute monarchy, adopted constitutional rule, and underwent numerous coups and several uprisings. The city, incorporated as a special administrative area under the Bangkok Metropolitan Administration in 1972, grew rapidly during the 1960s through the 1980s and now exerts a significant impact on Thailand's politics, economy, education, media and modern society.\nThe Asian investment boom in the 1980s and 1990s led many multinational corporations to locate their regional headquarters in Bangkok. The city is now a regional force in finance, business and pop culture. It is an international hub for transport and health care, and has emerged as a centre for the arts, fashion, and entertainment. The city is known for its street life and cultural landmarks, as well as its red-light districts. The Grand Palace and Buddhist temples including Wat Arun and Wat Pho stand in contrast with other tourist attractions such as the nightlife scenes of Khaosan Road and Patpong. Bangkok is among the world's top tourist destinations, and has been named the world's most visited city consistently in several international rankings.\nBangkok's rapid growth coupled with little urban planning has resulted in a haphazard cityscape and inadequate infrastructure. Despite an extensive expressway network, an inadequate road network and substantial private car usage have led to chronic and crippling traffic congestion, which caused severe air pollution in the 1990s. The city has since turned to public transport in an attempt to solve the problem, operating 10 urban rail lines and building other public transit; however, congestion remains a prevalent issue.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bangkok"
            },
            "Q186131": {
                "name": "Terrain",
                "wikidata_aliases": [
                    "land relief",
                    "relief",
                    "topographical relief"
                ],
                "wikidata_summary": "vertical and horizontal dimension of land surface",
                "wikidata_url": "https://www.wikidata.org/wiki/Q186131",
                "wikipedia_summary": "Terrain or relief (also topographical relief) involves the vertical and horizontal dimensions of land surface. The term bathymetry is used to describe underwater relief, while hypsometry studies terrain relative to sea level. The Latin word terra (the root of terrain) means 'earth.'\nIn physical geography, terrain is the lay of the land. This is usually expressed in terms of the elevation, slope, and orientation of terrain features. Terrain affects surface water flow and distribution. Over a large area, it can affect weather and climate patterns.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Terrain"
            },
            "Q186263": {
                "name": "Dishwasher",
                "wikidata_aliases": [
                    "dishwashers"
                ],
                "wikidata_summary": "mechanical device for cleaning dishware and cutlery",
                "wikidata_url": "https://www.wikidata.org/wiki/Q186263",
                "wikipedia_summary": "A dishwasher is a machine that is used to clean dishware, cookware, and cutlery automatically. Unlike manual dishwashing, which relies on physical scrubbing to remove soiling, the mechanical dishwasher cleans by spraying hot water, typically between 45 and 75 °C (110 and 170 °F), at the dishes, with lower temperatures of water used for delicate items.\nA mix of water and dishwasher detergent is pumped to one or more rotating sprayers, cleaning the dishes with the cleaning mixture. The mixture is recirculated to save water and energy. Often there is a pre-rinse, which may or may not include detergent, and the water is then drained. This is followed by the main wash with fresh water and detergent. Once the wash is finished, the water is drained; more hot water enters the tub by means of an electromechanical solenoid valve, and the rinse cycle(s) begin. After the rinse process finishes, the water is drained again and the dishes are dried using one of several drying methods. Typically a rinse-aid, a chemical to reduce the surface tension of the water, is used to reduce water spots from hard water or other reasons.\nIn addition to domestic units, industrial dishwashers are available for use in commercial establishments such as hotels and restaurants, where many dishes must be cleaned. Washing is conducted with temperatures of 65–71 °C (149–160 °F) and sanitation is achieved by either the use of a booster heater that will provide an 82 °C (180 °F) 'final rinse' temperature or through the use of a chemical sanitizer.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dishwasher"
            },
            "Q186422": {
                "name": "Wolverine",
                "wikidata_aliases": [
                    "James Howlett",
                    "Scarlett",
                    "Jim Logan",
                    "Weapon X",
                    "Patch",
                    "Experiment X",
                    "Agent Ten",
                    "Logan"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q186422",
                "wikipedia_summary": "The wolverine ( WUUL-və-reen, US also  WUUL-və-REEN; Gulo gulo; Gulo is Latin for 'glutton'), also referred to as the glutton, carcajou, or quickhatch (from East Cree, kwiihkwahaacheew), is the largest land-dwelling member of the family Mustelidae. It is a muscular carnivore and a solitary animal. The wolverine has a reputation for ferocity and strength out of proportion to its size, with the documented ability to kill prey many times larger than itself.\nThe wolverine is found primarily in remote reaches of the Northern boreal forests and subarctic and alpine tundra of the Northern Hemisphere, with the greatest numbers in Northern Canada, the U.S. state of Alaska, the mainland Nordic countries of Europe, and throughout western Russia and Siberia. Its population has steadily declined since the 19th century owing to trapping, range reduction and habitat fragmentation. The wolverine is now essentially absent from the southern end of its range in both Europe and North America.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wolverine"
            },
            "Q1872439": {
                "name": "X-23",
                "wikidata_aliases": [
                    "Laura Kinney",
                    "Wolverine",
                    "Captain Universe",
                    "Talon",
                    "Laura X",
                    "X23-23"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1872439",
                "wikipedia_summary": "X-23 (real name Laura Kinney; codename Wolverine) is a fictional superheroine appearing in American comic books published by Marvel Comics. The character also appears in media from Marvel Entertainment, commonly in association with the X-Men. The character was created by writer Craig Kyle for the X-Men: Evolution television series in 2003, before debuting in the NYX comic series in 2004. Since then she has headlined two six-issue miniseries written by Kyle and Christopher Yost, a one-shot and self-titled series written by Marjorie Liu, and All-New Wolverine by Tom Taylor.\nLaura was apparently the clone and later the adoptive daughter of Wolverine, created to be the perfect killing machine. For years, she proved herself a capable assassin working for an organization called the Facility. A series of tragedies eventually led her to Wolverine and the X-Men. She attended school at the X-Mansion, and eventually became a member of X-Force. It is revealed later that she is not a clone, but the biological daughter of Wolverine. Like her father, Laura has a regenerative healing factor and enhanced senses, speed, and reflexes. She also has retractable adamantium-coated bone claws in her hands and feet. In 2015, the character succeeded her father in adopting the name and costume of Wolverine in the series All-New Wolverine.\nLaura Kinney has been described as one of Marvel's most notable and powerful female heroes.\nIn addition to comics, the character has appeared in various media, including animated film and TV series and video games. She was portrayed by Dafne Keen in the 2017 film Logan.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-23"
            },
            "Q18726": {
                "name": "1933",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q18726",
                "wikipedia_summary": "1933 (MCMXXXIII) was a common year starting on Sunday of the Gregorian calendar, the 1933rd year of the Common Era (CE) and Anno Domini (AD) designations, the 933rd  year of the 2nd millennium, the 33rd  year of the 20th century, and the  4th   year of the 1930s decade.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1933"
            },
            "Q187545": {
                "name": "Tantoo Cardinal",
                "wikidata_aliases": [
                    "Rose Marie \"Tantoo\" Cardinal",
                    "Rose Marie Cardinal"
                ],
                "wikidata_summary": "Canadian actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q187545",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q187880": {
                "name": "Excalibur",
                "wikidata_aliases": [
                    "Caledfwlch",
                    "Calesvol",
                    "Kaledvoulc'h",
                    "caliburn",
                    "Caliburno"
                ],
                "wikidata_summary": "legendary sword of King Arthur",
                "wikidata_url": "https://www.wikidata.org/wiki/Q187880",
                "wikipedia_summary": "Excalibur is the mythical sword of King Arthur that may possess magical powers or be  associated with the rightful sovereignty of Britain. Traditionally, the sword in the stone that is the proof of Arthur's lineage and the sword given him by a Lady of the Lake are not the same weapon, even as in some versions of the legend both of them share the name of Excalibur.  Several similar swords and other weapons also appear within Arthurian texts, as well as in other legends.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Excalibur"
            },
            "Q188447": {
                "name": "electrical cable",
                "wikidata_aliases": [
                    "cable assembly",
                    "cable",
                    "cord set",
                    "cordset"
                ],
                "wikidata_summary": "assembly of one or more electrical conductor lines",
                "wikidata_url": "https://www.wikidata.org/wiki/Q188447",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q188473": {
                "name": "Action film",
                "wikidata_aliases": [
                    "action movie",
                    "film action",
                    "movie action",
                    "action"
                ],
                "wikidata_summary": "film genre",
                "wikidata_url": "https://www.wikidata.org/wiki/Q188473",
                "wikipedia_summary": "The action film is a film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work. The specifics of what constitutes an action film has been in scholarly debate since the 1980s. While some scholars such as David Bordwell suggested they were films that favor spectacle to storytelling, others such as Goeff King stated they allow the scenes of spectacle to be attuned to story telling. Action films are often hybrid with other genres, mixing into various forms ranging to comedies, science fiction films, and horror films.\nWhile the term 'action film' or 'action adventure film' has been used as early as the 1910s, the contemporary definition usually refers to a film that came with the arrival of New Hollywood and the rise of antiheros appearing in American films of the late 1960s and 1970s drawing from war films, crime films and Westerns. These genres were followed by what is referred to as the 'classical period' in the 1980s. This was followed by the post-classical era where American action films were influenced by Hong Kong action cinema and the growing using of computer generated imagery in film. Following the September 11 attacks, a return to the early forms of the genre appeared in the wake of Kill Bill and The Expendables films.\nScott Higgins wrote in 2008 in Cinema Journal that action films are both one of the most popular and popularly derided of contemporary cinema genres, stating that 'in mainstream discourse, the genre is regularly lambasted for favoring spectacle over finely tuned narrative.' Bordwell echoed this in his book, The Way Hollywood Tells It,  writing that the reception to the genre as being 'the emblem of what Hollywood does worst.'",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Action_film"
            },
            "Q188540": {
                "name": "Economy of the United States",
                "wikidata_aliases": [
                    "US economy",
                    "economy of the United States of America",
                    "economy (United States)",
                    "economy (United States of America)",
                    "economy (USA)",
                    "economy (U.S.A.)",
                    "economy (U. S. A.)",
                    "America's economy",
                    "economy of America",
                    "America economy",
                    "economy (America)",
                    "USA economy",
                    "economy of the US",
                    "economy of the USA"
                ],
                "wikidata_summary": "national economy of the United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q188540",
                "wikipedia_summary": "The United States is a highly developed/advanced mixed economy. It is the world's largest economy by nominal GDP; it is also the second largest by purchasing power parity (PPP), behind China. It has the world's seventh highest per capita GDP (nominal) and the eighth highest per capita GDP (PPP) as of 2022. The U.S. accounted for 26% of the global economy in 2023 in nominal terms, and about 15.5% in PPP terms.  The U.S. dollar is the currency of record most used in international transactions and is the world's reserve currency, backed by a large U.S. treasuries market, its role as the reference standard for the petrodollar system, and its linked eurodollar. Several countries use it as their official currency and in others it is the de facto currency. Since the end of World War II, the economy has achieved relatively steady growth, low unemployment and inflation, and rapid advances in technology. \nThe American economy is fueled by high productivity, well developed transportation infrastructure, and extensive natural resources. Americans have the highest average household and employee income among OECD member states. In 2021, they had the highest median household income. The U.S. has one of the world's highest income inequalities among the developed countries. The largest U.S. trading partners are Canada, Mexico, China, Japan, Germany, South Korea, the United Kingdom, Taiwan, India, and Vietnam. The U.S. is the world's largest importer and second largest exporter. It has free trade agreements with several countries, including Canada and Mexico (through the USMCA), Australia, South Korea, Israel, and several others that are in effect or under negotiation. U.S. has a highly flexible labor market, where the industry adheres to a hire-and-fire policy, and job security is relatively low. Among OECD nations, the U.S. has a highly efficient and strong social security system; social expenditure stood at roughly 30% of GDP.  \nBy 1890, the United States had overtaken the British Empire as the world's most productive economy. It is the world's largest producer of petroleum and natural gas. In 2016, it was the world's largest trading country and second largest manufacturer, with American manufacturing making up a fifth of the global total. The U.S. not only has the largest internal market for goods, but also dominates the services trade. Total U.S. trade was $4.2 trillion in 2018. Of the world's 500 largest companies, 121 are headquartered in the U.S. The U.S. has the world's highest number of billionaires, with total wealth of $3.0 trillion. U.S. commercial banks had $22.9 trillion in assets in December 2022. U.S. global assets under management had more than $30 trillion in assets. During the Great Recession of 2008, the U.S. economy suffered a significant decline. The American Reinvestment and Recovery Act was enacted by the United States Congress, and in the ensuing years the U.S. experienced the longest economic expansion on record by July 2019.\nThe New York Stock Exchange and Nasdaq are the world's largest stock exchanges by market capitalization and trade volume. The U.S. has the world's largest gold reserve, with over 8,000 tonnes of gold. In 2014, the U.S. economy was ranked first in international ranking on venture capital and global research and development funding. The U.S. spends around 3.46% of GDP on cutting-edge research and development across various sectors of the economy. The U.S. has produced the world's highest number of Nobel laureates in the economics field. It is also the world's fourth largest high-technology exporter. The U.S. ranks second in the world by number of patent applications. Consumer spending comprised 68% of the U.S. economy in 2022, while its labor share of income was 44% in 2021. The U.S. has the world's largest consumer market. The nation's labor market has attracted immigrants from all over the world and its net migration rate is among the highest in the world. The U.S. is one of the top-performing economies in studies such as the Ease of Doing Business Index, the Global Competitiveness Report, and others.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Economy_of_the_United_States"
            },
            "Q188760": {
                "name": "Hulk",
                "wikidata_aliases": [
                    "Bruce Banner",
                    "The Incredible Hulk",
                    "David Banner",
                    "The Hulk",
                    "Green Hulk",
                    "Robert Bruce Banner"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q188760",
                "wikipedia_summary": "The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk, a green-skinned, hulking and muscular humanoid possessing a limitless degree of physical strength, and the alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, both of whom typically resent each other.\nFollowing his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will. This transformation often leads to destructive rampages and to conflicts that complicate Banner's civilian life. The Hulk's level of strength is normally conveyed as proportionate to his level of anger. Commonly portrayed as a raging savage, the Hulk has been represented with other alter egos, from a mindless, destructive force (War), to a brilliant warrior (World-Breaker), a self-hating protector (the Devil/Immortal), a genius scientist in his own right (Doc Green), and a gangster (Joe Fixit).\nDespite both Hulk and Banner's desire for solitude, the character has a large supporting cast. This includes Banner's love interest Betty Ross, his best friend Rick Jones, his cousin She-Hulk, and therapist and ally Doc Samson. In addition, the Hulk alter ego has many key supporting characters, like his co-founders of the superhero team the Avengers, his queen Caiera, fellow warriors Korg and Miek, and sons Skaar and Hiro-Kala. However, his uncontrollable power has brought him into conflict with his fellow heroes and others. Despite this, he tries his best to do what's right while battling villains such as the Leader, the Abomination, the Absorbing Man, and more.\nLee stated that the Hulk's creation was inspired by a combination of Frankenstein and Dr. Jekyll and Mr. Hyde. Although the Hulk's coloration has varied throughout the character's publication history, the most usual color is green.\nOne of the most iconic characters in popular culture, the character has appeared on a variety of merchandise, such as clothing and collectable items, inspired real-world structures (such as theme park attractions), and been referenced in a number of media. Banner and the Hulk have been adapted in live-action, animated, and video game incarnations. The character was first played in live-action by Bill Bixby and Lou Ferrigno in the 1978 television series The Incredible Hulk and its subsequent television films The Incredible Hulk Returns (1988), The Trial of the Incredible Hulk (1989), and The Death of the Incredible Hulk (1990).  In film, the character was played by Eric Bana in Hulk (2003). In the Marvel Cinematic Universe (MCU), the character was first portrayed by Edward Norton in the film The Incredible Hulk (2008) and then by Mark Ruffalo in later appearances in the franchise.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hulk"
            },
            "Q189490": {
                "name": "Jennifer Lawrence",
                "wikidata_aliases": [
                    "JLaw",
                    "Jennifer Shrader Lawrence"
                ],
                "wikidata_summary": "American actress and producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q189490",
                "wikipedia_summary": "Jennifer Shrader Lawrence (born August 15, 1990) is an American actress. She is known for starring in both action film franchises and independent dramas, and her films have grossed over $6 billion worldwide. The world's highest-paid actress in 2015 and 2016, she appeared in Time's 100 most influential people in the world list in 2013 and the Forbes Celebrity 100 list from 2013 to 2016.\nLawrence began her career as a teenager with guest roles on television. Her first major role was as a main cast member on the sitcom The Bill Engvall Show (2007–2009). She made her film debut with a supporting role in the drama Garden Party (2008), and had her breakthrough playing a poverty-stricken teenager in the independent film Winter's Bone (2010). Lawrence gained stardom portraying the mutant Mystique in the X-Men film series (2011–2019) and Katniss Everdeen in The Hunger Games film series (2012–2015). The latter made her the highest-grossing action heroine.\nLawrence collaborated with filmmaker David O. Russell on three films, which earned her various accolades. For portraying a troubled young widow in the romance Silver Linings Playbook (2012), she won the Academy Award for Best Actress, becoming the second-youngest winner in the category at age 22. Lawrence won the BAFTA Award for Best Actress in a Supporting Role for playing an unpredictable wife in the black comedy American Hustle (2013). She also received Golden Globe Awards for both, and for portraying businesswoman Joy Mangano in the biopic Joy (2015). A series of mixed reviewed films and the media scrutiny of her role choices led to a small break from acting. Lawrence returned with the streaming film Don't Look Up (2021), after which she produced and starred in the drama Causeway (2022) and the comedy No Hard Feelings (2023).\nLawrence is a feminist and advocates for women's reproductive rights. In 2015, she founded the Jennifer Lawrence Foundation, which advocates for the Boys & Girls Clubs of America and the Special Olympics. Lawrence formed the production company Excellent Cadaver in 2018. She is an active member of the nonpartisan nonprofit anti-corruption organization RepresentUs and has served as a spokesperson in its videos about protecting democracy.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jennifer_Lawrence"
            },
            "Q19020": {
                "name": "Academy Awards",
                "wikidata_aliases": [
                    "The Oscars",
                    "Oscars"
                ],
                "wikidata_summary": "annual awards for cinematic achievements",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19020",
                "wikipedia_summary": "The Academy Awards of Merit, commonly known as the Oscars or Academy Awards, are awards for artistic and technical merit for the film industry. They are presented annually by the Academy of Motion Picture Arts and Sciences (AMPAS) in the United States, in recognition of excellence in cinematic achievements as assessed by the Academy's voting membership. The Oscars are widely considered to be the most prestigious awards in the film industry.\nThe major award categories are presented during a live-televised Hollywood ceremony, that is typically held in February or March. It is the oldest worldwide entertainment awards ceremony. The 1st Academy Awards were held in 1929. The second ceremony, in 1930, was the first one broadcast by radio. The 1953 ceremony was the first one televised. It is the oldest of the four major annual American entertainment awards. Its equivalents – the Emmy Awards for television, the Tony Awards for theater, and the Grammy Awards for music – are modeled after the Academy Awards. The Oscar statuette depicts a knight, rendered in the Art Deco style.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Academy_Awards"
            },
            "Q190794": {
                "name": "Famke Janssen",
                "wikidata_aliases": [
                    "Famke Beumer"
                ],
                "wikidata_summary": "Dutch actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q190794",
                "wikipedia_summary": "Famke Beumer Janssen (Dutch pronunciation: [ˈfɑmkə ˈbøːmər ˈjɑnsə(n)]; born 5 November 1964) is a Dutch actress. She played Xenia Onatopp in GoldenEye (1995), Jean Grey / Phoenix in the X-Men film series (2000–2014), and Lenore Mills in the Taken film trilogy (2008–2014). In 2008, she was appointed a Goodwill Ambassador for Integrity by the United Nations. She made her directorial debut with Bringing Up Bobby in 2011. She is also known for her roles in the Netflix original series Hemlock Grove (2013–2015), FX's Nip/Tuck (2003–2010), and ABC's How to Get Away with Murder (2014–2020). Janssen starred in the 2017 NBC crime thriller The Blacklist: Redemption.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Famke_Janssen"
            },
            "Q1924847": {
                "name": "Margot Robbie",
                "wikidata_aliases": [
                    "Margot Elise Robbie"
                ],
                "wikidata_summary": "Australian actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1924847",
                "wikipedia_summary": "Margot Elise Robbie ( MAR-goh ROB-ee; born 2 July 1990) is an Australian actress and producer. Known for her work in both blockbuster and independent films, she has received various accolades, including nominations for three Academy Awards, six BAFTA Awards and four Golden Globe Awards. Time named her one of the 100 most influential people in the world in 2017, and Forbes named her the world's highest-paid actress in 2023.\nBorn and raised in Queensland, Robbie began her career in 2008 on the television series Neighbours, on which she was a regular until 2011. After moving to the United States, she led the television series Pan Am (2011–2012) and had her breakthrough in 2013 with Martin Scorsese’s comedy film The Wolf of Wall Street. She achieved wider recognition with starring roles as Jane Porter in The Legend of Tarzan (2016), and as Harley Quinn in the DC Extended Universe films beginning with Suicide Squad (2016).\nRobbie received critical acclaim and a nomination for the Academy Award for Best Actress for her portrayal of figure skater Tonya Harding in the biopic I, Tonya (2017). This acclaim continued for her performances as Queen Elizabeth I in Mary Queen of Scots (2018), Sharon Tate in Once Upon a Time in Hollywood (2019), and a Fox News employee in Bombshell (2019). The last of these earned her a nomination for the Academy Award for Best Supporting Actress. Robbie has since starred as an aspiring actress in the period film Babylon (2022) and the fashion doll Barbie in the comedy Barbie (2023), which emerged as her highest-grossing release and as its producer, earned her a nomination for the Academy Award for Best Picture.\nRobbie and her husband, filmmaker Tom Ackerley, co-founded the production company LuckyChap Entertainment in 2014, under which they have produced several films, including I, Tonya, Promising Young Woman (2020), Barbie, and Saltburn (2023), as well as the Hulu series Dollface (2019–2022) and the Netflix miniseries Maid (2021).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Margot_Robbie"
            },
            "Q192682": {
                "name": "Ryan Reynolds",
                "wikidata_aliases": [
                    "Ryan Rodney Reynolds",
                    "Golfian"
                ],
                "wikidata_summary": "Canadian actor, comedian, screenwriter, and film producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q192682",
                "wikipedia_summary": "Ryan Rodney Reynolds  (born October 23, 1976) is a Canadian and American actor, producer, and businessman. He began his career starring in the Canadian teen soap opera Hillside (1991–1993) and had minor roles before landing the lead role on the sitcom Two Guys and a Girl between 1998 and 2001. Reynolds then starred in a range of films, including comedies such as National Lampoon's Van Wilder (2002), Waiting... (2005), and The Proposal (2009). He also performed in dramatic roles in Buried (2010), Woman in Gold (2015), and Life (2017). He has starred in action films such as Blade: Trinity (2004), Green Lantern (2011), 6 Underground (2019), Free Guy (2021), and The Adam Project (2022) and provided voice acting in the animated features The Croods film series (2013–2020), Turbo (2013), and Pokémon: Detective Pikachu (2019).\nReynolds's biggest commercial success came with the 20th Century Fox X-Men films Deadpool (2016) and Deadpool 2 (2018), in which he played the title character. The former set numerous records at the time of its release for an R-rated comedy and his performance earned him nominations at the Critics' Choice Movie Awards and the Golden Globe Awards.\nReynolds was named People's Sexiest Man Alive in 2010 and was awarded a star on the Hollywood Walk of Fame in 2017. As a businessman, he holds an ownership stake in Mint Mobile and is a co-owner of Welsh football club Wrexham A.F.C.; the latter was documented in the Emmy Award-winning TV series Welcome to Wrexham. In 2020, Reynolds sold his ownership stake of Aviation Gin to Diageo as part of a $610 million deal. He also sits on the board of the Match Group. As of 2023, his net worth is estimated to be $350 million.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ryan_Reynolds"
            },
            "Q193326": {
                "name": "Goldman Sachs",
                "wikidata_aliases": [
                    "The Goldman Sachs Group, Inc.",
                    "Goldman",
                    "GS",
                    "The Goldman Sachs Group",
                    "Goldman Sachs Group",
                    "Goldman Sachs and Co.",
                    "GSCO",
                    "Goldman Sachs & Co. (US)"
                ],
                "wikidata_summary": "American investment bank",
                "wikidata_url": "https://www.wikidata.org/wiki/Q193326",
                "wikipedia_summary": "The Goldman Sachs Group, Inc. ( SAKS) is an American multinational investment bank and financial services company. Founded in 1869, Goldman Sachs is headquartered in Lower Manhattan in New York City, with regional headquarters in many international financial centers. Goldman Sachs is the second largest investment bank in the world by revenue and is ranked 55th on the Fortune 500 list of the largest United States corporations by total revenue. In Forbes Global 2000 2023, Goldman Sachs ranked 34th. It is considered a systemically important financial institution by the Financial Stability Board.\nGoldman Sachs offers services in investment banking (advisory for mergers and acquisitions and restructuring), securities underwriting, prime brokerage, asset management as well as wealth management and investment management via Goldman Sachs Personal Financial Management. It is a market maker for many types of financial products and provides clearing and custodian bank services. It operates private-equity funds and hedge funds. It structures complex and tailor-made financial products. It also owns Goldman Sachs Bank USA, a direct bank. It trades both on behalf of its clients (flow trading) and for its own account (proprietary trading). The company invests in and arranges financing for startups, and in many cases gets additional business as bookrunner when the companies launch initial public offerings. It is one of over 100 strategic partners of the World Economic Forum.\nThe firm maintains offices in all major financial centers around the world, whilst its most important locations are New York and London. The firm is led by a board of directors, reporting to Chief Executive David Solomon. Firm leadership also consists of a separate management committee, responsible for key strategy, policy and management matters across all of Goldman Sachs’ businesses.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Goldman_Sachs"
            },
            "Q19347291": {
                "name": "Deadpool",
                "wikidata_aliases": [
                    "X-Men Origins: Deadpool"
                ],
                "wikidata_summary": "2016 film directed by Tim Miller",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19347291",
                "wikipedia_summary": "Deadpool is a character appearing in American comic books published by Marvel Comics. Created by Fabian Nicieza and Rob Liefeld, the character first appeared in New Mutants #98 (December 1990). In his comic book appearances, Deadpool is initially depicted as a supervillain of the New Mutants and X-Force, though later stories would portray him as an antihero. Deadpool is the alter ego of Wade Wilson, a disfigured Canadian mercenary with superhuman regenerative healing abilities. He is known for his tendency to joke incessantly and break the fourth wall for humorous effect.\nThe character's popularity has seen him featured in numerous forms of other media. In the 2004 series Cable & Deadpool, he refers to his own scarred appearance as 'Ryan Renolds [sic] crossed with a Shar Pei'. Reynolds himself developed interest in portraying the character when reading this comic, which was ultimately realized in the X-Men film series, including X-Men Origins: Wolverine (2009), Deadpool (2016), and its sequel Deadpool 2 (2018). He is set to reprise the role in Deadpool & Wolverine (2024), set in the Marvel Cinematic Universe.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Deadpool"
            },
            "Q193547": {
                "name": "Reign of Terror",
                "wikidata_aliases": [
                    "The Terror",
                    "la Terreur"
                ],
                "wikidata_summary": "Period in France following the French Revolution",
                "wikidata_url": "https://www.wikidata.org/wiki/Q193547",
                "wikipedia_summary": "The Reign of Terror (French: la Terreur) was a period of the French Revolution when, following the creation of the First Republic, a series of massacres and numerous public executions took place in response to revolutionary fervour, anticlerical sentiment, and accusations of treason by the Committee of Public Safety.\nThere is disagreement among historians over when exactly 'the Terror' began. Some consider it to have begun only in 1793, giving the date as either 5 September, June or March, when the Revolutionary Tribunal came into existence. Others, however, cite the earlier time of the September Massacres in 1792, or even July 1789, when the first killing of the revolution occurred.\nThe term 'Terror' used to describe the period was introduced by the Thermidorian Reaction, which took power after the fall of Maximilien Robespierre in July 1794, to discredit Robespierre and justify its own actions. Today there is consensus amongst French historians that the exceptional revolutionary measures continued after the death of Robespierre, and this subsequent period is now called the 'White Terror'. By then, 16,594 official death sentences had been dispensed throughout France since June 1793, of which 2,639 were in Paris alone. An additional 10,000 to 12,000 people had been executed without trial and 10,000 had died in prison.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Reign_of_Terror"
            },
            "Q193659": {
                "name": "James McAvoy",
                "wikidata_aliases": [
                    "James Andrew McAvoy"
                ],
                "wikidata_summary": "Scottish actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q193659",
                "wikipedia_summary": "James McAvoy (; born 21 April 1979) is a Scottish actor. He made his acting debut as a teen in The Near Room (1995) and appeared mostly on television until 2003, when his feature film career began. His notable television work include the thriller State of Play (2003), the science fiction miniseries Frank Herbert's Children of Dune (2003), and the drama series Shameless (2004–2005).\nMcAvoy gained recognition for playing Mr. Tumnus in the fantasy film The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) and an assassin in the action film Wanted (2008). His performances in the period dramas The Last King of Scotland (2006) and Atonement (2007) gained him nominations for the BAFTA Award. In 2011 he voiced the title characters in Arthur Christmas and Gnomeo & Juliet, reprising the latter role in Sherlock Gnomes, and portrayed Charles Xavier in the superhero film X-Men: First Class, a role he reprised in future installments of the X-Men series. McAvoy gained praise for starring in the independent crime film Filth (2013) and as a superpowered man with 23 dissociative identities in M. Night Shyamalan's Split (2016) and Glass (2019). He portrayed Lord Asriel in the fantasy series His Dark Materials from 2019 to 2022, and starred as Bill Denbrough in the horror film It Chapter Two (2019).\nOn stage, McAvoy has starred in several West End productions, such as Three Days of Rain in 2010, Macbeth in 2013, The Ruling Class in 2015, and Cyrano de Bergerac in 2020, for which he received four nominations for the Laurence Olivier Award for Best Actor.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/James_McAvoy"
            },
            "Q196560": {
                "name": "Kelsey Grammer",
                "wikidata_aliases": [
                    "Allen Kelsey Grammer"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q196560",
                "wikipedia_summary": "Allen Kelsey Grammer (born February 21, 1955) is an American actor. He gained fame for his role as psychiatrist Dr. Frasier Crane on the NBC sitcom Cheers (1984–1993) and its spin-off Frasier (1993–2004, and again from 2023-present). At more than 20 years on-air, this is one of the longest-running roles played by a single live-action actor in television history. He has received numerous accolades including a total of six Emmy Awards, three Golden Globe Awards, a Screen Actors Guild Award, and a Tony Award. He was awarded a star on the Hollywood Walk of Fame in 2000.\nGrammer, having trained as an actor at Juilliard and the Old Globe Theatre, made his professional acting debut as Lennox in the 1981 Broadway revival of Macbeth. The following year, he portrayed Cassio acting opposite Christopher Plummer and James Earl Jones in Othello. In 1983, he acted alongside Mandy Patinkin in the original off-Broadway production of Stephen Sondheim's musical Sunday in the Park with George. He has since starred in the leading roles in productions of both Sweeney Todd: The Demon Barber of Fleet Street and My Fair Lady.\nOn film, he is known for his role as Dr. Hank McCoy / Beast in the superhero films X-Men: The Last Stand (2006), X-Men: Days of Future Past (2014), and The Marvels (2023). His other roles include Down Periscope (1996), The Pentagon Wars (1998), and Swing Vote (2008). He is also known for his voice roles in Anastasia (1997), Toy Story 2 (1999), and as Sideshow Bob in The Simpsons. He has appeared in the sitcoms 30 Rock, Modern Family, and Unbreakable Kimmy Schmidt. For his role as the corrupt mayor in the political series Boss (2011–2012), he received a Golden Globe Award for Best Actor – Television Series Drama.\nIn 2010, Grammer returned to Broadway in the musical revival of La Cage aux Folles, where he received a nomination for the Tony Award for Best Leading Actor in a Musical. In 2016, Grammer won a Tony Award for Best Musical as producer of a musical revival of The Color Purple. In 2019, he starred as Don Quixote in a production of Man of La Mancha at the London Coliseum. In 2023, The Telegraph described Grammer as one of 'the finest actors' of his generation.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kelsey_Grammer"
            },
            "Q196600": {
                "name": "Media franchise",
                "wikidata_aliases": [
                    "media series",
                    "multimedia franchise",
                    "transmedia franchise",
                    "metaseries",
                    "franchise",
                    "mass media franchise"
                ],
                "wikidata_summary": "use of a creative work across several different media",
                "wikidata_url": "https://www.wikidata.org/wiki/Q196600",
                "wikipedia_summary": "A media franchise, also known as a multimedia franchise, is a collection of related media in which several derivative works have been produced from an original creative work of fiction, such as a film, a work of literature, a television program or a video game. Bob Iger, chief executive of the Walt Disney Company, defined the word franchise as 'something that creates value across multiple businesses and across multiple territories over a long period of time'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Media_franchise"
            },
            "Q19673": {
                "name": "Al Gore",
                "wikidata_aliases": [
                    "Albert Arnold Gore",
                    "Albert Gore",
                    "Al Gore Jr.",
                    "Albert Arnold Gore Jr.",
                    "Albert Arnold \"Al\" Gore Jr.",
                    "Albert Gore Jr.",
                    "Gore"
                ],
                "wikidata_summary": "Vice President of the United States from 1993 to 2001 (born 1948)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19673",
                "wikipedia_summary": "Albert Arnold Gore Jr. (born March 31, 1948) is an American politician, businessman, and environmentalist who served as the 45th vice president of the United States from 1993 to 2001 under President Bill Clinton. He previously served as a United States Senator from Tennessee from 1985 to 1993 and as a member of the U.S. House of Representatives from 1977 to 1985. Gore was the Democratic nominee for president of the United States in the 2000 presidential election, which he lost to George W. Bush.\nThe son of politician Albert Gore Sr., Gore was an elected official for 24 years. He was a U.S. representative from Tennessee (1977–1985) and from 1985 to 1993 served as a U.S. senator from that state. He served as vice president during the Clinton administration from 1993 to 2001, defeating incumbents George H. W. Bush and Dan Quayle in 1992, and Bob Dole and Jack Kemp in 1996. As of 2024, Gore's 1990 re-election remains the last time Democrats won a Senate election in Tennessee.\nGore was the Democratic nominee for president of the United States in the 2000 presidential election - in which he lost the electoral college vote 266–271 to Republican nominee George W. Bush, despite winning the popular vote by 543,895 votes. The election concluded after the Supreme Court of the United States ruled 5–4 in Bush v. Gore against a previous ruling by the Supreme Court of Florida on a re-count that would have likely given Gore a razor-thin lead in the state of Florida, had the re-count continued as planned. He is one of five presidential candidates in American history to lose a presidential election despite winning the popular vote.\nAfter his term as vice-president ended in 2001, Gore remained prominent as an author and environmental activist, whose work in climate change activism earned him (jointly with the IPCC) the Nobel Peace Prize in 2007. Gore is the founder and current chair of The Climate Reality Project, the co-founder and chair of Generation Investment Management, the now-defunct Current TV network, a former member of the Board of Directors of Apple Inc. and a senior adviser to Google. Gore is also a partner in the venture capital firm Kleiner Perkins, heading its climate change solutions group. He has served as a visiting professor at Middle Tennessee State University, Columbia University Graduate School of Journalism, Fisk University and the University of California, Los Angeles. He served on the Board of Directors of World Resources Institute.\nGore has received a number of awards that include the Nobel Peace Prize (joint award with the Intergovernmental Panel on Climate Change, 2007), a Primetime Emmy Award for Current TV (2007), and a Webby Award (2005). Gore was also the subject of the Academy Award winning (2007) documentary An Inconvenient Truth in 2006, as well as its 2017 sequel An Inconvenient Sequel: Truth to Power. In 2007, he was named a runner-up for Time's 2007 Person of the Year.  In 2008, Gore won the Dan David Prize for Social Responsibility, and in 2024, he was awarded Presidential Medal of Freedom by President Joe Biden.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Al_Gore"
            },
            "Q197491": {
                "name": "The Wolverine",
                "wikidata_aliases": [
                    "Wolverine"
                ],
                "wikidata_summary": "2013 film directed by James Mangold",
                "wikidata_url": "https://www.wikidata.org/wiki/Q197491",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1985": {
                "name": "2000",
                "wikidata_aliases": [
                    "MM",
                    "two thousand",
                    "the second millenium"
                ],
                "wikidata_summary": "calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1985",
                "wikipedia_summary": "2000 (MM) was a century leap year starting on Saturday of the Gregorian calendar, the 2000th year of the Common Era (CE) and Anno Domini (AD) designations, the 1000th and last year of the 2nd millennium, the 100th and last year of the 20th century, and the  1st   year of the 2000s decade.  \n2000 was designated as the International Year for the Culture of Peace and the World Mathematical Year.\nPopular culture holds the year 2000 as the first year of the 21st century and the 3rd millennium, because of a tendency to group the years according to decimal values, as if non-existent year zero were counted. According to the Gregorian calendar, these distinctions fall to the year 2001, because the 1st century was retroactively said to start with the year AD 1. Since the Gregorian calendar does not have year zero, its first millennium spanned from years 1 to 1000 inclusively and its second millennium from years 1001 to 2000. (For further information, see century and millennium.)\nThe year 2000 is sometimes abbreviated as 'Y2K' (the 'Y' stands for 'year', and the 'K' stands for 'kilo' which means 'thousand'). The year 2000 was the subject of Y2K concerns, which were fears that computers would not shift from 1999 to 2000 correctly. However, by the end of 1999, many companies had already converted to new, or upgraded, existing software. Some even obtained 'Y2K certification'. As a result of massive effort, relatively few problems occurred.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2000"
            },
            "Q1987589": {
                "name": "Generation Z",
                "wikidata_aliases": [
                    "Centennials",
                    "Zoomers",
                    "Zoomer",
                    "iGeneration",
                    "Post-Millennials",
                    "Gen Z",
                    "Centennial Generation"
                ],
                "wikidata_summary": "demographic cohort born between the mid-to-late 1990s and early 2010s",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1987589",
                "wikipedia_summary": "Generation Z (often shortened to Gen Z), colloquially known as Zoomers, is the demographic cohort succeeding Millennials and preceding Generation Alpha. Researchers and popular media use the mid-to-late 1990s as starting birth years and the early 2010s as ending birth years. Most members of Generation Z are the children of Generation X or older Millennials.\nAs the first social generation to have grown up with access to the Internet and portable digital technology from a young age, members of Generation Z, even if not necessarily digitally literate, have been dubbed 'digital natives'. Moreover, the negative effects of screen time are most pronounced in adolescents, as compared to younger children. Compared to previous generations, members of Generation Z tend to live more slowly than their predecessors when they were their age, have lower rates of teenage pregnancies, and consume alcohol (but not necessarily other psychoactive drugs) less often. Generation Z teenagers are more concerned than older generations with academic performance and job prospects, and are better at delaying gratification than their counterparts from the 1960s, despite concerns to the contrary. Sexting among adolescents has grown in prevalence; the consequences of this remain poorly understood. Youth subcultures have not disappeared, but they have been quieter. Nostalgia is a major theme of youth culture in the 2010s and 2020s.\nGlobally, there is evidence that the average age of pubertal onset among girls has decreased considerably compared to the 20th century, with implications for their welfare and their future. Furthermore, the prevalence of allergies among adolescents and young adults in Generation Z is greater than the general population; there is greater awareness and diagnosis of mental health conditions, and sleep deprivation is more frequently reported. In many countries, Gen Z youth are more likely to be diagnosed with intellectual disabilities and psychiatric disorders than older generations.\nAround the world, members of Generation Z are spending more time on electronic devices and less time reading books than before, with implications for their attention spans, vocabulary, academic performance, and future economic contributions. In Asia, educators in the 2000s and 2010s typically sought out and nourished top students; in Western Europe and the United States, the emphasis was on poor performers. East Asian and Singaporean students consistently earned the top spots in international standardized tests in the 2010s.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Generation_Z"
            },
            "Q19877770": {
                "name": "Timothée Hal Chalamet",
                "wikidata_aliases": [
                    "Timothee Chalamet",
                    "Timothée Hal Chalamet"
                ],
                "wikidata_summary": "French-American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q19877770",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1987792": {
                "name": "Motion Picture Association film rating system",
                "wikidata_aliases": [
                    "MPA film rating system",
                    "Motion Picture Association"
                ],
                "wikidata_summary": "American film rating system",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1987792",
                "wikipedia_summary": "The Motion Picture Association film rating system is used in the United States and its territories to rate a motion picture's suitability for certain audiences based on its content. The system and the ratings applied to individual motion pictures are the responsibility of the Motion Picture Association (MPA), previously known as the Motion Picture Association of America (MPAA) from 1945 to 2019. The MPA rating system is a voluntary scheme that is not enforced by law; films can be exhibited without a rating, although most theaters refuse to exhibit non-rated or NC-17 rated films. Non-members of the MPA may also submit films for rating. Other media, such as television programs, music and video games, are rated by other entities such as the TV Parental Guidelines, the RIAA and the ESRB, respectively.\nIn effect as of November 1968, following the Hays Code of the classical Hollywood cinema era, the MPA rating system is one of various motion picture rating systems that are used to help parents decide what films are appropriate for their children. It is administered by the Classification & Ratings Administration (CARA), an independent division of the MPA.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Motion_Picture_Association_film_rating_system"
            },
            "Q1990": {
                "name": "2012",
                "wikidata_aliases": [
                    "2012 AD",
                    "2012 CE",
                    "MMXII",
                    "twenty twelve",
                    "two thousand and twelve"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1990",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1990905": {
                "name": "Wolverine and the X-Men",
                "wikidata_aliases": [],
                "wikidata_summary": "American animated television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1990905",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1996": {
                "name": "2009",
                "wikidata_aliases": [
                    "MMIX",
                    "year 2009"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1996",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1998": {
                "name": "2013",
                "wikidata_aliases": [
                    "2013 AD",
                    "2013 CE",
                    "twenty thirteen",
                    "MMXIII",
                    "two thousand and thirteen"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1998",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q1999": {
                "name": "2014",
                "wikidata_aliases": [
                    "2014 AD",
                    "2014 CE",
                    "twenty fourteen",
                    "MMXIV",
                    "two thousand and fourteen"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q1999",
                "wikipedia_summary": "2014 (MMXIV) was a common year starting on Wednesday of the Gregorian calendar, the 2014th year of the Common Era (CE) and Anno Domini (AD) designations, the 14th  year of the 3rd millennium and the 21st century, and the  5th   year of the 2010s decade.  \n2014 was designated as:\n\nInternational Year of Crystallography\nInternational Year of Family Farming\nInternational Year of Small Island Developing States\nInternational Year of Solidarity with the Palestinian People",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2014"
            },
            "Q2": {
                "name": "Earth",
                "wikidata_aliases": [
                    "Planet Earth",
                    "the Earth",
                    "World",
                    "the World",
                    "Gaia",
                    "Terra",
                    "the globe",
                    "Sol III",
                    "world"
                ],
                "wikidata_summary": "third planet from the Sun in the Solar System",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2",
                "wikipedia_summary": "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.\nEarth has a dynamic atmosphere, which sustains Earth's surface conditions and protects it from most meteoroids and UV-light at entry. It has a composition of primarily nitrogen and oxygen. Water vapor is widely present in the atmosphere, forming clouds that cover most of the planet. The water vapor acts as a greenhouse gas and, together with other greenhouse gases in the atmosphere, particularly carbon dioxide (CO2), creates the conditions for both liquid surface water and water vapor to persist via the capturing of energy from the Sun's light. This process maintains the current average surface temperature of 14.76 °C (58.57 °F), at which water is liquid under atmospheric pressure. Differences in the amount of captured energy between geographic regions (as with the equatorial region receiving more sunlight than the polar regions) drive atmospheric and ocean currents, producing a global climate system with different climate regions, and a range of weather phenomena such as precipitation, allowing components such as nitrogen to cycle.\nEarth is rounded into an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light-minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution. Earth rotates around its own axis in slightly less than a day (in about 23 hours and 56 minutes). Earth's axis of rotation is tilted with respect to the perpendicular to its orbital plane around the Sun, producing seasons. Earth is orbited by one permanent natural satellite, the Moon, which orbits Earth at 384,400 km (1.28 light seconds) and is roughly a quarter as wide as Earth. The Moon's gravity helps stabilize Earth's axis, causes tides and gradually slows Earth's rotation. Tidal locking has made the Moon always face Earth with the same side.\nEarth, like most other bodies in the Solar System, formed 4.5 billion years ago from gas and dust in the early Solar System. During the first billion years of Earth's history, the ocean formed and then life developed within it. Life spread globally and has been altering Earth's atmosphere and surface, leading to the Great Oxidation Event two billion years ago. Humans emerged 300,000 years ago in Africa and have spread across every continent on Earth. Humans depend on Earth's biosphere and natural resources for their survival, but have increasingly impacted the planet's environment. Humanity's current impact on Earth's climate and biosphere is unsustainable, threatening the livelihood of humans and many other forms of life, and causing widespread extinctions.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Earth"
            },
            "Q2002": {
                "name": "2015",
                "wikidata_aliases": [
                    "2015 AD",
                    "2015 CE",
                    "twenty fifteen",
                    "two thousand and fifteen",
                    "MMXV"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2002",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q201": {
                "name": "3",
                "wikidata_aliases": [
                    "three",
                    "III",
                    "Ⅲ",
                    "ⅲ",
                    "M2",
                    "number 3",
                    "number three",
                    "tri",
                    "the number 3",
                    "③",
                    "➂",
                    "⓷",
                    "❸",
                    "➌",
                    "⒊",
                    "⑶",
                    "๓",
                    "৩",
                    "3 (number)"
                ],
                "wikidata_summary": "natural number",
                "wikidata_url": "https://www.wikidata.org/wiki/Q201",
                "wikipedia_summary": "3 (three) is a number, numeral and digit. It is the natural number following 2 and preceding 4, and is the smallest odd prime number and the only prime preceding a square number. It has religious and cultural significance in many societies.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/3"
            },
            "Q2021": {
                "name": "2006",
                "wikidata_aliases": [
                    "2006 AD",
                    "MMVI"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2021",
                "wikipedia_summary": "2006 (MMVI) was a common year starting on Sunday of the Gregorian calendar, the 2006th year of the Common Era (CE) and Anno Domini (AD) designations, the 6th  year of the 3rd millennium and the 21st century, and the  7th   year of the 2000s decade.  \n\n2006 was designated as the International Year of Deserts and Desertification.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2006"
            },
            "Q2030942": {
                "name": "New Look",
                "wikidata_aliases": [],
                "wikidata_summary": "fashion style created in 1947 by Christian Dior",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2030942",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q203994": {
                "name": "Euphoria",
                "wikidata_aliases": [
                    "happiness",
                    "pleasure",
                    "contentment"
                ],
                "wikidata_summary": "mental and emotional condition in which a person experiences intense feelings of well-being, elation, happiness and excitement",
                "wikidata_url": "https://www.wikidata.org/wiki/Q203994",
                "wikipedia_summary": "Euphoria (  yoo-FOR-ee-ə) is the experience (or affect) of pleasure or excitement and intense feelings of well-being and happiness. Certain natural rewards and social activities, such as aerobic exercise, laughter, listening to or making music and dancing, can induce a state of euphoria. Euphoria is also a symptom of certain neurological or neuropsychiatric disorders, such as mania. Romantic love and components of the human sexual response cycle are also associated with the induction of euphoria. Certain drugs, many of which are addictive, can cause euphoria, which at least partially motivates their recreational use.\nHedonic hotspots – i.e., the pleasure centers of the brain – are functionally linked. Activation of one hotspot results in the recruitment of the others. Inhibition of one hotspot results in the blunting of the effects of activating another hotspot. Therefore, the simultaneous activation of every hedonic hotspot within the reward system is believed to be necessary for generating the sensation of an intense euphoria.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Euphoria"
            },
            "Q204018": {
                "name": "Therapist",
                "wikidata_aliases": [
                    "Kill Edward",
                    "Jermaine Lamarr Cole",
                    "Hollywood Cole",
                    "Therapist"
                ],
                "wikidata_summary": "American rapper and record producer (born 1985)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q204018",
                "wikipedia_summary": "A therapist is a person who offers any kinds of therapy. Therapists are trained professionals in the field of any types of services like psychologists, social workers, counsellors, etc. They are helpful in counseling individuals for various mental and physical issues.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Therapist"
            },
            "Q204670": {
                "name": "An Inconvenient Truth",
                "wikidata_aliases": [
                    "Inconvenient Truth"
                ],
                "wikidata_summary": "2006 film by Davis Guggenheim",
                "wikidata_url": "https://www.wikidata.org/wiki/Q204670",
                "wikipedia_summary": "An Inconvenient Truth is a 2006 American documentary film directed by Davis Guggenheim about former United States Vice President Al Gore's campaign to educate people about global warming. The film features a slide show that, by Gore's own estimate, he has presented over 1,000 times to audiences worldwide.\nThe idea to document Gore's efforts came from producer Laurie David, who saw his presentation at a town hall meeting on global warming, which coincided with the opening of The Day After Tomorrow. Laurie David was so inspired by his slide show that she, with producer Lawrence Bender, met with Guggenheim to adapt the presentation into a film. Premiering at the 2006 Sundance Film Festival and opening in New York City and Los Angeles on May 24, 2006, the film was a critical and commercial success, winning two Academy Awards for Best Documentary Feature and Best Original Song. The film grossed $24 million in the US and $26 million in other countries’ box offices, becoming the eleventh highest grossing documentary film to date in the United States.\nSince the film's release, An Inconvenient Truth has been credited for raising international public awareness of global warming and reenergizing the environmental movement. The documentary has also been included in science curricula in schools around the world, which has spurred some controversy. A sequel to the film, titled An Inconvenient Sequel: Truth to Power, was released on July 28, 2017.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/An_Inconvenient_Truth"
            },
            "Q2060": {
                "name": "1992",
                "wikidata_aliases": [
                    "MCMXCII"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2060",
                "wikipedia_summary": "1992 (MCMXCII) was a leap year starting on Wednesday of the Gregorian calendar, the 1992nd year of the Common Era (CE) and Anno Domini (AD) designations, the 992nd  year of the 2nd millennium, the 92nd  year of the 20th century, and the  3rd   year of the 1990s decade.  \n1992 was designated as International Space Year by the United Nations.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1992"
            },
            "Q2065": {
                "name": "1993",
                "wikidata_aliases": [
                    "MCMXCIII"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2065",
                "wikipedia_summary": "1993 (MCMXCIII) was a common year starting on Friday of the Gregorian calendar, the 1993rd year of the Common Era (CE) and Anno Domini (AD) designations, the 993rd  year of the 2nd millennium, the 93rd  year of the 20th century, and the  4th   year of the 1990s decade.  \n1993 was designated as:\n\nInternational Year for the World's Indigenous People\nThe year 1993 in the Kwajalein Atoll in the Marshall Islands had only 364 days, since its calendar advanced 24 hours to the Eastern Hemisphere side of the International Date Line, skipping August 21, 1993.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1993"
            },
            "Q2067": {
                "name": "1994",
                "wikidata_aliases": [
                    "MCMXCIV"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2067",
                "wikipedia_summary": "1994 (MCMXCIV) was a common year starting on Saturday of the Gregorian calendar, the 1994th year of the Common Era (CE) and Anno Domini (AD) designations, the 994th  year of the 2nd millennium, the 94th  year of the 20th century, and the  5th   year of the 1990s decade.   The year 1994 was designated as the 'International Year of the Family' and the 'International Year of Sport and the Olympic Ideal' by the United Nations.\nIn the Line Islands and Phoenix Islands of Kiribati, 1994 had only 364 days, omitting December 31. This was due to an adjustment of the International Date Line by the Kiribati government to bring all of its territories into the same calendar day.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1994"
            },
            "Q2070": {
                "name": "1996",
                "wikidata_aliases": [
                    "MCMXCVI"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2070",
                "wikipedia_summary": "1996 (MCMXCVI) was a leap year starting on Monday of the Gregorian calendar, the 1996th year of the Common Era (CE) and Anno Domini (AD) designations, the 996th  year of the 2nd millennium, the 96th  year of the 20th century, and the  7th   year of the 1990s decade.  \n1996 was designated as:\n\nInternational Year for the Eradication of Poverty",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1996"
            },
            "Q2071301": {
                "name": "Katniss Everdeen",
                "wikidata_aliases": [
                    "The Girl On Fire",
                    "The Mockingjay"
                ],
                "wikidata_summary": "character in the Hunger Games story",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2071301",
                "wikipedia_summary": "Katniss Everdeen is a fictional character and the protagonist of The Hunger Games trilogy written by American author Suzanne Collins. She is portrayed by Jennifer Lawrence in the film adaptations The Hunger Games, The Hunger Games: Catching Fire, The Hunger Games: Mockingjay – Part 1, and The Hunger Games: Mockingjay – Part 2.\nKatniss and her family come from District 12, a coal-mining district that is the poorest, least populated, and smallest district in the dystopian fictional autocratic nation of Panem, ruled by the wealthy Capitol. In the course of the first book, The Hunger Games, Katniss competes in the Hunger Games after she is allowed to volunteer in place of her little sister, Primrose 'Prim' Everdeen. While in the arena, Katniss forms an alliance with Rue, the young female tribute from District 11, as she reminds Katniss of her sister. After Rue is killed by a Career Tribute named Marvel, Katniss sings her a lullaby and covers her body in flowers. Later, District 11 shows solidarity with Katniss over Rue’s death and gifts her bread shaped like a moon and covered in seeds. Katniss then forms an alliance with her fellow District 12 tribute, Peeta, and grows close to him. The two eventually make it to the finale of the games, where they become the victors after defying the Capitol's attempt to force one to kill the other.\nThroughout the next two novels, Catching Fire and Mockingjay, Katniss becomes a galvanizing symbol of rebellion against the oppressive Capitol. After the rebellion is victorious, Katniss chooses not to execute President Snow; she instead shoots Alma Coin, the corrupt leader of the thought-destroyed District 13, leaving President Snow’s cause of death ambiguous. She later begins a family with Peeta in the now peaceful Panem. To cope with her trauma, she often plays a game in which she thinks about every kind act she has ever witnessed people do, and reflects that “there are much worse games to play.”",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Katniss_Everdeen"
            },
            "Q207799": {
                "name": "Juggernaut",
                "wikidata_aliases": [
                    "Sri Jagannath Dham",
                    "Jaggannatha",
                    "Juggernaut"
                ],
                "wikidata_summary": "city in Odisha, India",
                "wikidata_url": "https://www.wikidata.org/wiki/Q207799",
                "wikipedia_summary": "A juggernaut ( ), in current English usage, is a literal or metaphorical force regarded as merciless, destructive, and unstoppable. This English usage originated in the mid-nineteenth century and was the early rendering in English of Jagannath, an important deity in the Hinduism of north-east India. \nSince the Middle Ages, Europeans had been fascinated by accounts of the Ratha Yatra ('Temple car procession') at Puri, which claimed that pilgrims threw themselves under the temple cars, although by 1825 it was said that 'That excess of fanaticism which formerly prompted the pilgrims to court death by throwing themselves in crowds under the wheels of the car of Jaganath, has happily long ceased'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Juggernaut"
            },
            "Q208544": {
                "name": "Gambit",
                "wikidata_aliases": [],
                "wikidata_summary": "chess opening in which a player sacrifices material with the hope of achieving a resulting advantageous position",
                "wikidata_url": "https://www.wikidata.org/wiki/Q208544",
                "wikipedia_summary": "A gambit (from Italian gambetto, the act of tripping someone with the leg to make them fall) is a chess opening in which a player sacrifices material with the aim of achieving a subsequent positional advantage.\nThe word gambit is also sometimes used to describe similar tactics used by politicians or business people in a struggle with rivals in their fields, for example: 'The early election was a risky gambit by Theresa May.'\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Gambit"
            },
            "Q20882479": {
                "name": "Anya Taylor-Joy",
                "wikidata_aliases": [
                    "Anya Josephine Maria Taylor-Joy",
                    "Anya-Josephine Maria Taylor-Joy."
                ],
                "wikidata_summary": "British-American actress and model (born 1996)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20882479",
                "wikipedia_summary": "Anya-Josephine Marie Taylor-Joy (; born 16 April 1996) is an actress. She has won several accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for a BAFTA Film Award and a Primetime Emmy Award.\nBorn in Miami and raised in Buenos Aires and London, Taylor-Joy left school at the age of 16 to pursue an acting career. After portraying small television roles, she found success through the lead role in the acclaimed horror film The Witch (2015). Taylor-Joy starred in the horror film Split (2016), its sequel Glass (2019), and the black comedy Thoroughbreds (2017), and won the Trophée Chopard at the 2017 Cannes Film Festival.\nTaylor-Joy appeared in the fifth and sixth seasons of the television crime drama Peaky Blinders (2019–2022), and played Emma Woodhouse in the period drama Emma (2020), which gained her a Golden Globe nomination. In 2020, she received acclaim and international recognition for her performance as chess prodigy Beth Harmon in the Netflix miniseries The Queen's Gambit, winning a Golden Globe and a Screen Actors Guild Award, as well as receiving a nomination for a Primetime Emmy. Taylor-Joy has since starred in the films Last Night in Soho (2021), The Northman (2022), The Menu (2022), and The Super Mario Bros. Movie (2023).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Anya_Taylor-Joy"
            },
            "Q2089": {
                "name": "1998",
                "wikidata_aliases": [
                    "MCMXCVIII"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2089",
                "wikipedia_summary": "1998 (MCMXCVIII) was a common year starting on Thursday of the Gregorian calendar, the 1998th year of the Common Era (CE) and Anno Domini (AD) designations, the 998th  year of the 2nd millennium, the 98th  year of the 20th century, and the  9th   year of the 1990s decade.  \n1998 was designated as the International Year of the Ocean.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1998"
            },
            "Q20974088": {
                "name": "Charlie Heaton",
                "wikidata_aliases": [
                    "Charlie",
                    "Charlie Ross Heaton"
                ],
                "wikidata_summary": "British actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q20974088",
                "wikipedia_summary": "Charles Ross Heaton (born 6 February 1994) is an English actor and musician. He is known for starring as Jonathan Byers in the Netflix science fiction horror series Stranger Things (2016–present) and for his roles in feature films like As You Are (2016), Marrowbone (2017), The New Mutants (2020), No Future (2021), and The Souvenir Part II (2021). Prior to his acting career, Heaton played in a number of London-based bands.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Charlie_Heaton"
            },
            "Q2109149": {
                "name": "Hellfire Club",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional society in the Marvel Comics universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2109149",
                "wikipedia_summary": "'Hellfire club' was a term used to describe several exclusive clubs for high-society rakes established in Britain and Ireland in the 18th Century. The name most commonly refers to Francis Dashwood's Order of the Friars of St. Francis of Wycombe. Such clubs, rumour had it, served as the meeting places of 'persons of quality' who wished to take part in what were socially perceived as immoral acts, and the members were often involved in politics. Neither the activities nor membership of the clubs are easy to ascertain. The clubs allegedly had distant ties to an elite society known only as 'The Order of the Second Circle'.\nThe first official Hellfire club was founded in London in 1718, by Philip Wharton, 1st Duke of Wharton and a handful of other high-society friends. The most notorious club associated with the name was established in England by Francis Dashwood, and met irregularly from around 1749 to around 1760, and possibly up until 1766. The term was closely associated with Brooks's, established in 1764. Other groups described as 'Hellfire clubs' were set up throughout the 18th Century. Most of these arose in Ireland after Wharton's had been dissolved.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hellfire_Club"
            },
            "Q211236": {
                "name": "Celebrity",
                "wikidata_aliases": [
                    "famous person",
                    "prominent person",
                    "famous persons",
                    "celebrities",
                    "public figures"
                ],
                "wikidata_summary": "prominent person who commands some degree of public fascination and appears in the media",
                "wikidata_url": "https://www.wikidata.org/wiki/Q211236",
                "wikipedia_summary": "Celebrity is a condition of fame and broad public recognition of a person or group as a result of the attention given to them by mass media. An individual may attain a celebrity status from having great wealth, their participation in sports or the entertainment industry, their position as a political figure, or even from their connection to another celebrity. 'Celebrity' usually implies a favorable public image, as opposed to the neutrals 'famous' or 'notable', or the negatives 'infamous' and 'notorious'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Celebrity"
            },
            "Q211374": {
                "name": "New York Post",
                "wikidata_aliases": [
                    "NY Post",
                    "The New York Post",
                    "New York Evening Post",
                    "nypost.com",
                    "New‐York Evening Post"
                ],
                "wikidata_summary": "daily tabloid newspaper",
                "wikidata_url": "https://www.wikidata.org/wiki/Q211374",
                "wikipedia_summary": "The New York Post (NY Post) is an American conservative daily tabloid newspaper published in New York City. The Post also operates three online sites, NYPost.com, PageSix.com, a gossip site, and Decider.com, an entertainment site.\nThe newspaper was founded in 1801 by Alexander Hamilton, a Federalist and Founding Father who was appointed the nation's first Secretary of the Treasury by George Washington. The newspaper became a respected broadsheet in the 19th century, under the name New York Evening Post. Its most notable 19th-century editor was William Cullen Bryant. \nIn the mid-20th century, the newspaper was owned by Dorothy Schiff, who developed the tabloid format that has been used since by the newspaper. In 1976, Rupert Murdoch's News Corp bought the Post for US$30.5 million. \nThe New York Post is the ninth-largest circulation newspaper in the U.S. as of 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/New_York_Post"
            },
            "Q21207531": {
                "name": "Vittoria Ceretti",
                "wikidata_aliases": [],
                "wikidata_summary": "Italian supermodel",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21207531",
                "wikipedia_summary": "Vittoria Ceretti (born 7 June 1998) is an Italian supermodel. Ceretti was discovered in 2012 through the Elite Model Look Model contest. Models.com ranks Ceretti as one of the 'New Supers'. Known for her versatility and her striking features Ceretti has managed to become one of the most praised and well-known supermodels of this generation. As of 2024, Ceretti has walked  400 fashion shows and has graced the cover of international Vogue 23 times.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vittoria_Ceretti"
            },
            "Q21452185": {
                "name": "Fassbender",
                "wikidata_aliases": [
                    "Fassbender (family name)",
                    "Fassbender (surname)"
                ],
                "wikidata_summary": "family name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21452185",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q21487442": {
                "name": "McAvoy",
                "wikidata_aliases": [],
                "wikidata_summary": "family name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21487442",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2155": {
                "name": "1920",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2155",
                "wikipedia_summary": "1920 (MCMXX) was a leap year starting on Thursday of the Gregorian calendar and a leap year starting on Wednesday of the Julian calendar, the 1920th year of the Common Era (CE) and Anno Domini (AD) designations, the 920th  year of the 2nd millennium, the 20th  year of the 20th century, and the  1st   year of the 1920s decade. As of the start of 1920, the Gregorian calendar was 13 days ahead of the Julian calendar, which remained in localized use until 1923. \n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1920"
            },
            "Q21590660": {
                "name": "Western (genre)",
                "wikidata_aliases": [
                    "Western genre",
                    "Western fiction",
                    "Western art",
                    "Old West art"
                ],
                "wikidata_summary": "multimedia genre of stories set primarily in the American Old West",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21590660",
                "wikipedia_summary": "The Western is a genre of fiction typically set in the American frontier between the California Gold Rush of 1849 and the closing of the frontier in 1890, and commonly associated with folk tales of the Western United States, particularly the Southwestern United States, as well as Northern Mexico and Western Canada.: 7 \nThe frontier was commonly referred to as the 'Old West' or the 'Wild West' and depicted in Western media as a sparsely populated hostile region patrolled by cowboys, outlaws, sheriffs, and numerous other stock 'gunslinger' characters. Western narratives often concern the gradual attempts to tame the crime-ridden American West using wider themes of justice, freedom, rugged individualism, manifest destiny, and the national history and identity of the United States. Native American 'Indian' populations were often portrayed as averse foes and/or savages.\nOriginating in vaquero heritage and Western fiction, the genre popularized the Western lifestyle, country-Western music, and Western wear globally. Throughout the history of the genre, it has seen popular revivals and been incorporated into various subgenres.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Western_(genre)"
            },
            "Q217004": {
                "name": "Josh Hutcherson",
                "wikidata_aliases": [
                    "Joshua Ryan Hutcherson"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q217004",
                "wikipedia_summary": "Joshua 'Josh' Ryan Hutcherson (born October 12, 1992) is an American actor. He began acting in the early 2000s and appeared in several commercials and minor film and television roles before gaining prominence in his teenage years with main roles in Little Manhattan and Zathura: A Space Adventure (both 2005), RV (2006), Bridge to Terabithia (2007), Journey to the Center of the Earth (2008), and The Kids Are All Right (2010).\nIn 2011, 18-year-old Hutcherson landed the leading role of Peeta Mellark in the top-grossing film series The Hunger Games, released yearly between 2012 and 2015, for which he won three MTV Movie Awards and a People's Choice Award. In the same period, he also played a lead role in Journey 2: The Mysterious Island (2012) and voice role in the animated film Epic (2013).\nSince this period, Hutcherson decreased his workload for a few years and appeared in several independent films. On television, he starred in the Hulu comedy series Future Man from 2017 to 2020 and voiced the lead character in Ultraman (2019–2023). He has since starred in the commercially successful horror film Five Nights at Freddy's (2023) and action film The Beekeeper (2024). \nThroughout his career, Hutcherson has expressed an interest in filmmaking. He has served as an executive producer for Detention (2011), The Forger (2012), and Escobar: Paradise Lost (2015), while also playing a lead role in each film.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Josh_Hutcherson"
            },
            "Q21731652": {
                "name": "President of Panem",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional position",
                "wikidata_url": "https://www.wikidata.org/wiki/Q21731652",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q217552": {
                "name": "X-Men Origins: Wolverine",
                "wikidata_aliases": [],
                "wikidata_summary": "2009 film directed by Gavin Hood",
                "wikidata_url": "https://www.wikidata.org/wiki/Q217552",
                "wikipedia_summary": "X-Men Origins: Wolverine is a 2009 American superhero film based on the Marvel Comics fictional character Wolverine. It is the fourth installment of the X-Men film series, the first installment of the Wolverine trilogy within the series, and a spin-off/prequel to X-Men (2000) and X2 (2003). The film was directed by Gavin Hood, written by David Benioff and Skip Woods, and produced by Hugh Jackman, who stars as the titular character, alongside Liev Schreiber, Danny Huston, Dominic Monaghan, and Ryan Reynolds. The film's plot details Wolverine's childhood as James Howlett, his time with Major William Stryker's Team X, the bonding of Wolverine's skeleton with the indestructible metal adamantium during the Weapon X program and his relationship with his half-brother Victor Creed.\nThe film was mostly shot in Australia and New Zealand, with Canada also serving as a location. Filming took place from January to May 2008. Production and post-production were troubled, with delays due to the weather and Jackman's other commitments, an incomplete screenplay that was still being written in Los Angeles while principal photography rolled in Australia, conflicts arising between director Hood and Fox's executives over the film's direction, and an unfinished workprint being leaked on the internet a month before the film's debut.\nX-Men Origins: Wolverine was released on May 1, 2009, by 20th Century Fox. The film was criticized for its story, script, visual effects, pacing, and editing but Jackman's performance was praised. Jackman later expressed his unhappiness with the final product. The film opened at the top of the North American box office and grossed $179 million in the United States and Canada and $373.1 million worldwide. A second film, The Wolverine, was released in 2013 and a third film, Logan, was released in 2017.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Men_Origins:_Wolverine"
            },
            "Q219507": {
                "name": "Simon Kinberg",
                "wikidata_aliases": [
                    "Simon David Kinberg"
                ],
                "wikidata_summary": "British-American screenwriter, film producer and director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q219507",
                "wikipedia_summary": "Simon David Kinberg (born August 2, 1973) is a British-born American filmmaker. He wrote or produced a number of films in the 20th Century Fox X-Men film franchise, and has also written such films as Mr. & Mrs. Smith and Sherlock Holmes. He has served as a producer on others including Cinderella and The Martian, the latter which was nominated for the Academy Award for Best Picture. His production company Genre Films had a first-look deal with 20th Century Fox. Kinberg made his directorial debut in the 2019 X-Men film Dark Phoenix from a script he also wrote.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Simon_Kinberg"
            },
            "Q219776": {
                "name": "X2",
                "wikidata_aliases": [
                    "X2: X-Men United",
                    "X-Men 2"
                ],
                "wikidata_summary": "2003 film directed by Bryan Singer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q219776",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q220499": {
                "name": "Streaming media",
                "wikidata_aliases": [],
                "wikidata_summary": "continuous multimedia operated and presented to users by a provider",
                "wikidata_url": "https://www.wikidata.org/wiki/Q220499",
                "wikipedia_summary": "Streaming media refers to multimedia for playback using an offline or online media player that is delivered through a network. Media is transferred in a 'stream' of packets from a server to a client and is rendered in real-time; this contrasts with file downloading, a process in which the end-user obtains an entire media file before consuming the content. Streaming is presently most prevalent in video-on-demand, streaming television, and music streaming services over the Internet.\nWhile streaming is most commonly associated with multimedia from a remote server over the Internet, it also includes offline multimedia between devices on a local area network, for example using DLNA and a home server, or in a personal area network between two devices using Bluetooth (which uses radio waves rather than IP). Online streaming was initially popularised by RealNetworks and Microsoft in the 1990s and has since grown to become the globally most popular method for consuming music and video, with numerous competing subscription services being offered since the 2010s. Audio streaming to wireless speakers, often using Bluetooth, is another use that has become prevalent during that decade. Live streaming is the real-time delivery of content during production, much as live television broadcasts content via television channels.\nDistinguishing delivery methods from the media applies specifically to, as most of the traditional media delivery systems are either inherently streaming (e.g., radio, television) or inherently non-streaming (e.g., books, videotapes, audio CDs). The term 'streaming media' can apply to media other than video and audio, such as live closed captioning, ticker tape, and real-time text, which are all considered 'streaming text'.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Streaming_media"
            },
            "Q220751": {
                "name": "Bryan Singer",
                "wikidata_aliases": [
                    "Bryan Jay Singer"
                ],
                "wikidata_summary": "American film director, writer and producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q220751",
                "wikipedia_summary": "Bryan Jay Singer (born September 16, 1965) is an American filmmaker. He is the founder of Bad Hat Harry Productions and has produced almost all of the films he has directed.\nAfter graduating from the University of Southern California, Singer directed his first short film, Lion's Den (1988). On the basis of that film, he received financing for his next film, Public Access (1993), which was a co-winner of the Grand Jury Prize at the 1993 Sundance Film Festival. In the mid-1990s, Singer received critical acclaim for directing the neo-noir crime thriller The Usual Suspects (1995). He followed this with another thriller, Apt Pupil (1998), an adaptation of a Stephen King novella about a boy's fascination with a Nazi war criminal.\nIn the 2000s, he became known for big budget superhero films such as X-Men (2000), for which Singer won the 2000 Saturn Award for Best Direction, its sequel X2 (2003), and Superman Returns (2006). He then directed the World War II historical thriller Valkyrie (2008), co-wrote/co-produced X-Men: First Class (2011), and directed the fantasy adventure film Jack the Giant Slayer (2013), as well as two more X-Men films, X-Men: Days of Future Past (2014) and X-Men: Apocalypse (2016). Singer also directed the Queen biographical film Bohemian Rhapsody (2018), although he was fired from the film during filming due to clashes with the cast and crew.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bryan_Singer"
            },
            "Q221168": {
                "name": "X-Men: The Last Stand",
                "wikidata_aliases": [
                    "X-Men 3 - The Last Stand",
                    "X-Men 3"
                ],
                "wikidata_summary": "2006 film directed by Brett Ratner",
                "wikidata_url": "https://www.wikidata.org/wiki/Q221168",
                "wikipedia_summary": "X-Men: The Last Stand (also marketed as X3: The Last Stand, or X-Men 3) is a 2006 superhero film based on the X-Men comic books published by Marvel Entertainment Group. It is the sequel to X2, as well as the third installment in the X-Men film series, and was directed by Brett Ratner. It features an ensemble cast including Hugh Jackman, Halle Berry, Ian McKellen, Famke Janssen, Anna Paquin, Kelsey Grammer, James Marsden, Rebecca Romijn, Shawn Ashmore, Aaron Stanford, Vinnie Jones, and Patrick Stewart. Written by Simon Kinberg and Zak Penn, the film is loosely based on two X-Men comic book story arcs, 'Gifted' and 'The Dark Phoenix Saga', with a plot that revolves around a 'mutant cure' that causes serious repercussions among mutants and humans, and on the resurrection of Jean Grey who unleashes a dark force.\nBryan Singer, who had directed the two previous films, X-Men and X2, decided to leave the sequel to work on Superman Returns (2006). X2 composer and editor John Ottman and X2 writers Dan Harris and Michael Dougherty also left to work on Superman Returns, as did James Marsden, who had very limited screen time in The Last Stand before his character was killed off due to his departure from the film. Singer had not even defined the storyline for a third film. Matthew Vaughn, who co-wrote the script (though was uncredited) and was initially hired as the new director, left due to personal and professional issues, and was replaced with Ratner. Filming took place from August 2005 to January 2006 with a budget of $210 million, and was consequently the most expensive film made at the time of its release. It had extensive visual effects created by 11 different companies.\nX-Men: The Last Stand premiered in the Out of Competition section at the 2006 Cannes Film Festival, and was released theatrically in the United States on May 26 by 20th Century Fox. It grossed approximately $459 million worldwide, becoming the seventh-highest-grossing film of 2006; it was at the time the highest-grossing film in the series and after 2018 stood as the fourth-highest-grossing film of the franchise.  It received mixed reviews from critics and was deemed inferior to its predecessors.\nA standalone sequel, The Wolverine, was released in 2013; it was followed by X-Men: Days of Future Past a year later in 2014, which retconned the events of The Last Stand.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Men:_The_Last_Stand"
            },
            "Q223177": {
                "name": "Casper",
                "wikidata_aliases": [
                    "Casper, Wyoming",
                    "Red Hill City",
                    "Casper, WY"
                ],
                "wikidata_summary": "city in and county seat of Natrona County, Wyoming, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q223177",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q223687": {
                "name": "Wes Anderson",
                "wikidata_aliases": [
                    "Wesley Anderson",
                    "Wesley Wales Anderson"
                ],
                "wikidata_summary": "American filmmaker (born 1969)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q223687",
                "wikipedia_summary": "Wesley Wales Anderson (born May 1, 1969) is an American filmmaker. His films are known for their eccentricity, unique visual and narrative styles, and frequent use of ensemble casts. They often contain themes of grief, loss of innocence, and dysfunctional families. Some critics cite Anderson as an auteur. Three of his films have appeared in BBC Culture's 2016 poll of the greatest films since 2000.\nAnderson gained acclaim for his early films Bottle Rocket (1996) and Rushmore (1998). He often collaborated with brothers Luke Wilson and Owen Wilson during that time and founded his production company American Empirical Pictures. He received a nomination for the Academy Award for Best Original Screenplay for The Royal Tenenbaums (2001). His next films included The Life Aquatic with Steve Zissou (2004), The Darjeeling Limited (2007), and his first stop-motion film, Fantastic Mr. Fox (2009), for which he received a Best Animated Feature nomination, and then Moonrise Kingdom (2012), earning his second Best Original Screenplay nomination.\nFor his film The Grand Budapest Hotel (2014), he received his first Academy Award nominations for Best Director and Best Picture, and won the Golden Globe Award for Best Motion Picture – Musical or Comedy and the BAFTA Award for Best Original Screenplay. Later works include his second stop-motion film, Isle of Dogs (2018), earning him the Silver Bear for Best Director and another Best Animated Feature nomination, followed by The French Dispatch (2021) and Asteroid City (2023). Anderson won the Academy Award for Best Live Action Short Film for The Wonderful Story of Henry Sugar (2023).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wes_Anderson"
            },
            "Q22687": {
                "name": "Bank",
                "wikidata_aliases": [
                    "financial institution"
                ],
                "wikidata_summary": "financial institution that accepts deposits",
                "wikidata_url": "https://www.wikidata.org/wiki/Q22687",
                "wikipedia_summary": "A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans. Lending activities can be directly performed by the bank or indirectly through capital markets.\nWhereas banks play an important role in financial stability and the economy of a country, most jurisdictions exercise a high degree of regulation over banks. Most countries have institutionalized a system known as fractional-reserve banking, under which banks hold liquid assets equal to only a portion of their current liabilities. In addition to other regulations intended to ensure liquidity, banks are generally subject to minimum capital requirements based on an international set of capital standards, the Basel Accords.\nBanking in its modern sense evolved in the fourteenth century in the prosperous cities of Renaissance Italy but, in many ways, functioned as a continuation of ideas and concepts of credit and lending that had their roots in the ancient world. In the history of banking, a number of banking dynasties –  notably, the Medicis, the Fuggers, the Welsers, the Berenbergs, and the Rothschilds –  have played a central role over many centuries. The oldest existing retail bank is Banca Monte dei Paschi di Siena (founded in 1472), while the oldest existing merchant bank is Berenberg Bank (founded in 1590).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bank"
            },
            "Q2272387": {
                "name": "2019, After the Fall of New York",
                "wikidata_aliases": [
                    "2019 - Dopo la caduta di New York",
                    "After the Fall of New York"
                ],
                "wikidata_summary": "1983 film by Sergio Martino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2272387",
                "wikipedia_summary": "2019, After the Fall of New York, also known simply as After the Fall of New York (Italian: 2019 - Dopo la caduta di New York) is a 1983 Italian science fiction film directed by Sergio Martino in both English and Italian. The film belongs to the post-apocalyptic Italian genre similar to the films 1990 The Bronx Warriors and Endgame. It is set in 2019, after a nuclear apocalypse, and stars a mercenary out to rescue the last fertile woman on Earth. The film starred Michael Sopkiw, Valentine Monnier, Anna Kanakis, and B-movie regular George Eastman.\nThe film was influenced by John Carpenter's Escape from New York and George Miller's Mad Max 2.\nThe story's premise bears some similarities with Alfonso Cuarón's 2006 film Children of Men. Besides the idea of the lack of fertile women in Earth, both films include a scene with Picasso's Guernica used as a backdrop.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2019,_After_the_Fall_of_New_York"
            },
            "Q2279870": {
                "name": "McLaren MP4-21",
                "wikidata_aliases": [],
                "wikidata_summary": "Formula One car designed by Adrian Newey",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2279870",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q228624": {
                "name": "Suzanne Collins",
                "wikidata_aliases": [
                    "Suzanne Marie Collins"
                ],
                "wikidata_summary": "American television writer and novelist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q228624",
                "wikipedia_summary": "Suzanne Marie Collins (born August 10, 1962) is an American author and television writer. She is best known as the author of the young adult dystopian book series The Hunger Games. She is also the author of the children's fantasy series The Underland Chronicles.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Suzanne_Collins"
            },
            "Q228699": {
                "name": "Sharon Tate",
                "wikidata_aliases": [
                    "Sharon Marie Tate",
                    "Sharon Marie Tate Polanski"
                ],
                "wikidata_summary": "American actress and model (1943–1969)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q228699",
                "wikipedia_summary": "Sharon Marie Tate Polanski (January 24, 1943 – August 9, 1969) was an American actress and model. During the 1960s, she appeared in advertisements and small television roles before appearing in films as well as working as a model. After receiving positive reviews for her comedic and dramatic acting performances, Tate was hailed as one of Hollywood's most promising newcomers, being compared favorably with the late Marilyn Monroe. \nShe made her film debut in 1961 as an extra in Barabbas with Anthony Quinn. She next appeared in the British mystery horror film Eye of the Devil (1966). Her first major role was as Jennifer North in the 1967 American drama film Valley of the Dolls, which earned her a Golden Globe Award nomination. The role would help her to become a rising sex symbol of Hollywood, appearing in a Playboy photoshoot where she would be shot by filmmaker Roman Polanski, Tate's future husband. That year, she also performed in the comedy horror film The Fearless Vampire Killers, directed by Roman Polanski. Tate's last completed film, 12+1, was released posthumously in 1969.\nOn August 9, 1969, Tate and four others were murdered by members of the Manson Family, a cult, in the home she shared with Polanski, while he was away. She was eight-and-a-half months pregnant.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sharon_Tate"
            },
            "Q229181": {
                "name": "Viola Davis",
                "wikidata_aliases": [
                    "La Viola Davis"
                ],
                "wikidata_summary": "American actress and producer (born 1965)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q229181",
                "wikipedia_summary": "Viola Davis (; born August 11, 1965) is an American actress and film producer. Known for her work across screen and stage, she has received numerous accolades and is one of three artists to achieve both the Triple Crown of Acting and the EGOT. Time named her one of the 100 most influential people in the world in 2012 and 2017. In 2020, The New York Times ranked her ninth on its list of the greatest actors of the 21st century.\nA graduate of Juilliard, Davis began her career in Central Falls, Rhode Island, appearing in small stage productions, before expanding to screen with minor roles in film and television during the late 1990s and early 2000s. She won two Tony Awards—Best Featured Actress in a Play and Best Actress in a Play—for the respective roles of Tonya in the 2001 Broadway production of August Wilson's King Hedley II and Rose Maxson in the Broadway revival of Wilson's play Fences (2010).\nThe drama Doubt (2008) earned Davis her first Academy Award nomination. She received nominations for the Academy Award for Best Actress for playing a 1960s housemaid in The Help (2011) and Ma Rainey in the biopic Ma Rainey's Black Bottom (2020). She won the Academy Award for Best Supporting Actress for reprising her role in the 2016 film adaptation of Fences. Her role as lawyer Annalise Keating in the ABC drama series How to Get Away with Murder (2014–2020) won her the Primetime Emmy Award for Outstanding Lead Actress in a Drama Series, making her the first black actress to do so. Davis is also recognized for appearing in big budget blockbusters, playing Amanda Waller in the DC Extended Universe, beginning with Suicide Squad (2016), and leading the historical action film The Woman King (2022).\nDavis and her husband are founders of the production company JuVee Productions, and she is also widely recognized for her advocacy and support for human rights and women of color. She became a L'Oréal Paris ambassador in 2019. The audiobook narration of her 2022 memoir Finding Me won her the Grammy Award for Best Audio Book, Narration & Storytelling Recording.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Viola_Davis"
            },
            "Q2325666": {
                "name": "Ax Men",
                "wikidata_aliases": [],
                "wikidata_summary": "American reality television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2325666",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q234363": {
                "name": "Maisie Williams",
                "wikidata_aliases": [
                    "Margaret Constance Williams"
                ],
                "wikidata_summary": "British actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q234363",
                "wikipedia_summary": "Margaret Constance 'Maisie' Williams (born 15 April 1997) is an English actress. Williams made her acting debut in 2011 as Arya Stark, a lead character in the HBO epic medieval fantasy television series Game of Thrones (2011–2019). She gained recognition and critical praise for her work on the show, and received two Emmy Award nominations. Williams' other television appearances include Ashildr in the BBC science fiction series Doctor Who (2015), starring in the British docudrama television film Cyberbully (2015), and in the British science-fiction teen thriller film iBoy (2017). She played the central character in the comedy action drama miniseries Two Weeks to Live (2020), and portrayed punk rock icon Jordan in Pistol (2022), a biopic about the Sex Pistols. Williams also voiced Cammie MacCloud in the American animated web series Gen:Lock (2019–2021).\nIn 2014, she starred as Lydia in her first feature film, the coming-of-age mystery drama The Falling, for which she received critical acclaim and several awards. She co-starred in films such as the romantic period-drama film Mary Shelley (2017), the animated prehistorical sports comedy film Early Man (2018), and the romantic comedy-drama film Then Came You (2018). In 2018, she made her stage debut in Lauren Gunderson's play I and You at the Hampstead Theatre in London, to positive reviews. In 2020, she starred in the superhero horror film The New Mutants and the psychological thriller The Owners.\nIn 2019, Williams jointly developed and launched the social media platform Daisie, a multi-media networking app designed to be an alternative means to help artists and creators (especially those who are trying to get started) in their careers.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Maisie_Williams"
            },
            "Q23548": {
                "name": "National Aeronautics and Space Administration",
                "wikidata_aliases": [
                    "NASA"
                ],
                "wikidata_summary": "American space and aeronautics agency",
                "wikidata_url": "https://www.wikidata.org/wiki/Q23548",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q23572": {
                "name": "Game of Thrones",
                "wikidata_aliases": [
                    "GoT",
                    "GOT"
                ],
                "wikidata_summary": "American fantasy drama television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q23572",
                "wikipedia_summary": "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.\nSet on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it. The second major arc focuses on the last descendant of the realm's deposed ruling dynasty, who has been exiled to Essos and is plotting to return and reclaim the throne. The third follows the Night's Watch, a military order defending the realm against threats from beyond Westeros's northern border.\nGame of Thrones attracted a record viewership on HBO and has a broad, active, and international fan base. Critics have praised the series for its acting, complex characters, story, scope, and production values, although its frequent use of nudity and violence (including sexual violence) generated controversy. The final season received significant criticism for its reduced length and creative decisions, with many considering it a disappointing conclusion. The series received 59 Primetime Emmy Awards, the most by a drama series, including Outstanding Drama Series in 2015, 2016, 2018 and 2019. Its other awards and nominations include three Hugo Awards for Best Dramatic Presentation, a Peabody Award, and five nominations for the Golden Globe Award for Best Television Series – Drama.\nA prequel series, House of the Dragon, premiered on HBO in 2022.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Game_of_Thrones"
            },
            "Q23673": {
                "name": "Once Upon a Time",
                "wikidata_aliases": [
                    "OUAT"
                ],
                "wikidata_summary": "American television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q23673",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q23732596": {
                "name": "Arakkankottai Gram Panchayat",
                "wikidata_aliases": [],
                "wikidata_summary": "panchayat in Erode district, Tamil Nadu",
                "wikidata_url": "https://www.wikidata.org/wiki/Q23732596",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q237579": {
                "name": "Fionnula Flanagan",
                "wikidata_aliases": [],
                "wikidata_summary": "Irish actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q237579",
                "wikipedia_summary": "Fionnghuala Manon 'Fionnula' Flanagan (born 10 December 1941) is an Irish stage, television, and film actress.  Flanagan is known for her roles in the films James Joyce's Women (1985), Some Mother's Son (1996), Waking Ned (1998), The Others (2001), Four Brothers (2005), Yes Man (2008), The Guard (2011) and Song of the Sea (2014). She is also known for her recurring role as  Eloise Hawking in the series Lost (2007–2010). Notable stage productions she has performed in include Ulysses in Nighttown and The Ferryman, both of which earned her Tony Award nominations for Best Featured Actress in a Play.\nFor her contributions to the entertainment industry, she was given the IFTA Lifetime Achievement Award in 2012. She was honored with the Maureen O'Hara Award at the Kerry Film Festival in 2011, the award is offered to women who have excelled in their chosen field in film. She was also nominated for two Primetime Emmy Awards (winning one) and won a Saturn Award. In 2020, she was listed at #23 on The Irish Times list of Ireland's greatest film actors.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Fionnula_Flanagan"
            },
            "Q24053263": {
                "name": "Logan (film)",
                "wikidata_aliases": [
                    "The Wolverine 3",
                    "Logan: The IMAX 2D Experience",
                    "Wolverine 3",
                    "Logan Noir"
                ],
                "wikidata_summary": "2017 film directed by James Mangold",
                "wikidata_url": "https://www.wikidata.org/wiki/Q24053263",
                "wikipedia_summary": "Logan is a 2017 American superhero film starring Hugh Jackman as the titular character. It is the tenth film in the X-Men film series and the third and final installment in the Wolverine trilogy, following X-Men Origins: Wolverine (2009) and The Wolverine (2013). The film, which takes inspiration from  the 'Old Man Logan' comics storyline by Mark Millar and Steve McNiven, follows an aged Wolverine and an extremely ill Charles Xavier who must defend a young mutant named Laura from the Reavers led by Donald Pierce and Zander Rice. The film is produced by 20th Century Fox, Marvel Entertainment, TSG Entertainment and The Donners' Company, and distributed by 20th Century Fox. It is directed by James Mangold, who co-wrote the screenplay with Michael Green and Scott Frank, from a story by Mangold. In addition to Jackman, the film also stars Patrick Stewart, Richard E. Grant, Boyd Holbrook, Stephen Merchant, and introducing Dafne Keen in her film debut as Laura.\nLogan was designed to look like the near future, with slight updates to technology and the social environment and was written with a dark and violent tone closer to the western genre than the traditional superhero genre. Principal photography began in Louisiana on May 2, 2016, and wrapped on August 13, 2016, in New Mexico. The locations used for Logan were mainly in Louisiana, New Mexico, and Mississippi. The film was given the false title of Juarez to lower visibility during production.\nLogan premiered at the 67th Berlin International Film Festival on February 17, 2017, and was theatrically released in the United States on March 3, 2017. The film received universal acclaim, with praise for its emotional depth, screenplay, action sequences, uncompromising tone, thematic profundity, and the performances of Jackman, Keen and Stewart. It became the best-reviewed film in the X-Men franchise, with some critics calling it one of the greatest superhero films ever made, and it was selected by the National Board of Review as one of the top ten films of 2017. It was nominated for Best Adapted Screenplay at the 90th Academy Awards, becoming the first live-action superhero film to be nominated for screenwriting. It grossed $619.2 million worldwide and became the third-highest-grossing R-rated film at the time of its release. Jackman will next reprise the role in Deadpool & Wolverine, scheduled for release on July 26, 2024.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Logan_(film)"
            },
            "Q240573": {
                "name": "Sophie Turner",
                "wikidata_aliases": [
                    "Sophie Belinda Jonas",
                    "Sophie Belinda Turner",
                    "Sophie Jonas",
                    "Sophie Turner Jonas",
                    "Sansa Stark"
                ],
                "wikidata_summary": "British actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q240573",
                "wikipedia_summary": "Sophie Belinda Turner (born 21 February 1996) is an English actress. She made her acting debut as Sansa Stark in the HBO epic fantasy television series Game of Thrones (2011–2019), for which she received an Emmy Award nomination for Outstanding Supporting Actress in a Drama Series in 2019.\nTurner appeared in the 2013 British drama television film The Thirteenth Tale and made her feature film debut in the psychological thriller Another Me (2013). She appeared in the action comedy Barely Lethal (2015) and portrayed a young Jean Grey / Phoenix in the X-Men film series (2016–2019).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Sophie_Turner"
            },
            "Q241741": {
                "name": "Wildlife",
                "wikidata_aliases": [
                    "wild life"
                ],
                "wikidata_summary": "undomesticated organisms that grow or live wild in an area without being introduced by humans",
                "wikidata_url": "https://www.wikidata.org/wiki/Q241741",
                "wikipedia_summary": "Wildlife refers to undomesticated animal species, but has come to include all organisms that grow or live wild in an area without being introduced by humans. Wildlife was also synonymous to game: those birds and mammals that were hunted for sport. Wildlife can be found in all ecosystems. Deserts, plains, grasslands, woodlands, forests, and other areas including the most developed urban areas, all have distinct forms of wildlife. While the term in popular culture usually refers to animals that are untouched by human factors, most scientists agree that much wildlife is affected by human activities. Some wildlife threaten human safety, health, property and quality of life. However, many wild animals, even the dangerous ones, have value to human beings. This value might be economic, educational, or emotional in nature.\nHumans have historically tended to separate civilization from wildlife in a number of ways, including the legal, social and moral senses. Some animals, however, have adapted to suburban environments. This includes such animals as feral cats, dogs, mice, and rats. Some religions declare certain animals to be sacred, and in modern times, concern for the natural environment has provoked activists to protest against the exploitation of wildlife for human benefit or entertainment.\nGlobal wildlife populations have decreased by 68% since 1970 as a result of human activity, particularly overconsumption, population growth, and intensive farming, according to a 2020 World Wildlife Fund's Living Planet Report and the Zoological Society of London's Living Planet Index measure, which is further evidence that humans have unleashed a sixth mass extinction event. According to CITES, it has been estimated that annually the international wildlife trade amounts to billions of dollars and it affects hundreds of millions of animal and plant specimen.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Wildlife"
            },
            "Q2420335": {
                "name": "Omega Red",
                "wikidata_aliases": [
                    "Arkady Gregorivich",
                    "Arkady Rossovich",
                    "Vasyliev Arkady",
                    "Arkady Gregorivich Rossovich"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2420335",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2422698": {
                "name": "Starz",
                "wikidata_aliases": [
                    "STARZ!"
                ],
                "wikidata_summary": "American pay television network",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2422698",
                "wikipedia_summary": "Starz (stylized as STARZ since 2016; pronounced 'stars') is an American premium cable and satellite television network owned by Lionsgate, and is the flagship property of parent subsidiary Starz Inc. Programming on Starz consists of theatrically released motion pictures and first-run original television series. Launched in 1994 as a multiplex service of Starz Encore, Starz operates six 24-hour, linear multiplex channels; a traditional subscription video on demand service; and a namesake over-the-top streaming platform that both acts as a TV Everywhere offering for Starz's linear television subscribers and is sold directly to streaming-only consumers.\nStarz is also sold independently of traditional and over-the-top multichannel video programming distributors a la carte through Apple TV Channels and Amazon Video Channels, which feature VOD library content and live feeds of Starz's linear television services (consisting of the primary channel's East and West Coast feeds and, for Amazon Video customers, the East Coast feeds of its five multiplex channels). Starz's programming has been licensed for use by a number of channels and platforms worldwide, and the brand name is licensed by Bell Media for a companion channel of the Canada-based company's Crave premium service.\nStarz and its sister networks, Starz Encore and MoviePlex, are headquartered in Santa Monica, California, with satellite office facilities located at the Meridian International Business Center complex in Englewood, Colorado, and at a small office located on 5th Avenue in New York City. As of September 2018, Starz was available to approximately 28.517 million American households that had a subscription to a multichannel television provider (27.675 million of which receive Starz's primary channel at minimum).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Starz"
            },
            "Q242345": {
                "name": "S&P 500",
                "wikidata_aliases": [
                    "S&P",
                    "S&P 500 Component",
                    "Standard & Poor's 500",
                    "S&P 500 Index",
                    "S & P 500"
                ],
                "wikidata_summary": "American stock market index",
                "wikidata_url": "https://www.wikidata.org/wiki/Q242345",
                "wikipedia_summary": "The Standard and Poor's 500, or simply the S&P 500, is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices and includes approximately 80% of the total market capitalization of U.S. public companies, with an aggregate market cap of more than $43 trillion as of January 2024.\nThe S&P 500 index is a free-float weighted/capitalization-weighted index. As of December 29, 2023, the nine largest companies on the list of S&P 500 companies accounted for 30.9% of the market capitalization of the index and were, in order of highest to lowest weighting: Apple, Microsoft, Amazon.com, Nvidia, Alphabet (including both class A & C shares), Meta Platforms, Tesla, Berkshire Hathaway and JPMorgan Chase. The components that have increased their dividends in 25 consecutive years are known as the S&P 500 Dividend Aristocrats.\nThe index is one of the factors in computation of the Conference Board Leading Economic Index, used to forecast the direction of the economy. The index is associated with many ticker symbols, including ^GSPC, INX, and $SPX, depending on market or website. The S&P 500 is maintained by S&P Dow Jones Indices, a joint venture majority-owned by S&P Global, and its components are selected by a committee.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/S%26P_500"
            },
            "Q2425": {
                "name": "1989",
                "wikidata_aliases": [
                    "nineteen eighty-nine",
                    "one thousand and eighty-nine"
                ],
                "wikidata_summary": "year on the Gregorian calendar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2425",
                "wikipedia_summary": "1989 (MCMLXXXIX) was a common year starting on Sunday of the Gregorian calendar, the 1989th year of the Common Era (CE) and Anno Domini (AD) designations, the 989th  year of the 2nd millennium, the 89th  year of the 20th century, and the  10th  and last year of the 1980s decade.  \n1989 was a turning point in political history with the 'Revolutions of 1989' which ended communism in Eastern Bloc of Europe, starting in Poland and Hungary, with experiments in power-sharing coming to a head with the opening of the Berlin Wall in November, the Velvet Revolution in Czechoslovakia and the overthrow of the communist dictatorship in Romania in December; the movement ended in December 1991 with the dissolution of the Soviet Union. Revolutions against communist governments in Eastern Europe mainly succeeded, but the year also saw the suppression by the Chinese government of the 1989 Tiananmen Square protests in Beijing.\nIt was the year of the first Brazilian presidential election in 29 years, since the end of the military government in 1985 that ruled the country for more than twenty years, and marked the redemocratization process's final point.\nF. W. de Klerk was elected as State President of South Africa, and his regime gradually dismantled the apartheid system over the next five years, culminating with the 1994 election that brought jailed African National Congress leader Nelson Mandela to power.\nThe first commercial Internet service providers surfaced in this year, as well as the first written proposal for the World Wide Web and New Zealand, Japan and Australia's first Internet connections. The first babies born after preimplantation genetic diagnosis were conceived in late 1989.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1989"
            },
            "Q2426": {
                "name": "1988",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2426",
                "wikipedia_summary": "1988 (MCMLXXXVIII) was a leap year starting on Friday of the Gregorian calendar, the 1988th year of the Common Era (CE) and Anno Domini (AD) designations, the 988th  year of the 2nd millennium, the 88th  year of the 20th century, and the  9th   year of the 1980s decade.  \n1988 was a crucial year in the early history of the Internet—it was the year of the first well-known computer virus, the 1988 Internet worm. The first permanent intercontinental Internet link was made between the United States (NSFNET) and Europe (Nordunet) as well as the first Internet-based chat protocol, Internet Relay Chat. The concept of the World Wide Web was first discussed at CERN in 1988.\nThe Soviet Union began its major deconstructing towards a mixed economy at the beginning of 1988 and began its gradual dissolution. The Iron Curtain began to disintegrate in 1988 as Hungary began allowing freer travel to the Western world. The first extrasolar planet, Gamma Cephei Ab (confirmed in 2002) was detected this year and the World Health Organization began its mission to eradicate polio. Global warming also began to emerge as a more significant concern, with climate scientist James Hansen testifying before the U.S. Senate on the issue.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1988"
            },
            "Q2430": {
                "name": "1986",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2430",
                "wikipedia_summary": "1986 (MCMLXXXVI) was a common year starting on Wednesday of the Gregorian calendar, the 1986th year of the Common Era (CE) and Anno Domini (AD) designations, the 986th  year of the 2nd millennium, the 86th  year of the 20th century, and the  7th   year of the 1980s decade.  \nThe year 1986 was designated as the International Year of Peace by the United Nations.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1986"
            },
            "Q2434": {
                "name": "1983",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2434",
                "wikipedia_summary": "1983 (MCMLXXXIII) was a common year starting on Saturday of the Gregorian calendar, the 1983rd year of the Common Era (CE) and Anno Domini (AD) designations, the 983rd  year of the 2nd millennium, the 83rd  year of the 20th century, and the  4th   year of the 1980s decade.  \n1983 saw both the official beginning of the Internet and the first mobile cellular telephone call.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1983"
            },
            "Q245204": {
                "name": "Antagonist",
                "wikidata_aliases": [],
                "wikidata_summary": "character of a work actively opposing the protagonist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q245204",
                "wikipedia_summary": "An antagonist is a character in a story who is presented as the main enemy and rival of the protagonist.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Antagonist"
            },
            "Q247145": {
                "name": "Longue durée",
                "wikidata_aliases": [
                    "Longue duree",
                    "long term"
                ],
                "wikidata_summary": "Concept in history",
                "wikidata_url": "https://www.wikidata.org/wiki/Q247145",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2475": {
                "name": "1971",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2475",
                "wikipedia_summary": "1971 (MCMLXXI) was a common year starting on Friday of the Gregorian calendar, the 1971st year of the Common Era (CE) and Anno Domini (AD) designations, the 971st  year of the 2nd millennium, the 71st  year of the 20th century, and the  2nd   year of the 1970s decade.   The year 1971 had three partial solar eclipses (February 25, July 22 and August 20) and two total lunar eclipses (February 10, and August 6).\nThe world population increased by 2.1% this year, the highest increase in history.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1971"
            },
            "Q2477": {
                "name": "1973",
                "wikidata_aliases": [
                    "MCMLXXIII",
                    "'73"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2477",
                "wikipedia_summary": "1973 (MCMLXXIII) was a common year starting on Monday of the Gregorian calendar, the 1973rd year of the Common Era (CE) and Anno Domini (AD) designations, the 973rd  year of the 2nd millennium, the 73rd  year of the 20th century, and the  4th   year of the 1970s decade.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1973"
            },
            "Q2485": {
                "name": "1969",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2485",
                "wikipedia_summary": "1969 (MCMLXIX) was a common year starting on Wednesday of the Gregorian calendar, the 1969th year of the Common Era (CE) and Anno Domini (AD) designations, the 969th year of the 2nd millennium, the 69th year of the 20th century, and the 10th and last year of the 1960s decade.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1969"
            },
            "Q25173": {
                "name": "Titanic",
                "wikidata_aliases": [
                    "The Titanic",
                    "RMS Titanic",
                    "Royal Mail Steamship Titanic"
                ],
                "wikidata_summary": "British transatlantic passenger liner, launched and foundered in 1912",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25173",
                "wikipedia_summary": "RMS Titanic was a British ocean liner that sank on 15 April 1912 after striking an iceberg on the ship's maiden voyage from Southampton, England to New York City, United States. Of the estimated 2,224 passengers and crew aboard, approximately 1,500 died, making the incident the deadliest sinking of a single ship at the time. Titanic, operated by the White Star Line, carried some of the wealthiest people in the world, as well as hundreds of emigrants from the British Isles, Scandinavia, and elsewhere in Europe who were seeking a new life in the United States and Canada. The disaster drew public attention, spurred major changes in maritime safety regulations, and inspired a lasting legacy in popular culture.\nRMS Titanic was the largest ship afloat upon entering service and the second of three Olympic-class ocean liners built for the White Star Line. The ship was built by the Harland and Wolff shipbuilding company in Belfast. Thomas Andrews Jr., the chief naval architect of the shipyard, died in the disaster. Titanic was under the command of Captain Edward John Smith, who went down with the ship. \nThe first-class accommodation was designed to be the pinnacle of comfort and luxury. It included a gymnasium, swimming pool, smoking rooms, fine restaurants and cafes, a Victorian-style Turkish bath, and hundreds of opulent cabins. A high-powered radiotelegraph transmitter was available to send passenger 'marconigrams' and for the ship's operational use. Titanic had advanced safety features, such as watertight compartments and remotely activated watertight doors, which contributed to the ship's reputation as 'unsinkable'.\nTitanic was equipped with 16 lifeboat davits, each capable of lowering three lifeboats, for a total of 48 boats. Despite this capacity of 48, the ship was only equipped with a total of 20 lifeboats. Fourteen were regular lifeboats, two were cutter lifeboats, and four were collapsible and proved difficult to launch while the ship was sinking. Together, the 20 lifeboats could hold 1,178 people—about half the number of passengers on board, and one-third of the number of passengers the ship could have carried at full capacity (a number consistent with the maritime safety regulations of the era). The British Board of Trade's regulations required 14 lifeboats for a ship 10,000 tonnes. Titanic carried six more than required, allowing 338 extra people room in lifeboats. When the ship sank, the lifeboats that had been lowered were only filled up to an average of 60%.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Titanic"
            },
            "Q2517802": {
                "name": "Horacio Pagani",
                "wikidata_aliases": [],
                "wikidata_summary": "Italian auto executive",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2517802",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q25188": {
                "name": "Inception",
                "wikidata_aliases": [],
                "wikidata_summary": "2010 film directed by Christopher Nolan",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25188",
                "wikipedia_summary": "Inception is a 2010 science fiction  action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Cillian Murphy, Tom Berenger, Dileep Rao, and Michael Caine.\nAfter the 2002 completion of Insomnia, Nolan presented to Warner Bros. a written 80-page treatment for a horror film envisioning 'dream stealers,' based on lucid dreaming. Deciding he needed more experience before tackling a production of this magnitude and complexity, Nolan shelved the project and instead worked on 2005's Batman Begins, 2006's The Prestige, and 2008's The Dark Knight. The treatment was revised over six months and was purchased by Warner in February 2009. Inception was filmed in six countries, beginning in Tokyo on June 19 and ending in Canada on November 22. Its official budget was $160 million, split between Warner Bros. and Legendary. Nolan's reputation and success with The Dark Knight helped secure the film's US$100 million in advertising expenditure.\nInception's premiere was held in London on July 8, 2010; it was released in both conventional and IMAX theaters beginning on July 16, 2010. Inception grossed over $837 million worldwide, becoming the fourth-highest-grossing film of 2010. Considered one of the best films of the 2010s, Inception won four Oscars (Best Cinematography, Best Sound Editing, Best Sound Mixing, Best Visual Effects) and was nominated for four more (Best Picture, Best Original Screenplay, Best Art Direction, Best Original Score) at the 83rd Academy Awards.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Inception"
            },
            "Q25245": {
                "name": "2016",
                "wikidata_aliases": [
                    "MMXVI",
                    "2016 AD",
                    "2016 CE",
                    "twenty sixteen",
                    "two thousand and sixteen"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25245",
                "wikipedia_summary": "2016 (MMXVI) was a leap year starting on Friday of the Gregorian calendar, the 2016th year of the Common Era (CE) and Anno Domini (AD) designations, the 16th  year of the 3rd millennium and the 21st century, and the  7th   year of the 2010s decade.  \n\n2016 was designated as:\n\nInternational Year of Pulses by the sixty-eighth session of the United Nations General Assembly.\nInternational Year of Global Understanding (IYGU) by the International Council for Science (ICSU), the International Social Science Council (ISSC), and the International Council for Philosophy and Human Sciences (CIPSH).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2016"
            },
            "Q25274": {
                "name": "2019",
                "wikidata_aliases": [
                    "MMXIX",
                    "twenty nineteen",
                    "two thousand and nineteen",
                    "2019 AD",
                    "2019 CE"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25274",
                "wikipedia_summary": "2019 (MMXIX) was a common year starting on Tuesday of the Gregorian calendar, the 2019th year of the Common Era (CE) and Anno Domini (AD) designations, the 19th  year of the 3rd millennium and the 21st century, and the  10th  and last year of the 2010s decade.  This was the year in which the first known human case of COVID-19 was documented, preceding the pandemic which was declared by the World Health Organization the following year.\nUp to that point, 2019 had been described as the 'best year in human history' by some newspapers and media outlets in the United States, including The New York Times and WNYC.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2019"
            },
            "Q25290": {
                "name": "2017",
                "wikidata_aliases": [
                    "MMXVII",
                    "2017 AD",
                    "2017 CE",
                    "twenty seventeen",
                    "two thousand and seventeen"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25290",
                "wikipedia_summary": "2017 (MMXVII) was a common year starting on Sunday of the Gregorian calendar, the 2017th year of the Common Era (CE) and Anno Domini (AD) designations, the 17th  year of the 3rd millennium and the 21st century, and the  8th   year of the 2010s decade.  \n2017 was designated as International Year of Sustainable Tourism for Development by the United Nations General Assembly.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2017"
            },
            "Q25291": {
                "name": "2018",
                "wikidata_aliases": [
                    "MMXVIII",
                    "twenty eighteen",
                    "two thousand and eighteen",
                    "2018 AD",
                    "2018 CE"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25291",
                "wikipedia_summary": "2018 (MMXVIII) was a common year starting on Monday of the Gregorian calendar, the 2018th year of the Common Era (CE) and Anno Domini (AD) designations, the 18th  year of the 3rd millennium and the 21st century, and the  9th   year of the 2010s decade.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2018"
            },
            "Q25337": {
                "name": "2020",
                "wikidata_aliases": [
                    "MMXX",
                    "twenty twenty",
                    "2020 AD",
                    "2020 CE",
                    "two thousand and twenty",
                    "2020 Adelaide International"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25337",
                "wikipedia_summary": "2020 (MMXX) was a leap year starting on Wednesday of the Gregorian calendar, the 2020th year of the Common Era (CE) and Anno Domini (AD) designations, the 20th  year of the 3rd millennium and the 21st century, and the  1st   year of the 2020s decade.  \nThe year 2020 was heavily defined by the COVID-19 pandemic, which led to global social and economic disruption, mass cancellations and postponements of events, worldwide lockdowns and the largest economic recession since the Great Depression in the 1930s. Geospatial World also called 2020 'the worst year in terms of climate change' in part due to major climate disasters worldwide, including major bushfires in Australia and the western United States, as well as extreme tropical cyclone activity affecting large parts of North America. A United Nations progress report published in December 2020 indicated that none of the international Sustainable Development Goals for 2020 were achieved. Time magazine used its sixth ever Red X cover to declare 2020 'the worst year ever', although the cover article itself did not go as far, instead saying 'There have been worse years in U.S. history, and certainly worse years in world history, but most of us alive today have seen nothing like this one.' The Golden Raspberry Awards also awarded the year the Special Governor's Award for The Worst Calendar Year EVER! at their 41st ceremony.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2020"
            },
            "Q25431158": {
                "name": "Deadpool 2",
                "wikidata_aliases": [
                    "Deadpool Two",
                    "Deadpool II"
                ],
                "wikidata_summary": "2018 film directed by David Leitch",
                "wikidata_url": "https://www.wikidata.org/wiki/Q25431158",
                "wikipedia_summary": "Deadpool 2 is a 2018 American superhero film based on the Marvel Comics character Deadpool. Distributed by 20th Century Fox, it is the sequel to Deadpool (2016) and the eleventh installment in the X-Men film series. The film was directed by David Leitch and written by Rhett Reese, Paul Wernick, and Ryan Reynolds, who stars in the title role alongside Josh Brolin, Morena Baccarin, Julian Dennison, Zazie Beetz, T. J. Miller, Brianna Hildebrand, and Jack Kesy. In the film, Deadpool forms the X-Force to protect a young mutant from the time-traveling soldier Cable.\nPlans for a sequel to Deadpool began before the original film's release, and were confirmed in February 2016. Though the original creative team of Reynolds, Reese, Wernick, and director Tim Miller were set to return for the second film, Miller left the project in October 2016 due to creative differences with Reynolds and was soon replaced by Leitch. An extensive casting search took place to fill the role of Cable, with Brolin ultimately cast. Principal photography took place in British Columbia from June to October 2017. \nDeadpool 2 premiered at the Leicester Square in London on May 10, 2018, and was released in the United States on May 18. The film outgrossed its predecessor, earning \t$785.8 million worldwide, becoming the ninth-highest-grossing film of 2018, the highest-grossing film in the X-Men series, and the highest-grossing R-rated film at the time. The film received positive reviews from critics, with some considering it superior to the first film and praising its humor, cast performances, story, and action sequences, while others criticized its tone, script, and recycled jokes. A PG-13-rated version of the film, titled Once Upon a Deadpool, was released on December 12, 2018, to mixed reviews. Following the acquisition of 21st Century Fox by Disney, Deadpool's film rights were returned to Marvel Studios alongside the X-Men and the Fantastic Four. A sequel, Deadpool & Wolverine, starring Reynolds and Hugh Jackman, which will integrate their characters into the Marvel Cinematic Universe (MCU), is scheduled for release on July 26, 2024, as part of Phase Five of the MCU.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Deadpool_2"
            },
            "Q2551564": {
                "name": "William Stryker",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2551564",
                "wikipedia_summary": "The Reverend William Stryker is a fictional character appearing in American comic books published by Marvel Comics. A minister and former sergeant with a strong hatred for mutants, he is usually depicted as an enemy of the X-Men. He is also the father of Jason Stryker.\nThe character has appeared in the X-Men film series, portrayed by Brian Cox in X2 (2003), Danny Huston in X-Men Origins: Wolverine (2009), and Josh Helman in X-Men: Days of Future Past (2014) and X-Men: Apocalypse (2016). In 2009, William Stryker was ranked by IGN’s as the 70th-greatest comic book villain of all time.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/William_Stryker"
            },
            "Q258015": {
                "name": "Rachel Summers",
                "wikidata_aliases": [
                    "Rachel Anne Summers",
                    "Rachel Grey",
                    "Phoenix",
                    "Mother Askani",
                    "Marvel Girl",
                    "Prestige",
                    "Rachel Grey-Summers",
                    "Askani"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q258015",
                "wikipedia_summary": "Rachel Anne Summers (also known as Askani) is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Chris Claremont and artist/co-plotter John Byrne.\nIn her first appearance, the character's surname was not revealed; in later appearances, she was established as the daughter of the alternate future counterparts to Cyclops and Jean Grey-Summers from the dystopian Days of Future Past timeline. Although there are other characters bearing her name throughout the multiverse, she herself is considered a multiversal anomaly with no true alternate-universe counterparts.\nThe character is a mutant with similar abilities to her mother, including telepathy, telekinesis, and a connection to the Phoenix, the latter of which was represented in her adoption of the Phoenix title after her mother's apparent death. Throughout her publication history, she has also been referred to by the monikers Marvel Girl, Rachel Grey, Prestige, and Mother Askani.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rachel_Summers"
            },
            "Q264238": {
                "name": "Newsletter",
                "wikidata_aliases": [
                    "newsletters"
                ],
                "wikidata_summary": "printed or electronic report containing news concerning the activities of a business or an organization that is sent to its members, customers, employees or other subscribers",
                "wikidata_url": "https://www.wikidata.org/wiki/Q264238",
                "wikipedia_summary": "A newsletter is a printed or electronic report containing news concerning the activities of a business  or an organization that is sent to its members, customers, employees or other subscribers. Newsletters generally contain one main topic of interest to its recipients. A newsletter may be considered grey literature. E-newsletters are delivered electronically via e-mail and can be viewed as spamming if e-mail marketing is sent unsolicited.\nThe newsletter is the most common form of serial publication. About two-thirds of newsletters are internal publications, aimed towards employees and volunteers, while about one-third are external publications, aimed towards advocacy or special interest groups.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Newsletter"
            },
            "Q26540": {
                "name": "Satellite",
                "wikidata_aliases": [
                    "artificial moon",
                    "space satellite",
                    "satellite"
                ],
                "wikidata_summary": "human-made object put into an orbit",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26540",
                "wikipedia_summary": "A satellite  or artificial satellite is an object, typically a spacecraft, placed into orbit around a celestial body. Satellites have a variety of uses, including communication relay, weather forecasting, navigation (GPS), broadcasting, scientific research, and Earth observation. Additional military uses are reconnaissance, early warning, signals intelligence and, potentially, weapon delivery. Other satellites include the final rocket stages that place satellites in orbit and formerly useful satellites that later become defunct.\nExcept for passive satellites, most satellites have an electricity generation system for equipment on board, such as solar panels or radioisotope thermoelectric generators (RTGs). Most satellites also have a method of communication to ground stations, called transponders. Many satellites use a standardized bus to save cost and work, the most popular of which are small CubeSats. Similar satellites can work together as groups, forming constellations. Because of the high launch cost to space, most satellites are designed to be as lightweight and robust as possible. Most communication satellites are radio relay stations in orbit and carry dozens of transponders, each with a bandwidth of tens of megahertz.\nSatellites are placed from the surface to the orbit by launch vehicles, high enough to avoid orbital decay by the atmosphere. Satellites can then change or maintain the orbit by propulsion, usually by chemical or ion thrusters. As of 2018, about 90% of the satellites orbiting the Earth are in low Earth orbit or geostationary orbit; geostationary means the satellites stay still in the sky (relative to a fixed point on the ground). Some imaging satellites chose a Sun-synchronous orbit because they can scan the entire globe with similar lighting. As the number of satellites and space debris around Earth increases, the threat of collision has become more severe. A small number of satellites orbit other bodies (such as the Moon, Mars, and the Sun) or many bodies at once (two for a halo orbit, three for a Lissajous orbit).\nEarth observation satellites gather information for reconnaissance, mapping, monitoring the weather, ocean, forest, etc. Space telescopes take advantage of outer space's near perfect vacuum to observe objects with the entire electromagnetic spectrum. Because satellites can see a large portion of the Earth at once, communications satellites can relay information to remote places. The signal delay from satellites and their orbit's predictability are used in satellite navigation systems, such as GPS. Space probes are satellites designed for robotic space exploration outside of Earth, and space stations are in essence crewed satellites.\nThe first artificial satellite launched into the Earth's orbit was the Soviet Union's Sputnik 1, on October 4, 1957. As of December 31, 2022, there are 6,718 operational satellites in the Earth's orbit, of which 4,529 belong to the United States (3,996 commercial), 590 belong to China, 174 belong to Russia, and 1,425 belong to other nations.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Satellite"
            },
            "Q26923245": {
                "name": "Mikey Madison",
                "wikidata_aliases": [],
                "wikidata_summary": "American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26923245",
                "wikipedia_summary": "Mikey Madison (born March 25, 1999) is an American actress. She is best known for her starring roles as Manson Family follower Susan 'Sadie' Atkins in Quentin Tarantino's film Once Upon a Time in Hollywood (2019), Max Fox in Better Things (2016-2021), and Amber Freeman in Scream (2022). \n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mikey_Madison"
            },
            "Q2695945": {
                "name": "Francesca",
                "wikidata_aliases": [
                    "Francesca (first name)",
                    "Francesca (given name)"
                ],
                "wikidata_summary": "female given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2695945",
                "wikipedia_summary": "Francesca is an Italian female given name, derived from the Latin male name Franciscus meaning 'the Frenchman' It is widely used in most Romance languages, including Italian, French and Catalan, and place of origin is Italy. It is derived from the same source as the female name Frances, and the male names Francesc, Francesco and Francis.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Francesca"
            },
            "Q26997611": {
                "name": "Zazie Beetz",
                "wikidata_aliases": [
                    "Zazie Olivia Beetz"
                ],
                "wikidata_summary": "American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q26997611",
                "wikipedia_summary": "Zazie Olivia Beetz ( zə-SEE BAYTS; German: [zaˈsiː ˈbeːts]; born June 1, 1991) is a German-born American actress. She is best known for her role in the FX comedy-drama series Atlanta (2016–2022), for which she received a nomination for the Primetime Emmy Award for Outstanding Supporting Actress in a Comedy Series. She starred in the Netflix anthology series Easy (2016–2019) and currently voices Amber Bennett in the adult animated superhero series Invincible (2021–present).\nIn film, Beetz has appeared in the disaster film Geostorm (2017) and has played the Marvel Comics character Domino in the superhero film Deadpool 2 (2018) and Arthur Fleck/Joker's neighbor Sophie in the psychological thriller Joker (2019). She also voiced as Diane Foxington in the heist animated movie The Bad Guys.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Zazie_Beetz"
            },
            "Q2712629": {
                "name": "From the Ashes",
                "wikidata_aliases": [],
                "wikidata_summary": "album by Pennywise",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2712629",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q273704": {
                "name": "West Side Story",
                "wikidata_aliases": [],
                "wikidata_summary": "1961 film by Robert Wise, Jerome Robbins",
                "wikidata_url": "https://www.wikidata.org/wiki/Q273704",
                "wikipedia_summary": "West Side Story is a musical conceived by Jerome Robbins with music by Leonard Bernstein, lyrics by Stephen Sondheim, and a book by Arthur Laurents.\nInspired by William Shakespeare's play Romeo and Juliet, the story is set in the mid-1950s in the Upper West Side of Manhattan in New York City, then a multiracial, blue-collar neighborhood. The musical explores the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds. The Sharks, who are recent migrants from Puerto Rico, and the Jets, who are white, vie for dominance of the neighborhood, and the police try to keep order. The young protagonist, Tony, a former member of the Jets and best friend of the gang's leader, Riff, falls in love with Maria, the sister of Bernardo, the leader of the Sharks. The dark theme, sophisticated music, extended dance scenes, tragic love story, and focus on social problems marked a turning point in musical theatre.\nThe original 1957 Broadway production, directed and choreographed by Robbins, marked Sondheim's Broadway debut. It ran for 732 performances before going on tour. The production was nominated for six Tony Awards, including Best Musical, in 1958, winning two. The show had an even longer-running West End production, a number of revivals, and international productions. A 1961 musical film adaptation, co-directed by Robert Wise and Robbins, was nominated for eleven Academy Awards and won ten, including Best Picture. A 2021 film adaptation, directed by Steven Spielberg was also nominated for the Academy Award for Best Picture, along with six additional nominations, winning one Oscar.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/West_Side_Story"
            },
            "Q27449526": {
                "name": "Camila Morrone",
                "wikidata_aliases": [
                    "Cami Morrone",
                    "Camila Rebeca Morrone Polak"
                ],
                "wikidata_summary": "American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q27449526",
                "wikipedia_summary": "Camila Rebeca Morrone (; born June 16, 1997) is an American actress and model. She made her acting debut in the James Franco film Bukowski (2013) and appeared in the action film Death Wish (2018), as well as the independent films Never Goin' Back (2018) and Mickey and the Bear (2019). Her role as Camila Alvarez-Dunne in the Amazon Prime Video limited series Daisy Jones & the Six (2023) earned her a nomination for a Primetime Emmy Award.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Camila_Morrone"
            },
            "Q27450671": {
                "name": "Lily Gladstone",
                "wikidata_aliases": [],
                "wikidata_summary": "American actress",
                "wikidata_url": "https://www.wikidata.org/wiki/Q27450671",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q275550": {
                "name": "Killers",
                "wikidata_aliases": [],
                "wikidata_summary": "1981 studio album by Iron Maiden",
                "wikidata_url": "https://www.wikidata.org/wiki/Q275550",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q2764": {
                "name": "1962",
                "wikidata_aliases": [],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q2764",
                "wikipedia_summary": "1962 (MCMLXII) was a common year starting on Monday of the Gregorian calendar, the 1962nd year of the Common Era (CE) and Anno Domini (AD) designations, the 962nd  year of the 2nd millennium, the 62nd  year of the 20th century, and the  3rd   year of the 1960s decade.  \nThe year saw the Cuban Missile Crisis, which is often considered the closest the world came to a nuclear confrontation during the Cold War.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/1962"
            },
            "Q277633": {
                "name": "Millennials",
                "wikidata_aliases": [
                    "Millennials",
                    "Echo Boomers",
                    "Millennial Generation",
                    "Gen Y"
                ],
                "wikidata_summary": "cohort succeeding Generation X, born from 1981 to 1996",
                "wikidata_url": "https://www.wikidata.org/wiki/Q277633",
                "wikipedia_summary": "Millennials, also known as Generation Y (often shortened to Gen Y), are the demographic cohort following Generation X and preceding Generation Z. Researchers and popular media use the early 1980s as starting birth years and the mid-1990s to early 2000s as ending birth years, with the generation typically being defined as people born from 1981 to 1996. Most Millennials are the children of Baby Boomers and older Generation X. In turn Millennials are often the parents of Generation Alpha.\nAs the first generation to grow up with the Internet, Millennials have also been described as the first global generation. The generation is generally marked by elevated usage of and familiarity with the Internet, mobile devices, and social media. The term 'digital natives', which is now also applied to successive generations, was originally coined to describe this generation.\nMillennials have also been called the 'Unluckiest Generation' because the average Millennial has experienced slower economic growth since entering the workforce than any other generation in U.S. history. The generation has also been weighed down by student debt and child-care costs.\nAcross the globe, young people have postponed marriage or living together as a couple. Millennials were born at a time of declining fertility rates around the world, and are having fewer children than their predecessors. Those in developing nations will continue to constitute the bulk of global population growth. In the developed countries, young people of the 2010s were less inclined to have sexual intercourse compared to their predecessors when they were at the same age. In the West, they are less likely to be religious than their predecessors, but they may identify as spiritual.\nBetween the 1990s and the 2010s, people from the developing countries became increasingly well educated, a factor that boosted economic growth in these countries. Millennials across the world have suffered significant economic disruption since starting their working lives; many faced high levels of youth unemployment during their early years in the job market in the wake of the Great Recession, and suffered another recession in 2020 due to the COVID-19 pandemic.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Millennials"
            },
            "Q28136257": {
                "name": "The First Film",
                "wikidata_aliases": [
                    "First Film"
                ],
                "wikidata_summary": "2015 film directed by David Nicholas Wilkinson",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28136257",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q28183079": {
                "name": "Varney & Co.",
                "wikidata_aliases": [
                    "Varney & Company"
                ],
                "wikidata_summary": "television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28183079",
                "wikipedia_summary": "Varney & Co., sometimes styled Varney & Company, is an American cable television news and talk show on the Fox Business Network hosted by British-American economic and political commentator Stuart Varney. The show includes market coverage, current events coverage, and interviews and commentary with Wall Street experts.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Varney_%26_Co."
            },
            "Q28469784": {
                "name": "seventy-fourth",
                "wikidata_aliases": [
                    "LXXIV.",
                    "74.",
                    "74th",
                    "74ᵗʰ",
                    "rank 74",
                    "position 74",
                    "LXXIVth"
                ],
                "wikidata_summary": "ordinal number for 74",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28469784",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q289": {
                "name": "Television",
                "wikidata_aliases": [
                    "TV",
                    "televison"
                ],
                "wikidata_summary": "telecommunication medium for transmitting and receiving moving images",
                "wikidata_url": "https://www.wikidata.org/wiki/Q289",
                "wikipedia_summary": "Television (TV) is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.\nTelevision became available in crude experimental forms in the 1920s, but only after several years of further development was the new technology marketed to consumers. After World War II, an improved form of black-and-white television broadcasting became popular in the United Kingdom and the United States, and television sets became commonplace in homes, businesses, and institutions. During the 1950s, television was the primary medium for influencing public opinion. In the mid-1960s, color broadcasting was introduced in the U.S. and most other developed countries.\nThe availability of various types of archival storage media such as Betamax and VHS tapes, LaserDiscs, high-capacity hard disk drives, CDs, DVDs, flash drives, high-definition HD DVDs and Blu-ray Discs, and cloud digital video recorders has enabled viewers to watch pre-recorded material—such as movies—at home on their own time schedule. For many reasons, especially the convenience of remote retrieval, the storage of television and video programming now also occurs on the cloud (such as the video-on-demand service by Netflix). In the late 2000s, digital television transmissions greatly increased in popularity. Another development was the move from standard-definition television (SDTV) (576i, with 576 interlaced lines of resolution and 480i) to high-definition television (HDTV), which provides a resolution that is substantially higher. HDTV may be transmitted in different formats: 1080p, 1080i and 720p. Since 2010, with the invention of smart television, Internet television has increased the availability of television programs and movies via the Internet through streaming video services such as Netflix, Amazon Prime Video, iPlayer and Hulu.\nIn 2013, 79% of the world's households owned a television set. The replacement of earlier cathode-ray tube (CRT) screen displays with compact, energy-efficient, flat-panel alternative technologies such as LCDs (both fluorescent-backlit and LED), OLED displays, and plasma displays was a hardware revolution that began with computer monitors in the late 1990s. Most television sets sold in the 2000s were flat-panel, mainly LEDs. Major manufacturers announced the discontinuation of CRT, Digital Light Processing (DLP), plasma, and even fluorescent-backlit LCDs by the mid-2010s. LEDs are being gradually replaced by OLEDs. Also, major manufacturers have started increasingly producing smart TVs in the mid-2010s. Smart TVs with integrated Internet and Web 2.0 functions became the dominant form of television by the late 2010s.\nTelevision signals were initially distributed only as terrestrial television using high-powered radio-frequency television transmitters to broadcast the signal to individual television receivers. Alternatively television signals are distributed by coaxial cable or optical fiber, satellite systems and, since the 2000s via the Internet. Until the early 2000s, these were transmitted as analog signals, but a transition to digital television was expected to be completed worldwide by the late 2010s. A standard television set consists of multiple internal electronic circuits, including a tuner for receiving and decoding broadcast signals. A visual display device that lacks a tuner is correctly called a video monitor rather than a television.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Television"
            },
            "Q28912376": {
                "name": "New Mutants",
                "wikidata_aliases": [
                    "New Mutants"
                ],
                "wikidata_summary": "2020 film directed by Josh Boone",
                "wikidata_url": "https://www.wikidata.org/wiki/Q28912376",
                "wikipedia_summary": "The New Mutants are a group of fictional mutant superheroes appearing in American comic books published by Marvel Comics, generally in association with the X-Men. Originally depicted as the teenaged junior class at the Xavier Institute, subsequent stories have depicted the characters as adult superheroes (in their eponymous series as well as in related titles such as X-Force and The Avengers) or as teachers and mentors to younger mutants.\nThe team first appeared in The New Mutants (September 1982) by Chris Claremont and artist Bob McLeod, part of the Marvel Graphic Novel line, followed by the ongoing series The New Mutants which ran from 1983 until 1991. Like the X-Men parent title, also written by Claremont, The New Mutants featured an ensemble cast, with stories often focused on interpersonal relationships and coming-of-age arcs, blending teen drama with action and adventure. The title was later taken over by writer Louise Simonson, ultimately taking a more action-oriented focus under artist Rob Liefeld, who relaunched the characters as X-Force following the series' end.\nSince their inception, several New Mutants series have been published, either focusing on the continuing adventures of the original lineup, new groups of young mutants, or some combination of both. Individual characters have appeared in various film, television, and other media adaptations of the X-Men franchise, while most of the original lineup of the New Mutants was featured in the 2020 20th Century Studios horror film of the same name.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/New_Mutants"
            },
            "Q29": {
                "name": "Spain",
                "wikidata_aliases": [
                    "Kingdom of Spain",
                    "ES",
                    "ESP"
                ],
                "wikidata_summary": "country in southwestern Europe with territories in Africa",
                "wikidata_url": "https://www.wikidata.org/wiki/Q29",
                "wikipedia_summary": "Spain, or the Kingdom of Spain, is a country located in Southwestern Europe, with parts of its territory in the Atlantic Ocean, the Mediterranean Sea and Africa. It is the largest country in Southern Europe and the fourth-most populous European Union member state. Spanning across the majority of the Iberian Peninsula, its territory also includes the Canary Islands in the Atlantic Ocean, the Balearic Islands in the Mediterranean Sea, and the autonomous cities of Ceuta and Melilla in Africa. Peninsular Spain is bordered to the north by France, Andorra, and the Bay of Biscay; to the east and south by the Mediterranean Sea and Gibraltar; and to the west by Portugal and the Atlantic Ocean. Spain's capital and largest city is Madrid, and other major urban areas include Barcelona, Valencia, Zaragoza, Seville, Málaga, Murcia, Palma de Mallorca, Las Palmas de Gran Canaria, and Bilbao.\nIn early antiquity, the Iberian Peninsula was inhabited by Celtic and Iberian tribes, along with other local pre-Roman peoples. With the Roman conquest of the Iberian Peninsula, the province of Hispania was established. Following the Romanization and Christianization of Hispania, the fall of the Western Roman Empire ushered in the inward migration of tribes from Central Europe, including the Visigoths, who formed the Visigothic Kingdom centred on Toledo. In the early eighth century, most of the peninsula was conquered by the Umayyad Caliphate, and during early Islamic rule, Al-Andalus became a dominant peninsular power centred in Córdoba. Several Christian kingdoms emerged in Northern Iberia, chief among them Asturias, León, Castile, Aragon, Navarre, and Portugal; made an intermittent southward military expansion and repopulation, known as the Reconquista, repelling Islamic rule in Iberia, which culminated with the Christian seizure of the Nasrid Kingdom of Granada in 1492. The dynastic union of the Crown of Castile and the Crown of Aragon in 1479 under the Catholic Monarchs is often considered the de facto unification of Spain as a nation-state.\nDuring the Age of Discovery, Spain pioneered the exploration of the New World and the first circumnavigation of the globe. At the same time, it formed one of the largest empires in history through colonization. The Spanish empire reached a global scale and spread across continents, underpinning the rise of a global trading system fueled primarily by precious metals. The 18th century was marked by extensive reforms and, notably, the Bourbon reforms centralized mainland Spain. In the 19th century, after the Napoleonic occupation and the victorious Spanish War of independence, the following political divisions between liberals and absolutists led to the breakaway of most of the American colonies. These political divisions finally converged in the 20th century with the Spanish Civil War, giving rise to the Francoist dictatorship that lasted until 1975. With the restoration of democracy and its entry into the European Union, the country experienced an economic boom that profoundly transformed it socially and politically. Since the Siglo de Oro, Spanish art, architecture, music, poetry, painting, literature, and cuisine have been influential worldwide, particularly in Western Europe and the Americas. Spain is one of the main nations of Latin Europe and a cultural superpower. As a reflection of its large cultural wealth, Spain is the world's second-most visited country, has one of the world's largest numbers of World Heritage Sites, and it is the most popular destination for European students. Its cultural influence extends to over 600 million Hispanophones, making Spanish the world's second-most spoken native language and the world's most widely spoken Romance language.\nSpain is a secular parliamentary democracy and a constitutional monarchy, with King Felipe VI as head of state. It is a major advanced capitalist economy, with the world's fifteenth-largest economy by nominal GDP (fourth of the European Union) and the fifteenth-largest by PPP. Spain is a member of the United Nations, the European Union, the eurozone, North Atlantic Treaty Organization (NATO), a permanent guest of the G20, and is part of many other international organizations such as the Council of Europe (CoE), the Organization of Ibero-American States (OEI), the Union for the Mediterranean, the Organisation for Economic Co-operation and Development (OECD), the Organization for Security and Co-operation in Europe (OSCE), and the World Trade Organization (WTO).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Spain"
            },
            "Q29018745": {
                "name": "The Gifted",
                "wikidata_aliases": [],
                "wikidata_summary": "2017 American superhero television series",
                "wikidata_url": "https://www.wikidata.org/wiki/Q29018745",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q290691": {
                "name": "Villain",
                "wikidata_aliases": [
                    "villainess",
                    "bad guy",
                    "fictional villain",
                    "fictional villainess",
                    "fictional bad guy",
                    "evil character",
                    "black hat"
                ],
                "wikidata_summary": "evil character in a story",
                "wikidata_url": "https://www.wikidata.org/wiki/Q290691",
                "wikipedia_summary": "A villain (also known as a 'black hat' or 'bad guy'; the feminine form is villainess) is a stock character, whether based on a historical narrative or one of literary fiction. Random House Unabridged Dictionary defines such a character as 'a cruelly malicious person who is involved in or devoted to wickedness or crime; scoundrel; or a character in a play, novel, or the like, who constitutes an important evil agency in the plot'. The antonym of a villain is a hero.\nThe villain's structural purpose is to serve as the opposition of the hero character and their motives or evil actions drive a plot along. In contrast to the hero, who is defined by feats of ingenuity and bravery and the pursuit of justice and the greater good, a villain is often defined by their acts of selfishness, evilness, arrogance, cruelty, and cunning, displaying immoral behavior that can oppose or pervert justice.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Villain"
            },
            "Q296822": {
                "name": "Vinnie Jones",
                "wikidata_aliases": [
                    "Vincent Peter Jones",
                    "Vincent Peter \"Vinnie\" Jones"
                ],
                "wikidata_summary": "British footballer and actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q296822",
                "wikipedia_summary": "Vincent Peter Jones (born 5 January 1965) is a British actor, presenter, and former professional footballer.\nJones played professionally as a defensive midfielder from 1984 to 1999, notably for Wimbledon, Leeds United, Sheffield United, Chelsea, and Queens Park Rangers. He also played for and captained the Welsh national team, having qualified through a Welsh grandparent. Best remembered for his time at Wimbledon as a pivotal member of the famous 'Crazy Gang', he won the 1988 FA Cup final with the London side, a club for which he played over 200 games during two spells between 1986 and 1998. He played 184 games in the Premier League, in which he scored 13 goals. Throughout his career, Jones gained a reputation for adding steel to a team, with his highly aggressive and physically uncompromising style of play, earning him a 'hard man' image on and off the field, and on screen, where he is often typecast as violent criminals and thugs.\nAs an actor, his film and television career began with Lock, Stock and Two Smoking Barrels (1998), for his performance winning an Empire Award for Best Newcomer, then in Snatch (2000), he won the Empire Award for Best British Actor. Other notable credits include Gone in 60 Seconds (2000), Mean Machine (2001), The Big Bounce (2004), Extras (2005), X-Men: The Last Stand (2006), The Riddle (2007), The Midnight Meat Train (2008), Year One (2009), The Cape (2011), Fire with Fire (2012), The Musketeers (2014), MacGyver (2016), NCIS: Los Angeles (2019), Rise of the Footsoldier Origins (2021); and, against type, in The Gentlemen (2024).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vinnie_Jones"
            },
            "Q298368": {
                "name": "Liev Schreiber",
                "wikidata_aliases": [
                    "Isaac Liev Schreiber",
                    "Isaac \"Liev Schreiber\"",
                    "Leiv Schreiber"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q298368",
                "wikipedia_summary": "Isaac Liev Schreiber ( LEE-ev SHRY-bər; born October 4, 1967) is an American actor, director, screenwriter, and producer. He became known during the late 1990s and early 2000s after appearing in several independent films, and later mainstream Hollywood films. He has received numerous accolades including a Tony Award as well as nominations for nine Emmy Awards and five Golden Globe Awards.\nSchreiber's early film roles include Party Girl (1995), The Daytrippers (1996), and Big Night (1996). He gained notoriety acting in the first three Scream horror films (1996–2000), Ransom (1996), The Hurricane (1999), Hamlet (2000), Kate & Leopold (2001), The Manchurian Candidate (2004), The Painted Veil (2006), X-Men Origins: Wolverine (2009), Pawn Sacrifice (2014), and Spotlight (2015). He acted in the Wes Anderson films Isle of Dogs (2018), The French Dispatch (2021), and Asteroid City (2023). He made his directorial film debut with Everything Is Illuminated (2005). \nHe made his Broadway debut in In the Summer House (1992). He earned the Tony Award for Best Featured Actor in a Play for playing Richard Roma in the David Mamet play Glengarry Glen Ross (2005). He was Tony-nominated for his roles in the Eric Bogosian play Talk Radio (2007), the Arthur Miller revival A View from the Bridge (2010) and the John Patrick Shanley revival Doubt (2024). He also acted in Les Liaisons Dangereuses (2016). \nFor his roles in television, he most notably portrayed the title role in the Showtime drama series Ray Donovan (2013–2020). He reprised the role in the television film Ray Donovan: The Movie (2022). The role has earned him nominations for three Primetime Emmy Awards and four Golden Globe Awards. He also portrayed Orson Welles in the HBO film RKO 281 (1999), and Otto Frank in the Nat Geo miniseries A Small Light (2023).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Liev_Schreiber"
            },
            "Q30": {
                "name": "United States",
                "wikidata_aliases": [
                    "United States",
                    "the States",
                    "the United States of America",
                    "US of America",
                    "USA",
                    "U.S.A.",
                    "America",
                    "the US",
                    "the U.S.",
                    "the US of A",
                    "U.S. of America",
                    "the US of America",
                    "US",
                    "the USA",
                    "U.S.",
                    "the U.S.A.",
                    "the U.S. of A",
                    "US of A",
                    "the U.S. of America",
                    "U. S.",
                    "U. S. A.",
                    "the United States",
                    "Merica",
                    "America (United States)",
                    "Murica"
                ],
                "wikidata_summary": "country primarily located in North America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q30",
                "wikipedia_summary": "The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America. It is a federation of 50 states, a federal capital district (Washington, D.C.), and 326 Indian reservations. Outside the union of states, it asserts sovereignty over five major unincorporated island territories and various uninhabited islands. The country has the world's third-largest land area, second-largest exclusive economic zone, and third-largest population, exceeding 334 million.\nPaleo-Indians migrated across the Bering land bridge more than 12,000 years ago. British colonization led to the first settlement of the Thirteen Colonies in Virginia in 1607. Clashes with the British Crown over taxation and political representation sparked the American Revolution, with the Second Continental Congress formally declaring independence on July 4, 1776. Following its victory in the Revolutionary War (1775–1783), the country continued to expand across North America. As more states were admitted, sectional division over slavery led to the secession of the Confederate States of America, which fought the remaining states of the Union during the 1861–1865 American Civil War. With the Union's victory and preservation, slavery was abolished nationally. By 1890, the United States had established itself as a great power. After Japan's attack on Pearl Harbor in December 1941, the U.S. entered World War II. The aftermath of the war left the U.S. and the Soviet Union as the world's two superpowers and led to the Cold War, during which both countries engaged in a struggle for ideological dominance and international influence. Following the Soviet Union's collapse and the end of the Cold War in 1991, the U.S. emerged as the world's sole superpower.\nThe U.S. national government is a presidential constitutional republic and liberal democracy with three separate branches: legislative, executive, and judicial. It has a bicameral national legislature composed of the House of Representatives, a lower house based on population; and the Senate, an upper house based on equal representation for each state. Substantial autonomy is given to states and several territories, with a political culture that emphasizes liberty, equality under the law, individualism, and limited government.\nOne of the world's most developed countries, the United States has had the largest nominal GDP since about 1890 and accounted for 15% of the global economy in 2023. It possesses by far the largest amount of wealth of any country and has the highest disposable household income per capita among OECD countries. The U.S. ranks among the world's highest in economic competitiveness, productivity, innovation, human rights, and higher education. Its hard power and cultural influence have a global reach. The U.S. is a founding member of the World Bank, IMF, Organization of American States, NATO, and World Health Organization, as well as a permanent member of the UN Security Council.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/United_States"
            },
            "Q302186": {
                "name": "Beast (Marvel Comics)",
                "wikidata_aliases": [
                    "Hank McCoy",
                    "Henry McCoy"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q302186",
                "wikipedia_summary": "Beast (Dr. Henry Philip 'Hank' McCoy) is a superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men. Originally called 'The Beast', the character was introduced as a mutant possessing ape-like superhuman physical strength and agility, oversized hands and feet, a genius-level intellect, and otherwise normal appearance and speech. Eventually being referred to simply as 'Beast', Hank McCoy underwent progressive physiological transformations, gaining animalistic physical characteristics. These include blue fur, both simian and feline facial features, pointed ears, fangs, and claws. Beast's physical strength and senses increased to even greater levels.\nDespite Hank McCoy's feral appearance, he is depicted as a brilliant, well-educated man in the arts and sciences, known for his witty sense of humor, and characteristically uses barbed witticisms with long words and intellectual references to distract his foes. He is a world authority on biochemistry and genetics, the X-Men's medical doctor, and the science and mathematics instructor at the Xavier Institute (the X-Men's headquarters and school for young mutants). He is also a mutant political activist, campaigning against society's bigotry and discrimination against mutants. While fighting his own bestial instincts and fears of social rejection, Beast dedicates his physical and mental gifts to the creation of a better world for man and mutant.\nOne of the original X-Men, Beast has appeared regularly in X-Men-related comics since his debut. He has also been a member of the Avengers and Defenders. Various storylines over the years have hinted that Beast has capacity to become a supervillain; his alternative universe counterpart Dark Beast was a recurring character in 2000s and 2010s comics. During the Krakoan Age 2020s X-Men storylines, Beast assumes an antagonistic role to the other X-Men, becoming an outright villain.\nThe character has also appeared in media adaptations, including animated TV series and feature films. Kelsey Grammer played the Beast in X-Men: The Last Stand (2006), while Nicholas Hoult portrayed a younger version of the character in X-Men: First Class (2011). Both Hoult and Grammer reprised their roles in X-Men: Days of Future Past (2014). Hoult reprised the role in X-Men: Apocalypse (2016) and Dark Phoenix (2019), while Grammer reprised the role in the Marvel Cinematic Universe (MCU) film The Marvels (2023).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Beast_(Marvel_Comics)"
            },
            "Q302534": {
                "name": "Mister Sinister",
                "wikidata_aliases": [
                    "Nathaniel Essex"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q302534",
                "wikipedia_summary": "Mister Sinister (Dr. Nathaniel Essex) is a supervillain appearing in American comic books published by Marvel Comics. Created by writer Chris Claremont, the character was first mentioned as the employer behind the team of assassins known as the Marauders in The Uncanny X-Men #212 (December 1986), and later seen in silhouette in The Uncanny X-Men #213, with both issues serving as chapters of the 1986 'Mutant Massacre' crossover. Mr. Sinister then made his first full appearance in The Uncanny X-Men #221 (September 1987). His appearance was designed by artist Marc Silvestri.\nA villain who usually prefers to act through agents and manipulation, Mr. Sinister is born Nathaniel Essex in Victorian London. A human scientist, Essex is inspired by the work of his contemporary Charles Darwin and becomes obsessed with engineering humanity into a perfect race of superhumans. As he learns about mutants (superhuman beings born with the X-gene), Essex encounters the mutant villain Apocalypse. The two become allies and Apocalypse uses alien Celestial technology to transform the British scientist into Mr. Sinister, an ageless man with super-powers. Later on, Sinister increases his power through self-experimentation. In the modern-day, Sinister develops a great interest and protective attitude towards the mutant heroes Cyclops and Jean Grey, believing their DNA can create the ultimate mutant. This and other factors lead him to have repeated clashes with the X-Men (a group Cyclops and Jean Grey helped found) and related teams. Through clones, Sinister has managed to cheat his death repeatedly and even acquire a mutant gene. \nMaking frequent appearances in the X-Men comics and related spin-off titles, Mr. Sinister has also featured in associated Marvel merchandise including animated television series, toys, trading cards, and video games. IGN's list of the 'Top 100 Comic Book Villains of All Time' ranked Sinister as #29. The character was exposed to a wider audience with his television debut on X-Men: The Animated Series voiced by Christopher Britton, as well as an appearance in Wolverine and the X-Men voiced by Clancy Brown.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mister_Sinister"
            },
            "Q30461": {
                "name": "president",
                "wikidata_aliases": [],
                "wikidata_summary": "leader of a country or part of a country, usually in republics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q30461",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3087886": {
                "name": "leaf blade",
                "wikidata_aliases": [
                    "blade",
                    "lamina"
                ],
                "wikidata_summary": "flat part of a leaf",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3087886",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q310937": {
                "name": "Peter Dinklage",
                "wikidata_aliases": [
                    "Peter Hayden Dinklage"
                ],
                "wikidata_summary": "American actor (born 1969)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q310937",
                "wikipedia_summary": "Peter Hayden Dinklage (; born June 11, 1969) is an American actor. For portraying Tyrion Lannister on the HBO television series Game of Thrones (2011–2019), he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times. He also received a Golden Globe Award in 2011 and a Screen Actors Guild Award in 2020 for the role. Dinklage has a common form of dwarfism known as achondroplasia and stands 4 ft 5 in (1.35 m) tall. He has used his celebrity status to raise social awareness of dwarfism.\nDinklage studied acting at Bennington College, performing in a number of amateur stage productions. He made his film debut in the black comedy film Living in Oblivion (1995), and had his breakthrough with a starring role in the 2003 comedy-drama The Station Agent. His other films include Elf (2003), Lassie (2005), Find Me Guilty (2006), Penelope (2006), Death at a Funeral (2007), The Chronicles of Narnia: Prince Caspian (2008), Death at a Funeral (2010), X-Men: Days of Future Past (2014), Three Billboards Outside Ebbing, Missouri (2017), and The Hunger Games: The Ballad of Songbirds & Snakes (2023). In 2018, he appeared as Eitri in the Marvel film Avengers: Infinity War and Hervé Villechaize in the biopic film My Dinner with Hervé. He also provided voice-acting for the video game Destiny, and in 2023 voiced Scourge in Transformers: Rise of the Beasts.\nDinklage has also performed in theater, with roles including the title character in Richard III (2003) at the Public Theatre, Rakitin in A Month in the Country (2015) at Classic Stage Company, and Cyrano de Bergerac in Cyrano at the Daryl Roth Theatre in 2019.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Peter_Dinklage"
            },
            "Q311607": {
                "name": "Jack Kirby",
                "wikidata_aliases": [
                    "Jacob Kurtzberg",
                    "Jack Curtiss",
                    "Curt Davis",
                    "Ted Grey",
                    "Charles Nicholas"
                ],
                "wikidata_summary": "American comic book artist (1917–1994)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q311607",
                "wikipedia_summary": "Jack Kirby (born Jacob Kurtzberg; August 28, 1917 – February 6, 1994) was an American comic book artist, widely regarded as one of the medium's major innovators and one of its most prolific and influential creators. He grew up in New York City and learned to draw cartoon figures by tracing characters from comic strips and editorial cartoons. He entered the nascent comics industry in the 1930s, drawing various comics features under different pen names, including Jack Curtiss, before settling on Jack Kirby. In 1940, he and writer-editor Joe Simon created the highly successful superhero character Captain America for Timely Comics, predecessor of Marvel Comics. During the 1940s, Kirby regularly teamed with Simon, creating numerous characters for that company and for National Comics Publications, later to become DC Comics.\nAfter serving in the European Theater in World War II, Kirby produced work for DC Comics, Harvey Comics, Hillman Periodicals and other publishers. At Crestwood Publications, he and Simon created the genre of romance comics and later founded their own short-lived comic company, Mainline Publications. Kirby was involved in Timely's 1950s iteration, Atlas Comics, which in the next decade became Marvel. There, in the 1960s, Kirby cocreated many of the company's major characters, including Ant-Man, the Avengers, the Black Panther, the Fantastic Four, the Hulk, Iron Man, the Silver Surfer, Thor, and the X-Men, among many others. Kirby's titles garnered high sales and critical acclaim, but in 1970, feeling he had been treated unfairly, largely in the realm of authorship credit and creators' rights, Kirby left the company for rival DC.\nAt DC, Kirby created his Fourth World saga which spanned several comics titles. While these series proved commercially unsuccessful and were canceled, the Fourth World's New Gods have continued as a significant part of the DC Universe. Kirby returned to Marvel briefly in the mid-to-late 1970s, then ventured into television animation and independent comics. In his later years, Kirby, who has been called 'the William Blake of comics', began receiving great recognition in the mainstream press for his career accomplishments, and in 1987 he was one of the three inaugural inductees of the Will Eisner Comic Book Hall of Fame. In 2017, Kirby was posthumously named a Disney Legend for his creations not only in the field of publishing, but also because those creations formed the basis for The Walt Disney Company's financially and critically successful media franchise, the Marvel Cinematic Universe.\nKirby was married to Rosalind Goldstein in 1942. They had four children and remained married until his death from heart failure in 1994, at the age of 76. The Jack Kirby Awards and Jack Kirby Hall of Fame were named in his honor, and he is known as 'The King' among comics fans for his many influential contributions to the medium.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jack_Kirby"
            },
            "Q313705": {
                "name": "Jason Schwartzman",
                "wikidata_aliases": [
                    "Jason Francesco Schwartzman"
                ],
                "wikidata_summary": "American actor and musician",
                "wikidata_url": "https://www.wikidata.org/wiki/Q313705",
                "wikipedia_summary": "Jason Schwartzman (born June 26, 1980) is an American actor and musician. Schwartzman made his film debut in Wes Anderson's 1998 film Rushmore, and has since appeared in six other Anderson films: The Darjeeling Limited (2007), Fantastic Mr. Fox (2009), Moonrise Kingdom (2012), The Grand Budapest Hotel (2014), The French Dispatch (2021), and Asteroid City (2023). He also has co-writing credit on The Darjeeling Limited. \nHis other films include Simone (2002), Spun (2003), I Heart Huckabees (2004), Marie Antoinette (2006), Saving Mr. Banks (2013), Listen Up Philip (2014), Klaus (2019), and The Hunger Games: The Ballad of Songbirds & Snakes (2023), with his notable characters including Gideon Graves in Scott Pilgrim vs. the World (2010) and Scott Pilgrim Takes Off (2023) and the Spot, whom he voices in Spider-Man: Across the Spider-Verse (2023) and Spider-Man: Beyond the Spider-Verse. Schwartzman starred in the television series Bored to Death (2009–2011) and appeared in the fourth season of the FX anthology series Fargo (2020). He was an executive producer on the Amazon Prime show Mozart in the Jungle (2014–18), a series he also acted in.\nSchwartzman has released three albums through his solo project Coconut Records, having previously been drummer in the rock band Phantom Planet.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jason_Schwartzman"
            },
            "Q3196867": {
                "name": "Debt",
                "wikidata_aliases": [],
                "wikidata_summary": "deferred payment, or series of payments, that is owed in the future",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3196867",
                "wikipedia_summary": "Debt is an obligation that requires one party, the debtor, to pay money borrowed or otherwise withheld from another party, the creditor. Debt may be owed by sovereign state or country, local government, company, or an individual. Commercial debt is generally subject to contractual terms regarding the amount and timing of repayments of principal and interest. Loans, bonds, notes, and mortgages are all types of debt. In financial accounting, debt is a type of financial transaction, as distinct from equity.\nThe term can also be used metaphorically to cover moral obligations and other interactions not based on a monetary value. For example, in Western cultures, a person who has been helped by a second person is sometimes said to owe a 'debt of gratitude' to the second person.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Debt"
            },
            "Q32566": {
                "name": "computed tomography",
                "wikidata_aliases": [
                    "X-ray computed tomography",
                    "CT scan",
                    "CAT scan",
                    "CT",
                    "CAT",
                    "CT machine",
                    "CT Machine",
                    "tomography",
                    "CT imaging",
                    "X-Ray Computed",
                    "Tomography, X-Ray Computed",
                    "computerized tomography",
                    "computed tomography scan",
                    "computed axial tomography scan",
                    "CT Scan Machine"
                ],
                "wikidata_summary": "medical imaging procedure using X-rays to produce cross-sectional images",
                "wikidata_url": "https://www.wikidata.org/wiki/Q32566",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q326878": {
                "name": "Ty Hardin",
                "wikidata_aliases": [
                    "Orison Whipple Hungerford, Jr.",
                    "Orison Whipple Hungerford",
                    "Orison Hungerford, Jr.",
                    "Ty Hungerford"
                ],
                "wikidata_summary": "American actor (1930–2017)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q326878",
                "wikipedia_summary": "Ty Hardin (born Orison Whipple Hungerford Jr.; January 1, 1930 – August 3, 2017) was an American actor best known as the star of the 1958 to 1962 ABC/Warner Bros. Western television series Bronco.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ty_Hardin"
            },
            "Q3285695": {
                "name": "Mutant",
                "wikidata_aliases": [],
                "wikidata_summary": "organism or a new genetic character arising or resulting from an instance of mutation, which is an alteration of the DNA sequence of a gene or chromosome of an organism",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3285695",
                "wikipedia_summary": "In biology, and especially in genetics, a mutant is an organism or a new genetic character arising or resulting from an instance of mutation, which is generally an alteration of the DNA sequence of the genome or chromosome of an organism. It is a characteristic that would not be observed naturally in a specimen. The term mutant is also applied to a virus with an alteration in its nucleotide sequence whose genome is in the nuclear genome. The natural occurrence of genetic mutations is integral to the process of evolution. The study of mutants is an integral part of biology; by understanding the effect that a mutation in a gene has, it is possible to establish the normal function of that gene.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mutant"
            },
            "Q32907": {
                "name": "Dominoes",
                "wikidata_aliases": [
                    "domino"
                ],
                "wikidata_summary": "game played with rectangular tiles",
                "wikidata_url": "https://www.wikidata.org/wiki/Q32907",
                "wikipedia_summary": "Dominoes is a family of tile-based games played with gaming pieces. Each domino is a rectangular tile, usually with a line dividing its face into two square ends. Each end is marked with a number of spots (also called pips or dots) or is blank. The backs of the tiles in a set are indistinguishable, either blank or having some common design. The gaming pieces make up a domino set, sometimes called a deck or pack.  The traditional European domino set consists of 28 tiles, also known as pieces, bones, rocks, stones, men, cards or just dominoes, featuring all combinations of spot counts between zero and six. A domino set is a generic gaming device, similar to playing cards or dice, in that a variety of games can be played with a set. Another form of entertainment using domino pieces is the practice of domino toppling.\n\nThe earliest mention of dominoes is from Song dynasty China found in the text Former Events in Wulin by Zhou Mi (1232–1298). Modern dominoes first appeared in Italy during the 18th century, but they differ from Chinese dominoes in a number of respects, and there is no confirmed link between the two. European dominoes may have developed independently, or Italian missionaries in China may have brought the game to Europe.: 181 \nThe name 'domino' is probably derived from the resemblance to a kind of carnival costume worn during the Venetian Carnival, often consisting of a black-hooded robe and a white mask. Despite the coinage of the word 'polyomino' as a generalization, there is no connection between the word 'domino' and the number 2 in any language.\nThe most commonly played domino games are Domino Whist, Matador, and Muggins (All Fives). Other popular forms include Texas 42, Chicken Foot, Concentration, Double Fives, and Mexican Train.: 181–182  In Britain, the most popular league and pub game is Fives and Threes.\nDominoes have sometimes been used for divination, such as bone throwing in Chinese culture and in the African diaspora.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Dominoes"
            },
            "Q330946": {
                "name": "Blade",
                "wikidata_aliases": [
                    "cutting blade",
                    "cutting edge"
                ],
                "wikidata_summary": "sharp part of a weapon or cutting tool",
                "wikidata_url": "https://www.wikidata.org/wiki/Q330946",
                "wikipedia_summary": "A blade is the sharp, cutting portion of a tool, weapon, or machine, specifically designed to puncture, chop, slice, or scrape surfaces or materials. Blades are typically made from materials that are harder than those they are intended to cut. This includes early examples made from flaked stones like flint or obsidian, evolving through the ages into metal forms like copper, bronze, and iron, and culminating in modern versions made from steel or ceramics. Serving as one of humanity's oldest tools, blades continue to have wide-ranging applications, including in combat, cooking, and various other everyday and specialized tasks.\nBlades function by concentrating force at the cutting edge. Design variations, such as serrated edges found on bread knives and saws, serve to enhance this force concentration, adapting blades for specific functions and materials. Blades thus hold a significant place both historically and in contemporary society, reflecting an evolution in material technology and utility.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Blade"
            },
            "Q33127647": {
                "name": "list of original films distributed by Netflix",
                "wikidata_aliases": [
                    "original films distributed by Netflix",
                    "List of Netflix original films"
                ],
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q33127647",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3320731": {
                "name": "Monica Rambeau",
                "wikidata_aliases": [
                    "Captain Marvel",
                    "Photon",
                    "Pulsar",
                    "Spectrum"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3320731",
                "wikipedia_summary": "Monica Rambeau is a superhero appearing in American comic books published by Marvel Comics. Created by writer Roger Stern and artist John Romita Jr., the character first appeared in The Amazing Spider-Man Annual #16 (October 1982). Monica Rambeau gained her super powers after being bombarded by extra-dimensional energy produced by an energy disruptor weapon. She later joined and eventually became leader of the Avengers for a time. She was also a member of Nextwave and the latest Ultimates team. The character has also been known as Captain Marvel, Photon, Pulsar, and Spectrum at various points in her history.\nMonica Rambeau appears in the Marvel Cinematic Universe films Captain Marvel (2019) and The Marvels (2023) as well as the television miniseries WandaVision (2021), portrayed by Akira Akbar as a child and Teyonah Parris as an adult.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Monica_Rambeau"
            },
            "Q3341932": {
                "name": "Nina Jacobson",
                "wikidata_aliases": [],
                "wikidata_summary": "American studio executive",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3341932",
                "wikipedia_summary": "Nina Jacobson (born September 15, 1965) is an American film executive who, until July 2006, was president of the Buena Vista Motion Pictures Group, a subsidiary of The Walt Disney Company. With Dawn Steel, Gail Berman and Sherry Lansing, she was one of the last of a handful of women to head a Hollywood film studio since the 1980s. She established her own production company called Color Force in 2007, and was the producer of The Hunger Games film series.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Nina_Jacobson"
            },
            "Q336788": {
                "name": "Oscar Isaac",
                "wikidata_aliases": [
                    "Oscar Isaac Hernández Estrada",
                    "Óscar Isaac"
                ],
                "wikidata_summary": "American actor (born 1979)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q336788",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q33881282": {
                "name": "Graumann",
                "wikidata_aliases": [],
                "wikidata_summary": "family name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q33881282",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q34006": {
                "name": "Hollywood",
                "wikidata_aliases": [
                    "Hollywood, Los Angeles",
                    "Hollywood, California",
                    "Hollywood, CA",
                    "Tinseltown"
                ],
                "wikidata_summary": "neighborhood in Los Angeles, California, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q34006",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q342533": {
                "name": "Damian Lewis",
                "wikidata_aliases": [
                    "Damian Watcyn Lewis"
                ],
                "wikidata_summary": "British actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q342533",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q34302": {
                "name": "Doubt",
                "wikidata_aliases": [],
                "wikidata_summary": "status between belief and disbelief, involves uncertainty or distrust in an alleged fact, action, motive, or decision",
                "wikidata_url": "https://www.wikidata.org/wiki/Q34302",
                "wikipedia_summary": "Doubt is a mental state in which the mind remains suspended between two or more contradictory propositions, and is uncertain about them. Doubt on an emotional level is indecision between belief and disbelief. It may involve uncertainty, distrust or lack of conviction on certain facts, actions, motives, or decisions. Doubt can result in delaying or rejecting relevant action out of concern for mistakes or missed opportunities.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Doubt"
            },
            "Q3454165": {
                "name": "Kevin Bacon",
                "wikidata_aliases": [
                    "Kevin Norwood Bacon"
                ],
                "wikidata_summary": "American actor (born 1958)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3454165",
                "wikipedia_summary": "Kevin Norwood Bacon (born July 8, 1958) is an American actor. Known for his leading man and character roles, Bacon has received numerous accolades, including a Golden Globe Award, a Screen Actors Guild Award, and a nomination for a Primetime Emmy Award.\nBacon made his feature film debut in National Lampoon's Animal House (1978) before his breakthrough role in the musical-drama film Footloose (1984). Since then, he has starred in critically acclaimed films such as Diner (1982), JFK (1991), A Few Good Men (1992), Apollo 13 (1995), Mystic River (2003), and Frost/Nixon (2008). Other notable credits include Friday the 13th (1980), Tremors (1990), The River Wild (1994),  The Woodsman (2004), Crazy, Stupid, Love (2011), X-Men: First Class (2011), and Patriots Day (2016). Bacon has also directed the films Losing Chase (1996) and Loverboy (2005).\nOn television, Bacon received a Golden Globe Award and a Screen Actors Guild Award for his role as Lt. Col. Michael Strobl in the HBO original film Taking Chance (2009). He starred in the Fox drama series The Following from 2013 to 2015. Bacon played the title role in Amazon Prime Video series I Love Dick from 2016 to 2017; he was nominated for a Golden Globe Award for his work on the show. From 2019 to 2022, he starred in the Showtime series City on a Hill.\nThe Guardian named Bacon one of the best actors never to have received an Academy Award nomination. In 2003, he received a star on the Hollywood Walk of Fame. \nBacon's prolific career in a variety of genres has led him to become associated with the concept of interconnectedness among people, as evidenced by the trivia game 'Six Degrees of Kevin Bacon'. He is a brand ambassador for British mobile network operator EE and has been featured in several ads for the company. Bacon is married to actress Kyra Sedgwick.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kevin_Bacon"
            },
            "Q3530664": {
                "name": "Tom Brevoort",
                "wikidata_aliases": [],
                "wikidata_summary": "American comic book editor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3530664",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q35332": {
                "name": "Brad Pitt",
                "wikidata_aliases": [
                    "William Bradley Pitt",
                    "Brad Jolie-Pitt"
                ],
                "wikidata_summary": "American actor and filmmaker",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35332",
                "wikipedia_summary": "William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He is the recipient of various accolades, including two Academy Awards, two British Academy Film Awards, two Golden Globe Awards, and a Primetime Emmy Award. One of the most influential celebrities, Pitt appeared on Forbes' annual Celebrity 100 list  from 2006 to 2008, and the Time 100 list in 2007.\nPitt first gained recognition as a cowboy hitchhiker in the Ridley Scott road film Thelma & Louise (1991). His first leading roles in big-budget productions came with the drama films A River Runs Through It (1992) and Legends of the Fall (1994). He also starred in the horror film Interview with the Vampire (1994), alongside Tom Cruise. He gave critically acclaimed performances in David Fincher's crime thriller Seven (1995) and the science fiction film 12 Monkeys (1995). The latter earned him a Golden Globe Award for Best Supporting Actor and his first Academy Award nomination.\nPitt found greater commercial success starring in Steven Soderbergh's heist film Ocean's Eleven (2001), and reprised his role in its sequels. He cemented his leading man status starring in blockbusters such as the historical epic Troy (2004), the romantic crime film Mr. & Mrs. Smith (2005), the horror film World War Z (2013), and the action film Bullet Train (2022). Pitt also starred in the critically acclaimed films Fight Club (1999), Babel (2006), The Assassination of Jesse James by the Coward Robert Ford (2007), Burn After Reading (2008), Inglourious Basterds (2009), The Tree of Life (2011), and The Big Short (2015). Pitt received Academy Award nominations for his performances in The Curious Case of Benjamin Button (2008) and Moneyball (2011), and he won the Academy Award for Best Supporting Actor for playing a stuntman in Once Upon a Time in Hollywood (2019).\nIn 2001, Pitt co-founded the production company Plan B Entertainment. He produced The Departed (2006), 12 Years a Slave (2013), and Moonlight (2016), all of which won the Academy Award for Best Picture, while others such as The Tree of Life (2011), Moneyball (2011), Selma (2014), and The Big Short (2015) were nominated for the award. Pitt was named People's Sexiest Man Alive in 1995 and 2000. His personal life is the subject of wide publicity. He is divorced from actresses Jennifer Aniston and Angelina Jolie. Pitt has six children with Jolie, three of whom were adopted internationally.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Brad_Pitt"
            },
            "Q35591": {
                "name": "Tigris",
                "wikidata_aliases": [],
                "wikidata_summary": "river flowing from Turkey through Iraq and Syria",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35591",
                "wikipedia_summary": "The Tigris ( TY-griss; see below) is the eastern of the two great rivers that define Mesopotamia, the other being the Euphrates. The river flows south from the mountains of the Taurus in Turkey, then through the Syrian and Arabian Deserts, emptying into the Persian Gulf.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Tigris"
            },
            "Q35886": {
                "name": "Lamborghini",
                "wikidata_aliases": [
                    "Automobili Lamborghini S.p.A.",
                    "Lamborghini S.p.A.",
                    "Lamborghini"
                ],
                "wikidata_summary": "Italian car manufacturer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q35886",
                "wikipedia_summary": "Automobili Lamborghini S.p.A. (Italian pronunciation: [autoˈmɔːbili lamborˈɡiːni]) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\nFerruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.\nNew products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand. In the late 2000s, during the worldwide financial crisis and the subsequent economic crisis, Lamborghini's sales saw a drop of nearly 50 per cent.\nLamborghini currently produces the V10-powered Huracán, Urus SUV powered by a twin-turbo V8 engine, and will produce the Revuelto, a V12/electric hybrid, as of 2024. In addition, the company produces V12 engines for offshore powerboat racing.\nLamborghini Trattori, founded in 1948 by Ferruccio Lamborghini, is headquartered in Pieve di Cento, Italy, and continues to produce tractors. Since 1973, Lamborghini Trattori has been a separate entity from the automobile manufacturer.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lamborghini"
            },
            "Q362": {
                "name": "World War II",
                "wikidata_aliases": [
                    "WW2",
                    "WWII",
                    "WW 2",
                    "WW II",
                    "World War Two",
                    "2nd World War",
                    "World War 2",
                    "the Second World War",
                    "Second World War",
                    "II World War",
                    "World War 2, 1939-1945"
                ],
                "wikidata_summary": "1939–1945 global conflict",
                "wikidata_url": "https://www.wikidata.org/wiki/Q362",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3626950": {
                "name": "Zayn Malik",
                "wikidata_aliases": [
                    "Zain Javadd Malik",
                    "Zayn",
                    "Bradford Bad Boy",
                    "DJ Malik",
                    "ZAYN"
                ],
                "wikidata_summary": "English singer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3626950",
                "wikipedia_summary": "Zain Javadd Malik ( MAL-ik; born 12 January 1993), known professionally as Zayn Malik or simply Zayn, is a British singer and songwriter. Malik auditioned as a solo contestant for the British music competition television series The X Factor in 2010. After being eliminated, he was brought back to the competition to form the five-piece boy band One Direction, which went on to become one of the best-selling boy bands of all time. He left the group in March 2015 and signed a solo recording contract with RCA Records.\nAdopting a more alternative R&B music style on his first solo studio album, Mind of Mine (2016), and its lead single, 'Pillowtalk', he became the first British male artist to debut at number one in both the UK and US with his debut single and album. His subsequent collaborative singles 'I Don't Wanna Live Forever' with Taylor Swift and 'Dusk Till Dawn' featuring Sia were met with international success. He released his second studio album, Icarus Falls, in 2018, followed by his third album, Nobody Is Listening, in 2021.\nMalik has received several accolades, including an American Music Award and a MTV Video Music Award. He is the only artist to have won the Billboard Music Award for New Artist of the Year twice, receiving it once as a member of One Direction in 2013 and again in 2017 as a soloist.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Zayn_Malik"
            },
            "Q3641739": {
                "name": "Bolivar Trask",
                "wikidata_aliases": [],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3641739",
                "wikipedia_summary": "Bolivar Trask is a supervillain appearing in American comic books published by Marvel Comics. He is a military scientist whose company Trask Industries is well known as the creator of the Sentinels. He is also the father of Larry Trask and Madame Sanctity.\nBolivar Trask appears in the 2014 film X-Men: Days of Future Past, portrayed by Peter Dinklage.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bolivar_Trask"
            },
            "Q367466": {
                "name": "Marvel Studios",
                "wikidata_aliases": [
                    "Marvel Studios, LLC",
                    "Marvel Films"
                ],
                "wikidata_summary": "American film and television production company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q367466",
                "wikipedia_summary": "Marvel Studios, LLC (originally known as Marvel Films from 1993 to 1996) is an American film and television production company. It is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company. Marvel Studios produces the Marvel Cinematic Universe (MCU) films and series, based on characters that appear in Marvel Comics publications.\nSince 2008, Marvel Studios has released 33 films within the MCU, from Iron Man (2008) to The Marvels (2023); ten television series since 2021, from WandaVision (2021) to Echo (2024); and two television specials: Werewolf by Night (2022) and The Guardians of the Galaxy Holiday Special (2022). The television series What If...? (2021) is the studio's first animated property, created by its 'mini-studio' Marvel Studios Animation. These films, television series, and television specials all share continuity with each other, along with the One-Shots short films produced by the studio. The television series produced by Marvel Television also acknowledge the continuity.\nThe Avengers (2012), Iron Man 3 (2013), Avengers: Age of Ultron (2015), Captain America: Civil War (2016), Black Panther (2018), Avengers: Infinity War (2018), Captain Marvel (2019), Avengers: Endgame (2019), Spider-Man: Far From Home (2019) and Spider-Man: No Way Home (2021) are all among the 50 highest-grossing films of all time, with Avengers: Endgame becoming the highest-grossing film of all time from July 2019 until March 2021. In addition to the MCU, Marvel Studios was also involved with the production of other Marvel-character film franchises that have exceeded $1 billion in North American box office revenue, including the X-Men and Spider-Man multi-film franchises.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Marvel_Studios"
            },
            "Q36949": {
                "name": "Robert De Niro",
                "wikidata_aliases": [
                    "Robert Anthony De Niro",
                    "De Niro"
                ],
                "wikidata_summary": "American actor (born 1943)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q36949",
                "wikipedia_summary": "Robert Anthony De Niro ( də NEER-roh, Italian: [de ˈniːro]; born August 17, 1943) is an American actor and film producer. Known for his collaborations with Martin Scorsese, he is considered to be one of the greatest and most influential actors of his generation. De Niro is the recipient of various accolades, including two Academy Awards, a Golden Globe Award, the Cecil B. DeMille Award, and a Screen Actors Guild Life Achievement Award. In 2009, De Niro received the Kennedy Center Honors, and earned a Presidential Medal of Freedom from U.S. President Barack Obama in 2016.\nDe Niro studied acting at HB Studio, Stella Adler Conservatory, and Lee Strasberg's Actors Studio. His first collaboration with Scorsese was with the 1973 film Mean Streets. De Niro earned two Academy Awards, one for Best Supporting Actor for his role as Vito Corleone in Francis Ford Coppola's The Godfather Part II (1974) and the other for Best Actor portraying Jake LaMotta in Scorsese's drama Raging Bull (1980). His other Oscar-nominated roles were for Taxi Driver (1976), The Deer Hunter (1978), Awakenings (1990), Cape Fear (1991), Silver Linings Playbook (2012), and Killers of the Flower Moon (2023).\nHe has also acted in the films Bang the Drum Slowly (1973), 1900 (1976), The King of Comedy (1982), Once Upon a Time in America (1984), Brazil (1985), The Mission (1986), The Untouchables (1987), Jacknife (1989), Goodfellas (1990), This Boy's Life (1993), Mary Shelley's Frankenstein (1994), Heat (1995), Casino (1995), Jackie Brown (1997), Ronin (1998), Joker (2019), and The Irishman (2019). He directed and acted in both A Bronx Tale (1993) and The Good Shepherd (2006). His comedic roles include Greetings (1968); Hi, Mom! (1970); Midnight Run (1988); Wag the Dog (1997); Analyze This (1999) and its sequel, Analyze That (2002); the Meet the Parents films (2000–2010); and The Intern (2015). Also known for his television roles, De Niro portrayed Bernie Madoff in the HBO film The Wizard of Lies (2017), earning a Primetime Emmy Award for Outstanding Lead Actor in a Limited Series or Movie nomination. He received further Emmy Award nominations for producing the Netflix limited series When They See Us (2019), and for portraying Robert Mueller on Saturday Night Live.\nDe Niro and producer Jane Rosenthal founded the film and television production company TriBeCa Productions in 1989, which has produced several films alongside his own. Also with Rosenthal, he founded the Tribeca Film Festival in 2002. Many of De Niro's films are considered classics of American cinema. Six of De Niro's films have been inducted into the United States National Film Registry by the Library of Congress as 'culturally, historically, or aesthetically significant' as of 2023. Five films are featured on the American Film Institute's (AFI) list of the 100 greatest American films of all time. Timeout magazine's list of 100 best movies included seven of De Niro's films, as chosen by actors in the industry.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Robert_De_Niro"
            },
            "Q36963": {
                "name": "Hunting",
                "wikidata_aliases": [
                    "hunt",
                    "stalking"
                ],
                "wikidata_summary": "searching, pursuing, and catching wild animals",
                "wikidata_url": "https://www.wikidata.org/wiki/Q36963",
                "wikipedia_summary": "Hunting is the human practice of seeking, pursuing, capturing, or killing wildlife or feral animals. The most common reasons for humans to hunt are to exploit the animal's body for meat and useful animal products (fur/hide, bone/tusks, horn/antler, etc.), for recreation/taxidermy (see trophy hunting), although it may also be done for non-exploitative reasons such as removing predators dangerous to humans or domestic animals (e.g. wolf hunting), to eliminate pests and nuisance animals that damage crops/livestock/poultry or spread diseases (see varminting), for trade/tourism (see safari), or for ecological conservation against overpopulation and invasive species.\nRecreationally hunted species are generally referred to as the game, and are usually mammals and birds. A person participating in a hunt is a hunter or (less commonly) huntsman; a natural area used for hunting is called a game reserve; and an experienced hunter who helps organise a hunt and/or manage the game reserve is known as a gamekeeper.\n\nHunting activities by humans arose in Homo erectus or earlier, in the order of millions of years ago.  Hunting has become deeply embedded in various human cultures and was once an important part of rural economies—classified by economists as part of primary production alongside forestry, agriculture, and fishery.  Modern regulations (see game law) distinguish lawful hunting activities from illegal poaching, which involves the unauthorised and unregulated killing, trapping, or capture of animals.\n\nApart from food provision, hunting can be a means of population control.  Hunting advocates state that regulated hunting can be a necessary component of modern wildlife management, for example to help maintain a healthy proportion of animal populations within an environment's ecological carrying capacity when natural checks such as natural predators are absent or insufficient, or to provide funding for breeding programs and maintenance of natural reserves and conservation parks. However, excessive hunting has also heavily contributed to the endangerment, extirpation and extinction of many animals.  Some animal rights and anti-hunting activists regard hunting as a cruel, perverse and unnecessary blood sport. Certain hunting practices, such as canned hunts and ludicrously paid/bribed trophy tours (especially to poor countries), are considered unethical and exploitative even by some hunters.\n\nMarine mammals such as whales and pinnipeds are also targets of hunting, both recreationally and commercially, often with heated controversies regarding the morality, ethics and legality of such practices. The pursuit, harvesting or catch and release of fish and aquatic cephalopods and crustaceans is called fishing, which however is widely accepted and not commonly categorised as a form of hunting, even though it essentially is.  It is also not considered hunting to pursue animals without intent to kill them, as in wildlife photography, birdwatching, or scientific-research activities which involve tranquilizing or tagging of animals, although green hunting is still called so.  The practices of netting or trapping insects and other arthropods for trophy collection, or the foraging or gathering of plants and mushrooms, are also not regarded as hunting.\n\nSkillful tracking and acquisition of an elusive target has caused the word hunt to be used in the vernacular as a metaphor for searching and obtaining something, as in 'treasure hunting', 'bargain hunting', 'hunting for votes' and even 'hunting down' corruption and waste.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hunting"
            },
            "Q36977": {
                "name": "12",
                "wikidata_aliases": [
                    "twelve",
                    "XII",
                    "12*1",
                    "xii",
                    "1*12",
                    "number 12",
                    "the number twelve",
                    "⑫",
                    "⓬",
                    "⒓",
                    "⑿"
                ],
                "wikidata_summary": "natural number",
                "wikidata_url": "https://www.wikidata.org/wiki/Q36977",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q371776": {
                "name": "List of Marvel Comics characters: A",
                "wikidata_aliases": [],
                "wikidata_summary": "Wikimedia list article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q371776",
                "wikipedia_summary": "",
                "wikipedia_url": "https://en.wikipedia.org/wiki/List_of_Marvel_Comics_characters:_A"
            },
            "Q3736025": {
                "name": "Expansions",
                "wikidata_aliases": [],
                "wikidata_summary": "album by McCoy Tyner",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3736025",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q3772": {
                "name": "Quentin Tarantino",
                "wikidata_aliases": [
                    "Tarantino",
                    "Quentin Jerome Tarantino"
                ],
                "wikidata_summary": "American film director, screenwriter, producer, and actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3772",
                "wikipedia_summary": "Quentin Jerome Tarantino (; born March 27, 1963) is an American film director, screenwriter, and actor. His films are characterized by stylized violence, extended dialogue including a pervasive use of profanity, and references to popular culture.\nTarantino began his career as an independent filmmaker with the release of the neo-noir crime drama film Reservoir Dogs in 1992. His second film, Pulp Fiction (1994), a dark comedy crime thriller, was a major success with critics and audiences winning numerous awards, including the Cannes Film Festival's Palme d'Or and the Academy Award for Best Original Screenplay. In 1996, he wrote and starred in the action-horror film From Dusk till Dawn. Tarantino's third film, the crime drama Jackie Brown (1997), paid homage to blaxploitation films.\nIn 2003, Tarantino directed Kill Bill: Volume 1, inspired by the traditions of martial arts films; it was followed by Volume 2 in 2004, with both volumes combined regarded as a single film. He then made the exploitation-slasher Death Proof (2007), part of a double feature with Robert Rodriguez released under the collective title Grindhouse. His next film, Inglourious Basterds (2009), follows an alternate account of World War II. He followed this with Django Unchained (2012), a slave revenge Spaghetti Western, which won him his second Academy Award for Best Original Screenplay. His eighth film, The Hateful Eight (2015), is a revisionist Western thriller and opened to audiences with a roadshow release. His most recent film, Once Upon a Time in Hollywood (2019), is a comedy drama set in the late 1960s about the transition of Old Hollywood to New Hollywood. A novelization of the film written by Tarantino was published in 2021, becoming his debut novel.\nTarantino's work has been subject to criticism, such as the depictions of violence and frequent inclusion of racial slurs. During Tarantino's career, his films have garnered a cult following; as well as critical and commercial success, he has been considered 'the single most influential director of his generation'. Other major awards won by Tarantino include two BAFTAs and four Golden Globes.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Quentin_Tarantino"
            },
            "Q37813": {
                "name": "Ecosystem",
                "wikidata_aliases": [
                    "ecological system",
                    "ecosystems"
                ],
                "wikidata_summary": "community of living organisms together with the nonliving components of their environment, interacting as a system",
                "wikidata_url": "https://www.wikidata.org/wiki/Q37813",
                "wikipedia_summary": "An ecosystem (or ecological system) is a system that environments and their organisms form through their interaction.: 458  The biotic and abiotic components are linked together through nutrient cycles and energy flows.\nEcosystems are controlled by external and internal factors. External factors such as climate, parent material which forms the soil and topography, control the overall structure of an ecosystem but are not themselves influenced by the ecosystem. Internal factors are controlled, for example, by decomposition, root competition, shading, disturbance, succession, and the types of species present. While the resource inputs are generally controlled by external processes, the availability of these resources within the ecosystem is controlled by internal factors. Therefore, internal factors not only control ecosystem processes but are also controlled by them.\nEcosystems are dynamic entities—they are subject to periodic disturbances and are always in the process of recovering from some past disturbance. The tendency of an ecosystem to remain close to its equilibrium state, despite that disturbance, is termed its resistance. The capacity of a system to absorb disturbance and reorganize while undergoing change so as to retain essentially the same function, structure, identity, and feedbacks is termed its ecological resilience. Ecosystems can be studied through a variety of approaches—theoretical studies, studies monitoring specific ecosystems over long periods of time, those that look at differences between ecosystems to elucidate how they work and direct manipulative experimentation. Biomes are general classes or categories of ecosystems. However, there is no clear distinction between biomes and ecosystems. Ecosystem classifications are specific kinds of ecological classifications that consider all four elements of the definition of ecosystems: a biotic component, an abiotic complex, the interactions between and within them, and the physical space they occupy. Biotic factors of the ecosystem are living things; such as plants, animals, and bacteria, while abiotic are non-living components; such as water, soil and atmosphere.\nPlants allow energy to enter the system through photosynthesis,  building up plant tissue. Animals play an important role in the movement of matter and energy through the system, by feeding on plants and on one another. They also influence the quantity of plant and microbial biomass present. By breaking down dead organic matter, decomposers release carbon back to the atmosphere and facilitate nutrient cycling by converting nutrients stored in dead biomass back to a form that can be readily used by plants and microbes.\nEcosystems provide a variety of goods and services upon which people depend, and may be part of. Ecosystem goods include the 'tangible, material products' of ecosystem processes such as water, food, fuel, construction material, and medicinal plants. Ecosystem services, on the other hand, are generally 'improvements in the condition or location of things of value'. These include things like the maintenance of hydrological cycles, cleaning air and water, the maintenance of oxygen in the atmosphere, crop pollination and even things like beauty, inspiration and opportunities for research. Many ecosystems become degraded through human impacts, such as soil loss, air and water pollution, habitat fragmentation, water diversion, fire suppression, and introduced species and invasive species. These threats can lead to abrupt transformation of the ecosystem or to gradual disruption of biotic processes and degradation of abiotic conditions of the ecosystem. Once the original ecosystem has lost its defining features, it is considered 'collapsed'. Ecosystem restoration can contribute to achieving the Sustainable Development Goals.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ecosystem"
            },
            "Q38": {
                "name": "Italy",
                "wikidata_aliases": [
                    "Italia",
                    "Italian Republic",
                    "IT",
                    "🇮🇹",
                    "ITA",
                    "Republic of Italy",
                    "Repubblica Italiana"
                ],
                "wikidata_summary": "country in Southern Europe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q38",
                "wikipedia_summary": "Italy, officially the Italian Republic, is a country in Southern and Western Europe. It is located on a peninsula that extends into the middle of the Mediterranean Sea, with the Alps on its northern land border, as well as several islands, notably Sicily and Sardinia. Italy shares its borders with France, Switzerland, Austria, Slovenia and two enclaves: Vatican City and San Marino. Its territory also includes Campione (an exclave surrounded by Switzerland) and the Pelagie Islands (an archipelago in the African Plate). It is the tenth-largest country by land area in the European continent, covering an area of 301,340 km2 (116,350 sq mi), and the third-most populous member state of the European Union, with a population of nearly 60 million. Its capital and largest city is Rome; other major urban areas include Milan, Lombardy, Naples, Turin, Florence, and Venice.\nIn antiquity, the Italian peninsula was home to numerous peoples; the Latin city of Rome in central Italy, founded as a Kingdom, became a Republic that conquered the Mediterranean world and ruled it for centuries as an Empire. With the spread of Christianity, Rome became the seat of the Catholic Church and of the Papacy. During the Early Middle Ages, Italy experienced the fall of the Western Roman Empire and inward migration from Germanic tribes. By the 11th century, Italian city-states and maritime republics expanded, bringing renewed prosperity through commerce and laying the groundwork for modern capitalism. The Italian Renaissance flourished in Florence during the 15th and 16th centuries and spread to the rest of Europe. Italian explorers also discovered new routes to the Far East and the New World, leading the European Age of Discovery. However, centuries of rivalry and infighting between the Italian city-states among other factors left the peninsula divided into numerous states until the late modern period. During the 17th and 18th centuries, Italian economic and commercial importance waned significantly.\nAfter centuries of political and territorial divisions, Italy was almost entirely unified in 1861, following wars of independence and the Expedition of the Thousand, establishing the Kingdom of Italy. From the late 19th to the early 20th century, Italy rapidly industrialized, mainly in the north, and acquired a colonial empire, while the south remained largely impoverished and excluded from industrialization, fueling a large immigrant diaspora to the Americas. From 1915 to 1918, Italy took part in World War I on the side of the Entente against the Central Powers. In 1922, following a period of crisis and turmoil, the Italian fascist dictatorship was established. During World War II, Italy was first part of the Axis until its surrender to the Allied powers (1940–1943) and then, as parts of its territory were occupied by Nazi Germany with fascist collaboration, a co-belligerent of the Allies during the Italian resistance and the liberation of Italy (1943–1945). Following the end of the war, the monarchy was replaced by a republic, via a referendum; and the country enjoyed a strong recovery, which resulted in prolonged prosperity that is often termed 'the economic miracle'.\nItaly has the eighth-largest nominal GDP in the world, the second-largest manufacturing industry in Europe (7th-largest in the world), and a significant role in regional and global economic, military, cultural, and diplomatic affairs. A developed country, ranking 30th in the Human Development Index, Italy is a founding and leading member of the European Union, and it is in numerous international institutions, including NATO, the G7, the Mediterranean Union, and the Latin Union. As a cultural superpower, Italy has long been a renowned centre of art, music, literature, cuisine, fashion, science and technology, and the source of multiple inventions and discoveries. It has the world's largest number of World Heritage Sites (59), and is the world's fifth-most visited country.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Italy"
            },
            "Q38111": {
                "name": "Leonardo DiCaprio",
                "wikidata_aliases": [
                    "Di Caprio",
                    "Leonardo di Caprio",
                    "Leo DiCaprio",
                    "Leonardo Wilhelm DiCaprio"
                ],
                "wikidata_summary": "American actor and film producer (born 1974)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q38111",
                "wikipedia_summary": "Leonardo Wilhelm DiCaprio (; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.\nBorn in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows, such as the sitcom Parenthood, and had his first major film part as author Tobias Wolff in This Boy's Life (1993). He received critical acclaim and his first Academy Award and Golden Globe Award nominations for his performance as a developmentally disabled boy in What's Eating Gilbert Grape (1993). DiCaprio achieved international stardom with the star-crossed romances Romeo + Juliet (1996) and Titanic (1997). After the latter became the highest-grossing film in the world at the time, he reduced his workload for a few years. In an attempt to shed his image of a romantic hero, DiCaprio sought roles in other genres, including the 2002 crime dramas Catch Me If You Can and Gangs of New York; the latter marked the first of his many successful collaborations with director Martin Scorsese.\nDiCaprio continued to gain acclaim for his performances in the biopic The Aviator (2004), the political thriller Blood Diamond (2006), the crime drama The Departed (2006) and the romantic drama Revolutionary Road (2008). He later made environmental documentaries and starred in several high-profile directors' successful projects, including the action thriller Inception (2010), the western Django Unchained (2012), the biopic The Wolf of Wall Street (2013), the survival drama The Revenant (2015)—for which he won the Academy Award for Best Actor— the comedy-dramas Once Upon a Time in Hollywood (2019) and Don't Look Up (2021), and the crime drama Killers of the Flower Moon (2023).\nDiCaprio is the founder of Appian Way Productions—a production company that has made some of his films and the documentary series Greensburg (2008–2010)—and the Leonardo DiCaprio Foundation, a nonprofit organization devoted to promoting environmental awareness. A United Nations Messenger of Peace, he regularly supports charitable causes. In 2005, he was named a Commander of the Ordre des Arts et des Lettres for his contributions to the arts, and in 2016, he appeared in Time magazine's 100 most influential people in the world. DiCaprio was voted one of the 50 greatest actors of all time in a 2022 readers' poll by Empire.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"
            },
            "Q3884": {
                "name": "Amazon",
                "wikidata_aliases": [
                    "Amazon.com, Inc.",
                    "Amazon.Inc"
                ],
                "wikidata_summary": "American multinational technology company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q3884",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q39809": {
                "name": "Marketing",
                "wikidata_aliases": [
                    "mktg",
                    "PR",
                    "public relations",
                    "publicity",
                    "communications",
                    "promotion",
                    "sales"
                ],
                "wikidata_summary": "study and process of promoting, distributing, and selling products or services to customers",
                "wikidata_url": "https://www.wikidata.org/wiki/Q39809",
                "wikipedia_summary": "Marketing is the act of satisfying and retaining customers. It is one of the primary components of business management and commerce. \nMarketing is typically conducted by the seller, typically a retailer or manufacturer. Products can be marketed to other businesses (B2B) or directly to consumers (B2C). Sometimes tasks are contracted to dedicated marketing firms, like a media, market research, or advertising agency. Sometimes, a trade association or government agency (such as the Agricultural Marketing Service) advertises on behalf of an entire industry or locality, often a specific type of food (e.g. Got Milk?), food from a specific area, or a city or region as a tourism destination.\nMarket orientations are philosophies concerning the factors that should go into market planning. The marketing mix, which outlines the specifics of the product and how it will be sold, including the channels that will be used to advertise the product, is affected by the environment surrounding the product, the results of marketing research and market research, and the characteristics of the product's target market. Once these factors are determined, marketers must then decide what methods of promoting the product, including use of coupons and other price inducements.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Marketing"
            },
            "Q4": {
                "name": "Death",
                "wikidata_aliases": [
                    "bereft of life",
                    "perish",
                    "oblivion",
                    "mortis",
                    "fallen",
                    "meeting the Reaper",
                    "deaths",
                    "succumbs",
                    "final rest",
                    "dies",
                    "fatal",
                    "passes away",
                    "cessation",
                    "deceased",
                    "morbidity",
                    "has died",
                    "has succumbed",
                    "has passed away",
                    "has kicked the bucket",
                    "went to the afterlife",
                    "mortem",
                    "passing away",
                    "exit",
                    "decease"
                ],
                "wikidata_summary": "permanent cessation of vital functions",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4",
                "wikipedia_summary": "Death is the irreversible cessation of all biological functions that sustain a living organism. The remains of a former organism normally begin to decompose shortly after death. Death eventually and inevitably occurs in all organisms. Some organisms, such as Turritopsis dohrnii, are biologically immortal, however they can still die from means other than aging. Death is generally applied to whole organisms; the equivalent for individual components of an organism, such as cells or tissues, is necrosis. Something that is not considered an organism, such as a virus, can be physically destroyed but is not said to die, as a virus is not considered alive in the first place.\nAs of the early 21st century, 56 million people die per year. The most common reason is cardiovascular disease, which is a disease that affects the heart or blood vessels. As of 2022, an estimated total of 109 billion humans have died, or roughly 93.8% of all humans to ever live. A substudy of gerontology known as biogerontology seeks to eliminate death by natural aging in humans, often through the application of natural processes found in certain organisms. However, as humans do not have the means to apply this to themselves, they have to use other ways to reach the maximum lifespan for a human, often through lifestyle changes, such as calorie reduction, dieting, and exercise. The idea of lifespan extension is considered and studied as a way for people to live longer.\nDetermining when a person has definitively died has proven difficult. Initially, death was defined as occurring when breathing and the heartbeat ceased, a status still known as clinical death. However, the development of cardiopulmonary resuscitation (CPR) meant that such a state was no longer strictly irreversible. Brain death was then considered a better option, but several definitions exist for this. Some people believe that all brain functions must cease. Others believe that even if the brainstem is still alive, the personality and identity are irretrievably lost, so therefore, the person should be considered entirely dead. Brain death is sometimes used as a legal definition of death. For all organisms with a brain, death can instead be focused on this organ. The cause of death is usually considered important and an autopsy can be done. There are many causes, from accidents to diseases.\nMany cultures and religions have a concept of an afterlife that may hold the idea of judgment of good and bad deeds in one's life. There are also different customs for honoring the body, such as a funeral, cremation, or sky burial. After a death, an obituary may be posted in a newspaper, and the 'survived by' kin and friends usually go through the grieving process.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Death"
            },
            "Q40354": {
                "name": "Mockingjay",
                "wikidata_aliases": [],
                "wikidata_summary": "2010 book by Suzanne Collins",
                "wikidata_url": "https://www.wikidata.org/wiki/Q40354",
                "wikipedia_summary": "Mockingjay is a 2010 dystopian young adult fiction novel by American author Suzanne Collins. It is chronologically the last installment of The Hunger Games series, following 2008's The Hunger Games and 2009's Catching Fire. The book continues the story of Katniss Everdeen, who agrees to unify the districts of Panem in a rebellion against the tyrannical Capitol.\nThe hardcover and audiobook editions of Mockingjay were published by Scholastic on August 24, 2010, six days after the ebook edition went on sale. The book sold 450,000 copies in the first week of release, exceeding the publisher's expectations. It received positive reaction from critics. The book has been adapted into a two-part movie, with the first part released on November 21, 2014, and the second part released on November 20, 2015.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mockingjay"
            },
            "Q408": {
                "name": "Australia",
                "wikidata_aliases": [
                    "Commonwealth of Australia",
                    "AU",
                    "AUS",
                    "au",
                    "🇦🇺",
                    "Straya",
                    "Aussieland",
                    "Oz",
                    "Stralia",
                    "New Holland",
                    "New Hollandia",
                    "Nova Hollandia",
                    "Down Under",
                    "Stria",
                    "The Commonwealth of Australia"
                ],
                "wikidata_summary": "country in Oceania",
                "wikidata_url": "https://www.wikidata.org/wiki/Q408",
                "wikipedia_summary": "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest, flattest, and driest inhabited continent, with the least fertile soils. It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, tropical savannas in the north, and mountain ranges in the south-east.\nThe ancestors of Aboriginal Australians began arriving from south-east Asia 50,000 to 65,000 years ago, during the last glacial period. They settled the continent and had formed approximately 250 distinct language groups by the time of European settlement, maintaining some of the longest known continuing artistic and religious traditions in the world. Australia's written history commenced with European maritime exploration. The Dutch were the first known Europeans to reach Australia, in 1606. British colonisation began in 1788 with the establishment of the penal colony of New South Wales. By the mid-19th century, most of the continent had been explored by European settlers and five additional self-governing British colonies were established, each gaining responsible government by 1890. The colonies federated in 1901, forming the Commonwealth of Australia. This continued a process of increasing autonomy from the United Kingdom, highlighted by the Statute of Westminster Adoption Act 1942, and culminating in the Australia Acts of 1986.\nAustralia is a federal parliamentary constitutional monarchy comprising six states and ten territories: the states of New South Wales, Victoria, Queensland, Tasmania, South Australia and Western Australia; the major mainland Australian Capital Territory and Northern Territory; and other minor or external territories. Its population of nearly 27 million is highly urbanised and heavily concentrated on the eastern seaboard. Canberra is the nation's capital, while its most populous cities are Sydney, Melbourne, Brisbane, Perth and Adelaide. Australian governments have promoted multiculturalism since the 1970s. Australia is culturally diverse and has one of the highest foreign-born populations in the world. Its abundant natural resources and well-developed international trade relations are crucial to the country's economy, which generates its income from various sources: predominantly services (including banking, real estate and international education) as well as mining, manufacturing and agriculture. It ranks highly for quality of life, health, education, economic freedom, civil liberties and political rights.\nAustralia has a highly developed market economy and one of the highest per capita incomes globally. It is a middle power, and has the world's thirteenth-highest military expenditure. It is a member of international groups including the United Nations; the G20; the OECD; the World Trade Organization; Asia-Pacific Economic Cooperation; the Pacific Islands Forum; the Pacific Community; the Commonwealth of Nations; and the defence and security organisations ANZUS, AUKUS, and the Five Eyes. It is also a major non-NATO ally of the United States.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Australia"
            },
            "Q41148": {
                "name": "Martin Scorsese",
                "wikidata_aliases": [
                    "Martin Charles Scorsese"
                ],
                "wikidata_summary": "American film director, screenwriter and producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q41148",
                "wikipedia_summary": "Martin Charles Scorsese ( skor-SESS-ee, Italian: [skorˈseːze, -se]; born November 17, 1942) is an American filmmaker. He emerged as one of the major figures of the New Hollywood era. He has received many accolades, including an Academy Award, four BAFTA Awards, three Emmy Awards, a Grammy Award, and three Golden Globe Awards. He has been honored with the AFI Life Achievement Award in 1997, the Film Society of Lincoln Center tribute in 1998, the Kennedy Center Honor in 2007, the Cecil B. DeMille Award in 2010, and the BAFTA Fellowship in 2012. Four of his films have been inducted into the National Film Registry by the Library of Congress as 'culturally, historically or aesthetically significant'.\nScorsese received a Master of Arts degree from New York University's Steinhardt School of Culture, Education, and Human Development in 1968. His directorial debut, Who's That Knocking at My Door (1967), was accepted into the Chicago Film Festival. In the 1970s and 1980s decades, Scorsese's films, much influenced by his Italian-American background and upbringing in New York City, center on macho-posturing men and explore crime, machismo, nihilism, and Catholic concepts of guilt and redemption. His trademark styles include extensive use of slow motion and freeze frames, graphic depictions of extreme violence, and liberal use of profanity. His 1973 crime film Mean Streets was a blueprint for his filmmaking styles.\nScorsese won the Palme d'Or at Cannes with his 1976 psychological thriller Taxi Driver, which starred Robert De Niro, who became associated with Scorsese through eight more films including New York, New York (1977), Raging Bull (1980) The King of Comedy (1982), Goodfellas (1990), and Casino (1995). In the following decades, he garnered box office success with a series of collaborations with Leonardo DiCaprio. These films include Gangs of New York (2002), The Aviator (2004), The Departed (2006), Shutter Island (2010) and The Wolf of Wall Street (2013). He reunited with De Niro with The Irishman (2019) and Killers of the Flower Moon (2023), the latter also featuring DiCaprio. His other films include After Hours (1985), The Color of Money (1986), The Last Temptation of Christ (1988), The Age of Innocence (1993), Kundun (1997), Hugo (2011), and Silence (2016).\nIn addition to film, Scorsese has directed episodes for some television series including the HBO series Boardwalk Empire (2011–2015), and Vinyl (2016), as well as the HBO documentary Public Speaking (2010), and the Netflix docu-series Pretend It's a City (2021). He is also known for several rock music documentaries including The Last Waltz (1978), No Direction Home (2005), Shine a Light (2008), and George Harrison: Living in the Material World (2011). An advocate for film preservation and restoration, he founded three nonprofit organizations: The Film Foundation in 1990, the World Cinema Foundation in 2007, and the African Film Heritage Project in 2017.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Martin_Scorsese"
            },
            "Q41163": {
                "name": "Al Pacino",
                "wikidata_aliases": [
                    "Alfredo James Pacino"
                ],
                "wikidata_summary": "American actor (born 1940)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q41163",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q41396": {
                "name": "Josh Brolin",
                "wikidata_aliases": [
                    "Josh James Brolin"
                ],
                "wikidata_summary": "American actor (born 1968)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q41396",
                "wikipedia_summary": "Josh James Brolin (; born February 12, 1968) is an American actor. A son of actor James Brolin, he gained fame in his youth for his role in the adventure film The Goonies (1985). After years of decline, Brolin had a resurgence with his starring role in the crime film No Country for Old Men (2007). Brolin received a nomination for the Academy Award for Best Supporting Actor for portraying Dan White in the biopic Milk (2008).\nBrolin gained wider recognition for playing Thanos in the Marvel Cinematic Universe, including in the films Avengers: Infinity War (2018) and Avengers: Endgame (2019), as well as Cable in Deadpool 2 (2018). His other notable films include W. (2008), True Grit (2010), Wall Street: Money Never Sleeps (2010), Men in Black 3 (2012), Oldboy (2013), Inherent Vice (2014), Everest (2015), Sicario (2015), Hail, Caesar! (2016), Only the Brave (2017), Dune (2021), and Dune: Part Two (2024).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Josh_Brolin"
            },
            "Q41422": {
                "name": "Mark Ruffalo",
                "wikidata_aliases": [
                    "Mark Alan Ruffalo"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q41422",
                "wikipedia_summary": "Mark Alan Ruffalo (; born November 22, 1967) is an American actor. He began acting in the early 1990s and first gained recognition for his work in Kenneth Lonergan's play This Is Our Youth (1996) and drama film You Can Count on Me (2000). He went on to star in the romantic comedies 13 Going on 30 (2004), Just like Heaven (2005) and the thrillers In the Cut (2003), Zodiac (2007), and Shutter Island (2010). He received a Tony Award nomination for his supporting role in the Broadway revival of Awake and Sing! in 2006. Ruffalo gained international recognition for playing Bruce Banner / Hulk since 2012 in the superhero franchise of the Marvel Cinematic Universe.\nRuffalo gained nominations for the Academy Award for Best Supporting Actor for playing a sperm-donor in the comedy-drama The Kids Are All Right (2010), Dave Schultz in the biopic Foxcatcher (2014), Michael Rezendes in the drama Spotlight (2015), and a debauched lawyer in the science fantasy Poor Things (2023). He won a Screen Actors Guild Award for Best Actor for playing a gay activist in the television drama film The Normal Heart (2015), and a Primetime Emmy Award for Outstanding Lead Actor for his dual role as identical twins in the miniseries I Know This Much Is True (2020).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mark_Ruffalo"
            },
            "Q4182927": {
                "name": "Stockbroker",
                "wikidata_aliases": [
                    "broker-dealer",
                    "financial adviser",
                    "investment adviser",
                    "investment broker",
                    "investment professional",
                    "registered investment adviser",
                    "regulated broker",
                    "share holder registered representative",
                    "sharebroker",
                    "stock broker",
                    "trading representative",
                    "wealth manager",
                    "investment advisor"
                ],
                "wikidata_summary": "professional who buys and sells shares and other securities for both retail and institutional clients",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4182927",
                "wikipedia_summary": "A stockbroker is an individual or company that buys and sells stocks and other investments for a financial market participant in return for a commission, markup, or fee.  In most countries they are regulated as a broker or broker-dealer and may need to hold a relevant license and may be a member of a stock exchange. They generally act as a financial advisor and investment manager. In this case they may also be licensed as a financial adviser such as a registered investment adviser (in the United States).\nExamples of professional designations held by individuals in this field, which affects the types of investments they are permitted to sell and the services they provide include chartered financial consultants, certified financial planners or chartered financial analysts (in the United States and UK), chartered financial planners (in the UK).\nIn the United States, the Financial Industry Regulatory Authority provides an online tool designed to help understand professional designations.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Stockbroker"
            },
            "Q42040": {
                "name": "Apocalypse",
                "wikidata_aliases": [
                    "Apocalypse",
                    "The Uncovering",
                    "The Apocalypse",
                    "Revelation",
                    "Apocalypse of John",
                    "Revelation of John",
                    "Revelation to John"
                ],
                "wikidata_summary": "final book of the New Testament",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42040",
                "wikipedia_summary": "Apocalypse (from Ancient Greek  ἀποκάλυψις (apokálupsis) 'revelation, disclosure') is a literary genre in which a supernatural being reveals cosmic mysteries or the future to a human intermediary. The means of mediation include dreams, visions and heavenly journeys, and they typically feature symbolic imagery drawn from the Hebrew Bible, cosmological and (pessimistic) historical surveys, the division of time into periods, esoteric numerology, and claims of ecstasy and inspiration. Almost all are written under pseudonyms (false names), claiming as author a venerated hero from previous centuries, as with the Book of Daniel, composed during the 2nd century BC but bearing the name of the legendary Daniel. \nEschatology, from Greek eschatos, last, concerns expectations of the end of the present age, and apocalyptic eschatology is the application of the apocalyptic world-view to the end of the world, when God will bring judgment to the world and save his followers. An apocalypse will often contain much eschatological material, but need not: the baptism of Jesus in Matthew's gospel, for example, can be considered apocalyptic in that the heavens open for the presence of a divine mediator (the dove representing the spirit of God) and a voice communicates supernatural information, but there is no eschatological element.\nScholars have identified examples of the genre ranging from the mid-2nd century BC to the 2nd century AD, and examples are to be found in Persian and Greco-Roman literature as well as Jewish and Christian. The sole clear case in the Jewish Bible (Old Testament) is chapters 7-12 of the Book of Daniel, but there are many examples from non-canonical Jewish works; the Book of Revelation is the only apocalypse in the New Testament, but passages reflecting the genre are to be found in the gospels and in nearly all the genuine Pauline epistles.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Apocalypse"
            },
            "Q42178": {
                "name": "Vice president",
                "wikidata_aliases": [
                    "vice-president",
                    "EVP",
                    "VP",
                    "veep"
                ],
                "wikidata_summary": "officer in government or business",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42178",
                "wikipedia_summary": "A vice president or vice-president, also director in British English, is an officer in government or business who is below the president (chief executive officer) in rank. It can also refer to executive vice presidents, signifying that the vice president is on the executive branch of the government, university or company. The name comes from the Latin term vice meaning 'in place of' and typically serves as pro tempore (Latin: ’for the time being’) to the president. In some countries, the vice president is called the deputy president. In everyday speech, the abbreviation VP is used.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Vice_president"
            },
            "Q42411864": {
                "name": "Patrick J Baker",
                "wikidata_aliases": [
                    "Patrick Baker"
                ],
                "wikidata_summary": "researcher (ORCID 0000-0003-1995-5643)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42411864",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q42519": {
                "name": "gray",
                "wikidata_aliases": [
                    "color gray",
                    "gray color",
                    "grey color",
                    "grey"
                ],
                "wikidata_summary": "intermediate color between black and white; for e.g. color of a cloud-covered sky, ash and lead",
                "wikidata_url": "https://www.wikidata.org/wiki/Q42519",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q43015": {
                "name": "Finance",
                "wikidata_aliases": [
                    "Finance"
                ],
                "wikidata_summary": "academic discipline studying businesses, financing, investments and protection of economic value",
                "wikidata_url": "https://www.wikidata.org/wiki/Q43015",
                "wikipedia_summary": "Finance is the study and discipline of money, currency and capital assets.\nIt is related to but distinct from economics, which is the study of the production, distribution, and consumption of goods and services. \nBased on the scope of financial activities in financial systems, the discipline can be divided into personal, corporate, and public finance.\nIn these financial systems, assets are bought, sold, or traded as financial instruments, such as currencies, loans, bonds, shares, stocks, options, futures, etc. Assets can also be banked, invested, and insured to maximize value and minimize loss. In practice, risks are always present in any financial action and entities.\nDue to its wide scope, a broad range of subfields exists within finance. \nAsset-, money-, risk- and investment management aim to maximize value and minimize volatility. \nFinancial analysis assesses the viability, stability, and profitability of an action or entity. \nSome fields are multidisciplinary, such as mathematical finance, financial law, financial economics, financial engineering and financial technology. These fields are the foundation of business and accounting.\nIn some cases, theories in finance can be tested using the scientific method, covered by experimental finance.\nThe early history of finance parallels the early history of money, which is prehistoric. Ancient and medieval civilizations incorporated basic functions of finance, such as banking, trading and accounting, into their economies. In the late 19th century, the global financial system was formed.\nIn the middle of the 20th century, finance emerged as a distinct academic discipline,\nseparate from economics. \nThe earliest doctoral programs in finance were established in the 1960s and 1970s.\nToday, finance is also widely studied through career-focused undergraduate and master's level programs.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Finance"
            },
            "Q43297": {
                "name": "Time",
                "wikidata_aliases": [
                    "Time magazine"
                ],
                "wikidata_summary": "American news magazine and website",
                "wikidata_url": "https://www.wikidata.org/wiki/Q43297",
                "wikipedia_summary": "Time is the continued sequence of existence and events that occurs in an apparently irreversible succession from the past, through the present, and into the future. It is a component quantity of various measurements used to sequence events, to compare the duration of events or the intervals between them, and to quantify rates of change of quantities in material reality or in the conscious experience. Time is often referred to as a fourth dimension, along with three spatial dimensions.\nTime is one of the seven fundamental physical quantities in both the International System of Units (SI) and International System of Quantities. The SI base unit of time is the second, which is defined by measuring the electronic transition frequency of caesium atoms. General relativity is the primary framework for understanding how spacetime works. Through advances in both theoretical and experimental investigations of spacetime, it has been shown that time can be distorted and dilated, particularly at the edges of black holes.\nThroughout history, time has been an important subject of study in religion, philosophy, and science. Temporal measurement has occupied scientists and technologists and has been a prime motivation in navigation and astronomy. Time is also of significant social importance, having economic value ('time is money') as well as personal value, due to an awareness of the limited time in each day and in human life spans.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Time"
            },
            "Q434841": {
                "name": "20th Century Studios",
                "wikidata_aliases": [
                    "Twentieth Century-Fox Film Corporation",
                    "20th Century Fox Pictures",
                    "Twentieth Century Fox",
                    "Twentieth (20th) Century Fox Film Corporation",
                    "20th Century Fox",
                    "Twentieth Century Fox Film Corporation",
                    "Twentieth Century Studios",
                    "TCF"
                ],
                "wikidata_summary": "American film studio owned by The Walt Disney Company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q434841",
                "wikipedia_summary": "20th Century Studios, Inc. is an American film studio owned by the Walt Disney Studios, a division of Disney Entertainment, in turn a division of The Walt Disney Company. It is headquartered at the Fox Studio Lot in the Century City area of Los Angeles, leased from Fox Corporation. Walt Disney Studios Motion Pictures distributes and markets the films produced by 20th Century Studios in theatrical markets.\nFor over 80 years, 20th Century was one of the major American film studios. It was formed in 1935 as Twentieth Century-Fox Film Corporation by the merger of Fox Film and Twentieth Century Pictures, and one of the original 'Big Five' among eight majors of Hollywood's Golden Age. In 1985, the studio removed the hyphen in the name (becoming Twentieth Century Fox Film Corporation) after being acquired by Rupert Murdoch's News Corporation, which was renamed 21st Century Fox in 2013 after it spun-off its publishing assets. Disney purchased most of 21st Century Fox's assets, which included 20th Century Fox, on March 20, 2019. The studio adopted its current name as a trade name on January 17, 2020, in order to avoid confusion with Fox Corporation, and subsequently started to use it for the copyright of 20th Century and Searchlight Pictures productions on December 4.\nThe most commercially successful film series from 20th Century Studios include the first six Star Wars films, X-Men, Ice Age, Avatar, and Planet of the Apes. Additionally, the studio's library includes many individual films such as Titanic and The Sound of Music, both of which won the Academy Award for Best Picture and became the highest-grossing films of all time during their initial releases.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/20th_Century_Studios"
            },
            "Q450720": {
                "name": "Roger Avary",
                "wikidata_aliases": [
                    "Roger Roberts Avary"
                ],
                "wikidata_summary": "Canadian producer, screenwriter and director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q450720",
                "wikipedia_summary": "Roger Roberts Avary (born August 23, 1965) is a Canadian-American film, television director, screenwriter and producer. He worked with Quentin Tarantino on Pulp Fiction, for which they won Best Original Screenplay at the 67th Academy Awards. Avary directed Killing Zoe, The Rules of Attraction, Lucky Day, and wrote the screenplays for Silent Hill and Beowulf.\nAfter Pulp Fiction, Avary had a falling out with Tarantino that lasted twenty years. In 2022, Avary reunited with Quentin Tarantino to launch a podcast called The Video Archives Podcast. The first episode premiered on July 19, 2022.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Roger_Avary"
            },
            "Q45672": {
                "name": "The Last Stand",
                "wikidata_aliases": [
                    "Last Stand"
                ],
                "wikidata_summary": "2013 film directed by Kim Ji-woon",
                "wikidata_url": "https://www.wikidata.org/wiki/Q45672",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q4575196": {
                "name": "John Macaluso",
                "wikidata_aliases": [],
                "wikidata_summary": "American musician",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4575196",
                "wikipedia_summary": "John Macaluso (born January 21, 1968) is an American drummer who has played for bands such as Ark, TNT, and Yngwie Malmsteen. Born in Commack, New York, Macaluso started playing drums at age 11. He has recorded over 200 records and played multiple world tours. He also runs clinics and teaches others.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/John_Macaluso"
            },
            "Q457881": {
                "name": "John Tenniel",
                "wikidata_aliases": [
                    "Sir John Tenniel",
                    "Sir Tenniel",
                    "J. Tenniel"
                ],
                "wikidata_summary": "British illustrator, graphic humorist and political cartoonist, very good friends with Spencer Bradshaw (1820-1914)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q457881",
                "wikipedia_summary": "Sir John Tenniel (; 28 February 1820 – 25 February 1914) was an English illustrator, graphic humourist and political cartoonist prominent in the second half of the 19th century. An alumnus of the Royal Academy of Arts in London, he was knighted for artistic achievements in 1893, the first such honour ever bestowed on an illustrator or cartoonist.\nTenniel is remembered mainly as the principal political cartoonist for Punch magazine for over 50 years and for his illustrations to Lewis Carroll's Alice's Adventures in Wonderland (1865) and Through the Looking-Glass, and What Alice Found There (1871). Tenniel's detailed black-and-white drawings remain the definitive depiction of the Alice characters, with comic book illustrator and writer Bryan Talbot stating, 'Carroll never describes the Mad Hatter: our image of him is pure Tenniel.'",
                "wikipedia_url": "https://en.wikipedia.org/wiki/John_Tenniel"
            },
            "Q463126": {
                "name": "Coriolanus",
                "wikidata_aliases": [
                    "The Tragedy of Coriolanus",
                    "Tragedy of Coriolanus",
                    "Caius Marcius Coriolanus"
                ],
                "wikidata_summary": "play by William Shakespeare",
                "wikidata_url": "https://www.wikidata.org/wiki/Q463126",
                "wikipedia_summary": "Coriolanus ( or ) is a tragedy by William Shakespeare, believed to have been written between 1605 and 1608. The play is based on the life of the legendary Roman leader Gnaeus Marcius Coriolanus. Shakespeare worked on it during the same years he wrote Antony and Cleopatra, making them his last two tragedies.\nCoriolanus is the name given to a Roman general after his military feats against the Volscians at Corioli. Following his success he seeks to be consul, but his disdain for the plebeians and mutual hostility with the tribunes lead to his banishment from Rome. In exile, he presents himself to the Volscians, then leads them against Rome. After he relents and agrees to a peace with Rome, he is killed by his previous Volscian allies.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Coriolanus"
            },
            "Q465501": {
                "name": "stunt performer",
                "wikidata_aliases": [
                    "daredevil",
                    "cascadeur",
                    "stuntman",
                    "stuntwoman",
                    "stuntperson",
                    "stunt man",
                    "stunt woman"
                ],
                "wikidata_summary": "person who performs stunts",
                "wikidata_url": "https://www.wikidata.org/wiki/Q465501",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q469954": {
                "name": "Austin Butler",
                "wikidata_aliases": [
                    "Austin Robert Butler"
                ],
                "wikidata_summary": "American actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q469954",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q47163260": {
                "name": "Jeff Bannister",
                "wikidata_aliases": [
                    "Jeffrey Bannister",
                    "Jeffrey Granville Bannister"
                ],
                "wikidata_summary": "American decathlete",
                "wikidata_url": "https://www.wikidata.org/wiki/Q47163260",
                "wikipedia_summary": "Jeffrey Granville Bannister (born August 30, 1945) is a retired American decathlete. In 1979 he won the U.S. Olympic Trials and placed 21st at the 1972 Summer Olympics.\nBannister played basketball as a forward at University of New Hampshire. In 1966 he won the AAU pentathlon title; in the decathlon he finished third in 1969 and second in 1972.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jeff_Bannister"
            },
            "Q47300912": {
                "name": "Once Upon a Time in Hollywood",
                "wikidata_aliases": [
                    "Once In Hollywood",
                    "OUATIH",
                    "Once Upon a Time in ... Hollywood",
                    "Once Upon a Time... In Hollywood"
                ],
                "wikidata_summary": "2019 film directed by Quentin Tarantino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q47300912",
                "wikipedia_summary": "Once Upon a Time...in Hollywood is a 2019 comedy-drama film written and directed by Quentin Tarantino. Produced by Columbia Pictures, Bona Film Group, Heyday Films, and Visiona Romantica and distributed by Sony Pictures, it is a co-production between the United States, United Kingdom, and China. It features a large ensemble cast led by Leonardo DiCaprio, Brad Pitt, and Margot Robbie. Set in 1969 Los Angeles, the film follows a fading actor and his stunt double as they navigate the rapidly changing film industry, with the looming threat of the Tate murders hanging overhead.\nAnnounced in July 2017, it is the first Tarantino film not to involve Bob and Harvey Weinstein, as Tarantino ended his partnership with the brothers following the sexual abuse allegations against the latter. After a bidding war, the film was distributed by Sony Pictures, which met Tarantino's demands including final cut privilege. Pitt, DiCaprio, Robbie, Zoë Bell, Kurt Russell, and others joined the cast between January and June 2018. Principal photography lasted from June through November around Los Angeles. Once Upon a Time in Hollywood is the final film to feature Luke Perry, who died on March 4, 2019, and it is dedicated to his memory.\nOnce Upon a Time in Hollywood premiered at the 2019 Cannes Film Festival on May 21, 2019, and was theatrically released in the United States on July 26, 2019, and in the United Kingdom on August 14. It grossed $374 million worldwide and received praise from critics for Tarantino's direction and screenplay, the performances (particularly from DiCaprio and Pitt), cinematography, soundtrack, sound design, costume design, and production values. The National Board of Review and the American Film Institute named Once Upon a Time in Hollywood one of the top-ten films of 2019. Once Upon a Time in Hollywood was nominated for ten awards at the 92nd Academy Awards, winning two, and received numerous other accolades. A novelization, written by Tarantino in his debut as an author, was published on June 29, 2021.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood"
            },
            "Q4740856": {
                "name": "Amazon Prime Video",
                "wikidata_aliases": [
                    "Amazon Video On Demand",
                    "Amazon Unbox",
                    "Amazon Instant Video",
                    "Amazon Video",
                    "Amazon Prime"
                ],
                "wikidata_summary": "American video streaming service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4740856",
                "wikipedia_summary": "Amazon Prime Video, or simply Prime Video, is an American subscription video on-demand over-the-top streaming and rental service of Amazon offered both as a stand-alone service and as part of Amazon's Prime subscription. The service primarily distributes films and television series produced by Amazon MGM Studios or licensed to Amazon, as Amazon Originals, with the service also hosting content from other providers, content add-ons, live sporting events, and video rental and purchasing services.\nOperating worldwide, the service may require a full Prime subscription to be accessed. In countries such as the United States, United Kingdom, and Germany, the service can be accessed without a full Prime subscription, whereas in Australia, Canada, France, India, Turkey, and Italy, it can only be accessed through a dedicated website. Prime Video additionally offers a content add-on service in the form of channels, called Amazon Channels, or Prime Video Channels, which allow users to subscribe to additional video subscription services from other content providers within Prime Video.\nLaunched on September 7, 2006, as Amazon Unbox in the United States, the service grew with an expanding library, and added the Prime Video membership upon the development of the Prime subscription. It was then renamed as Amazon Instant Video on Demand. After acquiring the UK-based streaming and DVD-by-mail service LoveFilm in 2011, Prime Video was added to the Prime subscription in the United Kingdom, Germany, and Austria in 2014, available on a monthly subscription of £/€8.99 per month, continuing the plan of LoveFilm Instant. The service was previously available in Norway, Denmark, and Sweden in 2012, but was discontinued in 2013. On April 18, 2016, Amazon split Prime Video from Amazon Prime in the US for $8.99 per month.\nOn December 14, 2016, Prime Video launched worldwide (except for Mainland China, Cuba, Iran, North Korea, Sudan, and Syria) expanding its reach beyond the United States, United Kingdom, Germany, Austria, and Japan. Among the new territories, the service was included with Prime in Belgium, Brazil, Canada, France, India, Ireland, Italy, Poland, Turkey, and Spain, while for all other countries, it was made available for a monthly promotional price of $/€2.99 per month for the first six months and $/€5.99 per month thereafter.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Amazon_Prime_Video"
            },
            "Q47528": {
                "name": "Radar",
                "wikidata_aliases": [
                    "RADAR",
                    "R.A.D.A.R.",
                    "Radio Detection and Ranging"
                ],
                "wikidata_summary": "object detection system based on radio waves",
                "wikidata_url": "https://www.wikidata.org/wiki/Q47528",
                "wikipedia_summary": "Radar is a system that uses radio waves to determine the distance (ranging), direction (azimuth and elevation angles), and radial velocity of objects relative to the site. It is a radiodetermination method used to detect and track aircraft, ships, spacecraft, guided missiles, motor vehicles, map weather formations, and terrain. \nA radar system consists of a transmitter producing electromagnetic waves in the radio or microwaves domain, a transmitting antenna, a receiving antenna (often the same antenna is used for transmitting and receiving) and a receiver and processor to determine properties of the objects. Radio waves (pulsed or continuous) from the transmitter reflect off the objects and return to the receiver, giving information about the objects' locations and speeds.\nRadar was developed secretly for military use by several countries in the period before and during World War II. A key development was the cavity magnetron in the United Kingdom, which allowed the creation of relatively small systems with sub-meter resolution. The term RADAR was coined in 1940 by the United States Navy as an acronym for 'radio detection and ranging'. The term radar has since entered English and other languages as an anacronym, a common noun, losing all capitalization.\nThe modern uses of radar are highly diverse, including air and terrestrial traffic control, radar astronomy, air-defense systems, anti-missile systems, marine radars to locate landmarks and other ships, aircraft anti-collision systems, ocean surveillance systems, outer space surveillance and rendezvous systems, meteorological precipitation monitoring, radar remote sensing, altimetry and flight control systems, guided missile target locating systems, self-driving cars, and ground-penetrating radar for geological observations. Modern high tech radar systems use digital signal processing and machine learning and are capable of extracting useful information from very high noise levels.\nOther systems which are similar to radar make use of other parts of the electromagnetic spectrum. One example is lidar, which uses predominantly infrared light from lasers rather than radio waves. With the emergence of driverless vehicles, radar is expected to assist the automated platform to monitor its environment, thus preventing unwanted incidents.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Radar"
            },
            "Q47715": {
                "name": "Down syndrome",
                "wikidata_aliases": [
                    "Down's syndrome",
                    "trisomy 21 syndrome",
                    "Complete trisomy 21 syndrome (disorder)",
                    "Complete trisomy 21 syndrome",
                    "Downs syndrome",
                    "trisomy 21",
                    "Down's syndrome - trisomy 21",
                    "G Trisomy"
                ],
                "wikidata_summary": "chromosomal condition characterized by flat-looking facial features and weak muscle tone in infancy",
                "wikidata_url": "https://www.wikidata.org/wiki/Q47715",
                "wikipedia_summary": "Down syndrome or Down's syndrome, also known as trisomy 21, is a genetic disorder caused by the presence of all or part of a third copy of chromosome 21. It is usually associated with developmental delays, mild to moderate intellectual disability, and characteristic physical features. There are three types of Down syndrome, the most common being Trisomy 21. Mosaic Down syndrome accounts for two per cent of Down syndrome cases, and Translocation Down syndrome accounts for three per cent of cases.\nThe parents of the affected individual are usually genetically normal. The probability increases from less than 0.1% in 20-year-old mothers to 3% in those of age 45. The extra chromosome is provided at conception as the egg and sperm combine. A very small percentage of 1-2% gets the additional chromosome in the embryo stage and it only impacts some of the cells in the body; this is known as Mosaic Down syndrome. Usually, babies get 23 chromosomes from each parent for a total of 46, whereas in Down syndrome, a third 21st chromosome is attached. It is believed to occur by chance, with no known behavioral activity or environmental factor that changes the probability. Down syndrome can be identified during pregnancy by prenatal screening, followed by diagnostic testing, or after birth by direct observation and genetic testing. Since the introduction of screening, Down syndrome pregnancies are often aborted (rates varying from 50 to 85% depending on maternal age, gestational age, and maternal race/ethnicity).\nThere is no cure for Down syndrome. Education and proper care have been shown to provide good quality of life. Some children with Down syndrome are educated in typical school classes, while others require more specialized education. Some individuals with Down syndrome graduate from high school, and a few attend post-secondary education. In adulthood, about 20% in the United States do paid work in some capacity, with many requiring a sheltered work environment. Support in financial and legal matters is often needed. Life expectancy is around 50 to 60 years in the developed world, with proper health care. Regular screening for health issues common in Down syndrome is recommended throughout the person's life.\nDown syndrome is the most common chromosomal abnormality. It occurs in about 1 in 1,000 babies born each year. In the US this figure is given as one in 700 births. In 2015, Down syndrome was present in 5.4 million individuals globally and resulted in 27,000 deaths, down from 43,000 deaths in 1990. It is named after British physician John Langdon Down, who fully described the syndrome in 1866. Some aspects of the condition were described earlier by French psychiatrist Jean-Étienne Dominique Esquirol in 1838 and French physician Édouard Séguin in 1844. The genetic cause of Down syndrome was discovered in 1959.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Down_syndrome"
            },
            "Q482657": {
                "name": "Logan",
                "wikidata_aliases": [
                    "Logan, Utah",
                    "Logan, UT"
                ],
                "wikidata_summary": "city in and county seat of Cache County, Utah, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q482657",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q485901": {
                "name": "James Marsden",
                "wikidata_aliases": [
                    "James Paul Marsden"
                ],
                "wikidata_summary": "American actor (born 1973)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q485901",
                "wikipedia_summary": "James Paul Marsden (born September 18, 1973) is an American actor. He began his acting career guest starring in the television shows Saved by the Bell: The New Class (1993), Touched by an Angel (1995), and Party of Five (1995). Marsden gained fame for his portrayal of Cyclops in the X-Men film series (2000–2014) and for his roles in the films The Notebook (2004), Superman Returns (2006), Hairspray (2007), Enchanted (2007), and 27 Dresses (2008). He portrayed John F. Kennedy in the drama film The Butler (2013) and starred in the comedy films Anchorman 2: The Legend Continues (2013), Sonic the Hedgehog (2020) and Sonic the Hedgehog 2 (2022).\nMarsden starred in the science fiction series Westworld from 2016 to 2022 and in the black comedy series Dead to Me from 2019 to 2022, for which he received a nomination for the Critics' Choice Television Award in 2023. He played guest roles in the sitcoms Modern Family (2011) and 30 Rock (2012–2013). He starred as a fictionalized version of himself in the mockumentary series Jury Duty (2023), for which he received nominations for a Golden Globe Award and a Primetime Emmy Award.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/James_Marsden"
            },
            "Q490": {
                "name": "Milan",
                "wikidata_aliases": [
                    "Milano",
                    "Milano, Italy",
                    "Milan, Italy",
                    "Mailand",
                    "Milan, Lombardy"
                ],
                "wikidata_summary": "Italian commune and capital city of Lombardy",
                "wikidata_url": "https://www.wikidata.org/wiki/Q490",
                "wikipedia_summary": "Milan (Milanese: [miˈlãː] ; Italian: Milano, Italian: [miˈlaːno] ) is a city in northern Italy, regional capital of Lombardy, and the second-most-populous city proper in Italy after Rome. The city proper has a population of about 1.4 million, while its metropolitan city has 3.22 million residents. The urban area of Milan is the fourth largest in the EU with 5.27 million inhabitants. According to national sources, the population within the wider Milan metropolitan area (also known as Greater Milan) is estimated between 4.9 million and 7.4 million, making it by far the largest metropolitan area in Italy and one of the largest in the EU. Milan is the economic capital of Italy, one of the economic capitals of Europe and a global financial centre.\nMilan is a leading alpha global city, with strengths in the fields of art, chemicals, commerce, design, education, entertainment, fashion, finance, healthcare, media (communication), services, research and tourism. Its business district hosts Italy's stock exchange (Italian: Borsa Italiana), and the headquarters of national and international banks and companies. In terms of GDP, Milan is the wealthiest city in Italy, having also one of the largest economies among EU cities. Milan is viewed along with Turin as the southernmost part of the Blue Banana urban development corridor (also known as the 'European Megalopolis'), and one of the Four Motors for Europe. Milan is one of the international tourism destinations, appearing among the most visited cities in the world, ranking second in Italy after Rome, fifth in Europe and sixteenth in the world. Milan is a major cultural centre, with museums and art galleries that include some of the most important collections in the world, such as major works by Leonardo da Vinci. It also hosts numerous educational institutions, academies and universities, with 11% of the national total of enrolled students.\nFounded around 590 BC under the name Medhelanon by a Celtic tribe belonging to the Insubres group and belonging to the Golasecca culture, it was conquered by the ancient Romans in 222 BC, who latinized the name of the city into Mediolanum. The city's role as a major political centre dates back to the late antiquity, when it served as the capital of the Western Roman Empire. From the 12th century until the 16th century, Milan was one of the largest European cities and a major trade and commercial centre; consequently, it became the capital of the Duchy of Milan, one of the greatest political, artistic and fashion forces in the Renaissance. Having become one of the main centres of the Italian Enlightenment during the early modern period. While in the Restoration period it was among the most active centres, until its entry into the unified Kingdom of Italy. From the 20th century onwards Milan became the industrial and financial capital of Italy.\nMilan has been recognized as one of the world's four fashion capitals. Many of the most famous luxury fashion brands in the world have their headquarters in the city, including: Armani, Prada, Versace, Moschino, Valentino and Zegna. It also hosts several international events and fairs, including Milan Fashion Week and the Milan Furniture Fair, which are among the world's biggest in terms of revenue, visitors and growth. The city is served by many luxury hotels and is the fifth most starred in the world by Michelin Guide. It hosted the Universal Exposition in 1906 and 2015. In the field of sports, Milan is home to two of Europe's most successful football teams, AC Milan and Inter Milan, and one of Europe's main basketball teams, Olimpia Milano. Milan will host the Winter Olympic and Paralympic games for the first time in 2026, together with Cortina d'Ampezzo.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Milan"
            },
            "Q49127": {
                "name": "Harvard Kennedy School",
                "wikidata_aliases": [
                    "HKS",
                    "Harvard University Kennedy School of Government",
                    "Harvard Kennedy School",
                    "Harvard Kennedy School of Government",
                    "John Fitzgerald Kennedy School of Government",
                    "Kennedy School of Government",
                    "John F Kennedy School of Government"
                ],
                "wikidata_summary": "school of public administration of Harvard University",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49127",
                "wikipedia_summary": "Harvard Kennedy School (HKS), officially the John F. Kennedy School of Government, is the school of public policy and government of Harvard University in Cambridge, Massachusetts. The school offers master's degrees in public policy, public administration, and international development, four doctoral degrees, and various executive education programs. It conducts research in subjects relating to politics, government, international affairs, and economics. As of 2021, HKS had an endowment of $1.7 billion. It is a member of the Association of Professional Schools of International Affairs (APSIA), a global consortium of schools that trains leaders in international affairs.\nThe primary campus of Harvard Kennedy School is on John F. Kennedy Street in Cambridge. The main buildings overlook the Charles River and are southwest of Harvard Yard and Harvard Square, on the site of a former MBTA Red Line trainyard. The School is adjacent to the public riverfront John F. Kennedy Memorial Park.\nHarvard Kennedy School alumni include 20 heads of state or government from around the world, the most of any graduate institution in the world. Alumni also include cabinet officials, military leaders, heads of central banks, and legislators.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Harvard_Kennedy_School"
            },
            "Q49233": {
                "name": "Orlando",
                "wikidata_aliases": [
                    "Orlando, Florida",
                    "City of Orlando",
                    "Orlando, FL",
                    "The Beautiful city",
                    "Theme Park Capital of the World"
                ],
                "wikidata_summary": "city in and county seat of Orange County, Florida, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49233",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q49619": {
                "name": "2024",
                "wikidata_aliases": [
                    "MMXXIV",
                    "two thousand twenty-four",
                    "two thousand and twenty-four",
                    "twenty twenty-four",
                    "2024 AD",
                    "2024 CE"
                ],
                "wikidata_summary": "current calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49619",
                "wikipedia_summary": "2024 (MMXXIV) is the current year, and is a leap year starting on Monday of the Gregorian calendar, the 2024th year of the Common Era (CE) and Anno Domini (AD) designations, the 24th  year of the 3rd millennium and the 21st century, and the  5th   year of the 2020s decade.  \nSo far, this year has witnessed the continuation of major armed conflicts, including the Russian invasion of Ukraine, the Myanmar civil war, the war in Sudan, and the Islamist insurgency in the Sahel. The continuation of the Israel–Hamas war has further caused spillover into many countries, including a crisis in the Red Sea impacting global shipping. Iran and Israel have also been firing rockets towards each other.\nApproximately 79 countries, representing around four billion people, are expected to conduct national elections throughout the course of the year, including eight out of ten of the world's most populous countries (Bangladesh, Brazil, Pakistan, Russia, India, Mexico, Indonesia, and the United States). The European Parliament will also hold elections.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2024"
            },
            "Q49622": {
                "name": "2023",
                "wikidata_aliases": [
                    "MMXXIII",
                    "2023 AD",
                    "2023 CE",
                    "two thousand twenty-three",
                    "twenty twenty-three",
                    "two thousand and twenty-three",
                    "two zero two three"
                ],
                "wikidata_summary": "calendar year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49622",
                "wikipedia_summary": "2023 (MMXXIII) was a common year starting on Sunday of the Gregorian calendar, the 2023rd year of the Common Era (CE) and Anno Domini (AD) designations, the 23rd  year of the 3rd millennium and the 21st century, and the  4th   year of the 2020s decade.  \nThe year 2023 saw the decline in severity of the COVID-19 pandemic, with the WHO (World Health Organization) ending its global health emergency status in May. Catastrophic natural disasters included the fifth-deadliest earthquake of the 21st century striking Turkey and Syria, leaving up to 62,000 people dead, Cyclone Freddy – the longest-lasting recorded tropical cyclone in history – leading to over 1,400 deaths in Malawi and Mozambique, Storm Daniel, which became the deadliest cyclone worldwide since Cyclone Nargis after killing at least 11,000 people in Libya, a major 6.8 magnitude earthquake striking western Morocco, killing 2,960 people, and a 6.3 magnitude quadruple earthquake striking western Afghanistan, killing over 1,400 people.\nThe Russian invasion of Ukraine and Myanmar civil war continued in 2023, and a series of coups, several armed conflicts, and political crises broke out in numerous African nations, most notably a war in Sudan. An escalation of the Israeli-Palestinian conflict occurred in October when Hamas, which governs the Gaza Strip, led an attack on Israel, leading the latter to declare war on Hamas. The Nagorno-Karabakh conflict ended after over 100,000 Armenians fled the region after an Azeri military invasion.\nA banking crisis resulted in the collapse of numerous American regional banks as well as the buyout of Credit Suisse by UBS in Switzerland. The two largest American banks to collapse were Silicon Valley Bank and First Republic Bank, two of the three largest banking collapses in US history. The most notable of numerous acquisitions in various industries included October's energy acquisitions with ExxonMobil and Chevron buying Pioneer Natural Resources and Hess respectively, the luxury fashion holding company Tapestry (Coach New York and Kate Spade New York) announcing its purchase of Capri Holdings (Michael Kors and Versace), and the closure of Microsoft's acquisition of Activision Blizzard.\nIn the realm of technology, 2023 saw the continued rise of generative AI models, with increasing applications across various industries. These models, leveraging advancements in machine learning and natural language processing, had become capable of creating realistic and coherent text, images, and music. An AI arms race between private companies has continued since the late 2010s, with Microsoft-backed OpenAI and Google owner Alphabet today most dominant among firms.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2023"
            },
            "Q49628": {
                "name": "2021",
                "wikidata_aliases": [
                    "MMXXI",
                    "2021 AD",
                    "2021 CE",
                    "twenty twenty-one",
                    "two thousand and twenty-one",
                    "two thousand twenty-one"
                ],
                "wikidata_summary": "year",
                "wikidata_url": "https://www.wikidata.org/wiki/Q49628",
                "wikipedia_summary": "2021 (MMXXI) was a common year starting on Friday of the Gregorian calendar, the 2021st year of the Common Era (CE) and Anno Domini (AD) designations, the 21st  year of the 3rd millennium and the 21st century, and the  2nd   year of the 2020s decade.  \nSimilar to the year 2020, 2021 was also heavily defined by the COVID-19 pandemic, due to the emergence of multiple COVID-19 variants. The major global rollout of COVID-19 vaccines, which began at the end of 2020, continued in 2021. Most major events scheduled for 2020 that were postponed due to the pandemic were hosted in 2021, including  the 26th United Nations Climate Change Conference, Expo 2020, and sporting events such as UEFA Euro 2020, the 2020 Summer Olympics and Paralympics, as well as the 2021 Copa América. \n\n2021 additionally witnessed the rise of non-fungible tokens as a part of the global economy and numerous advancements in space exploration, particularly by the United Arab Emirates, NASA and SpaceX, including the launch of the James Webb Space Telescope. Civil unrest grew in 2021, with coups occurring in Sudan, Myanmar, Mali and Guinea, and insurrections occurring in Armenia and the United States.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/2021"
            },
            "Q4985891": {
                "name": "Days of Future Past",
                "wikidata_aliases": [
                    "Days of Future Past"
                ],
                "wikidata_summary": "2014 film directed by Bryan Singer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q4985891",
                "wikipedia_summary": "'Days of Future Past' is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141–142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps. An adult Kate Pryde transfers her mind into her younger self, the present-day Kitty Pryde, who brings the X-Men to prevent a fatal moment in history that triggers anti-mutant hysteria.\nThe storyline was produced during the franchise's rise to popularity under the writer/artist team of Chris Claremont, John Byrne and Terry Austin. The dark future seen in the story has been revisited numerous times, and was the basis for the 2014 similarly titled feature film X-Men: Days of Future Past, wherein Wolverine is sent back in time. In 2001, fans voted the first issue of this storyline as the 25th greatest Marvel comic.\nThe Official Handbook to the Marvel Universe: Alternate Universes 2005 gave the numerical designation for the original 'Days of Future Past' timeline as Earth-811 in the Marvel Multiverse.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Days_of_Future_Past"
            },
            "Q504027": {
                "name": "lidar",
                "wikidata_aliases": [
                    "LADAR",
                    "LiDAR",
                    "LIDAR",
                    "3-D laser scanning",
                    "3D laser scanning",
                    "Light Detection and Ranging"
                ],
                "wikidata_summary": "remote detection instrumentation",
                "wikidata_url": "https://www.wikidata.org/wiki/Q504027",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q514974": {
                "name": "Brotherhood of Mutants",
                "wikidata_aliases": [
                    "Brotherhood of Evil Mutants",
                    "Sisterhood of Mutants"
                ],
                "wikidata_summary": "fictional team by Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q514974",
                "wikipedia_summary": "The Brotherhood of Mutants (originally known as the Brotherhood of Evil Mutants, sometimes referred to as the BoEM or B.O.E.M) is a fictional group of mutants appearing in American comic books published by Marvel Comics. The Brotherhood are among the chief adversaries of the X-Men.\nWhile the group's roster and ideology have varied from incarnation to incarnation, most versions of the Brotherhood are generally founded and led by the mutant Magneto as a supervillain team or organization that believes in mutant superiority over humans at any costs. They are almost always at odds with the more peaceful X-Men, though on rare occasions, the two sides have allied against a common threat, most notably Apocalypse. Among the Mutant's who are frequently depicted as members of the Brotherhood includes Mystique, Toad, Blob, Pyro, Mastermind, Quicksilver, and Scarlet Witch.\nThe original Brotherhood was depicted as Magneto's primary allies in his early battles with the X-Men in comics published in the 1960s. The original Brotherhood was ultimately disbanded, with Quicksilver and the Scarlet Witch going on to become members of the Avengers. In 1981, the Brotherhood of Mutants was revived under the leadership of Mastermind, while the group's most visible incarnation during the early 1990s was led by Toad.\nThe Brotherhood of Mutants has also appeared on several animated series featuring the X-Men and has been Magneto’s group in the recent X-Men film series.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Brotherhood_of_Mutants"
            },
            "Q515161": {
                "name": "Kevin Feige",
                "wikidata_aliases": [],
                "wikidata_summary": "American producer and Marvel Studios president",
                "wikidata_url": "https://www.wikidata.org/wiki/Q515161",
                "wikipedia_summary": "Kevin Feige ( FY-ghee; born June 2, 1973) is an American film and television producer. He has been the president of Marvel Studios and the primary producer of the Marvel Cinematic Universe franchise since 2007. The films he has produced have a combined worldwide box office gross of over $29.7 billion, making him the highest grossing producer of all time, with Avengers: Endgame becoming the highest-grossing film at the time of its release.\nFeige is a member of the Producers Guild of America. In 2018, he was nominated for the Academy Award for Best Picture for producing Black Panther, the first superhero film to receive that honor and the first film in the Marvel Cinematic Universe to win an Academy Award. In October 2019, he became chief creative officer of Marvel Entertainment.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Kevin_Feige"
            },
            "Q51552": {
                "name": "Roman Polanski",
                "wikidata_aliases": [
                    "Rajmund Roman Thierry Polański",
                    "Polanski",
                    "Raymond Roman Thierry Liebling",
                    "Raymond Roman Thierry Polański"
                ],
                "wikidata_summary": "French-Polish director, screenwriter, producer and actor",
                "wikidata_url": "https://www.wikidata.org/wiki/Q51552",
                "wikipedia_summary": "Raymond Roman Thierry Polański (né Liebling; born 18 August 1933) is a French and Polish film director, producer, screenwriter, and actor. He is the recipient of numerous accolades, including an Academy Award, two British Academy Film Awards, ten César Awards, two Golden Globe Awards,\nas well as the Golden Bear and a Palme d'Or.\nIn 1977, Polanski was arrested for drugging and raping a 13-year-old girl. He pleaded guilty to the lesser charge of unlawful sex with a minor in exchange for a probation-only sentence. The night before his sentencing hearing in 1978, he learned that the judge would likely reject the proffered plea bargain, so he fled the U.S. to Europe, where he continued his career. He remains a fugitive from the U.S. justice system. Further allegations of abuse have been made by other women.\nPolanski's Polish Jewish parents moved the family from his birthplace in Paris back to Kraków in 1937. Two years later, the invasion of Poland by Nazi Germany started World War II, and the family found themselves trapped in the Kraków Ghetto. After his mother and father were taken in raids, Polanski spent his formative years in foster homes, surviving the Holocaust by adopting a false identity and concealing his Jewish heritage.\nPolanski's first feature-length film, Knife in the Water (1962), was made in Poland and was nominated for the United States Academy Award for Best Foreign Language Film. After living in France for a few years, he moved to the United Kingdom, where he directed his first three English-language feature-length films: Repulsion (1965), Cul-de-sac (1966), and The Fearless Vampire Killers (1967). In 1968, he moved to the United States and cemented his status in the film industry by directing the horror film Rosemary's Baby (1968). He made Macbeth (1971) in England and Chinatown (1974) back in Hollywood. His other critically acclaimed films include Tess (1979), The Pianist (2002) which won him the Academy Award for Best Director, The Ghost Writer (2010), Venus in Fur (2013), and An Officer and a Spy (2019). Polanski has made 23 feature films to date.\nIn 1969, Polanski's pregnant wife, actress Sharon Tate, was murdered with four friends by members of the Manson Family.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Roman_Polanski"
            },
            "Q515869": {
                "name": "Lionsgate",
                "wikidata_aliases": [
                    "Lions Gate Entertainment Corporation"
                ],
                "wikidata_summary": "Canadian-American entertainment company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q515869",
                "wikipedia_summary": "Lions Gate Entertainment Corporation, doing business as Lionsgate, is a Canadian-American global mass media and entertainment company. Originally a Canadian company, it was formed by Frank Giustra on July 10, 1997, domiciled in Vancouver, British Columbia, and is currently headquartered in Santa Monica, California. In addition to its flagship Lionsgate Films division, its other divisions include Lionsgate Television and Lionsgate Interactive. It owns a variety of subsidiaries such as 3 Arts Entertainment, Pilgrim Media Group, Starz Inc., and Entertainment One (including a minority stake in Amblin Partners).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lionsgate"
            },
            "Q52139": {
                "name": "Climatology",
                "wikidata_aliases": [
                    "climate research",
                    "climate science"
                ],
                "wikidata_summary": "study of climate",
                "wikidata_url": "https://www.wikidata.org/wiki/Q52139",
                "wikipedia_summary": "Climatology (from Greek κλίμα, klima, 'slope'; and -λογία, -logia) or climate science is the scientific study of Earth's climate, typically defined as weather conditions averaged over a period of at least 30 years. Climate concerns the atmospheric condition during an extended to indefinite period of time; weather is the condition of the atmosphere during a relative brief period of time. The main topics of research are the study of climate variability, mechanisms of climate changes and modern climate change. This topic of study is regarded as part of the atmospheric sciences and a subdivision of physical geography, which is one of the Earth sciences. Climatology includes some aspects of oceanography and biogeochemistry.\nThe main methods employed by climatologists are the analysis of observations and modelling of the physical processes that determine climate. Short term weather forecasting can be interpreted in terms of knowledge of longer-term phenomena of climate, for instance climatic cycles such as the El Niño–Southern Oscillation (ENSO), the Madden–Julian oscillation (MJO), the North Atlantic oscillation (NAO), the Arctic oscillation (AO), the Pacific decadal oscillation (PDO), and the Interdecadal Pacific Oscillation (IPO). Climate models are used for a variety of purposes from studying the dynamics of the weather and climate system to predictions of future climate.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Climatology"
            },
            "Q52631": {
                "name": "Ibiza",
                "wikidata_aliases": [
                    "Iviza",
                    "Eivissa"
                ],
                "wikidata_summary": "island in the Balearic Islands, Spain",
                "wikidata_url": "https://www.wikidata.org/wiki/Q52631",
                "wikipedia_summary": "Ibiza (Spanish: [iˈβiθa]; Catalan: Eivissa, locally [əjˈvisə]; see below) is a Spanish island in the Mediterranean Sea off the eastern coast of the Iberian Peninsula. It is 150 kilometres (93 miles) from the city of Valencia. It is the third largest of the Balearic Islands in area, but the second-largest by population. Its largest settlements are Ibiza Town (Catalan: Vila d'Eivissa, or simply Vila), Santa Eulària des Riu, and Sant Antoni de Portmany. Its highest point, called Sa Talaiassa (or Sa Talaia), is 475 metres (1,558 feet) above sea level.\nIbiza is well known for its nightlife and electronic dance music club scene in  the summer, which attract large numbers of tourists. The island's government and the Spanish Tourist Office have worked toward promoting more family-oriented tourism.\nIbiza is a UNESCO World Heritage Site. Ibiza and the nearby island of Formentera to its south are called the Pine Islands, or 'Pityuses'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Ibiza"
            },
            "Q5350072": {
                "name": "Jean Grey",
                "wikidata_aliases": [
                    "Marvel Girl",
                    "Jean Elaine Grises Summers",
                    "Jean Elaine Gray",
                    "Fenix",
                    "Jean Grey-Summers",
                    "Dark Fenix"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5350072",
                "wikipedia_summary": "Jean Elaine Grey is a character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist/co-plotter Jack Kirby, the character first appeared in The X-Men #1 (September 1963). Jean Grey is a member of a subspecies of humans known as mutants who are born with superhuman abilities. She was born with psionic powers. The character has also been known as Marvel Girl, Phoenix, and Dark Phoenix at various points in her history.\nHer powers first manifested when she saw her childhood friend being hit by a car. She is a caring, nurturing figure, but she also has to deal with being an Omega-level mutant and the physical manifestation of the cosmic Phoenix Force. Jean experienced a transformation into the Phoenix in the X-Men storyline 'The Dark Phoenix Saga'. She has faced death numerous times in the history of the series. Her first death was under her guise as Marvel Girl, when she died and was 'reborn' as Phoenix in 'The Dark Phoenix Saga'. This transformation led to her second death, which was suicide, though not her last. She is also an important figure in the lives of other Marvel Universe characters, mostly the X-Men, including her husband Cyclops, her mentor and father figure Charles Xavier, her other love interest Wolverine, her best friend and sister-like figure Storm, and her genetic children Rachel Summers, Cable, Stryfe, and X-Man. Jean's connection to the Phoenix has often resulted in clashes with the Shi'ar Empire, responsible for the massacre of most of her family members.\nOften listed as one of the most notable and powerful female characters in Marvel Comics, the character has been featured in various other Marvel-licensed products, including video games, animated television series, and merchandise. Famke Janssen portrayed the character as an adult in the 20th Century Fox X-Men films while Sophie Turner portrayed her as a teenager and young adult.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Jean_Grey"
            },
            "Q536588": {
                "name": "Capleton",
                "wikidata_aliases": [
                    "Clifton George Bailey III",
                    "King Shango",
                    "The Fireman",
                    "The Prophet",
                    "King David"
                ],
                "wikidata_summary": "Jamaican reggae and dancehall artist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q536588",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q537911": {
                "name": "Agents of S.H.I.E.L.D.",
                "wikidata_aliases": [
                    "Marvel's Agents of S.H.I.E.L.D.",
                    "Agents of SHIELD",
                    "Marvel's Agents of SHIELD"
                ],
                "wikidata_summary": "American television series (2013-2020)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q537911",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q54958752": {
                "name": "Disney+",
                "wikidata_aliases": [],
                "wikidata_summary": "American video streaming service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q54958752",
                "wikipedia_summary": "Disney+ is an American subscription video on-demand over-the-top streaming media service owned and operated by Disney Streaming, the streaming division of Disney Entertainment, a major business segment of the Walt Disney Company. The service primarily distributes films and television shows produced by Walt Disney Studios and Disney Television Studios, with dedicated content hubs for Disney's flagship brands; Disney, Pixar, Marvel, Star Wars, National Geographic, Star (international only) and Hulu (US only), as well as showcasing original and exclusive films and television shows.\nDisney+ relies on technology developed by Disney Streaming, which was originally established as BAMTech in 2015 when it was spun off from MLB Advanced Media (MLBAM). Disney increased its ownership share of BAMTech to a controlling stake in 2017 and subsequently transferred ownership to Walt Disney Direct-to-Consumer & International, as part of a corporate restructuring in anticipation of Disney's acquisition of 21st Century Fox, through which the Star brand was inherited and got retooled as a content platform within the service in some regions, with Latin America having its own standalone service, Star+.\nWith BAMTech helping to launch ESPN+ in early 2018, and Disney's streaming distribution deal with Netflix ending in 2019, Disney took the opportunity to use technologies being developed for ESPN+ to establish a Disney-branded streaming service that would feature its content. Production of films and television shows for exclusive release on the platform began in late 2017.\nDisney+ was launched on November 12, 2019, in the United States, Canada, and the Netherlands, and expanded to Australia, New Zealand, and Puerto Rico a week later. It became available in select European countries in March 2020 and in India in April through Star India's Hotstar streaming service, which was rebranded as Disney+ Hotstar. Additional European countries received Disney+ in September 2020, with the service expanding to Latin America in November 2020. It later expanded in Southeast Asian countries since 2021, followed by countries in Northern and Eastern Europe, Middle East, and parts of Africa since May 2022.\nUpon launch, it was met with positive reception of its content library, but was criticized for technical problems and missing content. Alterations made to films and television shows also attracted media attention. Ten million users had subscribed to Disney+ by the end of its first day of operation.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Disney%2B"
            },
            "Q55623853": {
                "name": "Mosa Meat",
                "wikidata_aliases": [],
                "wikidata_summary": "Dutch food technology company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q55623853",
                "wikipedia_summary": "Mosa Meat is a Dutch food technology company, headquartered in Maastricht, Netherlands, creating production methods for cultured meat. It was founded in May 2016.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Mosa_Meat"
            },
            "Q561387": {
                "name": "Francis Lawrence",
                "wikidata_aliases": [],
                "wikidata_summary": "American music video, film and television director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q561387",
                "wikipedia_summary": "Francis Lawrence (born March 26, 1971) is an American filmmaker and producer. After establishing himself as a director of music videos and commercials, Lawrence made his feature-length directorial debut with the superhero thriller Constantine (2005) and has since directed the post-apocalyptic horror film I Am Legend (2007), the romantic drama Water for Elephants (2011), four of the five films in The Hunger Games film series, and the spy thriller Red Sparrow (2018).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Francis_Lawrence"
            },
            "Q56297455": {
                "name": "self doubt",
                "wikidata_aliases": [],
                "wikidata_summary": "når man tviler på seg selv",
                "wikidata_url": "https://www.wikidata.org/wiki/Q56297455",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q57055076": {
                "name": "short term",
                "wikidata_aliases": [
                    "short",
                    "quick"
                ],
                "wikidata_summary": "criterion used to describe something that is true in a short period of time",
                "wikidata_url": "https://www.wikidata.org/wiki/Q57055076",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q571": {
                "name": "Book",
                "wikidata_aliases": [
                    "books"
                ],
                "wikidata_summary": "medium for recording information (words or images) typically on bound pages or more abstractly in electronic or audio form",
                "wikidata_url": "https://www.wikidata.org/wiki/Q571",
                "wikipedia_summary": "A book is a medium for recording information in the form of writing or images. Books are typically composed of many pages, bound together and protected by a cover. Modern bound books were preceded by many other written mediums, such as the codex and the scroll. The book publishing process is the series of steps involved in their creation and dissemination.\nAs a conceptual object, a book typically refers to a written work of substantial length, which may be distributed either physically or in digital forms like ebooks. These works are broadly classified into fiction (containing imaginary content) and non-fiction (containing content representing truths). Many smaller categories exist within these, such as children's literature meant to match the reading level and interests of children, or reference works that gather collections of non-fiction. Books are traded at both regular stores and specialized bookstores, and people can borrow them from libraries. The reception of books has led to a number of social consequences, including censorship.\nA physical book does not need to contain written works: for example, it may contain only drawings, engravings, photographs, puzzles, or removable content like paper dolls. Physical books may be left empty to be used for writing or drawing, such as account books, appointment books, autograph books, notebooks, diaries and sketchbooks.\nThe contemporary book industry has seen several major changes due to new technologies. In some markets, the sale of printed books has decreased due to the increased use of eBooks. However, printed books still largely outsell eBooks, and many people have a preference for print. The 21st century has also seen a rapid rise in the popularity of audiobooks, which are recordings of books being read aloud. Additionally, awareness of the needs of people who can't access print media due to limitations like visual impairment has led to a rise in formats designed for greater accessibility, such as braille printing or formats supporting text-to-voice. Google Books estimated that as of 2010, approximately 130,000,000 unique books had been published.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Book"
            },
            "Q57147": {
                "name": "Michael Fassbender",
                "wikidata_aliases": [
                    "Fassy"
                ],
                "wikidata_summary": "Irish-German actor (born 1979)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q57147",
                "wikipedia_summary": "Michael Fassbender (born 2 April 1977) is an actor. He is the recipient of various accolades, including nominations for two Academy Awards, four BAFTA Awards and three Golden Globe Awards. In 2020, he was listed at number nine on The Irish Times list of Ireland's greatest film actors.\nBorn in what was then West Germany to a mother from Northern Ireland and a German father, Fassbender relocated to Ireland at age two. He made his feature film debut in 300 (2006). Early roles include in the HBO miniseries Band of Brothers (2001) and the Sky One fantasy drama Hex (2004–2005). Fassbender first came to prominence playing Bobby Sands in Hunger (2008), for which he won a British Independent Film Award. Subsequent roles include in Fish Tank (2009), Inglourious Basterds (2009), Jane Eyre (2011) and A Dangerous Method (2011). He gained mainstream success for playing Erik Lehnsherr / Magneto in X-Men: First Class (2011), X-Men: Days of Future Past (2014) and X-Men: Apocalypse (2016), and David 8 and Walter One in Prometheus (2012), and its sequel, Alien: Covenant (2017).\nFor his portrayal of a sex addict in Steve McQueen's drama Shame (2011), Fassbender won the Volpi Cup for Best Actor and was nominated for Golden Globe and BAFTA Award. His performance as Edwin Epps in 12 Years a Slave (2013) earned him a nomination for the Academy Award for Best Supporting Actor. He also starred in The Counselor (2013), Frank (2014), Macbeth (2015) and Steve Jobs (2015). Fassbender received another Academy Award nomination for his portrayal of the title role in the latter. After a hiatus, he starred in the action thriller film The Killer (2023).\nFassbender began competing in auto racing in 2017 with the Ferrari Challenge. As of 2023, he races in the European Le Mans Series, driving for Proton Competition. He married Swedish actress Alicia Vikander in 2017.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Michael_Fassbender"
            },
            "Q57317071": {
                "name": "Earth-10005",
                "wikidata_aliases": [
                    "Original X-Men Cinematic Universe"
                ],
                "wikidata_summary": "fictional universe for the X-Men films",
                "wikidata_url": "https://www.wikidata.org/wiki/Q57317071",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q57422304": {
                "name": "Insecurities about crime in Germany, Austria and Switzerland: A review of research findings",
                "wikidata_aliases": [],
                "wikidata_summary": "article",
                "wikidata_url": "https://www.wikidata.org/wiki/Q57422304",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q5775696": {
                "name": "District 12",
                "wikidata_aliases": [
                    "District 12, Tehran",
                    "District 12 (Tehran)"
                ],
                "wikidata_summary": "district in Tehran, Iran",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5775696",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q5870724": {
                "name": "history of the X-Men comics",
                "wikidata_aliases": [
                    "the X-Men comics history",
                    "X-Men comics history"
                ],
                "wikidata_summary": "",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5870724",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q587465": {
                "name": "28",
                "wikidata_aliases": [
                    "twenty eight",
                    "twenty-eight",
                    "28*1",
                    "1*28",
                    "number 28",
                    "㉘"
                ],
                "wikidata_summary": "natural number",
                "wikidata_url": "https://www.wikidata.org/wiki/Q587465",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q59248250": {
                "name": "Hunter Schafer",
                "wikidata_aliases": [],
                "wikidata_summary": "American fashion model, actress, artist, and LGBT rights activist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q59248250",
                "wikipedia_summary": "Hunter Schafer (born December 31, 1998) is an American actress and model. She is mainly known for her role as transgender high school student Jules Vaughn in the HBO teen drama television series Euphoria (2019–present). \nSchafer first made headlines in 2016 with her activism against the North Carolina bill HB2. In 2017, she started modeling for many worldwide fashion brands. After making her acting debut in Euphoria, she had roles in Belle (2022), The Hunger Games: The Ballad of Songbirds & Snakes (2023), and Cuckoo (2024).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hunter_Schafer"
            },
            "Q5969535": {
                "name": "ICESat-2",
                "wikidata_aliases": [
                    "Ice, Cloud, and Land Elevation Satellite-2"
                ],
                "wikidata_summary": "satellite in NASA's Earth Observing System",
                "wikidata_url": "https://www.wikidata.org/wiki/Q5969535",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q59942": {
                "name": "Launch and Landing Facility",
                "wikidata_aliases": [
                    "LLF",
                    "SLF",
                    "NASA Shuttle Landing Facility",
                    "QQS",
                    "KTTS",
                    "Shuttle Landing Facility"
                ],
                "wikidata_summary": "airport at Kennedy Space Center in Florida, USA",
                "wikidata_url": "https://www.wikidata.org/wiki/Q59942",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60": {
                "name": "New York City",
                "wikidata_aliases": [
                    "NYC",
                    "the five boroughs",
                    "Big Apple",
                    "City of New York",
                    "NY City",
                    "New York, New York",
                    "New York City, New York",
                    "New York, NY",
                    "New York City, NY",
                    "Caput Mundi",
                    "The City So Nice They Named It Twice",
                    "Capital of the World",
                    "New York",
                    "New York City (NYC)",
                    "New York (city)",
                    "city of New York",
                    "Center of the Universe",
                    "New York City, USA",
                    "N.Y.C.",
                    "UN/LOCODE:USNYC",
                    "New York City, United States of America",
                    "New York, New York, USA",
                    "New York (NY)",
                    "New York, N.Y.",
                    "NY, NY",
                    "N. Y. C.",
                    "New York City, United States",
                    "N. Y., N. Y.",
                    "New York City, New York, United States"
                ],
                "wikidata_summary": "most populous city in the United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60002": {
                "name": "Colossus",
                "wikidata_aliases": [
                    "Peter Rasputin",
                    "Piotr Nikolayevich Rasputin",
                    "Piotr Rasputin"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60002",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q60349": {
                "name": "The Dark Phoenix Saga",
                "wikidata_aliases": [],
                "wikidata_summary": "Marvel Comics X-Men storyline",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60349",
                "wikipedia_summary": "'The Dark Phoenix Saga' is an extended X-Men comic-book storyline published by Marvel Comics. Created by writer Chris Claremont and artist John Byrne, the storyline first appeared in X-Men #129 (January 1980). It focuses on the superhero Jean Grey and the cosmic entity Phoenix Force. The storyline commonly refers to the story in Uncanny X-Men #129–138 (January – October 1980) of Jean Grey's corruption by the power of the Phoenix and the Hellfire Club, the destruction she causes, and ultimately her death. Sometimes included is Jean Grey's assumption of the Phoenix power and the repair of the M'Kraan Crystal in Uncanny X-Men #101–108 (October 1976 – December 1977).\n'The Dark Phoenix Saga' is one of the most well-known and heavily referenced stories in mainstream American superhero comics, and is widely considered to be a classic storyline by critics. Many of its characters that debuted in this story arc such as Kitty Pryde, Dazzler, and Emma Frost would later go on to become one of the most popular comic book characters of all time. \nSince its introduction in comics, the storyline has been featured in various other Marvel-licensed products. It was adapted for the X-Men: The Animated Series (1992). It was later alluded to in the live-action film X2: X-Men United (2003). The live-action film X-Men: The Last Stand (2006) contains some elements from the saga. The animated series Wolverine and the X-Men (2009) adapted 'The Dark Phoenix Saga' at the end of its first season, though it changed many elements of the story. Had there been a fifth season of the animated series X-Men: Evolution (2000), its own version of the four-part Dark Phoenix would have been adapted. The live-action X-Men film Dark Phoenix (2019) is an adaptation of the Hellfire arc of the story.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Dark_Phoenix_Saga"
            },
            "Q60933643": {
                "name": "Climate crisis",
                "wikidata_aliases": [],
                "wikidata_summary": "crisis due to climate change",
                "wikidata_url": "https://www.wikidata.org/wiki/Q60933643",
                "wikipedia_summary": "Climate crisis is a term describing global warming and climate change, and their impacts. This term and the term climate emergency have been used to describe the threat of global warming to humanity and the planet, and to urge aggressive climate change mitigation and 'transformational' adaptation. In the scientific journal BioScience, a January 2020 article, endorsed by over 11,000 scientists worldwide, stated that 'the climate crisis has arrived' and that an 'immense increase of scale in endeavors to conserve our biosphere is needed to avoid untold suffering due to the climate crisis.'\nThe term is applied by those who 'believe it evokes the gravity of the threats the planet faces from continued greenhouse gas emissions and can help spur the kind of political willpower that has long been missing from climate advocacy'. They believe that, much as global warming drew out more emotional engagement and support for action than climate change, calling climate change a crisis could have an even stronger impact.\nA study has shown that the term invokes a strong emotional response in conveying a sense of urgency; some caution that this response may be counter-productive, and may cause a backlash effect due to perceptions of alarmist exaggeration.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Climate_crisis"
            },
            "Q613067": {
                "name": "Namor",
                "wikidata_aliases": [
                    "The Sub-Mariner",
                    "Namor McKenzie",
                    "Namor, the Sub-Mariner",
                    "Namor the Sub-Mariner"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q613067",
                "wikipedia_summary": "Namor McKenzie (), also known as Namor the Sub-Mariner, or simply Namor, is a character appearing in American comic books published by Marvel Comics. Created by writer-artist Bill Everett for comic book packager Funnies Inc., the character first appeared in Motion Picture Funnies Weekly #1 (uncirculated). Namor first appeared publicly in Marvel Comics #1 (cover-dated October 1939). It was the first comic book from Timely Comics, the 1930s–1940s predecessor of Marvel Comics. During that period, known to historians and fans as the Golden Age of Comic Books, the Sub-Mariner was one of Timely's top three characters, along with Captain America and the original Human Torch. Moreover, Namor has also been described as the first comic book antihero.\nThe mutant son of a human sea captain and a princess of the mythical undersea kingdom of Atlantis, Namor possesses the superstrength and aquatic abilities of the Homo mermanus race, as well as the mutant ability of flight, along with other superhuman powers. Throughought the years he has been portrayed as an antihero, alternating between a good-natured but short-fused superhero, and a hostile invader seeking vengeance for perceived wrongs that misguided surface-dwellers committed against his kingdom. A historically important and relatively popular Marvel character, Namor has served directly with the Avengers, the Fantastic Four, the Invaders, the Defenders, the X-Men and the Illuminati as well as serving as a foil to them on occasion.\nTenoch Huerta Mejía portrays Namor in his live-action debut in the Marvel Cinematic Universe film Black Panther: Wakanda Forever (2022).",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Namor"
            },
            "Q61693947": {
                "name": "Rachel Zegler",
                "wikidata_aliases": [],
                "wikidata_summary": "American actress (born 2001)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q61693947",
                "wikipedia_summary": "Rachel Zegler (; born May 3, 2001) is an American actress and singer. She came to prominence with her film debut playing María in Steven Spielberg's musical adaptation West Side Story (2021), for which she won the Golden Globe Award for Best Actress – Motion Picture Comedy or Musical. In 2023, she played Anthea in Shazam! Fury of the Gods and Lucy Gray Baird in The Hunger Games: The Ballad of Songbirds & Snakes.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Rachel_Zegler"
            },
            "Q6279": {
                "name": "Joe Biden",
                "wikidata_aliases": [
                    "Joseph Biden",
                    "Joseph R. Biden",
                    "Joseph R. Biden Jr.",
                    "Joseph R. Biden, Jr.",
                    "Biden",
                    "JRB",
                    "POTUS 46",
                    "Joe R. Biden Jr.",
                    "Joseph Robinette Biden",
                    "President Biden",
                    "President Joe Biden",
                    "President Joseph Biden",
                    "President Joseph R. Biden",
                    "Joseph Robinette Biden Jr.",
                    "President Joseph Biden Jr.",
                    "President Joseph Robinette Biden",
                    "President Joseph R. Biden Jr.",
                    "Joe R. Biden",
                    "President Joseph Robinette Biden Jr.",
                    "Joe Biden Jr."
                ],
                "wikidata_summary": "President of the United States since 2021",
                "wikidata_url": "https://www.wikidata.org/wiki/Q6279",
                "wikipedia_summary": "Joseph Robinette Biden Jr. ( , BY-dən; born November 20, 1942) is an American politician who is the 46th and current president of the United States since 2021. A member of the Democratic Party, he previously served as the 47th vice president from 2009 to 2017 under President Barack Obama and represented Delaware in the United States Senate from 1973 to 2009.\nBorn in Scranton, Pennsylvania, Biden moved with his family to Delaware in 1953. He graduated from the University of Delaware before earning his law degree from Syracuse University. He was elected to the New Castle County Council in 1970 and to the U.S. Senate in 1972. As a senator, Biden drafted and led the effort to pass the Violent Crime Control and Law Enforcement Act and the Violence Against Women Act. He also oversaw six U.S. Supreme Court confirmation hearings, including the contentious hearings for Robert Bork and Clarence Thomas. Biden ran unsuccessfully for the Democratic presidential nomination in 1988 and 2008. In 2008, Obama chose Biden as his running mate, and he was a close counselor to Obama during his two terms as vice president. In the 2020 presidential election, Biden and his running mate, Kamala Harris, defeated incumbents Donald Trump and Mike Pence. He is the oldest president in U.S. history, and the first to have a female vice president.\nAs president, Biden signed the American Rescue Plan Act in response to the COVID-19 pandemic and subsequent recession. He signed bipartisan bills on infrastructure and manufacturing. He proposed the Build Back Better Act, which failed in Congress, but aspects of which were incorporated into the Inflation Reduction Act that he signed into law in 2022. Biden appointed Ketanji Brown Jackson to the Supreme Court. He worked with congressional Republicans to resolve the 2023 United States debt-ceiling crisis by negotiating a deal to raise the debt ceiling. In foreign policy, Biden restored America's membership in the Paris Agreement. He oversaw the complete withdrawal of U.S. troops from Afghanistan that ended the war in Afghanistan, during which the Afghan government collapsed and the Taliban seized control. He responded to the Russian invasion of Ukraine by imposing sanctions on Russia and authorizing civilian and military aid to Ukraine. During the Israel–Hamas war, Biden condemned the actions of Hamas and other Palestinian militants as terrorism, announced military support for Israel, and ordered the U.S. military to build a port to facilitate the delivery of humanitarian aid to Palestinian civilians in Gaza. In April 2023, Biden announced his candidacy for the Democratic nomination in the 2024 presidential election.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Joe_Biden"
            },
            "Q631369": {
                "name": "Chris Claremont",
                "wikidata_aliases": [],
                "wikidata_summary": "American comic book writer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q631369",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q63243883": {
                "name": "Olivia Rodrigo",
                "wikidata_aliases": [
                    "Olivia Isabel Rodrigo"
                ],
                "wikidata_summary": "American singer and actress (born 2003)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q63243883",
                "wikipedia_summary": "Olivia Isabel Rodrigo (born February 20, 2003) is an American singer-songwriter and actress. She first rose to prominence for starring on the Disney Channel series Bizaardvark (2016–2019) and the Disney+ series High School Musical: The Musical: The Series (2019–2022).\nRodrigo signed with Geffen Records in 2021, releasing the international chart-topping single 'Drivers License' which helped raise Rodrigo to prominence. Her debut studio album Sour was released that same year, and won her three Grammy Awards among other accolades. A Disney+ documentary, Olivia Rodrigo: Driving Home 2 U, followed in 2022, chronicling her creative process with Sour. The following year, Rodrigo released her second studio album, Guts, which was a critical and commercial success.\nOverall, Rodrigo has achieved three Billboard Hot 100 number-one singles, two Billboard 200 number-one albums, and five multi-platinum certifications by the Recording Industry Association of America (RIAA). Her other accolades include an American Music Award, seven Billboard Music Awards, and four MTV Video Music Awards. Time named her the 2021 Entertainer of the Year and Billboard named her Woman of the Year in 2022.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Olivia_Rodrigo"
            },
            "Q64": {
                "name": "Berlin",
                "wikidata_aliases": [
                    "Berlin, Germany",
                    "Berlin (Germany)",
                    "DE-BE"
                ],
                "wikidata_summary": "federated state, capital and largest city of Germany",
                "wikidata_url": "https://www.wikidata.org/wiki/Q64",
                "wikipedia_summary": "Berlin is the capital and largest city of Germany, both by area and by population. Its more than 3.85 million inhabitants make it the European Union's most populous city, as measured by population within city limits. Simultaneously, the city is one of the states of Germany and is the third smallest state in the country in terms of area. Berlin is surrounded by the state of Brandenburg, and Brandenburg's capital Potsdam is nearby. The urban area of Berlin has a population of over 4.5 million and is therefore the most populous urban area in Germany. The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany's second-largest metropolitan region after the Rhine-Ruhr region, and the fifth-biggest metropolitan region by GDP in the European Union.\nBerlin was built along the banks of the Spree river, which flows into the Havel in the western borough of Spandau. The city incorporates lakes in the western and southeastern boroughs, the largest of which is Müggelsee. About one-third of the city's area is composed of forests, parks and gardens, rivers, canals, and lakes.\nFirst documented in the 13th century and at the crossing of two important historic trade routes, Berlin was designated the capital of the Margraviate of Brandenburg (1417–1701), Kingdom of Prussia (1701–1918), German Empire (1871–1918), Weimar Republic (1919–1933), and Nazi Germany (1933–1945). Berlin has served as a scientific, artistic, and philosophical hub during the Age of Enlightenment, Neoclassicism, and the German revolutions of 1848–1849. During the Gründerzeit, an industrialization-induced economic boom triggered a rapid population increase in Berlin. 1920s Berlin was the third-largest city in the world by population.\nAfter World War II and following Berlin's occupation, the city was split into West Berlin and East Berlin, divided by the Berlin Wall. East Berlin was declared the capital of East Germany, while Bonn became the West German capital. Following German reunification in 1990, Berlin once again became the capital of all of Germany.\nThe economy of Berlin is based on high tech and the service sector, encompassing a diverse range of creative industries, startup companies, research facilities, and media corporations. Berlin serves as a continental hub for air and rail traffic and has a complex public transportation network. Tourism in Berlin make the city a popular global destination. Significant industries include information technology, the healthcare industry, biomedical engineering, biotechnology, the automotive industry, and electronics.\nBerlin is home to several universities such as the Humboldt University of Berlin, the Technical University of Berlin, the Berlin University of the Arts and the Free University of Berlin. The Berlin Zoological Garden is the most visited zoo in Europe. Babelsberg Studio is the world's first large-scale movie studio complex and the list of films set in Berlin is long.\nBerlin is also home to three World Heritage Sites. Museum Island, the Palaces and Parks of Potsdam and Berlin, and the Berlin Modernism Housing Estates. Other landmarks include the Brandenburg Gate, the Reichstag building, Potsdamer Platz, the Memorial to the Murdered Jews of Europe, and the Berlin Wall Memorial. Berlin has numerous museums, galleries, and libraries.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Berlin"
            },
            "Q64009874": {
                "name": "Lucy Gray",
                "wikidata_aliases": [],
                "wikidata_summary": "New Zealand climate-crisis activist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q64009874",
                "wikipedia_summary": "'Lucy Gray' is a poem written by William Wordsworth in 1799 and published in his Lyrical Ballads. It describes the death of a young girl named Lucy Gray, who went out one evening into a storm.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lucy_Gray"
            },
            "Q642878": {
                "name": "Marvel Cinematic Universe",
                "wikidata_aliases": [
                    "Marvel",
                    "Earth-199999",
                    "MCU"
                ],
                "wikidata_summary": "shared fictional universe",
                "wikidata_url": "https://www.wikidata.org/wiki/Q642878",
                "wikipedia_summary": "The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.\nMarvel Studios releases its films in groups called 'Phases', with the first three phases collectively known as 'The Infinity Saga' and the following three phases as 'The Multiverse Saga'. The first MCU film, Iron Man (2008), began Phase One, which culminated in the 2012 crossover film The Avengers. Phase Two began with Iron Man 3 (2013) and concluded with Ant-Man (2015). Phase Three began with Captain America: Civil War (2016) and concluded with Spider-Man: Far From Home (2019). Phase Four began with Black Widow (2021) and concluded with Black Panther: Wakanda Forever (2022). Ant-Man and the Wasp: Quantumania (2023) began Phase Five, which will end with Thunderbolts* (2025), and Phase Six will begin with The Fantastic Four (2025). Phase Six and 'The Multiverse Saga' will conclude with Avengers 5 (2026) and Avengers: Secret Wars (2027).\nMarvel Television expanded the universe to network television with Agents of S.H.I.E.L.D. on ABC in 2013 before further expanding to streaming television on Netflix and Hulu and to cable television on Freeform. They also produced the digital series Agents of S.H.I.E.L.D.: Slingshot. Marvel Studios began producing their own television series for streaming on Disney+, starting with WandaVision in 2021 as the beginning of Phase Four. They also expanded to television specials in Phase Four, known as Marvel Studios Special Presentations, the first of which was Werewolf by Night (2022). The MCU also includes tie-in comics published by Marvel Comics, a series of direct-to-video short films called Marvel One-Shots, and viral marketing campaigns for the films featuring the faux news programs WHIH Newsfront and The Daily Bugle.\nThe franchise has been commercially successful, becoming one of the highest-grossing media franchises of all time, and it has received generally positive reviews from critics. It has inspired other film and television studios to attempt similar shared universes and has also inspired several themed attractions, an art exhibit, television specials, literary material, multiple tie-in video games, and commercials.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe"
            },
            "Q6498903": {
                "name": "Supervillain",
                "wikidata_aliases": [
                    "supervillainess",
                    "super-villain",
                    "super villain"
                ],
                "wikidata_summary": "variant of the villain character type, sometimes possessing 'supernatural or superhuman powers'",
                "wikidata_url": "https://www.wikidata.org/wiki/Q6498903",
                "wikipedia_summary": "A supervillain or supercriminal is a variant of the villainous stock character. It is sometimes found in comic books, and may possess superhuman abilities. A supervillain is the antithesis of a superhero.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Supervillain"
            },
            "Q65": {
                "name": "Los Angeles",
                "wikidata_aliases": [
                    "Los Angeles, California",
                    "Pink City",
                    "The town of Our Lady the Queen of the Angels of the Little Portion",
                    "La La Land",
                    "Tinsel Town",
                    "City of Angels",
                    "City of Los Angeles",
                    "LA, California",
                    "L.A.",
                    "LA",
                    "Double Dubuque",
                    "Los Ángeles",
                    "Los Angeles, CA",
                    "L.A"
                ],
                "wikidata_summary": "largest city in California, United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q65",
                "wikipedia_summary": "Los Angeles, often referred to by its initials L.A., is the most populous city in the U.S. state of California. With roughly 3.9 million residents within the city limits as of 2020, Los Angeles is the second-most populous city in the United States, behind only New York City; it is also the commercial, financial and cultural center of Southern California. Los Angeles has an ethnically and culturally diverse population, and is the principal city of a metropolitan area of 13.2 million people. Greater Los Angeles, which includes the Los Angeles and Riverside–San Bernardino metropolitan areas, is a sprawling metropolis of over 18 million residents.\nThe majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2), and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022. It is the fourth-most visited city in the U.S. with over 2.7 million visitors as of 2022.\nThe area that became Los Angeles was originally inhabited by the indigenous Tongva people and later claimed by Juan Rodríguez Cabrillo for Spain in 1542. The city was founded on September 4, 1781, under Spanish governor Felipe de Neve, on the village of Yaanga. It became a part of Mexico in 1821 following the Mexican War of Independence. In 1848, at the end of the Mexican–American War, Los Angeles and the rest of California were purchased as part of the Treaty of Guadalupe Hidalgo and became part of the United States. Los Angeles was incorporated as a municipality on April 4, 1850, five months before California achieved statehood. The discovery of oil in the 1890s brought rapid growth to the city. The city was further expanded with the completion of the Los Angeles Aqueduct in 1913, which delivers water from Eastern California.\nLos Angeles has a diverse economy with a broad range of industries. Los Angeles is best known as the home of the Hollywood film industry, the world's largest by revenue; the city was an important site in the history of film. It also has one of the busiest container ports in the Americas. In 2018, the Los Angeles metropolitan area had a gross metropolitan product of over $1.0 trillion, making it the city with the third-largest GDP in the world, after New York and Tokyo. Los Angeles hosted the Summer Olympics in 1932 and 1984, and will also host in 2028. Despite a business exodus from Downtown Los Angeles since the COVID-19 pandemic, the city's urban core is evolving as a cultural center with the world's largest showcase of architecture designed by Frank Gehry. More recently, statewide droughts in California have strained both the city's and Los Angeles County's water security.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Los_Angeles"
            },
            "Q65833974": {
                "name": "Nicky Drayden",
                "wikidata_aliases": [],
                "wikidata_summary": "Amerikaans informatieanalist",
                "wikidata_url": "https://www.wikidata.org/wiki/Q65833974",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q66316924": {
                "name": "Killers of the Flower Moon",
                "wikidata_aliases": [],
                "wikidata_summary": "2023 film directed by Martin Scorsese",
                "wikidata_url": "https://www.wikidata.org/wiki/Q66316924",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q66474024": {
                "name": "Part Two",
                "wikidata_aliases": [],
                "wikidata_summary": "episode of When They See Us (S01 E02)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q66474024",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q66474025": {
                "name": "Part Three",
                "wikidata_aliases": [],
                "wikidata_summary": "episode of When They See Us (S01 E03)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q66474025",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q668": {
                "name": "India",
                "wikidata_aliases": [
                    "Republic of India",
                    "Bharat",
                    "Bharatvarsh",
                    "Hindustan",
                    "IN",
                    "IND",
                    "🇮🇳",
                    "Bharata",
                    "Hindoostan",
                    "Indostan",
                    "Bharat Ganarajya"
                ],
                "wikidata_summary": "country in South Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q668",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q678345": {
                "name": "Prequel",
                "wikidata_aliases": [],
                "wikidata_summary": "literary, dramatic, or filmic work whose story precedes that of a previous work",
                "wikidata_url": "https://www.wikidata.org/wiki/Q678345",
                "wikipedia_summary": "A prequel is a literary, dramatic or cinematic work whose story precedes that of a previous work, by focusing on events that occur before the original narrative. A prequel is a work that forms part of a backstory to the preceding work.\nThe term 'prequel' is a 20th-century neologism from the prefix 'pre-' (from Latin prae, 'before') and 'sequel'.\nLike sequels, prequels may or may not concern the same plot as the work from which they are derived. More often they explain the background that led to the events in the original, but sometimes the connections are not completely explicit. Sometimes prequels play on the audience's knowledge of what will happen next, using deliberate references to create dramatic irony.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Prequel"
            },
            "Q692": {
                "name": "William Shakespeare",
                "wikidata_aliases": [
                    "Shakespeare",
                    "The Bard",
                    "The Bard of Avon",
                    "William Shakspere",
                    "Swan of Avon",
                    "Bard of Avon",
                    "Shakespere",
                    "Shakespear",
                    "Shakspeare",
                    "Shackspeare",
                    "Shakspere",
                    "William Shakspeare",
                    "William Shake‐speare",
                    "William Shakespeare"
                ],
                "wikidata_summary": "English playwright and poet (1564–1616)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q692",
                "wikipedia_summary": "William Shakespeare (c. 23 April 1564 – 23 April 1616) was an English playwright, poet, and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the 'Bard of Avon' (or simply 'the Bard'). His extant works, including collaborations, consist of some 39 plays, 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright. Shakespeare remains arguably the most influential writer in the English language, and his works continue to be studied and reinterpreted.\nShakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna, and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner ('sharer') of a playing company called the Lord Chamberlain's Men, later known as the King's Men after the ascension of King James VI of Scotland to the English throne. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeare's private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs, and even certain fringe theories as to whether the works attributed to him were written by others.\nShakespeare produced most of his known works between 1589 and 1613. His early plays were primarily comedies and histories and are regarded as some of the best works produced in these genres. He then wrote mainly tragedies until 1608, among them Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth, all considered to be among the finest works in the English language. In the last phase of his life, he wrote tragicomedies (also known as romances) and collaborated with other playwrights.\nMany of Shakespeare's plays were published in editions of varying quality and accuracy during his lifetime. However, in 1623, John Heminges and Henry Condell, two fellow actors and friends of Shakespeare's, published a more definitive text known as the First Folio, a posthumous collected edition of Shakespeare's dramatic works that includes 36 of his plays. Its Preface was a prescient poem by Ben Jonson, a former rival of Shakespeare, that hailed Shakespeare with the now famous epithet: 'not of an age, but for all time'.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/William_Shakespeare"
            },
            "Q69306804": {
                "name": "May 19, 2023",
                "wikidata_aliases": [
                    "19 May 2023",
                    "2023-05-19"
                ],
                "wikidata_summary": "date in Gregorian calendar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q69306804",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q69307190": {
                "name": "June 5, 2024",
                "wikidata_aliases": [
                    "5 June 2024",
                    "2024-06-05"
                ],
                "wikidata_summary": "date in Gregorian calendar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q69307190",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q69307241": {
                "name": "July 26, 2024",
                "wikidata_aliases": [
                    "26 July 2024",
                    "2024-07-26"
                ],
                "wikidata_summary": "date in Gregorian calendar",
                "wikidata_url": "https://www.wikidata.org/wiki/Q69307241",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7005534": {
                "name": "New Beverly Cinema",
                "wikidata_aliases": [
                    "New Globe Theatre",
                    "Dahl Theatre",
                    "Capri & Riviera Theatres",
                    "New Yorker Theatre",
                    "Europa Theatre",
                    "Eros Theatre",
                    "Beverly Cinema"
                ],
                "wikidata_summary": "movie theater in Los Angeles, California, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7005534",
                "wikipedia_summary": "The New Beverly Cinema is a historic movie theater located in Los Angeles, California. Housed in a building that dates back to the 1920s, it is one of the oldest revival houses in the region. Since 2007, it has been owned by the filmmaker Quentin Tarantino.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/New_Beverly_Cinema"
            },
            "Q7070626": {
                "name": "Nuview Union School District",
                "wikidata_aliases": [],
                "wikidata_summary": "public school district in Riverside County, California",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7070626",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7119727": {
                "name": "Penske Media Corporation",
                "wikidata_aliases": [
                    "PMC",
                    "Penske Business Media",
                    "Gold Derby"
                ],
                "wikidata_summary": "American digital media, publishing, and information services company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7119727",
                "wikipedia_summary": "Penske Media Corporation (PMC ) is an American mass media, publishing, and information services company based in Los Angeles and New York City. It publishes more than 20 digital and print brands, including Variety, Rolling Stone, Women's Wear Daily, Deadline Hollywood, Billboard, The Hollywood Reporter, Boy Genius Report, Robb Report, Artforum, ARTNews, and others. PMC's Chairman and CEO since founding is Jay Penske.\nIn addition to media publications, Penske Media Corporation owns the Life Is Beautiful Music & Art Festival and is a 50 percent stakeholder in South by Southwest. It is also the owner of Dick Clark Productions which includes the award shows Golden Globe Awards, American Music Awards, Streamy Awards, Academy of Country Music Awards, and the Billboard Music Awards.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Penske_Media_Corporation"
            },
            "Q725377": {
                "name": "Graphic novel",
                "wikidata_aliases": [
                    "comic book novel",
                    "graphic novels",
                    "comic book novels"
                ],
                "wikidata_summary": "book with primarily comics contents",
                "wikidata_url": "https://www.wikidata.org/wiki/Q725377",
                "wikipedia_summary": "A graphic novel is a long-form work of sequential art. The term graphic novel is often applied broadly, including fiction, non-fiction, and anthologized work, though this practice is highly contested by comics scholars and industry professionals. It is, at least in the United States, typically distinct from the term comic book, which is generally used for comics periodicals and trade paperbacks (see American comic book).\nFan historian Richard Kyle coined the term graphic novel in an essay in the November 1964 issue of the comics fanzine Capa-Alpha. The term gained popularity in the comics community after the publication of Will Eisner's A Contract with God (1978) and the start of the Marvel Graphic Novel line (1982) and became familiar to the public in the late 1980s after the commercial successes of the first volume of Art Spiegelman's Maus in 1986, the collected editions of Frank Miller's The Dark Knight Returns in 1986 and Alan Moore and Dave Gibbons' Watchmen in 1987. The Book Industry Study Group began using graphic novel as a category in book stores in 2001.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Graphic_novel"
            },
            "Q7277113": {
                "name": "RM Sotheby's",
                "wikidata_aliases": [
                    "RM Sotheby's"
                ],
                "wikidata_summary": "شركة",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7277113",
                "wikipedia_summary": "RM Sotheby's is a collector car auction company headquartered in Blenheim, Ontario, Canada, with offices across the United States, Europe, and the Middle East. The company specializes in the sale of classic, vintage, sports, and exotic cars, and is responsible for the sale of seven of the top ten most expensive cars ever sold at auction. Included in this is the sale of the 1955 Mercedes-Benz 300 SLR 'Uhlenhaut Coupé', sold for 135 million Euros in May 2022, the most expensive car ever sold and one of the most valuable objects ever sold at auction. The previous record for the most expensive car at auction, a 1962 Ferrari 250 GTO, had also been sold by RM Sotheby’s, at their 2018 Monterey auction. RM Sotheby’s services include auctions (online and in-person), private treaty sales, financial services, valuations, and estate planning, and they have been partly owned by Sotheby's, a global auction house dealing in fine art, since 2015.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/RM_Sotheby%27s"
            },
            "Q72962": {
                "name": "Reservoir Dogs",
                "wikidata_aliases": [],
                "wikidata_summary": "1992 film by Quentin Tarantino",
                "wikidata_url": "https://www.wikidata.org/wiki/Q72962",
                "wikipedia_summary": "Reservoir Dogs is a 1992 American neo-noir crime film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and Edward Bunker as diamond thieves whose heist of a jewelry store goes terribly wrong. Kirk Baltz, Randy Brooks, and Steven Wright also play supporting roles. The film incorporates many motifs that have become Tarantino's hallmarks: violent crime, pop culture references, profanity, and nonlinear storytelling.\nThe film is regarded as a classic of independent film and a cult film and was named 'Greatest Independent Film of All Time' by Empire. Although controversial at first for its depictions of violence and heavy use of profanity, Reservoir Dogs was generally well-received, and the cast was praised by many critics. Despite not being heavily promoted during its theatrical run, the film became a modest success in the United States after grossing $2.8 million against its scant budget. It achieved higher popularity after the success of Tarantino's next film, Pulp Fiction (1994). A soundtrack was released featuring songs used in the film, which are mostly from the 1970s.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Reservoir_Dogs"
            },
            "Q7310443": {
                "name": "Reinvestment risk",
                "wikidata_aliases": [],
                "wikidata_summary": "form of financial risk primarily associated with fixed income securities",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7310443",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7318": {
                "name": "Nazi Germany",
                "wikidata_aliases": [
                    "Third Reich",
                    "Greater German Reich",
                    "Hitler's Third Reich"
                ],
                "wikidata_summary": "Germany from 1933 to 1945 while under control of the Nazi Party",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7318",
                "wikipedia_summary": "Nazi Germany, officially known as the German Reich and later the Greater German Reich, is a term used to describe the German state between 1933 and 1945, when Adolf Hitler and the Nazi Party controlled the country, transforming it into a totalitarian dictatorship. The Third Reich, meaning 'Third Realm' or 'Third Empire', referred to the Nazi claim that Nazi Germany was the successor to the earlier Holy Roman Empire (800–1806) and German Empire (1871–1918). The Third Reich, which the Nazis referred to as the Thousand-Year Reich, ended in May 1945, after only 12 years, when the Allies defeated Germany and entered the capital, Berlin, ending World War II in Europe.\nAfter Hitler was appointed Chancellor of Germany by the President of the Weimar Republic Paul von Hindenburg on 30 January 1933, the Nazi Party began to eliminate political opposition and consolidate power. Hindenburg died on 2 August 1934, and Hitler became dictator by merging the powers of the chancellery and presidency. A 1934 German referendum confirmed Hitler as sole Führer (leader). Power was centralised in Hitler's person, and his word became the highest law. The government was not a coordinated, cooperating body, but rather a collection of factions struggling to amass power. In the midst of the Great Depression, the Nazis restored economic stability and ended mass unemployment using heavy military spending. Financed by deficit spending, the regime undertook extensive public works projects, including the Autobahnen (motorways) and a massive secret rearmament program, forming the Wehrmacht (armed forces). The return to economic stability boosted the regime's popularity. Germany made increasingly aggressive territorial demands, threatening war if they were not met. Germany seized Austria in the Anschluss of 1938, and demanded and received the Sudetenland region of Czechoslovakia. Germany signed a non-aggression pact with the Soviet Union and invaded Poland on 1 September 1939, launching World War II in Europe. In alliance with Italy and other Axis powers, Germany conquered most of Europe by 1940 and threatened Great Britain.\nRacism, Nazi eugenics, anti-Slavism, and especially antisemitism were central ideological features of the regime. The Germanic peoples were considered by the Nazis to be the 'master race', the purest branch of the Aryan race. Jews, Romani people, Slavs, homosexuals, liberals, socialists, communists, other political opponents, Jehovah Witnesses, those who refused to work, and other 'undesirables' were imprisoned, exiled, or murdered. Christian churches and citizens that opposed Hitler's rule were oppressed and leaders imprisoned. Education focused on racial biology, population policy, and fitness for military service. Career and educational opportunities for women were curtailed. Nazi Propaganda Ministry disseminated films, antisemitic canards, and organized mass rallies; fostering a pervasive cult of personality around Adolf Hitler to influence public opinion. The government controlled artistic expression, promoting specific art forms and banning or discouraging others. Genocide, mass murder, and large-scale forced labour became hallmarks of the regime; the implementation of the regime's racial policies culminated in the Holocaust.\nAfter the initial success of German invasion of the Soviet Union in 1941, Nazi Germany attempted to implement the Generalplan Ost and Hunger Plan, as part of its war of extermination in Eastern Europe. The Soviet resurgence and entry of the US into the war meant Germany lost the initiative in 1943, and by late 1944 had been pushed back to the 1939 border. Large-scale aerial bombing of Germany escalated and the Axis powers were driven back in Eastern and Southern Europe. After the Allied invasion of France, Germany was conquered by the Soviet Union from the east and the other Allies from the west, and capitulated on 8 May 1945. Hitler's refusal to admit defeat led to massive destruction of German infrastructure and additional war-related deaths in the closing months of the war. The Allies initiated a policy of denazification and put many of the surviving Nazi leadership on trial for war crimes at the Nuremberg trials.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Nazi_Germany"
            },
            "Q734207": {
                "name": "Conor McPherson",
                "wikidata_aliases": [],
                "wikidata_summary": "Irish playwright and director",
                "wikidata_url": "https://www.wikidata.org/wiki/Q734207",
                "wikipedia_summary": "Conor McPherson (born 6 August 1971) is an Irish playwright, screenwriter and director of stage and film. In recognition of his contribution to world theatre, McPherson was awarded an honorary doctorate of literature in June 2013 by University College Dublin.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Conor_McPherson"
            },
            "Q735": {
                "name": "Art",
                "wikidata_aliases": [],
                "wikidata_summary": "field of work focused on creating expressive work intended to be appreciated for its beauty or emotional power (use Q838948 for the resulting work)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q735",
                "wikipedia_summary": "Art is a diverse range of human activity and its resulting product that involves creative or imaginative talent generally expressive of technical proficiency, beauty, emotional power, or conceptual ideas.\nThere is no generally agreed definition of what constitutes art, and its interpretation has varied greatly throughout history and across cultures. In the Western tradition, the three classical branches of visual art are painting, sculpture, and architecture. Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts. Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts.\nThe nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics. The resulting artworks are studied in the professional fields of art criticism and the history of art.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Art"
            },
            "Q737236": {
                "name": "Mystique",
                "wikidata_aliases": [
                    "Raven Darkhölme",
                    "Raven Darkholme"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q737236",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q7414": {
                "name": "The Walt Disney Company",
                "wikidata_aliases": [
                    "Disney",
                    "Disney Brothers Cartoon Studio",
                    "The Walt Disney Studio",
                    "Walt Disney Productions",
                    "Walt Disney Company",
                    "Walt Disney"
                ],
                "wikidata_summary": "American multinational mass media company",
                "wikidata_url": "https://www.wikidata.org/wiki/Q7414",
                "wikipedia_summary": "The Walt Disney Company is an American multinational mass media and entertainment conglomerate that is headquartered at the Walt Disney Studios complex in Burbank, California. Disney was founded on October 16, 1923, by brothers Walt Disney and Roy Disney as Disney Brothers Studio; it also operated under the names Walt Disney Studio and Walt Disney Productions before changing its name to the Walt Disney Company in 1986. In 1928, Disney established itself as a leader in the animation industry with the short film Steamboat Willie. The film used synchronized sound to become the first post-produced sound cartoon, and popularized Mickey Mouse, who became Disney's mascot and corporate icon.\nAfter becoming a major success by the early 1940s, Disney diversified into live-action films, television, and theme parks in the 1950s. However, following Walt Disney's death in 1966, the company's profits, especially in the animation division, began to decline. In 1984, Disney's shareholders voted Michael Eisner as CEO, who led a reversal of the company's decline through a combination of international theme park expansion and the highly successful Disney Renaissance period of animation in the 1990s. In 2005, under new CEO Bob Iger, the company continued to expand into a major entertainment conglomerate with the acquisitions of Marvel Studios, Lucasfilm, and 20th Century Studios. In 2020, Bob Chapek became the head of Disney after Iger's retirement. However, Chapek was ousted in 2022 and Iger was reinstated as CEO.\nThe company is known for its film studio division Walt Disney Studios, which includes Walt Disney Pictures, Walt Disney Animation Studios, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, 20th Century Animation, and Searchlight Pictures. Disney's other main business units include divisions in television, broadcasting, streaming media, theme park resorts, consumer products, publishing, and international operations. Through these divisions, Disney owns and operates the ABC television network; cable television networks such as Disney Channel, ESPN, Freeform, FX, and National Geographic; publishing, merchandising, music, and theater divisions; direct-to-consumer streaming services such as Disney+, Star+, ESPN+, Hulu, and Hotstar; and Disney Experiences, which includes several theme parks, resort hotels, and cruise lines around the world.\nDisney is one of the biggest and best-known companies in the world and has been ranked number 53 on the 2022 Fortune 500 list of biggest companies in the United States by revenue. In 2023, the company's seat in Forbes Global 2000 was 87. Since its founding, the company has won 135 Academy Awards, 26 of which have been awarded to Walt. The company has been said to have produced some of the greatest films of all time, as well as revolutionizing the theme park industry. The company, which has been public since 1940, trades on the New York Stock Exchange (NYSE) with ticker symbol DIS and has been a component of the Dow Jones Industrial Average since 1991. In August 2020, about two-thirds of the stock was owned by large financial institutions. The company celebrated their 100th anniversary on October 16, 2023.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Walt_Disney_Company"
            },
            "Q76301153": {
                "name": "Disney+ app",
                "wikidata_aliases": [
                    "Disney Plus App"
                ],
                "wikidata_summary": "app for the Disney+ streaming service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q76301153",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q767728": {
                "name": "variety",
                "wikidata_aliases": [
                    "var.",
                    "Varieties"
                ],
                "wikidata_summary": "taxonomic rank",
                "wikidata_url": "https://www.wikidata.org/wiki/Q767728",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q78126227": {
                "name": "Dimitri Abold",
                "wikidata_aliases": [],
                "wikidata_summary": "deutscher Schauspieler",
                "wikidata_url": "https://www.wikidata.org/wiki/Q78126227",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q79576": {
                "name": "Google Play",
                "wikidata_aliases": [
                    "Play Store",
                    "Android App Store",
                    "Google Play Store",
                    "Android Market"
                ],
                "wikidata_summary": "digital software distribution platform from Google",
                "wikidata_url": "https://www.wikidata.org/wiki/Q79576",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q8010717": {
                "name": "William Hale",
                "wikidata_aliases": [
                    "William King Hale",
                    "King of the Osage Hills",
                    "Bill Hale"
                ],
                "wikidata_summary": "American murderer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q8010717",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q8041469": {
                "name": "X-Men: God Loves, Man Kills",
                "wikidata_aliases": [
                    "God Loves, Man Kills"
                ],
                "wikidata_summary": "1982 graphic novel",
                "wikidata_url": "https://www.wikidata.org/wiki/Q8041469",
                "wikipedia_summary": "X-Men: God Loves, Man Kills (Marvel Graphic Novel #5) is an original graphic novel published in 1982 by Marvel Comics, starring their popular superhero team the X-Men. It was written by Christopher Claremont and illustrated by Brent Eric Anderson. The book served as the primary inspiration for the 2003 film X2, which saw Claremont return to write the novelization. Inspired by the rise of televangelism in the 1980s, the story deals with the overall religious extremism against mutants.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Men:_God_Loves,_Man_Kills"
            },
            "Q81054": {
                "name": "Storm",
                "wikidata_aliases": [],
                "wikidata_summary": "any disturbed state of an astronomical body's atmosphere",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81054",
                "wikipedia_summary": "A storm is any disturbed state of the natural environment or the atmosphere of an astronomical body. It may be marked by significant disruptions to normal conditions such as strong wind, tornadoes, hail, thunder and lightning (a thunderstorm), heavy precipitation (snowstorm, rainstorm), heavy freezing rain (ice storm), strong winds (tropical cyclone, windstorm), wind transporting some substance through the atmosphere such as in a dust storm, among other forms of severe weather.\nStorms have the potential to harm lives and property via storm surge, heavy rain or snow causing flooding or road impassibility, lightning, wildfires, and vertical and horizontal wind shear. Systems with significant rainfall and duration help alleviate drought in places they move through. Heavy snowfall can allow special recreational activities to take place which would not be possible otherwise, such as skiing and snowmobiling.\nThe English word comes from Proto-Germanic *sturmaz meaning 'noise, tumult'.\nStorms are created when a center of low pressure develops with the system of high pressure surrounding it. This combination of opposing forces can create winds and result in the formation of storm clouds such as cumulonimbus. Small localized areas of low pressure can form from hot air rising off hot ground, resulting in smaller disturbances such as dust devils and whirlwinds.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Storm"
            },
            "Q81068910": {
                "name": "COVID-19 pandemic",
                "wikidata_aliases": [
                    "nCov-2019 outbreak",
                    "2019nCov outbreak",
                    "COVID-19 epidemic",
                    "nCov2019 outbreak",
                    "coronavirus pandemic",
                    "COVID-19 outbreak",
                    "SARS-CoV-2 pandemic",
                    "COVID pandemic",
                    "outbreak of 2019-nCoV acute respiratory disease",
                    "2019–22 outbreak of COVID-19",
                    "2019–2022 outbreak of COVID-19",
                    "2019–22 outbreak of novel coronavirus (2019-nCoV)",
                    "2019–22 coronavirus outbreak",
                    "2019–22 COVID-19 pandemic",
                    "2019–2022 coronavirus pandemic",
                    "2019–22 coronavirus pandemic",
                    "2019–2022 Wuhan coronavirus outbreak",
                    "2019-2022 SARS-CoV-2 outbreak",
                    "2019–2022 COVID-19 pandemic",
                    "COVID-19 pandemic, People's Republic of China",
                    "COVID-19 pandemic, China"
                ],
                "wikidata_summary": "Pandemic caused by SARS-CoV-2",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81068910",
                "wikipedia_summary": "The COVID-19 pandemic, also known as the coronavirus pandemic, is a global pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The novel virus was first identified in an outbreak in Wuhan, the capital of Hubei, China, in December 2019, before it spread to other areas of Asia, and then worldwide in early 2020. The World Health Organization (WHO) declared the outbreak a public health emergency of international concern (PHEIC) on 30 January 2020, and assessed the outbreak had become a pandemic on 11 March 2020. The WHO ended the PHEIC on 5 May 2023. As of 5 May 2024, the pandemic has caused 7,046,320 confirmed deaths, making it the fifth-deadliest pandemic or epidemic in history.\nCOVID-19 symptoms range from asymptomatic to deadly, but most commonly include fever, sore throat, nocturnal cough, and fatigue. Transmission of the virus is often through airborne particles. Mutations have produced many strains (variants) with varying degrees of infectivity and virulence.\nCOVID-19 vaccines were widely deployed in various countries beginning in December 2020. Treatments include novel antiviral drugs and symptom control. Common mitigation measures during the public health emergency included travel restrictions, lockdowns, business restrictions and closures, workplace hazard controls, mask mandates, quarantines, testing systems, and contact tracing of the infected.\nThe pandemic caused severe social and economic disruption around the world, including the largest global recession since the Great Depression. Widespread supply shortages, including food shortages, were caused by supply chain disruptions and panic buying. Reduced human activity led to an unprecedented temporary decrease in pollution. Educational institutions and public areas were partially or fully closed in many jurisdictions, and many events were cancelled or postponed during 2020 and 2021. Telework became much more common for white-collar workers as the pandemic evolved.  Misinformation circulated through social media and mass media, and political tensions intensified. The pandemic raised issues of racial and geographic discrimination, health equity, and the balance between public health imperatives and individual rights.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/COVID-19_pandemic"
            },
            "Q81263": {
                "name": "Pagani",
                "wikidata_aliases": [
                    "Pagani, Campania"
                ],
                "wikidata_summary": "Italian comune",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81263",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q81413": {
                "name": "Unua Libro",
                "wikidata_aliases": [
                    "International Language: Preface and Complete Textbook",
                    "First Book"
                ],
                "wikidata_summary": "pamphlet by L. L. Zamenhof, first published in 1887 in Russian and subsequently in other languages, introducing the language Esperanto for the first time",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81413",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q81651": {
                "name": "X-2",
                "wikidata_aliases": [
                    "Bell X-2",
                    "X2",
                    "X-2 Starbuster",
                    "Starbuster"
                ],
                "wikidata_summary": "1952 research aircraft by Bell",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81651",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q81938": {
                "name": "Pain",
                "wikidata_aliases": [
                    "ache"
                ],
                "wikidata_summary": "type of unpleasant feeling",
                "wikidata_url": "https://www.wikidata.org/wiki/Q81938",
                "wikipedia_summary": "Pain is a distressing feeling often caused by intense or damaging stimuli. The International Association for the Study of Pain defines pain as 'an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage.' \nPain motivates organisms to withdraw from damaging situations, to protect a damaged body part while it heals, and to avoid similar experiences in the future. Most pain resolves once the noxious stimulus is removed and the body has healed, but it may persist despite removal of the stimulus and apparent healing of the body. Sometimes pain arises in the absence of any detectable stimulus, damage or disease.\nPain is the most common reason for physician consultation in most developed countries. It is a major symptom in many medical conditions, and can interfere with a person's quality of life and general functioning. People in pain experience impaired concentration, working memory, mental flexibility, problem solving and information processing speed, and are more likely to experience irritability, depression and anxiety. \nSimple pain medications are useful in 20% to 70% of cases. Psychological factors such as social support, cognitive behavioral therapy, excitement, or distraction can affect pain's intensity or unpleasantness.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Pain"
            },
            "Q829548": {
                "name": "Over-the-top media service",
                "wikidata_aliases": [
                    "OTT",
                    "over-the-top content",
                    "OTT platform",
                    "over-the-top",
                    "over-the-top platform"
                ],
                "wikidata_summary": "service delivering video over the Internet instead of through a multi-system operator",
                "wikidata_url": "https://www.wikidata.org/wiki/Q829548",
                "wikipedia_summary": "Over-the-top (OTT) media service (also known as streaming platform) is a media service offered directly to viewers via the Internet. OTT bypasses cable, broadcast, and satellite television platforms—the media through which companies have traditionally acted as controllers or distributors of such content. The term is most synonymous with subscription-based video on demand (SVoD) services that offer access to film and television content, such as Netflix and Amazon Prime Video. This content may include shows and movies for which the OTT acquired rights from the content owner. Programming may also (or alternatively) include original content produced specifically for the service.\nOTT services also include a range of 'skinny' television offerings that provide access to live streams of linear specialty channels. These services resemble traditional satellite or cable TV programming, but the OTT content is delivered via the public Internet instead of a closed, private network system that uses exclusive equipment like set-top boxes.\nOTT services are typically accessed via websites on personal computers, apps on mobile devices (such as smartphones and tablets), digital media players (including video game consoles), televisions with integrated Smart TV platforms, and streaming devices such as Amazon Fire TV and Roku.\nThe term has also been used to describe no-carrier cellphones, for which all communications are charged as data, avoiding monopolistic competition, or apps for phones that transmit data in this manner, including both those that replace other call methods and those that update software.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Over-the-top_media_service"
            },
            "Q83339241": {
                "name": "Amenth",
                "wikidata_aliases": [
                    "Amenth (family name)",
                    "Amenth (surname)"
                ],
                "wikidata_summary": "family name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q83339241",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q837140": {
                "name": "Catching Fire",
                "wikidata_aliases": [],
                "wikidata_summary": "2009 novel by Suzanne Collins",
                "wikidata_url": "https://www.wikidata.org/wiki/Q837140",
                "wikipedia_summary": "Catching Fire is a 2009 dystopian young adult fiction novel by the American novelist Suzanne Collins, the second book in The Hunger Games series. As the sequel to the 2008 bestseller The Hunger Games, it continues the story of Katniss Everdeen and the post-apocalyptic nation of Panem. Following the events of the previous novel, a rebellion against the oppressive Capitol has begun, and Katniss and fellow tribute Peeta Mellark are forced to return to the arena in a special edition of the Hunger Games.\nThe book was first published on September 1, 2009, by Scholastic, in hardcover, and was later released in ebook and audiobook format. Catching Fire received mostly positive reviews, with reviewers praising Collins' prose, the book's ending, and the development of Katniss's character. According to critics, major themes of the novel include survival, authoritarianism, rebellion and interdependence versus independence. The book has sold more than 19 million copies in the U.S. alone. A film adaptation, The Hunger Games: Catching Fire, was released on November 22, 2013.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Catching_Fire"
            },
            "Q838076": {
                "name": "Professor X",
                "wikidata_aliases": [
                    "Charles Xavier",
                    "Professor Charles Xavier",
                    "Prof X",
                    "Professor Xavier"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q838076",
                "wikipedia_summary": "Professor X (Prof. Charles Francis Xavier) is a character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist/co-writer Jack Kirby, the character first appeared in The X-Men #1 (September 1963). The character is depicted as the founder and occasional leader of the X-Men.\nXavier is a member of a subspecies of humans known as mutants, who are born with superhuman abilities. He is an exceptionally powerful telepath, who can read and control the minds of others. To both shelter and train mutants from around the world, he runs a private school in the X-Mansion in Salem Center, located in Westchester County, New York. Xavier also strives to serve a greater good by promoting peaceful coexistence and equality between humans and mutants in a world where zealous anti-mutant bigotry is widespread, though he later abandons his dream in favor of establishing a mutant nation on Krakoa.\nThroughout much of the character's history, Xavier has been depicted with paraplegia and uses a wheelchair. One of the world's most powerful mutant telepaths, Xavier is a scientific genius and a leading authority in genetics. He has devised Cerebro and other equipment to enhance psionic powers and detect and track people with the mutant gene.\nXavier's pacifist and assimilationist ideology and actions have often been contrasted with that of Magneto, a mutant leader (initially characterized as a supervillain and later as a complex antihero) with whom Xavier has a complicated relationship. Writer Chris Claremont, who originated Magneto's backstory, modeled the politics of Xavier on David Ben Gurion, and that of Magneto on Menachem Begin.\nPatrick Stewart portrayed the character in the first three films in the 20th Century Fox X-Men film series and in various video games, while James McAvoy portrayed a younger version of the character in the 2011 prequel X-Men: First Class. Both actors reprised the role in the film X-Men: Days of Future Past. Stewart would reprise the role in the film Logan (2017), while McAvoy would further appear as his younger iteration of the character in X-Men: Apocalypse (2016), Deadpool 2 (2018) and Dark Phoenix (2019). Harry Lloyd portrayed the character in the third season of the television series Legion. Stewart again returned to the role, portraying an alternate version of the character in the 2022 Marvel Cinematic Universe film Doctor Strange in the Multiverse of Madness.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Professor_X"
            },
            "Q840291": {
                "name": "Magneto",
                "wikidata_aliases": [
                    "Max Eisenhardt",
                    "Magnus",
                    "Erik Lehnsherr"
                ],
                "wikidata_summary": "fictional character in Marvel Comics",
                "wikidata_url": "https://www.wikidata.org/wiki/Q840291",
                "wikipedia_summary": "A magneto is an electrical generator that uses permanent magnets to produce periodic pulses of alternating current. Unlike a dynamo, a magneto does not contain a commutator to produce direct current. It is categorized as a form of alternator, although it is usually considered distinct from most other alternators, which use field coils rather than permanent magnets.\nHand-cranked magneto generators were used to provide ringing current in telephone systems. Magnetos were also adapted to produce pulses of high voltage in the ignition systems of some gasoline-powered internal combustion engines to provide power to the spark plugs. Use of such ignition magnetos for ignition is now limited mainly to engines without a low-voltage electrical system, such as lawnmowers and chainsaws, and to aircraft engines, in which keeping the ignition independent of the rest of the electrical system ensures that the engine continues running in the event of alternator or battery failure. For redundancy, virtually all piston engine aircraft are fitted with two magneto systems, each supplying power to one of two spark plugs in each cylinder.\nMagnetos were used for specialized isolated power systems such as arc lamp systems or lighthouses, for which their simplicity was an advantage. They have never been widely applied for the purposes of bulk electricity generation, for the same purposes or to the same extent as either dynamos or alternators. Only in a few specialised cases have they been used for power generation.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Magneto"
            },
            "Q84153310": {
                "name": "Next In Fashion",
                "wikidata_aliases": [],
                "wikidata_summary": "American reality television show",
                "wikidata_url": "https://www.wikidata.org/wiki/Q84153310",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q85795328": {
                "name": "Quentin Tarantino's unrealized projects",
                "wikidata_aliases": [],
                "wikidata_summary": "overview about Quentin Tarantino's unrealized projects",
                "wikidata_url": "https://www.wikidata.org/wiki/Q85795328",
                "wikipedia_summary": "The following is a list of unproduced Quentin Tarantino projects in roughly chronological order. During his career, American film director Quentin Tarantino has worked on a number of projects which never progressed beyond the pre-production stage under his direction. Some of these projects were officially cancelled and scrapped or fell in development hell.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Quentin_Tarantino%27s_unrealized_projects"
            },
            "Q863812": {
                "name": "Lamborghini Countach",
                "wikidata_aliases": [],
                "wikidata_summary": "car model",
                "wikidata_url": "https://www.wikidata.org/wiki/Q863812",
                "wikipedia_summary": "The Lamborghini Countach () is a rear mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 until 1990. It is one of the many exotic designs developed by Italian design house Bertone, which pioneered and popularized the sharply angled 'Italian Wedge' shape.\nThe style was introduced to the public in 1970 as the Lancia Stratos Zero concept car. The first showing of the Countach prototype was at the 1971 Geneva Motor Show, as the Lamborghini LP500 concept.\nThe 'Countach' nameplate was reused for the Sián-based limited-production hybrid-electric model called the Countach LPI 800-4 in 2021.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Lamborghini_Countach"
            },
            "Q869": {
                "name": "Thailand",
                "wikidata_aliases": [
                    "Kingdom of Thailand",
                    "th",
                    "Siam",
                    "🇹🇭",
                    "Land of Smiles",
                    "THA"
                ],
                "wikidata_summary": "country in Southeast Asia",
                "wikidata_url": "https://www.wikidata.org/wiki/Q869",
                "wikipedia_summary": "Thailand, officially the Kingdom of Thailand and historically known as Siam (the official name until 1939), is a country in Southeast Asia on the Indochinese Peninsula. With a population of almost 70 million, it spans 513,120 square kilometres (198,120 sq mi). Thailand is bordered to the northwest by Myanmar, to the northeast and east by Laos, to the southeast by Cambodia, to the south by the Gulf of Thailand and Malaysia, and to the southwest by the Andaman Sea; it also shares maritime borders with Vietnam to the southeast and Indonesia and India to the southwest. Bangkok is the state capital and largest city.\nTai peoples migrated from southwestern China to mainland Southeast Asia from the 6th to 11th centuries. Indianised kingdoms such as the Mon, Khmer Empire, and Malay states ruled the region, competing with Thai states such as the Kingdoms of Ngoenyang, Sukhothai, Lan Na, and Ayutthaya, which also rivalled each other. European contact began in 1511 with a Portuguese diplomatic mission to Ayutthaya, which became a regional power by the end of the 15th century. Ayutthaya reached its peak during the 18th century, until it was destroyed in the Burmese–Siamese War. King Taksin the Great quickly reunified the fragmented territory and established the short-lived Thonburi Kingdom (1767–1782), of which he was the only king. He was succeeded in 1782 by Buddha Yodfa Chulaloke (Rama I), the first monarch of the current Chakri dynasty. Throughout the era of Western imperialism in Asia, Siam remained the only state in the region to avoid colonization by foreign powers, although it was often forced to make territorial, trade, and legal concessions in unequal treaties. The Siamese system of government was centralised and transformed into a modern unitary absolute monarchy during the reign of Chulalongkorn (Rama V). In World War I, Siam sided with the Allies, a political decision made in order to amend the unequal treaties. Following a bloodless revolution in 1932, it became a constitutional monarchy and changed its official name to Thailand, becoming an ally of Japan in World War II. In the late 1950s, a military coup under Field Marshal Sarit Thanarat revived the monarchy's historically influential role in politics. During the Cold War, Thailand became a major ally of the United States and played an anti-communist role in the region as a member of the failed SEATO, but since 1975 it has sought to improve relations with Communist China and Thailand's neighbours.\nApart from a brief period of parliamentary democracy in the mid-1970s and 1990s, Thailand has periodically alternated between democracy and military rule. Since the 2000s, the country has been caught in continual bitter political conflict between supporters and opponents of Thaksin Shinawatra, which resulted in two coups (in 2006 and 2014), along with the establishment of its current constitution, a nominally democratic government after the 2019 Thai general election, and large pro-democracy protests in 2020–2021, which included unprecedented demands to reform the monarchy. Since 2019, it has been nominally a parliamentary constitutional monarchy; in practice, however, structural advantages in the constitution have ensured the military's continued influence in politics.\nThailand is a middle power in global affairs and a founding member of ASEAN, and it ranks very high in the Human Development Index. It has the second-largest economy in Southeast Asia and the 23rd-largest in the world by PPP, and it ranks 91st by nominal GDP per capita. Thailand is classified as a newly industrialised economy, with manufacturing, agriculture, and tourism as leading sectors.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Thailand"
            },
            "Q870449": {
                "name": "Family therapy",
                "wikidata_aliases": [
                    "couple and family therapy",
                    "marriage and family therapy",
                    "family systems therapy",
                    "family counseling",
                    "family psychotherapy"
                ],
                "wikidata_summary": "type of psychotherapy",
                "wikidata_url": "https://www.wikidata.org/wiki/Q870449",
                "wikipedia_summary": "Family therapy (also referred to as family counseling, family systems therapy, marriage and family therapy, couple and family therapy) is a branch of psychotherapy focused on families and couples in intimate relationships to nurture change and development. It tends to view change in terms of the systems of interaction between family members.\nThe different schools of family therapy have in common a belief that, regardless of the origin of the problem, and regardless of whether the clients consider it an 'individual' or 'family' issue, involving families in solutions often benefits clients. This involvement of families is commonly accomplished by their direct participation in the therapy session. The skills of the family therapist thus include the ability to influence conversations in a way that catalyses the strengths, wisdom, and support of the wider system.\nIn the field's early years, many clinicians defined the family in a narrow, traditional manner usually including parents and children. As the field has evolved, the concept of the family is more commonly defined in terms of strongly supportive, long-term roles and relationships between people who may or may not be related by blood or marriage.\nThe conceptual frameworks developed by family therapists, especially those of\nfamily systems theorists, have been applied to a wide range of human behavior, including organisational dynamics and the study of greatness.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Family_therapy"
            },
            "Q873506": {
                "name": "index",
                "wikidata_aliases": [
                    "indices",
                    "Back-of-the-book index",
                    "book index"
                ],
                "wikidata_summary": "list of words or phrases with pointers to their locations",
                "wikidata_url": "https://www.wikidata.org/wiki/Q873506",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q8877": {
                "name": "Steven Spielberg",
                "wikidata_aliases": [
                    "Steven Allan Spielberg",
                    "Spielberg"
                ],
                "wikidata_summary": "American filmmaker (born 1946)",
                "wikidata_url": "https://www.wikidata.org/wiki/Q8877",
                "wikipedia_summary": "Steven Allan Spielberg,  (; born December 18, 1946) is an American filmmaker. A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history. He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, nine Golden Globe Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as 'culturally, historically or aesthetically significant'.\nSpielberg was born in Cincinnati, Ohio, and grew up in Phoenix, Arizona. He moved to California and studied film in college. After directing several episodes for television, including Night Gallery and Columbo, he directed the television film Duel (1971), which later received an international theatrical release. He made his theatrical film debut with The Sugarland Express (1974) and became a household name with the 1975 summer blockbuster Jaws. He directed more box office successes with Close Encounters of the Third Kind (1977), E.T. the Extra-Terrestrial (1982), and the original Indiana Jones trilogy (1981–89). He subsequently explored drama in The Color Purple (1985) and Empire of the Sun (1987).\nIn 1993, Spielberg directed back-to-back blockbuster hits with the science fiction thriller Jurassic Park, the highest-grossing film ever at the time, and the Holocaust drama Schindler's List, which has often been listed as one of the greatest films ever made. He won the Academy Award for Best Director for the latter and the 1998 World War II epic Saving Private Ryan. Spielberg has since directed the science fiction films A.I. Artificial Intelligence (2001), Minority Report (2002), and War of the Worlds (2005); the adventure films The Adventures of Tintin (2011) and Ready Player One (2018); the historical dramas Amistad (1997), Munich (2005), War Horse (2011), Lincoln (2012), Bridge of Spies (2015) and The Post (2017); the musical West Side Story (2021); and the semi-autobiographical drama The Fabelmans (2022).\nSpielberg co-founded Amblin Entertainment and DreamWorks, and he has served as a producer for many successful films and television series, among them Poltergeist (1982), Gremlins (1984), Back to the Future (1985), Who Framed Roger Rabbit (1988) and Band of Brothers (1999). He has had a long collaboration with the composer John Williams, with whom he has worked for all but five of his feature films. Several of Spielberg's works are considered among the greatest films in history, and some are among the highest-grossing films ever. In 2013, Time listed him as one of the 100 most influential people, and in 2023, Spielberg was the recipient of the first ever Time 100 Impact Award in the U.S. Reviewing Close Encounters, Pauline Kael called the young Spielberg 'a magician in the age of movies.'",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Steven_Spielberg"
            },
            "Q892447": {
                "name": "Bonhams",
                "wikidata_aliases": [
                    "Bonham's"
                ],
                "wikidata_summary": "Auction house of fine art and antiques",
                "wikidata_url": "https://www.wikidata.org/wiki/Q892447",
                "wikipedia_summary": "Bonhams is a privately owned international auction house and one of the world's oldest and largest auctioneers of fine art and antiques. It was formed by the merger in November 2001 of Bonhams & Brooks and Phillips Son & Neale. This brought together two of the four surviving Georgian auction houses in London, Bonhams having been founded in 1793, and Phillips in 1796 by Harry Phillips, formerly a senior clerk to James Christie. \nToday, the amalgamated business handles art and antiques auctions. Bonhams operates two salerooms in London—the former Phillips sale room at 101 New Bond Street, and the old Bonham's sale room at the Montpelier Galleries in Montpelier Street, Knightsbridge—with a smaller sale room in Edinburgh. Sales are also held around the world in New York, Hong Kong, Los Angeles, Paris, San Francisco, Sydney, and Singapore. Bonhams holds more than 280 sales a year in more than 60 collecting areas, including Asian art, Pictures, motor cars and jewelry.   Bonhams has more than 550 staff with some of the world's leading specialists in their fields.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Bonhams"
            },
            "Q89474225": {
                "name": "The Marvels",
                "wikidata_aliases": [
                    "Captain Marvel 2"
                ],
                "wikidata_summary": "2023 film directed by Nia DaCosta",
                "wikidata_url": "https://www.wikidata.org/wiki/Q89474225",
                "wikipedia_summary": "The Marvels is a 2023 American superhero film based on Marvel Comics. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to the film Captain Marvel (2019), a continuation of the television miniseries Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film was directed by Nia DaCosta, who co-wrote the screenplay with Megan McDonnell and Elissa Karasik. It stars Brie Larson as Carol Danvers / Captain Marvel, Teyonah Parris as Monica Rambeau, and Iman Vellani as Kamala Khan / Ms. Marvel, alongside Zawe Ashton, Gary Lewis, Park Seo-joon, Zenobia Shroff, Mohan Kapur, Saagar Shaikh, and Samuel L. Jackson. In the film, Danvers, Rambeau, and Kamala team up as 'the Marvels' after they begin swapping places with each other every time they use their powers.\nMarvel Studios confirmed plans to make a sequel to Captain Marvel in July 2019. Development began in January 2020 with McDonnell hired after working on the television miniseries WandaVision (2021). Larson was set to return from the first film as Danvers, and DaCosta was hired to direct that August. In December, Parris was revealed to be reprising her role as Rambeau from WandaVision alongside Vellani returning as Kamala from Ms. Marvel. Second unit filming began in mid-April 2021 in New Jersey, and the title—referring to the three characters and their similar abilities—was revealed in early May. Principal photography began in July 2021 and concluded by mid-May 2022, taking place at Pinewood Studios in Buckinghamshire and Longcross Studios in Surrey, England, as well as in Los Angeles and Tropea, Italy. Karasik's involvement was revealed during post-production.\nThe Marvels premiered in Las Vegas on November 7, 2023, and was released in the United States on November 10 as part of Phase Five of the MCU. It received mixed reviews from critics, with praise for its performances but criticism for its script and tonal inconsistencies. The film was a box-office bomb, grossing $206 million worldwide against a gross production budget of $274.8 million, making it the lowest-grossing film in the MCU and one of the few MCU films not to break even in its theatrical run.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Marvels"
            },
            "Q901": {
                "name": "Scientist",
                "wikidata_aliases": [
                    "natural philosopher"
                ],
                "wikidata_summary": "person who use scientific methods to study in an area of interest",
                "wikidata_url": "https://www.wikidata.org/wiki/Q901",
                "wikipedia_summary": "A scientist is a person who researches to advance knowledge in an area of the natural sciences. \nIn classical antiquity, there was no real ancient analog of a modern scientist. Instead, philosophers engaged in the philosophical study of nature called natural philosophy, a precursor of natural science. Though Thales (circa 624–545 BC) was arguably the first scientist for describing how cosmic events may be seen as natural, not necessarily caused by gods, it was not until the 19th century that the term scientist came into regular use after it was coined by the theologian, philosopher, and historian of science William Whewell in 1833.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Scientist"
            },
            "Q907311": {
                "name": "Netflix",
                "wikidata_aliases": [
                    "Netflix.com"
                ],
                "wikidata_summary": "American subscription video on-demand over-the-top streaming service",
                "wikidata_url": "https://www.wikidata.org/wiki/Q907311",
                "wikipedia_summary": "Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.\nLaunched on January 16, 2007, nearly a decade after Netflix, Inc. began its pioneering DVD‑by‑mail movie rental service, Netflix is the most-subscribed video on demand streaming media service, with 269.6 million paid memberships in more than 190 countries as of April 2024. By 2022, 'Netflix Original' productions accounted for half of its library in the United States and the namesake company had ventured into other categories, such as video game publishing of mobile games via its flagship service. As of October 2023, Netflix is the 24th most-visited website in the world with 23.66% of its traffic coming from the United States, followed by the United Kingdom at 5.84% and Brazil at 5.64%.\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Netflix"
            },
            "Q9174": {
                "name": "Religion",
                "wikidata_aliases": [
                    "religious tradition"
                ],
                "wikidata_summary": "social-cultural system",
                "wikidata_url": "https://www.wikidata.org/wiki/Q9174",
                "wikipedia_summary": "Religion is a range of social-cultural systems, including designated behaviors and practices, morals, beliefs, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that generally relate humanity to supernatural, transcendental, and spiritual elements—although there is no scholarly consensus over what precisely constitutes a religion. Different religions may or may not contain various elements ranging from the divine, sacredness, faith, and a supernatural being or beings.\nThe origin of religious belief is an open question, with possible explanations including awareness of individual death, a sense of community, and dreams. Religions have sacred histories, narratives, and mythologies, preserved in oral traditions, sacred texts, symbols, and holy places, that may attempt to explain the origin of life, the universe, and other phenomena.\nReligious practices may include rituals, sermons, commemoration or veneration (of deities or saints), sacrifices, festivals, feasts, trances, initiations, matrimonial and funerary services, meditation, prayer, music, art, dance, or public service.\nThere are an estimated 10,000 distinct religions worldwide, though nearly all of them have regionally based, relatively small followings. Four religions—Christianity, Islam, Hinduism, and Buddhism—account for over 77% of the world's population, and 92% of the world either follows one of those four religions or identifies as nonreligious, meaning that the remaining 9,000+ faiths account for only 8% of the population combined. The religiously unaffiliated demographic includes those who do not identify with any particular religion, atheists, and agnostics, although many in the demographic still have various religious beliefs.\nMany world religions are also organized religions, most definitively including the Abrahamic religions Christianity, Islam, and Judaism, while others are arguably less so, in particular folk religions, indigenous religions, and some Eastern religions. A portion of the world's population are members of new religious movements. Scholars have indicated that global religiosity may be increasing due to religious countries having generally higher birth rates.\nThe study of religion comprises a wide variety of academic disciplines, including theology, philosophy of religion, comparative religion, and social scientific studies. Theories of religion offer various explanations for its origins and workings, including the ontological foundations of religious being and belief.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Religion"
            },
            "Q9184": {
                "name": "Book of Genesis",
                "wikidata_aliases": [
                    "Gen",
                    "Genesis",
                    "Genesis (Book of the Bible)",
                    "The Book of Genesis",
                    "Book of Genesis",
                    "Gen."
                ],
                "wikidata_summary": "the first book of the Bible",
                "wikidata_url": "https://www.wikidata.org/wiki/Q9184",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q92640": {
                "name": "Alice's Adventures in Wonderland",
                "wikidata_aliases": [
                    "Alice's adventures in wonderland",
                    "Alice in wonderland",
                    "Alice in Wonderland"
                ],
                "wikidata_summary": "novel by Lewis Carroll",
                "wikidata_url": "https://www.wikidata.org/wiki/Q92640",
                "wikipedia_summary": "Alice's Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll, a mathematics don at Oxford University. It details the story of a girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist John Tenniel provided 42 wood-engraved illustrations for the book. \nIt received positive reviews upon release and is now one of the best-known works of Victorian literature; its narrative, structure, characters and imagery have had a widespread influence on popular culture and literature, especially in the fantasy genre. It is credited as helping end an era of didacticism in children's literature, inaugurating an era in which writing for children aimed to 'delight or entertain'. The tale plays with logic, giving the story lasting popularity with adults as well as with children. The titular character Alice shares her name with Alice Liddell, a girl Carroll knew—scholars disagree about the extent to which the character was based upon her.\nThe book has never been out of print and has been translated into 174 languages. Its legacy covers adaptations for screen, radio, art, ballet, opera, musicals, theme parks, board games and video games. Carroll published a sequel in 1871 entitled Through the Looking-Glass and a shortened version for young children, The Nursery 'Alice', in 1890.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland"
            },
            "Q92750744": {
                "name": "The Climate Crisis - Health and Care Delivery",
                "wikidata_aliases": [],
                "wikidata_summary": "scientific article published on 01 August 2019",
                "wikidata_url": "https://www.wikidata.org/wiki/Q92750744",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q93204": {
                "name": "Documentary film",
                "wikidata_aliases": [
                    "documentary movie",
                    "film documentary",
                    "motion picture documentary",
                    "documentary",
                    "factual film"
                ],
                "wikidata_summary": "nonfictional motion picture",
                "wikidata_url": "https://www.wikidata.org/wiki/Q93204",
                "wikipedia_summary": "A documentary film or documentary is a non-fictional motion picture intended to 'document reality, primarily for instruction, education or maintaining a historical record'. Bill Nichols has characterized the documentary in terms of 'a filmmaking practice, a cinematic tradition, and mode of audience reception [that remains] a practice without clear boundaries'.\nEarly documentary films, originally called 'actuality films', briefly lasted for one minute or less. Over time, documentaries have evolved to become longer in length and to include more categories. Some examples are educational, observational and docufiction. Documentaries are very informative, and are often used within schools as a resource to teach various principles. Documentary filmmakers have a responsibility to be truthful to their vision of the world without intentionally misrepresenting a topic.\nSocial media platforms (such as YouTube) have provided an avenue for the growth of the documentary-film genre. These platforms have increased the distribution area and ease-of-accessibility.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Documentary_film"
            },
            "Q938034": {
                "name": "X-Force",
                "wikidata_aliases": [],
                "wikidata_summary": "group of fictional characters",
                "wikidata_url": "https://www.wikidata.org/wiki/Q938034",
                "wikipedia_summary": "The X-Force is a team of superheroes appearing in American comic books published by Marvel Comics, most commonly in association with the X-Men. Conceived by writer/illustrator Rob Liefeld, the team first appeared in New Mutants #100 (April 1991) and soon afterwards was featured in its own series called X-Force. The group was originally a revamped version of the 1980s team, the New Mutants.\nX-Force's first leader was the mutant Cable. An offshoot of the X-Men, X-Force takes a more militant and aggressive approach towards its enemies compared to the X-Men.\nAn alternate incarnation of X-Force appears in the 2018 film Deadpool 2 as part of the X-Men film series. A planned X-Force film adaptation by 20th Century Fox was in production, but it was cancelled after Disney acquired 20th Century Fox.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/X-Force"
            },
            "Q94": {
                "name": "Android",
                "wikidata_aliases": [
                    "Android OS",
                    "Google Android",
                    "Android (operating system)",
                    "Android operating system"
                ],
                "wikidata_summary": "open-source operating system for mobile devices created by Google",
                "wikidata_url": "https://www.wikidata.org/wiki/Q94",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q947650": {
                "name": "Osage Nation",
                "wikidata_aliases": [
                    "Ni-U-Kon-Ska",
                    "NiuKonska",
                    "Wazházhe",
                    "Osages",
                    "Wazhazhe",
                    "Osage",
                    "People of the Middle Waters"
                ],
                "wikidata_summary": "Native American Siouan-speaking tribe in the United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q947650",
                "wikipedia_summary": "The Osage Nation ( OH-sayj) (Osage: 𐓁𐒻 𐓂𐒼𐒰𐓇𐒼𐒰͘‎, romanized: Ni Okašką, lit. 'People of the Middle Waters') is a Midwestern American tribe of the Great Plains. The tribe developed in the Ohio and Mississippi river valleys around 700 B.C. along with other groups of its language family. They migrated west after the 17th century, settling near the confluence of the Missouri and Mississippi rivers, as a result of Iroquois expansion into the Ohio Country in the aftermath of the Beaver Wars.\nThe term 'Osage' is a French version of the tribe's name, which can be roughly translated as 'calm water'. The Osage people refer to themselves in their Dhegihan Siouan language as (𐓏𐒰𐓓𐒰𐓓𐒷‎, Wazhazhe, 'Mid-waters'). By the early 19th century, the Osage had become the dominant power in the region, feared by neighboring tribes. The tribe controlled the area between the Missouri and Red rivers, the Ozarks to the east and the foothills of the Wichita Mountains to the south. They depended on nomadic buffalo hunting and agriculture. The 19th-century painter George Catlin described the Osage as 'the tallest race of men in North America, either red or white skins; there being ... many of them six and a half, and others seven feet [198, 213 cm].' The missionary Isaac McCoy described the Osage as an 'uncommonly fierce, courageous, warlike nation' and said they were the 'finest looking Indians I have ever seen in the West'. In the Ohio Valley, the Osage originally lived among speakers of the same Dhegihan language stock, such as the Kansa, Ponca, Omaha, and Quapaw. Researchers believe that the tribes likely diverged in languages and cultures after leaving the lower Ohio Country. The Omaha and Ponca settled in what is now Nebraska; the Kansa in Kansas; and the Quapaw in Arkansas.\nIn the 19th century, the Osage were forced by the United States to move from modern-day Kansas into Indian Territory (present-day Oklahoma), and the majority of their descendants live in Oklahoma. In the early 20th century, oil was discovered on their land. They had retained communal mineral rights during the allotment process, and many Osage became wealthy through returns from leasing fees generated by their Osage headrights. However, during the 1920s and what was known as the Reign of Terror, they suffered manipulation, fraud and numerous murders by outsiders eager to take over their wealth. In 2011, the nation gained a settlement from the federal government after an 11-year legal struggle over long mismanagement of their oil funds. In the 21st century, the federally recognized Osage Nation has approximately 20,000 enrolled members, 6,780 of whom reside in the tribe's jurisdictional area. Members also live outside the nation's tribal land in Oklahoma and in other states around the country. The tribe is bordered by the Cherokee Nation to the east, the Muscogee Nation and the Pawnee Nation to the south, and the Kaw Nation and Oklahoma proper to the west.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Osage_Nation"
            },
            "Q95": {
                "name": "Google",
                "wikidata_aliases": [
                    "Google Inc.",
                    "Big G",
                    "Google, Inc.",
                    "Google LLC",
                    "Google LLC (Mountain View, CA)"
                ],
                "wikidata_summary": "American multinational technology company, a subsidiary of Alphabet inc.",
                "wikidata_url": "https://www.wikidata.org/wiki/Q95",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q956250": {
                "name": "This Boy's Life",
                "wikidata_aliases": [],
                "wikidata_summary": "1993 film by Michael Caton-Jones",
                "wikidata_url": "https://www.wikidata.org/wiki/Q956250",
                "wikipedia_summary": "This Boy's Life (titled onscreen as This Boy's Life: A True Story) is a 1993 American biographical coming-of-age drama film directed by Michael Caton-Jones. It is based on the eponymous memoir by author Tobias Wolff. The film stars Leonardo DiCaprio, Robert De Niro, and Ellen Barkin. It marks the first time Leonardo DiCaprio and Robert De Niro ever collaborated. The film also features Chris Cooper, Carla Gugino, Eliza Dushku and Tobey Maguire's first credited appearance in a feature-length movie.\nIt was the first collaboration on-screen between Maguire and DiCaprio, who both later worked in Don's Plum (2001) and The Great Gatsby (2013), and also the first collaboration on-screen between DiCaprio and De Niro, who both later worked in Marvin's Room (1996), short film The Audition (2015), and the film Killers of the Flower Moon (2023).\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/This_Boy%27s_Life"
            },
            "Q959005": {
                "name": "Hyperspectral imaging",
                "wikidata_aliases": [],
                "wikidata_summary": "method to create a complete picture of the environment or various objects, each pixel containing a full visible, visible near infrared, near infrared, or infrared spectrum.",
                "wikidata_url": "https://www.wikidata.org/wiki/Q959005",
                "wikipedia_summary": "Hyperspectral imaging collects and processes information from across the electromagnetic spectrum. The goal of hyperspectral imaging is to obtain the spectrum for each pixel in the image of a scene, with the purpose of finding objects, identifying materials, or detecting processes. There are three general types of spectral imagers. There are push broom scanners and the related whisk broom scanners (spatial scanning), which read images over time, band sequential scanners (spectral scanning), which acquire images of an area at different wavelengths, and snapshot hyperspectral imagers, which uses a staring array to generate an image in an instant.\nWhereas the human eye sees color of visible light in mostly three bands (long wavelengths, perceived as red; medium wavelengths, perceived as green; and short wavelengths, perceived as blue), spectral imaging divides the spectrum into many more bands. This technique of dividing images into bands can be extended beyond the visible. In hyperspectral imaging, the recorded spectra have fine wavelength resolution and cover a wide range of wavelengths. Hyperspectral imaging measures continuous spectral bands, as opposed to multiband imaging which measures spaced spectral bands.\nEngineers build hyperspectral sensors and processing systems for applications in astronomy, agriculture, molecular biology, biomedical imaging, geosciences, physics, and surveillance. Hyperspectral sensors look at objects using a vast portion of the electromagnetic spectrum. Certain objects leave unique 'fingerprints' in the electromagnetic spectrum. Known as spectral signatures, these 'fingerprints' enable identification of the materials that make up a scanned object. For example, a spectral signature for oil helps geologists find new oil fields.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Hyperspectral_imaging"
            },
            "Q96377121": {
                "name": "The Ballad of Songbirds and Snakes",
                "wikidata_aliases": [
                    "The Ballad of Songbirds and Snakes",
                    "The Hunger Games: The Ballad of Songbirds & Snakes"
                ],
                "wikidata_summary": "2023 film directed by Francis Lawrence",
                "wikidata_url": "https://www.wikidata.org/wiki/Q96377121",
                "wikipedia_summary": "The Ballad of Songbirds and Snakes is a dystopian action-adventure novel written by the American author Suzanne Collins. It is a prequel to the original The Hunger Games trilogy, set 64 years before the events of the first novel. It was released on May 19, 2020, by Scholastic with an audiobook of the novel, read by the American actor Santino Fontana, was released simultaneously. The book had a virtual launch due to the COVID-19 pandemic. A film adaptation by Lionsgate, The Hunger Games: The Ballad of Songbirds & Snakes, was released on November 17, 2023.\nCollins said in an open letter, 'The book was an attempt to explore the state of nature debate through the tale of young President Snow while lifting the veil on the origin of the Hunger Games...'\n\n",
                "wikipedia_url": "https://en.wikipedia.org/wiki/The_Ballad_of_Songbirds_and_Snakes"
            },
            "Q97011987": {
                "name": "30 Years Later, Forged Hitler Diaries Enter German Archives",
                "wikidata_aliases": [],
                "wikidata_summary": "news article, NYT",
                "wikidata_url": "https://www.wikidata.org/wiki/Q97011987",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q977": {
                "name": "Djibouti",
                "wikidata_aliases": [
                    "Republic of Djibouti",
                    "Jabuuti",
                    "Gabuuti",
                    "Jībūtī",
                    "dj",
                    "🇩🇯"
                ],
                "wikidata_summary": "sovereign state in Africa",
                "wikidata_url": "https://www.wikidata.org/wiki/Q977",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q97751645": {
                "name": "Khai",
                "wikidata_aliases": [],
                "wikidata_summary": "given name",
                "wikidata_url": "https://www.wikidata.org/wiki/Q97751645",
                "wikipedia_summary": "Khai is a village in the Punjab province of Pakistan.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/Khai"
            },
            "Q983": {
                "name": "Equatorial Guinea",
                "wikidata_aliases": [
                    "Republic of Equatorial Guinea",
                    "gq",
                    "🇬🇶",
                    "GEQ"
                ],
                "wikidata_summary": "sovereign state in Africa",
                "wikidata_url": "https://www.wikidata.org/wiki/Q983",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q986187": {
                "name": "Osage",
                "wikidata_aliases": [
                    "Osage, Iowa",
                    "Osage, IA"
                ],
                "wikidata_summary": "city in Mitchell County, Iowa, United States",
                "wikidata_url": "https://www.wikidata.org/wiki/Q986187",
                "wikipedia_summary": null,
                "wikipedia_url": null
            },
            "Q99": {
                "name": "California",
                "wikidata_aliases": [
                    "CA",
                    "State of California",
                    "The Golden State",
                    "Calif.",
                    "California, United States",
                    "US-CA",
                    "Cali.",
                    "Cal."
                ],
                "wikidata_summary": "state of the United States of America",
                "wikidata_url": "https://www.wikidata.org/wiki/Q99",
                "wikipedia_summary": "California (  KAL-ih-FORN-yə, -⁠FOR-nee-ə) is a state in the Western United States, lying on the American Pacific Coast. It borders Oregon to the north, Nevada and Arizona to the east, and the Mexican state of Baja California to the south. With over 38.9 million residents across a total area of approximately 163,696 square miles (423,970 km2), it is the most populous U.S. state, the third-largest U.S. state by area, and the most populated subnational entity in North America.\nThe Greater Los Angeles and San Francisco Bay areas in California are the nation's second- and fifth-most populous urban regions respectively. Greater Los Angeles has over 18.7 million residents and the San Francisco Bay Area has over 9.6 million residents. Los Angeles is the state's most populous city and the nation's second-most populous city, after New York City. San Francisco is the second-most densely populated major city in the country, after New York City. Los Angeles County is the country's most populous county, and San Bernardino County is the nation's largest county by area. Sacramento is the state's capital city.\nCalifornia's economy is the largest of any state within the United States, with a $3.6 trillion gross state product (GSP) as of 2022. It is the largest sub-national economy in the world. If California were a sovereign nation, it would rank as the world's fifth-largest economy as of 2022, just ahead of India and the United Kingdom, as well as the 37th most populous. The Greater Los Angeles area and the San Francisco area are the nation's second- and fourth-largest urban economies ($1.0 trillion and $0.6 trillion respectively as of 2020). The San Francisco Bay Area Combined Statistical Area had the nation's highest gross domestic product per capita ($106,757) among large primary statistical areas in 2018, and is home to four of the world's ten largest companies by market capitalization and four of the world's ten richest people. \nPrior to European colonization, California was one of the most culturally and linguistically diverse areas in pre-Columbian North America, and the indigenous peoples of California constituted the highest Native American population density north of what is now Mexico. European exploration in the 16th and 17th centuries led to the colonization of California by the Spanish Empire. In 1804, it was included in Alta California province within the Viceroyalty of New Spain. The area became a part of Mexico in 1821, following its successful war for independence, but was ceded to the United States in 1848 after the Mexican–American War. The California Gold Rush started in 1848 and led to dramatic social and demographic changes, including the depopulation of indigenous peoples in the California genocide. The western portion of Alta California was then organized and admitted as the 31st state on September 9, 1850, as a free state, following the Compromise of 1850.\nNotable contributions to popular culture, ranging from entertainment, sports, music, and fashion, have their origins in California. The state also has made substantial contributions in the fields of communication, information, innovation, education, environmentalism, entertainment, economics, politics, technology, and religion. California is the home of Hollywood, the oldest and one of the largest film industries in the world, profoundly influencing global entertainment. It is considered the origin of hippie counterculture, blue jeans, the internet, the personal computer, Barbie, skateboarding, Mission burritos, and the fortune cookie, among other inventions. The San Francisco Bay Area and the Greater Los Angeles Area are widely seen as the centers of the global technology and U.S. film industries, respectively. California's economy is very diverse. \nCalifornia's agricultural industry has the highest output of any U.S. state, and is led by its dairy, almonds, and grapes. With the busiest port in the country (Los Angeles), California plays a pivotal role in the global supply chain, hauling in about 40% of all goods imported to the United States. Slightly over 84 percent of the state's residents 25 or older hold a high school degree, the lowest high school education rate of all 50 states. Despite a continuing exodus of businesses from Downtown San Francisco and Downtown Los Angeles since the COVID-19 pandemic, California still retains one of the largest number of Fortune 500 companies.\nThe state's extremely diverse geography ranges from the Pacific Coast and metropolitan areas in the west to the Sierra Nevada mountains in the east, and from the redwood and Douglas fir forests in the northwest to the Mojave Desert in the southeast. Two-thirds of the nation's earthquake risk lies in California. The Central Valley, a fertile agricultural area, dominates the state's center. California is well known for its warm Mediterranean climate along the coast and monsoon seasonal weather inland. The large size of the state results in climates that vary from moist temperate rainforest in the north to arid desert in the interior, as well as snowy alpine in the mountains. Droughts and wildfires are an ongoing issue for the state.",
                "wikipedia_url": "https://en.wikipedia.org/wiki/California"
            },
            "Q99678050": {
                "name": "Matteo Milleri",
                "wikidata_aliases": [
                    "Anyma"
                ],
                "wikidata_summary": "Italian American producer",
                "wikidata_url": "https://www.wikidata.org/wiki/Q99678050",
                "wikipedia_summary": null,
                "wikipedia_url": null
            }
        };
        this.edges = [
            {
                "label": "cast_member",
                "source": "Q47300912",
                "target": "Q38111"
            },
            {
                "label": "performer",
                "source": "Q47300912",
                "target": "Q38111"
            },
            {
                "label": "publication_date",
                "source": "Q47300912",
                "target": "Q25274"
            },
            {
                "label": "notable_work",
                "source": "Q3772",
                "target": "Q104123"
            },
            {
                "label": "director",
                "source": "Q104123",
                "target": "Q3772"
            },
            {
                "label": "cast_member",
                "source": "Q2272387",
                "target": "Q14917756"
            },
            {
                "label": "cast_member",
                "source": "Q11424",
                "target": "Q14917756"
            },
            {
                "label": "publication_date",
                "source": "Q2272387",
                "target": "Q25274"
            },
            {
                "label": "cast_member",
                "source": "Q47300912",
                "target": "Q26923245"
            },
            {
                "label": "publication_date",
                "source": "Q47300912",
                "target": "Q2485"
            },
            {
                "label": "publication_date",
                "source": "Q47300912",
                "target": "Q49628"
            },
            {
                "label": "date_of_birth",
                "source": "Q47300912",
                "target": "Q18726"
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": "Q7005534",
                "target": "Q65"
            },
            {
                "label": "date_of_death",
                "source": "Q110741065",
                "target": "Q69306804"
            },
            {
                "label": "cast_member",
                "source": "Q47300912",
                "target": "Q35332"
            },
            {
                "label": "date_of_death",
                "source": "Q47300912",
                "target": "Q49622"
            },
            {
                "label": "performer",
                "source": "Q2695945",
                "target": "Q14917756"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q35332"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q115541"
            },
            {
                "label": "performer",
                "source": "Q47300912",
                "target": "Q35332"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q469954"
            },
            {
                "label": "spouse",
                "source": "Q47300912",
                "target": "Q2695945"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q41163"
            },
            {
                "label": "spouse",
                "source": "Q2695945",
                "target": "Q47300912"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q342533"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q14917756"
            },
            {
                "label": "genre",
                "source": "Q326878",
                "target": "Q21590660"
            },
            {
                "label": "cast_member",
                "source": "Q536588",
                "target": "Q172678"
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": "Q34006",
                "target": "Q65"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q1924847"
            },
            {
                "label": "cast_member",
                "source": "Q110741065",
                "target": "Q172678"
            },
            {
                "label": "award_received",
                "source": "Q38111",
                "target": "Q19020"
            },
            {
                "label": "occupation",
                "source": "Q38111",
                "target": "Q211236"
            },
            {
                "label": "headquarters_location",
                "source": "Q7070626",
                "target": "Q49233"
            },
            {
                "label": "use",
                "source": "Q7070626",
                "target": "Q504027"
            },
            {
                "label": "cast_member",
                "source": "Q66316924",
                "target": "Q38111"
            },
            {
                "label": "publisher",
                "source": "Q2030942",
                "target": "Q109260234"
            },
            {
                "label": "product_or_material_produced",
                "source": "Q223177",
                "target": "Q171495"
            },
            {
                "label": "cast_member",
                "source": "Q66316924",
                "target": "Q36949"
            },
            {
                "label": "cast_member",
                "source": "Q25173",
                "target": "Q38111"
            },
            {
                "label": "founded_by",
                "source": "Q18205509",
                "target": "Q38111"
            },
            {
                "label": "director",
                "source": "Q66316924",
                "target": "Q41148"
            },
            {
                "label": "cast_member",
                "source": "Q92750744",
                "target": "Q38111"
            },
            {
                "label": "owned_by",
                "source": "Q18205509",
                "target": "Q38111"
            },
            {
                "label": "cast_member",
                "source": "Q66316924",
                "target": "Q41148"
            },
            {
                "label": "owned_by",
                "source": "Q128723",
                "target": "Q38111"
            },
            {
                "label": "owned_by",
                "source": "Q55623853",
                "target": "Q38111"
            },
            {
                "label": "position_held",
                "source": "Q19673",
                "target": "Q42178"
            },
            {
                "label": "notable_work",
                "source": "Q41148",
                "target": "Q66316924"
            },
            {
                "label": "position_held",
                "source": "Q6279",
                "target": "Q30461"
            },
            {
                "label": "cast_member",
                "source": "Q1392744",
                "target": "Q38111"
            },
            {
                "label": "subclass_of",
                "source": "Q186263",
                "target": "Q26540"
            },
            {
                "label": "position_held",
                "source": "Q6279",
                "target": "Q42178"
            },
            {
                "label": "product_or_material_produced",
                "source": "Q7070626",
                "target": "Q26540"
            },
            {
                "label": "cast_member",
                "source": "Q668",
                "target": "Q38111"
            },
            {
                "label": "part_of",
                "source": "Q186131",
                "target": "Q2"
            },
            {
                "label": "facet_of",
                "source": "Q81068910",
                "target": "Q125928"
            },
            {
                "label": "manufacturer",
                "source": "Q7070626",
                "target": "Q33881282"
            },
            {
                "label": "has_cause",
                "source": "Q81068910",
                "target": "Q125928"
            },
            {
                "label": "operator",
                "source": "Q5969535",
                "target": "Q23548"
            },
            {
                "label": "cast_member",
                "source": "Q275550",
                "target": "Q1138674"
            },
            {
                "label": "operator",
                "source": "Q5969535",
                "target": "Q59942"
            },
            {
                "label": "inception",
                "source": "Q13420339",
                "target": "Q2089"
            },
            {
                "label": "cast_member",
                "source": "Q275550",
                "target": "Q187545"
            },
            {
                "label": "inception",
                "source": "Q157031",
                "target": "Q2089"
            },
            {
                "label": "cast_member",
                "source": "Q275550",
                "target": "Q117251498"
            },
            {
                "label": "operator",
                "source": "Q5969535",
                "target": "Q1296491"
            },
            {
                "label": "founded_by",
                "source": "Q7070626",
                "target": "Q42411864"
            },
            {
                "label": "subclass_of",
                "source": "Q959005",
                "target": "Q14620"
            },
            {
                "label": "publication_date",
                "source": "Q100361490",
                "target": "Q49628"
            },
            {
                "label": "subclass_of",
                "source": "Q959005",
                "target": "Q47528"
            },
            {
                "label": "participant",
                "source": "Q193547",
                "target": "Q947650"
            },
            {
                "label": "field_of_work",
                "source": "Q38111",
                "target": "Q1348989"
            },
            {
                "label": "named_after",
                "source": "Q193547",
                "target": "Q947650"
            },
            {
                "label": "cast_member",
                "source": "Q100361490",
                "target": "Q189490"
            },
            {
                "label": "location",
                "source": "Q193547",
                "target": "Q947650"
            },
            {
                "label": "genre",
                "source": "Q106545884",
                "target": "Q188473"
            },
            {
                "label": "subclass_of",
                "source": "Q241741",
                "target": "Q37813"
            },
            {
                "label": "main_subject",
                "source": "Q204670",
                "target": "Q60933643"
            },
            {
                "label": "cast_member",
                "source": "Q956250",
                "target": "Q38111"
            },
            {
                "label": "field_of_work",
                "source": "Q38111",
                "target": "Q52139"
            },
            {
                "label": "genre",
                "source": "Q100361490",
                "target": "Q188473"
            },
            {
                "label": "cast_member",
                "source": "Q956250",
                "target": "Q36949"
            },
            {
                "label": "studies",
                "source": "Q52139",
                "target": "Q125928"
            },
            {
                "label": "publication_date",
                "source": "Q204670",
                "target": "Q2021"
            },
            {
                "label": "cast_member",
                "source": "Q204670",
                "target": "Q19673"
            },
            {
                "label": "genre",
                "source": "Q204670",
                "target": "Q93204"
            },
            {
                "label": "publication_date",
                "source": "Q956250",
                "target": "Q2065"
            },
            {
                "label": "work_period__start_",
                "source": "Q38111",
                "target": "Q97011987"
            },
            {
                "label": "participant_in",
                "source": "Q38111",
                "target": "Q97011987"
            },
            {
                "label": "participant",
                "source": "Q97011987",
                "target": "Q38111"
            },
            {
                "label": "cast_member",
                "source": "Q11424",
                "target": "Q38111"
            },
            {
                "label": "cast_member",
                "source": "Q66316924",
                "target": "Q27450671"
            },
            {
                "label": "spouse",
                "source": "Q38111",
                "target": "Q21207531"
            },
            {
                "label": "spouse",
                "source": "Q21207531",
                "target": "Q38111"
            },
            {
                "label": "narrative_location",
                "source": "Q1392744",
                "target": "Q65"
            },
            {
                "label": "point_in_time",
                "source": "Q193547",
                "target": "Q2155"
            },
            {
                "label": "country",
                "source": "Q52631",
                "target": "Q29"
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": "Q947650",
                "target": "Q1649"
            },
            {
                "label": "notable_work",
                "source": "Q38111",
                "target": "Q25173"
            },
            {
                "label": "country",
                "source": "Q490",
                "target": "Q38"
            },
            {
                "label": "country",
                "source": "Q120644278",
                "target": "Q1321"
            },
            {
                "label": "publisher",
                "source": "Q25173",
                "target": "Q211374"
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": "Q120679397",
                "target": "Q65"
            },
            {
                "label": "published_in",
                "source": "Q25173",
                "target": "Q211374"
            },
            {
                "label": "residence",
                "source": "Q21207531",
                "target": "Q65"
            },
            {
                "label": "point_in_time",
                "source": "Q16781948",
                "target": "Q25291"
            },
            {
                "label": "ethnic_group",
                "source": "Q193547",
                "target": "Q947650"
            },
            {
                "label": "cast_member",
                "source": "Q25173",
                "target": "Q21207531"
            },
            {
                "label": "participant",
                "source": "Q193547",
                "target": "Q986187"
            },
            {
                "label": "occupation",
                "source": "Q99678050",
                "target": "Q977"
            },
            {
                "label": "spouse",
                "source": "Q21207531",
                "target": "Q99678050"
            },
            {
                "label": "spouse",
                "source": "Q99678050",
                "target": "Q21207531"
            },
            {
                "label": "spouse",
                "source": "Q116673393",
                "target": "Q21207531"
            },
            {
                "label": "notable_work",
                "source": "Q21207531",
                "target": "Q1392744"
            },
            {
                "label": "presenter",
                "source": "Q84153310",
                "target": "Q587465"
            },
            {
                "label": "spouse",
                "source": "Q21207531",
                "target": "Q116673393"
            },
            {
                "label": "cast_member",
                "source": "Q84153310",
                "target": "Q587465"
            },
            {
                "label": "father",
                "source": "Q97751645",
                "target": "Q3626950"
            },
            {
                "label": "child",
                "source": "Q3626950",
                "target": "Q97751645"
            },
            {
                "label": "present_in_work",
                "source": "Q21207531",
                "target": "Q1392744"
            },
            {
                "label": "cast_member",
                "source": "Q25188",
                "target": "Q27449526"
            },
            {
                "label": "cast_member",
                "source": "Q25274",
                "target": "Q38111"
            },
            {
                "label": "work_location",
                "source": "Q38111",
                "target": "Q34006"
            },
            {
                "label": "opposite_of",
                "source": "Q289",
                "target": "Q11424"
            },
            {
                "label": "opposite_of",
                "source": "Q11424",
                "target": "Q289"
            },
            {
                "label": "occupation",
                "source": "Q159347",
                "target": "Q289"
            },
            {
                "label": "spouse",
                "source": "Q47300912",
                "target": "Q14917756"
            },
            {
                "label": "operating_system",
                "source": "Q79576",
                "target": "Q94"
            },
            {
                "label": "work_period__start_",
                "source": "Q47300912",
                "target": "Q2426"
            },
            {
                "label": "instance_of",
                "source": "Q7119727",
                "target": "Q264238"
            },
            {
                "label": "cast_member",
                "source": "Q47300912",
                "target": "Q14917756"
            },
            {
                "label": "director",
                "source": "Q47300912",
                "target": "Q3772"
            },
            {
                "label": "screenwriter",
                "source": "Q104123",
                "target": "Q450720"
            },
            {
                "label": "director",
                "source": "Q85795328",
                "target": "Q3772"
            },
            {
                "label": "cast_member",
                "source": "Q104123",
                "target": "Q3772"
            },
            {
                "label": "distributed_by",
                "source": "Q129",
                "target": "Q1465133"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q51552"
            },
            {
                "label": "present_in_work",
                "source": "Q228699",
                "target": "Q23673"
            },
            {
                "label": "spouse",
                "source": "Q228699",
                "target": "Q51552"
            },
            {
                "label": "production_company",
                "source": "Q129",
                "target": "Q1465133"
            },
            {
                "label": "present_in_work",
                "source": "Q51552",
                "target": "Q23673"
            },
            {
                "label": "spouse",
                "source": "Q51552",
                "target": "Q228699"
            },
            {
                "label": "followed_by",
                "source": "Q72962",
                "target": "Q104123"
            },
            {
                "label": "follows",
                "source": "Q104123",
                "target": "Q72962"
            },
            {
                "label": "publication_date",
                "source": "Q72962",
                "target": "Q2060"
            },
            {
                "label": "publication_date",
                "source": "Q104123",
                "target": "Q2067"
            },
            {
                "label": "date_of_death",
                "source": "Q47300912",
                "target": "Q2485"
            },
            {
                "label": "cast_member",
                "source": "Q153723",
                "target": "Q35332"
            },
            {
                "label": "spouse",
                "source": "Q3772",
                "target": "Q2695945"
            },
            {
                "label": "spouse",
                "source": "Q2695945",
                "target": "Q3772"
            },
            {
                "label": "cast_member",
                "source": "Q536588",
                "target": "Q3772"
            },
            {
                "label": "present_in_work",
                "source": "Q110741065",
                "target": "Q23673"
            },
            {
                "label": "cast_member",
                "source": "Q23673",
                "target": "Q110741065"
            },
            {
                "label": "subclass_of",
                "source": "Q57422304",
                "target": "Q112059737"
            },
            {
                "label": "subclass_of",
                "source": "Q56297455",
                "target": "Q57422304"
            },
            {
                "label": "subclass_of",
                "source": "Q34302",
                "target": "Q154430"
            },
            {
                "label": "main_subject",
                "source": "Q47300912",
                "target": "Q1722708"
            },
            {
                "label": "cast_member",
                "source": "Q43297",
                "target": "Q172678"
            },
            {
                "label": "present_in_work",
                "source": "Q47300912",
                "target": "Q43297"
            },
            {
                "label": "director",
                "source": "Q1392744",
                "target": "Q41148"
            },
            {
                "label": "spouse",
                "source": "Q121641605",
                "target": "Q110268031"
            },
            {
                "label": "publication_date",
                "source": "Q1392744",
                "target": "Q1998"
            },
            {
                "label": "notable_work",
                "source": "Q41148",
                "target": "Q1392744"
            },
            {
                "label": "spouse",
                "source": "Q110268031",
                "target": "Q121641605"
            },
            {
                "label": "employer",
                "source": "Q110268031",
                "target": "Q193326"
            },
            {
                "label": "director",
                "source": "Q1392744",
                "target": "Q114000963"
            },
            {
                "label": "field_of_work",
                "source": "Q110268031",
                "target": "Q11690"
            },
            {
                "label": "publication_date",
                "source": "Q1392744",
                "target": "Q1999"
            },
            {
                "label": "stock_exchange",
                "source": "Q242345",
                "target": "Q11690"
            },
            {
                "label": "editor",
                "source": "Q1392744",
                "target": "Q166887"
            },
            {
                "label": "organizer",
                "source": "Q163913",
                "target": "Q892447"
            },
            {
                "label": "screenwriter",
                "source": "Q1392744",
                "target": "Q166887"
            },
            {
                "label": "cast_member",
                "source": "Q16679546",
                "target": "Q16279078"
            },
            {
                "label": "country",
                "source": "Q242345",
                "target": "Q30"
            },
            {
                "label": "cast_member",
                "source": "Q11424",
                "target": "Q1924847"
            },
            {
                "label": "manufacturer",
                "source": "Q863812",
                "target": "Q35886"
            },
            {
                "label": "director",
                "source": "Q16679546",
                "target": "Q16279078"
            },
            {
                "label": "instance_of",
                "source": "Q242345",
                "target": "Q873506"
            },
            {
                "label": "screenwriter",
                "source": "Q16679546",
                "target": "Q16279078"
            },
            {
                "label": "winner",
                "source": "Q19020",
                "target": "Q1924847"
            },
            {
                "label": "has_part",
                "source": "Q735",
                "target": "Q11634"
            },
            {
                "label": "cast_member",
                "source": "Q66316924",
                "target": "Q19877770"
            },
            {
                "label": "cast_member",
                "source": "Q1392744",
                "target": "Q1924847"
            },
            {
                "label": "different_from",
                "source": "Q735",
                "target": "Q11634"
            },
            {
                "label": "director",
                "source": "Q66316924",
                "target": "Q19877770"
            },
            {
                "label": "screenwriter",
                "source": "Q66316924",
                "target": "Q19877770"
            },
            {
                "label": "cast_member",
                "source": "Q1392744",
                "target": "Q121641605"
            },
            {
                "label": "cast_member",
                "source": "Q1392744",
                "target": "Q19877770"
            },
            {
                "label": "part_of",
                "source": "Q11634",
                "target": "Q735"
            },
            {
                "label": "characters",
                "source": "Q1392744",
                "target": "Q110268031"
            },
            {
                "label": "subclass_of",
                "source": "Q7310443",
                "target": "Q1303150"
            },
            {
                "label": "present_in_work",
                "source": "Q110268031",
                "target": "Q1392744"
            },
            {
                "label": "present_in_work",
                "source": "Q121641605",
                "target": "Q1392744"
            },
            {
                "label": "published_in",
                "source": "Q1392744",
                "target": "Q983"
            },
            {
                "label": "creator",
                "source": "Q110268031",
                "target": "Q41148"
            },
            {
                "label": "member_of_sports_team",
                "source": "Q11192",
                "target": "Q172030"
            },
            {
                "label": "residence",
                "source": "Q121641605",
                "target": "Q99"
            },
            {
                "label": "opposite_of",
                "source": "Q247145",
                "target": "Q57055076"
            },
            {
                "label": "director",
                "source": "Q1392744",
                "target": "Q19877770"
            },
            {
                "label": "occupation",
                "source": "Q121641605",
                "target": "Q204018"
            },
            {
                "label": "inception",
                "source": "Q863812",
                "target": "Q2425"
            },
            {
                "label": "performer",
                "source": "Q110268031",
                "target": "Q38111"
            },
            {
                "label": "member_of_sports_team",
                "source": "Q11192",
                "target": "Q2279870"
            },
            {
                "label": "occupation",
                "source": "Q121641605",
                "target": "Q870449"
            },
            {
                "label": "owned_by",
                "source": "Q863812",
                "target": "Q7277113"
            },
            {
                "label": "spouse",
                "source": "Q121641605",
                "target": "Q4575196"
            },
            {
                "label": "opposite_of",
                "source": "Q176494",
                "target": "Q3736025"
            },
            {
                "label": "owner_of",
                "source": "Q7277113",
                "target": "Q863812"
            },
            {
                "label": "spouse",
                "source": "Q4575196",
                "target": "Q121641605"
            },
            {
                "label": "opposite_of",
                "source": "Q3736025",
                "target": "Q176494"
            },
            {
                "label": "characters",
                "source": "Q1392744",
                "target": "Q171545"
            },
            {
                "label": "present_in_work",
                "source": "Q171545",
                "target": "Q1392744"
            },
            {
                "label": "distributed_by",
                "source": "Q1392744",
                "target": "Q159846"
            },
            {
                "label": "country_of_origin",
                "source": "Q242345",
                "target": "Q30"
            },
            {
                "label": "employer",
                "source": "Q2517802",
                "target": "Q35886"
            },
            {
                "label": "facet_of",
                "source": "Q179179",
                "target": "Q3196867"
            },
            {
                "label": "founded_by",
                "source": "Q81263",
                "target": "Q2517802"
            },
            {
                "label": "subclass_of",
                "source": "Q179179",
                "target": "Q3196867"
            },
            {
                "label": "production_company",
                "source": "Q1392744",
                "target": "Q159846"
            },
            {
                "label": "has_part",
                "source": "Q3196867",
                "target": "Q179179"
            },
            {
                "label": "employer",
                "source": "Q2517802",
                "target": "Q81263"
            },
            {
                "label": "part_of",
                "source": "Q49127",
                "target": "Q13371"
            },
            {
                "label": "facet_of",
                "source": "Q168796",
                "target": "Q9174"
            },
            {
                "label": "country",
                "source": "Q188540",
                "target": "Q30"
            },
            {
                "label": "subsidiary",
                "source": "Q13371",
                "target": "Q49127"
            },
            {
                "label": "country",
                "source": "Q60",
                "target": "Q30"
            },
            {
                "label": "contains_administrative_territorial_entity",
                "source": "Q30",
                "target": "Q60"
            },
            {
                "label": "present_in_work",
                "source": "Q8010717",
                "target": "Q66316924"
            },
            {
                "label": "has_part",
                "source": "Q94",
                "target": "Q79576"
            },
            {
                "label": "product_or_material_produced",
                "source": "Q95",
                "target": "Q94"
            },
            {
                "label": "cast_member",
                "source": "Q28183079",
                "target": "Q110268031"
            },
            {
                "label": "occupation",
                "source": "Q110268031",
                "target": "Q4182927"
            },
            {
                "label": "occupation",
                "source": "Q171545",
                "target": "Q4182927"
            },
            {
                "label": "characters",
                "source": "Q171545",
                "target": "Q110268031"
            },
            {
                "label": "inception",
                "source": "Q863812",
                "target": "Q2475"
            },
            {
                "label": "creator",
                "source": "Q110268031",
                "target": "Q38111"
            },
            {
                "label": "practiced_by",
                "source": "Q11690",
                "target": "Q160117"
            },
            {
                "label": "publication_date",
                "source": "Q1392744",
                "target": "Q2475"
            },
            {
                "label": "field_of_this_occupation",
                "source": "Q160117",
                "target": "Q11690"
            },
            {
                "label": "part_of",
                "source": "Q22687",
                "target": "Q43015"
            },
            {
                "label": "part_of",
                "source": "Q14864997",
                "target": "Q43015"
            },
            {
                "label": "member_of",
                "source": "Q42040",
                "target": "Q128452"
            },
            {
                "label": "member_of",
                "source": "Q838076",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q42040"
            },
            {
                "label": "instance_of",
                "source": "Q42040",
                "target": "Q3285695"
            },
            {
                "label": "residence",
                "source": "Q42040",
                "target": "Q371776"
            },
            {
                "label": "instance_of",
                "source": "Q15208946",
                "target": "Q3285695"
            },
            {
                "label": "publisher",
                "source": "Q128452",
                "target": "Q173496"
            },
            {
                "label": "cast_member",
                "source": "Q102180106",
                "target": "Q129591"
            },
            {
                "label": "creator",
                "source": "Q128452",
                "target": "Q122157265"
            },
            {
                "label": "performer",
                "source": "Q186422",
                "target": "Q129591"
            },
            {
                "label": "creator",
                "source": "Q186422",
                "target": "Q1872439"
            },
            {
                "label": "characters",
                "source": "Q102180106",
                "target": "Q186422"
            },
            {
                "label": "present_in_work",
                "source": "Q186422",
                "target": "Q102180106"
            },
            {
                "label": "performer",
                "source": "Q186422",
                "target": "Q1872439"
            },
            {
                "label": "performer",
                "source": "Q838076",
                "target": "Q16296"
            },
            {
                "label": "work_period__start_",
                "source": "Q42040",
                "target": "Q2430"
            },
            {
                "label": "notable_work",
                "source": "Q1872439",
                "target": "Q186422"
            },
            {
                "label": "member_of",
                "source": "Q186422",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q186422"
            },
            {
                "label": "distributed_by",
                "source": "Q128452",
                "target": "Q54958752"
            },
            {
                "label": "performer",
                "source": "Q19347291",
                "target": "Q129591"
            },
            {
                "label": "present_in_work",
                "source": "Q122157265",
                "target": "Q465501"
            },
            {
                "label": "present_in_work",
                "source": "Q128452",
                "target": "Q642878"
            },
            {
                "label": "characters",
                "source": "Q465501",
                "target": "Q122157265"
            },
            {
                "label": "part_of",
                "source": "Q128452",
                "target": "Q642878"
            },
            {
                "label": "characters",
                "source": "Q45672",
                "target": "Q42519"
            },
            {
                "label": "part_of_the_series",
                "source": "Q111550418",
                "target": "Q128452"
            },
            {
                "label": "subsidiary",
                "source": "Q7414",
                "target": "Q434841"
            },
            {
                "label": "present_in_work",
                "source": "Q42519",
                "target": "Q45672"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q111550418"
            },
            {
                "label": "parent_organization",
                "source": "Q434841",
                "target": "Q7414"
            },
            {
                "label": "publication_date",
                "source": "Q4985891",
                "target": "Q49622"
            },
            {
                "label": "owned_by",
                "source": "Q434841",
                "target": "Q7414"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q838076"
            },
            {
                "label": "member_of",
                "source": "Q838076",
                "target": "Q514974"
            },
            {
                "label": "followed_by",
                "source": "Q4985891",
                "target": "Q45672"
            },
            {
                "label": "present_in_work",
                "source": "Q186422",
                "target": "Q217552"
            },
            {
                "label": "follows",
                "source": "Q45672",
                "target": "Q4985891"
            },
            {
                "label": "publisher",
                "source": "Q122157265",
                "target": "Q173496"
            },
            {
                "label": "has_part",
                "source": "Q514974",
                "target": "Q838076"
            },
            {
                "label": "publication_date",
                "source": "Q45672",
                "target": "Q2477"
            },
            {
                "label": "present_in_work",
                "source": "Q197491",
                "target": "Q111550418"
            },
            {
                "label": "member_of",
                "source": "Q197491",
                "target": "Q128452"
            },
            {
                "label": "part_of_the_series",
                "source": "Q4985891",
                "target": "Q128452"
            },
            {
                "label": "product_or_material_produced",
                "source": "Q4740856",
                "target": "Q1630304"
            },
            {
                "label": "characters",
                "source": "Q111550418",
                "target": "Q197491"
            },
            {
                "label": "member_of",
                "source": "Q19347291",
                "target": "Q128452"
            },
            {
                "label": "subsidiary",
                "source": "Q4740856",
                "target": "Q1630304"
            },
            {
                "label": "part_of_the_series",
                "source": "Q42040",
                "target": "Q128452"
            },
            {
                "label": "subsidiary",
                "source": "Q3884",
                "target": "Q108128745"
            },
            {
                "label": "member_of",
                "source": "Q3641739",
                "target": "Q128452"
            },
            {
                "label": "member_of",
                "source": "Q482657",
                "target": "Q128452"
            },
            {
                "label": "instance_of",
                "source": "Q3641739",
                "target": "Q3285695"
            },
            {
                "label": "parent_organization",
                "source": "Q108128745",
                "target": "Q3884"
            },
            {
                "label": "part_of_the_series",
                "source": "Q25431158",
                "target": "Q128452"
            },
            {
                "label": "cast_member",
                "source": "Q128452",
                "target": "Q129591"
            },
            {
                "label": "member_of",
                "source": "Q60349",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q3641739"
            },
            {
                "label": "member_of",
                "source": "Q28912376",
                "target": "Q128452"
            },
            {
                "label": "cast_member",
                "source": "Q217552",
                "target": "Q129591"
            },
            {
                "label": "owned_by",
                "source": "Q12577",
                "target": "Q186422"
            },
            {
                "label": "part_of_the",
                "source": "Q28912376",
                "target": "Q128452"
            },
            {
                "label": "member_of",
                "source": "Q24053263",
                "target": "Q128452"
            },
            {
                "label": "cast_member",
                "source": "Q128452",
                "target": "Q193659"
            },
            {
                "label": "cast_member",
                "source": "Q128452",
                "target": "Q57147"
            },
            {
                "label": "performer",
                "source": "Q81054",
                "target": "Q1033016"
            },
            {
                "label": "performer",
                "source": "Q5350072",
                "target": "Q190794"
            },
            {
                "label": "performer",
                "source": "Q128430",
                "target": "Q485901"
            },
            {
                "label": "cast_member",
                "source": "Q128452",
                "target": "Q240573"
            },
            {
                "label": "member_of",
                "source": "Q5350072",
                "target": "Q128452"
            },
            {
                "label": "performer",
                "source": "Q5350072",
                "target": "Q240573"
            },
            {
                "label": "performer",
                "source": "Q193659",
                "target": "Q57147"
            },
            {
                "label": "performer",
                "source": "Q840291",
                "target": "Q170510"
            },
            {
                "label": "present_in_work",
                "source": "Q2551564",
                "target": "Q219776"
            },
            {
                "label": "instance_of",
                "source": "Q8041469",
                "target": "Q725377"
            },
            {
                "label": "characters",
                "source": "Q219776",
                "target": "Q2551564"
            },
            {
                "label": "country",
                "source": "Q2422698",
                "target": "Q30"
            },
            {
                "label": "performer",
                "source": "Q207799",
                "target": "Q296822"
            },
            {
                "label": "country",
                "source": "Q4740856",
                "target": "Q30"
            },
            {
                "label": "performer",
                "source": "Q5350072",
                "target": "Q129591"
            },
            {
                "label": "performer",
                "source": "Q5350072",
                "target": "Q298368"
            },
            {
                "label": "country_of_origin",
                "source": "Q45672",
                "target": "Q30"
            },
            {
                "label": "performer",
                "source": "Q10441",
                "target": "Q190794"
            },
            {
                "label": "member_of",
                "source": "Q2551564",
                "target": "Q1570672"
            },
            {
                "label": "cast_member",
                "source": "Q1570672",
                "target": "Q129591"
            },
            {
                "label": "replaces",
                "source": "Q10441",
                "target": "Q5350072"
            },
            {
                "label": "performer",
                "source": "Q2551564",
                "target": "Q129591"
            },
            {
                "label": "performer",
                "source": "Q19347291",
                "target": "Q192682"
            },
            {
                "label": "publication_date",
                "source": "Q19347291",
                "target": "Q25245"
            },
            {
                "label": "present_in_work",
                "source": "Q155450",
                "target": "Q25431158"
            },
            {
                "label": "cast_member",
                "source": "Q111550418",
                "target": "Q193659"
            },
            {
                "label": "cast_member",
                "source": "Q111550418",
                "target": "Q57147"
            },
            {
                "label": "cast_member",
                "source": "Q111550418",
                "target": "Q3454165"
            },
            {
                "label": "characters",
                "source": "Q19347291",
                "target": "Q155450"
            },
            {
                "label": "present_in_work",
                "source": "Q838076",
                "target": "Q111550418"
            },
            {
                "label": "performer",
                "source": "Q838076",
                "target": "Q193659"
            },
            {
                "label": "present_in_work",
                "source": "Q840291",
                "target": "Q111550418"
            },
            {
                "label": "cast_member",
                "source": "Q25431158",
                "target": "Q192682"
            },
            {
                "label": "performer",
                "source": "Q840291",
                "target": "Q193659"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q482657"
            },
            {
                "label": "performer",
                "source": "Q840291",
                "target": "Q57147"
            },
            {
                "label": "cast_member",
                "source": "Q2109149",
                "target": "Q3454165"
            },
            {
                "label": "has_part",
                "source": "Q28912376",
                "target": "Q482657"
            },
            {
                "label": "cast_member",
                "source": "Q197491",
                "target": "Q129591"
            },
            {
                "label": "member_of",
                "source": "Q482657",
                "target": "Q28912376"
            },
            {
                "label": "cast_member",
                "source": "Q45672",
                "target": "Q129591"
            },
            {
                "label": "publication_date",
                "source": "Q102180106",
                "target": "Q69307241"
            },
            {
                "label": "cast_member",
                "source": "Q4985891",
                "target": "Q57147"
            },
            {
                "label": "performer",
                "source": "Q197491",
                "target": "Q192682"
            },
            {
                "label": "followed_by",
                "source": "Q4985891",
                "target": "Q42040"
            },
            {
                "label": "follows",
                "source": "Q42040",
                "target": "Q4985891"
            },
            {
                "label": "cast_member",
                "source": "Q482657",
                "target": "Q336788"
            },
            {
                "label": "performer",
                "source": "Q188447",
                "target": "Q41396"
            },
            {
                "label": "present_in_work",
                "source": "Q1467960",
                "target": "Q23572"
            },
            {
                "label": "characters",
                "source": "Q23572",
                "target": "Q1467960"
            },
            {
                "label": "member_of",
                "source": "Q188447",
                "target": "Q938034"
            },
            {
                "label": "has_part",
                "source": "Q938034",
                "target": "Q188447"
            },
            {
                "label": "cast_member",
                "source": "Q23572",
                "target": "Q234363"
            },
            {
                "label": "performer",
                "source": "Q155904",
                "target": "Q234363"
            },
            {
                "label": "cast_member",
                "source": "Q28912376",
                "target": "Q234363"
            },
            {
                "label": "performer",
                "source": "Q840291",
                "target": "Q20882479"
            },
            {
                "label": "performer",
                "source": "Q840291",
                "target": "Q20974088"
            },
            {
                "label": "member_of",
                "source": "Q20882479",
                "target": "Q840291"
            },
            {
                "label": "followed_by",
                "source": "Q111550418",
                "target": "Q4985891"
            },
            {
                "label": "follows",
                "source": "Q4985891",
                "target": "Q111550418"
            },
            {
                "label": "characters",
                "source": "Q217552",
                "target": "Q186422"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q4985891"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q217552"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q60349"
            },
            {
                "label": "part_of",
                "source": "Q111550418",
                "target": "Q128452"
            },
            {
                "label": "part_of",
                "source": "Q4985891",
                "target": "Q128452"
            },
            {
                "label": "part_of",
                "source": "Q217552",
                "target": "Q128452"
            },
            {
                "label": "part_of",
                "source": "Q42040",
                "target": "Q128452"
            },
            {
                "label": "part_of",
                "source": "Q60349",
                "target": "Q128452"
            },
            {
                "label": "present_in_work",
                "source": "Q128452",
                "target": "Q4985891"
            },
            {
                "label": "performer",
                "source": "Q737236",
                "target": "Q189490"
            },
            {
                "label": "performer",
                "source": "Q197491",
                "target": "Q129591"
            },
            {
                "label": "part_of",
                "source": "Q111550418",
                "target": "Q2325666"
            },
            {
                "label": "publication_date",
                "source": "Q197491",
                "target": "Q1998"
            },
            {
                "label": "publication_date",
                "source": "Q111550418",
                "target": "Q2764"
            },
            {
                "label": "work_period__start_",
                "source": "Q60349",
                "target": "Q2060"
            },
            {
                "label": "performer",
                "source": "Q482657",
                "target": "Q129591"
            },
            {
                "label": "cast_member",
                "source": "Q482657",
                "target": "Q129591"
            },
            {
                "label": "performer",
                "source": "Q32907",
                "target": "Q26997611"
            },
            {
                "label": "present_in_work",
                "source": "Q188447",
                "target": "Q25431158"
            },
            {
                "label": "cast_member",
                "source": "Q25431158",
                "target": "Q41396"
            },
            {
                "label": "characters",
                "source": "Q25431158",
                "target": "Q188447"
            },
            {
                "label": "parent_organization",
                "source": "Q166419",
                "target": "Q7414"
            },
            {
                "label": "subsidiary",
                "source": "Q7414",
                "target": "Q166419"
            },
            {
                "label": "publication_date",
                "source": "Q102180106",
                "target": "Q49619"
            },
            {
                "label": "production_company",
                "source": "Q152098",
                "target": "Q166419"
            },
            {
                "label": "based_on",
                "source": "Q29018745",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q163323"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q29018745"
            },
            {
                "label": "publisher",
                "source": "Q128452",
                "target": "Q537911"
            },
            {
                "label": "producer",
                "source": "Q42040",
                "target": "Q219507"
            },
            {
                "label": "residence",
                "source": "Q42040",
                "target": "Q83339241"
            },
            {
                "label": "instance_of",
                "source": "Q125243445",
                "target": "Q1259759"
            },
            {
                "label": "characters",
                "source": "Q104844963",
                "target": "Q42040"
            },
            {
                "label": "instance_of",
                "source": "Q42040",
                "target": "Q6498903"
            },
            {
                "label": "present_in_work",
                "source": "Q42040",
                "target": "Q104844963"
            },
            {
                "label": "spouse",
                "source": "Q42040",
                "target": "Q9184"
            },
            {
                "label": "cast_member",
                "source": "Q4985891",
                "target": "Q220751"
            },
            {
                "label": "spouse",
                "source": "Q9184",
                "target": "Q42040"
            },
            {
                "label": "creator",
                "source": "Q128452",
                "target": "Q181900"
            },
            {
                "label": "cast_member",
                "source": "Q111550418",
                "target": "Q219507"
            },
            {
                "label": "creator",
                "source": "Q128452",
                "target": "Q311607"
            },
            {
                "label": "cast_member",
                "source": "Q4985891",
                "target": "Q219507"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q19347291"
            },
            {
                "label": "has_part",
                "source": "Q111550418",
                "target": "Q21452185"
            },
            {
                "label": "member_of",
                "source": "Q208544",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q111550418",
                "target": "Q21487442"
            },
            {
                "label": "notable_work",
                "source": "Q181900",
                "target": "Q128452"
            },
            {
                "label": "present_in_work",
                "source": "Q208544",
                "target": "Q102180106"
            },
            {
                "label": "notable_work",
                "source": "Q311607",
                "target": "Q128452"
            },
            {
                "label": "editor",
                "source": "Q2712629",
                "target": "Q3530664"
            },
            {
                "label": "member_of",
                "source": "Q21452185",
                "target": "Q111550418"
            },
            {
                "label": "member_of",
                "source": "Q13634866",
                "target": "Q23732596"
            },
            {
                "label": "publication_date",
                "source": "Q109558622",
                "target": "Q69307190"
            },
            {
                "label": "member_of",
                "source": "Q21487442",
                "target": "Q111550418"
            },
            {
                "label": "ethnic_group",
                "source": "Q13634866",
                "target": "Q23732596"
            },
            {
                "label": "has_effect",
                "source": "Q4",
                "target": "Q81938"
            },
            {
                "label": "notable_work",
                "source": "Q129591",
                "target": "Q186422"
            },
            {
                "label": "characters",
                "source": "Q118948414",
                "target": "Q42040"
            },
            {
                "label": "present_in_work",
                "source": "Q302186",
                "target": "Q1079"
            },
            {
                "label": "performer",
                "source": "Q188760",
                "target": "Q41422"
            },
            {
                "label": "member_of",
                "source": "Q302186",
                "target": "Q938034"
            },
            {
                "label": "notable_work",
                "source": "Q41422",
                "target": "Q188760"
            },
            {
                "label": "publication_date",
                "source": "Q482657",
                "target": "Q12803"
            },
            {
                "label": "instance_of",
                "source": "Q302534",
                "target": "Q3285695"
            },
            {
                "label": "production_company",
                "source": "Q28912376",
                "target": "Q434841"
            },
            {
                "label": "sibling",
                "source": "Q60002",
                "target": "Q2420335"
            },
            {
                "label": "publication_date",
                "source": "Q28912376",
                "target": "Q25337"
            },
            {
                "label": "sibling",
                "source": "Q2420335",
                "target": "Q60002"
            },
            {
                "label": "relative",
                "source": "Q60002",
                "target": "Q2420335"
            },
            {
                "label": "production_company",
                "source": "Q28912376",
                "target": "Q367466"
            },
            {
                "label": "has_part",
                "source": "Q938034",
                "target": "Q302534"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q81651"
            },
            {
                "label": "part_of_the_series",
                "source": "Q81651",
                "target": "Q128452"
            },
            {
                "label": "start_time",
                "source": "Q187880",
                "target": "Q25274"
            },
            {
                "label": "member_of",
                "source": "Q161714",
                "target": "Q132"
            },
            {
                "label": "subclass_of",
                "source": "Q161714",
                "target": "Q132"
            },
            {
                "label": "member_of",
                "source": "Q258015",
                "target": "Q128452"
            },
            {
                "label": "part_of_the_series",
                "source": "Q81651",
                "target": "Q32566"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q258015"
            },
            {
                "label": "country",
                "source": "Q54958752",
                "target": "Q408"
            },
            {
                "label": "spouse",
                "source": "Q1681822",
                "target": "Q258015"
            },
            {
                "label": "spouse",
                "source": "Q258015",
                "target": "Q1681822"
            },
            {
                "label": "country",
                "source": "Q54958752",
                "target": "Q145"
            },
            {
                "label": "present_in_work",
                "source": "Q1681822",
                "target": "Q258015"
            },
            {
                "label": "country_of_origin",
                "source": "Q54958752",
                "target": "Q145"
            },
            {
                "label": "characters",
                "source": "Q258015",
                "target": "Q1681822"
            },
            {
                "label": "production_company",
                "source": "Q4985891",
                "target": "Q434841"
            },
            {
                "label": "publication_date",
                "source": "Q4985891",
                "target": "Q1999"
            },
            {
                "label": "distributed_by",
                "source": "Q4985891",
                "target": "Q434841"
            },
            {
                "label": "publication_date",
                "source": "Q330946",
                "target": "Q2089"
            },
            {
                "label": "number_of_episodes",
                "source": "Q28912376",
                "target": "Q36977"
            },
            {
                "label": "creator",
                "source": "Q186422",
                "target": "Q47163260"
            },
            {
                "label": "part_of_the_series",
                "source": "Q163323",
                "target": "Q5870724"
            },
            {
                "label": "part_of_the_series",
                "source": "Q29018745",
                "target": "Q5870724"
            },
            {
                "label": "part_of_the_series",
                "source": "Q163323",
                "target": "Q128452"
            },
            {
                "label": "main_subject",
                "source": "Q197491",
                "target": "Q362"
            },
            {
                "label": "part_of_the_series",
                "source": "Q29018745",
                "target": "Q128452"
            },
            {
                "label": "followed_by",
                "source": "Q19347291",
                "target": "Q186422"
            },
            {
                "label": "production_company",
                "source": "Q111550418",
                "target": "Q434841"
            },
            {
                "label": "follows",
                "source": "Q186422",
                "target": "Q19347291"
            },
            {
                "label": "distributed_by",
                "source": "Q111550418",
                "target": "Q434841"
            },
            {
                "label": "work_period__start_",
                "source": "Q5350072",
                "target": "Q2764"
            },
            {
                "label": "significant_event",
                "source": "Q5350072",
                "target": "Q60349"
            },
            {
                "label": "owned_by",
                "source": "Q1195566",
                "target": "Q186422"
            },
            {
                "label": "owner_of",
                "source": "Q186422",
                "target": "Q1195566"
            },
            {
                "label": "publication_date",
                "source": "Q57317071",
                "target": "Q1985"
            },
            {
                "label": "publication_date",
                "source": "Q17042878",
                "target": "Q2434"
            },
            {
                "label": "publication_date",
                "source": "Q128452",
                "target": "Q1985"
            },
            {
                "label": "part_of_the_series",
                "source": "Q217552",
                "target": "Q128452"
            },
            {
                "label": "spouse",
                "source": "Q838076",
                "target": "Q5350072"
            },
            {
                "label": "spouse",
                "source": "Q840291",
                "target": "Q5350072"
            },
            {
                "label": "part_of_the_series",
                "source": "Q60349",
                "target": "Q128452"
            },
            {
                "label": "characters",
                "source": "Q197491",
                "target": "Q5350072"
            },
            {
                "label": "occupation",
                "source": "Q3641739",
                "target": "Q901"
            },
            {
                "label": "present_in_work",
                "source": "Q838076",
                "target": "Q197491"
            },
            {
                "label": "present_in_work",
                "source": "Q840291",
                "target": "Q197491"
            },
            {
                "label": "instance_of",
                "source": "Q186422",
                "target": "Q3285695"
            },
            {
                "label": "production_company",
                "source": "Q128452",
                "target": "Q434841"
            },
            {
                "label": "start_time",
                "source": "Q128452",
                "target": "Q2070"
            },
            {
                "label": "characters",
                "source": "Q42040",
                "target": "Q302534"
            },
            {
                "label": "publication_date",
                "source": "Q128452",
                "target": "Q2070"
            },
            {
                "label": "present_in_work",
                "source": "Q302534",
                "target": "Q42040"
            },
            {
                "label": "publication_date",
                "source": "Q1990905",
                "target": "Q1996"
            },
            {
                "label": "start_time",
                "source": "Q1990905",
                "target": "Q1996"
            },
            {
                "label": "performer",
                "source": "Q302186",
                "target": "Q196560"
            },
            {
                "label": "publication_date",
                "source": "Q4985891",
                "target": "Q2477"
            },
            {
                "label": "characters",
                "source": "Q19347291",
                "target": "Q186422"
            },
            {
                "label": "cast_member",
                "source": "Q89474225",
                "target": "Q15208946"
            },
            {
                "label": "cast_member",
                "source": "Q89474225",
                "target": "Q196560"
            },
            {
                "label": "publication_date",
                "source": "Q42040",
                "target": "Q2434"
            },
            {
                "label": "publication_date",
                "source": "Q60349",
                "target": "Q2060"
            },
            {
                "label": "member_of",
                "source": "Q197491",
                "target": "Q28912376"
            },
            {
                "label": "has_part",
                "source": "Q28912376",
                "target": "Q197491"
            },
            {
                "label": "has_part",
                "source": "Q28912376",
                "target": "Q840291"
            },
            {
                "label": "member_of",
                "source": "Q840291",
                "target": "Q28912376"
            },
            {
                "label": "start_time",
                "source": "Q4985891",
                "target": "Q2477"
            },
            {
                "label": "present_in_work",
                "source": "Q5350072",
                "target": "Q4985891"
            },
            {
                "label": "present_in_work",
                "source": "Q5350072",
                "target": "Q221168"
            },
            {
                "label": "characters",
                "source": "Q4985891",
                "target": "Q5350072"
            },
            {
                "label": "present_in_work",
                "source": "Q5350072",
                "target": "Q60349"
            },
            {
                "label": "characters",
                "source": "Q4985891",
                "target": "Q128430"
            },
            {
                "label": "cast_member",
                "source": "Q4985891",
                "target": "Q485901"
            },
            {
                "label": "cast_member",
                "source": "Q4985891",
                "target": "Q190794"
            },
            {
                "label": "present_in_work",
                "source": "Q128430",
                "target": "Q4985891"
            },
            {
                "label": "performer",
                "source": "Q5350072",
                "target": "Q485901"
            },
            {
                "label": "characters",
                "source": "Q4985891",
                "target": "Q482657"
            },
            {
                "label": "present_in_work",
                "source": "Q482657",
                "target": "Q4985891"
            },
            {
                "label": "has_part",
                "source": "Q128430",
                "target": "Q5350072"
            },
            {
                "label": "has_part",
                "source": "Q28912376",
                "target": "Q163323"
            },
            {
                "label": "member_of",
                "source": "Q163323",
                "target": "Q28912376"
            },
            {
                "label": "different_from",
                "source": "Q29018745",
                "target": "Q163323"
            },
            {
                "label": "distributed_by",
                "source": "Q28912376",
                "target": "Q54958752"
            },
            {
                "label": "production_company",
                "source": "Q19347291",
                "target": "Q166419"
            },
            {
                "label": "production_company",
                "source": "Q197491",
                "target": "Q166419"
            },
            {
                "label": "original_broadcaster",
                "source": "Q128452",
                "target": "Q2422698"
            },
            {
                "label": "production_company",
                "source": "Q217552",
                "target": "Q434841"
            },
            {
                "label": "owner_of",
                "source": "Q7414",
                "target": "Q434841"
            },
            {
                "label": "production_company",
                "source": "Q45672",
                "target": "Q434841"
            },
            {
                "label": "employer",
                "source": "Q129591",
                "target": "Q434841"
            },
            {
                "label": "production_company",
                "source": "Q197491",
                "target": "Q434841"
            },
            {
                "label": "production_company",
                "source": "Q186422",
                "target": "Q434841"
            },
            {
                "label": "present_in_work",
                "source": "Q186422",
                "target": "Q45672"
            },
            {
                "label": "author",
                "source": "Q45672",
                "target": "Q631369"
            },
            {
                "label": "member_of",
                "source": "Q840291",
                "target": "Q128452"
            },
            {
                "label": "has_part",
                "source": "Q128452",
                "target": "Q840291"
            },
            {
                "label": "followed_by",
                "source": "Q42040",
                "target": "Q60349"
            },
            {
                "label": "follows",
                "source": "Q60349",
                "target": "Q42040"
            },
            {
                "label": "point_in_time",
                "source": "Q19347291",
                "target": "Q25245"
            },
            {
                "label": "publication_date",
                "source": "Q28912376",
                "target": "Q25245"
            },
            {
                "label": "instance_of",
                "source": "Q613067",
                "target": "Q3285695"
            },
            {
                "label": "creator",
                "source": "Q28912376",
                "target": "Q515161"
            },
            {
                "label": "employer",
                "source": "Q515161",
                "target": "Q367466"
            },
            {
                "label": "cast_member",
                "source": "Q89474225",
                "target": "Q3320731"
            },
            {
                "label": "present_in_work",
                "source": "Q3320731",
                "target": "Q89474225"
            },
            {
                "label": "original_broadcaster",
                "source": "Q109558622",
                "target": "Q76301153"
            },
            {
                "label": "genre",
                "source": "Q4985891",
                "target": "Q1535153"
            },
            {
                "label": "distributed_by",
                "source": "Q28912376",
                "target": "Q434841"
            },
            {
                "label": "present_in_work",
                "source": "Q2071301",
                "target": "Q11679"
            },
            {
                "label": "after_a_work_by",
                "source": "Q11679",
                "target": "Q228624"
            },
            {
                "label": "creator",
                "source": "Q2071301",
                "target": "Q228624"
            },
            {
                "label": "performer",
                "source": "Q14429969",
                "target": "Q105887530"
            },
            {
                "label": "performer",
                "source": "Q2071301",
                "target": "Q189490"
            },
            {
                "label": "present_in_work",
                "source": "Q14429969",
                "target": "Q96377121"
            },
            {
                "label": "performer",
                "source": "Q14429969",
                "target": "Q61693947"
            },
            {
                "label": "has_part",
                "source": "Q5775696",
                "target": "Q105887530"
            },
            {
                "label": "mother",
                "source": "Q2071301",
                "target": "Q13138161"
            },
            {
                "label": "based_on",
                "source": "Q96377121",
                "target": "Q11679"
            },
            {
                "label": "performer",
                "source": "Q114529307",
                "target": "Q5775696"
            },
            {
                "label": "characters",
                "source": "Q11679",
                "target": "Q2071301"
            },
            {
                "label": "cast_member",
                "source": "Q203994",
                "target": "Q59248250"
            },
            {
                "label": "followed_by",
                "source": "Q11679",
                "target": "Q96377121"
            },
            {
                "label": "cast_member",
                "source": "Q11679",
                "target": "Q228624"
            },
            {
                "label": "author",
                "source": "Q11679",
                "target": "Q228624"
            },
            {
                "label": "relative",
                "source": "Q2071301",
                "target": "Q13138161"
            },
            {
                "label": "director",
                "source": "Q11679",
                "target": "Q561387"
            },
            {
                "label": "notable_work",
                "source": "Q228624",
                "target": "Q11679"
            },
            {
                "label": "producer",
                "source": "Q11679",
                "target": "Q3341932"
            },
            {
                "label": "performer",
                "source": "Q203994",
                "target": "Q63243883"
            },
            {
                "label": "spouse",
                "source": "Q189490",
                "target": "Q228624"
            },
            {
                "label": "cast_member",
                "source": "Q203994",
                "target": "Q63243883"
            },
            {
                "label": "spouse",
                "source": "Q228624",
                "target": "Q189490"
            },
            {
                "label": "performer",
                "source": "Q1412141",
                "target": "Q61693947"
            },
            {
                "label": "cast_member",
                "source": "Q11679",
                "target": "Q189490"
            },
            {
                "label": "performer",
                "source": "Q123313708",
                "target": "Q63243883"
            },
            {
                "label": "opposite_of",
                "source": "Q290691",
                "target": "Q245204"
            },
            {
                "label": "spouse",
                "source": "Q14429969",
                "target": "Q1412141"
            },
            {
                "label": "opposite_of",
                "source": "Q245204",
                "target": "Q290691"
            },
            {
                "label": "notable_work",
                "source": "Q189490",
                "target": "Q11679"
            },
            {
                "label": "spouse",
                "source": "Q1412141",
                "target": "Q14429969"
            },
            {
                "label": "creator",
                "source": "Q157652",
                "target": "Q228624"
            },
            {
                "label": "performer",
                "source": "Q157652",
                "target": "Q189490"
            },
            {
                "label": "performer",
                "source": "Q124685159",
                "target": "Q310937"
            },
            {
                "label": "creator",
                "source": "Q11679",
                "target": "Q228624"
            },
            {
                "label": "cast_member",
                "source": "Q11679",
                "target": "Q310937"
            },
            {
                "label": "notable_work",
                "source": "Q457881",
                "target": "Q92640"
            },
            {
                "label": "part_of_the_series",
                "source": "Q66474024",
                "target": "Q11679"
            },
            {
                "label": "distributed_by",
                "source": "Q11679",
                "target": "Q515869"
            },
            {
                "label": "present_in_work",
                "source": "Q157652",
                "target": "Q116845"
            },
            {
                "label": "author",
                "source": "Q92640",
                "target": "Q457881"
            },
            {
                "label": "part_of_the_series",
                "source": "Q66474025",
                "target": "Q11679"
            },
            {
                "label": "production_company",
                "source": "Q11679",
                "target": "Q515869"
            },
            {
                "label": "present_in_work",
                "source": "Q21731652",
                "target": "Q11679"
            },
            {
                "label": "original_broadcaster",
                "source": "Q116845",
                "target": "Q767728"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q66474024"
            },
            {
                "label": "cast_member",
                "source": "Q28136257",
                "target": "Q189490"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q66474025"
            },
            {
                "label": "creator",
                "source": "Q92640",
                "target": "Q457881"
            },
            {
                "label": "part_of",
                "source": "Q66474024",
                "target": "Q11679"
            },
            {
                "label": "publisher",
                "source": "Q11679",
                "target": "Q1155729"
            },
            {
                "label": "characters",
                "source": "Q116845",
                "target": "Q157652"
            },
            {
                "label": "part_of",
                "source": "Q66474025",
                "target": "Q11679"
            },
            {
                "label": "followed_by",
                "source": "Q66474024",
                "target": "Q66474025"
            },
            {
                "label": "ranking",
                "source": "Q105887530",
                "target": "Q201"
            },
            {
                "label": "cast_member",
                "source": "Q28136257",
                "target": "Q310937"
            },
            {
                "label": "ranking",
                "source": "Q61693947",
                "target": "Q201"
            },
            {
                "label": "cast_member",
                "source": "Q28136257",
                "target": "Q313705"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q837140"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q105887530"
            },
            {
                "label": "cast_member",
                "source": "Q36963",
                "target": "Q105887530"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q40354"
            },
            {
                "label": "cast_member",
                "source": "Q33127647",
                "target": "Q103784"
            },
            {
                "label": "cast_member",
                "source": "Q36963",
                "target": "Q61693947"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q96377121"
            },
            {
                "label": "spouse",
                "source": "Q189490",
                "target": "Q217004"
            },
            {
                "label": "part_of_the_series",
                "source": "Q837140",
                "target": "Q11679"
            },
            {
                "label": "spouse",
                "source": "Q217004",
                "target": "Q189490"
            },
            {
                "label": "part_of_the_series",
                "source": "Q40354",
                "target": "Q11679"
            },
            {
                "label": "cast_member",
                "source": "Q273704",
                "target": "Q61693947"
            },
            {
                "label": "part_of_the_series",
                "source": "Q96377121",
                "target": "Q11679"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q313705"
            },
            {
                "label": "cast_member",
                "source": "Q11679",
                "target": "Q217004"
            },
            {
                "label": "director",
                "source": "Q273704",
                "target": "Q8877"
            },
            {
                "label": "performer",
                "source": "Q14429969",
                "target": "Q310937"
            },
            {
                "label": "cast_member",
                "source": "Q273704",
                "target": "Q189490"
            },
            {
                "label": "performer",
                "source": "Q14429969",
                "target": "Q229181"
            },
            {
                "label": "performer",
                "source": "Q14429969",
                "target": "Q313705"
            },
            {
                "label": "performer",
                "source": "Q3087886",
                "target": "Q110703949"
            },
            {
                "label": "based_on",
                "source": "Q11679",
                "target": "Q571"
            },
            {
                "label": "performer",
                "source": "Q156907",
                "target": "Q78126227"
            },
            {
                "label": "derivative_work",
                "source": "Q571",
                "target": "Q11679"
            },
            {
                "label": "residence",
                "source": "Q124150398",
                "target": "Q5775696"
            },
            {
                "label": "performer",
                "source": "Q171446",
                "target": "Q107029844"
            },
            {
                "label": "based_on",
                "source": "Q11424",
                "target": "Q11679"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q16227466"
            },
            {
                "label": "spouse",
                "source": "Q105887530",
                "target": "Q189490"
            },
            {
                "label": "instance_of",
                "source": "Q47715",
                "target": "Q12131"
            },
            {
                "label": "spouse",
                "source": "Q189490",
                "target": "Q105887530"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q107029844"
            },
            {
                "label": "followed_by",
                "source": "Q28469784",
                "target": "Q14136446"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q61693947"
            },
            {
                "label": "part_of_the_series",
                "source": "Q28469784",
                "target": "Q11679"
            },
            {
                "label": "part_of_the_series",
                "source": "Q14136446",
                "target": "Q11679"
            },
            {
                "label": "spouse",
                "source": "Q105887530",
                "target": "Q61693947"
            },
            {
                "label": "follows",
                "source": "Q14136446",
                "target": "Q28469784"
            },
            {
                "label": "spouse",
                "source": "Q61693947",
                "target": "Q105887530"
            },
            {
                "label": "capital",
                "source": "Q183",
                "target": "Q64"
            },
            {
                "label": "instance_of",
                "source": "Q11679",
                "target": "Q196600"
            },
            {
                "label": "capital_of",
                "source": "Q64",
                "target": "Q183"
            },
            {
                "label": "director",
                "source": "Q10307713",
                "target": "Q105887530"
            },
            {
                "label": "cast_member",
                "source": "Q10307713",
                "target": "Q105887530"
            },
            {
                "label": "notable_work",
                "source": "Q109440760",
                "target": "Q10307713"
            },
            {
                "label": "located_in_the_administrative_territorial_entity",
                "source": "Q1122565",
                "target": "Q65"
            },
            {
                "label": "cast_member",
                "source": "Q11679",
                "target": "Q61693947"
            },
            {
                "label": "instance_of",
                "source": "Q96377121",
                "target": "Q220499"
            },
            {
                "label": "distributed_by",
                "source": "Q96377121",
                "target": "Q907311"
            },
            {
                "label": "distributed_by",
                "source": "Q96377121",
                "target": "Q220499"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q132537"
            },
            {
                "label": "publication_date",
                "source": "Q96377121",
                "target": "Q25290"
            },
            {
                "label": "country",
                "source": "Q1861",
                "target": "Q869"
            },
            {
                "label": "publication_date",
                "source": "Q10307713",
                "target": "Q2002"
            },
            {
                "label": "contains_administrative_territorial_entity",
                "source": "Q869",
                "target": "Q1861"
            },
            {
                "label": "capital",
                "source": "Q869",
                "target": "Q1861"
            },
            {
                "label": "present_in_work",
                "source": "Q14429969",
                "target": "Q11679"
            },
            {
                "label": "author",
                "source": "Q11679",
                "target": "Q734207"
            },
            {
                "label": "characters",
                "source": "Q81413",
                "target": "Q2071301"
            },
            {
                "label": "present_in_work",
                "source": "Q2071301",
                "target": "Q81413"
            },
            {
                "label": "has_part",
                "source": "Q11679",
                "target": "Q81413"
            },
            {
                "label": "part_of_the_series",
                "source": "Q81413",
                "target": "Q11679"
            },
            {
                "label": "cast_member",
                "source": "Q96377121",
                "target": "Q561387"
            },
            {
                "label": "performer",
                "source": "Q35591",
                "target": "Q59248250"
            },
            {
                "label": "performer",
                "source": "Q35591",
                "target": "Q237579"
            },
            {
                "label": "present_in_work",
                "source": "Q123705",
                "target": "Q11679"
            },
            {
                "label": "country_of_citizenship",
                "source": "Q96377121",
                "target": "Q7318"
            },
            {
                "label": "present_in_work",
                "source": "Q96377121",
                "target": "Q11679"
            },
            {
                "label": "narrative_location",
                "source": "Q11679",
                "target": "Q123705"
            },
            {
                "label": "characters",
                "source": "Q11679",
                "target": "Q96377121"
            },
            {
                "label": "author",
                "source": "Q11679",
                "target": "Q65833974"
            },
            {
                "label": "point_in_time",
                "source": "Q15361747",
                "target": "Q1990"
            },
            {
                "label": "creator",
                "source": "Q64009874",
                "target": "Q61693947"
            },
            {
                "label": "author",
                "source": "Q64009874",
                "target": "Q61693947"
            },
            {
                "label": "original_broadcaster",
                "source": "Q11679",
                "target": "Q907311"
            },
            {
                "label": "screenwriter",
                "source": "Q64009874",
                "target": "Q61693947"
            },
            {
                "label": "instance_of",
                "source": "Q907311",
                "target": "Q829548"
            },
            {
                "label": "cast_member",
                "source": "Q124687593",
                "target": "Q313705"
            },
            {
                "label": "distributed_by",
                "source": "Q11679",
                "target": "Q907311"
            },
            {
                "label": "followed_by",
                "source": "Q277633",
                "target": "Q1987589"
            },
            {
                "label": "performer",
                "source": "Q124687593",
                "target": "Q313705"
            },
            {
                "label": "director",
                "source": "Q108086029",
                "target": "Q223687"
            },
            {
                "label": "creator",
                "source": "Q124687593",
                "target": "Q313705"
            },
            {
                "label": "notable_work",
                "source": "Q223687",
                "target": "Q108086029"
            },
            {
                "label": "occupation",
                "source": "Q463126",
                "target": "Q39809"
            },
            {
                "label": "instance_of",
                "source": "Q463126",
                "target": "Q678345"
            },
            {
                "label": "notable_work",
                "source": "Q692",
                "target": "Q463126"
            },
            {
                "label": "author",
                "source": "Q463126",
                "target": "Q692"
            },
            {
                "label": "distributed_by",
                "source": "Q96377121",
                "target": "Q515869"
            },
            {
                "label": "genre",
                "source": "Q11679",
                "target": "Q1233720"
            },
            {
                "label": "instance_of",
                "source": "Q11679",
                "target": "Q1987792"
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
    get_all_graph();
});