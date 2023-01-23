import React from 'react'

const RepairStagesItem = ({title, text}) => {
  return (
    <div className="repair-stages__item">
      <div className="repair-stages__title">{title}</div>
      <p className="repair-stages__text">{text}</p>
    </div>
  )
}

export default RepairStagesItem