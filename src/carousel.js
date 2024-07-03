export function initCarousel() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        document.querySelector('.carousel').style.transform = `translateX(-${slideIndex * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));
    document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => showSlide(slideIndex + 1), 5000);

    // Initial slide setup
    showSlide(slideIndex);
}
