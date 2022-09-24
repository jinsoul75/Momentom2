const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const backgroundImage = images[Math.floor(Math.random() * images.length)];

const randomImg = document.createElement("img");

randomImg.src = `img/${backgroundImage}`;

document.body.appendChild(randomImg);