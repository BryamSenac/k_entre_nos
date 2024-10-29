import { criaPerfil } from "./../controller/operacao_K.js";
import { esconderATLZ } from "../controller/edit.js";
import { mostrarATLZ } from "../controller/edit.js";

document.addEventListener("DOMContentLoaded", () => {
    criaPerfil();
});

window.esconderATLZ = esconderATLZ;
window.mostrarATLZ = mostrarATLZ;