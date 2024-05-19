import { lazy } from 'react';

const Main = lazy(() => import("../pages/Main"))
const Contacts = lazy(() => import("../pages/Contacts"))
const Projects = lazy(() => import("../pages/Progects"))
const Design = lazy(() => import("../pages/Design"))
const Blog = lazy(() => import("../pages/Blog"))
const Repair = lazy(() => import("../pages/Repair"))
const Team = lazy(() => import("../pages/Team"))
const Services = lazy(() => import("../pages/Services"))
const ProjectsDetails = lazy(() => import("../pages/ProjectsDetails"))
const BlogDetails = lazy(() => import("../pages/BlogDetails"))
const Reviews = lazy(() => import("../pages/Reviews"))
const CalcStyles = lazy(() => import("../pages/Calculator/CalcStyles"))
const CalcParams = lazy(() => import("../pages/Calculator/CalcParams"))
const CalcAdditionally = lazy(() => import("../pages/Calculator/CalcAdditionally"))
const PersonalData = lazy(() => import("../pages/PersonalData"))
const PageNotFound = lazy(() => import("../components/404"))

export const routes = [
  { path: '/', element: <Main/>},
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
  { path: '/*', element: <PageNotFound/>},
]