export function criaPerfil() {
    let perfil =
    {
        nome: 'Fulano',
        aroba: 'praticio_star',
        img: 'https://mercadohoje.uai.com.br/wp-content/uploads/2022/02/venda-vasco-1280x720.jpg', // URL de exemplo
        fotoP: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPnIRTZ38Iy2ARxmtlW5nb73KKounthk4yw&s', // URL de exemplo
        seguidor: '998',
        seguindo: '200',
    };

    let section = document.getElementById('miolo'); // Obtém a seção pelo ID


    let perfilDiv = document.createElement('div');
    perfilDiv.className = 'vsfd';

    let nomeS = document.createElement('h1');
    nomeS.textContent = perfil.nome;
    nomeS.id = 'Nome';

    let conteiner = document.createElement('img');
    conteiner.src = perfil.img;
    conteiner.id = 'container';

    let fotoPerfil = document.createElement('img');
    fotoPerfil.src = perfil.fotoP;
    fotoPerfil.id = 'perfil-icone';

    let nomeI = document.createElement('h3');
    nomeI.textContent = perfil.nome;
    nomeI.id = 'Nome_exemplo';

    let arobaI = document.createElement('h4');
    arobaI.textContent = perfil.aroba;
    arobaI.id = 'aroba';

    let seguidorX = document.createElement('h3');
    seguidorX.textContent = perfil.seguidor + ' seguidores';
    seguidorX.id = 'seguidores';

    let seguindoX = document.createElement('h3');
    seguindoX.textContent = perfil.seguindo + ' seguindo';
    seguindoX.id = 'seguindo';

    perfilDiv.appendChild(nomeS);
    perfilDiv.appendChild(conteiner);
    perfilDiv.appendChild(fotoPerfil);
    perfilDiv.appendChild(nomeI);
    perfilDiv.appendChild(arobaI);
    perfilDiv.appendChild(seguidorX);
    perfilDiv.appendChild(seguindoX);

    section.appendChild(perfilDiv);
}