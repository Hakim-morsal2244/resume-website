document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Your message has been sent successfully!");
    }
});
