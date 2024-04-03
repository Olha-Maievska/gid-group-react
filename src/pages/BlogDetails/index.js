import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogDetailsItem from './components/BlogDetailsItem'

import './blogDetails.scss'

const BlogDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { article } = useSelector(({ blog }) => blog)

  const handleClickBack = () => {
    navigate(-1)
  }

  if (!id) return
  
  return (
    <main className="blog-details">
      <div key={article.blogId}>
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Home" />
            <BreadcrumbLink src="/blog" title="Blog" />
            <BreadcrumbLink src={`/blog/${article.blogId}`} title={article.title}/>
          </div>
          <h3 className="title__page blog__title">Our blog</h3>
        </div>
        <BlogDetailsItem {...article} />
        <button className="blog-details__btn" onClick={handleClickBack}>Back</button>
      </div>
    </main>
  )
}

export default BlogDetails