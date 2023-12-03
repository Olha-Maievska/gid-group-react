import React from 'react'
import RepairServicesList from './ServicesList'

import './repairServices.scss'

const RepairServices = () => {
  return (
    <div className="repair__services">
      <h2 className="title">BASIC SERVICES</h2>
      <div className="container">
        <RepairServicesList />
      </div>
  </div>
  )
}

export default RepairServices