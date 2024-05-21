import { useForm } from 'react-hook-form'

const CalcFormInput = ({title, valueName, registerName, fn}) => {
  const { register } = useForm({ mode: 'onChange' })

  return (
    <>
      <div className="calc-param__desc">{title}</div>
      <input
        className="calc-param__input"
        value={valueName}
        type="text"
        placeholder={registerName === 'height' ? "0 m" : '0 m2'}
        {...register(`${registerName}`, {
          required: 'Required field!'
        })}
        onChange={fn}
      />
    </>
  )
}

export default CalcFormInput
