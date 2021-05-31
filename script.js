const navBtn = document.querySelectorAll(".nav-btn");
navBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const ariaControls = event.currentTarget.getAttribute("aria-controls");
        const controlledAria = document.getElementById(ariaControls);
        const ariaExpanded = controlledAria.getAttribute("aria-expanded");
        if (ariaExpanded === "false") {
            controlledAria.hidden = false;
            controlledAria.setAttribute("aria-expanded", "true");
        } else {
            controlledAria.hidden = true;
            controlledAria.setAttribute("aria-expanded", "false");
        }
    })
});

window.addEventListener("scroll", () => {
    const primaryNav = document.querySelector(".primary");
    const primaryToggled = document.querySelector(".primary-toggled");
    if(window.scrollY > window.innerHeight / 1.25) {
        primaryNav.classList.add("slide");
        primaryToggled.classList.add("active");
    } else {
        primaryNav.classList.remove("slide");
        primaryToggled.classList.remove("active");
    }
})