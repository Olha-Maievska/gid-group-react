import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogItem from './BlogItem'
import { blogData } from '@data/blogData'

import './blogPage.scss'

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/blog" title="Blog" />
        </div>
        <h3 className="title__page">Our blog</h3>
        <div className="container-fluid">
          <div className="blog__inner">
            {blogData.map(blog =>
              <BlogItem key={blog.blogId} {...blog} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog