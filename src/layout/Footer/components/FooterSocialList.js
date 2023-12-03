import FooterSocialItem from './FooterSocialItem'
import { socialItems } from '@data/footerData'

const FooterSocialList = () => {
  return (
    <ul className="footer__social">
			{socialItems.map(item =>
				<FooterSocialItem key={item.id} {...item} />
			)}
    </ul>
  )
}

export default FooterSocialList