document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll pro odkazy s kotvou (např. kontakt)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Pokud je otevřené mobilní menu, po kliknutí ho zavřeme
                    const menu = document.querySelector('.menu');
                    const hamburger = document.getElementById('hamburger');
                    if (menu && menu.classList.contains('active')) {
                        menu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            }
        });
    });

    // Slider / Aktuality
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let autoPlayInterval;

    if (slidesContainer && slides.length > 0 && prevButton && nextButton) {
        const showSlide = (n) => {
            currentSlide = (n + slides.length) % slides.length;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        };

        const nextSlide = () => showSlide(currentSlide + 1);
        const prevSlide = () => showSlide(currentSlide - 1);

        // Automatické přepínání každých 4 sekundy
        autoPlayInterval = setInterval(nextSlide, 4000);

        prevButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            prevSlide();
            autoPlayInterval = setInterval(nextSlide, 4000);
        });

        nextButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            nextSlide();
            autoPlayInterval = setInterval(nextSlide, 4000);
        });
    }

    // Hamburger menu pro mobily
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    // Rozklikávací menu (Nabídka) na mobilech
    document.querySelectorAll('.menu > li').forEach(menuItem => {
        const dropdownToggle = menuItem.querySelector('a');
        const dropdown = menuItem.querySelector('.dropdown');
        
        if (dropdown) {
            dropdownToggle.addEventListener('click', (e) => {
                // Na mobilu zabráníme okamžitému prokliku, pokud má rozbalovací podmenu
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    menuItem.classList.toggle('clicked');
                }
            });
        }
    });
});

// Funkce pro rozbalení / skrytí textu v sekci "O nás"
function toggleText() {
    var textElements = document.querySelectorAll('.hidden-text');
    var button = document.querySelector('.btn-show-more');
    
    textElements.forEach(function(element) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
            if (button) button.innerHTML = "ZOBRAZIT MÉNĚ";
        } else {
            element.style.display = "none";
            if (button) button.innerHTML = "ZJISTI VÍCE";
        }
    });
}

// Validace kontaktního formuláře před odesláním
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(event) {
        let isValid = true;

        const nameInput = document.getElementById('name');
        if (nameInput && nameInput.value.trim() === '') {
            isValid = false;
            alert('Prosím vyplňte jméno.');
            nameInput.focus();
            event.preventDefault();
            return;
        }

        const emailInput = document.getElementById('email');
        if (emailInput && (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value))) {
            isValid = false;
            alert('Prosím vyplňte platný e-mail.');
            emailInput.focus();
            event.preventDefault();
            return;
        }

        const messageInput = document.getElementById('message');
        if (messageInput && messageInput.value.trim() === '') {
            isValid = false;
            alert('Prosím vyplňte zprávu.');
            messageInput.focus();
            event.preventDefault();
            return;
        }
    });
}
