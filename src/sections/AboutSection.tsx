import useShowComponent from "hooks/useShowComponent"
//import { IconBrandGithub, } from '@tabler/icons-react'
import { useTranslation } from "react-i18next"
import SkillSet from "../components/SkillSet"
import DownloadButton from "components/DownloadButton"

const AboutSection = () => {

  useShowComponent({ selector: ".about-section-wrapper"})

  const [t] = useTranslation("translation")

  return (
    <div id="about" className="about-section-wrapper hidden-about">  
      <div className="about-section-container">
        <h1 className="about-section-title">
          {t("about_section.title")}         
        </h1>
        <SkillSet/>
        <div className="about-section-text">
        I like to craft solid and scalable frontend products with great user experiences.
        </div>
        <DownloadButton/>
      </div>
    </div>
  )
}

export default AboutSection