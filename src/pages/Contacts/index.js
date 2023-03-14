import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ContactsDetails from './components/ContactsDetails'
import ContactsForm from '@components/form/ContactsForm'
import ContactsMap from './components/ContactsMap'
import ProjectsRequest from '../Progects/components/Request'

import './contacts.scss'

const Contacts = () => {
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="contacts">
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/contacts" title="Контакты" />
          </div>
        </div>

        <div className="container-fluid">
          <ContactsDetails />
          <ContactsForm />
        </div>
        <ContactsMap />
        <div className="container">
          <ProjectsRequest />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Contacts