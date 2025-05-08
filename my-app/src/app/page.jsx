import Navbar from "./components/Layout/Navbar"
import CardsPsychologists from "./components/Home/CardsPsychologists/CardsPsychologists"
import HeroSection from "./components/Home/Hero/HeroSection"
import CardsStats from "./components/Home/CardsStats/CardsStats"
import AdvisorsSection from "./components/Home/AdvisorsSection"
import TypesTherapies from "./components/Home/TypesTherapies/TypesTherapies"
import PsychotherapyProcess from "./components/Home/PsychotherapyProcess/PsychotherapyProcess"
import RequestAppointment from "./components/Home/RequestAppointment/RequestAppointment"

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
      <RequestAppointment />
      <section className="container">
        <div className="d-flex align-items-center gap-3 mb-3 mt-5">
          <h1 className="mb-0">Obtener ayuda es fácil</h1>
          <img src="images/pasos-terapia.svg" alt="" className="d-flex"/>
        </div>
        <p className="text-success fs-3 fw-semibold">Así es como funciona:</p>
      </section>
    </>
  );
}
