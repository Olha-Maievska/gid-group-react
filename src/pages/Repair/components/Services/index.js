import React from 'react'

import './repairServices.scss'
import RepairServicesList from './ServicesList'

const RepairServices = () => {
  return (
    <div className="repair__services">
      <h2 className="title">ОСНОВНЫЕ УСЛУГИ</h2>
      <div className="container">
        <RepairServicesList />
      </div>
  </div>
  )
}

export default RepairServices