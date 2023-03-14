import TargetList from './TargetList'

import './target.scss'


const Target = () => {
  return (
    <section className="target">
      <div className="target__inner">
        <h4 className="target__title">МЫ ТАМ, ГДЕ:</h4>
        <TargetList />
      </div>
    </section>
  )
}

export default Target