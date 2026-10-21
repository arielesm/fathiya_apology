const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

// Fungsi untuk hasil akhir (Dimaafin)
function dimaafin() {
  question.innerHTML = "hihhi, aku tau pasti dimaafin :)";
  gif.src = "images/love.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

// Fungsi untuk memindahkan tombol (Runaway effect)
function moveButton() {
  const margin = 50;
  const maxX = window.innerWidth - yesBtn.offsetWidth - margin * 2;
  const maxY = window.innerHeight - yesBtn.offsetHeight - margin * 2;
  
  const randomX = Math.floor(Math.random() * maxX) + margin;
  const randomY = Math.floor(Math.random() * maxY) + margin;
  
  yesBtn.style.position = "absolute"; // Pastikan CSS memiliki position absolute/fixed
  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
}

// Handler Tombol YES (Kiri)
yesBtn.addEventListener("click", () => {
  if (clickCount === 0) {
    clickCount = 1;
    question.innerHTML = "MAAFIN AKUU";
    gif.src = "images/sorry.png";
    gif.style.height = "300px";
    gif.style.width = "400px";
    yesBtn.innerHTML = "oke, baik";
    noBtn.innerHTML = "ngga";
  } else if (clickCount === 1 || clickCount === 2 || clickCount === 3) {
    dimaafin();
  }
});

// Handler Tombol NO (Kanan)
noBtn.addEventListener("click", () => {
  if (clickCount === 1) {
    clickCount = 2;
    question.innerHTML = "coba pikirin baik-baik";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "okee, kumaafin";
    noBtn.innerHTML = "jangan harap!";
  } else if (clickCount === 2) {
    clickCount = 3;
    question.innerHTML = "pikirin sekali lagi";
    gif.src = "images/sadlife.gif";
    yesBtn.innerHTML = "aku sepakat";
    noBtn.innerHTML = "tak mau titik";
  } else if (clickCount === 3) {
    clickCount = 4;
    question.innerHTML = "aku mohoon :'";
    gif.src = "images/run.gif";
    yesBtn.innerHTML = "terserah";
    noBtn.innerHTML = "iyaa";
    
    // Tambahkan efek lari pada tombol "terserah"
    yesBtn.addEventListener("mouseover", moveButton);
  } else if (clickCount === 4) {
    // Klik pada tombol "iyaa"
    dimaafin();
  }
});
