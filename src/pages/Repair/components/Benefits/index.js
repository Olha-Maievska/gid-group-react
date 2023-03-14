import RepairBenefitsItem from './RepairBenefitsItem'
import './repairBenefits.scss'

const RepairBenefits = ({data}) => {
  return (
    <div className="repair-benefits__inner">
      {data.map(item =>
        <RepairBenefitsItem key={item.title} {...item}/>
      )}
      </div>
  )
}

export default RepairBenefits