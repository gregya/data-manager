var dev_data = [{label: "Total Devices", value: 5000} , {label: "Not Downloaded", value: 90} , {label: "For Repair", value: 20}];


function dashboard_devices ( dev_data ) {

var width = 400;
var height = 40 * dev_data.length;
            
var aScale = d3.scale.linear()
            .domain([0, d3.max(dev_data, function(d) { return d.value; })])
            .rangeRound([0, width]);
            
//////////// BARS /////////////////////
var dev_chart = d3.select("#device-graph")
  .append("svg:svg")
  .attr("width", width)
  .attr("class", "dev-chart")
  .attr("height", height);

dev_chart.selectAll("rect")
  .data(dev_data)
  .enter()
  .append("svg:rect")
  .attr("x", 160)
  .attr("y", function(d , i) { return i * 30; })
  .attr("height", 25)
  .attr("width", function(d) { return aScale(d.value); })
  .attr("class", "dev-bars-g");;

///////////// LABELS //////////////////////  
var dev_labels_g = dev_chart.selectAll("g.labels_g")
    .data(dev_data)
    .enter().append("svg:g")
    .attr("class", "dev-labels-g");
    
    dev_labels_g.append("text")
    .attr("x", 80)
    .attr("y", function(d, i) { return i * 30; })
    .attr("transform" , "translate (-75, 20)")
    .text(function(d) { return d.label });
    
////////////// VALUES /////////////////////   
 var dev_count_g = dev_chart.selectAll("g.count_g")
    .data(dev_data)
    .enter().append("svg:g")
    .attr("class", "dev-count-g");
    
    dev_count_g.append("text")
    .attr("x", 82)
    .attr("y", function(d, i) { return i * 30; })
    .attr("transform" , "translate (40, 20)")
    .text(function(d) { return d.value });
 
}

dashboard_devices( dev_data );