$(document).ready(function(){
	getTijd();
});

function getTijd() {
	var d = new Date();
	var uren = d.getHours()
	var minuten = d.getMinutes();
	
	if(uren < 10){
		uren = "0" + uren;
	}
	
	if(minuten < 10){
		minuten = "0" + minuten;
	}
	
	var tijd = uren + ":" + minuten;
	
	$("#navTijd").html(function(){
		$(this).html(tijd);
	});
}