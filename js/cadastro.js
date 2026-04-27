// Subtítulos de cada passo
const subtitles = [
    'Passo 1 de 3 — Dados pessoais',
    'Passo 2 de 3 — Acesso',
    'Passo 3 de 3 — Confirmação'
];

// Navega entre passos
function irParaPasso(de, para) {
    document.getElementById(`step-${de}`).classList.remove('active');
    document.getElementById(`step-${para}`).classList.add('active');

    document.getElementById('step-subtitle').textContent = subtitles[para - 1];

    // Atualiza barras de progresso
    for (let i = 1; i <= 3; i++) {
        const bar = document.getElementById(`progress-${i}`);
        i <= para ? bar.classList.add('active') : bar.classList.remove('active');
    }

    // Atualiza passos no painel esquerdo
    for (let i = 1; i <= 3; i++) {
        const heroStep = document.getElementById(`hero-step-${i}`);
        i <= para ? heroStep.classList.add('active') : heroStep.classList.remove('active');
    }
}

// Passo 1 -> 2
document.getElementById('btn-step-1').addEventListener('click', () => {
    const nome = document.getElementById('cadastro-nome').value.trim();
    const email = document.getElementById('cadastro-email').value.trim();
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    irParaPasso(1, 2);
});

// Passo 2 -> 3
document.getElementById('btn-step-2').addEventListener('click', () => {
    const senha = document.getElementById('cadastro-senha').value;
    const confirma = document.getElementById('cadastro-confirma-senha').value;
    if (senha.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres.');
        return;
    }
    if (senha !== confirma) {
        alert('As senhas não coincidem.');
        return;
    }

    // Preenche resumo com dados do passo 1
    document.getElementById('resumo-nome').textContent =
        document.getElementById('cadastro-nome').value.trim();
    document.getElementById('resumo-email').textContent =
        document.getElementById('cadastro-email').value.trim();

    irParaPasso(2, 3);
});

// Voltar: passo 2 -> 1
document.getElementById('btn-back-1').addEventListener('click', () => {
    irParaPasso(2, 1);
});

// Voltar: passo 3 -> 2
document.getElementById('btn-back-2').addEventListener('click', () => {
    irParaPasso(3, 2);
});

// Toggle visibilidade das senhas
document.querySelectorAll('.input-toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.closest('.input-icon-wrapper').querySelector('input');
        const icon = btn.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});

// Indicador de força da senha
document.getElementById('cadastro-senha').addEventListener('input', function () {
    const val = this.value;
    const temTamanho = val.length >= 8;
    const temMaiuscula = /[A-Z]/.test(val);
    const temNumero = /[0-9]/.test(val);

    atualizarCriteria('criteria-length', temTamanho);
    atualizarCriteria('criteria-upper', temMaiuscula);
    atualizarCriteria('criteria-number', temNumero);

    const pontos = [temTamanho, temMaiuscula, temNumero].filter(Boolean).length;
    const labels = ['', 'Fraca', 'Média', 'Forte'];
    const classes = ['', 'weak', 'medium', 'strong'];

    document.getElementById('strength-label').textContent = pontos > 0 ? labels[pontos] : '';

    for (let i = 1; i <= 3; i++) {
        const bar = document.getElementById(`bar-${i}`);
        bar.className = 'strength-bar';
        if (i <= pontos) bar.classList.add(classes[pontos]);
    }
});

function atualizarCriteria(id, valido) {
    const el = document.getElementById(id);
    const icon = el.querySelector('i');
    if (valido) {
        el.classList.add('valid');
        icon.className = 'fa-solid fa-circle-check';
    } else {
        el.classList.remove('valid');
        icon.className = 'fa-regular fa-circle-check';
    }
}

// Verificar se senhas coincidem
document.getElementById('cadastro-confirma-senha').addEventListener('input', function () {
    const senha = document.getElementById('cadastro-senha').value;
    const msg = document.getElementById('match-msg');
    if (this.value && this.value === senha) {
        msg.textContent = '✓ Senhas coincidem';
        msg.className = 'password-match-msg match-ok';
    } else if (this.value) {
        msg.textContent = '✗ Senhas não coincidem';
        msg.className = 'password-match-msg match-error';
    } else {
        msg.textContent = '';
    }
});

// Habilita botão criar conta só com checkbox marcado
document.getElementById('aceite-termos').addEventListener('change', function () {
    document.getElementById('btn-criar-conta').disabled = !this.checked;
});

// Criar conta — redireciona para onboarding
document.getElementById('btn-criar-conta').addEventListener('click', () => {
    window.location.href = '../index.html';
});