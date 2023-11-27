import cvPdf from "/Resume-CZ-ENG.pdf"
import useShowComponent from "hooks/useShowComponent"

const AboutSection = () => {

  useShowComponent({ selector: ".about-section-wrapper"})

  return (
    <div id="about" className="about-section-wrapper hidden-about">  
      <div className="about-section-container">
        <h1 className="about-section-title">
          About Me          
        </h1>
        <div className="about-section-text">
        I like to craft solid and scalable frontend products with great user experiences.
        </div>
        <a href={cvPdf} rel="noreferrer" target="_blank">
          <button className="button download-cv">Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default AboutSection