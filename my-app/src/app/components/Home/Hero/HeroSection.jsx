import "./HeroSection.css"

export default function HeroSection() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="container text-center mt-5">
                <div className="row justify-content-evenly">
                    <div className="col-lg-6 text-start">
                        <h1 className="hero-title">Elige un psicólogo con el que te sientas cómodo siendo tú mismo</h1>
                        <p className="hero-subtitle">En línea o presencial en tu ciudad. Sin registro. Las recomendaciones de colegas y clientes son tu apoyo en la elección.</p>
                        <button className="btn btn-success d-lg-block d-none fw-semibold px-5 py-3">Encontrar un psicólogo</button>
                    </div>

                    <div className="col-lg-6 text-start order-last mt-3 d-lg-none d-block">
                        <button className="btn btn-success w-100 p-3 fw-semibold">Encontrar un psicólogo</button>
                    </div>

                    <div className="col-lg-6">
                        <img src="images/HeroSection.svg" alt="Hero Section Image" className="img-fluid" width={800} height={800} />
                        <div className="div-overlay border border-1 rounded-3 border-dark d-flex bg-white">
                            <img src="heart.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mt-2 ms-3" />
                            <p className="ms-1 ms-lg-0 px-lg-2 text-start mt-1">
                                Desde 2016 conectamos a quienes buscan ayuda con expertos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}