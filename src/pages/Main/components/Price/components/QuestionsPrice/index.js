import { useState } from 'react'
import closeImg from '../../images/close.svg'
import Dots from '@components/UI/Dots'
import QuestionsBtn from '@components/UI/Buttons/QuestionsBtn'
import QuestionFirst from '../QuestionFirst'
import QuestionSecond from '../QuestionSecond'
import QuestionThird from '../QuestionsThird'
import QuestionsFourth from '../QuestionsFourth'

import '../questionsPrice.scss'

const questionsContent = [
  {id: 1, element: <QuestionFirst />,},
  {id: 2, element: <QuestionSecond />,},
  {id: 3, element: <QuestionThird />,},
  {id: 4, element: <QuestionsFourth />,},
]

const QuestionsPrice = ({ fn }) => {
  const [index, setIndex] = useState(0)

  function moveDot(i) {
    setIndex(i)
  }

  function toPrev() {
    setIndex(prev => prev - 1)
  }

  function toNext() {
    setIndex(prev => prev + 1)
  }

  return (
    <div className="question__content" onClick={e => e.stopPropagation()}>
      <div className="question__close" onClick={fn}>
        <img src={closeImg} alt="close" />
      </div>

      {questionsContent.map((content, i) => {
        return i === index ?
          (<div key={content.id}>{content.element}</div>) :
          null
      })}
      
      <div className="question__buttons">
        {index === 0 || index === questionsContent.length - 1 ?
          <QuestionsBtn text="Back" style={{ opacity: 0 }} /> : 
          <QuestionsBtn text="Back" fn={toPrev} />
        }
        <Dots index={index} moveDot={moveDot} data={questionsContent}/>

        {index === questionsContent.length - 1 ? (
          <QuestionsBtn text="Back" style={{ opacity: 0 }} /> 
        ) : (
          <QuestionsBtn text="Next" fn={toNext} />
        )}
      </div>
    </div>
  )
}

export default QuestionsPrice
