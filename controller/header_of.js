import { carregarMensagens } from "./header_i.js";

let funcoes = document.getElementById('funcoes')

export function abrirMenu(numerofuncoes) {
    console.log(numerofuncoes)
    funcoes.style.left = '-' + numerofuncoes + '00vw';
}

let chat = document.getElementById('chat')

export function abrirChat(numerochat) {
    carregarMensagens();
    console.log(numerochat)
    chat.style.right = '-' + numerochat + '00vw';
}
