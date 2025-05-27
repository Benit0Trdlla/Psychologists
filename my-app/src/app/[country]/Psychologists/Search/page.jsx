export default async function PsychologistsSearch({ params }) {
    const { country } = await params

    return (
        <>
            <div className="container">
                <h1>Encuentra tu psicólogo en {country}</h1>
            </div>
        </>
    );
}