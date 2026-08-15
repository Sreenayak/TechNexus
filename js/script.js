// ==========================================
// GLOBAL WEBSITE SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle =
        document.getElementById("themeToggle");

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.getElementById("navbar");


    // ======================================
    // DARK MODE
    // ======================================

    const savedTheme =
        localStorage.getItem("eventforge-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {

            themeToggle.textContent = "☀️";

        }

    }


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "eventforge-theme",
                isDark ? "dark" : "light"
            );


            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

        });

    }


    // ======================================
    // MOBILE MENU
    // ======================================

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle(
                "mobile-open"
            );

        });


        const navLinks =
            navbar.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove(
                    "mobile-open"
                );

            });

        });

    }


    // ======================================
    // SMOOTH SCROLL
    // ======================================

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");


            if (targetId === "#") return;


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ======================================
    // HEADER SCROLL EFFECT
    // ======================================

    const header =
        document.querySelector(".header");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    });

});