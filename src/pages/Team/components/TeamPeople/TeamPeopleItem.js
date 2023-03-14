const TeamPeopleItem = ({imgBig, name, proffesion}) => {
  return (
    <div className="team-people__item">
      <img className="team-people__img" alt="" src={imgBig} />
      <div className="team-people__name">{name}</div>
      <div className="team-people__job">{proffesion}</div>
    </div>
  )
}

export default TeamPeopleItem