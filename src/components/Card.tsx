import { FC } from "react"
import { IconBrandGithubFilled, IconWorldWww } from '@tabler/icons-react'

interface CardProps {
  id: string,
  image: string,
  title: string,
  href?: string
}

const Card: FC<CardProps> = ({ id, title, image, href }) => {

  return (
    <div id={id} className="card-template-wrapper">
      <div  className="card card-template-container" >
        <div className="card-template-zone">
          <img className="card-image" src={image} loading="lazy"/>
          <p className="card-title">{title}</p>
          <div className="text-title-container">
            <p className="card-text">In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. </p>
          </div>
          <div className="card-buttons-container">
            <a className="website">
              <IconWorldWww />
            </a>
            <a className="github" href={href}>
              <IconBrandGithubFilled />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card