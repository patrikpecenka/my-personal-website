import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FirstSection from "components/FirstSection";
import AboutSection from "components/AboutSection";
import PortfolioSection from "components/PortfolioSection";
import ContactForm from "components/ContactForm";

const AppShell = () => {
  return (
    <>
      <Navbar/>
      <FirstSection/>
      <AboutSection/>
      <PortfolioSection/>
      <ContactForm/>
      <Footer/>
    </>
  )

}

export default AppShell