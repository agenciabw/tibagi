/*
  scripts.js
  - Toggle do menu mobile
  - Validação simples do formulário (client-side)
  - Ano automático no rodapé
*/

// Toggle do menu no mobile
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fechar menu ao clicar em um link
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Validação simples do formulário
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Campos
    const nome = form.nome;
    const email = form.email;
    const mensagem = form.mensagem;

    // Reset de erros
    form.querySelectorAll('.error').forEach(el => el.textContent = '');

    let ok = true;
    if (!nome.value.trim()) {
      nome.nextElementSibling.textContent = 'Informe seu nome.';
      ok = false;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.nextElementSibling.textContent = 'Informe um e-mail válido.';
      ok = false;
    }
    if (!mensagem.value.trim()) {
      mensagem.nextElementSibling.textContent = 'Digite sua mensagem.';
      ok = false;
    }

    if (ok) {
      // Simulação de envio — aqui você pode integrar com um backend ou serviço de forms
      alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      form.reset();
    }
  });
}

// Ano automático no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}