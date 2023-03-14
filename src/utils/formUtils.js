import { sendForm } from '@components/API/PostFrom'

export const handlePhone = (value) => {
  const phoneNumber = value.replace(/[^+\d]/g, '')
  return phoneNumber
}

const resetState = (setData, setError) => {
  setTimeout(() => {
    setData(false)
    setError(false)
  }, 4000)
}

export const onSubmit = (data, url, other) => {
  const {setLoading, setError, setData, reset} = other
  setLoading(true)
  sendForm(url, data)
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