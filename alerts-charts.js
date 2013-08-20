var alerts_data =
            [{"value": 140, "label": "Test Results" , "URL" : "pages/al-t.html"},
	    {"value": 20, "label": "Operators" , "URL" : "pages/al-o.html"},
	    {"value": 10, "label": "Devices" , "URL" : "pages/al-d.html"},
	    {"value": 15, "label": "QC" , "URL" : "pages/al-q.html"}
	    ];

function dashboard_alerts (alerts_data) {
       
var alerts_chart = d3.select("#alert-graph").append("svg")
    .attr("class", "alert-chart")
    .attr("width", 450)
    .attr("height", 65);

///////////// RECTANGLES  /////////////////// 
var bars_g = alerts_chart.selectAll("g.bars_g")
    .data(alerts_data)
    .enter().append("svg:g")
    .attr("class", "bars_g");
    
    bars_g.append("rect")
    .attr("x", function(d, i) { return i * 98; })
    .attr("width", 85)
    .attr("height", 27)
    .attr("rx", 7)
    .attr("ry", 7)
    .attr("transform" , "translate (42, 25)");
    
//////////////////  NAMES /////////////////////    
var labels_g = alerts_chart.selectAll("a")
    .data(alerts_data)
    .enter().append("a")
    .attr("xlink:href" , function(d) { return d.URL })
    .attr("class", "labels_g");
    
    
    labels_g.append("text")
    .attr("x", function(d, i) { return i * 105; })
    .attr("y", 50)
    .attr("transform" , "translate (50, -6)")
    .text(function(d) { return d.label });
    

///////////////// CIRCLES ////////////////////    
var circles_g =  alerts_chart.selectAll("g.circles_g")
    .data(alerts_data)
    .enter().append("svg:g")
    .attr("class", "circles_g");
    
    
    circles_g.append("circle")
    .attr("cx", function(d, i) { return i * 97; })
    .attr("cy", 98)
    .attr("r", 12)
    .attr("fill", "#AD1400")
    .attr("transform" , "translate (127, -75)");
 
 //////////////// ALERT COUNT ///////////////    
 var count_g = alerts_chart.selectAll("g.count_g")
    .data(alerts_data)
    .enter().append("svg:g")
    .attr("class", "count_g");
      
    count_g.append("text")
    .attr("x", function(d, i) { return i * 97; })
    .attr("y", 98)
    .attr("transform" , "translate (125, -72)")
    .attr("text-anchor" , "middle")
    .text(function(d) { return d.value });
    
    };

dashboard_alerts(alerts_data);
  