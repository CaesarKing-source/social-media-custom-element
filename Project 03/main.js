let main = document.querySelector('#main');
let cursorP = document.querySelector('.cursor');

main.addEventListener('mousemove', function(dets) {
    cursorP.style.left = dets.x + "px";
    cursorP.style.top = dets.y + "px";
})