window.onload = init;
var predata = "";
function init(){
    initcolor("my tweet color", "#b0ffff");
    initcolor("my tweet text color", "#000000");
    initcolor("reply tweet color", "#ffe4e1");
    initcolor("reply tweet text color", "#000000");
    document.getElementById('save').addEventListener('click', save_option);
    document.getElementById('default').addEventListener('click', defaultColor);
    setTimeout(function (){
        reflect("my tweet color");
    }, 250);
    setTimeout(function (){
        reflect("my tweet text color");
    }, 250);
    setTimeout(function (){
        reflect("reply tweet color");
    }, 250);
    setTimeout(function (){
        reflect("reply tweet text color");
    }, 250);
}

function initcolor(id, def){
    document.getElementById(id).value = localStorage[id] || def;
}
function change(id, color){
    var mytweetpreview = document.getElementById("my tweet preview");
    var replytweetpreview = document.getElementById("reply tweet preview");
    if(id == "my tweet color"){
        mytweetpreview.style.backgroundColor = color;
        return;
    }
    if(id == "my tweet text color"){
        mytweetpreview.style.color = color;
        return;
    }
    if(id == "reply tweet color"){
        replytweetpreview.style.backgroundColor = color;
        return;
    }
    if(id == "reply tweet text color"){
        replytweetpreview.style.color = color;
    }
}
function reflect(id){
    var data = document.getElementById(id).value;
    if(data != predata)
        change(id, data);
    predata = data;
    setTimeout(function (){
        reflect(id)
    }, 1000);
}
function save_color(id){
    localStorage[id] = document.getElementById(id).value;
}
function save_option(){
    save_color("my tweet color");
    save_color("my tweet text color");
    save_color("reply tweet color");
    save_color("reply tweet text color");
}
function defaultColor(){
    localStorage.clear();
    initcolor("my tweet color", "#b0ffff");
    initcolor("my tweet text color", "#000000");
    initcolor("reply tweet color", "#ffe4e1");
    initcolor("reply tweet text color", "#000000");
    save_option();
}
