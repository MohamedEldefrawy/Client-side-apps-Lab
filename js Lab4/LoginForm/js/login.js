var btnLogin = document.getElementById("BtnLogin");
var txtUserName = document.getElementById("TxtUser");
var txtPasswordName = document.getElementById("TxtPassword");
var username = "admin";
var password = "123";
var welcomeText = document.getElementById("WelcomeText");
var wrongCredentialsText = document.getElementById("WrongCredentialText");


function btnLoginClicked(event) {
    var result = credentialsValidation();

    if (result == "Done...") {
        welcomeText.style.display = "block";
        welcomeText.innerText = result;
        wrongCredentialsText.style.display = "none";
    } else {
        wrongCredentialsText.innerText = result;
        welcomeText.style.display = "none";
        wrongCredentialsText.style.display = "block";
    }
}

async function credentialsValidation() {
    var message;

    if (txtUserName.value == "") {
        message = "please enter a valid user name";
    } else if (txtPasswordName.value == "") {
        message = "please Enter valid password";
    } else {
        var loginResult = await login();
        console.log(loginResult)
        if (loginResult) {
            message = "Done...";
        } else {
            message = "Wrong username or password";
        }
        return message;
    }
}

async function login() {
    var result = false;

    var request = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    var failRequest =
        {
            "email": "peter@klaven"
        }

    await fetch("https://reqres.in/api/login", {
        method: "post",
        body: JSON.stringify(request)
    }).then(function (response) {
        if (response.status === 200) {
            result = true;
            localStorage.token = response.token;
        } else if (response.status === 400) {
            result = false;
            console.log(response.error)
        }
    }).catch(function (error) {
        console.log(error);
    });

    return result;
}