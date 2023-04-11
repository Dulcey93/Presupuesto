import config from "../storage/config.js";
import formulas from "./myMaths.js";
export default {
    addData(data) {
        config.myHeader(data);
    }
}
self.addEventListener("message", (e)=>{
    let ingresos = formulas.detalle(e.data.ingresos);
    let egresos = formulas.detalle(e.data.egresos)
    let base = formulas.base([ingresos.total, egresos.total])
    postMessage({ingresos, egresos, base})
})