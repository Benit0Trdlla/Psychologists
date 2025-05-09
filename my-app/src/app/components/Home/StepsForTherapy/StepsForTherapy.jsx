import "./StepsForTherapy.css"
export default function StepsForTherapy() {
    return (
        <>
            <section className="container">
                <div className="d-flex align-items-center gap-3 mb-3 mt-5">
                    <h1 className="mb-0">Obtener ayuda es fácil</h1>
                    <img src="images/pasos-terapia.svg" alt="" className="d-flex" />
                </div>
                <p className="text-success fs-3 fw-semibold">Así es como funciona:</p>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="border-divs p-4" style={{ width: "512px", height: "186px" }}>
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>1</h4></div>
                            <h4 className="mb-0">Consulta los perfiles de los psicólogos</h4>
                        </div>
                        <p className="mb-0" style={{ paddingLeft: "73px", marginTop: "12px" }}>
                            Ahí encontrarás información detallada sobre la experiencia, métodos de trabajo, descripción personal, precio y formato de las consultas.
                        </p>
                    </div>
                    <img src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-1.svg" alt="" />
                    <div className="border-divs p-4" style={{ width: "512px", height: "186px" }}>
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>2</h4></div>
                            <h4 className="mb-0">Elige a tu especialista</h4>
                        </div>
                        <p className="mb-0" style={{ paddingLeft: "77px", marginTop: "12px" }}>
                            Aquel que mejor se adapte a tus necesidades y preferencias.
                        </p>
                    </div>
                </div>

                <img src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-2.svg" className="py-2 d-flex mx-auto" alt="" />
                
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="border-divs p-4" style={{ width: "512px", height: "186px" }}>
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>3</h4></div>
                            <h4 className="mb-0">Regístrate para una consulta</h4>
                        </div>
                        <p className="mb-0" style={{ paddingLeft: "77px", marginTop: "0px" }}>
                            Sin formularios, pruebas ni registro. Simplemente deja tus datos de contacto y el psicólogo te contactará lo antes posible.
                        </p>
                    </div>
                    <img src="https://qui-cdn.azureedge.net/content/shared/ui/how-arrow-1.svg" alt="" />
                    <div className="border-divs p-4" style={{ width: "512px", height: "186px" }}>
                        <div className="d-flex gap-3 align-items-start justify-content-start">
                            <div className="bg-success rounded text-center px-4 py-2"><h4>4</h4></div>
                            <h4 className="mb-0">Paga por los servicios y trabaja directamente con el psicólogo</h4>
                        </div>
                        <p className="mb-0" style={{ paddingLeft: "77px", marginTop: "12px" }}>
                            Asiste a sesiones en un formato conveniente: en línea a través de servicios seguros o presencial en tu ciudad.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}