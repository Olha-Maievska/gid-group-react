import AdvantagesList from './components/AdvantagesList'

import './advantages.scss'

const Advantages = ({data}) => {
  return (
    <section className="advantage">
      <div className="container">
        <AdvantagesList data={data} />
      </div>
  </section>
  )
}

export default Advantages