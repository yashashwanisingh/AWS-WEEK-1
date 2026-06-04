document.addEventListener('DOMContentLoaded', () => {
    // Select all tab buttons and all tab contents
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle switching tabs
    function switchTab(targetId) {
        // 1. Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // 2. Find the clicked button and the target content section
        const activeButton = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        const activeContent = document.getElementById(targetId);

        // 3. Add active class to both, making them visible/styled
        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Attach click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Optional: Handle the contact form submission purely for demonstration
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            alert('Transmission received. Our team will contact you shortly.');
            contactForm.reset(); // Clear the form
        });
    }
});