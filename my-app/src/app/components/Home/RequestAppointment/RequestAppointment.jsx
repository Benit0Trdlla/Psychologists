import "./RequestAppointment.css"
export default function RequestAppointment() {
    return (
        <>
            <section className="bg-secondary-subtle p-5">
                <div className="div-dimensions border border-dark rounded mx-auto p-lg-5 p-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div>
                        <p className="fw-semibold fs-5">El camino hacia la armonía interior puede ser difícil, pero con el apoyo de nuestros psicólogos, nunca estará solo. 🤗</p>
                        <p className="fw-semibold fs-5">En Terappio están quienes están listos para ayudar.</p>
                        <button className="ms-sm-4 ms-lg-0 mt-3 fw-semibold btn btn-success py-3 px-4">Reservar una cita con un psicólogo</button>
                    </div>
                    <div>
                        <img src="Images/reservar-cita.svg" className="img-position img-dimensions" alt="Imagen de reservar cita" />
                    </div>
                </div>
            </section>
        </>
    )
}