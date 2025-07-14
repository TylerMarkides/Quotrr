// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isActive = item.classList.contains('active');

            // First, close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });


    // --- Footer Year ---
    // Find the element with the ID of "year"
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        // Get the current year
        const currentYear = new Date().getFullYear();
        // Set the text of the span to the current year
        yearSpan.textContent = currentYear;
    }

});
