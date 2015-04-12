var possiblePages = [
    'contacto',
    'nosotros',
    'clientes',
    'gente',
    'trabajo',
    'index',
    ""
];
console.log(document.referrer);
var referrer = document.referrer;
var last = referrer.split("/");

for(var i = 0; i < possiblePages.length; i++){
    if(last[last.length - 1] === possiblePages[i]){
        $(".before-redirection").show();
    }
}
