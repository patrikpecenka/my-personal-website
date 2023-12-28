import data from "../constants/skills.json"

const SkillSet = () => {
  return (
    <>
      <div className="skill-container">
        {data.map((item) => 
        <div key={item.id} className="skill-image-container">
          <img
            src={item.svg}
            alt={item.alt} 
            className="skill-image" 
          />
          <div className="skill-tooltip">
            <span>{item.tooltip}</span>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default SkillSet