document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.getElementById("login-link");

    if (sessionStorage.getItem("isLoggedIn") === "true") {
        loginLink.textContent = "Connecté";
        
        document.querySelectorAll(".logState").forEach(element => {
            element.style.visibility = "visible";
        });
    }
});

const images = [
    "./assets/mail-example.png",
    "./assets/SMS-form.png"
];

let currentIndex = 0;

function openPopup() {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupImage").src = images[currentIndex];
}

function closePopup(event) {
    if (event.target === document.getElementById("imagePopup") || event.target.classList.contains("close-btn")) {
        document.getElementById("imagePopup").style.display = "none";
    }
}

function nextImage(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("popupImage").src = images[currentIndex];
}

function prevImage(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("popupImage").src = images[currentIndex];
}