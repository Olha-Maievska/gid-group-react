import {useState} from 'react'
import { reviewsData } from '@data/reviews'
import RepairReviewsItem from './RepairReviewsItem'
import { NextArrow, PrevArrow } from '@components/Arrows'
import Dots from '@components/UI/Dots'

import './repairReviews.scss'

const RepairReviews = () => {
  const [index, setIndex] = useState(1)

  function moveDot(i) {
    setIndex(i)
  }

  function prevReviews() {
    if (index === 1) {
      setIndex(reviewsData.length)
    } else {
      setIndex(index - 1)
    }
  }
  
  function nextReviews() {
    if (index > reviewsData.length - 1) {
      setIndex(1)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="repair-review">
      <h2 className="title">REVIEWS FROM OUR CLIENTS</h2>
      <div className="container">
        <div className="repair-review__inner">
          {reviewsData.map((item, i) =>
            <RepairReviewsItem
              key={item.id}
              className={index === i + 1 ? "repair-review__item active" : "repair-review__item"}
              {...item}
            />
          )}

          <div>
            <PrevArrow fn={prevReviews} />
            <NextArrow fn={nextReviews} />
          </div>
        </div>

        <Dots index={index} moveDot={moveDot} data={reviewsData}/>
      </div>
    </div>
  )
}

export default RepairReviews
