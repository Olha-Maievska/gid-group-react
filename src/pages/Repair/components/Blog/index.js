import RepairBlogItem from './components/RepairBlogItem'
import { useNavigate } from 'react-router-dom'
import { openPage } from '@utils/utils'
import { blogData } from '@blog/data'

import './repairBlog.scss'

const RepairBlog = () => {
  const navigate = useNavigate()

  function toBlog() {
    navigate('/blog')
  }

  return (
    <div className="repair-blog">
      <h2 className="title">OUR BLOG</h2>
      <div className="container">
        <div className="repair-blog__inner">
          {blogData.slice(0, 4).map(article =>
            <RepairBlogItem key={article.blogId} article={article} />
          )}
        </div>

        <button
          className="repair-blog__link"
          onClick={() => openPage(toBlog)}
        >
          Go to the blog
        </button>
      </div>
    </div>
  )
}

export default RepairBlog