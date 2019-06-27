$("ul").on("click", "li", function(){
    $(this).toggleClass("liClick");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); 
    });
    event.stopEventPropagation();
});

$("input").keypress(function(event){
    if(event.which === 13)
    {
        var newText = $(this).val();
        if(newText !== ""){
            $("ul").append("<li> <span> <i class=\"fas fa-trash-alt\"></i> </span> " + newText + "</li>");
        }
        $(this).val("");
    }
});

$(".fa-calendar-plus").click(function(){
    $("input").fadeToggle();
})
