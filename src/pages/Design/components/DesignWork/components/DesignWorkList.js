import DesignWorkItem from './DesignWorkItem'
import { designWorkData } from '../data'

const DesignWorkList = () => {
  return (
    <div className="design-work__inner">
      {designWorkData.map(work =>
        <DesignWorkItem key={work.id} {...work} />
      )}
    </div>
  )
}

export default DesignWorkList
