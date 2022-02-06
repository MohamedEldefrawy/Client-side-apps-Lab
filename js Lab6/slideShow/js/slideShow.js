var btnNext = document.getElementById("btn-next");
var btnPrev = document.getElementById("btn-prev");
var selectedImage;
var nextImage;
var prevImage;
var images = document.getElementsByClassName("image");

btnNext.addEventListener("click", function () {
    nextImage = document.getElementsByClassName("next").item(0);
    prevImage = document.getElementsByClassName("prev").item(0);
    selectedImage = document.getElementsByClassName("selected").item(0);

    selectedImage.classList.remove("selected");
    selectedImage.classList.add("prev");

    nextImage.classList.remove("next");
    nextImage.classList.add("selected");

    prevImage.classList.remove("prev");
    prevImage.classList.add("next");
});

btnPrev.addEventListener("click", function () {
    nextImage = document.getElementsByClassName("next").item(0);
    prevImage = document.getElementsByClassName("prev").item(0);
    selectedImage = document.getElementsByClassName("selected").item(0);

    selectedImage.classList.remove("selected");
    selectedImage.classList.add("next");

    nextImage.classList.remove("next");
    nextImage.classList.add("prev");

    prevImage.classList.remove("prev");
    prevImage.classList.add("selected");
});