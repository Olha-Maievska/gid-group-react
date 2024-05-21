import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit, handleNumber } from '@utils/formUtils'
import CheckboxLabel from '@main/Catalog/components/CatalogForm/CheckboxLabel'
import { config } from '@core/config'
import { LoaderSmall } from '@components/Loader'

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
    clearErrors
  } = useForm({ mode: 'onTouched' })
  const name = register("name", { required: true });
  const phone = register("phone", { required: true });
  const square = register("square", { required: true });
  const agreement = register("agreement", { required: true });
  const message = register("message");

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
            {...name}
            onChange={(e) => {
              name.onChange(e);
              clearErrors("name");
            }}
          />
          <div className="form__error">
            {errors.name?.type === 'required' && 'Fill in the field!'}
          </div>

          <label className="contacts-form__label" htmlFor="phone">Phone number</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="Please enter your phone number"
            {...phone}
            onChange={(e) => {
              e.target.value = handleNumber(e.target.value)
              phone.onChange(e);
              clearErrors("phone");
            }}
          />
          <div className="form__error">
            {errors.phone?.type === 'required' && 'Phone number is required!'}
          </div>

          <label className="contacts-form__label" htmlFor="square">Object area</label>
          <input
            className="contacts-form__input"
            type="text"
            placeholder="m2"
            {...square}
            onChange={(e) => {
              e.target.value = handleNumber(e.target.value)
              square.onChange(e);
              clearErrors("square");
            }}
          />
          <div className="form__error">
            {errors.square?.type === 'required' && 'Fill in the field!'}
          </div>
        </div>

        <div className="contacts-form__message">
          <label className="contacts-form__label" htmlFor="message">Comment</label>
          <textarea
            className="contacts-form__textarea"
            placeholder="Enter text"
            {...message}
            onChange={(e) => {
              message.onChange(e);
            }}
          ></textarea>

          <div className="agreement">
            <input
              className="checkbox"
              type="checkbox"
              {...register('agreement', {
              required: 'Agreement is mandatory!',
              })}
              {...agreement}
              onChange={(e) => {
                agreement.onChange(e);
                clearErrors("agreement");
              }}
            />
            <CheckboxLabel />
            <div className="form__error">
              {errors.agreement?.type === 'required' && 'Agreement is mandatory!'}
            </div>
          </div>

          <div style={{height: '15px', marginTop: '5px'}}>
            {loading && <LoaderSmall />}
            {data && <div style={{textAlign: 'center'}}>Thank you! Wait a call within an hour.</div>}
            {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
          </div>
          <button className="contacts-form__btn" type="submit">Send</button>
        </div>

      </form>
    </div>
  )
}

export default ContactsForm