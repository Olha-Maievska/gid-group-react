import { v4 as uuidv4 } from 'uuid'

import teamBig1 from '../pages/Team/components/TeamPeople/images/team-big1.jpg'
import teamBig2 from '../pages/Team/components/TeamPeople/images/team-big2.jpg'
import teamBig3 from '../pages/Team/components/TeamPeople/images/team-big3.jpg'
import teamBig4 from '../pages/Team/components/TeamPeople/images/team-big4.jpg'
import teamBig5 from '../pages/Team/components/TeamPeople/images/team-big5.jpg'
import teamBig6 from '../pages/Team/components/TeamPeople/images/team-big6.jpg'
import teamSmall1 from '../pages/Team/components/TeamPeople/images/team-small1.jpg'
import teamSmall2 from '../pages/Team/components/TeamPeople/images/team-small2.jpg'
import teamSmall3 from '../pages/Team/components/TeamPeople/images/team-small3.jpg'
import teamSmall4 from '../pages/Team/components/TeamPeople/images/team-small4.jpg'

export const teamData = [
  {
    id: uuidv4(),
    name: 'Olexander Troitskii',
    proffesion: 'Art Director GID',
    description: '20 years in a repair company. Supervises large projects.',
    imgSmall: teamSmall1,
    imgBig: teamBig1,
  },
  {
    id: uuidv4(),
    name: 'Dmytro Chornyi',
    proffesion: 'Designer GID',
    description: 'Designs interiors in various stylistic directions',
    imgSmall: teamSmall2,
    imgBig: teamBig2,
  },
  {
    id: uuidv4(),
    name: 'Margarita Tymosyan',
    proffesion: '3D-visualizer GID',
    description: 'Engaged in the development of concepts, visualization of interiors and exteriors.',
    imgSmall: teamSmall3,
    imgBig: teamBig3,
  },
  {
    id: uuidv4(),
    name: 'Pavlo Sokyra',
    proffesion: 'Project manager',
    description: 'Checks drawings, supervises construction work.',
    imgSmall: teamSmall4,
    imgBig: teamBig4,
  },
  {
    id: uuidv4(),
    name: 'Tetiana Kuprynova',
    proffesion: 'Technical Director',
    description: 'Responsible for project implementation and quality control',
    imgBig: teamBig5,
  },
  {
    id: uuidv4(),
    name: 'Dmytro Kiselev',
    proffesion: 'Customer service manager',
    description: 'Provides clients with services for the selection of construction materials.',
    imgBig: teamBig6,
  },
]