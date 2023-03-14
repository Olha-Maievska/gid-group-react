import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import BreadcrumbLink from '@components/BreadcrumbLink'
import BlogItem from './BlogItem'
import { blogData } from '@data/blogData'

import './blogPage.scss'

const Blog = () => {
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="blog">
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/blog" title="Блог" />
          </div>
          <h3 className="title__page">Наш блог</h3>
          <div className="container-fluid">
            <div className="blog__inner">
              {blogData.map(blog =>
                <BlogItem key={blog.blogId} {...blog} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Blog