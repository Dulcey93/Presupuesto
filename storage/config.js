export default {
    ingresos: (localStorage.getItem("ingresos") ? JSON.parse(localStorage.getItem("ingresos")) : []),
    egresos: (localStorage.getItem("egresos") ? JSON.parse(localStorage.getItem("egresos")) : []),
    dataAll: {
        ingresos: this.ingresos,
        egresos: this.egresos
    },
    calcularIngresos(data) {
        this.ingresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.ingresos));
    },
    calcularEgresos(data) {
        this.egresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.egresos))
    },
    myHeader(data) {
        // validamos el inputType para saber si es ingreso o egreso
        (data.inputType === "ingreso") ? this.calcularIngresos(data) : this.calcularEgresos(data);
        let ws = new Worker("./components/myHeader.js", {type:"module"});
        ws.postMessage(this.dataAll);
    }
}