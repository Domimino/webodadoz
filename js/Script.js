document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for contact links
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Slider
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let autoPlayInterval;

    if (slidesContainer && slides.length > 0 && prevButton && nextButton) {
        const showSlide = (n) => {
            slides.forEach(slide => slide.style.display = 'none');
            slides[n].style.display = 'block';
            currentSlide = n;
        };

        const nextSlide = () => showSlide((currentSlide + 1) % slides.length);
        const prevSlide = () => showSlide((currentSlide - 1 + slides.length) % slides.length);

        showSlide(0);
        autoPlayInterval = setInterval(nextSlide, 3000);

        [prevButton, nextButton].forEach((button, index) => {
            button.addEventListener('click', () => {
                clearInterval(autoPlayInterval);
                index === 0 ? prevSlide() : nextSlide();
                autoPlayInterval = setInterval(nextSlide, 3000);
            });
        });
    }

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    if (hamburger && menu) {
        const toggleMenu = () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('touchstart', toggleMenu);
}

    // Dropdown menu for mobile
    document.querySelectorAll('.menu > li').forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItem.classList.toggle('clicked');
        });
    });

    // Toggle hidden text
    document.querySelectorAll("#toggle-button").forEach(button => {
        button.addEventListener("click", function () {
            const hiddenText = this.nextElementSibling;
            if (hiddenText) {
                hiddenText.classList.toggle("active");
                this.textContent = hiddenText.classList.contains("active") ? "ZOBRAZIT MÉNĚ" : "ZJISTI VÍCE";
            }
        });
    });
});

function toggleText() {
    var textElements = document.querySelectorAll('.hidden-text');
    textElements.forEach(function(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

    var button = document.querySelector('.btn-show-more');
    if (button.innerHTML === "Zjisti více") {
        button.innerHTML = "ZJISTI VÍCE / SKRÝT";
    } else {
        button.innerHTML = "ZJISTI VÍCE / SKRÝT";
    }
}

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function(event) {

        let isValid = true;

        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Prosím vyplňte jméno.');
            nameInput.focus();
        }

        const emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            isValid = false;
            alert('Prosím vyplňte platný e-mail.');
            emailInput.focus();
        }

        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Prosím vyplňte zprávu.');
            messageInput.focus();
        }

        if (!isValid) {
            event.preventDefault();
        }

    });
}
