const loaded = () => {
    document.body.classList.add("loaded")

    if (screen.width < screen.height) {
        setTimeout(() => {
            document.removeEventListener("scroll", aboutOnScroll);
            about.classList.add("scroll");
        }, 1500);
    }
};

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

const about = document.getElementById("about");
const aboutOnScroll = () => {
    if (scrollY + screen.height > about.offsetTop + 144) {
        about.classList.add("scroll");
    } else {
        about.classList.remove("scroll");
    }
};

const award = document.getElementById("award");
const awardOnScroll = () => {
    if (scrollY + screen.height > award.offsetTop + 144) {
        award.classList.add("scroll");
    } else {
        award.classList.remove("scroll");
    }
};

window.addEventListener("load", loaded);
document.addEventListener("scroll", navbarOnScroll);
document.addEventListener("scroll", aboutOnScroll);
document.addEventListener("scroll", awardOnScroll);
navbarToggler.addEventListener("click", toggleNavbar);