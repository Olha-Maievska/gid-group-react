import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { handleNumber} from '@utils/formUtils'
import { useDispatch, useSelector } from 'react-redux'
import { resetStatePrice } from '@store/price/price-slice'
import { config } from '../../../core/config'
import { onSubmit } from '@utils/formUtils'
import { LoaderSmall } from '../../Loader'
import CheckboxLabel from '../CatalogForm/CheckboxLabel'

const PriceForm = () => {
  const price = useSelector(state => state.price)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' })

  const params = { setLoading, setError, setData, reset }
  const url = `${config.api.host}/sendPrice`

  const sendData = (data, url, params) => {
    onSubmit(data, url, params)
    dispatch(resetStatePrice())
  }

  return (
    <form onSubmit={handleSubmit((data) => sendData({...data, ...price}, url, params))}>

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
        {errors?.agreement && <p>{errors?.agreement.message || 'Error'}</p>}
      </div>
      <div className="agreement">
        <input
          className="checkbox"
          type="checkbox"
          {...register('agreement', {
          required: 'Agreement is mandatory!',
          })}
        />
        <CheckboxLabel />
      </div>

      <div style={{height: '18px', marginTop: '15px'}}>
        {loading && <LoaderSmall />}
        {data && <div style={{textAlign: 'center'}}>Thank you! We will contact you shortly!</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
      </div>
      
      <button className="question-four__form-btn" type="submit">Send</button>
    </form>
  )
}

export default PriceForm