const ContactsEmail = () => {
  return (
    <div className="contacts__item-email">
      <div className="contacts__item-title">
          Email:
      </div>
      <a href="mailto:Hello@gid.group">gid-group@gmail.com</a>

      <div className="contacts__item-phone">
        <div className="contacts__item-title">Phone:</div>
        <a href="tel:380977596455">+380 (97) 759 64 55</a>
        <a href="tel:380505596426">+380 (50) 559 64 26</a>
        <a href="tel:380993293725">+380 (99) 329 37 25</a>
      </div>
    </div>
  )
}

export default ContactsEmail