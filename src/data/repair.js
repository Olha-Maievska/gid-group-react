import { v4 as uuidv4 } from 'uuid'

import services1 from '../pages/Repair/components/Services/images/services1.svg'
import services2 from '../pages/Repair/components/Services/images/services2.svg'
import services3 from '../pages/Repair/components/Services/images/services3.svg'

export const repairStages = [
  {
    title: '24/7',
    text: 'Ваш личный менеджер всегда на связи',
  },
  {
    title: 'Наблюдение',
    text: 'На объекте ведётся круглосуточное видеонаблюдение',
  },
  {
    title: 'Документация',
    text: 'Подготовим и утвердим всю проектную документацию',
  },
  {
    title: '7 лет',
    text: 'Гарантии на все работы',
  },
]

export const repairServices = [
  {
    id: uuidv4(),
    src: services1,
    title: '"со своим дизайн проектом"',
    items: [
      {text: 'Ваш дизайн проект',},
      {text: 'Наш ремонт',},
    ]
  },
  {
    id: uuidv4(),
    src: services2,
    title: '"ремонт под ключ"',
    items: [
      {text: 'Планировочное решение',},
      {text: 'Дизайн-концепция',},
      {text: '3Д Визуализация',},
      {text: 'Подбор материалов',},
      {text: 'Строительные чертежи',},
    ]
  },
  {
    id: uuidv4(),
    src: services3,
    title: '"все включено"',
    items: [
      {text: 'Планировочное решение',},
      {text: 'Дизайн-концепция',},
      {text: '3Д Визуализация',},
      {text: 'Подбор материалов',},
      {text: 'Строительные чертежи',},
      {text: 'Ремонт объекта',},
      {text: 'Поставка мебели и материалов',},
      {text: 'Финальное декорирование',},
    ]
  },
]

export const repairServicesContentOne = [

]