// script.js

// Alterna o menu mobile (hamburger)
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Fecha o menu ao clicar nos links (em mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Validação simples do formulário e fallback para mailto
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const msg = form.mensagem.value.trim();

    // Validação mínima
    if (!nome || !email || !msg) {
      feedback.style.color = '#ef4444';
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.style.color = '#ef4444';
      feedback.textContent = 'Informe um e-mail válido.';
      return;
    }

    // Enviar via mailto como fallback (sem backend)
    const subject = encodeURIComponent('Contato via site Tibagi');
    const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${msg}`);
    window.location.href = `mailto:henrique@martibagi.com.br?subject=${subject}&body=${body}`;

    // Feedback visual
    feedback.style.color = '#22c55e';
    feedback.textContent = 'Abrindo seu cliente de e-mail para envio...';
    form.reset();
  });
}