import config from "../storage/config.js";
export default {
    default: [{
        total: 0,
        ingresos: 0,
        egresos: 0,
        percent: 0
    }],
    showHeader() {
        if(localStorage.getItem("myHeader")) {
            
            let dataLocal = JSON.parse(localStorage.getItem("myHeader"));
            console.log(dataLocal);
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
        }else{
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
        }
    },
    addData(data) {
        config.myHeader(data);
    }

}