import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import RepairReviewsItem from './components/RepairReviewsItem'
import { NextArrow, PrevArrow } from '@ui/Arrows'
import Dots from '@components/UI/Dots'
import { loadReviews } from '@store/reviews/reviews-slice'
import Error from '@components/Error'
import { LoaderSmall } from '@components/Loader'

import './repairReviews.scss'

const RepairReviews = () => {
  const [index, setIndex] = useState(0)
  const { reviews, isError, isLoading} = useSelector(({reviews}) => reviews)
  const dispatch = useDispatch()

  function moveDot(i) {
    setIndex(i)
  }

  function prevReviews() {
    if (index === 0) {
      setIndex(reviews.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  
  function nextReviews() {
    if (index === reviews.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch])

  if (isLoading) return <LoaderSmall />
  
  if (isError) return <Error />

  return (
    <div className="repair-review">
      <h2 className="title">REVIEWS FROM OUR CLIENTS</h2>
      <div className="container">
        <div className="repair-review__inner">
          {reviews.map((item, i) =>
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

        <Dots index={index} moveDot={moveDot} data={reviews}/>
      </div>
    </div>
  )
}

export default RepairReviews
