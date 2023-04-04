export let wsMyHeader = {
    displayHeader(myHeader) {
        let plantilla = `
            <h2>Presupuesto disponible</h2>
            <h1 class="mt-4">$${myHeader.total}</h1>
            <div class="container-fluid col w-25">
                <div class="row mt-5 row-cols-1">
                    <div class="col bg-info mb-3 d-flex justify-content-between">
                        <h5 class="me-3">Ingresos</h5>
                        <p>${myHeader.ingresos}</p>
                    </div>
                    <div class="col bg-danger mb-3 d-flex justify-content-between">
                        <h5 class="me-3">Egresos</h5>
                        <div class="d-flex justify-content-between">
                            <p class="me-2">${myHeader.egresos}</p>
                            <p>${myHeader.percent}%</p>
                        </div>
                    </div>
                </div>
            </div>`;
        return plantilla;
    },
};
self.addEventListener("message", (e) => {
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
});
