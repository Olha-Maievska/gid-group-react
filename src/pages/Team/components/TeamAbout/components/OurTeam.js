import ourTeam1 from '../images/team-about1.jpg'
import ourTeam2 from '../images/team-about2.jpg'

const OurTeam = () => {
  return (
    <div className="team-about__item">
      <div className="team-about__command">
        <h3 className="title__page">Our team</h3>
        <p className="team-about__command-text">
          Here is a striking example of modern trends - the basic vector of development clearly defines each participant as capable of making their own decisions regarding the withdrawal of current assets. Taking into account the success rates, the high-tech concept of social order leaves no chance for experiments that are amazing in their scale and grandeur!
        </p>
        <div className="team-about__img">
          <img src={ourTeam1} alt="Our team" />
        </div>
      </div>
      <div className="team-about__command-img">
        <img src={ourTeam2} alt="Our team" />
      </div>
    </div>
  )
}

export default OurTeam