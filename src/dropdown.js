// js/dropdown.js

// Function to initialize the dropdown menu functionality
export function initDropdown() {
    // Select all elements with the class 'dropdown-btn' and add a click event listener to each
    document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the 'visible' class on the dropdown content when the button is clicked
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('visible');
        });
    });

    // Select all anchor elements within the dropdown content and add a click event listener to each
    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', (event) => {
            // Prevent the default link behavior
            event.preventDefault();
            // Change the background color of the body to the color specified in the data-color attribute
            document.body.style.backgroundColor = item.getAttribute('data-color');
            // Close the dropdown menu by removing the 'visible' class
            item.parentElement.classList.remove('visible');
        });
    });
}
