var op_data = [
                    {"label" : "Certified" , "value" : 70 , "total" : 740},
                    {"label" : "Awaiting Certification" , "value" : 10 , "total" : 51},
                    {"label" : "Expiring" , "value" : 5 , "total" : 22},
                    {"label" : "Expired" , "value" : 0 , "total" : 0}
                   ];


function dashboard_operators ( op_data ) {
    
    var op_labels = d3.select("#operator-graph").append("div")
    .attr("class", "op-labels");
     
     op_labels.selectAll("div")
    .data(op_data)
    .enter().append("div")
    .style("width", function(d, i) { return d.value + "%"; })
    .style("min-width", "10px")
    .attr("class",  function(d, i) { return "op-s" + i; })  
    .text(function(d , i) { return d.label; });
    
    
    var op_chart = d3.select("#operator-graph").append("div")
    .attr("class", "op-chart");
    
    op_chart.selectAll("div")
     .data(op_data)
    .enter().append("div")
     .style("width", function(d , i) { return d.value + "%"; })
     .style("min-width", "10px")
     .attr("class",  function(d, i) { return "op-t" + i; })
     .text(function(d , i) { return d.total; })
 };
 
 dashboard_operators ( op_data );