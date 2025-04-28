import "./TypesTherapies.css"
export default function TypesTherapies() {
    return (
        <>
            {/* TIPOS DE TERAPIAS */}
            <section className="container px-0 text-center py-5">
                <div className="row gap-lg-3 gap-md-2 gap-sm-3 me-0 gap-3 margin-row-div-cards d-flex justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4 border-custom-image rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 h-100 position-relative">
                            <div className="bg-white z-1 position-absolute top-50 start-50 translate-middle w-100 h-75">
                                <h1 className="fw-semibold mt-5">Terapia para todos</h1>
                                <p className="fw-normal fs-6 mt-3">
                                    Nuestros especialistas trabajan con diferentes clientes en diferentes etapas de sus vidas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-hover col-12 col-md-6 col-lg-4 border-color rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 position-relative div-cards-height">
                            <h3 className="text-success pt-4">Terapia individual</h3>
                            <p>de <strong>13 USD</strong></p>
                            <img src="images/TypesTherapies/1.svg" className="img-fluid mt-sm-2 mt-lg-4" alt="" />
                        </div>
                        <a href="#" className="btn btn-success width-anchor fw-semibold mt-2">Reservar una cita con un psicólogo</a>
                        {/* <a href="#" className="btn btn-success w-75 d-md-block d-none fw-semibold mt-2">Reservar una cita con un psicólogo</a> */}
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 border-color rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 div-cards-height position-relative">
                            <h3 className="text-success pt-4">Terapia de pareja</h3>
                            <p>de <strong>10 USD</strong></p>
                            <img src="images/TypesTherapies/2.svg" className="img-fluid mt-4" alt="" />
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4 border-color rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 div-cards-height position-relative">
                            <h3 className="text-success pt-4">Terapia familiar</h3>
                            <p>de <strong>12 USD</strong></p>
                            <img src="images/TypesTherapies/3.svg" className="img-fluid mt-4" alt="" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 border-color rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 div-cards-height position-relative">
                            <h3 className="text-success pt-4">Terapia para adolescentes</h3>
                            <p>de <strong>15 USD</strong></p>
                            <img src="images/TypesTherapies/4.svg" className="mt-4" width={242} height={216} alt="" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 border-color rounded-4" style={{ height: "454.58px", width: "360px", padding: "20px" }}>
                        <div className="bg-div-cards rounded-2 div-cards-height position-relative">
                            <h3 className="text-success pt-4">Terapia infantil</h3>
                            <p>de <strong>15 USD</strong></p>
                            <img src="images/TypesTherapies/5.svg" className="img-fluid mt-4" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}