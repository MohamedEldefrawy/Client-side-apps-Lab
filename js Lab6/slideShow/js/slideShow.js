var btnNext = document.getElementById("btn-next");
var btnPrev = document.getElementById("btn-prev");
var selectedImage;
var nextImage;
var prevImage;
var images = document.getElementsByClassName("image");
var imagesArea = document.getElementById("imagesArea");
var tilesArea = document.getElementById("tilesArea");
var tileButtons = document.getElementsByClassName("btn-tiles");

function showNextImage() {
    nextImage = document.getElementsByClassName("next").item(0);
    prevImage = document.getElementsByClassName("prev").item(0);
    selectedImage = document.getElementsByClassName("selected").item(0);

    selectedImage.classList.remove("selected");
    selectedImage.classList.add("prev");

    nextImage.classList.remove("next");
    nextImage.classList.add("selected");

    prevImage.classList.remove("prev");
    prevImage.classList.add("next");


}

function showPrevImage() {
    nextImage = document.getElementsByClassName("next").item(0);
    prevImage = document.getElementsByClassName("prev").item(0);
    selectedImage = document.getElementsByClassName("selected").item(0);

    selectedImage.classList.remove("selected");
    selectedImage.classList.add("next");

    nextImage.classList.remove("next");
    nextImage.classList.add("prev");

    prevImage.classList.remove("prev");
    prevImage.classList.add("selected");
}

btnNext.addEventListener("click", function () {
    showNextImage();
    switchToNextTileButtons();
});


btnPrev.addEventListener("click", function () {
    showPrevImage();
    switchToPrevTileButtons();
});

imagesArea.addEventListener("click", function (element) {
    if (element.target.classList.contains("prev")) {
        showPrevImage();
    } else if (element.target.classList.contains("next")) {
        showNextImage();
    }
});


tilesArea.addEventListener("click", function (element) {
    var clickedTile = element.target.closest("button");
    var selectedTile = document.getElementsByClassName("active-tile").item(0).classList.remove("active-tile");


});


function switchToNextTileButtons() {
    var activeTile = document.getElementsByClassName("active-tile").item(0);
    activeTile.classList.toggle("active-tile");
    if (activeTile.nextElementSibling)
        activeTile.nextElementSibling.classList.toggle("active-tile");
    else {
        activeTile.parentElement.firstElementChild.classList.toggle("active-tile");
    }
}


function switchToPrevTileButtons() {
    var activeTile = document.getElementsByClassName("active-tile").item(0);
    activeTile.classList.toggle("active-tile");
    if (activeTile.previousElementSibling)
        activeTile.previousElementSibling.classList.toggle("active-tile");
    else {
        activeTile.parentElement.lastElementChild.classList.toggle("active-tile");
    }
}
