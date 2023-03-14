import React from 'react'
import { reviewsData } from '@data/reviews'

const Dots = ({index, moveDot}) => {
  return (
    <ul className="question__dots">
      {reviewsData.map((dot, i) =>
        <li
          className={index === i + 1 ? "question__dot active" : "question__dot"}
          key={dot.id}
          onClick={() => moveDot(i + 1)}
        >
        </li>
      )}
    </ul>
  )
}

export default Dots