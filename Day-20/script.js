let image = document.querySelector("img")

function showImage() {
    image.style.display = "block"
    image.style.cssText = `width : 400px; height : 200px;`
}

function hideImage() {
    image.style.display = "none"
}