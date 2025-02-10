document.addEventListener("DOMContentLoaded", () => {
    // Toggle buttons
    const buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const hiddenContent = button.parentElement.nextElementSibling;
            hiddenContent.classList.toggle("hidden");
            button.textContent = hiddenContent.classList.contains("hidden") ? "Čtěte více" : "Čtěte méně";
        });
    });

    // Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.aktuality .slide');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.slides-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Contact links (opraveno)
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            if (window.location.pathname.includes('index.html')) {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error("Sekce 'contact' nebyla nalezena na index.html"); // Hláška pro usnadnění ladění
                }
            } else {
                window.location.href = 'index.html#contact';
            }
        });
    });
});