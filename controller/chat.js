// Vetor para armazenar os comentários
let comentarios = [
    "Este é um comentário de exemplo!",
    "Acho que a solução proposta é ótima!",
    "Alguém mais teve esse problema?",
    "Estou ansioso para ver mais soluções!",
    "Esse tópico é muito interessante!"
];

// Função para adicionar um comentário
function postComment() {
    const input = document.getElementById("problemInput");
    const comentarioText = input.value.trim();
    if (comentarioText) {
        // Adiciona o novo comentário ao vetor
        comentarios.push(comentarioText);
        input.value = ""; // Limpa o input
        renderComentario(comentarioText); // Renderiza o novo comentário na tela
    } else {
        alert("Por favor, digite um comentário."); // Alerta se o campo estiver vazio
    }
}

// Função para renderizar um único comentário
function renderComentario(comentario) {
    const postsContainer = document.getElementById("posts");
    
    // Cria um novo elemento de comentário
    const comentarioElement = document.createElement("div");
    comentarioElement.className = "base_coment";
    comentarioElement.innerHTML = `
        <i class="fa-solid fa-comment"></i>
        <div class="foto_coment"></div>
        <div class="name_exemplo">Nome_Exemplo@exemplo.exemplo</div>
        <div class="config_coment">
            <i class="fa-solid fa-list"></i>
        </div>
        <div class="like">
            <i class="fa-solid fa-heart"></i>
        </div>
        <div class="comentarios">
            <h2>${comentario}</h2>
        </div>
        <div class="republicar">
            <i class="fa-solid fa-rotate-right"></i>
        </div>
    `;

    // Adiciona o novo comentário ao contêiner de posts
    postsContainer.appendChild(comentarioElement);
}

// Função para renderizar os comentários de exemplo ao carregar a página
function renderComentarios() {
    comentarios.forEach((comentario) => {
        renderComentario(comentario); // Renderiza cada comentário existente
    });
}

// Renderiza os comentários de exemplo ao carregar a página
renderComentarios();
