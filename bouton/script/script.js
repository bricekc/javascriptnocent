let bouton = document.querySelector("button");
bouton.addEventListener("click", (event) => {
    let red = Math.random()*256;
    let blue = Math.random()*256;
    let green = Math.random()*256;
    bouton.style.backgroundColor = ("rgb(" + red + "," + green + "," + blue + ")");
})