var userName = prompt("Please Enter your name");
var password = prompt("Please Enter your password");
var username = "admin";
var pass = "421$$";

if (userName == username && password == pass) {
    alert("Welcome login success");
} else if (userName != username) {
    alert("Wrong username");
} else if (password != pass) {
    alert("Wrong password ")
} else {
    alert("Wrong credentials");
}
