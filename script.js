
function toggleMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}


function toggleDropdown(drop) {
  drop.classList.toggle('show');
}

function initReveal() {
  const items = document.querySelectorAll('.fade-up');
  const reveal = () => {
    const trigger = window.innerHeight * 0.88;
    items.forEach((it) => {
      const top = it.getBoundingClientRect().top;
      if (top < trigger) it.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}


function handleFormSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const out = document.getElementById('formResult');
  const nama = f.nama.value.trim();
  const email = f.email.value.trim();
  const minat = f.minat.value;
  const pesan = f.pesan.value.trim();
  const setuju = f.setuju.checked;


  if (nama.length < 3) return showAlert(out, 'Nama minimal 3 karakter.', 'error');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showAlert(out, 'Format email tidak valid.', 'error');
  if (!minat) return showAlert(out, 'Pilih minat budaya terlebih dahulu.', 'error');
  if (pesan.length < 10) return showAlert(out, 'Pesan minimal 10 karakter.', 'error');
  if (!setuju) return showAlert(out, 'Anda harus menyetujui persetujuan.', 'error');

  showAlert(out, `Terima kasih, ${nama}! Pesan Anda tentang "${minat}" sudah kami terima 🎉`, 'success');
  f.reset();
}

function showAlert(el, msg, type) {
  if (!el) return;
  el.className = 'alert ' + type;
  el.textContent = msg;
  el.style.display = 'block';
}


const quizData = [
  {
    q: 'Apa nama boneka raksasa khas Betawi yang sering tampil di acara budaya?',
    opt: ['Ondel-ondel', 'Reog', 'Barong', 'Sigale-gale'],
    a: 0
  },
  {
    q: 'Makanan khas Betawi berbahan beras ketan dan telur bebek adalah...',
    opt: ['Rendang', 'Kerak Telor', 'Pempek', 'Gudeg'],
    a: 1
  },
  {
    q: 'Alat musik tradisional Betawi yang menggunakan instrumen tiup logam adalah...',
    opt: ['Angklung', 'Gamelan', 'Tanjidor', 'Sasando'],
    a: 2
  },
  {
    q: 'Rumah adat khas Betawi disebut...',
    opt: ['Rumah Gadang', 'Rumah Joglo', 'Rumah Honai', 'Rumah Kebaya'],
    a: 3
  }
];
let quizIndex = 0;
let quizScore = 0;

function renderQuiz() {
  const box = document.getElementById('quizBox');
  if (!box) return;
  if (quizIndex >= quizData.length) {
    let pesan = '';
    if (quizScore === quizData.length) pesan = 'Sempurna! Anda sangat memahami budaya Betawi 🏆';
    else if (quizScore >= 2) pesan = 'Bagus! Pengetahuan budaya Anda cukup baik 👍';
    else pesan = 'Yuk pelajari lagi budaya Betawi 📚';
    box.innerHTML = `<h3>Skor Anda: ${quizScore}/${quizData.length}</h3>
      <p>${pesan}</p>
      <button class="btn" onclick="restartQuiz()">Ulangi Kuis</button>`;
    return;
  }
  const cur = quizData[quizIndex];
  let html = `<h3>Soal ${quizIndex + 1} dari ${quizData.length}</h3>
    <p style="margin:.6rem 0 1rem">${cur.q}</p>`;
  for (let i = 0; i < cur.opt.length; i++) {
    html += `<button class="quiz-opt" onclick="answerQuiz(${i})">${cur.opt[i]}</button>`;
  }
  box.innerHTML = html;
}

function answerQuiz(i) {
  const cur = quizData[quizIndex];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, idx) => {
    b.disabled = true;
    if (idx === cur.a) b.classList.add('correct');
    else if (idx === i) b.classList.add('wrong');
  });
  if (i === cur.a) quizScore++;
  setTimeout(() => { quizIndex++; renderQuiz(); }, 1100);
}

function restartQuiz() {
  quizIndex = 0; quizScore = 0; renderQuiz();
}


function filterGaleri(kategori) {
  const cards = document.querySelectorAll('[data-kategori]');
  cards.forEach(c => {
    if (kategori === 'semua' || c.dataset.kategori === kategori) {
      c.style.display = '';
    } else {
      c.style.display = 'none';
    }
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const active = document.querySelector(`.filter-btn[data-f="${kategori}"]`);
  if (active) active.classList.add('active');
}


function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}


document.addEventListener('DOMContentLoaded', () => {
  
  initReveal();
  setYear();
  renderQuiz();
  HeroSlideshow();
  const form = document.getElementById('kontakForm');
  if (form) form.addEventListener('submit', handleFormSubmit);
});

function HeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4000);
}