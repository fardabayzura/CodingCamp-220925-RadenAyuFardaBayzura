// Welcoming Speech
document.addEventListener("DOMContentLoaded", () => {
  let userName = prompt("Hi! Siapa nama kamu?");
  if (userName) {
    document.getElementById("welcomeText").innerText = `Hi, ${userName}! Selamat datang di AromaKopi ☕`;
  }
});

// Form Validation
const form = document.getElementById("messageForm");
const formResult = document.getElementById("formResult");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formResult.innerText = `Terima kasih ${name}, pesanmu sudah kami terima! 📩`;
    form.reset();
  } else {
    formResult.innerText = "Harap isi semua field sebelum mengirim.";
  }
});
