import teamBig1 from '../images/team-big1.jpg'
import teamBig2 from '../images/team-big2.jpg'
import teamBig3 from '../images/team-big3.jpg'
import teamBig4 from '../images/team-big4.jpg'
import teamBig5 from '../images/team-big5.jpg'
import teamBig6 from '../images/team-big6.jpg'
import teamSmall1 from '../images/team-small1.jpg'
import teamSmall2 from '../images/team-small2.jpg'
import teamSmall3 from '../images/team-small3.jpg'
import teamSmall4 from '../images/team-small4.jpg'

export const teamData = [
  {
    id: crypto.randomUUID(),
    name: 'Olexander Troitskii',
    proffesion: 'Art Director GID',
    description: '20 years in a repair company. Supervises large projects.',
    imgSmall: teamSmall1,
    imgBig: teamBig1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dmytro Chornyi',
    proffesion: 'Designer GID',
    description: 'Designs interiors in various stylistic directions',
    imgSmall: teamSmall2,
    imgBig: teamBig2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Margarita Tymosyan',
    proffesion: '3D-visualizer GID',
    description: 'Engaged in the development of concepts, visualization of interiors and exteriors.',
    imgSmall: teamSmall3,
    imgBig: teamBig3,
  },
  {
    id: crypto.randomUUID(),
    name: 'Pavlo Sokyra',
    proffesion: 'Project manager',
    description: 'Checks drawings, supervises construction work.',
    imgSmall: teamSmall4,
    imgBig: teamBig4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tetiana Kuprynova',
    proffesion: 'Technical Director',
    description: 'Responsible for project implementation and quality control',
    imgBig: teamBig5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dmytro Kiselev',
    proffesion: 'Customer service manager',
    description: 'Provides clients with services for the selection of construction materials.',
    imgBig: teamBig6,
  },
]