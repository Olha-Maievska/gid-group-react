import ReviewsClient from '../../../Reviews/components/ReviewsClient'
import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

const RepairReviewsItem = (item) => {
  const navigate = useNavigate()

  function toReview() {
    navigate(`/reviews/${item.id}`)
  }

  const { className, style, text, apartment} = item
  return (
    <div className={className}>
      <div className="repair-review__content">
        <ReviewsClient {...item} />
        <p className="repair-review__text">{text.slice(0, 280)}...</p>
        <button
          className="repair-review__btn"
          onClick={() => openPage(toReview)}
        >
          Read more
        </button>
      </div>

      <div className="repair-review__images">
        <img src={apartment} alt={style} />
      </div>
    </div>
  )
}

export default RepairReviewsItem