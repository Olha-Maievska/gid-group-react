import DesignWorkList from './components/DesignWorkList'

import './designWork.scss'

const DesignWork = () => {
  return (
    <div className="design-work">
      <h2 className="title">HOW WE ARE WORKING</h2>
      <div className="container">
        <DesignWorkList/>
      </div>
    </div>
  )
}

export default DesignWork