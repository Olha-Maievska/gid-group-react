import FooterLink from './FooterLink'
import { companyList, projectsList } from '../data'

const FooterMenu = () => {
  return (
    <div className="footer__menu">
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Company gid</h4>
        {companyList.map(company =>
          <FooterLink key={company.title} {...company} />
        )}
      </div>
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Projects</h4>
        {projectsList.map(project =>
          <FooterLink key={project.title} {...project} />
        )}
      </div>
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Contacts</h4>
        <a className="footer__menu-link" href="tel:380977596455">+380 (97) 759 64 55</a>
        <a className="footer__menu-link" href="mailto:info@gid.pro">gid-group@gmail.com</a>
      </div>
  </div>
  )
}

export default FooterMenu