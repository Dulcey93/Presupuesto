let table = {
    showTableIngresos(p1){
        let plantilla = /*html*/`
            <div class="table-responsive">
                <table class="table table-striped caption-top">
                    <caption class="text-start text-success">
                        INGRESOS
                    </caption>
                    <tbody>
        `;
        p1.forEach((data) => {
            plantilla += /*html*/ `
                <tr>
                    <td>${data.nombre}</td>
                    <td>${data.valorText}</td>
                </tr>
            `;
        });
        return {plantilla : /*html*/`${plantilla}</tbody></table></div>`, id: "#ingresos"};
    },
    showTableEgresos(p1){
        let plantilla = /*html*/`
            <div class="table-responsive">
                <table class="table table-striped caption-top">
                    <caption class="text-start text-danger">
                        EGRESOS
                    </caption>
                    <tbody>
        `;
        p1.forEach((data) => {
            plantilla += /*html*/ `
                <tr>
                    <td>${data.nombre}</td>
                    <td>${data.valorText}<sup>${data.porcentajeText}</sup></td>
                    <td>${`<button class="buttonDrop" value="${id}" id="${id}"><i class="fa-solid fa-trash"></i></button>`}</td>
                </tr>
            `;
        });
        return {plantilla : /*html*/`${plantilla}</tbody></table></div>`, id: "#egresos"};
    },
    showTableEstado(p1){
        let plantilla = /*html*/`
        `;
        [p1].forEach((data) => {
            plantilla += /*html*/ `
            <div id="header_main">
            <h2>Presupuesto disponible</h2>
            <h1 class="mt-4">${data.sobranteText}</h1>
            <div class="container-fluid col w-25">
                <div class="row mt-5 row-cols-1">
                    <div class="col bg-info mb-3 d-flex justify-content-between">
                        <h5 class="me-3">Ingresos</h5>
                        <p>${data.baseText}</p>
                    </div>
                    <div class="col bg-danger mb-3 d-flex justify-content-between">
                        <h5 class="me-3">Egresos</h5>
                        <div class="d-flex justify-content-between">
                            <p class="me-2">${data.deudaText}</p>
                            <p>${data.porcentajeText}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `;
        });
        return {plantilla :`${plantilla}`, id: "#header"};
    }
}
self.addEventListener("message", (e)=>{
    postMessage(table[e.data.module](e.data.p1));
})