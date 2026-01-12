// Redirect first-time visitors
window.onload = function () {
    let user = localStorage.getItem("user");
    if (!user && !window.location.href.includes("signup")) {
        // First time → show login
        console.log("First time visitor");
    }
};

// Signup Function
function signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found! Please sign up.");
        window.location.href = "signup.html";
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "home.html"; // your e-commerce site
    } else {
        alert("Invalid credentials");
    }
}
