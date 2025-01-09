document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Validação do campo Nome
    const nomeInput = document.getElementById('nome');
    const nomeErro = document.createElement('p');
    nomeErro.style.color = 'red';
    nomeErro.style.fontSize = '0.9rem';
    nomeErro.style.marginTop = '0.5rem';
    nomeInput.insertAdjacentElement('afterend', nomeErro);

    // Validação do campo Assunto
    const assuntoInput = document.getElementById('assunto');
    const assuntoErro = document.createElement('p');
    assuntoErro.style.color = 'red';
    assuntoErro.style.fontSize = '0.9rem';
    assuntoErro.style.marginTop = '0.5rem';
    assuntoInput.insertAdjacentElement('afterend', assuntoErro);

    form.addEventListener('submit', (e) => {
        let erroNome = '';
        let erroAssunto = '';

        // Verificação do campo Nome
        if (nomeInput.value.trim() === '') {
            erroNome = 'O campo Nome não pode estar vazio.';
        } else if (nomeInput.value.length > 50) {
            erroNome = 'O campo Nome deve conter no máximo 50 caracteres.';
        }

        if (erroNome) {
            e.preventDefault();
            nomeErro.textContent = erroNome;
        } else {
            nomeErro.textContent = '';
        }

        // Verificação do campo Assunto
        if (assuntoInput.value.trim() === '') {
            erroAssunto = 'O campo Assunto não pode estar vazio.';
        } else if (assuntoInput.value.length > 50) {
            erroAssunto = 'O campo Assunto deve conter no máximo 50 caracteres.';
        }

        if (erroAssunto) {
            e.preventDefault();
            assuntoErro.textContent = erroAssunto;
        } else {
            assuntoErro.textContent = '';
        }
    });
});
