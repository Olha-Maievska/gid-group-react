import { servicesDesignData } from './data'
import ServicesDesignItem from './components/ServicesDesignItem'

import './servicesDesign.scss'

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