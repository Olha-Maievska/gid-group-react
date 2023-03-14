const RepairTeamItem = ({imgSmall, name, proffesion, description}) => {
  return (
    <div className="repair-team__item">
      <div className="repair-team__img">
        <img src={imgSmall} alt={name} />
      </div>
      <div className="repair-team__content">
        <div className="repair-team__name">{name}</div>
        <div className="repair-team__profession">{proffesion}</div>
        <p className="repair-team__text">{description}</p>
      </div>
    </div>
  )
}

export default RepairTeamItem