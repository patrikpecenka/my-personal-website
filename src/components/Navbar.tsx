import 'styles/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <p>LOGO</p>
				  {/*<img className='navbar-logo' src="" alt="" /> */}
				</div>
        <ul className="list-container">
          <li className="item-list"> <a href="">Home</a> </li>
          <li className="item-list"> <a href="">About</a> </li>
          <li className="item-list"> <a href="">Projects</a> </li>
          <button>Contact me</button>
        </ul>
      </div>
    </>
  )
}

export default Navbar