import myHeader from "./components/myHeader.js";
import myTable from "./components/myTable.js";

const form = document.querySelector("#myFormulario");

myTable.show();
// Datos Ingresados
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.inputValue = Number(data.inputValue);
    myHeader.addData(data);
    myTable.show();
});