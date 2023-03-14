import { blogData } from '@data/blogData'
import RepairBlogItem from './RepairBlogItem'
import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

import './repairBlog.scss'

const RepairBlog = () => {
  const navigate = useNavigate()

  return (
    <div className="repair-blog">
      <h2 className="title">НАШ БЛОГ</h2>
      <div className="container">
        <div className="repair-blog__inner">
          {blogData.slice(0, 4).map(blog =>
            <RepairBlogItem key={blog.blogId} {...blog} />
          )}
        </div>

        <button
          className="stages__btn repair-blog__link"
          onClick={() => openPage(navigate('/blog'))}
        >
          Перейти в блог
        </button>
      </div>
    </div>
  )
}

export default RepairBlog