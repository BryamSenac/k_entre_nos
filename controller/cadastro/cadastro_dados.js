let usuarios = [
    { nome: 'guilherme', emailC: 'guilherme@gmail', senhaC: '6767', ano: '2000' },
    { nome: 'fulano', emailC: 'fulano@gmail', senhaC: '4321', ano: '2000' },
    { nome: 'tal', emailC: 'tal@gmail', senhaC: '1234', ano: '2000' }
];

export function verificarIdade(event) {
    if (event) {
        event.preventDefault(); // Impede o envio do formulário
    }

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifica se o nome, email ou a senha estão vazios
    if (!nome || !email || !senha) {
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
        // Se a idade for válida, armazena os dados em um vetor de objetos
        usuarios.push({ nome, emailC: email, senhaC: senha, ano: dataNascimento.getFullYear() });

        // Exibe o array atualizado no console
        console.log(usuarios);

        // Limpa os campos após o envio
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('data_nascimento').value = '';

        alert("Cadastro realizado com sucesso!");
    }
}