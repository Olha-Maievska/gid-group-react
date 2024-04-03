import BreadcrumbLink from '@components/BreadcrumbLink'
import ContactsDetails from './components/ContactsDetails'
import ContactsForm from '@components/form/ContactsForm'
import ContactsMap from './components/ContactsMap'
import ProjectsRequest from '../Progects/components/Request'

import './contacts.scss'

const Contacts = () => {
  return (
    <main className="contacts">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/contacts" title="Contacts" />
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
  )
}

export default Contacts