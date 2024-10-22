
let comentarios = [
    "Este é um comentário de exemplo!",
    "Acho que a solução proposta é !"ótima,
    "Alguém mais teve esse problema?",
    "Estou ansioso para ver mais soluções!",
    "Esse tópico é muito interessante!"
];


function postComment() {
    const input = document.getElementById("problemInput");
    const comentarioText = input.value.trim();
    if (comentarioText) {
       
        comentarios.push(comentarioText);
        input.value = ""; 
        renderComentario(comentarioText); 
    } else {
        alert("Por favor, digite um comentário.");
    }
}


function renderComentario(comentario) {
    const postsContainer = document.getElementById("posts");
    
    
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

    
    postsContainer.appendChild(comentarioElement);
}


function renderComentarios() {
    comentarios.forEach((comentario) => {
        renderComentario(comentario); 
    });
}


renderComentarios();
