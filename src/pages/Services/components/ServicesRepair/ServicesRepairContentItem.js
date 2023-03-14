const ServicesRepairContentItem = ({ contentTitle, contentImg}) => {
  return (
    <>
      <div className="services-repair__content-item">
        <img
          className="services-repair__img"
          src={contentImg}
          alt={contentTitle}
        />
        <div className="services-repair__title">{contentTitle}</div>
      </div>
    </>
  )
}

export default ServicesRepairContentItem