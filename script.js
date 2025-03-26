// Toggle Navigation Menu for Mobile
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('open');
}

// Toggle Dropdown Menu
function toggleDropdown() {
    let dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('dropdown-hidden');
}

// Live Case Status Simulation
const statusText = document.getElementById('status-text');
const statuses = [
    "New case hearing scheduled at 10:30 AM",
    "Court in session, hearing ongoing...",
    "Verdict announced: Case resolved!",
    "Next hearing date: April 12, 2025"
];

let index = 0;
setInterval(() => {
    statusText.innerText = statuses[index];
    index = (index + 1) % statuses.length;
}, 5000);

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('form-message').innerText = "✅ Message Sent Successfully!";
    } else {
        document.getElementById('form-message').innerText = "⚠️ Please fill all fields.";
    }
});
