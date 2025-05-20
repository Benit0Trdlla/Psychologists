import "./Q&A.css"
import Accordion from "./Accordion"

export default function QA() {
    return (
        <>
            <section className="bg-section pt-5">
                <h1 className="mb-3 text-center fs-1 fw-semibold">Preguntas y respuestas</h1>
                <div className="container py-4">
                    <Accordion title="Dejé mi solicitud. ¿Cuándo me escribirán?" id="01">
                        <p className="fw-normal fs-6">Si dejaste una solicitud <strong>de 9:00 a 21:00,</strong> uno de nuestros gerentes creará un chat grupal con un psicólogo en el mensajero que prefieras dentro de 5 minutos.</p>
                        <p>Si dejaste una solicitud <strong>después de las 21:00,</strong> el chat se creará a la mañana siguiente.</p>
                        <p>Recomendamos que los psicólogos se pongan en contacto contigo <strong>dentro de las 2 horas,</strong> pero a veces pueden ocurrir retrasos de su parte (¡su horario de trabajo puede estar bastante ocupado!).</p>
                    </Accordion>

                    <Accordion className="mt-4" title="¿Cómo se integran sus especialistas a la comunidad de psicólogos del sitio?" id="02">
                        <p>Nuestra comunidad se forma principalmente bajo el principio de "los profesionales recomiendan a profesionales".</p>
                        <p>Uno de los mejores indicadores de profesionalismo y fiabilidad de un psicólogo son las recomendaciones de colegas que también priorizan su propia reputación.</p>
                        <p>Los psicólogos que ya forman parte de nuestra comunidad pueden recomendar a sus colegas cuyas habilidades, experiencia y estándares éticos valoran altamente.</p>
                        <p>Sin embargo, no simplemente aceptamos estas recomendaciones a ciegas :) Verificamos su educación, calificaciones, experiencia profesional y especializaciones. Solo después de este proceso, el psicólogo recomendado puede unirse a nuestra comunidad.</p>
                        <p>También revisamos cuidadosamente a cada psicólogo que envía una solicitud para colaborar.</p>
                        <p>¡Tú eliges entre especialistas que sus propios colegas consideran los mejores en su campo!</p>
                    </Accordion>

                    <Accordion className="mt-4" title="¿Mis datos estarán seguros?" id="03">
                        <p>Sí. Nos tomamos muy en serio su privacidad y la seguridad de sus datos. Sus datos de contacto se utilizarán exclusivamente para comunicarse con el psicólogo que haya elegido respecto a los detalles de la consulta.</p>
                        <p>No compartimos su información con terceros.</p>
                    </Accordion>

                    <Accordion className="mt-4" title="El terapeuta no me responde/no se ha puesto en contacto. ¿A quién escribir?" id="04">
                        <p>Si el psicólogo no se pone en contacto contigo <strong>dentro de las 12 horas</strong> desde la creación del chat con él, por favor informa al gerente a través de un mensaje privado.</p>
                    </Accordion>

                    <Accordion className="mt-4" title="Tengo preguntas organizativas. ¿A quién dirigirme?" id="05">
                        <p>Si no logras resolver el problema o malentendido directamente con el psicólogo, puedes contactar al gerente que creó el chat de comunicación con tu psicólogo. Intentaremos ayudarte.</p>
                    </Accordion>

                    <Accordion className="mt-4" title="¿Cómo y cuándo se realiza el pago?" id="06">
                        <p>Pagas las sesiones directamente al psicólogo, sin nuestra intermediación, pagos adicionales ni comisiones.</p>
                        <p>Recomendamos a los psicólogos que soliciten un <strong>50% de anticipo </strong>para sesiones presenciales y un <strong>100% de anticipo </strong>para sesiones en línea. Esto es necesario para garantizar el pago por parte del cliente.</p>
                        <p>Sin embargo, algunos psicólogos pueden aceptar el pago después de la sesión.</p>
                        <p>El pago se realiza de la forma más conveniente para ambas partes. Podrás discutir este y otros temas directamente en el chat.</p>
                    </Accordion>

                    <button className="btn btn-success fw-bold px-5 py-3 mt-5 mx-auto d-flex">Leer todas las preguntas</button>
                </div>

            </section>
        </>
    )
}