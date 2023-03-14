import React from 'react'

const DesignBenefitsItem = ({img, title}) => {
  return (
    <div className="design-benefits__item">
      <div className="design-benefits__img">
        <img src={img} alt="" />
      </div>
      <div className="design-benefits__title">{title}</div>
    </div>
  )
}

export default DesignBenefitsItem