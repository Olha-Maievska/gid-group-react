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
    name: 'Александр Троицкий',
    proffesion: 'Арт-директор GID',
    description: '20 лет в ремонтной компании. Курирует крупные проекты.',
    imgSmall: teamSmall1,
    imgBig: teamBig1,
  },
  {
    id: uuidv4(),
    name: 'Лаврентий Гусев',
    proffesion: 'Дизайнер GID',
    description: 'Проектирует интерьеры в различных стилистических направлениях,',
    imgSmall: teamSmall2,
    imgBig: teamBig2,
  },
  {
    id: uuidv4(),
    name: 'Маргарита Тимосян',
    proffesion: '3D-визуализатор GID',
    description: '3анимается разработкой концепций, визуализацией интерьеров и экстерьеров.',
    imgSmall: teamSmall3,
    imgBig: teamBig3,
  },
  {
    id: uuidv4(),
    name: 'Андрей Иванов',
    proffesion: 'Руководитель проектов',
    description: 'Проверяет чертежи, наблюдает за строительными работами.',
    imgSmall: teamSmall4,
    imgBig: teamBig4,
  },
  {
    id: uuidv4(),
    name: 'Татьяна Куприянова',
    proffesion: 'Технический директор',
    description: 'Занимается реализацией проектов и контролем качества',
    imgBig: teamBig5,
  },
  {
    id: uuidv4(),
    name: 'Дмитрий Киселев',
    proffesion: 'Менеджер по работе с клиентами',
    description: 'Предоставляет клиентам услуги по подбору строй материалов.',
    imgBig: teamBig6,
  },
]