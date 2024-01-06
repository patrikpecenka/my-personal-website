//import { useImages } from 'hooks/useImages'
//import { IconCaretDown } from '@tabler/icons-react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import data from "../constants/projects.json"

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  //const { images } = useImages()

  const main = useRef<any>(null)
  const [isDelayed, setIsDelayed] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDelayed(true);
    }, 200);

    return () => clearTimeout(timeOut)
  }, []);

  let mm = gsap.matchMedia()

  useGSAP(() => {
    if (!isDelayed) {
      return
    }
    //desktop setup
    mm.add("(min-width: 768px)", () => {
      gsap.from(".card",
      {
        scale: 0.3,
        opacity: 0,
        y: 200,
        stagger: {
          amount: 1,
          from: "start"
        },
        duration: 2.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".card",
          start: "top bottom-=200",
          end: "top+=300 bottom-=200",
          id: "card",
          markers: false,
          scrub: 1,
        }
      })
    });

    //mobile setup
    mm.add("(max-width: 768px)", () => {
      gsap.from(".card",
      {
        scale: 0.3,
        opacity: 0,
        y: 200,
        stagger: {
          amount: 1,
          from: "start"
        },
        duration: 2.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".card",
          start: "top bottom-=200",
          end: "top+=500 bottom-=200",
          id: "card",
          markers: false,
          scrub: 1,
        }
      })
    });

  }, { dependencies: [isDelayed], scope: main, revertOnUpdate: true });

  return (
    <div id="projects" className="portfolio-section-wrapper" ref={main}>
      <div className="portfolio-layout-container">
        <div className="portfolio-section-title">
          <h1>My Projects</h1>
        </div>
        <div className="portfolio-grid-container" >
          {data.map((image: any) => (
            <Card
              key={uuidv4()}
              id={image.id}
              image={image.download_url}
              title={image.author}
            />
          ))}
        </div>
        {/* <div className="view-more-container"> *****  WILL BE USED LATER ON   ******
          <div className="view-more-button">
            <p className='view-more-text'>View More</p>
            <IconCaretDown/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PortfolioSection