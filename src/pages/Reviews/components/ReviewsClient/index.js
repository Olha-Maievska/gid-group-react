const ReviewsClient = ({owner, complex, style, photoOwner, }) => {
  return (
    <div className="repair-review__box">
      <div className="repair-review__box-img">
        <img src={photoOwner} alt={owner} />
      </div>
      <div className="repair-review__box-content">
        <div className="repair-review__box-name">{owner}</div>
        <div className="repair-review__box-client">{complex} </div>
        <div className="repair-review__box-text">Ремонт квартиры под ключ, <div> с выбранным стилем - {style}</div></div>
      </div>
    </div>
  )
}

export default ReviewsClient