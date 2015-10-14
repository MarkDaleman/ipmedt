$(document).ready(function()

{
	vertel(1);	
	
	$("#knoppen").delegate("a", "click", function (){
		vertel($(this).attr("data-stap"));
	});
});

function vertel(stap)
{
	$("#knoppen").empty();

	if(stap == 1)
	{
		$("#chart_intro").html("Maak hieronder een selectie uit verschillende grafieken!");
	
		$("#knoppen").append("<li><a href='#' data-stap='2'>Aantal mobiele abonnementen (globaal)</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='5'>Groei van aantal abonnementen</a></li>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 2)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Aantal mobiele abonnementen (globaal)</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='5'>Groei van aantal abonnementen</a></li>");
		
		$("#world_chart").show();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 3)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Aantal mobiele abonnementen (globaal)</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='5'>Groei van aantal abonnementen</a></li>");
		
		$("#world_chart").hide();
		$("#regio_chart").show();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 4)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Aantal mobiele abonnementen (globaal)</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='5'>Groei van aantal abonnementen</a></li>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").show();
		$("#abonnementen_chart").hide();
	}	
	
	if(stap == 5)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Aantal mobiele abonnementen (globaal)</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='5'>Groei van aantal abonnementen</a></li>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").show();
	}		
}