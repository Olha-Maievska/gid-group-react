import React from 'react'

const ProcessChoice = ({number, title, style}) => {
  return (
    <div className="process__choice">
      <div className="process__choice-number">{number}</div>
      <div className="process__choice-content">
        <h5 className="process__choice-title">{title}</h5>
        <div className="process__choice-subtitle">Was chosen - {style} style</div>
        <p className="process__choice-text">Our designers tried to select the most modern design elements and furniture in the style of the project to suit the client’s requests.</p>
      </div>
    </div>
  )
}

export default ProcessChoice