  
   var results_data = [
    {"label": "Successful", "value": 95, "colorscale": "#00819f"},  
    {"label": "Invalid Patient ID", "value": 4, "colorscale": "#ff8100"}, 
    {"label": "Test Failed", "value": 3, "colorscale": "#ffa038"},
    {"label": "Repeat Test", "value": 6, "colorscale": "#c1782b"},
    {"label": "Out of Range", "value": 5, "colorscale": "#5cb8cf"},
    {"label": "Other", "value": 1, "colorscale": "#9f9fa0"}
];
   
    var results_data2 = [
    {"label": "Successful", "value": 900, "colorscale": "#00819f"},  
    {"label": "Invalid Patient ID", "value": 60, "colorscale": "#ff8100"}, 
    {"label": "Test Failed", "value": 40, "colorscale": "#ffa038"},
    {"label": "Repeat Test", "value": 80, "colorscale": "#c1782b"},
    {"label": "Out of Range", "value": 50, "colorscale": "#5cb8cf"},
    {"label": "Other", "value": 40, "colorscale": "#9f9fa0"}
];
    
   var results_data3 = [
    {"label": "Successful", "value": 6000, "colorscale": "#00819f"},  
    {"label": "Invalid Patient ID", "value": 600, "colorscale": "#ff8100"}, 
    {"label": "Test Failed", "value": 1200, "colorscale": "#ffa038"},
    {"label": "Repeat Test", "value": 1800, "colorscale": "#c1782b"},
    {"label": "Out of Range", "value": 500, "colorscale": "#5cb8cf"},
    {"label": "Other", "value": 100, "colorscale": "#9f9fa0"}
]; 
   
   var t_w = 275,
    t_h = 275,
    t_r = Math.min(t_w, t_h) / 2,
    labelr = t_r + 10,
    donut = d3.layout.pie().sort(null),
    arc = d3.svg.arc().innerRadius(t_r * .6).outerRadius(t_r);
      

function resultsToday ( results_data , t_w , t_h , t_r ){
 
var results_wrapper = d3.select("#results-graph");

var results_group = results_wrapper.append("svg:svg")
      .attr("width", 600)
      .attr("height", 350)
      .attr("x" , 0)
      .attr("y" , 0);
      
 var results_viz = results_group.append("svg:svg")
    .data([results_data])
    .attr("width", t_w + 200)
    .attr("height", t_h + 200)
    .attr("x" , 0)
    .attr("y" , 0)
    .attr("class" , "thepie");

var results_arcs = results_viz.selectAll("g.arc")
    .data(donut.value(function(d) { return d.value }))
    .enter().append("svg:g")
    .attr("class", "arc")
    .attr("transform", "translate(" + (t_r + 30) + "," + t_r + ")");

    results_arcs.append("svg:path")
    .attr("fill", function(d, i) { return d.data.colorscale; })
    .attr("d", arc);
    


/////////////// LEGEND //////////////////////////////// 

var key_viz = results_group.append("svg:svg")
    .data([results_data])
    .attr("width", t_w + 200)
    .attr("height", t_h + 200)
    .attr("x" , 325)
    .attr("y" , 40);
            
  key_viz.selectAll("rect")
    .data(results_data)
    .enter()
    .append("rect")
    .style("fill",function(d , i) { return d.colorscale; })
    .style("stroke-width" , 1)
    .attr("width" , 40)
    .attr("height" , 25)
    .attr("rx" , 3 )
    .attr("ry" , 3 )
    .attr("x" , 25 )
    .attr("y" , function(d , i) { return i * 30 ; });  
    
var key_count = results_group.append("svg:svg")
    .data([results_data])
    .attr("width", 400)
    .attr("height", 400)
    .attr("x" , 200)
    .attr("y" , 20);
 
   key_count.selectAll("text")
    .data(results_data)
    .enter()
    .append("text")
    .text(function(d , i) { return d.label; } )
    .attr("x" , 200)
    .attr("y" , function(d , i) { return i * 30 + 35 ; })
    .attr("class" , "key-text");
    
key_viz.selectAll("text")
    .data(results_data)
    .enter()
    .append("text")
    .text(function(d , i) { return d.value ; } )
    .attr("x" , 45 )
    .attr("y" , function(d , i) { return i * 30 + 17; })
    .attr("text-anchor" , "middle")
    .attr("class" , "key-count");
  
///////////////// INNER LABEL /////////////////////

 var innerLabels = results_viz.append("svg:g");
    
    innerLabels.append("svg:circle")
        .attr("cx", t_r + 30)
        .attr("cy", t_r )
        .attr("r", 60)
        .style("fill" , "#6898A3");
        
    innerLabels.append("svg:circle")
        .attr("cx", t_r + 30)
        .attr("cy", t_r )
        .attr("r", 60)
        .style("fill" , "none")
        .style("stroke" , "#cacccc")
        .style("stroke-width", 3);
    
    innerLabels.append("text")
        .attr("class" , "total-text-count")
        .attr("x" , t_r + 30 )
        .attr("y" , t_r)
        .text("2208")
        .attr("text-anchor" , "middle")
        .style("fill", "white")
        .style("font-size", "22px")
        .style("font-family" , "sans-serif");
    
    innerLabels.append("text")
        .attr("class" , "total-text-count")
        .attr("x" , t_r + 30 )
        .attr("y" , t_r + 20 )
        .text("tests")
        .attr("text-anchor" , "middle")
        .style("fill", "#cacccc")
        .style("font-size", "14")
        .style("font-family" , "sans-serif");
  
  }
  
  //////////////////////////////////////////////////////
  
  resultsToday( results_data , t_w , t_h , t_r );
  
  d3.select("#res-today").on("click", function() {
   $("#results-graph").html("");
   $("#res-week").removeClass('active')
   $("#res-month").removeClass('active')
   $(this).addClass('active')
  resultsToday( results_data , t_w , t_h , t_r );
});
 
 d3.select("#res-week").on("click", function() {
  $("#results-graph").html("");
  $("#res-today").removeClass('active')
  $("#res-month").removeClass('active')
  $(this).addClass('active')
  resultsToday( results_data2 , t_w , t_h , t_r )
});
 
 d3.select("#res-month").on("click", function() {
  $("#results-graph").html("");
  $("#res-today").removeClass('active')
  $("#res-week").removeClass('active')
  $(this).addClass('active')
  resultsToday( results_data3 , t_w , t_h , t_r )
});