import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit, handlePhone } from '@utils/formUtils'
import { API_URL_CONTACT } from '../../../config'
import Loader from '../../Loader'

import './contactsForm.scss'

const ContactsForm = () => {
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
    <div className="contacts-form" onSubmit={handleSubmit((d) => onSubmit(d, API_URL_CONTACT, params))}>
      <h3 className="title__page">Свяжитесь с нами</h3>
      <form className="contacts-form__content">
        <div className="contacts-form__info">
          <label className="contacts-form__label" for="name">Имя</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="Укажите ваше имя"
            {...register('name', {
              required: 'Заполните поле!',
            })}
          />
          <div className="form__error">
            {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
          </div>

          <label className="contacts-form__label" for="phone">Номер телефона</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="Укажите ваш номер телефона"
            {...register('phone', {
              required: 'Номер телефона обязательный!',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              },
              maxLength: {
                value: 14,
                message: 'Мaxимум 16 символов'
              }
            })}
            onChange={event => {
              event.target.value = handlePhone(event.target.value)
            }}
          />
          <div className="form__error">
            {errors?.phone && <p>{errors?.phone.message || 'Error'}</p>}
          </div>

          <label className="contacts-form__label" for="square">Площадь объекта</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="м2"
            {...register('square', {
              required: 'Заполните поле!',
            })}
            onChange={event => {
              event.target.value = handlePhone(event.target.value)
            }}
          />
          <div className="form__error">
            {errors?.square && <p>{errors?.square.message || 'Error'}</p>}
          </div>
        </div>

        <div className="contacts-form__message">
          <label className="contacts-form__label" for="message">Комментарий</label>
          <textarea
            className="contacts-form__textarea"
            placeholder="Введите текст"
            {...register('message')}
          ></textarea>

          <div className="contacts-form__agree">
            <input
              className="contacts-form__checkbox"
              type="checkbox"
              {...register('checkbox', {
              required: 'Соглашение обязательно!',
              })}
            />
            <label className="contacts-form__checkbox__label">Я согласен на <span>обработку персональных данных</span> </label>
            <div className="form__error">
              {errors?.checkbox && <p>{errors?.checkbox.message || 'Error'}</p>}
            </div>
          </div>
          <div style={{height: '15px', marginTop: '5px'}}>
            {loading && <Loader />}
            {data && <div style={{textAlign: 'center'}}>Спасибо! Мы перезвоним в течении часа.</div>}
            {error && <div style={{textAlign: 'center', color: 'red'}}>Что-то пошло не так. Попробуйте еще раз!</div>}
          </div>
          <button className="contacts-form__btn" type="submit">Отправить</button>
        </div>

      </form>
    </div>
  )
}

export default ContactsForm