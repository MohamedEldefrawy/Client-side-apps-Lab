var btnNext = document.getElementById("btn-next");
var btnPrev = document.getElementById("btn-prev");
var selectedImage;
var nextImage;
var prevImage;
var images = document.getElementsByClassName("image");
var imagesArea = document.getElementById("imagesArea");

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

});


btnPrev.addEventListener("click", function () {
    showPrevImage();
});

imagesArea.addEventListener("click", function (element) {
    if (element.target.classList.contains("prev")) {
        showPrevImage();
    } else if (element.target.classList.contains("next")) {
        showNextImage();
    }
});
