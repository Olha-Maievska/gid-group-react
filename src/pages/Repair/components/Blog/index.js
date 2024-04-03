import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RepairBlogItem from './components/RepairBlogItem'
import { useNavigate } from 'react-router-dom'
import { openPage } from '@utils/utils'
import { loadBlog } from '@store/blog/blog-slice'
import Error from '@components/Error'
import { LoaderSmall } from '@components/Loader'

import './repairBlog.scss'

const RepairBlog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { articles, isLoading, isError } = useSelector(state => state.blog)
  
  function toBlog() {
    navigate('/blog')
  }

  useEffect(() => {
    dispatch(loadBlog())
  }, [dispatch])

  if (isLoading) return <LoaderSmall />

  if (isError) return <Error />

  return (
    <div className="repair-blog">
      <h2 className="title">OUR BLOG</h2>
      <div className="container">
        <div className="repair-blog__inner">
          {articles.slice(0, 4).map(article =>
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