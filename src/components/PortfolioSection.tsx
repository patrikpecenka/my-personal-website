import Card from './Card'
import { useImages } from 'hooks/useImages'
import { v4 as uuidv4 } from 'uuid'
//import { IconCaretDown } from '@tabler/icons-react'
import useShowComponent from 'hooks/useShowComponent'

const PortfolioSection = () => {
  const { images } = useImages()
  useShowComponent({ selector: ".portfolio-section-title" })

  return (
    <div id="projects" className="portfolio-section-wrapper">
      <div className="portfolio-layout-container">
        <div className="portfolio-section-title">
          <h1>My Projects</h1>
        </div>
        <div className="portfolio-grid-container">
          {images.map((image: any) => (
            <Card key={uuidv4()} id={image.id} image={image.download_url} title={image.author} />
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