The developed system is designed to build a knowledge graph based on news articles from Google News. Articles are searched by keywords, each article is checked for authenticity with the possibility of deleting "unreliable" articles. Before constructing the graph, the text is processed in order to reduce all referential identities to a single designation. The knowledge graph is built using the REBEL model, all found entities are checked using queries in wikipedia and wikidata. The data is stored in the Neo4j database with the possibility of visualization on the web.

The demo and detailed description will be posted later in the README and WIKI section of this repository.

The installation can currently be done through the git clone repository + the installation algorithm described in the Dockerfile (python version must be 3.7).
there is also an assembly for docker. For it, you need to make a git clone + docker-compose up. I warn you that building for Docker requires a lot of RAM (more than 8), otherwise the program's running time increases greatly. Detailed installation instructions will be posted later.

Here you can look at the visualization of an already constructed graph:
https://emptyfs.github.io/automatic-knowledge-graph-construction-with-visualization/

![image](https://github.com/emptyfs/automatic-knowledge-graph-construction-with-visualization/assets/54939750/63cac5b0-8123-44b0-9d2f-ae8452bfd6b9)

