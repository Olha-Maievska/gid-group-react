import RepairContentItem from './RepairContentItem'

const RepairServicesItem = ({src, title, items}) => {
  return (
    <div className="repair-services__item">
      <img className="repair-services__img" src={src} alt="Services" />
      <h4 className="repair-services__title">Rate <span>{title}</span> </h4>
      <ul className="repair-services__content">
        {items.map(item =>
          <RepairContentItem key={item.text} text={item.text} />
        )}
      </ul>
    </div>
  )
}

export default RepairServicesItem