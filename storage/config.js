export default {
    dataAll: {
        ingresos: (localStorage.getItem("ingreso") ? JSON.parse(localStorage.getItem("ingreso")) : []),
        egresos: (localStorage.getItem("egreso") ? JSON.parse(localStorage.getItem("egreso")) : [])
    }, 
    calcularIngresos(data) {
        console.log(data)
        this.dataAll.ingresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.dataAll.ingresos))
    },
    calcularEgresos(data) {
        console.log(data)
        this.dataAll.egresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.dataAll.egresos))
    },
    myHeader(data) {
        console.log(data);
        // validamos el inputType para saber si es ingreso o egreso
        (data.inputType === "ingreso") ? this.calcularIngresos(data) : this.calcularEgresos(data);
        let ws = new Worker("./components/myHeader.js", {type:"module"});
        ws.postMessage(this.dataAll);
    }
}