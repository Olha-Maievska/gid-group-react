import ourTeam1 from './images/team-about1.jpg'
import ourTeam2 from './images/team-about2.jpg'

const OurTeam = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__command">
        <h3 className="title__page">Наша команда</h3>
        <p className="team-about__command-text">
            Вот вам яркий пример современных тенденций - базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Принимая во внимание показатели успешности, высокотехнологичная концепция
            общественного уклада не оставляет шанса для экспериментов, поражающих по своей масштабности и грандиозности!
        </p>
        <div className="team-about__img">
          <img src={ourTeam1} alt="Наша команда" />
        </div>
      </div>
      <div className="team-about__command-img">
        <img src={ourTeam2} alt="Наша команда" />
      </div>
    </div>
  )
}

export default OurTeam