document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('messageBox');
    const charCount = document.getElementById('charCount');
    const maxChars = 450;
  
    textarea.addEventListener('input', function() {
      const remaining = maxChars - textarea.value.length;
      charCount.textContent = `${remaining} characters remaining`;
    });
  });