import RepairWorks from '@repair/Works'
import RepairReviews from '@repair/Reviews'
import RepairTeam from '@repair/Team'
import DesignFor from './components/DegsignFor'
import DesignWork from './components/DesignWork'
import DesignBenefits from './components/DesignBenefits'
import Advantages from '@components/Advantages'
import { benefits } from './data'

import './design.scss'

const Design = () => {
  return (
    <main className="design">
      <div className="design__img">
        <h1 className="design__title">3D design</h1>
      </div>

      <Advantages data={benefits} />
      <DesignFor />
      <RepairWorks countSlides={7} />
      <DesignWork />
      <DesignBenefits />
      <RepairReviews />
      <RepairTeam />
  </main>
  )
}

export default Design