import Main from "../pages/Main";
import Contacts from '../pages/Contacts'
import Projects from "../pages/Progects";
import Design from "../pages/Design";
import Blog from "../pages/Blog";
import Repair from "../pages/Repair";
import ProjectsDetails from "../pages/ProjectsDetails";

export const routes = [
  { path: '', element: <Main/>, exact: true},
  { path: '/contacts', element: <Contacts/>, exact: true},
  { path: '/projects', element: <Projects/>, exact: true},
  { path: '/projects/:id', element: <ProjectsDetails/>, exact: true},
  { path: '/design', element: <Design/>, exact: true},
  { path: '/blog', element: <Blog/>, exact: true},
  { path: '/repair', element: <Repair/>, exact: true},
]