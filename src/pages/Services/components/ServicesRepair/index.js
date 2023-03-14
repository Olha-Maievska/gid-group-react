import {servicesRepairData} from '@data/servicesData'
import ServicesRepairItem from './ServicesRepairItem'

import './servicesRepair.scss'

const ServicesRepair = () => {
  return (
    <div className="services-repair">
      <div className="container-fluid">
        {servicesRepairData.map(item =>
          <ServicesRepairItem key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default ServicesRepair