import { criaPerfil } from "./../../controller/perfil/operacao_K.js";
import { esconderATLZ } from "./../../controller/perfil/edit.js";
import { mostrarATLZ } from "./../../controller/perfil/edit.js";

document.addEventListener("DOMContentLoaded", () => {
    criaPerfil();
});

window.esconderATLZ = esconderATLZ;
window.mostrarATLZ = mostrarATLZ;