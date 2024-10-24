export function criarPost() {
    // let post = {

    //     nome: 'Fulano',
    //     aroba: 'praticio_star',
    //     fotoP: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFdPq2T2g20oo4EePsxh1Siabxqn-Tujjpw&s', // URL de exemplo
    //     post: 'Se mate Bryan',
    //     comentario: 'xxx',
    //     curtida: 'xxx',

    // };

    let seccao = document.getElementById('bola');

    let postView = document.createElement('div')
    postView.id = 'post_view'

    let postVc = document.createElement('div')
    postVc.id = 'post_vc'

    let postVci = document.createElement('div')
    postVci.id = 'post_vci'

    let postImgV = document.createElement('img')
    postImgV.id = 'post_img_v'

    let postNome = document.createElement('h1')
    postNome.id = 'post_Vnome'
    postNome.textContent = 'Nome'

    let postArrouba = document.createElement('h1')
    postArrouba.id = 'post_Varrouba'
    postArrouba.textContent = '@arrouba'

    let postTempo = document.createElement('h1')
    postTempo.id = 'post_Vmin'
    postTempo.textContent = 'minutos'

    let postV = document.createElement('div')
    postV.id = 'post'

    let postBotoes = document.createElement('div')
    postBotoes.id = 'post_botoes'

    let comentario = document.createElement('button')
    comentario.id = 'comentar'
    comentario.textContent = 'xxx'

    let icoment = document.createElement('i')
    icoment.className = ''
    icoment.id = 'comentar_i'

    let curtir = document.createElement('button')
    curtir.id = 'curtir'
    curtir.textContent = 'xxx'

    let ilike = document.createElement('i')
    ilike.className = ''
    ilike.id = 'curtir_i'

    comentario.appendChild(icoment)
    curtir.appendChild(ilike)

    postBotoes.appendChild(comentario)
    postBotoes.appendChild(curtir)

    postVci.appendChild(postImgV)

    postVc.appendChild(postVci)
    postVc.appendChild(postNome)
    postVc.appendChild(postArrouba)
    postVc.appendChild(post_Vmin)

    postView.appendChild(postVc)
    postView.appendChild(postV)
    postView.appendChild(postBotoes)

    seccao.appendChild(postView)
} 