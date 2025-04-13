document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contato');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Pegando os valores dos campos
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
  
      // Mensagem de feedback
      const feedback = document.createElement('p');
      feedback.style.marginTop = '1rem';
      feedback.style.fontWeight = 'bold';
  
      // Remove mensagens anteriores
      const msgAnterior = document.querySelector('.form-contato p.feedback');
      if (msgAnterior) msgAnterior.remove();
  
      // Validação
      if (!nome || !email || !mensagem) {
        feedback.textContent = 'Preencha todos os campos obrigatórios.';
        feedback.style.color = '#e63946';
        feedback.classList.add('feedback');
        form.appendChild(feedback);
        return;
      }
  
      // Validação de e-mail simples
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        feedback.textContent = 'Digite um e-mail válido.';
        feedback.style.color = '#e63946';
        feedback.classList.add('feedback');
        form.appendChild(feedback);
        return;
      }
  
      // Sucesso
      feedback.textContent = 'Mensagem enviada com sucesso!';
      feedback.style.color = '#2a9d8f';
      feedback.classList.add('feedback');
      form.appendChild(feedback);
  
      // Limpa os campos
      form.reset();
    });
  });
  