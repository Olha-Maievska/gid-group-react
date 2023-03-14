import ReviewsClient from '../../../Reviews/components/ReviewsClient'
import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

const RepairReviewsItem = (item) => {
  const navigate = useNavigate()

  const { className, style, text, apartment, id } = item
  return (
    <div className={className}>
      <div className="repair-review__content">
        <ReviewsClient {...item} />
        <p className="repair-review__text">{text.slice(0, 280)}...</p>
        <button
          className="repair-review__btn"
          onClick={() => openPage(navigate(`/reviews/${id}`))}
        >
          Читать полностью
        </button>
      </div>

      <div className="repair-review__images">
        <img src={apartment} alt={style} />
      </div>
    </div>
  )
}

export default RepairReviewsItem