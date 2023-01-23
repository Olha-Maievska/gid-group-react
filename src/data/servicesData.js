import { v4 as uuidv4 } from 'uuid'

import servicesImgOne from '@main/Services/images/services1.jpg'
import servicesImgTwo from '@main/Services/images/services2.jpg'
import servicesImgThree from '@main/Services/images/services3.jpg'
import servicesImgFour from '@main/Services/images/services4.jpg'

export const servicesData = [
  {
    id: uuidv4(),
    img: servicesImgOne,
    title: '3D-дизайн',
    text: 'Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений.',
  },
  {
    id: uuidv4(),
    img: servicesImgTwo,
    title: 'Ремонт',
    text: 'Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.',
  },
  {
    id: uuidv4(),
    img: servicesImgThree,
    title: 'Строительство',
    text: 'Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.',
  },
  {
    id: uuidv4(),
    img: servicesImgFour,
    title: 'Ландшафт',
    text: 'Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений.',
  },
]