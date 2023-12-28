import data from "../constants/skills.json"
import { FC } from "react";

interface SkillItem {
  id: number;
  alt: string;
  tooltip: string;
  svg: string;
}

const SkillSet: FC = () => {
  const skillsData: SkillItem[] = data;

  return (
    <>
      <div className="skill-container">
        {skillsData.map((item: SkillItem) => 
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