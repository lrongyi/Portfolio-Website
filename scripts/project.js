document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card').classList.toggle('flipped');
    });
});