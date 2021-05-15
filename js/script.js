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

document.addEventListener("scroll", navbarOnScroll);

const navbarToggler = document.getElementById("navbar-toggler");
const navbarCollapse = document.getElementById("navbar-collapse");

const toggleNavbar = () => {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("active");
};

navbarToggler.addEventListener("click", toggleNavbar);