$(document).ready(function() {

    $("#inSearch").on('keyup', function() {
        if(event.keyCode == 13)
        {
            var value = $(this).val().toLowerCase();
            $("#body *").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1).css("color", "green");
                
            });
        }
    });
    
    
});