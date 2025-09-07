// -------------------------------
// Part 1: Event Handling Example
// -------------------------------
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// -------------------------------
// Part 2: Interactive Elements
// -------------------------------

// Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counter = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// -------------------------------
// Part 3: Form Validation
// -------------------------------
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from submitting automatically

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate fields
  if (name === "") {
    formMessage.textContent = "❌ Name cannot be empty.";
    formMessage.style.color = "red";
  } else if (!emailRegex.test(email)) {
    formMessage.textContent = "❌ Enter a valid email address.";
    formMessage.style.color = "red";
  } else if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";

    // Optionally clear form
    form.reset();
  }
});
