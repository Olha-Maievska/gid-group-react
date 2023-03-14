import {designWorkData} from '@data/designData'
import DesignWorkItem from './DesignWorkItem'

import './designWork.scss'

const DesignWork = () => {
  return (
    <div className="design-work">
      <h2 className="title">КАК МЫ РАБОТАЕМ</h2>
      <div className="container">
        <div className="design-work__inner">
          {designWorkData.map(work =>
            <DesignWorkItem key={work.id} {...work} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DesignWork