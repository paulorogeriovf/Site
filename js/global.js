// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");

  if (!popup || !closeBtn) return;

  const popupShown = sessionStorage.getItem("popupShown");

  if (!popupShown) {
    popup.style.display = "block";
  }

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    sessionStorage.setItem("popupShown", "true");
  });
});

//calculadora
function calcularLitros() {
      const largura = parseFloat(document.getElementById("largura").value);
      const comprimento = parseFloat(document.getElementById("comprimento").value);
      const profundidade = parseFloat(document.getElementById("profundidade").value);

      if (isNaN(largura) || isNaN(comprimento) || isNaN(profundidade)) {
        document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
        return;
      }

      const volume_m3 = largura * comprimento * profundidade;
      const litros = volume_m3 * 1000;

      document.getElementById("resultado").innerText =
        `A piscina terá aproximadamente ${litros.toLocaleString()} litros de água.`;
    }