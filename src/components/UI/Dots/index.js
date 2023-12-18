import './dots.scss'

const Dots = ({ index, moveDot, data}) => {
  return (
    <ul className="dots">
      {data.map((dot, i) =>
        <li
          className={index === i + 1 ? "dot active" : "dot"}
          key={dot.id}
          onClick={() => moveDot(i + 1)}
        >
        </li>
      )}
    </ul>
  )
}

export default Dots