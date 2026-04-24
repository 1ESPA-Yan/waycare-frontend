// Toggle visibilidade da senha
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