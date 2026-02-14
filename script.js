// 💗 Floating Hearts Animation
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 8 + 6;
    this.speed = Math.random() * 1 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "#ff8fa3";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size, this.y - this.size,
                      this.x - this.size * 2, this.y + this.size / 3,
                      this.x, this.y + this.size * 2);
    ctx.bezierCurveTo(this.x + this.size * 2, this.y + this.size / 3,
                      this.x + this.size, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  update() {
    this.y -= this.speed;
    if (this.y < -20) {
      this.y = canvas.height + 20;
      this.x = Math.random() * canvas.width;
    }
  }
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (hearts.length < 25) {
    hearts.push(new Heart());
  }

  hearts.forEach(heart => {
    heart.update();
    heart.draw();
  });

  requestAnimationFrame(animateHearts);
}

animateHearts();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


const sections = document.querySelectorAll("section");
let current = 0;

const cardMessages = [
  "The way you feel everything so deeply.",
  "How you're soft and chaotic at the same time.",
  "The way loving you feels like home.",
  "That after one year, I would still choose you instantly."
];

function next() {
  sections[current].classList.remove("active");
  current++;
  if (current < sections.length) {
    sections[current].classList.add("active");
  }
}

function showMood(type) {
  const text = document.getElementById("moodText");
  const messages = {
    reassure: "You are loved on your best days and especially on the days you doubt it.",
    chaos: "You're my favorite problem and I'd choose you in every universe.",
    emotional: "Loving you changed me. I hope it always does."
  };
  text.textContent = messages[type];
  text.classList.add("show");
}

function flip(card, index) {
  card.textContent = cardMessages[index];
}

function answer() {
  const text = document.getElementById("answerText");
  text.textContent = "Good. I love you more.";
  text.classList.add("show");

  setTimeout(() => {
    next();
  }, 1500);
}

// ⏳ Relationship Counter
const anniversary = new Date("2025-01-27"); // CHANGE THIS

function updateCounter() {
  const now = new Date();
  const diff = now - anniversary;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  const counter = document.getElementById("timeTogether");
  if (counter) {
    counter.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
  }
}

setInterval(updateCounter, 60000);
updateCounter();
