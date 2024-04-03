import { designBenefitsData } from '../data'
import DesignBenefitsItem from './DesignBenefitsItem'

const DesignBenefitsList = () => {
  return (
    <div className="design-benefits__inner">
      {designBenefitsData.map(item =>
        <DesignBenefitsItem key={item.id} {...item} />
      )}
    </div>
  )
}

export default DesignBenefitsList
