$(document).ready(function(){
	$("#openingsfilm").show();
	$(".nav").hide();
	$("#fullpage").hide();
	
	$("#openingsfilm").click(function(){
		$("#fullpage").show();
		$(".nav").show();
		$("#openingsfilm").hide();
	});
});
