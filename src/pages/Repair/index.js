import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import RepairBenefits from './components/Benefits'
import RepairServices from './components/Services'
import RepairWorks from './components/Works'
import Catalog from '@main/Catalog'
import RepairStages from './components/Stages'
import RepairResult from './components/Result'
import RepairTeam from './components/Team'
import RepairBlog from './components/Blog'
import RepairReviews from './components/Reviews'
import ProjectsRequest from '../Progects/components/Request'
import {repairBenefits} from '@data/repair.js'

import './repair.scss'

const Repair = () => {
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="repair">
        <iframe className="repair__video" title="Видео работы GID" src="https://www.youtube.com/embed/mtfdVmiQn6A"></iframe>

        <RepairBenefits data={repairBenefits} />
        <RepairServices />
        <RepairWorks />
        <Catalog title="ЕЩЕ НЕ ГОТОВЫ ЗАКАЗАТЬ РЕМОНТ?" />
        <RepairTeam />
        <RepairStages />
        <RepairResult />
        <RepairBlog />
        <RepairReviews />

        <div className="container">
          <ProjectsRequest />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Repair