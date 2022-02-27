function userVisitsCounter() {
    let userVisitsSection = document.getElementById("user-visits");

    if (localStorage.getItem("userVisits")) {
        localStorage.setItem("userVisits", String(Number(localStorage.getItem("userVisits")) + 1));
    } else {
        localStorage.setItem("userVisits", "1");
    }
    console.log(userVisitsSection);
    userVisitsSection.innerHTML = String(localStorage.getItem("userVisits"));

}

window.addEventListener("load", userVisitsCounter);