import { Link } from "react-router-dom"

const SliderBtn = ({className, text, src}) => {
  return (
    <Link className={className} to={src}>{text}</Link>
  )
}

export default SliderBtn