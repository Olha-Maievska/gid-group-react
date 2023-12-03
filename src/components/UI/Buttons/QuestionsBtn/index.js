import './questionsBtn.scss'

const QuestionsBtn = ({text = '', style = null, fn = null}) => {
  return (
    <button className="question__btn" style={style} onClick={fn}>{ text }</button>
  )
}

export default QuestionsBtn
