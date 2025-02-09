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

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const hiddenContent = button.nextElementSibling;
            hiddenContent.classList.toggle("active"); // Přepínáme třídu "active" - ZDE JE OPRAVA
            button.textContent = hiddenContent.classList.contains("active") ? "Čtěte méně" : "Čtěte více";
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Toggle buttons
    const buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const hiddenContent = button.parentElement.nextElementSibling; // Změna výběru elementu
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

    // Contact links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const currentPath = window.location.pathname;
            const isOnIndex = currentPath.includes("index.html") || currentPath === "/";

            if (isOnIndex) {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.error("Contact section not found on index.html");
                }
            } else {
                window.location.href = "index.html#contact";
            }
        });
    });
});
