import { Link, Button } from 'react-scroll'
import { useState, useEffect } from 'react'
import navLogo from '/Personal-logo.png'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useTranslation } from "react-i18next"
import SwitchButton from './SwitchButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isSmall = useMediaQuery('(width <= 768px)');
  const storedValue = localStorage.getItem("isSwitchOn");
  const [isSwitchOn, setIsSwitchOn] = useState(storedValue ? JSON.parse(storedValue) : false)

  const { t, i18n } = useTranslation("translation")

  const handleChangeLanguage = (newState: boolean) => {
    setIsSwitchOn(newState)
    localStorage.setItem("isSwitchOn", JSON.stringify(newState))
  }

  useEffect(() => {
    if (!isSwitchOn) {
      i18n.changeLanguage("cz");
      localStorage.setItem("language", "cz");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "eng");
    }
  }, [isSwitchOn, i18n]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!isSmall) {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  }, [isSmall]);

  return (
    <>
      <nav className={`navbar-container ${isOpen ? "open" : ""}`}>
        <div className="navbar-logo-container">
          <img className='navbar-logo' src={navLogo} alt="Logo" />
          <div className="burger-menu" onClick={toggleMenu}>
            {isOpen ? "X" : "☰"}
          </div>
        </div>
        <ul className={`list-container ${isOpen ? "open" : "closed"}`}>
          <li className="item-list">
            <Link to="projects" spy={true} smooth={true} offset={0} duration={800}>{t("navbar.text_1")}</Link>
          </li>
          <li className="item-list">
            <Link to="about" spy={true} smooth={true} offset={-300} duration={800}>{t("navbar.text_2")}</Link>
          </li>
          <Button className="button navbar-button" type='submit' value={t("navbar.button_text")} to="contact-me" spy={true} smooth={true} duration={800} />
          <SwitchButton onToggle={handleChangeLanguage} />
        </ul>

      </nav>
    </>
  )
}

export default Navbar