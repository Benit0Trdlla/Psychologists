import "./CardsStats.css"
export default function CardsStats() {
    return (
        <>
            <div className="container text-center mt-3 mt-lg-4 mt-xl-0 mb-5 mb-lg-0">
                <div className="row align-items-center d-flex justify-content-between gap-lg-0 gap-1">
                    <div className="col-lg-4  rounded-3 p-0 card-bg-width">
                        <p className="m-0 fs-3 fw-semibold mt-3">27.000+</p>
                        <p className="fw-normal fs-5 p-line-height">clientes encontraron a su <br /> psicólogo</p>
                    </div>
                    <div className="col-lg-4  rounded-3 p-0 card-bg-width">
                        <p className="m-0 fs-3 fw-semibold mt-3">450</p>
                        <p className="fw-normal fs-5 p-line-height">Especialistas con educación y experiencia verificadas</p>
                    </div>
                    <div className="col-lg-4  rounded-3 p-0 card-bg-width">
                        <p className="m-0 fs-3 fw-semibold mt-3">8 años</p>
                        <p className="fw-normal fs-5 p-line-height">de experiencia promedio <br /> de nuestros psicólogos</p>
                    </div>
                </div>
            </div>
        </>
    );
}