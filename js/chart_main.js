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
	
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		
		$("#pop_chart").hide();
		$("#mob_chart").hide();
		$("#verbinding_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 2)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").show();
		$("#mob_chart").hide();
		$("#verbinding_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 3)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").hide();
		$("#mob_chart").show();
		$("#verbinding_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 4)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").hide();
		$("#mob_chart").hide();
		$("#verbinding_chart").show();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}	
	
	if(stap == 5)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").hide();
		$("#mob_chart").hide();
		$("#verbinding_chart").hide();
		$("#regio_chart").show();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").hide();
	}

	if(stap == 6)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").hide();
		$("#mob_chart").hide();
		$("#verbinding_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").show();
		$("#abonnementen_chart").hide();
	}

	if(stap == 7)
	{
		$("#knoppen").append("<li><a href='#' data-stap='2'>Inwoners per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='3'>Aantal mobiele telefoons per land</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='4'>Aantal mobiele telefonie verbindingen per 100 inwonders</a></li>");		
		$("#knoppen").append("<li><a href='#' data-stap='5'>Aantal mobiele gebruikers per regio.</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='6'>Groei van aantal aansluitingen</a></li>");
		$("#knoppen").append("<li><a href='#' data-stap='7'>Groei van aantal abonnementen</a></li>");
		
		$("#chart_intro").hide();
		$("#pop_chart").hide();
		$("#mob_chart").hide();
		$("#verbinding_chart").hide();
		$("#regio_chart").hide();
		$("#aansluitingen_chart").hide();
		$("#abonnementen_chart").show();
	}			
}