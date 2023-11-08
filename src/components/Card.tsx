import { FC, useEffect } from "react"
import { IconBrandGithubFilled, IconWorldWww } from '@tabler/icons-react'


interface CardProps {
  id: string,
  image: string,
  title: string,
  href?: string 
}

const Card: FC<CardProps> = ({ id, image, title, href }) => {

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });

  const cardElements = document.querySelectorAll('.card-template');
  cardElements.forEach((element) => {
    element.classList.add('hidden'); 
    observer.observe(element);
  });

  return () => {
    cardElements.forEach((element) => observer.unobserve(element));
  };
}, []);

  return (
    <div id={id} className="card-template hidden">
      <div className="card-template-wrapper">
        <img className="card-image" src={image} />
          <p className="card-title">{title}</p>
        <div className="text-title-container">
          <p className="card-text">In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. </p>
        </div>
        <div className="card-buttons-container">
          <a className="website">
            <IconWorldWww/>
          </a>
          <a className="github" href={href}>
            <IconBrandGithubFilled/>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Card