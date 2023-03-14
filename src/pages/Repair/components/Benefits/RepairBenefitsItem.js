import React from 'react'

const RepairBenefitsItem = ({ title, subtitle = null, text, imageSrc = null, isImage = null }) => {
  return (
    <div className="repair-benefits__item">
      <div className="repair-benefits__title">
        {isImage ? <img src={imageSrc} alt={title} /> : <div>{title} <span>{subtitle}</span></div>}
      </div>
      <p className="repair-benefits__text">{text}</p>
    </div>
  )
}

export default RepairBenefitsItem