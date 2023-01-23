const AdvantagesItem = ({number, title, text}) => {
  return (
    <li className="advantage__item">
      <div className="advantage__item-number">{number}</div>
      <div className="advantage__item-title">{title}</div>
      <p className="advantage__item-text">{text}</p>
    </li>
  )
}

export default AdvantagesItem