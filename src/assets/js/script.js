let test =
$(document).ready(function() {
    $(".collapse").collapse("toggle");
    $("div.edit-group").hide();
    $("div.styles-group").hide();

    $("#edit-btn").click(function(event) {
        event.preventDefault();
        $("div.edit-group").show();
        const textVal =  $("#textValue").text();
        $("#editor-block").text(textVal);
        $("div.styles-group").hide();
    });
    $("#style-btn").click(function(event) {
        event.preventDefault();
        $("div.edit-group").hide();
        $("div.styles-group").show();
    });
    // $("#save-edit").click(function(event) {
    //     event.preventDefault();
    //     $('td.tab-col').css('color','red');
    // });

});
$(function() {
    $('a[data-modal]').on('click', function() {
        $($(this).data('modal')).modal();
        return false;
    });
});

(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);

