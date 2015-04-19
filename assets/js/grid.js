$(document).ready(function () {
    var grid = $("#grid"),
        sizer = grid.find(".work-element");
    
    grid.shuffle({
        sizer: sizer,
        speed: 500,
        easing: 'ease-out'
    });
    
    $("#branding").click(function () {
        grid.shuffle('shuffle', function($el, shuffle){
            return $el.data("group") == 'branding';
        });
    });
    
    $("#comunicacion").click(function () {
        grid.shuffle('shuffle', function($el, shuffle){
            return $el.data("group") == 'comunicacion';
        });
    });
    
    $("#multimedia").click(function () {
        grid.shuffle('shuffle', function($el, shuffle){
            return $el.data("group") == 'multimedia';
        });
    });
    
    $("#web").click(function () {
        grid.shuffle('shuffle', function($el, shuffle){
            return $el.data("group") == 'web';
        });
    });

});    
    