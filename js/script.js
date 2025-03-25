document.addEventListener("DOMContentLoaded", () => {
 // Smooth scroll for contact links
 const contactLinks = document.querySelectorAll('a[href="#contact"]');
 contactLinks.forEach(link => {
     link.addEventListener('click', function(event) {
         event.preventDefault();
         const contactSection = document.getElementById('contact');
         if (contactSection) {
             contactSection.scrollIntoView({ behavior: 'smooth' });
         }
     });
 });


    // Automatické přehrávání slideru a ovládání tlačítky
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let autoPlayInterval; // Proměnná pro interval automatického přehrávání

    if (slidesContainer && slides.length > 0 && prevButton && nextButton) {
        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            slides[n].style.display = 'block';
            currentSlide = n;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            let prev = (currentSlide - 1 + slides.length) % slides.length; // Zajištění správného indexu i pro předchozí
            showSlide(prev);
        }

        showSlide(0); // Zobrazíme první slide na začátku

        // Spuštění automatického přehrávání
        autoPlayInterval = setInterval(nextSlide, 3000);

        // Obsluha tlačítek
        nextButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval); // Zrušíme automatické přehrávání po kliknutí
            nextSlide();
            autoPlayInterval = setInterval(nextSlide, 3000); // Znovu spustíme automatické přehrávání
        });

        prevButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval); // Zrušíme automatické přehrávání po kliknutí
            prevSlide();
            autoPlayInterval = setInterval(nextSlide, 3000); // Znovu spustíme automatické přehrávání
        });
    }
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.querySelector("ul").classList.toggle("active");
    });
});

// Dropdown functionality
const dropdownLinks = document.querySelectorAll(".menu ul li a");
        dropdownLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const dropdown = link.nextElementSibling;
                if (dropdown && dropdown.classList.contains("dropdown")) {
                    e.preventDefault();
                    dropdown.classList.toggle("open");
                }
            });
        });

// Close menu on outside click
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove("active");
        const dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
    }
});

 // Auto-close dropdowns on smaller screens
 const dropdowns = document.querySelectorAll(".dropdown");
 document.addEventListener("click", (e) => {
     dropdowns.forEach(dropdown => {
         if (!dropdown.contains(e.target)) {
             dropdown.classList.remove("open");
         }
     });
 });

 const menuButton = document.querySelector('.menu-button');
    const submenu = document.querySelector('.submenu');

    menuButton.addEventListener('click', () => {
        menuButton.parentElement.classList.toggle('active'); // Přidáme třídu 'active' k rodiči <li>
        submenu.classList.toggle('open');
    });
