import {useParams} from 'react-router-dom'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ReviewsItem from './components/ReviewsItem'
import { reviewsData } from '@data/reviews'

import './reviews.scss'

const Reviews = () => {
  const {id} = useParams()
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="reviews">
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/reviews" title="Отзывы" />
          </div>
          <h3 className="title__page">Отзывы наших клиентов</h3>

          {reviewsData.map(item => {
            if (id === item.id) {
              return <ReviewsItem key={item.id} {...item} />
            } else return null
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Reviews