/**
 * Created by Mark on 30/09/15.
 */
$(document).ready(function(){
   $("#openingsfilm").show();
    $("#fullpage").hide();
    $(".nav").hide();

    $(document).click(function(){
        $("#openingsfilm").hide();
        $("#fullpage").show();
        $(".nav").show();

    });
});

