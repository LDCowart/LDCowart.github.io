document.getElementById("learnMore")?.addEventListener("click", function() {
    alert("JavaScript is a versatile programming language used for web development!");
});

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});

// Example of a simple clock that updates every second
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
}
setInterval(updateClock, 1000);
