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

    /* 🔥 4. NEW Responsive Menu Toggle (your new code) */
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

});

/* Close menu when a link is clicked (mobile) */
const allLinks = document.querySelectorAll("#nav-links a");
allLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

/* Sticky header shadow */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) header.classList.add("shadow");
    else header.classList.remove("shadow");
});

/* Smooth scroll for nav links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* Reveal animations */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Dark mode toggle */
const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

