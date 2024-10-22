let funcoes = document.getElementById('funcoes')

export function abrirMenu(numerofuncoes) {
    console.log(numerofuncoes)
    funcoes.style.left = '-' + numerofuncoes + '00vw';
}

let chat = document.getElementById('chat')

export function abrirChat(numerochat) {
    console.log(numerochat)
    chat.style.right = '-' + numerochat + '00vw';
}