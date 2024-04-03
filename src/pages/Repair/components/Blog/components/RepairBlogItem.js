import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { openPage } from '@utils/utils'
import { addArticle } from '@store/blog/blog-slice'

const RepairBlogItem = ({ article }) => {
  const { date, title, text1, blogId } = article
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function toBlogItem() {
    navigate(`/blog/${blogId}`)
    dispatch(addArticle(article))
  }

  return (
    <div className="repair-blog__item">
      <div className="repair-blog__date">{date}</div>
      <h3 className="repair-blog__title">{title}</h3>
      <p className="repair-blog__text">{text1.length > 86 ? text1.slice(0, 86) + '...' : text1}</p>
      <button
        className="repair-blog__btn"
        onClick={() => openPage(toBlogItem)}
      >
        Read more
      </button>
    </div>
  )
}

export default RepairBlogItem