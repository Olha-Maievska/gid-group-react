const BlogDetailsItem = ({title, text1, text2, author, date, link, imgMain, img1, img2}) => {
  return (
    <div className="container-fluid">
      <h3 className="blog-details__title">{title}</h3>
      <p className="blog-details__text">{text1}</p>
      <img className="blog-details__img--big" src={imgMain} alt={title} />
      <p className="blog-details__text">{text2}</p>
      <div className="blog-details__img-box">
        <img className="blog-details__img" src={img1} alt={title}/>
        <img className="blog-details__img" src={img2} alt={title} />
      </div>
      <div className="blog-details__author">
        Author: 
        <a href={link}
           target="_blank"
           rel="noopener noreferrer"
        >
          {author}
        </a>
      </div>
      <div className="blog-details__data">{date}</div>
    </div>
  )
}

export default BlogDetailsItem