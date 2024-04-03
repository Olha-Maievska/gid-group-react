import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit, handleNumber } from '@utils/formUtils'
import CheckboxLabel from '../CatalogForm/CheckboxLabel'
import { config } from '../../../core/config'
import { LoaderSmall } from '../../Loader'


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

  const params = { setLoading, setError, setData, reset }
  const url = `${config.api.host}/sendContact`
  
  return (
    <div className="contacts-form" onSubmit={handleSubmit((data) => onSubmit(data, url, params))}>
      <h3 className="title__page">Contact us</h3>
      <form className="contacts-form__content">

        <div className="contacts-form__info">
          <label className="contacts-form__label" htmlFor="name">Name</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="Please enter your name"
            {...register('name', {
              required: 'Fill in the field!',
            })}
          />
          <div className="form__error">
            {errors?.name && <p>{errors?.name.message || 'Error'}</p>}
          </div>

          <label className="contacts-form__label" htmlFor="phone">Phone number</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="Please enter your phone number"
            {...register('phone', {
              required: 'Phone number is required!',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters'
              },
              maxLength: {
                value: 14,
                message: 'Maximum 16 characters'
              }
            })}
            onChange={event => {
              event.target.value = handleNumber(event.target.value)
            }}
          />
          <div className="form__error">
            {errors?.phone && <p>{errors?.phone.message || 'Error'}</p>}
          </div>

          <label className="contacts-form__label" htmlFor="square">Object area</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="m2"
            {...register('square', {
              required: 'Fill in the field!',
            })}
            onChange={event => {
              event.target.value = handleNumber(event.target.value)
            }}
          />
          <div className="form__error">
            {errors?.square && <p>{errors?.square.message || 'Error'}</p>}
          </div>
        </div>

        <div className="contacts-form__message">
          <label className="contacts-form__label" htmlFor="message">Comment</label>
          <textarea
            className="contacts-form__textarea"
            placeholder="Enter text"
            {...register('message')}
          ></textarea>

          <div className="agreement">
            <input
              className="checkbox"
              type="checkbox"
              {...register('agreement', {
              required: 'Agreement is mandatory!',
              })}
            />
            <CheckboxLabel />
            <div className="form__error">
              {errors?.agreement && <p>{errors?.agreement.message || 'Error'}</p>}
            </div>
          </div>

          <div style={{height: '15px', marginTop: '5px'}}>
            {loading && <LoaderSmall />}
            {data && <div style={{textAlign: 'center'}}>Thank you! We will call you back within an hour.</div>}
            {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
          </div>
          <button className="contacts-form__btn" type="submit">Send</button>
        </div>

      </form>
    </div>
  )
}

export default ContactsForm