import { criarPost } from "./../view/js/chat.js"
import { post } from "../model/posts.js"

window.cadastrarPost = cadastrarPost;

document.addEventListener("DOMContentLoaded", function (){
    criarPost()
})

export function cadastrarPost(){
    const inputValue = document.getElementById('digite').value;

    if (inputValue.trim() !== '') {
        // Criar um novo post com informações genéricas e o texto fornecido
        const novoPost = {
            nome: 'Fulano', // Informação genérica
            aroba: 'praticio_star', // Informação genérica
            post: inputValue, // Texto fornecido pelo usuário
            tempo: '0h', // Exemplo de valor padrão para o tempo
            comentario: '0', // Valor padrão genérico
            curtida: '0', // Valor padrão genérico
        };

        // Adicionar o novo post ao vetor
        post.push(novoPost);
        console.log('Novo post adicionado:', novoPost);
        console.log('Vetor atualizado:', post);

        // Limpar o campo de entrada
        document.getElementById('digite').value = '';

        criarPost();

    } else {
        alert('Por favor, digite algo antes de enviar.');
    }
}