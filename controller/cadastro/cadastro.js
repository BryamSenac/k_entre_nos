
import { verificarIdade } from './cadastro_dados.js';

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', verificarIdade); 
});