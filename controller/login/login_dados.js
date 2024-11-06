import { puxarLogin } from "./login_google.js";
import { dados } from "../../model/user.js";

window.puxarLogin = puxarLogin
window.logar = logar

document.getElementById('entrar').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
        // Verificar se o email e a senha já estão no vetor de dados
        const userExists = dados.find(user => user.email === email && user.senha === senha);
        
        if (userExists) {
            logar(); // Chama a função de login ou redirecionamento
        } else {
            alert('Email ou senha incorretos.');
        }

        // Limpar os campos de entrada
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
    } else {
        alert('Preencha todos os campos');
    }
});


export function logar(){
    window.location.href = './../../view/html/chat.html';
}