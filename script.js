const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        toggleIcon.src = 'moon.png'
    } else {
        toggleButton.textContent = 'Dark Mode';
        toggleIcon.src = 'dark-moon.png'
    }
});

// Set initial mode
if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}