

const hamburger = document.getElementById('hamburger-menu'); // Sélectionne le menu hamburger
const overlay = document.getElementById('overlay'); // Sélectionne l'overlay

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    if (overlay.style.right === "0px") {
        overlay.style.right = "-400px";
    } else {
        overlay.style.right = "0";
    }
});