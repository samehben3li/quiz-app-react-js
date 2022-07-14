import { useRef } from "react"
import "./start.css"

export default function Start({setUsername}) {

  const name = useRef()

  const handleClick = () => {
    name.current.value && setUsername(name.current.value)
  }

  return (
    <div className="start">
      <input placeholder="entre your username !" className="input" ref={name} />
      <button className="btn" onClick={handleClick}>Start</button>
    </div>)
}
