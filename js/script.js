const loaded = () => {
    document.body.classList.add("loaded")

    // if (screen.width < screen.height) {
    //     setTimeout(() => {
    //         document.removeEventListener("scroll", aboutOnScroll);
    //         about.classList.add("scroll");
    //     }, 1500);
    // }
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
// const aboutOnScroll = () => {
//     if (scrollY + screen.height > about.offsetTop + 360) {
        about.classList.add("scroll");
//     } else {
//         about.classList.remove("scroll");
//     }
// };

// const award = document.getElementById("award");
// const awardOnScroll = () => {
//     if (scrollY + screen.height > award.offsetTop + 360) {
        award.classList.add("scroll");
//     } else {
//         award.classList.remove("scroll");
//     }
// };

const career = document.getElementById("career");
// const careerOnScroll = () => {
//     if (scrollY + screen.height > career.offsetTop + 360) {
        career.classList.add("scroll");
//     } else {
//         career.classList.remove("scroll");
//     }
// };

const work = document.getElementById("work");
// const workOnScroll = () => {
//     if (scrollY + screen.height > work.offsetTop + 360) {
        work.classList.add("scroll");
//     } else {
//         work.classList.remove("scroll");
//     }
// };

window.addEventListener("load", loaded);
document.addEventListener("scroll", navbarOnScroll);
// document.addEventListener("scroll", aboutOnScroll);
// document.addEventListener("scroll", awardOnScroll);
// document.addEventListener("scroll", careerOnScroll);
// document.addEventListener("scroll", workOnScroll);
navbarToggler.addEventListener("click", toggleNavbar);