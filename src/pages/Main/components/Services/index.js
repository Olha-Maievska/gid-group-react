import ServicesList from './ServicesList'

import './services.scss'

const Services = () => {
  return (
    <section className="services">
      <h2 className="title">BASIC SERVICES</h2>
      <div className="container">
        <ServicesList />
      </div>
    </section>
  )
}

export default Services