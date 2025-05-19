import "./Q&A.css"
export default function QA() {
    return (
        <>
            <section className="bg-section pt-5">
                <h1 className="mb-3 text-center fs-1 fw-semibold">Preguntas y respuestas</h1>
                <div className="container py-4">


                    <div className="shadow-sm rounded accordion" id="accordionQ&A01">
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

                    <div className="shadow-sm rounded accordion mt-4" id="accordionQ&A02">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cómo se integran sus especialistas a la comunidad de psicólogos del sitio?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A02">
                                <div className="ms-1 accordion-body pt-1">
                                    <p>Nuestra comunidad se forma principalmente bajo el principio de "los profesionales recomiendan a profesionales".</p>
                                    <p>Uno de los mejores indicadores de profesionalismo y fiabilidad de un psicólogo son las recomendaciones de colegas que también priorizan su propia reputación.</p>
                                    <p>Los psicólogos que ya forman parte de nuestra comunidad pueden recomendar a sus colegas cuyas habilidades, experiencia y estándares éticos valoran altamente.</p>
                                    <p>Sin embargo, no simplemente aceptamos estas recomendaciones a ciegas :) Verificamos su educación, calificaciones, experiencia profesional y especializaciones. Solo después de este proceso, el psicólogo recomendado puede unirse a nuestra comunidad.</p>
                                    <p>También revisamos cuidadosamente a cada psicólogo que envía una solicitud para colaborar.</p>
                                    <p>¡Tú eliges entre especialistas que sus propios colegas consideran los mejores en su campo!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-sm rounded accordion mt-4" id="accordionQ&A03">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Mis datos estarán seguros?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A03">
                                <div className="ms-1 accordion-body pt-1">
                                    <p>Sí. Nos tomamos muy en serio su privacidad y la seguridad de sus datos. Sus datos de contacto se utilizarán exclusivamente para comunicarse con el psicólogo que haya elegido respecto a los detalles de la consulta.</p>
                                    <p>No compartimos su información con terceros.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-sm rounded accordion mt-4" id="accordionQ&A04">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    El terapeuta no me responde/no se ha puesto en contacto. ¿A quién escribir?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A04">
                                <div className="ms-1 accordion-body pt-1">
                                    <p>Si el psicólogo no se pone en contacto contigo <strong>dentro de las 12 horas</strong> desde la creación del chat con él, por favor informa al gerente a través de un mensaje privado.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-sm rounded accordion mt-4" id="accordionQ&A05">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Tengo preguntas organizativas. ¿A quién dirigirme?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A05">
                                <div className="ms-1 accordion-body pt-1">
                                    <p>Si no logras resolver el problema o malentendido directamente con el psicólogo, puedes contactar al gerente que creó el chat de comunicación con tu psicólogo. Intentaremos ayudarte.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-sm rounded accordion mt-4" id="accordionQ&A06">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    ¿Cómo y cuándo se realiza el pago?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionQ&A06">
                                <div className="ms-1 accordion-body pt-1">
                                    <p>Pagas las sesiones directamente al psicólogo, sin nuestra intermediación, pagos adicionales ni comisiones.</p>
                                    <p>Recomendamos a los psicólogos que soliciten un <strong>50% de anticipo </strong>para sesiones presenciales y un <strong>100% de anticipo </strong>para sesiones en línea. Esto es necesario para garantizar el pago por parte del cliente.</p>
                                    <p>Sin embargo, algunos psicólogos pueden aceptar el pago después de la sesión.</p>
                                    <p>El pago se realiza de la forma más conveniente para ambas partes. Podrás discutir este y otros temas directamente en el chat.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-success fw-bold px-5 py-3 mt-5 mx-auto d-flex">Leer todas las preguntas</button>
                </div>

            </section>
        </>
    )
}