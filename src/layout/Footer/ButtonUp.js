const ButtonUp = () => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(handlerScrollUp, 10);
    }
  }

  return (
    <button className="footer__btn" onClick={handlerScrollUp}>Наверх</button>
  )
}

export default ButtonUp