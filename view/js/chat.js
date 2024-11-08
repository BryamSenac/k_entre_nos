import { post } from "../../model/posts.js";

export function criarPost() {

    let seccao = document.getElementById('bola');
    seccao.innerHTML='';

    for (let i = 0; i < post.length; i++) {

        let postView = document.createElement('div')
        postView.id = 'post_view'

        let postVc = document.createElement('div')
        postVc.id = 'post_vc'

        let postVci = document.createElement('div')
        postVci.id = 'post_vci'

        let postImgV = document.createElement('img')
        postImgV.id = 'post_img_v'
        postImgV.src = post[i].fotoP
        postImgV.style.width = '5vh'
        postImgV.style.height = '5vh'
        postImgV.style.borderRadius = '5vw'

        let postNome = document.createElement('h1')
        postNome.id = 'post_Vnome'
        postNome.textContent = post[i].nome

        let postArrouba = document.createElement('h1')
        postArrouba.id = 'post_Varrouba'
        postArrouba.textContent = '@' + post[i].aroba

        let postTempo = document.createElement('h1')
        postTempo.id = 'post_Vmin'
        postTempo.textContent = post[i].tempo

        let postV = document.createElement('div')
        postV.id = 'post'

        let mensagem = document.createElement('h2')
        mensagem.id = 'sms'
        mensagem.textContent = post[i].msg

        let postBotoes = document.createElement('div')
        postBotoes.id = 'post_botoes'

        let comentario = document.createElement('button')
        comentario.id = 'comentar'
        comentario.style.justifyContent = 'space-evenly'
        comentario.textContent = post[i].comentario

        let icoment = document.createElement('i')
        icoment.className = 'fa-solid fa-comment'
        icoment.id = 'comentar_i'

        let curtir = document.createElement('button')
        curtir.id = 'curtir'
        curtir.style.justifyContent = 'space-evenly'
        curtir.textContent = post[i].curtida

        let ilike = document.createElement('i')
        ilike.className = 'fa-solid fa-heart'
        ilike.id = 'curtir_i'

        // Montando a estrutura do post
        comentario.appendChild(icoment);
        curtir.appendChild(ilike);
        postBotoes.appendChild(comentario);
        postBotoes.appendChild(curtir);

        postVci.appendChild(postImgV);

        postV.appendChild(mensagem)

        postVc.appendChild(postVci);
        postVc.appendChild(postNome);
        postVc.appendChild(postArrouba);
        postVc.appendChild(postTempo); // Corrigido aqui, de post_Vmin para postTempo

        postView.appendChild(postVc);
        postView.appendChild(postV);
        postView.appendChild(postBotoes);

        seccao.appendChild(postView);
    };

};