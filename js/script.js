const loaded = () => document.body.classList.add("loaded");

const navbar = document.getElementById("navbar");
const navbarOnScroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-light");
        navbar.classList.remove("py-3");
    } else {
        navbar.classList.remove("bg-light");
        navbar.classList.add("py-3");
    }
};

const navbarToggler = document.getElementById("navbar-toggler");
const navbarCollapse = document.getElementById("navbar-collapse");
const toggleNavbar = () => {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("active");
};

window.addEventListener("load", loaded);
document.addEventListener("scroll", navbarOnScroll);
navbarToggler.addEventListener("click", toggleNavbar);