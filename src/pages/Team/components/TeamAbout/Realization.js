import realization1 from './images/team-about3.jpg'
import realization2 from './images/team-about4.jpg'
import reality from './images/team-about6.jpg'

const Realization = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__imgs">
        <div className="team-about__img--big">
          <img src={realization1} alt="Реализация" />
        </div>
        <div className="team-about__img--big">
          <img src={reality} alt="Реализация" />
        </div>
      </div>
      <div className="team-about__realization">
        <div>
          <h3 className="title__page">Реализация</h3>
          <p className="team-about__text">
            Повседневная практика показывает, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения направлений прогрессивного развития! Мы вынуждены отталкиваться от того, что постоянное
          </p>
           <div className="team-about__img">
            <img src={realization2} alt="Реализация" />
          </div>
        </div>
        <div className="team-about__reality">
          <h3 className="title__page">Реальность</h3>
          <p className="team-about__text">
              Мы вынуждены отталкиваться от того, что постоянноеинформационно- пропагандистское обеспечение нашей деятельности требует от нас анализа укрепления моральных ценностей. Лишь действия представителей оппозиции объективно рассмотрены соответствующими инстанциями.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Realization