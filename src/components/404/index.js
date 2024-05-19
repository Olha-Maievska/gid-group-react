import { useNavigate } from 'react-router-dom'
import './pageNotFound.scss'

const PageNotFound = () => {
  const navigate = useNavigate()

  function toHomePage() {
    navigate('/')
  }

  return (
    <div className='pageEror'>
      <h1>
        Error 404. Page not found
      </h1>
      <button className='pageEror__btn' onClick={toHomePage}>Home page</button>
    </div>
  )
}

export default PageNotFound
