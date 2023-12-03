import { useParams } from 'react-router-dom'
import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogDetailsItem from './BlogDetailsItem'
import { blogData } from '@data/blogData'

import './blogDetails.scss'

const BlogDetails = () => {
  const { id } = useParams()
  
  return (
    <main className="blog-details">
      {blogData.map(blog => {
        const { blogId, title } = blog
        if (id === blogId) {
          return (
            <div key={blogId}>
              <div className="container">
                <div className="breadcrumbs">
                  <BreadcrumbLink src="/" title="Home" />
                  <BreadcrumbLink src="/blog" title="Blog" />
                  <BreadcrumbLink src={`/blog/${blogId}`} title={title}/>
                </div>
                <h3 className="title__page blog__title">Our blog</h3>
              </div>
              <BlogDetailsItem {...blog} />
            </div>
          )
        } else {
          return null
        }
      })}
    </main>
  )
}

export default BlogDetails