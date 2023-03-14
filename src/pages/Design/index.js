import {Link} from 'react-router-dom'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
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
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>
      <main className="design">
        <div className="design__img">
          <Link className="design__link" to="/design/options">3D-дизайн</Link>
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
        <Catalog title="ЕЩЕ НЕ ГОТОВЫ ЗАКАЗАТЬ РЕМОНТ?"/>
        <div className="container">
          <ProjectsRequest />
        </div>
    </main>
      <Footer />
    </>
  )
}

export default Design