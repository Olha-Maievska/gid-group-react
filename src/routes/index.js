import Main from "../pages/Main";
import Contacts from '../pages/Contacts'
import Projects from "../pages/Progects";
import Design from "../pages/Design";
import Blog from "../pages/Blog";
import Repair from "../pages/Repair";
import Team from "../pages/Team";
import Services from "../pages/Services";
import ProjectsDetails from "../pages/ProjectsDetails";
import BlogDetails from "../pages/BlogDetails";
import Reviews from "../pages/Reviews";
import Calculator from "../pages/Calculator";

export const routes = [
  { path: '', element: <Main/>, exact: true},
  { path: '/contacts', element: <Contacts/>, exact: true},
  { path: '/projects', element: <Projects/>, exact: true},
  { path: '/projects/:id', element: <ProjectsDetails/>, exact: true},
  { path: '/design', element: <Design/>, exact: true},
  { path: '/services', element: <Services/>, exact: true},
  { path: '/blog', element: <Blog/>, exact: true},
  { path: '/blog/:id', element: <BlogDetails/>, exact: true},
  { path: '/repair', element: <Repair/>, exact: true},
  { path: '/team', element: <Team/>, exact: true},
  { path: '/reviews/:id', element: <Reviews/>, exact: true},
  { path: '/calculator', element: <Calculator/>, exact: true},
]