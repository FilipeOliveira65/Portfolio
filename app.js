
var display = document.getElementById("bd");
var text = document.getElementById("resume");

display.onscroll = () => {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop

    if (window.innerWidth > 1080) {
       if (scroll > 50) {
            text.style.display = "block";

        } else {
            text.style.display = "none";
        }
    } else {
        if (scroll > 1) {
            text.style.display = "block";
    
        } else {
            text.style.display = "none";
        }
    }
}

var menu = document.getElementById("menu");
var nav = document.getElementById("nav");

function atvMenu () {
    if (nav.style.display = "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// while ()
// menu.addEventListener("click", function () {
//     var nav = document.getElementById("nav");

//     if (nav.style.display = "none") {
//         nav.style.display = "flex";
//     } else {
//         nav.style.display = "none"
//     }
// })








