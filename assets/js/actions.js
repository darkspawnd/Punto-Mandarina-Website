window.onload = function () {
    
    //Deactivate Prelaoder
    setTimeout(function(){$(".before-redirection").fadeOut();},300);
    // Preload Before Redirecting | Not applied to Anchors Nor Targets
    $("a").click(function (evt) {
        //Check for anchor
        var anchor = $(this).attr("href").indexOf("#");
        //Check for targets
        var target = $(this).attr("target");
        if(typeof target === 'undefined'){
            if(anchor === -1){
                //Check for url
                var url = $(this).attr("href")
                //Start loading
                $(".before-redirection").fadeIn();
                //Create iframe for preload
                $iframe = $("<iframe>");
                //Set iframe content
                $iframe.attr({src: url, width: 0});
                //Load iframe
                $iframe.appendTo($("body"));
                //Change Page on Iframe Load
                $iframe.load(function() {
                    setTimeout(function () {
                        window.location = url;
                    },2000);
                });

                }
                evt.preventDefault();
                return false;
            }
    });
    
    var nextMessage = 0, time = 5000; 
    function clientsLoop() {
        var quotes = document.getElementsByClassName("statement");
        if(nextMessage === 0){
            $.when($(".statement").each(function () {
                $(this).fadeOut();
            })).done(function (){
                $(".quote-box").stop().animate({
                    scrollLeft: nextMessage * $(".quote-box").width()
                },500,function () {
                    $(".statement").each(function () {
                        $(this).fadeIn();
                    });
                });
            });;
            
        }else{
            $(".quote-box").stop().animate({
                scrollLeft: nextMessage * $(".quote-box").width()
            });
        }
        nextMessage++;
        if(nextMessage >= quotes.length -1 ){nextMessage = 0;}
        setTimeout(clientsLoop,time);
    }
    
    clientsLoop();
    
    
    $(".menu-opt").click(function () {
        $(".menu-opt").each(function () {
            $(this).removeClass("active-work");
        });
        $(this).addClass("active-work");
    });
    
    if($(window).width() < 1200){
        $(".contact-container").css({
            left: $(window).width() - $(".contact-container").width()
        });
    }else{
        $(".contact-container").css({
            left: 1200 - $(".contact-container").width() + (($("body").width() - 1200)/2)
        });
    }
    
    var contactStatus = 0;
    
    $("#contact").click(function (e) {
        e.preventDefault();
        
        if(contactStatus == 0){
            $(".contact-container").stop().animate({
                top: $(".menu").height()
            });
            contactStatus = 1;
        }else{
            $(".contact-container").stop().animate({
                top: -100 + "%"
            });
            contactStatus = 0;
        }
        
    });
    
    $("#close-contact").click(function () {
        $(".contact-container").stop().animate({
            top: -100 + "%"
        });
        contactStatus = 0;
    });
    
    $("#close-project").click(function () {
        window.location = "../trabajo"
    });
    
}

$(window).resize(function () {
    
    if($(window).width() < 1200){
        $(".contact-container").css({
            left: $(window).width() - $(".contact-container").width()
        });
    }else{
        $(".contact-container").css({
            left: 1200 - $(".contact-container").width() + (($("body").width() - 1200)/2)
        });
    }
});












