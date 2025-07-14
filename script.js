// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });


    // --- Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }


    // --- Scroll Reveal Functionality ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < revealElements.length; i++) {
            const element = revealElements[i];
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; // Distance from bottom of viewport to trigger animation

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check on page load
    revealOnScroll();

});
