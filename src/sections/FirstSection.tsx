import { Button } from 'react-scroll'
import myImg from '/picture.png'
import cvPdf from "/Resume-CZ-ENG.pdf"
import { useTranslation } from "react-i18next"
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const FirstSection = () => {

  const [t] = useTranslation("translation")

  return (

      <div className="first-section-wrapper">
        {/*left side of first section with introduction and some links and buttons*/}
        <div className="text-wrapper">
          <div className="text-container">
            <div className="background-grey-text">
              <div className="front">FRONT</div>
              <div className="end">END</div>
            </div>
            <div className='main_text_1' >{t("first_section.main_text_1")}</div>
            <div className='main_text_2' >{t("first_section.main_text_2")}</div>
            <div className='subtext_1'>
            {t("first_section.subtext_1")}
              <br />
              <br />
              {t("first_section.oops")}
            </div>

            <div className="button-container">
              <Button
                className="button portfolio button-first-section"
                type='submit' value={t("first_section.button_p")}
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              />
              <a href={cvPdf} rel="noreferrer" target="_blank">
                <button className="button download-cv button-first-section">{t("first_section.button_cv")}</button>
              </a>
            </div>
            <div className="socials-container">
              <a href="https://www.linkedin.com/in/ppecenka/" rel="noreferrer" target='_blank'>
                <IconBrandLinkedin/>
              </a>
              <a href="https://github.com/patrikpecenka" rel="noreferrer" target='_blank'>
                <IconBrandGithub/>
              </a>
            </div>
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
