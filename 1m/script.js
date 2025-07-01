const questions = [
  {
    question: "หนูชอบกินอะไรที่สุด?",
    options: ["ชานม", "พิซซ่า", "หมูกระทะ", "ไอติม"],
    answer: "ชานม"
  },
  {
    question: "วันครบรอบของเราคือเมื่อไหร่?",
    options: ["14 ก.พ.", "24 มิ.ย.", "1 ม.ค.", "31 ธ.ค."],
    answer: "24 มิ.ย."
  },
  {
    question: "พี่ชอบสีอะไร?",
    options: ["ชมพู", "ดำ", "แดง", "ฟ้า"],
    answer: "ดำ"
  }
];

let current = 0;  // เก็บ index ข้อสอบปัจจุบัน
let score = 0;    // เก็บคะแนนที่ตอบถูก

// โหลดคำถามพร้อมตัวเลือกลงในหน้า
function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // ล้างตัวเลือกเก่า

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

// ฟังก์ชันเช็คคำตอบ และแสดงผล
function checkAnswer(selected) {
  if (selected === questions[current].answer) score++;

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    // เมื่อจบเกม
    if (score === questions.length) {
      document.getElementById("result").textContent = "สุดยอด! ❤️ กำลังพาไปหน้าความทรงจำ...";
      setTimeout(() => window.location.href = "memories.html", 2000); // ไปหน้า memories.html
    } else {
      document.getElementById("result").textContent = "ลองใหม่อีกทีน้า~";
    }
  }
}

// ควบคุมเสียงเพลง
const bgMusic = document.getElementById('bgMusic');
const volumeSlider = document.getElementById('volumeSlider');

// ตั้งค่าเสียงเพลงเริ่มต้น (50%)
bgMusic.volume = volumeSlider.value;

// ฟังเหตุการณ์เปลี่ยนแปลงเสียงจาก slider
volumeSlider.addEventListener('input', () => {
  bgMusic.volume = volumeSlider.value;
});

// โหลดคำถามตอนเปิดหน้า
window.onload = loadQuestion;
