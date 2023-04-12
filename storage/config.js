export default {
    dataAll: {
        ingresos: (localStorage.getItem("ingreso") ? JSON.parse(localStorage.getItem("ingreso")) : []),
        egresos: (localStorage.getItem("egreso") ? JSON.parse(localStorage.getItem("egreso")) : [])
    }, 
    calcularIngresos(data) {
        this.dataAll.ingresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.dataAll.ingresos))
    },
    calcularEgresos(data) {
        this.dataAll.egresos.unshift(data);
        localStorage.setItem(data.inputType, JSON.stringify(this.dataAll.egresos))
    },
    myHeader(data) {
        // validamos el inputType para saber si es ingreso o egreso
        (data.inputType === "ingreso") ? this.calcularIngresos(data) : this.calcularEgresos(data);
        let ws = new Worker("./components/myHeader.js", {type:"module"});
        this.dropElement(data.inputType);
        ws.postMessage(this.dataAll);
    },
    dropElement(inputType) {
        // Obtenemos los botones buttonDrop
        const buttonDrop = document.querySelectorAll(".buttonDrop");
        // Recorremos los botones buttonDrop
        buttonDrop.forEach((button) => {
            button.addEventListener("click", (e) => {
                let dataCargada = JSON.parse(localStorage.getItem(inputType));
                // Obtenemos el id del boton
                const id = e.target.id;
                // Usamos el método splice para eliminar el elemento del array
                dataCargada.splice(id, 1);
                // Guardamos el array en el localStorage
                localStorage.setItem(inputType, JSON.stringify(dataCargada));
                // Recargamos la página
                location.reload(); 
            })
        })
    }
}