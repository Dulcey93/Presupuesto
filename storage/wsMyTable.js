export let wsMyTable = {
    displayTable(flujo) {
        let plantilla = `
        <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
            <div class="col-4">
                <!-- table-responsive hace que la tabla tenga el scroll cuando se haga pequeña la pantalla, y con table-striped le da las franjas intermedias -->
                <div class="table-responsive">
                    <table class="table table-striped caption-top">
                        <!-- El caption está POR DENTRO de la tabla, pero es como si se creara un espacio extra para él arribita del header -->
                        <caption class="text-start text-success">
                            INGRESOS
                        </caption>
                        <tbody>
                        ${flujo.ingresos
                            .map(
                                (val, id) =>
                                    `
                            ${val? `
                            <tr>
                                <td>${val.inputDescription}</td>
                                <td>${val.inputValue}</td>
                            </tr>`: ""}
                            `
                            )
                            .join("")}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="table-responsive">
                    <table class="table table-striped caption-top">
                        <caption class="text-start text-danger">
                            EGRESOS
                        </caption>
                        <tbody>
                        ${flujo.egresos
                            .map(
                                (val, id) =>
                            `
                                ${val? 
                                    `
                                        <tr>
                                            <td>${val.inputDescription}</td>
                                            <td>${val.inputValue}</td>
                                            <td>${val.porcentaje}%</td>
                                            <td>${`<button class="buttonDrop" value="${id}" id="${id}"><i class="fa-solid fa-trash"></i></button>`}</td>
                                        </tr>
                                    `: ""}
                            `
                            )
                            .join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
        return plantilla;
    },
};
self.addEventListener("message", (e) => {
    postMessage(wsMyTable[`${e.data.module}`](e.data.data));
});
