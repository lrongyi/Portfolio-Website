document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("intro-visible")
                } else {
                    entry.target.classList.remove("intro-visible")
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(intro)
});