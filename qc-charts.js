  //////////// QC Chart setup //////////////////
 var dataset_days = [["Friday", 80,] , ["Monday" , 50] , ["Saturday" , 100] , ["Tuesday" , 70] ,
               ["Tuesday" , 50]
               ];
 
 var dataset_days2 = [["Monday", 80,] , ["Monday" , 50] , ["Thursday" , 100] , ["Friday" , 70] ,
               ["Sunday" , 50]
               ];

var dataset_times = [["7A", 80,] , ["11A" , 50] , ["2P" , 65] , ["3P" , 70] ,
["8P" , 50]
];

var dataset_month = [["12", 80,] , ["15" , 50] , ["17" , 65] , ["22" , 70] ,
["25" , 50] , ["2" , 25] , ["12" , 40] , ["9" , 55] , ["18" , 35]
];
    
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
var times = ["12A" , "1A" , "2A" , "3A" , "4A" , "5A" , "6A" , "7A" ,
             "8A" , "9A", "10A", "11A", "12P" , "1P" , "2P" , "3P",
             "4P" , "5P", "6P" , "7P" , "8P" , "9P" , "10P" , "11P" , "12P"];

var month = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" ,
             "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" ,
             "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30"
             ];   
 
    
       
///////////////// Draw Week ////////////////////
function drawWeek ( days , dataset_days ){
 
 var QCmargin = {top: 10, right: 10, bottom: 20, left: 40},
    QCwidth = 450 - QCmargin.right - QCmargin.left,
    QCheight = 160 - QCmargin.top - QCmargin.bottom;
    
    var svg = d3.select("#qc-graph").append("svg")
    .attr("width", QCwidth + QCmargin.right + QCmargin.left)
    .attr("height", QCheight + QCmargin.top + QCmargin.bottom)
    .append("g")
    .attr("transform", "translate(" + QCmargin.left + "," + QCmargin.top + ")");
    
    var x = d3.scale.ordinal()
    .domain(days)
    .rangePoints([0, QCwidth] , 1);

   var y = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);
    
    var x2 = d3.scale.ordinal()
    .domain(times)
    .rangePoints([0, QCwidth] , 1);

   var y2 = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + QCheight + ")")
    .call(d3.svg.axis().scale(x).orient("bottom"));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left").ticks(2));

 svg.append("line")
    .attr("class" , "mean-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , QCheight / 2)
    .attr("y2" , QCheight / 2)
    .attr("stroke-width" , 1)
    .style("stroke", "#ff8100");
    
svg.append("line")
    .attr("class" , "max-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , 0)
    .attr("y2" , 0)
    .attr("stroke-width" , 1)
    .style("stroke", "#cacccc");

     
     var circleN = svg.selectAll("circle")
    .data(dataset_days);
    
    circleN.enter().append("circle");
    
    circleN.attr("transform", function(d) { return "translate(" + x(d[0]) + "," + y(d[1]) + ")"; })
    .attr("r", 5)
    .style("fill" , "#44B3CD")
    .append("title")
    .text(function(d) { return d[0]  + ": " + d[1] ; });
    
    circleN.exit().remove();
       
    };
   
 
   
/////////////// Draw Day  /////////////////////////// 
function drawDay ( times , dataset_times ){
 
  var QCmargin = {top: 10, right: 10, bottom: 20, left: 40},
    QCwidth = 450 - QCmargin.right - QCmargin.left,
    QCheight = 160 - QCmargin.top - QCmargin.bottom;
    
    var svg = d3.select("#qc-graph").append("svg")
    .attr("width", QCwidth + QCmargin.right + QCmargin.left)
    .attr("height", QCheight + QCmargin.top + QCmargin.bottom)
    .append("g")
    .attr("transform", "translate(" + QCmargin.left + "," + QCmargin.top + ")");
    
    var x = d3.scale.ordinal()
    .domain(days)
    .rangePoints([0, QCwidth] , 1);

   var y = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);
    
    var x2 = d3.scale.ordinal()
    .domain(times)
    .rangePoints([0, QCwidth] , 1);

   var y2 = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + QCheight + ")")
    .call(d3.svg.axis().scale(x2).orient("bottom"));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y2).orient("left").ticks(2));

 svg.append("line")
    .attr("class" , "mean-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , QCheight / 2)
    .attr("y2" , QCheight / 2)
    .attr("stroke-width" , 1)
    .style("stroke", "#ff8100");
    
svg.append("line")
    .attr("class" , "max-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , 0)
    .attr("y2" , 0)
    .attr("stroke-width" , 1)
    .style("stroke", "#cacccc");
     
     var circleN = svg.selectAll("circle")
    .data(dataset_times);
    
    circleN.enter().append("circle");
    
    circleN.attr("transform", function(d) { return "translate(" + x2(d[0]) + "," + y2(d[1]) + ")"; })
    .attr("r", 5)
    .style("fill" , "#44B3CD")
    .append("title")
    .text(function(d) { return d[0]  + ": " + d[1] ; });
    
    circleN.exit().remove();
    
     
    };
    
  /////////////// Draw Month  /////////////////////////// 
function drawMonth ( month , dataset_month ){
 
  var QCmargin = {top: 10, right: 10, bottom: 20, left: 40},
    QCwidth = 450 - QCmargin.right - QCmargin.left,
    QCheight = 160 - QCmargin.top - QCmargin.bottom;
    
    var svg = d3.select("#qc-graph").append("svg")
    .attr("width", QCwidth + QCmargin.right + QCmargin.left)
    .attr("height", QCheight + QCmargin.top + QCmargin.bottom)
    .append("g")
    .attr("transform", "translate(" + QCmargin.left + "," + QCmargin.top + ")");
    
    var x = d3.scale.ordinal()
    .domain(days)
    .rangePoints([0, QCwidth] , 1);

   var y = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);
    
    var x2 = d3.scale.ordinal()
    .domain(month)
    .rangePoints([0, QCwidth] , 1);

   var y2 = d3.scale.linear()
    .domain([0, 100])
    .range([QCheight, 0]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + QCheight + ")")
    .call(d3.svg.axis().scale(x2).orient("bottom"));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y2).orient("left").ticks(2));

 svg.append("line")
    .attr("class" , "mean-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , QCheight / 2)
    .attr("y2" , QCheight / 2)
    .attr("stroke-width" , 1)
    .style("stroke", "#ff8100");
    
svg.append("line")
    .attr("class" , "max-line")
    .attr("x1" , 0)
    .attr("x2" , QCwidth)
    .attr("y1" , 0)
    .attr("y2" , 0)
    .attr("stroke-width" , 1)
    .style("stroke", "#cacccc");
     
     var circleN = svg.selectAll("circle")
    .data(dataset_month);
    
    circleN.enter().append("circle");
    
    circleN.attr("transform", function(d) { return "translate(" + x2(d[0]) + "," + y2(d[1]) + ")"; })
    .attr("r", 5)
    .style("fill" , "#44B3CD")
    .append("title")
    .text(function(d) { return d[0]  + ": " + d[1] ; });
    
    circleN.exit().remove();
    
     
    };  
    
 
 
/////////// CLICK HANDLERS //////////////////

d3.select("#qc-day").on("click", function() {
  $("#qc-graph").html("");
  $("#qc-week").removeClass('active');
  $("#qc-month").removeClass('active');
  $(this).addClass('active');
  drawDay( times , dataset_times );
});
    
d3.select("#qc-week").on("click", function() {
  $("#qc-graph").html("");
  $("#qc-day").removeClass('active');
  $("#qc-month").removeClass('active');
  $(this).addClass('active');
  drawWeek( days , dataset_days );
});

d3.select("#qc-month").on("click", function() {
  $("#qc-graph").html("");
  $("#qc-week").removeClass('active');
  $("#qc-day").removeClass('active');
  $(this).addClass('active');
  drawMonth( month , dataset_month );
});
    
drawDay( times , dataset_times );