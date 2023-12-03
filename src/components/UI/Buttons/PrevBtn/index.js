import { useNavigate } from "react-router-dom"

import './prevBtn.scss'

const PrevBtn = ({ title }) => {
  const navigate = useNavigate();

  const prevBtnHandler = () => {
    window.scrollTo(0, -50)
    navigate(-1)
  }

  return (
    <button className="prevBtn" onClick={prevBtnHandler}>
      Back to {title}
    </button>
  )
}

export default PrevBtn