import { useState, FC } from "react"

interface SwitchButtonProps {
  onToggle: (isChecked: boolean) => void;
}

const SwitchButton: FC<SwitchButtonProps> = ({onToggle}) => {
  const storedValue = localStorage.getItem("isChecked");
  const [isChecked, setIsChecked] = useState(storedValue ? JSON.parse(storedValue) : false);


  const handleToggle = () => {
    const newState = !isChecked
    setIsChecked(newState)
    localStorage.setItem("isChecked", JSON.stringify(newState))

    onToggle(newState)
  }

  return (
    <>
      <label className="wraper switch-button">
        <div className="switch-wrap">
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="switch"></div>
        </div>
      </label>
    </>

  )
}

export default SwitchButton