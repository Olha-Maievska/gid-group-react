import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogDetailsItem from './BlogDetailsItem'
import { blogData } from '@data/blogData'

import './blogDetails.scss'

const BlogDetails = () => {
  const { id } = useParams()
  
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="blog-details">
        {blogData.map(blog => {
          const { blogId, title } = blog
          if (id === blogId) {
            return (
              <div key={blogId}>
                <div className="container">
                  <div className="breadcrumbs">
                    <BreadcrumbLink src="/" title="Главная" />
                    <BreadcrumbLink src="/blog" title="Блог" />
                    <BreadcrumbLink src={`/blog/${blogId}`} title={title}/>
                  </div>
                  <h3 className="title__page blog__title">Наш блог</h3>
                </div>
                <BlogDetailsItem {...blog} />
              </div>
            )
          } else {
            return null
          }
        })}
      </main>

      <Footer />
    </>
  )
}

export default BlogDetails