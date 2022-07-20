const signUpBtn = document.querySelector(".signin-button")
const signInForm = document.querySelector(".signin-form")
const signInBtn = document.getElementById("signIn")

// Sign in fields
const signInEmail = document.getElementById("signin-email")
const signInPassword = document.getElementById("signin-password")
const signInForgotPassword = document.getElementById("signin-forgot-password")
const signInErrorMessage = document.getElementById("signin-error-massage")

// Sign up fields
const signUpName = document.getElementById("signup-name")
const signUpEmail = document.getElementById("signup-email")
const signUpPassword = document.getElementById("signup-password")
const signUpForgotPassword = document.getElementById("signup-forgot-password")
const signUpErrorMessage = document.getElementById("signup-error-massage")

// Switching signin and signup

function pullTheTrigger() {
    document.querySelector(".container").classList.add("right-panel-active")
    signInForm.classList.add("hide-signin")
}


function welcomeSignInAction() {
    document.querySelector(".container").classList.remove("right-panel-active")
    signInForm.classList.remove("hide-signin")

}

// Let's verify Signin Form
function signinAction() {
    if(signInEmail.value == "" || signInPassword.value == "") {
        signInErrorMessage.textContent = "Please enter a valid credentials."
        return;
    }else {
        signInErrorMessage.textContent = ""

    }
}

// Let's verify Signup Form
function signupAction() {
    if(signUpEmail.value == "" || signUpPassword.value == "" || signUpName.value == "") {
        signUpErrorMessage.textContent = "Please enter a valid credentials."
        return;
    }else {
        signUpErrorMessage.textContent = ""
        
    }
}