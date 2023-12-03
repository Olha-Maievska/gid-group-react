import { getStartProject } from '@store/price/priceActions'
import { useDispatch, useSelector } from 'react-redux'

const term = [
  { text: 'Already needed' },
  { text: 'Within a month' },
  { text: 'During the week' },
  { text: 'More than 3 months' },
]

const QuestionThird = () => {
  const startProject = useSelector(state => state.price.startProject)
  const dispatch = useDispatch()

  function handleWorkTime(time) {
    dispatch(getStartProject(time))
  }

  return (
    <div>
      <h2 className="question__title">
          <span>Question 3:</span> When do you plan to start work?
      </h2>
      <div className="question-three__items question__height">
        {term.map(({ text }, i) => (
          <div
            key={text}
            className={`question-three__item ${startProject === text ? 'active' : ''}`}
            onClick={() => handleWorkTime(text)}
          >
            {text}
          </div>
          )
        )}
      </div>
    </div>
  )
}

export default QuestionThird
