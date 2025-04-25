document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.getElementById("login-link");

    if (sessionStorage.getItem("isLoggedIn") === "true") {
        loginLink.textContent = "Connecté";
        
        document.querySelectorAll(".logState").forEach(element => {
            element.style.display = "block";
        });
    }
});

const images = [
    "./assets/mail-example.png",
    "./assets/SMS-form.png"
];

let currentIndex = 0;

function openPopup() {
    document.getElementById("imagePopup1").style.display = "flex";
    document.getElementById("popupImage1").src = images[currentIndex];
}

function closePopup(event) {
    if (event.target === document.getElementById("imagePopup1") || event.target.classList.contains("close-btn")) {
        document.querySelectorAll("#imagePopup1").forEach(element => {
            element.style.display = "none";
        });
    }
}

function nextImage(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("popupImage1").src = images[currentIndex];
}

function prevImage(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("popupImage1").src = images[currentIndex];
}


const images2 = [
    "./assets/erp-exemple.png",
    "./assets/mcd-miro.png"
];

let currentIndex2 = 0;

function openPopup2() {
    document.getElementById("imagePopup2").style.display = "flex";
    document.getElementById("popupImage2").src = images2[currentIndex2];
}

function closePopup2(event) {
    if (event.target === document.getElementById("imagePopup2") || event.target.classList.contains("close-btn")) {
        document.querySelectorAll("#imagePopup2").forEach(element => {
            element.style.display = "none";
        });
    }
}

function nextImage2(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    document.getElementById("popupImage2").src = images2[currentIndex2];
}

function prevImage2(event) {
    event.stopPropagation(); // Empêche la fermeture de la pop-up
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    document.getElementById("popupImage2").src = images2[currentIndex2];
}