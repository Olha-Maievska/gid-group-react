import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_URL_CATALOG } from '../../../config'
import { onSubmit } from '@utils/formUtils'
import Loader from '../../Loader'

import './catalogForm.scss'

const CatalogForm = () => {
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
  } = useForm({ mode: 'onBlur' })
  const params = {setLoading, setError, setData, reset}

  return (
    <form onSubmit={handleSubmit(() => onSubmit(data, API_URL_CATALOG, params))}>
      <div className="form__error">
        {errors?.email && <p>{errors?.email.message || 'Error'}</p>}
      </div>
      <input
        className="catalog__input"
        placeholder="Введите ваш E-mail"
        type="email"
        {...register('email', {
          required: 'Заполните поле!',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Некоректный email'
          },
        })}
      />
      <div className="form__error">
        {errors?.checkbox && <p>{errors?.checkbox.message || 'Error'}</p>}
      </div>
      <div className="catalog__agree">
        <input
          className="catalog__checkbox"
          type="checkbox"
          {...register('checkbox', {
          required: 'Соглашение обязательно!',
          })}
        />
        <label className="catalog__label">Я согласен на <span>обработку персональных данных</span> </label>
      </div>
      <div style={{height: '20px', marginTop: '15px'}}>
        {loading && <Loader />}
        {data && <div style={{textAlign: 'center'}}>Спасибо! Ожидайте каталог в течении часа.</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Что-то пошло не так. Попробуйте еще раз!</div>}
      </div>
      <button className="catalog__btn" type="submit">Получить каталог</button>
    </form>
  )
}

export default CatalogForm