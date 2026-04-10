function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function abrirModal(mensagem) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-texto").innerText = mensagem;
}

function fecharModal() {
  document.getElementById("modal").classList.add("hidden");
}

function validarForm() {
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    alert("Preencha todos os campos!");
    return false;
  }

  alert("Mensagem enviada com sucesso! 🐾");
  return true;
}


const sections = document.querySelectorAll('.hidden-section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});

