
import { verificarIdade } from './verificarIdade.js';

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', verificarIdade); 
});


let dadosC = [
    { nome: 'guilerme', emailC: 'guilherme@gmail', senhaC: '6767', ano:'2000'  },
    { nome: 'fulano', emailC: 'fulano@gmail', senhaC: '4321', ano:'2000'  },
    { nome: 'tal', emailC: 'tal@gmail', senhaC: '1234', ano:'2000' },
];
