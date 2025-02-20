// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        showAlert("Please fill in all fields.", "error");
        return;
    }

    if (!validateEmail(email)) {
        showAlert("Please enter a valid email address.", "error");
        return;
    }

    showAlert("Message sent successfully!", "success");
    this.reset(); // Clear form after submission
});

// Email Validation Function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show Alert Message
function showAlert(message, type) {
    let alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

