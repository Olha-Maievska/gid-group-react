const FooterSocialItem = ({img, href, alt}) => {
  return (
    <li className="footer__social-item">
      <a
        className="footer__social-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={alt} />
      </a>
		</li>
  )
}

export default FooterSocialItem