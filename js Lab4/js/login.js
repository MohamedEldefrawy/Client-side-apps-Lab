var btnLogin = document.getElementById("BtnLogin");
var txtUserName = document.getElementById("TxtUser");
var txtPasswordName = document.getElementById("TxtPassword");
var username = "admin";
var password = "123";
var welcomeText = document.getElementById("WelcomeText");
var wrongCredentialsText = document.getElementById("WrongCredentialText");


function btnLoginClicked(event) {
    if (txtUserName.value === "admin" && txtPasswordName.value === "123") {
        welcomeText.style.display = "block";
        wrongCredentialsText.style.display = "none";
    } else {
        welcomeText.style.display = "none";
        wrongCredentialsText.style.display = "block";
    }
}
