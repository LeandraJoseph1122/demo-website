
// Existing welcome button functionality
document.getElementById("welcomeButton").addEventListener("click", function() {
    alert("Welcome to my demo website!");
});

// Responsive navigation functionality
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});
