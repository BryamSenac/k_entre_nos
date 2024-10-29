import { criarPost } from './../view/index.js';

document.addEventListener("DOMContentLoaded", function () {
    criarPost();

    const enviarBtn = document.getElementById('post_enviar');
    const input = document.getElementById('digite');

    // Verifica se os elementos existem
    if (enviarBtn && input) {
        enviarBtn.addEventListener('click', function () {
            let postContent = input.value;

            if (postContent.trim() !== '') {
                let novoPost = {
                    nome: 'Você',
                    aroba: 'seu_usuario',
                    post: postContent,
                    tempo: 'agora',
                    comentario: 'xxx',
                    curtida: 'xxx',
                };

                // Adiciona o novo post ao array
                posts.unshift(novoPost);
                criarPost(); // Atualiza a renderização

                input.value = ''; // Limpa o campo de entrada
            }
        });
    } else {
        console.error("Botão ou campo de entrada não encontrado.");
    }
});
