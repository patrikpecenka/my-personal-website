import { Button } from 'react-scroll'
import myImg from '/picture.png'
import cvPdf from "/CV-Patrik-Pecenka.pdf"

const FirstSection = () => {
  return (

      <div className="first-section-wrapper">
        {/*left side of first section with introduction and some links and buttons*/}
        <div className="text-container">
          <div className="background-grey-text">
            <div className="front">FRONT</div>
            <div className="end">END</div>
          </div>
          <div className='main_text_1' >Hi,</div>
          <div className='main_text_2' >I am Patrick Pecenka</div>
          <div className='subtext_1'>
            I'm web developer with an art & design background.
            In other words, I went to art school and returned as a programmer.
            <br />
            <br />
            Oops.
          </div>

          <div className="button-container">
            <Button
              className="button portfolio button-first-section"
              type='submit' value="My Projects"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            />
            <a href={cvPdf} rel="noreferrer" target="_blank">
              <button className="button download-cv button-first-section">Download CV</button>
            </a>
          </div>
        </div>

        {/*right side of first section with 3d rotating cube and AI generated image of myself*/}
        <div className="image-container">
          <img className="pfp-image" src={myImg} alt="Vector" />
        </div>
      </div>


  )
}

export default FirstSection
