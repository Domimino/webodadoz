document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for contact links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function (event) {
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
    let autoPlayInterval;

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
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        showSlide(0);
        autoPlayInterval = setInterval(nextSlide, 3000);

        nextButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            nextSlide();
            autoPlayInterval = setInterval(nextSlide, 3000);
        });

        prevButton.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            prevSlide();
            autoPlayInterval = setInterval(nextSlide, 3000);
        });
    }

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }

    const menuToggle = document.getElementById("menu-toggle");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.querySelector("ul").classList.toggle("active");
        });
    }

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

    // Close menu on outside click (upraveno)
    document.addEventListener("click", (e) => {
        if (menu && !menu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
            menu.classList.remove("active");
            const dropdowns = document.querySelectorAll(".dropdown");
            dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
        }
    });

    // Auto-close dropdowns on smaller screens (odstraněno - řešeno předchozím event listenerem)

    const menuButton = document.querySelector('.menu-button');
    const submenu = document.querySelector('.submenu');

    if (menuButton && submenu) {
        menuButton.addEventListener('click', () => {
            menuButton.parentElement.classList.toggle('active');
            submenu.classList.toggle('open');
        });
    }
});