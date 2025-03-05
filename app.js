var adjective = document.getElementById("adjective");

var adjectivesList = ["Passionate,", "Autodidata,", "Curious,", "Engaged,", "Analitic,", "Proactive,"];

let i = 0;

for (let i = 0; i === 0 ; i++) {
    setInterval(() => {
        adjective.innerText = adjectivesList[i];

        i++;

        if (i === adjectivesList.length) {
            i = 0;
        }
    }, 2000);
}


// showingAdjectives(3000)

var menu = document.getElementById("menu");
var nav = document.getElementById("nav");

menu.addEventListener("click", function () {

    // alert("oi")

    console.log("abrindo")

    // nav.style.display = "flex";
    
    // if (nav.style.display == "none") {
        

    //     console.log("abrindo")
    // } else {
    //     clsMenu();
    // }
})

function clsMenu () {
    nav.style.display = "none";
    console.log("fechando")
}



// nav.addEventListener("click", function () {
//     if (window.innerWidth < 1080) {
//         if (nav.style.display = "flex") {
//             clsMenu();
//         }
//     }
// })

var display = document.getElementById("bd");
var text = document.getElementById("resume");

var qualifications = document.getElementById("qualifications");

var projects = document.getElementById("projects");

var contacts = document.getElementById("talk");

var footer = document.getElementById("footer");

// display.onscroll = () => {
//     var scroll = document.body.scrollTop || document.documentElement.scrollTop

//     if (window.innerWidth < 1080) {
//        if (scroll > 50) {
//             text.style.display = "block";

//         } else {
//             text.style.display = "none";
//             qualifications.style.display = "none";
//         }
//     } else {
//         if (scroll > 1) {
//             text.style.display = "block";
    
//         } else {
//             text.style.display = "none";
//             qualifications.style.display = "none";
            
//         }
//     }
// }

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

function clsMenu () {
    nav.style.display = "none"
}

menu.addEventListener("click", function () {
    
    if (nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        clsMenu();
    }
})

nav.addEventListener("click", function () {
    if (window.innerWidth < 1080) {
        if (nav.style.display = "flex") {
            clsMenu();
        }
    }
})