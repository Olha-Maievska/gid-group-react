import { useState } from 'react'
import ServicesRepairContentItem from './ServicesRepairContentItem'

const ServicesRepairItem = ({ title, content }) => {
  const [active, setActive] = useState(false)

  function handleClickAccord() {
    setActive(!active)
  }

  return (
    <div className={active ?
      'services-repair__item active' :
      'services-repair__item'}
    >
      <button
        className="services-repair__btn"
        onClick={handleClickAccord}
      >
        {title}
      </button>
      <div
        className="services-repair__wrapper"
        style={{display: active ? 'block' : 'none'}}
      >
        <div className="services-repair__content">
          {content.map(data =>
            <ServicesRepairContentItem
              key={data.id}
              {...data}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ServicesRepairItem