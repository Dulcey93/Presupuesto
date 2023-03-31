export default {
    ingresos: [],
    egresos: [],
    calcularIngresos(data) {
        this.ingresos.push(data);
        /* const suma = this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0);
        return suma; */
    },
    calcularEgresos(data) {
        this.egresos.push(data);
        /* const suma = this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0);
        return -suma; */
    },
    myHeader(data) {
        data.inputType === "ingreso" ? this.calcularIngresos(data) : this.calcularEgresos(data);
        localStorage.setItem("myHeader", JSON.stringify({
            flujo: {
                total: `$ ${this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)-this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)}`,
                ingresos: this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0),
                egresos: this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0),
                percent: this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)!=0? ((this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)/this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0))*100).toFixed(1) : "DIV 0!"
            }
        }))
    },
    myTable() {
        localStorage.setItem("myTable", JSON.stringify({
            ingresos: this.ingresos,
            egresos: this.egresos,
        }))
    }

}