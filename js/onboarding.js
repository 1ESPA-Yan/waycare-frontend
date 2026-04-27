// Controla navegação entre as 3 telas e validação dos checkboxes

function irParaStep(num) {
  // Esconde todos os steps e bolinhas
  document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.onboarding-dot').forEach(d => d.classList.remove('active'));

  // Ativa o step correto
  document.getElementById('step-' + num).classList.add('active');

  // Ativa as bolinhas até o step atual
  for (let i = 1; i <= num; i++) {
    document.getElementById('dot-' + i).classList.add('active');
  }
}

// Habilita botão de aceitar quando todos os checkboxes estão marcados
const checkboxes = document.querySelectorAll('.onboarding-checkboxes input[type="checkbox"]');
const btnAceitar = document.getElementById('btn-aceitar');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const todosChecked = [...checkboxes].every(c => c.checked);
    btnAceitar.disabled = !todosChecked;
  });
});