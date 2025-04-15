// JavaScript for handling tabs (Top Athletes / Top Coaches)
document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Deactivate all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Activate the clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show the content corresponding to the clicked button
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Optionally, you can add smooth scroll behavior for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
