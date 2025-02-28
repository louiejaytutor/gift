const label = document.getElementById("label");
const boxCover = document.getElementById("box-cover");
const character = document.getElementById("character");
const body = document.getElementById("body");
const confetti = document.getElementById("confetti");
const heart = document.getElementById("heart");
const flower = document.getElementById("flower");

boxCover.addEventListener("click", function() {
    if (boxCover.classList.contains("open")) {
        label.innerHTML = "Are you tired? I have a gift for you";

        character.classList.add("first");
        character.classList.remove("third");
        boxCover.classList.remove("open");
        character.classList.remove("visible");
        confetti.classList.remove("show");
        heart.classList.remove("show");
        flower.classList.remove("show");
    }
    else {
        label.innerHTML = "SURPRISE!";

        boxCover.classList.add("open");
        character.classList.add("visible");
        confetti.classList.add("show");
    }
});

character.addEventListener("click", function() {
    if (character.classList.contains("first")) {
        label.innerHTML = "You're pretty cute!!!";

        character.classList.add("second");
        character.classList.remove("first");
        heart.classList.add("show");
    } 
    else if (character.classList.contains("second")) {
        label.innerHTML = "Here's a flower for my cutie <3";

        character.classList.add("third");
        character.classList.remove("second");
        heart.classList.remove("show");
        flower.classList.add("show");
    } 
    else {
        label.innerHTML = "I hope that flower makes your day better :)";

        character.classList.add("first");
        character.classList.remove("third");
        flower.classList.remove("show");
    }
});

const images = [
    "static/img/character-1.png",
    "static/img/character-2.png",
    "static/img/character-1.png",
    "static/img/character-3.png"
];
let i = 0;
setInterval(() => {
    i = (i + 1) % images.length;
    body.src = images[i];
}, 1000);