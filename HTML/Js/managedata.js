
var temp_colleges_array=[];
var temp_course_array=[];

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

var allcoursearray=[ADLSCM,PDCCE,PDENE,PDFDS,PDIE,PDIFS,PDIAD,PDSL,PDMAE,PDFT];

onload = function() 
{
	
}


function setcollegelist()
{

//when district changed


var selected_dst=document.getElementById("districtselect").value;

temp_colleges_array.length=0;
	if(selected_dst=="All")
	{
		document.getElementById("collegelist").style.display = "none";
		clearselect("courselist");
		
		temp_colleges_array.length=0;
		set_all_course();
	}
	else
	{
		setcollegdrop(selected_dst);
		document.getElementById("collegelist").style.display = "initial";
	}

		
}
function collegeonchange()
{
	//when College changed
	var selected_college=document.getElementById("collegelist").value;
	temp_course_array.length=0;
	if(selected_college=="---")
	{
		clearselect("courselist");
		document.getElementById("collegelist").style.display = "none";
		set_all_course();
	}
	else
	{
		setcoursedrop(selected_college);
		document.getElementById("collegelist").style.display = "initial";
	}
	
}

function setcollegdrop(nameof_dist)
{
	clearselect("collegelist");
	var sel = document.getElementById("collegelist");
	temp_colleges_array.push("Please Select College");
	
	
		var script_url="https://script.google.com/macros/s/AKfycbz30DqQOJQc_3bxhTIC4VWvaYmqbnjaUlWChovSaYjJq8q6L0zE/exec";
		var url = script_url+"?action=read";
		
		$.getJSON(url, function (json) 
			{
				
				//get values from DB
						for (var i = 0; i < json.records.length; i++) 
							{
								var temp_dst=json.records[i].DISTRICT;
								var temp_College=json.records[i].COLLEGE;
								
								
								if(temp_dst==nameof_dist)
								{
									var flag=0;
									for(var j=0;j<=temp_colleges_array.length;j++)
										{
											if(temp_College==(temp_colleges_array[j]))
											{
												flag=1;
											}
						
										}
										if(flag==0)
											{
												temp_colleges_array.push(temp_College);
											}
										
								}
								
							}
							temp_colleges_array.push("---");
					
					//Set Values to select
								
						for(var k=0;k<=temp_colleges_array.length-1;k++)
							{
								var opt = document.createElement('option');
								opt.appendChild( document.createTextNode(temp_colleges_array[k]) );
								opt.value = temp_colleges_array[k]; 
								sel.appendChild(opt); 
								
							}
					//unhidebox("collegelist","img-loading");	
					
			});
	
	
}

function setcoursedrop(nameof_college)
{
	clearselect("courselist");
	var sel = document.getElementById("courselist");
	temp_course_array.push("---");
	
		var script_url="https://script.google.com/macros/s/AKfycbz30DqQOJQc_3bxhTIC4VWvaYmqbnjaUlWChovSaYjJq8q6L0zE/exec";
		var url = script_url+"?action=read";
		
		$.getJSON(url, function (json) 
			{
				
				//get values from DB
						for (var i = 0; i < json.records.length; i++) 
							{
								var temp_dst=json.records[i].DISTRICT;
								var temp_College=json.records[i].COLLEGE;
								var temp_Course=json.records[i].COURSE;
								
								
								if(temp_College==nameof_college)
								{
									var flag=0;
									for(var j=0;j<=temp_course_array.length;j++)
										{
											if(temp_Course==(temp_course_array[j]))
											{
												flag=1;
											}
						
										}
										if(flag==0)
											{
												temp_course_array.push(temp_Course);
											}
										
								}
								else
								{
									//console.log("Else Working "+temp_dst+" not equals "+nameof_dist+"");
								}
							}
					
					//Set Values to select
								
						for(var k=0;k<=temp_course_array.length-1;k++)
							{
								var opt = document.createElement('option');
								opt.appendChild( document.createTextNode(temp_course_array[k]) );
								opt.value = temp_course_array[k]; 
								sel.appendChild(opt); 
								
							}
						//unhidebox("courselist","img-loading2");	
			});
	
}

function set_all_course()
{
	clearselect("collegelist");
	var sel = document.getElementById("courselist");
	for (var i = 0; i < allcoursearray.length; i++) 
			{
				temp_course_array.push(allcoursearray[i]);
			}
	
	for(var k=0;k<=temp_course_array.length-1;k++)
							{
								var opt = document.createElement('option');
								opt.appendChild( document.createTextNode(temp_course_array[k]) );
								opt.value = temp_course_array[k]; 
								sel.appendChild(opt); 
								
							}
}
function exports()
{
exportToExcel("datatable",'hey')
}


function exportToExcel(tableID, filename){
    var downloadurl;
    var dataFileType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'export_excel_data.xls';
    
    // Create download link element
    downloadurl = document.createElement("a");
	
	
	var tab_text = "<table border='2px'><tr>";
	 tab = document.getElementById(tableID);
	 
        for (j = 0 ; j < tab.rows.length ; j++) 
		{
            tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        }
        tab_text = tab_text + "</table>";
        tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
        tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
        tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // remove input params
		
		
    
    document.body.appendChild(downloadurl);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTMLData], {
            type: dataFileType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadurl.href = 'data:' + dataFileType + ', ' + encodeURIComponent(tab_text);
    
        // Setting the file name
        downloadurl.download = filename;
        
        //triggering the function
        downloadurl.click();
    }
}

function show_data()
{
	var data=document.getElementById("collegelist").value;
	alert(data);
}








function clearselect(idofselect)
{
	var select = document.getElementById(idofselect);
var length = select.options.length;
for (i = length-1; i >= 0; i--) {
  select.options[i] = null;
}
}