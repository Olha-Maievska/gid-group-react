import phone from './images/phone.svg'

import './callBtn.scss'

const CallBtn = ({fn}) => {
  return (
    <button className="phone" onClick={fn}>
      <img src={phone} alt="phone" />
    </button>
  )
}

export default CallBtn