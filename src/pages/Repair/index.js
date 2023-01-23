import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'

import './repair.scss'
import RepairStages from './components/Stages'
import RepairServices from './components/Services'
import RepairWorks from './components/Works'

const Repair = () => {
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <section className="repair">
        <iframe title="Видео работы GID" width="1980px" height="940px" src="https://www.youtube.com/embed/mtfdVmiQn6A"></iframe>

        <RepairStages />
        <RepairServices />
        <RepairWorks />
      </section>

      <Footer />
    </>
  )
}

export default Repair