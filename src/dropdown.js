export function initDropdown() {
    document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('visible');
        });
    });

    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.style.backgroundColor = item.getAttribute('data-color');
        });
    });
}
