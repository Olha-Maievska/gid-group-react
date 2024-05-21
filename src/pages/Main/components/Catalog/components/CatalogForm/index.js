import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit } from '@utils/formUtils'
import { LoaderSmall } from '@components/Loader'
import CheckboxLabel from './CheckboxLabel'
import { config } from '@core/config'

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

  const params = { setLoading, setError, setData, reset }
  const url = `${config.api.host}/sendCatalog`

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, url, params))}>
      <div className="form__error">
        {errors?.email && <p>{errors?.email.message || 'Error'}</p>}
      </div>
      <input
        className="catalog__input"
        placeholder="Enter your E-mail"
        type="email"
        {...register('email', {
          required: 'Fill in the field!',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Incorrect email'
          },
        })}
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

      <div style={{height: '20px', marginTop: '15px'}}>
        {loading && <LoaderSmall />}
        {data && <div style={{textAlign: 'center'}}>Thank you! Expect the catalog within an hour.</div>}
        {error && <div style={{textAlign: 'center', color: 'red'}}>Something went wrong. Try again!</div>}
      </div>
      <button className="catalog__btn" type="submit">Get catalog</button>
    </form>
  )
}

export default CatalogForm