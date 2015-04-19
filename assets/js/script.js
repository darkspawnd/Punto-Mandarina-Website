var possiblePages = [
    'contacto',
    'nosotros',
    'clientes',
    'gente',
    'trabajo',
    'index',
    ""
];

var referrer = document.referrer;
var last = referrer.split("/");

if(referrer != ""){
    for(var i = 0; i < possiblePages.length; i++){
        if(last[last.length - 1] === possiblePages[i]){
            $(".before-redirection").show();
        }
    }
    if(last[last.length - 2] === "projects"){
        $(".before-redirection").show();
    }
}