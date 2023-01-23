import axios from "axios"

export const sendForm = (url, postBody) => {
  return axios.post(url, postBody)
}