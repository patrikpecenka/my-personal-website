import { Button } from 'react-scroll'
import myImg from '/picture.png'
import cvPdf from "/CV-Patrik-Pecenka.pdf"

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
          I'm web developer with an art & design background.
          In other words, I went to art school and returned as a programmer.
          <br/>
          <br/>
          Oops.
        </h3>
        <div className="button-container">
        <Button className="button portfolio" type='submit' value="My Projects" to="projects" spy={true} smooth={true} duration={500} />
          <a href={cvPdf} rel="noreferrer" target="_blank">
            <button className="button download-cv">Download CV</button>
          </a>
          {/*<button className="Hit-me-up">Hit Me Up!</button>*/}
        </div>
      </div>

      {/*right side of first section with 3d rotating cube and AI generated image of myself*/}
      <div className="threejs-image-container">
        <img className="pfp-image" src={myImg} alt="Vector" />
      </div>
    </div>
  )
}

export default FirstSection
