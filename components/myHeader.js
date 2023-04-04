import config from "../storage/config.js";
export default {
    default: {
        total: 0,
        ingresos: 0,
        egresos: 0,
        percent: 0
    },
    showHeader() {
        // Si no existen datos en el localStorage, se crea el objeto por defecto
        if (!localStorage.getItem("myHeader")) {
            localStorage.setItem("myHeader", JSON.stringify(this.default));
            Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
            //Creamos el worker
            const ws = new Worker("storage/wsMyHeader.js", { type: "module" });
            //Enviamos un mensaje al worker
            ws.postMessage({ module: "displayHeader", data: this.default });
            //Esta es la respuesta del worker
            ws.addEventListener("message", (e) => {
                // Insertamos en nuestro index
                document.querySelector("#header").innerHTML = e.data;
                //terminamos el trabajo del worker
                ws.terminate();
            })            
        } else {
            let dataLocal = JSON.parse(localStorage.getItem("myHeader"));
            //Creamos el worker
            const ws = new Worker("storage/wsMyHeader.js", { type: "module" });
            //Enviamos un mensaje al worker
            ws.postMessage({ module: "displayHeader", data: dataLocal });
            //Esta es la respuesta del worker
            ws.addEventListener("message", (e) => {
                // Insertamos en nuestro index
                document.querySelector("#header").innerHTML = e.data;
                //terminamos el trabajo del worker
                ws.terminate();
            })
        }
    },
    addData(data) {
        config.myHeader(data);
    }

}