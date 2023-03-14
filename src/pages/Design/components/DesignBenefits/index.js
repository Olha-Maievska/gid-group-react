import { designBenefitsData } from '@data/designData'
import DesignBenefitsItem from './DesignBenefitsItem'

import './designBenefits.scss'

const designBenefits = () => {
  return (
    <div className="design-benefits">
      <h2 className="title">ЧТО ВЫ ПОЛУЧИТЕ</h2>
      <div className="container">
        <div className="design-benefits__innet">
          {designBenefitsData.map(item =>
            <DesignBenefitsItem key={item.id} {...item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default designBenefits