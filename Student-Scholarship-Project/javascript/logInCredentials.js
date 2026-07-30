function createAccount(){
    const studentFullname = document.forms["createAccount"]["fullName"].value;
    const studentUsername = document.forms["createAccount"]["userName"].value;
    const studentPassword = document.forms["createAccount"]["password"].value;
    const studentConfirmPassword = document.forms["createAccount"]["rePassword"].value;
    if (studentFullname.trim().length === 0 || studentFullname.trim() === "") {
        document.getElementById("test-name").innerHTML = "enter valid name";
        return event.preventDefault();
    }
    else if (studentUsername.trim().length === 0 || studentUsername.trim() === "") {
        document.getElementById("test-uname").innerHTML = "create valid username";
        return event.preventDefault();
    }
    else if (studentPassword.length < 8 || studentPassword.length > 15) {
        document.getElementById("test-password").innerHTML = "create valid password";
        return event.preventDefault();
    }
    else if (studentConfirmPassword !== studentPassword) {
        document.getElementById("test-re-password").innerHTML = "passwords do not match";
        return event.preventDefault();
    }
    else {
        localStorage.setItem('fullName', studentFullname);
        localStorage.setItem('userName', studentUsername);
        localStorage.setItem('password', studentPassword);
        alert("Account created successfully!");
    }
    return window.location.href = "../html/login.html";
}

function getAccountCredentialsForLogInTest(){
    const storedUsername = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');
    const inputUsername = document.forms["login"]["userName"].value;
    const inputPassword = document.forms["login"]["password"].value;
    const inputCaptcha = document.forms["login"]["captcha"].value;

    if (inputUsername !== storedUsername) {
        document.getElementById("test-username").innerHTML = " does not match username.";
        return event.preventDefault();
    }else if (inputPassword !== storedPassword) {
        document.getElementById("test-password").innerHTML = " does not match password.";
        return event.preventDefault();
    }else if (GenerateCaptcha() !== inputCaptcha) {
        document.getElementById("test-captcha").innerHTML = "Invalid captcha.";
        return event.preventDefault();
    }else{
        alert("Login successful!");
    }
    return window.location.href = "../html/dashboard.html";
}

function getAccountCredentialsForDisplay(){
    const storedFullName = localStorage.getItem('fullName');
    const storedUsername = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');

    document.getElementById("display-fullname").innerHTML = "Full Name: " + storedFullName;
    document.getElementById("display-username").innerHTML = "Username: " + storedUsername;
    document.getElementById("display-password").innerHTML = "Password: " + storedPassword;

    
}

function GenerateCaptcha() {
    const captcha = Math.random().toString(36).substring(2, 8);    
    return document.getElementById("captcha").innerHTML = captcha;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('style-button');
  if (btn) btn.addEventListener('click',  createAccount())
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('login-button');
  if (btn) btn.addEventListener('click', getAccountCredentialsForLogInTest())
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('display-button');
  if (btn) btn.addEventListener('click', getAccountCredentialsForDisplay())
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('captcha-button');
  if (btn) btn.addEventListener('click', GenerateCaptcha())
});

