let main = document.querySelector("#container");
let heart = document.querySelector("i");

main.addEventListener("dblclick", function() {
    heart.style.opacity = "1";

    setTimeout(function() {
        heart.style.opacity = "0";
    }, 1200);
})