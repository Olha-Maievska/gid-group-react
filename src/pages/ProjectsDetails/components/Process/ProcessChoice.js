import React from 'react'

const ProcessChoice = ({number, title, style}) => {
  return (
    <div className="process__choice">
      <div className="process__choice-number">{number}</div>
      <div className="process__choice-content">
        <h5 className="process__choice-title">{title}</h5>
        <div className="process__choice-subtitle">Был выбран - {style} стиль</div>
        <p className="process__choice-text">Наши дизайнеры постарались выбрать самые современные элементы дизайна и мебель в стиле проекта под запросы клиента.</p>
      </div>
    </div>
  )
}

export default ProcessChoice