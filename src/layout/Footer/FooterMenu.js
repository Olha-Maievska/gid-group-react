import FooterLink from './FooterLink'
import { companyList, projectsList } from '@data/footerData'

const FooterMenu = () => {
  return (
    <div className="footer__menu">
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Компания gid</h4>
        {companyList.map(company =>
          <FooterLink key={company.title} {...company} />
        )}
      </div>
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Проекты</h4>
        {projectsList.map(project =>
          <FooterLink key={project.title} {...project} />
        )}
      </div>
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Услуги</h4>
        {projectsList.map(project =>
          <FooterLink key={project.title} {...project} />
        )}
      </div>
      <div className="footer__menu-item">
        <h4 className="footer__menu-title">Контакты</h4>
        <a className="footer__menu-link" href="tel:74955551505">+(7495) 555-15-05</a>
        <a className="footer__menu-link" href="mailto:info@gid.pro">info@gid.pro</a>
      </div>
  </div>
  )
}

export default FooterMenu