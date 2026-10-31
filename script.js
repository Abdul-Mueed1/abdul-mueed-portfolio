
/* =========================================
   ABDUL MUEED | PORTFOLIO JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // 1. REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll(".reveal");

    // If browser does not support IntersectionObserver,
    // keep all content visible.
    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }

                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

    }


    // 2. SMOOTH SCROLL FOR INTERNAL LINKS
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // 3. HEADER SHADOW ON SCROLL
    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {
            header.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.25)";
        } else {
            header.style.boxShadow = "none";
        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    // 4. CURRENT YEAR IN FOOTER
    const footerText = document.querySelector(".footer p");

    if (footerText) {
        const currentYear = new Date().getFullYear();

        footerText.textContent =
            `© ${currentYear} Abdul Mueed. All Rights Reserved.`;
    }

});
