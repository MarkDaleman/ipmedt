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
	
		$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
		$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
		$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
		$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 2)
	{
		$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
		$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
		$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
		$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
		
		$("#world_chart").show();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 3)
	{
		$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
		$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
		$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
		$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
		
		$("#world_chart").hide();
		$("#regio_chart").show();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 4)
	{
		$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
		$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
		$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
		$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").show();
		$("#abonnementen_chart").hide();
	}	
	
	if(stap == 5)
	{
		$("#knoppen").append("<a href='#' data-stap='2'><li>Aantal mobiele abonnementen wereldwijd</li></a>");
		$("#knoppen").append("<a href='#' data-stap='3'><li>Globaal % mobiele gebruikers per gebied</li></a>");
		$("#knoppen").append("<a href='#' data-stap='4'><li>Evolutie van het aantal mobiele verbindingen</li></a>");
		$("#knoppen").append("<a href='#' data-stap='5'><li>Evolutie van het aantal mobiele abonnementen</li></a>");
		
		$("#world_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").show();
	}		
}