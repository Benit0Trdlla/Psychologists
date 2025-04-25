export default function AdvisorsSection() {
    return (
        <>
            {/* ASESORES SECTION  */}
            <section className="bg-secondary-subtle mb-0 text-center py-5">
                <h1 className="mb-0">En qué pueden ayudarle nuestros asesores</h1>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/1.svg" alt="" />
                            <h4 className="fw-bold">Dificultades en las relaciones</h4>
                            <p className="fw-normal fs-semibold">
                                Te cuesta entenderte con tu pareja, familiares, hijos, compañeros. Te sientes solo.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/2.svg" alt="" />
                            <h4 className="fw-bold">Períodos difíciles en la vida</h4>
                            <p className="fw-normal fs-semibold">
                                Estás atravesando una crisis personal debido a un divorcio, pérdida de empleo, cambio de residencia, etc. Buscas un propósito en la vida.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/3.svg" alt="" />
                            <h4 className="fw-bold">Depresión y apatía</h4>
                            <p className="fw-normal fs-semibold">
                                Sientes tristeza constante, pérdida de interés por la vida. No disfrutas lo que solías disfrutar.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/4.svg" alt="" />
                            <h4 className="fw-bold">Miedos, fobias, ansiedad
                            </h4>
                            <p className="fw-normal fs-semibold">
                                Te persigue una preocupación constante que limita tu vida. Tienes miedo de perder a alguien, tu trabajo, salud o a ti mismo.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/5.svg" alt="" />
                            <h4 className="fw-bold">Relaciones contigo mismo</h4>
                            <p className="fw-normal fs-semibold">
                                No estás seguro de tus habilidades, acciones, decisiones o apariencia. Quieres aprender a comprenderte y aceptarte, recuperar la sensibilidad corporal.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/Asesores/6.svg" alt="" />
                            <h4 className="fw-bold">Duelo, pérdidas, separaciones</h4>
                            <p className="fw-normal fs-semibold">
                                Estás atravesando una separación, la pérdida de un ser querido u otros cambios dolorosos en la vida. Las consecuencias de un trauma psicológico te impiden vivir plenamente.
                            </p>
                        </div>
                    </div>

                    <p className="mb-0 p-0 mt-3 fw-medium">Esto es solo una parte. Cada solicitud es única.</p>
                    <p className="fw-semibold">Por eso, nuestros especialistas ofrecen un enfoque individual que resuena con tu historia y necesidades.</p>
                    <button className="btn btn-success p-3 mt-2 fw-semibold">Reservar una cita con un psicólogo</button>
                </div>
            </section>
        </>
    )
}