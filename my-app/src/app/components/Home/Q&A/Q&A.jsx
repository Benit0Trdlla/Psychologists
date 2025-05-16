import "./Q&A.css"
export default function QA() {
    return (
        <>
            <section className="bg-secondary-subtle pt-5">
                <h1 className="mb-3 text-center fs-1 fw-semibold">Preguntas y respuestas</h1>
                <div className="container py-4">


                    <div className="shadow rounded accordion" id="accordionQ&A01">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Dejé mi solicitud. ¿Cuándo me escribirán?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A01">
                                <div className="ms-1 accordion-body pt-1">
                                    <p className="fw-normal fs-6">Si dejaste una solicitud <strong>de 9:00 a 21:00,</strong> uno de nuestros gerentes creará un chat grupal con un psicólogo en el mensajero que prefieras dentro de 5 minutos.</p>
                                    <p>Si dejaste una solicitud <strong>después de las 21:00,</strong> el chat se creará a la mañana siguiente.</p>
                                    <p>Recomendamos que los psicólogos se pongan en contacto contigo <strong>dentro de las 2 horas,</strong> pero a veces pueden ocurrir retrasos de su parte (¡su horario de trabajo puede estar bastante ocupado!).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}