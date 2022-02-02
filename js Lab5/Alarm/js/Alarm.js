// Get the modal
var modal = document.getElementById("setAlarmModal");

var btn = document.getElementById("btnOpenSetAlarmDialog");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/// Alarm Login
var hrsSection = document.getElementById("Hrs");
var minSection = document.getElementById("Min");
var secSection = document.getElementById("Sec");

// days
var days = {
    SAT: document.getElementById("SAT"),
    SUN: document.getElementById("SUN"),
    MON: document.getElementById("MON"),
    TUE: document.getElementById("TUE"),
    WED: document.getElementById("WED"),
    THU: document.getElementById("THU"),
    FRI: document.getElementById("FRI")
};

// notifications
var alarmNotification = document.getElementById("AlarmEnabled");
var amNotification = document.getElementById("Am");
var pmNotification = document.getElementById("Pm");

var btnSetAlarm = document.getElementById("btnSetAlarm");
var btnClear = document.getElementById("btnClear");
var txtHrsInput = document.getElementById("txtHrs");
var txtMinInput = document.getElementById("txtMin");
var txtSecInput = document.getElementById("txtSec");


setInterval(refreshClock, 1000);

// Events
btnSetAlarm.addEventListener("click", function (event) {
    var hrsInput = Number(txtHrsInput.value);
    var minInput = Number(txtMinInput.value);
    var secInput = Number(txtSecInput.value);
    var today = new Date();
    var hrsRemaining = (today.getHours() + hrsInput);
    var minRemaining = (today.getMinutes() + minInput);
    var secRemaining = (today.getSeconds() + secInput);

    hrsSection.innerText = today.getHours();
    minSection.innerText = today.getMinutes();
    secSection.innerText = today.getSeconds();

    var targetDate = new Date(hrsRemaining + minRemaining + secRemaining);

    console.log(targetDate);

    if (hrsRemaining > 12) {
        pmNotification.classList.add("notification-selected");
        amNotification.classList.remove("notification-selected");
    } else {
        pmNotification.classList.remove("notification-selected");
        amNotification.classList.add("notification-selected");
    }

    console.log(alarmNotification);
    alarmNotification.classList.add("notification-selected");

    modal.style.display = "none";

    var milliSeconds = targetDate.getTime() * 100;
    console.log(milliSeconds);

    setTimeout(function () {
        alert("wake up.....");
    }, milliSeconds);

});

btnClear.addEventListener("click", function (event) {
    txtHrsInput.value = 0;
    txtMinInput.value = 0;
    txtSecInput.value = 0;
});

function refreshClock() {
    var today = new Date();
    var day = today.getDay();
    hrsSection.innerText = today.getHours();
    minSection.innerText = today.getMinutes();
    secSection.innerText = today.getSeconds();

    switch (day) {
        case 0 :
            days.SAT.classList.toggle("day-selected");
            break;
        case 1 :
            days.SUN.classList.toggle("day-selected");
            break;
        case 2 :
            days.MON.classList.toggle("day-selected");
            break;
        case 3 :
            days.TUE.classList.toggle("day-selected");
            break;
        case 4 :
            days.WED.classList.toggle("day-selected");
            break;
        case 5 :
            days.THU.classList.toggle("day-selected");
            break;
        case 6 :
            days.FRI.classList.toggle("day-selected");
            break;


    }

}



