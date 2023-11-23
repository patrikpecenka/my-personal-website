import { useState, FC } from "react"

interface SwitchButtonProps {
  onToggle: (isChecked: boolean) => void;
}

const SwitchButton: FC<SwitchButtonProps> = ({onToggle}) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleToggle = () => {
    const newState = !isChecked
    setIsChecked(newState)

    onToggle(newState)
  }
  return (
    <>
      <label className="wraper">
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