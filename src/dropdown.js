// Dropdown menu functionality

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
        // Set the hover background color for each dropdown item
        const color = item.getAttribute('data-color');
        item.style.setProperty('--hover-color', color);

        // Change the color of the GitHub icon and body based on the background color
        if (color === 'var(--indigo)') {
            // change text color on hover 
            item.addEventListener('mouseover', () => {
                item.style.setProperty('color', 'var(--primary-light)');
            });
            item.addEventListener('mouseout', () => {
                item.style.setProperty('color', 'var(--primary-dark)');
            });
        }
        
        item.addEventListener('click', (event) => {
            // Prevent the default link behavior
            event.preventDefault();
            // Change the background color of the body to the color specified in the data-color attribute
            document.body.style.backgroundColor = color;

            // Change the color of the GitHub icon and body based on the background color
            if (color === 'var(--indigo)') {
                document.body.style.color = 'var(--primary-light)';
                document.getElementsByClassName('fa-github')[0].style.color = 'var(--primary-light)';
            } else {
                document.body.style.color = '#333';
                document.getElementsByClassName('fa-github')[0].style.color = 'var(--primary-dark)';
            };

            // Close the dropdown menu by removing the 'visible' class
            item.parentElement.classList.remove('visible');
        });
    });
}



// // js/dropdown.js

// // Function to initialize the dropdown menu functionality
// export function initDropdown() {
//     // Select all elements with the class 'dropdown-btn' and add a click event listener to each
//     document.querySelectorAll('.dropdown-btn').forEach(button => {
//         button.addEventListener('click', () => {
//             // Toggle the 'visible' class on the dropdown content when the button is clicked
//             const dropdownContent = button.nextElementSibling;
//             dropdownContent.classList.toggle('visible');
//         });
//     });

//     // Select all anchor elements within the dropdown content and add a click event listener to each
//     document.querySelectorAll('.dropdown-content a').forEach(item => {
//         item.addEventListener('click', (event) => {
//             // Prevent the default link behavior
//             event.preventDefault();
//             // Change the background color of the body to the color specified in the data-color attribute
//             const color = item.getAttribute('data-color');

//             item.style.setProperty('--hover-color', color);

//             // Change the background color of the body to the color specified in the data-color attribute
//             document.body.style.backgroundColor = color;
//             // Close the dropdown menu by removing the 'visible' class
//             item.parentElement.classList.remove('visible');
//             // updateDropdownHoverColor(color);
//         });
//     });

//     // Function to update the dropdown hover color
//     function updateDropdownHoverColor(color) {
//         // Create a new style element
//         let styleElement = document.getElementById('dropdown-hover-style');
//         if (!styleElement) {
//             styleElement = document.createElement('style');
//             styleElement.id = 'dropdown-hover-style';
//             document.head.appendChild(styleElement);
//         }
//         // Set the inner text to update the hover style
//         styleElement.innerText = `
//             .dropdown-content a:hover {
//                 background-color: ${color} !important;
//                 color: #fff;
//             }
//         `;
//     }
// }
