const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

// Toggle between Sign-In and Sign-Up
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Handle Sign-Up Form Submission
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = signUpForm.querySelector("input[placeholder='Name']").value;
  const email = signUpForm.querySelector("input[placeholder='Email']").value;
  const password = signUpForm.querySelector("input[placeholder='Password']").value;

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  // Check if the user already exists
  const existingUser = localStorage.getItem(email);
  if (existingUser) {
    alert("User already exists. Please log in!");
    return;
  }

  // Save user data in localStorage
  localStorage.setItem(email, JSON.stringify({ name, password }));
  alert("Sign-up successful! Please log in.");
  container.classList.remove("active"); // Switch to login form
});

// Handle Sign-In Form Submission
signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = signInForm.querySelector("input[placeholder='Email']").value;
  const password = signInForm.querySelector("input[placeholder='Password']").value;

  if (!email || !password) {
    alert("All fields are required!");
    return;
  }

  // Validate user credentials
  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    alert('Welcome back, ${user.name}! Redirecting to the welcome page...');
    
    // Redirect to the welcome page
    window.location.href = "welcome.html"; // Replace with your actual welcome page URL
  } else {
    alert("Invalid email or password. Please try again!");
  }
});