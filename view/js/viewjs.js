export function criarNotis() {

    let footer = document.getElementById('pezinho')
    let boxNft = document.getElementById('box_notificacao')

    for (let i = 0; i < cartoes.length; i++) {
        let botao_ntf = document.createElement('button');
        botao_ntf.id = 'botao_ntf';

        let contato_ntf = document.createElement('div');
        contato_ntf.id = 'contato_ntf';

        let img_ctt_ntf = document.createElement('div');
        img_ctt_ntf.id = 'img_ctt_ntf';

        let inf_ctt_ntf = document.createElement('div');
        inf_ctt_ntf.id = 'inf_ctt_ntf'

        let txtCidadao = document.createElement('h4');

        let arroba = document.createElement('h4');

        let minutoes = document.createElement('h4');

        let btn_ctt_ntf = document.createElement('div');
        btn_ctt_ntf.id = 'btn_ctt_ntf';

        let look = document.createElement('i');
        look.classList = 'fa-solid fa-eye-low-vision';

        let close = document.createElement('i');
        close.classList = 'fa-solid fa-x';

        let ver_mais = document.createElement('button');
        ver_mais.id = 'ver_mais';

        let mais_ver = document.createElement('h4');
        mais_ver.textContent = 'ver mais...'
        
        footer.appendChild(boxNft)

        boxNft.appendChild(box_notificacao)

        inf_ctt_ntf.appendChild(txtCidadao)
        inf_ctt_ntf.appendChild(arroba)
        inf_ctt_ntf.appendChild(minutoes)

        btn_ctt_ntf.appendChild(look)
        btn_ctt_ntf.appendChild(close)

        ver_mais.appendChild(mais_ver)
     }
}

// {
// <button id="botao_ntf">
//     <div id="contato_ntf">
//         <div id="img_ctt_ntf"></div>
//         <div id="inf_ctt_ntf">
//             <h4>nome do cidadao</h4>
//             <h4>@arroba</h4>
//             <h4>minutoes e horas</h4>
//         </div>
//         <div id="btn_ctt_ntf">
//             <i class="fa-solid fa-eye-low-vision"></i>
//             <i class="fa-solid fa-x"></i>
//         </div>
//     </div>
// </button>
// <button id="ver_mais">
//     <h4>Ver Mais...</h4>
// </button>
// </div> }