import myHeader from "./components/myHeader.js";
import myTable from "./components/myTable.js";

const form = document.querySelector("#myFormulario");

myHeader.showHeader();
// Datos Ingresados
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    myHeader.addData(data);
    myHeader.showHeader();
    myTable.showTable();
    form.reset();
});