import Navbar from "./components/Layout/Navbar"
import CardsPsychologists from "./components/Home/CardsPsychologists/CardsPsychologists"
import HeroSection from "./components/Home/Hero/HeroSection"
import CardsStats from "./components/Home/CardsStats/CardsStats"
import AdvisorsSection from "./components/Home/AdvisorsSection"
import TypesTherapies from "./components/Home/TypesTherapies/TypesTherapies"
import PsychotherapyProcess from "./components/Home/PsychotherapyProcess/PsychotherapyProcess"
import RequestAppointment from "./components/Home/RequestAppointment/RequestAppointment"
import StepsForTherapy from "./components/Home/StepsForTherapy/StepsForTherapy"

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
      <StepsForTherapy />
      <section className="bg-secondary-subtle pt-5">
          <h1 className="mb-5 text-center fs-1 fw-semibold">Preguntas y respuestas</h1>
          <div className="container"><div className="border border-success rounded-3 p-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum dolor voluptatum omnis odit inventore aut, exercitationem eius porro! Deleniti, harum eius fugit provident possimus magni itaque non corrupti officia!</p></div></div>
      </section>
    </>
  );
}
