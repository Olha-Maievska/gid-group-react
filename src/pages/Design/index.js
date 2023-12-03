import RepairBenefits from '@repair/Benefits'
import Price from '@main/Price'
import RepairWorks from '@repair/Works'
import RepairReviews from '@repair/Reviews'
import RepairTeam from '@repair/Team'
import RepairBlog from '@repair/Blog'
import Target from '@main/Target'
import DesignFor from './components/DegsignFor'
import DesignWork from './components/DesignWork'
import DesignBenefits from './components/DesignBenefits'
import Catalog from '@main/Catalog'
import ProjectsRequest from '../Progects/components/Request'
import { designBenefits } from '@data/designData.js'

import './design.scss'

const Design = () => {
  return (
    <main className="design">
      <div className="design__img">
        <div className="design__link">3D design</div>
      </div>

      <RepairBenefits data={designBenefits} />
      <Price />
      <RepairWorks />
      <DesignFor />
      <Target />
      <DesignWork />
      <DesignBenefits />
      <RepairReviews />
      <RepairTeam />
      <RepairBlog />
      <Catalog title="NOT READY TO ORDER REPAIRS YET?" />
      
      <div className="container">
        <ProjectsRequest />
      </div>
  </main>
  )
}

export default Design