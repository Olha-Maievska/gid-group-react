import './closeBtn.scss'

const CloseBtn = ({ close, other = null }) => {
  return (
    <div className="close-btn" onClick={close} style={other}>&#10006;</div>
  )
}

export default CloseBtn