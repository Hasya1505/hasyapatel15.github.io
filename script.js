
document.addEventListener("DOMContentLoaded", () => {

    /* 1. Calculate and display average SPI */
    const scores = [7.48, 7.52, 7.50, 7.88];
    const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);

    const avgSpiSpan = document.getElementById("avg-spi-value");
    if (avgSpiSpan) avgSpiSpan.textContent = avg;

    const cgpaSpan = document.getElementById("cgpa-value");
    if (cgpaSpan) cgpaSpan.textContent = avg;

    /* 2. Update footer year */
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    /* 3. Scroll-to-top button */
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* 4. Responsive Menu Toggle */
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    /* 5. Close menu when clicking a nav link */
    const allLinks = document.querySelectorAll("#nav-links a");
    allLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });

    /* 6. Close menu when clicking outside */
    document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("show");
        }
    });

});

