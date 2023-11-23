import { Link, Button } from 'react-scroll'
import { useState, useEffect } from 'react'
import navLogo from '/Personal-logo.png'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useTranslation } from "react-i18next"
import SwitchButton from './SwitchButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isSmall = useMediaQuery('(width <= 768px)');
  const [isSwitchOn, setIsSwitchOn] = useState(true)

  const [t, i18n] = useTranslation("translation")

  const handleChangeLanguage = (newState: boolean) => {
    setIsSwitchOn(newState);
    isSwitchOn ? i18n.changeLanguage("cz") : i18n.changeLanguage("en")    
  }

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
            <Link to="projects" spy={true} smooth={true} offset={0} duration={300}>{t("navbar.text_1")}</Link> 
          </li>
          <li className="item-list"> 
            <Link to="about" spy={true} smooth={true} offset={0} duration={300}>{t("navbar.text_2")}</Link> 
          </li>
          <Button className="button" type='submit' value={t("navbar.button_text")} to="contact-me" spy={true} smooth={true} duration={500} />
          <SwitchButton onToggle={handleChangeLanguage}/>
        </ul>

      </nav>
    </>
  )
}

export default Navbar