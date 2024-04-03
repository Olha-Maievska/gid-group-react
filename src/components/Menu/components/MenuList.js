import MenuItem from './MenuItem'
import { menuData } from '../data'

const MenuList = () => {
  return (
    <ul className="main-menu__list">
      {menuData.map(item =>
        <MenuItem
          key={item.id}
          {...item}
        />
      )}
    </ul>
  )
}

export default MenuList