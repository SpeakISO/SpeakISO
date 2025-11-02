
// scroll to load fade in js code
document.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            element.classList.add('visible');
        }
    }
    )
        ;
}
)
    ;