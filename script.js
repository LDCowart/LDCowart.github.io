document.getElementById("learnMore").addEventListener("click", function() {
    alert("HTML stands for HyperText Markup Language. It's the foundation of web development!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});
