const toggleSwitch = document.getElementById('toggle');
const greetingText = document.getElementById('greeting');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.style.backgroundColor = '#f9f9f9';
        greetingText.textContent = 'Good Morning :)';
        greetingText.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#1a1a2e';
        greetingText.textContent = 'Good Night :)';
        greetingText.style.color = '#fff';
    }
});