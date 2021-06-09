const modeList = document.querySelector(".mode-list");
const modeInputs = modeList.querySelectorAll("input");
window.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("mode");
    if (mode) {
        modeInputs.forEach(input => {
            const inputId = input.getAttribute("id");
            if (inputId == mode) {
                input.checked = true;
            }
            if (mode == "dark") {
                enableDark();
            }
        })
    } else {
        localStorage.setItem("mode", "mode-default")
        document.getElementById("mode-default").checked = true;
    }
    const font = localStorage.getItem("font");
    if (font) {
        fontInputs.forEach(input => {
            const inputId = input.getAttribute("id");
            if (inputId == font) {
                input.checked == true
            }
            if (font == "font-large") {
                document.getElementById(font).checked = true;
                body.classList.add("font-large");
                body.classList.remove("font-xl");
            } else if (font == "font-xl") {
                document.getElementById(font).checked = true;
                body.classList.add("font-xl");
                body.classList.remove("font-large");
            } else {
                document.getElementById("font-default").checked = true;
                body.classList.remove("font-xl");
                body.classList.remove("font-large");
            }
        })
    } else {
        document.getElementById("font-default").checked = true;
        localStorage.setItem("font", "font-default")
    }

}) 
    


const body = document.querySelector("body");

const upperNav = document.querySelector(".upper-nav");
const lowerNav = document.querySelector(".lower-nav");
modeInputs.forEach(input => {
    input.addEventListener("change", (event) => {
        const targetId = event.currentTarget.getAttribute("id");
        if(targetId === "dark") {
            localStorage.setItem("mode", "dark");
            enableDark();
        } else {
            localStorage.setItem("mode", "mode-default");
            disableDark();
        }
    })
});

const enableDark = () => {
    body.classList.add("dark-mode");
    lowerNav.classList.add("dark-mode");
    upperNav.classList.add("dark-mode");
}

const disableDark = () => {
    body.classList.remove("dark-mode");
    lowerNav.classList.remove("dark-mode");
    upperNav.classList.remove("dark-mode");
}

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
            localStorage.setItem("font", "font-large");
            body.classList.add("font-large")
            body.classList.remove("font-xl")
        } else if (targetId === "font-xl") {
            localStorage.setItem("font", "font-xl");
            body.classList.add("font-xl")
            body.classList.remove("font-large")
        } else {
            localStorage.setItem("font", "font-default");
            body.classList.remove("font-xl")
            body.classList.remove("font-large")
        }
    })
});


const menuBtn = document.querySelectorAll(".menu-btn");
const toggleList = document.querySelectorAll(".toggle-list");
menuBtn.forEach(btn => {
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
    if(window.scrollY > (heroSection.clientHeight / 1.25)) {
        nextLink.hidden = true;
        topLink.hidden = false;
    } else {
        nextLink.hidden = false;
        topLink.hidden = true;
    }
})

const scrollCta = document.querySelectorAll(".scroll-cta");

scrollCta.forEach(cta => {

        cta.addEventListener("click", (event) => {
            event.preventDefault();
            const id = event.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            const navHeight = upperNav.getBoundingClientRect().height;
            let position = element.offsetTop - navHeight;
            window.scrollTo({
                left: 0,
                top: position
            })
        })
       
    
})

// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = navContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;
    
//     if(!fixedNav) {
//         position = position - navHeight;
//     }

//     if (navHeight > 93) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });

//     navContainer.style.height = 0;
//   });
// });

const mainContent = document.getElementById("main-content");
mainContent.addEventListener("click", () => {
    toggleList.forEach(list => {
        if(list.getAttribute("aria-expanded") == "true") {
            list.setAttribute("aria-expanded", "false");
            list.hidden = "true"
        }
    })
})

const hero = document.getElementById("hero");
hero.addEventListener("click", () => {
    toggleList.forEach(list => {
        if(list.getAttribute("aria-expanded") == "true") {
            list.setAttribute("aria-expanded", "false");
            list.hidden = "true"
        }
    })
})
