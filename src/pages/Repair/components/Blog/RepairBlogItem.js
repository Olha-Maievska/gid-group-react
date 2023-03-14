import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

const RepairBlogItem = ({ date, title, text1, blogId }) => {
  const navigate = useNavigate()

  return (
    <div className="repair-blog__item">
      <div className="repair-blog__date">{date}</div>
      <h3 className="repair-blog__title">{title}</h3>
      <p className="repair-blog__text">{text1.length > 86 ? text1.slice(0, 86) + '...' : text1}</p>
      <button
        className="repair-blog__btn"
        onClick={() => openPage(navigate(`/blog/${blogId}`))}
      >
        Читать полностью
      </button>
    </div>
  )
}

export default RepairBlogItem