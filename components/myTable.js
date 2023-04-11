import config from "../storage/config.js";
export default{
    
    ws: new Worker("./components/myHeader.js", {type:"module"}),
    wsTables: new Worker("./ws/wsMyTable.js"),
    show(){
        this.ws.postMessage(config.dataAll);
        this.ws.addEventListener("message", (e)=>{
            this.wsTables.postMessage({module: "showTableIngresos", p1: e.data.ingresos})
            this.wsTables.postMessage({module: "showTableEgresos", p1: e.data.egresos})
            this.wsTables.postMessage({module: "showTableEstado", p1: e.data.base})
        })
        this.wsTables.addEventListener("message", (e)=>{
            let plantilla = new DOMParser().parseFromString(e.data.plantilla, "text/html");
            document.querySelector(e.data.id).innerHTML= "";
            document.querySelector(e.data.id).append(plantilla.querySelector("table"));
        })
    },
}