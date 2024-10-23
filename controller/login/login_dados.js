let dados = [
    { email: 'guilherme@gmail', senha: '6767' },
    { email: 'fulano@gmail', senha: '4321' },
    { email: 'tal@gmail', senha: '1234' },
];

document.getElementById('entrar').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
   
        dados.push({ email: email, senha: senha });

        console.log(dados);


        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
    } else {
        alert('Preencha todos os campos');
    }
});
