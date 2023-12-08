// Navbar script
const navbarSticky = document.getElementById(navbar);
const initalPosition = nav.offsetTop;

function handleScroll() {

    const scrollPosition = window.scrollY;

    if (scrollPosition => initalPosition) {
        navbarSticky.style.position = 'fixed';
        navbarSticky.style.top = '0';
    } else {
        navbarSticky.style.position = 'sticky';
    }

window.addEventListener('scroll', handleScroll);

}