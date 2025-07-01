// สร้างหัวใจลอยลงเรื่อยๆ (ตำแหน่ง สี ขนาดสุ่ม)
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';

  heart.style.left = Math.random() * 100 + "vw";

  const size = 15 + Math.random() * 15;
  heart.style.fontSize = size + "px";

  const colors = ['#ff5c8d', '#ff85a2', '#ff3b6f', '#e60073'];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heart.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);

// สร้างหัวใจเล็กๆ ตอนคลิก (pop and fade)
document.addEventListener('click', e => {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.className = 'click-heart';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);

  heart.addEventListener('animationend', () => heart.remove());
});
