import Navbar from "@/app/components/Layout/Navbar";

export async function generateMetadata({ params }) {
  const { country } = await params
  var title = "Psicólogos de " + country
 
  return {
    title,
    description: "Encuentra un psicólogo de tu ciudad o país", 
  }
}

export default async function RootLayout({ children, params }) {
  const { country } = await params

  return (
    <>
        <Navbar img="/NavIcon.svg" flag={country} />
        {children}
    </>
  );
}
