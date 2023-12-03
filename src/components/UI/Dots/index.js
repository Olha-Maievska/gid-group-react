import './dots.scss'

const Dots = ({ index, moveDot, data}) => {
  return (
    <ul className="question__dots">
      {data.map((dot, i) =>
        <li
          className={index === i + 1 ? "question__dot active" : "question__dot"}
          key={dot.id}
          onClick={() => moveDot(i + 1)}
        >
        </li>
      )}
    </ul>
  )
}

export default Dots