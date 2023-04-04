import config from "../storage/config.js";
export default {
    showTable() {
        //Le decimos que el this va a contener lo que haya en el localStorage en la key "myHeader"
        config.myTable();
        Object.assign(this, JSON.parse(localStorage.getItem("myTable")));
        //Creamos el worker
        const ws = new Worker("storage/wsMyTable.js", { type: "module" });
        //Enviamos un mensaje al worker
        ws.postMessage({ module: "displayTable", data: this.flujo});

         //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Insertamos en nuestro index
            document.querySelector("#table").innerHTML = e.data;
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }
}