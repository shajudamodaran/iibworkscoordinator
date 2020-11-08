// JavaScript Document

var tvmcolleges = ["Government Sanskrit College,Thiruvananthapuram","Government College, Nedumangad","Government Arts College Thycaud, Trivandrum","Government College, Kariavattom, Thiruvananthapuram","Central Polytechnic College, Thiruvananthapuram","Government Polytechnic College, Neyyattinkara","Government Polytechnic College, Nedumangad","Government Polytechnic College, Attingal","Government College, Attingal",];

var temp_colleges_array=[];
var temp_course_array=[];
	var a1="";
	var a2="";
	var a3="";
	var a4="";
	var a5="";
	var a6="";
	var a7="";
	var a8="";
	var slills_india_dst_array=["Thiruvananthapuram","Kollam","Thrissur","Palakkad","Malappuram","Kozhikkod","Wayanad","Kannur","Kasaragod"];
	
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

var TVM="Thiruvananthapuram";
var KLM="Kollam";
var PTTA="Pathanamthitta";
var ALP="Alappuzha";
var KTYM="Kottayam";
var IDK="Idukki";
var EKM="Ernakulam";
var TCR="Thrissur";
var PLKD="Palakkad";
var MLP="Malappuram";
var CLC="Kozhikkod";
var WYND="Wayanad";
var KNR="Kannur";
var KZG="Kasaragod";

var ekm_govt_college1="Government Polytechnic College, Kalamassery, Ernakulam";
var ekm_govt_college2="Government Polytechnic College, Perumbavoor";
var ekm_govt_college3="Womens Polytechnic College Ernakulam";


	

onload = function() 
{
	//alert("ok");
	document.getElementById("img-loading").style.display = "none";
	document.getElementById("img-loading2").style.display = "none";
	document.getElementById("img-loading3").style.display = "none";

	var today=new Date();
	document.getElementById("datepickbox").value=(new Date()).toISOString().substr(0,10);
	
	var sel = document.getElementById('selDemo');


	
	
}

function setcollegelist()
{

//when district changed
hidebox("collegelist","img-loading");


var selected_dst=document.getElementById("districtselect").value;
temp_colleges_array.length=0;
setcollegdrop(selected_dst);
		
}

function collegeonchange()
{
	//when College changed
	hidebox("courselist","img-loading2");
	
	var selected_college=document.getElementById("collegelist").value;
	temp_course_array.length=0;
	setcoursedrop(selected_college);
}
function courseonchange()
{
	hidebox("partnerbox","img-loading3");
	var dst=document.getElementById("districtselect").value;
	var college=document.getElementById("collegelist").value;
	var course=document.getElementById("courselist").value;
	set_partner_from_database(dst,college,course);
}

function clearselect(idofselect)
{
	var select = document.getElementById(idofselect);
var length = select.options.length;
for (i = length-1; i >= 0; i--) {
  select.options[i] = null;
}
}

function setcollegdrop(nameof_dist)
{
	clearselect("collegelist");
	var sel = document.getElementById("collegelist");
	
	temp_colleges_array.push("---");
	
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
								else
								{
									//console.log("Else Working "+temp_dst+" not equals "+nameof_dist+"");
								}
							}
					
					//Set Values to select
								
						for(var k=0;k<=temp_colleges_array.length-1;k++)
							{
								var opt = document.createElement('option');
								opt.appendChild( document.createTextNode(temp_colleges_array[k]) );
								opt.value = temp_colleges_array[k]; 
								sel.appendChild(opt); 
								
							}
					unhidebox("collegelist","img-loading");	
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
						unhidebox("courselist","img-loading2");	
			});
	
}

function set_partner_from_database(para_dst,para_college,para_course)
{
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
								var temp_Partner=json.records[i].PARTNER;
								
								if((para_dst==temp_dst)&(para_college==temp_College)&(para_course==temp_Course))
								{
									a6=temp_Partner;
									document.getElementById("partnerbox").value=temp_Partner;
									unhidebox("partnerbox","img-loading3");
								}
								
								
								
							}
					
			});
	
}

function hidebox(id,imageid)
{
	console.log("Called for Hiding "+id+"");
	document.getElementById(id).style.display = "none";
	document.getElementById(imageid).style.display = "block";
}
function unhidebox(id,imageid)
{
	console.log("Called for Visible "+id+"");
	document.getElementById(id).style.display = "block";
	document.getElementById(imageid).style.display = "none";
}

function submit_to_database()
{
	var is_ok=set_parameter_value();
	
	if(is_ok=="ok" )
	{
		var script_url = "https://script.google.com/macros/s/AKfycbzJacG2TZtrCp2uwTaIEjeTaUIqGgR9ZZuKUj9biznZecTPeWE/exec";
	var url = script_url+"?callback=ctrlq&a1="+a1+"&a2="+a2+"&a3="+a3+"&a4="+a4+"&a5="+a5+"&a6="+a6+"&a7="+a7+"&a8="+a8+"&action=insert";
	
	
    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"	  
	});
	setTimeout(function(){
		
		updatelabel(a1);
		}, 2000);
	
	}
	else
	{
		console.log("Error in parameter Loading");
	}
	

	
}
function set_parameter_value()
{
	a1=document.getElementById("namebox").value;
	a2=document.getElementById("numberbox").value;
	a3=document.getElementById("districtselect").value;
	a4=document.getElementById("collegelist").value;
	a5=document.getElementById("courselist").value;
	a6=document.getElementById("partnerbox").value;
	a7=document.getElementById("remarksbox").value;
	a8=document.getElementById("datepickbox").value;
	
	return ("ok");
}

function updatelabel(name)
{
	console.log(name);
	document.getElementById("lastname").innerHTML=name;
	document.getElementById("templab1").style.visibility="visible";
	document.getElementById("templab2").style.visibility="visible";
	document.getElementById("templab3").style.visibility="visible";
	document.getElementById("lastname").style.visibility="visible";
}

function find_partner(p_district,p_college,p_course)
{
	if((p_district=="Thiruvananthapuram"||p_district=="Kollam"||p_district=="Thrissur"||p_district=="Palakkad"||p_district=="Malappuram"||p_district=="Kozhikkod"||p_district=="Wayanad"||p_district=="Kannur"||p_district=="Kasaragod")&(p_course=="Professional Diploma in Shipping & Logistics"||p_course=="Advanced Diploma in Logistics and Supply Chain Management"))
	{
		a6="SKILLS INDIA";
		document.getElementById("partnerbox").value="SKILLS INDIA";
	}
	else if((p_district==EKM)&(p_college==ekm_govt_college1||p_college==ekm_govt_college2||p_college==ekm_govt_college3)&(p_course==PDCCE||p_course==PDIAD||p_course==PDENE||p_course==PDFDS||p_course==PDIE||p_course==PDIFS||p_course==PDMAE||p_course==PDSL))
	{
		a6="IIB Ernakulam";
		document.getElementById("partnerbox").value="IIB Ernakulam";
	}
	else if((p_district=="Alappuzha"||p_district=="Pathanamthitta"||p_district=="Idukki"||p_district=="Kottayam")&(p_course=="Professional Diploma in Shipping & Logistics"||p_course=="Advanced Diploma in Logistics and Supply Chain Management"))
	{
		a6="REC TECHNOSOLUTIONS";
		document.getElementById("partnerbox").value="REC TECHNOSOLUTIONS";
	}
	else if((p_district=="Alappuzha"||p_district=="Kottayam")&(p_course=="Professional Diploma in Fibre Optics & Digital Security System"||p_course=="Professional Diploma in Enterprise Network Engineering"))
	{
		a6="REC TECHNOSOLUTIONS";
		document.getElementById("partnerbox").value="REC TECHNOSOLUTIONS";
	}
	else if((p_district=="Kottayam")&(p_course=="Professional Diploma in Industrial Electrical Engineering"||p_course=="Professional Diploma in Industrial Instrumentation & Fire and Safety"))
	{
		a6="REC TECHNOSOLUTIONS";
		document.getElementById("partnerbox").value="REC TECHNOSOLUTIONS";
	}
	else if((p_district=="Kozhikkod")&(p_course=="Professional Diploma in Enterprise Network Engineering"||p_course=="Professional Diploma in Fibre Optics & Digital Security System"))
	{
		a6="REC TECHNOLOGIES";
		document.getElementById("partnerbox").value="REC TECHNOLOGIES";
	}
		else if((p_district=="Kollam")&(p_course=="Professional Diploma in Fibre Optics & Digital Security System"))
	{
		a6="NETVIEW TECHNOLOGIES";
		document.getElementById("partnerbox").value="NETVIEW TECHNOLOGIES";
	}
		else if((p_district=="Thrissur")&(p_course=="Professional Diploma in Mechanical & Automobile Engineering"))
	{
		a6="Mahathma Education Centre";
		document.getElementById("partnerbox").value="Mahathma Education Centre";
	}
	
	else if(
	((p_district=="Alappuzha")&(p_course==PDCCE||p_course==PDIAD||p_course==PDIE||p_course==PDIFS))||
	((p_district=="Pathanamthitta")&(p_course==PDCCE||p_course==PDIAD||p_course==PDIE||p_course==PDIFS)))
	{
		a6="Kavitha Private ITI";
		document.getElementById("partnerbox").value="Kavitha Private ITI";
	}
	
	else if((p_district==KNR||p_district==CLC||p_district==MLP||p_district==PLKD||p_district==TCR)&(p_course==PDIFS||p_course==PDIE))
	{
		a6="ITIS Thrissur";
		document.getElementById("partnerbox").value="ITIS Thrissur";
	}
		
		else if((p_district==EKM)&(p_course==PDFT||p_course==PDIAD||p_course==PDSL))
	{
		a6="IT Academy";
		document.getElementById("partnerbox").value="IT Academy";
	}
	
		else if((p_district==KNR)&(p_course==PDCCE||p_course==PDIE||p_course==PDFDS||p_course==PDENE))
	{
		a6="Intersolutions";
		document.getElementById("partnerbox").value="Intersolutions";
	}
	else if((p_district==TVM)&(p_course==PDENE||p_course==PDFDS))
	{
		a6="IITTI";
		document.getElementById("partnerbox").value="IITTI";
	}
	else if((p_district==CLC||p_district==PLKD||p_district==TCR)&(p_course==PDENE||p_course==PDFDS))
	{
		a6="IIB Thrissur (N/W)";
		document.getElementById("partnerbox").value="IIB Thrissur (N/W)";
	}
	else if((p_district==TVM)&(p_course==PDIE||p_course==PDIFS))
	{
		a6="Global Institute for Design Engineering";
		document.getElementById("partnerbox").value="Global Institute for Design Engineering";
	}
	else if((p_district==MLP)&(p_course==PDMAE))
	{
		a6="HATHI Motor Vehicle Service Centre";
		document.getElementById("partnerbox").value="HATHI Motor Vehicle Service Centre";
	}
	else if((p_district==CLC)&(p_course==PDCCE||p_course==PDIAD))
	{
		a6="Global Educational Trust";
		document.getElementById("partnerbox").value="Global Educational Trust";
	}
	else if((p_district==ALP||p_district==KNR||p_district==KLM||p_district==KTYM||p_district==PLKD||p_district==PTTA||p_district==TVM)&(p_course==PDMAE))
	{
		a6="CEEG";
		document.getElementById("partnerbox").value="CEEG";
	}
	else if((p_district==TVM||p_district==KLM)&(p_course==PDCCE||p_course==PDIAD||p_course==PDIE||p_course==PDIFS))
	{
		a6="Cocoon Academy for Skill Training";
		document.getElementById("partnerbox").value="Cocoon Academy for Skill Training";
	}
		

	
	
	else
	{
		a6="Partner Not Defined";
		document.getElementById("partnerbox").value="Partner Not Defined";
	}
}
