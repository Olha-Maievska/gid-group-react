import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../../images/Logo.png'
import { closeModal } from '@store/modal/modal-slice'
import PriceForm from '../PriceForm'

const QuestionsFourth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function toOtherPage(path) {
    window.scrollTo(0, 0)
    document.querySelector('body').style.overflow = ''
    dispatch(closeModal())
    navigate(path)
  }
  
  return (
    <div>
      <h2 className="question__title">
          <span>Completion</span>
      </h2>

      <div className="question-four__inner question__flex">

        <div className="question-four__form">
          <p className="question-four__form-text">Fill in your contact information and we will call you</p>
          <PriceForm/>
        </div>

        <div className="question-four__items">
          <div className="question-four__item" onClick={() => toOtherPage('/projects')}>
            <div className="question-four__item-content">
              <div className="question-four__item-logo">
                <img src={Logo} alt="Git.Group" />
              </div>
            </div>
            <Link className="question-four__item-btn">
              Catalog of works
            </Link>
          </div>
          <div className="question-four__item" onClick={() => toOtherPage('/services')}>
            <div className="question-four__item-content">
              <div className="question-four__item-logo">
                <img src={Logo} alt="Git.Group" />
              </div>
            </div>
            <Link className="question-four__item-btn">
              Design selection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsFourth
