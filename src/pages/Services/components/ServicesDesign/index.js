import { servicesDesignData } from '@data/servicesData'
import './servicesDesign.scss'
import ServicesDesignItem from './ServicesDesignItem'

const ServicesDesign = () => {
  return (
    <div className="services-design">
      <div className="services-design__inner">
        {
          servicesDesignData.map(item =>
            <ServicesDesignItem key={item.id} {...item} />
          )
        }
      </div>
    </div>
  )
}

export default ServicesDesign