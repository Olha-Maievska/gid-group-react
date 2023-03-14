import React from 'react'
import FooterSocialList from '@layout/Footer/FooterSocialList'
import ContactsEmail from './ContactsEmail'
import ContactsAddress from './ContactsAddress'

import './contactsDetails.scss'

const ContactsDetails = () => {
  return (
    <div>
      <h3 className="title__page">Контакты</h3>
      <div className="contacts__items">
        <ContactsEmail />
        <ContactsAddress />
        <div className="contacts__item-social">
          <div className="contacts__item-title">Мы в социальных сетях</div>
          <FooterSocialList />
        </div>
      </div>
    </div>
  )
}

export default ContactsDetails