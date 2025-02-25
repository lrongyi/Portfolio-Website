document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.querySelector(".education");
    const childElements = document.querySelectorAll(".left-container, .right-container");

    educationSection.classList.remove("education-visible");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    childElements.forEach(child => {
                        child.classList.add("education-visible")
                    })
                } else {
                    childElements.forEach(child => {
                        child.classList.remove("education-visible");
                    });
                }
            });
        },
        { rootMargin: "-10% 0px -10% 0px", threshold: 0.8 }
    );

    educationContainers.forEach(container => observer.observe(container));
});

