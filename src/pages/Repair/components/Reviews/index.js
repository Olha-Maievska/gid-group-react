import {  useState } from 'react'
import RepairReviewsItem from './components/RepairReviewsItem'
import { NextArrow, PrevArrow } from '@ui/Arrows'
import Dots from '@components/UI/Dots'
import { reviewsData } from '@reviews/data'

import './repairReviews.scss'

const RepairReviews = () => {
  const [index, setIndex] = useState(0)

  function moveDot(i) {
    setIndex(i)
  }

  function prevReviews() {
    if (index === 0) {
      setIndex(reviewsData.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  
  function nextReviews() {
    if (index === reviewsData.length - 1) {
      setIndex(0)
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
              className={`repair-review__item ${index === i ? 'active' : ''} `}
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
