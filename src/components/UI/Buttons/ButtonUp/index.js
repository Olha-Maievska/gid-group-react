import './buttonUp.scss'

const ButtonUp = () => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(handlerScrollUp, 2);
    }
  }

  return (
    <button className="button__up" onClick={handlerScrollUp}>To Top</button>
  )
}

export default ButtonUp