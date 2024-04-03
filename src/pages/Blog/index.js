import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadBlog } from '@store/blog/blog-slice'
import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogItem from './components/BlogItem'
import Error from '@components/Error'
import { LoaderBigger } from '@components/Loader'

import './blogPage.scss'

const Blog = () => {
  const dispatch = useDispatch()
  const { articles, isLoading, isError } = useSelector(({ blog }) => blog)

  useEffect(() => {
    dispatch(loadBlog())
  }, [dispatch])

  if (isLoading) return <LoaderBigger />

  if (isError) return <Error />


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
            {articles.map(article =>
              <BlogItem key={article.blogId} article={article} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog