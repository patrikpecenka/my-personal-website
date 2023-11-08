import { Link, Button } from 'react-scroll'

const Navbar = () => {
  
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img className='navbar-logo' src="/src/assets/Personal-logo.png" alt="" />
        </div>
        <ul className="list-container">
          <li className="item-list"> 
            <Link to="projects" spy={true} smooth={true} offset={0} duration={300}>Projects</Link> 
          </li>
          <li className="item-list"> 
            <Link to="about" spy={true} smooth={true} offset={0} duration={300}>About</Link> 
          </li>
          <Button className="button" type='submit' value="Contact Me" to="contact-me" spy={true} smooth={true} duration={500} />
        </ul>
      </div>
    </>
  )
}

export default Navbar