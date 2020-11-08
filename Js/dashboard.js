var ADLSCM="Advanced Diploma in Logistics and Supply Chain Management";
var PDCCE="Professional Diploma in Civil & Construction Engineering";
var PDENE="Professional Diploma in Enterprise Network Engineering";
var PDFDS="Professional Diploma in Fibre Optics & Digital Security System";
var PDIE="Professional Diploma in Industrial Electrical Engineering";
var PDIFS="Professional Diploma in Industrial Instrumentation & Fire and Safety";
var PDIAD="Professional Diploma in Interior & Architectural Design";
var PDSL="Professional Diploma in Shipping & Logistics";
var PDMAE="Professional Diploma in Mechanical & Automobile Engineering";
var PDFT="Professional Diploma in Fashion Technology";




onload = function() 
{
	 getcoursechart();
	 //getpartnerchart();
}

function getcoursechart()
{
	var today0 = new Date();
		var dd = String(today0.getDate()).padStart(2, '0');
		var mm = String(today0.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today0.getFullYear();
		var today1=""+dd+"/"+mm+"/"+yyyy+"";
		
	  var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var ampm = hours >= 12 ? "pm" : "am";
		
		var times=""+hours+":"+minutes+":"+ampm+"";
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Course wise Tele Enquiery Report Upto   ( "+today1+"---"+times+" )"
      },
      data: [

      {
        dataPoints: [
        { x: 1, y: 0, label: "ADLSCM"},
        { x: 2, y: 0,  label: "PDCCE" },
        { x: 3, y: 0,  label: "PDENE"},
        { x: 4, y: 0,  label: "PDFDS"},
        { x: 5, y: 0,  label: "PDIE"},
        { x: 6, y: 0, label: "PDIFS"},
        { x: 7, y: 0,  label: "PDIAD"},
        { x: 8, y: 0,  label: "PDSL"},
		{ x: 9, y: 0,  label: "PDMAE"},
		{ x: 10, y: 0,  label: "PDFT"}
        ]
      }
      ]
    });

    chart.render();
}
function getpartnerchart()
{
	 google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["SKILLS INDIA ", 8.94, "#b87333"],
        ["Cocoon", 10.49, "silver"],
        ["IITTI ", 19.30, "gold"],
		["GIDE", 19.30, "gold"],
		["CEEG ", 19.30, "gold"],
		["Kavitha ", 19.30, "gold"],
		["REC TECHNOSOLUTIONS ", 19.30, "gold"],
		["IT Academy ", 19.30, "gold"],
		["IIB Ernakulam ", 19.30, "gold"],
		["Intersolutions ", 19.30, "gold"],
		["ITIS Thrissur ", 19.30, "gold"],
		["NETVIEW", 19.30, "gold"],
		["Global", 19.30, "gold"],
		["REC TECHNOLOGIES", 19.30, "gold"],
		["IIB Thrissur", 19.30, "gold"],
		["HATHI", 19.30, "gold"],
        ["Mahathma ", 21.45, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Partner Wise Tele Enquiery Report",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }
}

