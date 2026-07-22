let button = document.getElementById("welcomeButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Welcome to my portfolio!";
});
