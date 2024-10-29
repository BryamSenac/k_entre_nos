let posts = [
    {
        nome: 'Fulano',
        aroba: 'praticio_star',
        post: 'Se mate Bryan',
        tempo: '25h',
        comentario: 'xxx',
        curtida: 'xxx',
    },
    {
        nome: 'Fulano',
        aroba: 'praticio_star',
        post: 'Se mate Bryan',
        tempo: '25h',
        comentario: 'xxx',
        curtida: 'xxx',
    }
];

export function criarPost() {
    let seccao = document.getElementById('bola');
    seccao.innerHTML = ''; // Limpa a seção antes de renderizar

    for (let i = 0; i < posts.length; i++) {
        let postView = document.createElement('div');
        postView.className = 'post_view';

        let postVc = document.createElement('div');
        postVc.className = 'post_vc';

        let postVci = document.createElement('div');
        postVci.className = 'post_vci';

        let postImgV = document.createElement('img');
        postImgV.className = 'post_img_v'; // Adicione uma classe para estilização

        let postNome = document.createElement('h1');
        postNome.className = 'post_Vnome';
        postNome.textContent = posts[i].nome;

        let postArrouba = document.createElement('h1');
        postArrouba.className = 'post_Varrouba';
        postArrouba.textContent = posts[i].aroba;

        let postTempo = document.createElement('h1');
        postTempo.className = 'post_Vmin';
        postTempo.textContent = posts[i].tempo;

        let postText = document.createElement('div');
        postText.className = 'post_text';
        postText.textContent = posts[i].post;

        let postBotoes = document.createElement('div');
        postBotoes.className = 'post_botoes';

        let comentario = document.createElement('button');
        comentario.className = 'comentar';
        comentario.textContent = posts[i].comentario;

        let icoment = document.createElement('i');
        icoment.className = 'fa-solid fa-comment';

        let curtir = document.createElement('button');
        curtir.className = 'curtir';
        curtir.textContent = posts[i].curtida;

        let ilike = document.createElement('i');
        ilike.className = 'fa-solid fa-heart';

        // Montando a estrutura do post
        comentario.appendChild(icoment);
        curtir.appendChild(ilike);

        postBotoes.appendChild(comentario);
        postBotoes.appendChild(curtir);

        postVci.appendChild(postImgV);
        postVc.appendChild(postVci);
        postVc.appendChild(postNome);
        postVc.appendChild(postArrouba);
        postVc.appendChild(postTempo);
        postView.appendChild(postVc);
        postView.appendChild(postText);
        postView.appendChild(postBotoes);

        seccao.appendChild(postView);
    }
}
