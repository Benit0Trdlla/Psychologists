export default function Accordion({ title, id, children, className }) {
    return (
        <>
            <div className={`${className} shadow-sm rounded accordion`} id={`accordionQ&A${id}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed p-4 fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                            {title}
                        </button>
                    </h2>
                    <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent={`#accordionQ&A${id}`}>
                        <div className="ms-1 accordion-body pt-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}