export default function Footer() {
    return (
        <>
            <footer>
                <div className="container py-4">
                    <div className="row gap-md-3 gap-lg-0">
                        <div className="col-lg-3 col-md-2 d-flex flex-column justify-content-start align-items-md-start align-items-sm-center">
                            <img src="NavIcon.svg" alt="Logo" width="30" height="24" />
                            <p className="mt-3 fw-semibold fs-5">Éstos son los que le ayudarán</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <p className="fw-semibold fs-5">Páginas</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Buscar a un psicólogo</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Para los psicólogos</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Entrada al despacho del psicólogo</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Blog</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Preguntas y respuestas</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <p className="fw-semibold fs-5">Información jurídica</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Condiciones de uso</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Política de privacidad</a></li>
                                <li className="mb-2 fw-light"><a className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover" href="#">Descargo de responsabilidad</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <p className="fw-semibold fs-5">Póngase en contacto con nosotros</p>
                            <p className="fw-light fs-5 mt-3"><a href="mailto:office@gmail.com" className="text-decoration-none text-dark link-offset-2 link-success link-underline-opacity-25 link-underline-opacity-100-hover">office@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}