import React from 'react'

const RepairResutItem = ({img, text}) => {
  return (
    <div className="repair-result__item">
      <div className="repair-result__wrapper-left"></div>
      <div className="repair-result__wrapper-right"></div>
        <img className="repair-result__img" src={img} alt="" />
        <p className="repair-result__text">{text}</p>
    </div>
  )
}

export default RepairResutItem