import Navbar from "components/Navbar";
import FirstSection from "sections/FirstSection";
import AboutSection from "sections/AboutSection";
import PortfolioSection from "sections/PortfolioSection";
import ContactForm from "components/ContactForm";

const AppShell = () => {
  return (
    <>
      <Navbar />
      <FirstSection />
      <AboutSection />
      <PortfolioSection />
      <ContactForm />
    </>
  )
}

export default AppShell