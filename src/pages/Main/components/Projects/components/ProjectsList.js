import ProjectsItem from './ProjectsItem'

const ProjectsList = ({ data }) => {
  return (
    <div className="projects__inner">
      {data?.map(item =>
        <ProjectsItem key={item.id} item={item}/>
      )}
    </div>
  )
}

export default ProjectsList