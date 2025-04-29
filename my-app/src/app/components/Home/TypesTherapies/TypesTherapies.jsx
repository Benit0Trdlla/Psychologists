import "./TypesTherapies.css"
export default function TypesTherapies() {
    const types_therapies = [
        { title: "Terapia individual", price: "13 USD", image: "images/TypesTherapies/1.svg", href: "#" },
        { title: "Terapia de pareja", price: "10 USD", image: "images/TypesTherapies/2.svg", href: "#" },
        { title: "Terapia familiar", price: "12 USD", image: "images/TypesTherapies/3.svg", href: "#" },
        { title: "Terapia para adolescentes", price: "15 USD", image: "images/TypesTherapies/4.svg", href: "#" },
        { title: "Terapia infantil", price: "15 USD", image: "images/TypesTherapies/5.svg", href: "#" },
    ]
    return (
        <>
            {/* TIPOS DE TERAPIAS */}
            <section className="container px-0 text-center py-5">
                <div className="row gap-lg-3 gap-md-2 gap-sm-3 me-0 gap-3 margin-row-div-cards d-flex justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4 border-custom-image rounded-4 container-cards">
                        <div className="bg-div-cards rounded-2 h-100 position-relative">
                            <div className="bg-white z-1 position-absolute top-50 start-50 translate-middle w-100 h-75">
                                <h1 className="fw-semibold mt-5">Terapia para todos</h1>
                                <p className="fw-normal fs-6 mt-3">
                                    Nuestros especialistas trabajan con diferentes clientes en diferentes etapas de sus vidas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {types_therapies.map((type) => (
                        <div key={type.title} className="bg-hover col-12 col-md-6 col-lg-4 border-color rounded-4 container-cards">
                            <div className="bg-div-cards rounded-2 position-relative div-cards-height">
                                <h3 className="text-success pt-4">{type.title}</h3>
                                <p>de <strong>{type.price}</strong></p>
                                <img src={type.image} className="img-fluid mt-sm-2 mt-lg-4" alt="" />
                            </div>
                            <a href={type.href} className="btn btn-success width-anchor fw-semibold mt-2">Reservar una cita con un psicólogo</a>
                            {/* <a href="#" className="btn btn-success w-75 d-md-block d-none fw-semibold mt-2">Reservar una cita con un psicólogo</a> */}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}