import approach from '../images/approach.jpg'

const Approach = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__approach">
        <h3 className="title__page">An approach</h3>
        <p className="team-about__text">
          Everyday practice shows that the beginning of daily work on forming a position does not give us any choice but to determine the directions of progressive development! We are forced to start from what is constant
        </p>
      </div>
      <div className="team-about__approach-img">
        <img src={approach} alt="An approach" />
      </div>
    </div>
  )
}

export default Approach