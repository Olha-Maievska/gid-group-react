import {Link} from 'react-router-dom'

const BlogItem = ({date, title, imgMain, blogId}) => {
  return (
    <div className="blog__item">
      <div className="blog__item-box">
        <div className="blog__item-img">
          <img src={imgMain} alt={title} />
          <div className="blog__item-box-data">{date}</div>
        </div>
        <Link className="blog__item-box-title" to={`/blog/${blogId}`}>{title}</Link>
        <Link className="blog__item-btn" to={`/blog/${blogId}`}>Читать полностью</Link>
      </div>
    </div>
  )
}

export default BlogItem