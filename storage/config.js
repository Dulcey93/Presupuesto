export default {
    ingresos: [],
    egresos: [],
    calcularIngresos(data) {
        this.ingresos.push(data);
    },
    calcularEgresos(data) {
        this.egresos.push(data);
        const totalEgresos = this.egresos.reduce((total, egreso) => total + parseInt(egreso.inputValue), 0);
        this.egresos.forEach((egreso) => {
            const porcentaje = parseInt(egreso.inputValue) / totalEgresos * 100;
            egreso.porcentaje = porcentaje.toFixed(1);
        });
    },
    myHeader(data) {
        data.inputType === "ingreso" ? this.calcularIngresos(data) : this.calcularEgresos(data);
        localStorage.setItem("myHeader", JSON.stringify({
            flujo: {
                total: `$ ${this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0) - this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)}`,
                ingresos: this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0),
                egresos: this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0),
                percent: this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0) != 0 ? ((this.egresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0) / this.ingresos.reduce((acumulador, objeto) => acumulador + parseInt(objeto.inputValue), 0)) * 100).toFixed(1) : "DIV 0!"
            }
        }))
    },
    myTable() {
        localStorage.setItem("myTable", JSON.stringify({
            flujo: {
                ingresos: this.ingresos,
                egresos: this.egresos
            }
        }))
    }
}