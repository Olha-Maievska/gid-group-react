import { useDispatch } from 'react-redux'
import { openModal } from '@store/modal/modal-slice'

import './projectsRequest.scss'

const ProjectsRequest = () => {
  const dispatch = useDispatch()

  function showModal() {
    dispatch(openModal({name: 'request'}))
  }

  return (
    <>
    <div className="projects-page__request">
      <div className="projects-page__request-content">
        <p className="projects-page__request-text">Leave a request and we will help you with your project</p>
        <button className="projects-page__request-link" onClick={showModal}>Submit your application</button>
      </div>
      </div>
    </>
  )
}

export default ProjectsRequest