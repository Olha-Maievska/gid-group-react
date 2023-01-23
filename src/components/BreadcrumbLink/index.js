import { Link } from 'react-router-dom'
import './breadcrumbLink.scss'

const BreadcrumbLink = ({src, title}) => {
  return (
    <Link className="breadcrumbs__link" to={src}>{title}</Link>
  )
}

export default BreadcrumbLink