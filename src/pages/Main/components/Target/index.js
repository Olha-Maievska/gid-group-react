import TargetList from './components/TargetList'

import './target.scss'

const Target = () => {
  return (
    <section className="target">
      <div className="target__inner">
        <h4 className="target__title">WE ARE WHERE:</h4>
        <TargetList />
      </div>
    </section>
  )
}

export default Target