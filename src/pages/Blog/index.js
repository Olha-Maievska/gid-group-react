import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogItem from './components/BlogItem'
import { blogData } from './data'

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
            {blogData.map(article =>
              <BlogItem key={article.blogId} article={article} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog