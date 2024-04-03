import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit, handleNumber } from '@utils/formUtils'
import { config } from '../../../core/config'
import { LoaderSmall } from '../../Loader'

const ModalCallForm = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' })

  const params = { setLoading, setError, setData, reset }
  const url = `${config.api.host}/sendCall`

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, url, params))}>
      <div className="form__error">
        {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
      </div>
      <input
        className="modal-call__name"
        placeholder="Your name"
        {...register('name', {
          required: 'Fill in the field!',
          minLength: {
            value: 2,
            message: 'Minimum 2 characters'
          }
        })}
      />
      <div className="form__error">
        {errors?.phone && <p>{errors?.phone.message || 'Error'}</p>}
      </div>
      <input
        className="modal-call__phone"
        placeholder="Phone number"
        type="tel"
        {...register('phone', {
          required: 'Fill in the field!',
           minLength: {
            value: 6,
            message: 'Minimum 2 characters'
          }
        })}
        onChange={event => {
          event.target.value = handleNumber(event.target.value)
        }}

      />
      <div style={{height: '20px'}}>
        {loading && <LoaderSmall />}
        {data && <div style={{textAlign: 'center'}}>Thank you! We will contact you shortly!</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
      </div>
      <button
        className="modal-call__btn"
        type="submit"
      >
        Call me
      </button>
    </form>
  )
}

export default ModalCallForm