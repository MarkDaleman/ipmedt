$(document).ready(function()
{	
	
	if (screen.width < 768)  {
		console.log("Mobile"+ $(window).width());
			
		$("#chart_intro").hide();
		$(".chart").hide();
		$("#knoppen").hide();
		$("#form_titel").show();
		$("#small_form").show();	
	
	} else {
		console.log("Fullscreen"+ $(window).width());			

		$("#form_titel").hide();
		$("#small_form").hide();
		$("#knoppen").show();

		vertel(1);	

		$("#knoppen").delegate("a", "click", function (){
		vertel($(this).attr("data-stap"));
		});
	}

	
	$(window).resize(function(){
		if ($(window).width() <= 768){
			console.log("Mobile " + $(window).width());
			
			$("#chart_intro").hide();
			$(".chart").hide();
			$("#knoppen").hide();
			$("#form_titel").show();
			$("#small_form").show();
			
			
		} 	else {
				console.log("Fullscreen" + $(window).width());			
				
				$("#form_titel").hide();
				$("#small_form").hide();
				$("#knoppen").show();

				vertel(1);	

				$("#knoppen").delegate("a", "click", function (){
				vertel($(this).attr("data-stap"));
				});
			}	
	});
});

function vertel(stap)
{
	$("#knoppen").empty();
	$("#chart_intro").html("Maak hieronder een selectie uit verschillende grafieken!");
	$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
	$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
	$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
	$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
	
	
	if(stap == 1)
	{
		$("#world_chart").show();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 2)
	{
		$("#world_chart").show();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 3)
	{
		$("#world_chart").hide();
		$("#regio_chart").show();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 4)
	{
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").show();
		$("#abonnementen_chart").hide();
	}	
	
	if(stap == 5)
	{	
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").show();
	}		
}	

	var keuze = {
		'Globaal': 'keuze2',
		'Europa': 'keuze3',
		'Azie': 'keuze4',
		'N-Amerika': 'keuze5',
		'Z-Amerika': 'keuze6',
		'Afrika': 'keuze7',
		'Oceanie': 'keuze8'
		};
			
	var selection = function(select) {
		for(i in keuze)
			document.getElementById(keuze[i]).style.display = "none";    
			document.getElementById(keuze[select.value]).style.display = "block";
	}