import { v4 as uuidv4 } from 'uuid'

import slide1 from '@main/Slider/images/header1.jpg'
import slide2 from '@main/Slider/images/header2.jpg'
import slide3 from '@main/Slider/images/header3.jpg'

export const dataSlider = [
  {
    id: uuidv4(),
    title: 'Лучшее для лучших',
    src: slide1,
  },
  {
    id: uuidv4(),
    title: 'Ремонт вашей мечты',
    src: slide2,
  },
  {
    id: uuidv4(),
    title: 'Стильный дизайн',
    src: slide3,
  },
]