
import { verificarIdade } from './verificarIdade.js';

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', verificarIdade); 
});
