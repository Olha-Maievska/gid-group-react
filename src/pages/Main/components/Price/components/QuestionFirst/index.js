import { useDispatch, useSelector } from 'react-redux'
import { getProjectSize } from '@store/price/price-slice'

const sizes = [
  'from 50 to 80 m2',
  'from 80 to 120 m2',
  'more than 120 m2',
]

const QuestionFirst = () => {
  const projectSize = useSelector(state => state.price.projectSize)
  const dispatch = useDispatch()

  function handleSize (size)  {
    dispatch(getProjectSize(size))
  }

  return (
    <div className="question-one__inner">
      <h2 className="question__title">
        <span>Question 1:</span> What is the room size of your project?
      </h2>

      <div className="question-one__items question__flex">
        {sizes.map((size) => (
          <div
            className={`question-one__item ${projectSize === size ? 'active' : ''}`}
            key={size}
            onClick={() => handleSize(size)}
          >
            <svg className="question__arrow-top" width="340" height="24" viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM339.061 13.0606C339.646 12.4748 339.646 11.5251 339.061 10.9393L329.515 1.39337C328.929 0.807583 327.979 0.807583 327.393 1.39337C326.808 1.97916 326.808 2.9289 327.393 3.51469L335.879 12L327.393 20.4853C326.808 21.071 326.808 22.0208 327.393 22.6066C327.979 23.1924 328.929 23.1924 329.515 22.6066L339.061 13.0606ZM2 13.5L338 13.5L338 10.5L2 10.5L2 13.5Z" fill="#4F4F4F"/>
            </svg>
            <svg className="question__arrow-right" width="24" height="292" viewBox="0 0 24 292" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM10.9394 291.061C11.5251 291.646 12.4749 291.646 13.0607 291.061L22.6066 281.515C23.1924 280.929 23.1924 279.979 22.6066 279.393C22.0208 278.808 21.0711 278.808 20.4853 279.393L12 287.879L3.51473 279.393C2.92894 278.808 1.9792 278.808 1.39341 279.393C0.807624 279.979 0.807624 280.929 1.39341 281.515L10.9394 291.061ZM10.5 2L10.5 290L13.5 290L13.5 2L10.5 2Z" fill="#4F4F4F"/>
            </svg>

            <div className="question-one__text">
              {size}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionFirst
