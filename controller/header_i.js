import { abrirMenu } from "./header_of.js";
import { abrirChat } from "./header_of.js";
import { conversas } from "./../model/conversas.js";

window.abrirMenu = abrirMenu;
window.conversar = conversar;
window.abrirChat = abrirChat;

export function conversar(){
    const inputValue = document.getElementById('botao_digitando').value;

    if (inputValue.trim() !== '') {
        // Criar uma nova conversa com um usuário genérico e a mensagem fornecida
        const novaConversa = {
            user: 'eu', // Nome genérico para o usuário
            conversa: inputValue // Texto fornecido pelo usuário
        };

        // Adicionar a nova conversa ao vetor
        conversas.push(novaConversa);
        console.log('Nova conversa adicionada:', novaConversa);
        console.log('Vetor de conversas atualizado:', conversas);

        // Limpar o campo de entrada
        document.getElementById('botao_digitando').value = '';

        carregarMensagens()
    }
}

export function carregarMensagens() {
    const mensagensDiv = document.getElementById('mensagens');
    mensagensDiv.innerHTML = ''; // Limpa o conteúdo existente

    conversas.forEach(conversa => {
        // Criar um contêiner para cada mensagem
        const mensagemDiv = document.createElement('div');
        mensagemDiv.textContent = conversa.conversa;

        // Estilizar a mensagem de acordo com o usuário
        if (conversa.user === 'nome') {
            mensagemDiv.style.textAlign = 'left'; // Alinhado à esquerda
            mensagemDiv.style.backgroundColor = '#f1f0f0'; // Cor de fundo para diferenciar
            mensagemDiv.style.margin = '5px 0';
            mensagemDiv.style.padding = '10px';
            mensagemDiv.style.borderRadius = '10px';
            mensagemDiv.style.maxWidth = '60%';
        } else if (conversa.user === 'eu') {
            mensagemDiv.style.textAlign = 'right'; //c Alinhado à direita
            mensagemDiv.style.backgroundColor = '#aab8c2'; // Outra cor de fundo para diferenciar
            mensagemDiv.style.margin = '5px 0';
            mensagemDiv.style.padding = '10px';
            mensagemDiv.style.borderRadius = '10px';
            mensagemDiv.style.maxWidth = '60%';
            mensagemDiv.style.marginLeft = 'auto'; // Empurrar para a direita
        }

        mensagensDiv.appendChild(mensagemDiv);
    });
}