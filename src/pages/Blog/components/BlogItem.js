import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addArticle } from '@store/blog/blog-slice'

const BlogItem = ({ article }) => {
  const { date, title, imgMain, blogId } = article
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleClick() {
    window.scrollTo(0, 0)
    navigate(`/blog/${blogId}`)
    dispatch(addArticle(article))
  }

  return (
    <div className="blog__item">
      <div className="blog__item-box">
        <div className="blog__item-img">
          <img src={imgMain} alt={title} />
          <div className="blog__item-box-data">{date}</div>
        </div>
        <button className="blog__item-box-title" onClick={handleClick}>{title}</button>
        <button className="blog__item-btn" onClick={handleClick}>Read more</button>
      </div>
    </div>
  )
}

export default BlogItem