
// Fix: Select all sections and all nav links (main navbar)
const sections = document.querySelectorAll('section');
// Select all nav links in .nav-container with href starting with #
const navlinks = document.querySelectorAll('.nav-container a[href^="#"]');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160; // adjust offset for fixed nav
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                // Match href with section id (case-insensitive)
                if (link.getAttribute('href').toLowerCase() === '#' + sectionId.toLowerCase()) {
                    link.classList.add('active');
                }
            });
        }
    });
});


function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const hamburgerIcon = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.cross');

    dropdown.classList.toggle('open');
    dropdown.setAttribute('aria-hidden', dropdown.classList.contains('open') ? 'false' : 'true');
    if (dropdown.classList.contains('open')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}