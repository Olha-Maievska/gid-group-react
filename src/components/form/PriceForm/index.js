import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { handleNumber} from '@utils/formUtils'
import { API_URL_PRICE } from '../../../config'
import Loader from '../../Loader'
import { sendForm } from '../../API/PostFrom'
import { resetState } from '@utils/formUtils'
import { useDispatch, useSelector } from 'react-redux'
import { resetStatePrice } from '@store/price/priceActions'

const PriceForm = () => {
  const price = useSelector(state => state.price)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const id = new Date().getTime()
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' })

  const sendData = (d, url) => {
  setLoading(true)

  sendForm(url, d)
    .then(d => {
      setError(false)
      setData(true)
      setLoading(false)
    })
    .catch(e => {
      setLoading(false)
      setData(false)
      setError(true)
    })

  dispatch(resetStatePrice)
  reset()
  resetState(setData, setError)
}
  
  return (
    <form onSubmit={handleSubmit((data) => sendData({...data, ...price, id }, API_URL_PRICE))}>

      <div className="form__error">
        {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
      </div>
      <input
        className="question-four__form-input"
        type="text"
        placeholder="Enter your name"
        {...register('name', {
          required: 'Fill in the field!',
        })}
      />
      
      <div className="form__error">
        {errors?.phone && <p>{errors?.phone.message || 'Error'}</p>}
      </div>
      <input
        className="question-four__form-input"
        placeholder="Enter phone number"
        type="text"
        {...register('phone', {
          required: 'Fill in the field!'
        })}
        onChange={event => {
          event.target.value = handleNumber(event.target.value)
        }}

      />

      <div className="form__error">
        {errors?.checkbox && <p>{errors?.checkbox.message || 'Error'}</p>}
      </div>
      <div className="agreement">
        <input
          className="checkbox"
          type="checkbox"
          {...register('checkbox', {
          required: 'Agreement is mandatory!',
          })}
        />
        <label className="label">I agree to the <span>processing of personal data</span> </label>
      </div>

      <div style={{height: '18px', marginTop: '15px'}}>
        {loading && <Loader />}
        {data && <div style={{textAlign: 'center'}}>Thank you! We will contact you shortly!</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
      </div>
      
      <button className="question-four__form-btn" type="submit">Send</button>
    </form>
  )
}

export default PriceForm