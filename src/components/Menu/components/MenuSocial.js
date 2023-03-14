import MenuSocialItem from './MenuSocialItem'
import { socialItems } from '@data/menuData'

const MenuSocial = () => {
  return (
    <ul className="main-menu__social">
      {socialItems.map(item => 
        <MenuSocialItem
          key={item.id}
          {...item}
        />
      )}
    </ul>
  )
}

export default MenuSocial