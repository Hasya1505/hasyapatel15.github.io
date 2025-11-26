document.addEventListener('DOMContentLoaded', () => {

    // 1. Calculate and display average SPI
    (function calculateAvgSpi() {
        const scores = [7.48, 7.52, 7.50, 7.88];
        const sum = scores.reduce((acc, v) => acc + v, 0);
        const avg = sum / scores.length;
        const formattedAvg = avg.toFixed(2);
        
        // Update Avg SPI in Hero Card
        const avgSpiSpan = document.getElementById('avg-spi-value');
        if (avgSpiSpan) avgSpiSpan.textContent = formattedAvg;
        
        // Update Avg SPI below Academic table
        const cgpaSpan = document.getElementById('cgpa-value');
        if (cgpaSpan) cgpaSpan.textContent = formattedAvg;
    })();

    // 2. Update footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Scroll-to-top button visibility and function
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    function toggleScrollButton() {
        if (scrollBtn) {
            scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
        }
    }

    if (scrollBtn) {
        window.addEventListener('scroll', toggleScrollButton);
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveNav() {
        let currentId = '';
        const scrollPos = window.scrollY + 100; // offset for sticky header

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                currentId = id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    window.addEventListener('load', setActiveNav);
});