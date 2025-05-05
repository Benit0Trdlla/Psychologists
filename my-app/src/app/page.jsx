import Navbar from "./components/Layout/Navbar"
import CardsPsychologists from "./components/Home/CardsPsychologists/CardsPsychologists"
import HeroSection from "./components/Home/Hero/HeroSection"
import CardsStats from "./components/Home/CardsStats/CardsStats"
import AdvisorsSection from "./components/Home/AdvisorsSection"
import TypesTherapies from "./components/Home/TypesTherapies/TypesTherapies"
import PsychotherapyProcess from "./components/Home/PsychotherapyProcess/PsychotherapyProcess"

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsStats />
      <CardsPsychologists />
      <AdvisorsSection />
      <TypesTherapies />
      <PsychotherapyProcess />
      <section className="bg-secondary-subtle p-lg-5">
        <div style={{ width: "1072px", height: "370px", position: "relative" }} className="border border-dark rounded mx-auto p-5 d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-semibold fs-5">El camino hacia la armonía interior puede ser difícil, pero con el apoyo de nuestros psicólogos, nunca estará solo. 🤗</p>
            <p className="fw-semibold fs-5">En Terappio están quienes están listos para ayudar.</p>
            <button className="mt-3 fw-semibold btn btn-success py-3 px-4">Reservar una cita con un psicólogo</button>
          </div>
          <div>
            <img src="Images/reservar-cita.svg" alt="" style={{position: "relative", right: "-100px"}}/>
          </div>
        </div>
      </section>

    </>
  );
}
