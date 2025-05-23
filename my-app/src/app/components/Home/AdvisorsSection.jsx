export default function AdvisorsSection() {
    const help_advisors = [
        { title: "Dificultades en las relaciones", description: "Te cuesta entenderte con tu pareja, familiares, hijos, compañeros. Te sientes solo.", img: "images/Asesores/1.svg" },
        { title: "Períodos difíciles en la vida", description: "Estás atravesando una crisis personal debido a un divorcio, pérdida de empleo, cambio de residencia, etc. Buscas un propósito en la vida.", img: "images/Asesores/2.svg" },
        { title: "Depresión y apatía", description: "Sientes tristeza constante, pérdida de interés por la vida. No disfrutas lo que solías disfrutar.", img: "images/Asesores/3.svg" },
        { title: "Miedos, fobias, ansiedad", description: "Te persigue una preocupación constante que limita tu vida. Tienes miedo de perder a alguien, tu trabajo, salud o a ti mismo.", img: "images/Asesores/4.svg" },
        { title: "Relaciones contigo mismo", description: "No estás seguro de tus habilidades, acciones, decisiones o apariencia. Quieres aprender a comprenderte y aceptarte, recuperar la sensibilidad corporal.", img: "images/Asesores/5.svg" },
        { title: "Duelo, pérdidas, separaciones", description: "Estás atravesando una separación, la pérdida de un ser querido u otros cambios dolorosos en la vida. Las consecuencias de un trauma psicológico te impiden vivir plenamente.", img: "images/Asesores/6.svg" },
    ]

    const bgSection = {
        background: 'linear-gradient(180deg, #eee, #f5f5f6)',
    };

    return (
        <>
            {/* ASESORES SECTION  */}
            <section className="mb-0 text-center py-5" style={bgSection}>
                <h1 className="mb-0">En qué pueden ayudarle nuestros asesores</h1>
                <div className="container text-center mt-5">

                    <div className="row">
                        {help_advisors.map((advisors) => (
                            <div key={advisors.title} className="col-12 col-md-6 col-lg-4">
                                <img src={advisors.img} alt="" />
                                <h4 className="fw-bold">{advisors.title}</h4>
                                <p className="fw-normal fs-semibold">
                                    {advisors.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mb-0 p-0 mt-3 fw-medium">Esto es solo una parte. Cada solicitud es única.</p>
                    <p className="fw-semibold">Por eso, nuestros especialistas ofrecen un enfoque individual que resuena con tu historia y necesidades.</p>
                    <button className="btn btn-success p-3 mt-2 fw-semibold">Reservar una cita con un psicólogo</button>
                </div>
            </section>
        </>
    )
}