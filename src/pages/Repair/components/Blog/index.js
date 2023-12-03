import { blogData } from '@data/blogData'
import RepairBlogItem from './RepairBlogItem'
import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

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
          {blogData.slice(0, 4).map(blog =>
            <RepairBlogItem key={blog.blogId} {...blog} />
          )}
        </div>

        <button
          className="stages__btn repair-blog__link"
          onClick={() => openPage(toBlog)}
        >
          Go to the blog
        </button>
      </div>
    </div>
  )
}

export default RepairBlog