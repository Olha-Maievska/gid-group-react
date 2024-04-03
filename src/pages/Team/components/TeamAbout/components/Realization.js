import realization1 from '../images/team-about3.jpg'
import realization2 from '../images/team-about4.jpg'
import reality from '../images/team-about6.jpg'

const Realization = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__imgs">
        <div className="team-about__img--big">
          <img src={realization1} alt="Implementation" />
        </div>
        <div className="team-about__img--big">
          <img src={reality} alt="Implementation" />
        </div>
      </div>
      <div className="team-about__realization">
        <div>
          <h3 className="title__page">Implementation</h3>
          <p className="team-about__text">
            Everyday practice shows that the beginning of daily work on forming a position does not give us any choice but to determine the directions of progressive development! We are forced to start from what is constant
          </p>
           <div className="team-about__img">
            <img src={realization2} alt="Implementation" />
          </div>
        </div>
        <div className="team-about__reality">
          <h3 className="title__page">Reality</h3>
          <p className="team-about__text">
            We are forced to proceed from the fact that constant information and propaganda support of our activities requires us to analyze the strengthening of moral values. Only the actions of opposition representatives were objectively reviewed by the relevant authorities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Realization