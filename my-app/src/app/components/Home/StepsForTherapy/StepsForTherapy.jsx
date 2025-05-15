import "./StepsForTherapy.css"

export default function StepsForTherapy() {
    return (
        <>
            <section className="container mb-5">
                <div className="d-flex align-items-center gap-3 mb-3 mt-5">
                    <h1 className="mb-0">Obtener ayuda es fácil</h1>
                    <img src="images/pasos-terapia.svg" alt="" className="d-flex" />
                </div>
                <p className="text-success fs-3 fw-semibold">Así es como funciona:</p>

                <div className="flex-column flex-lg-row flex-md-row d-flex justify-content-center align-items-center gap-3">
                    <div className="border-divs p-4 py-md-4 px-md-3 div-steps-dimensions">
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>1</h4></div>
                            <h4 className="mb-0">Consulta los perfiles de los psicólogos</h4>
                        </div>
                        <p className="mb-0 p-position-text">
                            Ahí encontrarás información detallada sobre la experiencia, métodos de trabajo, descripción personal, precio y formato de las consultas.
                        </p>
                    </div>

                    <img className="arrow" src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-1.svg" alt="" />

                    <div className="mb-3 mb-lg-0 mb-sm-3 mb-md-0 border-divs p-4 py-md-4 px-md-3 div-steps-dimensions">
                        <div className="d-flex gap-3 align-items-start align-items-sm-center justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>2</h4></div>
                            <h4 className="mb-0">Elige a tu especialista</h4>
                        </div>
                        <p className="mb-0 p-position-text">
                            Aquel que mejor se adapte a tus necesidades y preferencias.
                        </p>
                    </div>
                </div>

                <img src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-2.svg" className="d-md-block d-none py-2 d-flex mx-auto" alt="" />
                <img className="arrow d-md-none d-block d-flex mx-auto" src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-1.svg" alt="" />

                
                <div className="flex-column flex-lg-row flex-md-row d-flex justify-content-center align-items-center gap-3">
                    <div className="mt-3 mt-lg-0 mt-sm-3 mt-md-0 border-divs p-4 py-md-4 px-md-2 div-steps-dimensions">
                        <div className="d-flex gap-3 align-items-start align-items-sm-center justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>3</h4></div>
                            <h4 className="mb-0">Regístrate para una consulta</h4>
                        </div>
                        <p className="mb-0 p-position-text">
                            Sin formularios, pruebas ni registro. Simplemente deja tus datos de contacto y el psicólogo te contactará lo antes posible.
                        </p>
                    </div>

                    <img src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-1.svg" className="arrow" alt="" />

                    <div className="border-divs p-4 py-md-4 px-md-2 div-steps-dimensions">
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>4</h4></div>
                            <h4 className="mb-0">Paga por los servicios y trabaja directamente con el psicólogo</h4>
                        </div>
                        <p className="mb-0 p-position-text" >
                            Asiste a sesiones en un formato conveniente: en línea a través de servicios seguros o presencial en tu ciudad.
                        </p>
                    </div>
                </div>

                <div className="border-divs width-div-reserva mx-auto d-flex flex-column p-4 align-items-center mt-4">
                    <p className="fw-semibold fs-4 text-center">Comienza a llevar la calidad de tu vida <br /> a un nuevo nivel 💚</p>
                    <button className="btn btn-success fw-semibold p-3">Reservar una cita con un psicólogo</button>
                </div>
            </section>
        </>
    )
}