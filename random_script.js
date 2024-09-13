document.getElementById("showMore")?.addEventListener("click", function() {
    document.getElementById("moreWars").style.display = "block";
});

document.getElementById("updateCount")?.addEventListener("click", function() {
    const currentCount = Math.floor(Math.random() * 200000) + 150000; // Randomly update the count
    document.getElementById("serviceMembersCount").innerText = currentCount;
});

// Contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});
