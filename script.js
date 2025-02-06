document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const profilePic = document.getElementById('profilePic').files[0];
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const enteredCaptcha = document.getElementById('captcha').value;
    const generatedCaptcha = document.getElementById('captchaText').textContent;
    const passwordError = document.getElementById('passwordError');
    const captchaError = document.getElementById('captchaError');
    const messageDiv = document.getElementById('message');

    passwordError.textContent = "";
    captchaError.textContent = "";
    messageDiv.textContent = "";

    // Password validation: max length 8, at least one uppercase and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{1,8}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be max 8 characters, include one uppercase letter & one special character.";
        return;
    }

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return;
    }

    if (enteredCaptcha !== generatedCaptcha) {
        captchaError.textContent = "Incorrect CAPTCHA!";
        return;
    }
    
    alert("Form has been successfully submitted!");
    document.getElementById('registrationForm').reset();
});

function generateCaptcha() {
    const captchaText = Math.random().toString(36).substring(2, 8);
    document.getElementById('captchaText').textContent = captchaText;
}

generateCaptcha();
