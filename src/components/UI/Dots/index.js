import './dots.scss'

const Dots = ({ index, moveDot, data}) => {
  return (
    <ul className="dots">
      {data.map((dot, i) =>
        <li
          className={index === i ? "dot active" : "dot"}
          key={dot.id}
          onClick={() => moveDot(i)}
        >
        </li>
      )}
    </ul>
  )
}

export default Dots