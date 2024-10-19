// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add event listener to the dark mode toggle button
document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Expandable Service Cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        const details = card.querySelector('.service-details');
        if (card.classList.contains('active')) {
            details.style.maxHeight = details.scrollHeight + 'px';
            details.style.opacity = '1';
        } else {
            details.style.maxHeight = '0';
            details.style.opacity = '0';
        }
    });
});

// Typing Effect (optional for hero section or any other place)
const typingText = document.querySelector('.typing-effect');
if (typingText) {
    const textArray = typingText.getAttribute('data-text').split(',');
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
        currentText = textArray[textIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent = currentText.slice(0, charIndex);

        // Adjust typing speed
        let typingSpeed = 100;
        if (isDeleting) {
            typingSpeed /= 2;
        }

        // When text is fully typed out
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 1000; // pause at the end
            isDeleting = true;
        }
        // When text is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === textArray.length) {
                textIndex = 0;
            }
        }

        setTimeout(type, typingSpeed);
    };

    type();
}
