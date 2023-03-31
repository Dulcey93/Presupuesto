import config from "../storage/config.js";
export default {
    showHeader(data) {
        config.myHeader(data);
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
        //Creamos el worker
        const ws = new Worker("storage/wsMyHeader.js", { type: "module" });
        //Enviamos un mensaje al worker
        ws.postMessage({ module: "displayHeader", data: this.flujo });

        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Insertamos en nuestro index
            document.querySelector("#header").innerHTML = e.data;
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }

}