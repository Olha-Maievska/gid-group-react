import {designForData} from '@data/designData'
import DesignForItem from './DesignForItem'

import './designFor.scss'

const DesignFor = () => {
  return (
  <div className="design-for">
    <h2 className="title">ДЛЯ КОГО ЭТО</h2>
    <div className="container">
      <div className="design-for__text">
        Мы делаем дизайн интерьеров для людей, которые хотят доверить нам весь процесс: дизайн-проект, ремонт, закупку материалов и мебели.
      </div>
      <div className="design-for__inner">
        {designForData.map(item =>
          <DesignForItem key={item.id} {...item} />
        )}
      </div>
    </div>
  </div>
  )
}

export default DesignFor