import myTable from "./components/myTable.js";
import config from "./storage/config.js";

const form = document.querySelector("#myFormulario");

myTable.show();
// Datos Ingresados
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.inputValue = Number(data.inputValue);
    config.myHeader(data);
    myTable.show();
    form.reset();
});