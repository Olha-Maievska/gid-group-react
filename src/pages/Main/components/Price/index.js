import { useDispatch, useSelector } from 'react-redux'
import priceImg from './images/price-bonus.png'
import QuestionsPrice from './components/QuestionsPrice'
import { openModal, closeModal } from '@store/modal/modal-slice' 
import Modal from '@components/UI/Modal'
import { resetStatePrice } from '@store/price/price-slice'

import './price.scss'

const Price = () => {
  const { modal } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  if (modal) {
    document.querySelector('body').style.overflow = 'hidden'
  }

  function showPriceModal() {
    dispatch(openModal({name: 'price'}))
  }

  function hidePriceModal() {
    dispatch(closeModal())
    dispatch(resetStatePrice())
  }

  return (
    <section className="price">
      <h2 className="title">PROJECT COST</h2>
      <div className="container">
        <div className="price__inner">
          <div className="price__content">
            <h4 className="price__content-title">
                Find out the cost of a design project by answering 3 questions
            </h4>
            <p className="price__content-text">
                Take a short test, find out the price, get advice on your future project
            </p>
            <button className="price__content-btn" onClick={showPriceModal}>Find out the cost</button>
          </div>
          <div className="price__bonus">
            <img className="price__bonus-img" src={priceImg} alt="bonus" />
            <ul className="price__bonus-list">Bonuses:
              <li className="price__bonus-item">
                checklists for 5 mistakes in construction
              </li>
              <li className="price__bonus-item">
                5 interior design trends for 2024
              </li>
            </ul>
          </div>
        </div>
      </div>

      {(modal === 'price') && (
        <Modal>
          <QuestionsPrice fn={hidePriceModal} />
        </Modal>
      )}
    </section>
  )
}

export default Price