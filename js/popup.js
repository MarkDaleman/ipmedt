$(document).ready(function(){
	$('#popUpDiv').hide();
	wachtTijd();
});

function wachtTijd(){
	//Wachttijd ligt tussen de 1 en 3 minuten (60000 en 60000+120000 milliseconden)
	var tijd = Math.floor(Math.random * 120000) + 60000;
	console.log(tijd);
	
	/* Voor de test gebruiken we 10 seconden voor de popup */
	setTimout(10000);
	popUp();
};

/*
HTML Code popUp
<div class="popUpDiv">
	<!-- In de div een paragraaf met standaard gegevens en twee buttons -->
	<p id="popUpGegevens"></p>
	<ul id="popUpKnoppen">
		<li><a href=# id="popUpAccept">Openen</a></li>
		<li><a href=# id="PopUpIgnore">Sluiten</a></li>
	</ul>
</div>
*/

function popUp(){
	$('#popUpDiv').show();
	/*Laat zien:
	1 Nieuw Bericht
	van Mark
	
	Openen | Sluiten
	*/
	$('.popUpGegevens').html("1 Nieuw Bericht"<br>"ontvangen van Mark"<br>);
	
	/* Knoppen definiëren */
	$('.popUpAccept').click(function(){
		openText();
	});
	$('.popUpIgnore').click(function(){
		closeText();
	});
};

function openText(){
	/*Creeër een willekeurig getal tussen 1 en 5
	Selecteer de sms op basis van het getal
	Laat de sms zien
	Geef de mogelijkheid om de sms te sluiten
	*/
	var smsKeuze = Math.floor(Math.random * 5) + 1;
	console.log("Willekeurige sms is #" + smsKeuze);
	
	/* Voer hier 5 willekeurige facts in */
	
	/*  Laat het feit zien */
	$('#popUpGegevens').html("Willekeurig feitje nummer" + smsKeuze);
	
	/* Als de gebruiker op sluiten klikt moet de div verdwijnen */
	$('.popUpIgnore').click(function(){
		closeText();
	});
	
}

function closeText(){
	$('#popUpDiv').hide();
}