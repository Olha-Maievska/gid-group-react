import DesignBenefitsList from './components/DesignBenefitsList'

import './designBenefits.scss'

const designBenefits = () => {
  return (
    <div className="design-benefits">
      <h2 className="title">WHAT YOU WILL GET</h2>
      <div className="container">
        <DesignBenefitsList />
      </div>
    </div>
  )
}

export default designBenefits