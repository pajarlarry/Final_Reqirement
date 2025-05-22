

// Function to show an alert when a project is clicked
function showProjectAlert(projectTitle) {
    alert("You clicked on: " + projectTitle);
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message! We will get back to you soon.");
}

// Add event listeners to project items
document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll('.project-item h3');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            showProjectAlert(item.innerText);
        });
    });

    // Add event listener to the contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});
