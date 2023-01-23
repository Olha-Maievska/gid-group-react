import RepairContentItem from './RepairContentItem'

const RepairServicesItem = ({src, title, items, id}) => {
  return (
    <div className="repair-services__item">
      <img className="repair-services__img" src={src} alt="Услуги" />
      <h4 className="repair-services__title">Тариф <span>{title}</span> </h4>
      <ul className="repair-services__content">
        {items.map(item =>
          <RepairContentItem key={id} text={item.text} />
        )}
      </ul>
    </div>
  )
}

export default RepairServicesItem