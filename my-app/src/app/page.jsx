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
    </>
  );
}
