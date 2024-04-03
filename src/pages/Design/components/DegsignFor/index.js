import DesignForList from './components/DesignForList'

import './designFor.scss'

const DesignFor = () => {
  return (
  <div className="design-for">
    <h2 className="title">FOR WHO IS THIS ?</h2>
    <div className="container">
      <div className="design-for__text">
        We do interior design for people who want to entrust us with the entire process: design project, renovation, purchase of materials and furniture.
      </div>
      <DesignForList />
    </div>
  </div>
  )
}

export default DesignFor