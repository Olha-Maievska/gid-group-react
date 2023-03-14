import approach from './images/approach.jpg'

const Approach = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__approach">
        <h3 className="title__page">Подход</h3>
        <p className="team-about__text">
            Повседневная практика показывает, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения направлений прогрессивного развития! Мы вынуждены отталкиваться от того, что постоянное
        </p>
      </div>
      <div className="team-about__approach-img">
        <img src={approach} alt="Подход" />
      </div>
    </div>
  )
}

export default Approach