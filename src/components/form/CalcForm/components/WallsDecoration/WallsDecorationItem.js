const WallsDecorationItem = ({ colorName, colorCode, fn, className}) => {
  return (
    <div
      className={className}
      onClick={() => fn(colorName)}
    >
      <div
        className="calc-param__data-color"
        style={{ backgroundColor: `${colorCode}` }}
      />
      <div className="calc-param__data-text">{colorName}</div>
    </div>
  )
}

export default WallsDecorationItem