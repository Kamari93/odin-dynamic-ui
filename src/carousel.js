// Function to initialize the carousel functionality
export function initCarousel() {
    let slideIndex = 0; // Variable to keep track of the current slide index
    const slides = document.querySelectorAll('.carousel-slide'); // Select all slides
    const dots = document.querySelectorAll('.dot'); // Select all dots

    // Function to show a specific slide
    function showSlide(index) {
        // Loop back to the first slide if the index exceeds the number of slides
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) { // Loop back to the last slide if the index is negative
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index; // Set the slide index to the given index
        }

        // Move the carousel to show the current slide
        document.querySelector('.carousel').style.transform = `translateX(-${slideIndex * 100}%)`;

        // Update the active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    // Add click event listener to the next button to show the next slide
    document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));
    // Add click event listener to the previous button to show the previous slide
    document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));

    // Add click event listeners to the dots to jump to the respective slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Automatically advance to the next slide every 5 seconds
    setInterval(() => showSlide(slideIndex + 1), 5000);

    // Initial slide setup
    showSlide(slideIndex);
}
