const height_DOM_graph = 700;
let graph;

class Graph
{
    constructor(graph) 
    {
        this.nodes = graph["nodes"];
        this.edges = graph["edges"];
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
    $.ajax(
        {
            url: '/get_all_graph',
            type: 'GET',
        }
    ).then(res=>
    {
        graph = new Graph(res);
        graph.draw_graph('View', Graph.init_data_nodes(graph.nodes), graph.edges, $('#container').width());
    });
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

    delete_button.click(() =>
    {
        $.ajax(
            {
                url: '/delete_all_graph',
                type: 'DELETE',
            }
        ).then(res => 
            {
            alert("the data has been deleted from the database");
            get_all_graph();
            });
    });

    $('#btn-main-page').click(() => 
    {
        window.location = '/';
    });

    $('#btn-import').click(() =>
    {
        import_graph();
    });

    $('#btn-export').click(() =>
    {
        window.location.href = "/export";
    });

    $('#btn-All-graph').click(() =>
    {
        get_all_graph();
    });

    save_button.click(() =>
    {if (graph.Nodes !== undefined)
        {
            $.ajax(
                {
                    url: '/save_graph',
                    type: 'POST',
                    data: JSON.stringify({"nodes": graph.Nodes, "edges": graph.Edges}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                }
            ).then(res=>
            {
                alert("the graph has been successfully saved to the database");
                get_all_graph();
            });
        }
    });
});