
export function verificarIdade(event) {
    if (event) {
        event.preventDefault(); // Impede o envio do formulário
    }

    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    // Verifica se o nome ou a senha estão vazios
    if (!nome || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Interrompe a execução se os campos estiverem vazios
    }

    const dataNascimento = new Date(document.getElementById('data_nascimento').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    // Ajusta a idade se o aniversário ainda não tiver ocorrido este ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 13) {
        alert("Você deve ter pelo menos 13 anos para se cadastrar.");
    } else {
        // Se a idade for válida, submete o formulário
        document.querySelector('form').submit();
    }
}
