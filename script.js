function selectRadio(radioId) {
  document.getElementById(radioId).checked = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('messageBox');
    const charCount = document.getElementById('charCount');
    const maxChars = 450;

    // Atualiza o contador de caracteres enquanto o usuário digita
    textarea.addEventListener('input', function() {
      const remaining = maxChars - textarea.value.length;
      charCount.textContent = `${remaining} characters remaining`;
    });

    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Adiciona evento de submit ao formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      if (form.checkValidity()) {
        // Se o formulário for válido, exibe a mensagem de confirmação
        confirmationMessage.style.display = 'block';
        submitButton.style.display = 'none'; // Oculta o botão de envio após o envio

        // Exibe um alerta
        alert('Formulário enviado!');
      } else {
        // Se o formulário não for válido, exibe uma mensagem de erro ou realiza outras ações
        confirmationMessage.style.display = 'none';
        submitButton.style.display = 'block'; // Garante que o botão de envio continue visível
      }
    });
});
