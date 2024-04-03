const ProcessMessage = ({darkFone = null, author, text}) => {
  return (
    <div className={`process__message ${darkFone}`}>
      <div className="process__message-author">{author}</div>
      <p className="process__message-text">{text}</p>
    </div>
  )
}

export default ProcessMessage