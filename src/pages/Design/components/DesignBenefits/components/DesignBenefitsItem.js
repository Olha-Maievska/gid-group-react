const DesignBenefitsItem = ({img, title}) => {
  return (
    <div className="design-benefits__item">
      <div className="design-benefits__img">
        <img src={img} alt={title} />
      </div>
      <div className="design-benefits__title">{title}</div>
    </div>
  )
}

export default DesignBenefitsItem