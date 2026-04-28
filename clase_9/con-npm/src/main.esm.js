//importar con ESM

import Swal from "../node_modules/sweetalert2/dist/sweetalert2.esm.js";
import Toastify from "../node_modules/toastify-js/src/toastify-es.js";

Swal.fire({
    title: "Error!",
    text: "aa"
})

Toastify({text: "HOLA"}).showToast();
