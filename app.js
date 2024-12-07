
var display = document.getElementById("bd");

var text = document.getElementById("resume");
var quali = document.getElementsByClassName("appear");

display.onscroll = () => {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop

    if (scroll > 850) {
        text.style.display = "block";
        quali.style.display = "flex"
    } else if (scroll > 200) {
        text.style.display = "block";
        quali.style.display = "none"
    } else {
        text.style.display = "none";
        quali.style.display = "none";
    }
}








