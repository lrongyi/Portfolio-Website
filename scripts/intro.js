document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("intro-visible")
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(intro)
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navBar = document.querySelector(".nav-bar");
    const body = document.body;
    const navLinks = document.querySelectorAll(".nav-bar li a");

    mobileMenu.addEventListener("click", function () {
        navBar.classList.toggle("clicked");
        body.classList.toggle("stop-scroll");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navBar.classList.remove("clicked");
            body.classList.remove("stop-scroll");
        });
    });
});