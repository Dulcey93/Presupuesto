import myHeader from "./components/myHeader.js";
import myTable from "./components/myTable.js";

const form = document.querySelector("#myFormulario");

// Datos Ingresados
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    myHeader.showHeader(data);
    myTable.showTable();
    form.reset();
});
