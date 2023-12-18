import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeModal } from '@store/modal/modal-slice'

const CheckboxLabel = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function closePriceModal() {
    navigate('/personalData')
    window.scrollTo(0, 0)
    document.querySelector('body').style.overflow = ''
    dispatch(closeModal())
  }

  return (
    <label className="label">
      I agree to the <span onClick={closePriceModal}>processing of personal data</span>
    </label>
  )
}

export default CheckboxLabel
