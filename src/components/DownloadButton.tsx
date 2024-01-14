import { useState } from "react"
import { useTranslation } from "react-i18next"
import cvPdf from "/Resume-CZ-ENG.pdf"
import { IconDownload } from '@tabler/icons-react'

const DownloadButton = () => {

  const { t } = useTranslation("translation")
  const [showIcon, setShowIcon] = useState<boolean>(false)

  const handleHover = () => {
    setShowIcon(!showIcon)
  }
  return (
    <a className='button-under-text' href={cvPdf} rel="noreferrer" target="_blank">
      <button
        className="button download-cv button-first-section"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        {showIcon ? (
          <IconDownload />
        ) : (
          t("first_section.button_cv")
        )}
      </button>
    </a>
  )
}

export default DownloadButton