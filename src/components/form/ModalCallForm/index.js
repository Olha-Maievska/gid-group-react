import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_URL_CALL } from '../../../config'
import Loader from '../../Loader'
import { onSubmit, handlePhone } from '@utils/formUtils'

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
  const params = {setLoading, setError, setData, reset}

  return (
    <form onSubmit={handleSubmit(() => onSubmit(data, API_URL_CALL, params))}>
      <div className="form__error">
        {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
      </div>
      <input
        className="modal-call__name"
        placeholder="Ваше имя"
        {...register('name', {
          required: 'Заполните поле!',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа'
          }
        })}
      />
      <div className="form__error">
        {errors?.phone && <p>{errors?.phone.message || 'Error'}</p>}
      </div>
      <input
        className="modal-call__phone"
        placeholder="Номер телефона"
        type="tel"
        {...register('phone', {
          required: 'Заполните поле!',
           minLength: {
            value: 6,
            message: 'Минимум 6 символов'
          },
          maxLength: {
            value: 14,
            message: 'Мaxимум 14 символов'
          }
        })}
        onChange={event => {
          event.target.value = handlePhone(event.target.value)
        }}

      />
      <div style={{height: '20px'}}>
        {loading && <Loader />}
        {data && <div style={{textAlign: 'center'}}>Спасибо! Мы скоро с Вами свяжемся!</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Что-то пошло не так. Попробуйте еще раз!</div>}
      </div>
      <button
        className="modal-call__btn"
        type="submit"
      >
        Позвонить мне
      </button>
    </form>
  )
}

export default ModalCallForm