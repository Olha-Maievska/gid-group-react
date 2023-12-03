import { repairServices } from '@data/repair.js'
import RepairServicesItem from './ServicesItem'

const RepairServicesList = () => {
  return (
    <div className="repair-services__inner">
      {repairServices.map(item =>
        <RepairServicesItem key={item.title} {...item} />
      )}
    </div>
  )
}

export default RepairServicesList