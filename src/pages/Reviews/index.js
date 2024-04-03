import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ReviewsItem from './components/ReviewsItem'

import './reviews.scss'

const Reviews = () => {
  const navigate = useNavigate()
  const { review } = useSelector(({reviews}) => reviews)

  const handleClickBack = () => {
    navigate(-1)
  }

  if (!review.id) return
  
  return (
    <section className="reviews">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src={`/reviews/${review.id}`} title="Review" />
        </div>
      </div>

      <div className="container-fluid">
        <h3 className="title__page">Reviews from our clients</h3>

        <ReviewsItem {...review} />

        <button className="reviews__btn" onClick={handleClickBack}>Back</button>
      </div>
    </section>
  )
}

export default Reviews