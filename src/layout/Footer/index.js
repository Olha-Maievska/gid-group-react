import FooterSocialList from './components/FooterSocialList'
import FooterMenu from './components/FooterMenu'
import ButtonUp from '@components/UI/Buttons/ButtonUp'
import logoSmall from './images/logo-small.png'

import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ButtonUp />
        <div className="footer__inner">
          <div className="footer__logo">
              <img src={logoSmall} alt="logo" />
          </div>
          <FooterSocialList/>
        </div>
        <FooterMenu/>
        <div className="footer__copyright">
          <div className="footer__copyright-text">
            Gid.group 2024/ All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer