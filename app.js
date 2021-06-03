const modeList = document.querySelector(".mode-list");
const modeInputs = modeList.querySelectorAll("input");
const body = document.querySelector("body");

modeInputs.forEach(input => {
    const upperNav = document.querySelector(".upper-nav");
    const lowerNav = document.querySelector(".lower-nav");
    input.addEventListener("change", (event) => {
        const targetId = event.currentTarget.getAttribute("id");
        if(targetId === "dark") {
            body.classList.add("dark-mode");
            lowerNav.classList.add("dark-mode");
            upperNav.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode")
            lowerNav.classList.remove("dark-mode");
            upperNav.classList.remove("dark-mode");
        }
    })
});

const headerLinks = document.querySelectorAll("header a");
const upperList = document.querySelector("#upper-list");
const lowerList = document.querySelector("#lower-list-1");
headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        upperList.hidden = true;
        upperList.setAttribute("aria-expanded", "false");
        lowerList.hidden = true;
        lowerList.setAttribute("aria-expanded", "false");
    })
})

const fontList = document.querySelector(".font-list");
const fontInputs = fontList.querySelectorAll("input");

fontInputs.forEach(input => {
    input.addEventListener("change", (event) => {
        const targetId = event.currentTarget.getAttribute("id");
        
        if(targetId === "font-large") {
            body.classList.add("font-large")
            body.classList.remove("font-xl")
        } else if (targetId === "font-xl") {
            body.classList.add("font-xl")
            body.classList.remove("font-large")
        } else {
            body.classList.remove("font-xl")
            body.classList.remove("font-large")
        }
    })
});


const menuBtn = document.querySelectorAll(".menu-btn");
menuBtn.forEach(btn => {
    const toggleList = document.querySelectorAll(".toggle-list");
    btn.addEventListener("click", (event) => {
        const ariaControls = event.currentTarget.getAttribute("aria-controls");
        const controlledAria = document.getElementById(ariaControls);
        const ariaExpanded = controlledAria.getAttribute("aria-expanded");
        if (ariaExpanded === "false") {
            toggleList.forEach(list => {
                list.hidden = true;
                list.setAttribute("aria-expanded", "false");
            })
            controlledAria.hidden = false;
            controlledAria.setAttribute("aria-expanded", "true");
        } else {
            controlledAria.hidden = true;
            controlledAria.setAttribute("aria-expanded", "false");
        }
    })
});


const nextLink = document.querySelector(".next-link");
const topLink = document.querySelector(".top-link");
const heroSection = document.querySelector(".hero-section");
window.addEventListener("scroll", () => {
    if(window.scrollY > (heroSection.clientHeight / 1.1)) {
        nextLink.hidden = true;
        topLink.hidden = false;
    } else {
        nextLink.hidden = false;
        topLink.hidden = true;
    }
})