const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const usernameMsg = document.getElementById("usernameMsg");
const passwordMsg = document.getElementById("passwordMsg");
const phoneMsg = document.getElementById("phoneMsg");

const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
const phoneRegex = /^\+234[0-9]{10}$/;

username.addEventListener("input", () => {
    if(usernameRegex.test(username.value)){
        usernameMsg.textContent = "✅ Valid username";
        usernameMsg.style.color = "green";
    } else {
        usernameMsg.textContent = "❌ 5-15 alphanumeric characters only";
        usernameMsg.style.color = "red";
    }
});

password.addEventListener("input", () => {
    if(passwordRegex.test(password.value)){
        passwordMsg.textContent = "✅ Strong password";
        passwordMsg.style.color = "green";
    } else {
        passwordMsg.textContent = "❌ Min 8 chars, one uppercase, one digit, one special character";
        passwordMsg.style.color = "red";
    }
});

phone.addEventListener("input", () => {
    if(phoneRegex.test(phone.value)){
        phoneMsg.textContent = "✅ Valid phone number";
        phoneMsg.style.color = "green";
    } else {
        phoneMsg.textContent = "❌ Format: +234 followed by 10 digits";
        phoneMsg.style.color = "red";
    }
});