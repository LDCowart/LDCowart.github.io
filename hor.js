document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add the logic to send this data to a server if needed
    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
    
    // Reset form
    this.reset();
};
