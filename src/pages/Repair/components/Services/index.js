import RepairServicesList from './components/ServicesList'

import './repairServices.scss'

const RepairServices = () => {
  return (
    <section className="repair-services">
      <h2 className="title">BASIC SERVICES</h2>
      <div className="container">
        <RepairServicesList />
      </div>
  </section>
  )
}

export default RepairServices