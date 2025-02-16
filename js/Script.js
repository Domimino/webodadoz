document.addEventListener("DOMContentLoaded", () => {
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
});

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

    // Auto-close dropdowns on smaller screens
    const dropdowns = document.querySelectorAll(".dropdown");
    document.addEventListener("click", (e) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // ... předchozí kód ...

    const menuButton = document.querySelector('.menu-button');
    const submenu = document.querySelector('.submenu');

    menuButton.addEventListener('click', () => {
        menuButton.parentElement.classList.toggle('active'); // Přidáme třídu 'active' k rodiči <li>
        submenu.classList.toggle('open');
    });

    // ... další kód ...
});