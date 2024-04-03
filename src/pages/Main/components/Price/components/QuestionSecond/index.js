import { calcStyleData } from '@calc/CalcStyles/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectStyle } from '@store/price/price-slice'

const QuestionSecond = () => {
  const projectStyle = useSelector(state => state.price.projectStyle)
  const dispatch = useDispatch()

  function handleStyle(style) {
    dispatch(getProjectStyle(style))
  }

  return (
    <div className="question-two__inner">
      <h2 className="question__title">
          <span>Question 2:</span> Which style is better for your project?
      </h2>
      <div className="question-two__items question__height">
        {calcStyleData.map((item) => {
          return (
            <div
              className={`question-two__item ${projectStyle === item.style ? 'active' : ''}`}
              key={item.id}
              onClick={() => handleStyle(item.style)}
            >
              <div className="question-two__img">
                  <img src={item.img} alt={item.style} />
              </div>
              <div className="question-two__desc">{item.style}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionSecond
