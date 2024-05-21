import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit, handleNumber } from '@utils/formUtils'
import { config } from '../../../../core/config'
import { LoaderSmall } from '@components/Loader'

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
    clearErrors
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
            message: 'Minimum 6 characters'
          }
        })}
        onChange={event => {
          event.target.value = handleNumber(event.target.value)
          clearErrors('phone')
        }}

      />
      <div className='modal-call__messages'>
        {loading && <LoaderSmall />}
        {data && <div>Thank you! We will contact you shortly!</div>}
        {error && <span>Something went wrong. Try again!</span>}
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