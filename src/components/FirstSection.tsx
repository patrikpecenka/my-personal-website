import SphereComponent from './SphereComponent'
import { Button } from 'react-scroll'
import myImg from '/Screenshot_3-gigapixel-standard-scale-4_00x.png'

const FirstSection = () => {
  return (
    <div className="first-section-wrapper">

      {/*left side of first section with introduction and some links and buttons*/}
      <div className="text-links-container">
        <div className="background-grey-text">
          <h1 className="front">FRONT</h1>
          <h1 className="end">END</h1>
        </div>
        
        <h1 id="1">Hi,</h1>
        <h1 id="2">I am Patrick Pecenka</h1>
        <h3> 
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Mauris metus. Integer malesuada. Maecenas aliquet accumsan leo. 
          Donec iaculis gravida nulla. Fusce consectetuer risus a nunc.
        </h3>
        <div className="button-container">
        <Button className="button portfolio" type='submit' value="My Projects" to="projects" spy={true} smooth={true} duration={500} />
          <a href="/src/assets/CV-Patrik-Pecenka.pdf" rel="noreferrer" target="_blank">
            <button className="button download-cv">Download CV</button>
          </a>
          {/*<button className="Hit-me-up">Hit Me Up!</button>*/}
        </div>
      </div>

      {/*right side of first section with 3d rotating cube and AI generated image of myself*/}
      <div className="threejs-image-container">
        <SphereComponent />
        <img className="pfp-image" src={myImg} alt="Vector" />
      </div>
    </div>
  )
}

export default FirstSection
