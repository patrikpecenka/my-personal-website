const AboutSection = () => {

  return (
    <div id="about" className="about-section-wrapper hidden-about">  
      <div className="about-section-container">
        <h1 className="about-section-title">
          About Me          
        </h1>
        <div className="about-section-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Integer malesuada. 
        Maecenas aliquet accumsan leo. Donec iaculis gravida nulla. Fusce consectetuer risus a nunc.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Integer malesuada. Maecenas aliquet accumsan leo. Donec iaculis gravida nulla. Fusce consectetuer risus a nunc.
        </div>
        <a href="/src/assets/CV-Patrik-Pecenka.pdf" rel="noreferrer" target="_blank">
          <button className="button download-cv">Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default AboutSection