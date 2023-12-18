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
import CalcStyles from "../pages/Calculator/CalcStyles";
import CalcParams from "../pages/Calculator/CalcParams";
import CalcAdditionally from "../pages/Calculator/CalcAdditionally";
import PersonalData from '../pages/PersonalData';

export const routes = [
  { path: '', element: <Main/>},
  { path: '/contacts', element: <Contacts/>},
  { path: '/projects', element: <Projects/>},
  { path: '/projects/:id', element: <ProjectsDetails/>},
  { path: '/design', element: <Design/>},
  { path: '/services', element: <Services/>},
  { path: '/blog', element: <Blog/>},
  { path: '/blog/:id', element: <BlogDetails/>},
  { path: '/repair', element: <Repair/>},
  { path: '/team', element: <Team/>},
  { path: '/reviews/:id', element: <Reviews/>},
  { path: '/calculatorStyles', element: <CalcStyles/>},
  { path: '/calculatorParams', element: <CalcParams/>},
  { path: '/calculatorAdditionally', element: <CalcAdditionally/>},
  { path: '/personalData', element: <PersonalData/>},
]