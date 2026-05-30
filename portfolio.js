
// Fix: Select all sections and all nav links (main navbar)
const sections = document.querySelectorAll('section');
// Select all nav links in .nav-container with href starting with #
const navlinks = document.querySelectorAll('.nav-container a[href^="#"]');

function updateActiveNav() {
    const scrollY = window.scrollY;
    let activeSet = false;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160; // adjust offset for fixed nav
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').toLowerCase() === '#' + sectionId.toLowerCase()) {
                    link.classList.add('active');
                    activeSet = true;
                }
            });
        }
    });
    if (!activeSet) {
        navlinks.forEach(link => link.classList.remove('active'));
    }
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);












function toggleDropdown() {
        const dropdown = document.querySelector('.dropdown');
        const hamburger = document.querySelector('.hamburg');
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        dropdown.style.flexDirection = dropdown.style.flexDirection === 'column' ? 'row' : 'column';
        dropdown.style.justifyContent = dropdown.style.justifyContent === 'flex-start' ? 'flex-end' : 'flex-start';
        dropdown.style.alignItems = dropdown.style.alignItems === 'flex-start' ? 'flex-end' : 'center';
        hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
    }