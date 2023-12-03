import { useParams } from 'react-router-dom'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ReviewsItem from './components/ReviewsItem'
import { reviewsData } from '@data/reviews'

import './reviews.scss'

const Reviews = () => {
  const { id } = useParams()
  
  return (
    <main className="reviews">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/reviews" title="Reviews" />
        </div>
        <h3 className="title__page">Reviews from our clients</h3>

        {reviewsData.map(item => {
          if (id === item.id) {
            return <ReviewsItem key={item.id} {...item} />
          } else return null
        })}
      </div>
    </main>
  )
}

export default Reviews