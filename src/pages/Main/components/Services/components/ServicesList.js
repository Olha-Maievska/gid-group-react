import { servicesData } from '../data'
import ServicesItem from './ServicesItem'

const ServicesList = () => {
  return (
    <div className="services__inner">
      {servicesData.map(item => 
        <ServicesItem key={item.id} {...item} />
      )}
    </div>
  )
}

export default ServicesList