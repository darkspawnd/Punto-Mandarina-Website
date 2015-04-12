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
}