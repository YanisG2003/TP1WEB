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

// Sélection des éléments
const tabLogin = document.getElementById("tabLogin");
const tabSignup = document.getElementById("tabSignup");
const loginContainer = document.getElementById("loginContainer");
const signupContainer = document.getElementById("signupContainer");

// Changer d'onglet
tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginContainer.classList.remove("hidden");  // Affiche Connexion
    signupContainer.classList.add("hidden");    // Cache Inscription
});

tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupContainer.classList.remove("hidden"); // Affiche Inscription
    loginContainer.classList.add("hidden");     // Cache Connexion
});
