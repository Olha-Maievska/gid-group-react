import React from 'react'

const ProjectsDetailsTab = ({title, active = '', handleTabs}) => {
  return (
    <div className={`view-page__tab ${active}`} onClick={handleTabs}>{title}</div>
  )
}

export default ProjectsDetailsTab