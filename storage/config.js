export default {
    ingresos: [],
    egresos: [],
    dataLocal: [],
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
        // validamos el inputType para saber si es ingreso o egreso
        (data.inputType === "ingreso") ? this.calcularIngresos(data) : this.calcularEgresos(data);
        // Creamos el objeto que se va a guardar en el localStorage
        const myHeader = {
            total: 0,
            ingresos: 0,
            egresos: 0,
            percent: 0
        };
        // Calculamos el total de ingresos
        myHeader.ingresos = this.ingresos.reduce((acc, cur) => acc + parseInt(cur.inputValue), 0);
        // Calculamos el total de egresos
        myHeader.egresos = this.egresos.reduce((acc, cur) => acc + parseInt(cur.inputValue), 0);
        // Calculamos el porcentaje de egresos
        myHeader.percent = Math.round((myHeader.egresos / myHeader.ingresos) * 100);
        // Calculamos el total
        myHeader.total = myHeader.ingresos - myHeader.egresos;
        // Creamos un array que va a contener los objetos del localStorage
        this.dataLocal.push(myHeader);
        localStorage.setItem("myHeader", JSON.stringify(dataLocal));
    },
    myTable() {
        // Creamos el objeto que se va a guardar en el localStorage
        const myTable = {
            ingresos: this.ingresos,
            egresos: this.egresos
        };
        // Guardamos el objeto en el localStorage
        localStorage.setItem("myTable", JSON.stringify(myTable));
    }
}