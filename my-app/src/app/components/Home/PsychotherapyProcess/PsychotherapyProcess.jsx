export default function PsychotherapyProcess() {
    const arr_col1 = [
        { img: "images/PsychotherapyProcess/1.svg", title: "Trabaje experiencias traumáticas en un espacio seguro." },
        { img: "images/PsychotherapyProcess/2.svg", title: "Entienda mejor sus emociones y su influencia en sus pensamientos y comportamientos." },
        { img: "images/PsychotherapyProcess/3.svg", title: "Cree un entorno emocional de apoyo y estabilidad para su hijo." },
        { img: "images/PsychotherapyProcess/4.svg", title: "Comprenda cómo enfrentar crisis personales." },
    ]
    const arr_col2 = [
        {img: "images/PsychotherapyProcess/5.svg", title: "Desarrolle un sentido saludable de autoestima y autoaceptación."},
        {img: "images/PsychotherapyProcess/6.svg", title: "Aprenda a construir relaciones saludables con los demás y consigo mismo."},
        {img: "images/PsychotherapyProcess/7.svg", title: "Aprenda a ser consciente de sus necesidades, valores y aspiraciones."},
        {img: "images/PsychotherapyProcess/8.svg", title: "Recupere la sensación de seguridad y control sobre su vida."},
    ]
    return (
        <>
            <section className="container">
                <h1 className="mb-0 mt-3">En el proceso de psicoterapia, usted...</h1>
                <div className="row py-5">
                    <div className="col-12 col-md-6 col-lg-6">
                        {arr_col1.map((item) => (
                            <div key={item.title} className="gap-3 d-flex justify-content-center align-items-center">
                                <img src={item.img} alt="" />
                                <p className="mb-0 w-100 fw-light text-secondary-subtle">{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        {arr_col2.map((item) => (
                            <div key={item.title} className="gap-3 d-flex justify-content-center align-items-center">
                                <img src={item.img} alt="" />
                                <p className="mb-0 w-100 fw-light text-secondary-subtle">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="fw-light text-secondary-subtle fs-5">Estos resultados están respaldados por las opiniones reales de nuestros clientes.</p>
            </section>

        </>
    )
}