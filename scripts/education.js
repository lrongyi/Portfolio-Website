document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.querySelector("#education")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("education-visible")
                } else {
                    entry.target.classList.remove("education-visible")
                }
            });
        },
        { rootMargin: "-10% 0px -10% 0px", threshold: 0.1 }
    );

    observer.observe(educationSection)
});

