var btnLogin = document.getElementById("BtnLogin");
var txtUserName = document.getElementById("TxtUser");
var txtPasswordName = document.getElementById("TxtPassword");
var welcomeText = document.getElementById("WelcomeText");
var wrongCredentialsText = document.getElementById("WrongCredentialText");


function btnLoginClicked(event) {
    var loginResult = credentialsValidation();

    if (loginResult == "Done...") {
        welcomeText.style.display = "block";
        welcomeText.innerText = loginResult;
        wrongCredentialsText.style.display = "none";
    } else {
        wrongCredentialsText.innerText = loginResult;
        welcomeText.style.display = "none";
        wrongCredentialsText.style.display = "block";
    }
}

function credentialsValidation() {
    var message;

    if (txtUserName.value == "") {
        message = "please enter a valid user name";
    } else if (txtPasswordName.value == "") {
        message = "please Enter valid password";
    } else {
        var isLoggedIn = login();
        console.log(isLoggedIn)
        if (isLoggedIn) {
            message = "Done...";
        } else {
            message = "Wrong username or password";
        }
        return message;
    }
}

async function login() {
    var result = false;
    var request =
        {
            "email": txtUserName.value,
            "password": txtPasswordName.value
        }
    await fetch("https://reqres.in/api/login", {
        method: "post",
        body: JSON.stringify(request),
        headers: {
            "content-type": "application/json"
        }
    }).then(function (response) {
        if (response.status === 200) {
            console.log("request after success ", response)
            result = true;
            localStorage.token = response.token;
        } else if (response.status === 400) {
            console.log("request after success ", response)
            result = false;
        }
    }).catch(function (error) {
        console.log(error);
    });

    return result;
}