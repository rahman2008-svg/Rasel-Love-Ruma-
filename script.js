// floating hearts effect
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("float");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(createHeart, 400);
