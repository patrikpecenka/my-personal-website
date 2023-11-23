import { Link, Button } from 'react-scroll'
import { useState, useEffect } from 'react'
import navLogo from '/Personal-logo.png'
import { useMediaQuery } from 'hooks/useMediaQuery'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isSmall = useMediaQuery('(width <= 768px)');

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
            <Link to="projects" spy={true} smooth={true} offset={0} duration={300}>Projects</Link> 
          </li>
          <li className="item-list"> 
            <Link to="about" spy={true} smooth={true} offset={0} duration={300}>About</Link> 
          </li>
          <Button className="button" type='submit' value="Contact Me" to="contact-me" spy={true} smooth={true} duration={500} />
        </ul>
      </nav>
    </>
  )
}

export default Navbar