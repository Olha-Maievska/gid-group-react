import { sendForm } from '../core/api'

export const handleNumber = (value) => {
  const number = value.replace(/[^+\d]/g, '')
  return number
}

export const resetState = (setData, setError) => {
  setTimeout(() => {
    setData(false)
    setError(false)
  }, 4000)
}

export const onSubmit = (data, url, other) => {
  const { setLoading, setError, setData, reset } = other
  const id = new Date().getTime()

  setLoading(true)
  sendForm(url, {...data, id})
    .then(d => {
      setLoading(false)
      setError(false)
      setData(true)
    })
    .catch(e => {
      setLoading(false)
      setData(false)
      setError(true)
  })
  reset()
  resetState(setData, setError)
}