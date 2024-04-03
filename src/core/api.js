import axios from "axios"

export const sendForm = async (url, postBody) => {
  return await axios.post(url, postBody, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}