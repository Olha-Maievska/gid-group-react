import { v4 as uuidv4 } from 'uuid'

import services1 from '../pages/Repair/components/Services/images/services1.svg'
import services2 from '../pages/Repair/components/Services/images/services2.svg'
import services3 from '../pages/Repair/components/Services/images/services3.svg'

import stages1 from '../pages/Repair/components/Stages/images/stages7.png'
import stages2 from '../pages/Repair/components/Stages/images/stages8.png'
import stages3 from '../pages/Repair/components/Stages/images/stages9.png'
import stages4 from '../pages/Repair/components/Stages/images/stages10.png'
import stages5 from '../pages/Repair/components/Stages/images/stages11.png'

import result1 from '../pages/Repair/components/Result/images/repair-result1.png'
import result2 from '../pages/Repair/components/Result/images/repair-result2.png'
import result3 from '../pages/Repair/components/Result/images/repair-result3.png'
import result4 from '../pages/Repair/components/Result/images/repair-result4.png'

export const repairBenefits = [
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

export const repairStages = [
  {
    id: uuidv4(),
    num: '01',
    title: 'Черновой',
    text: 'Работы по демонтажу, штукатурке, стяжке и другие',
    img: stages1,
  },
  {
    id: uuidv4(),
    num: '02',
    title: 'Инженерные работы',
    text: 'Электротехнические работы, отопление, водоснабжение и другие',
    img: stages2,
  },
  {
    id: uuidv4(),
    num: '03',
    title: 'Предчистовая отделка',
    text: 'Гипсокартонные работы, шпатлевка, напольные покрытия и другое',
    img: stages3,
  },
  {
    id: uuidv4(),
    num: '04',
    title: 'Чистовая отделка',
    text: 'Монтаж и декоративные покрытия',
    img: stages4,
  },
  {
    id: uuidv4(),
    num: '05',
    title: 'Заключительный этап',
    text: 'Меблировка, декорирование и клининг',
    img: stages5,
  },
]

export const repairResult = [
  {
    id: uuidv4(),
    text: 'Полностью готовый ремонт “под ключ”',
    img: result1,
  },
  {
    id: uuidv4(),
    text: 'Соблюдение всех сроков и бюджета',
    img: result2,
  },
  {
    id: uuidv4(),
    text: 'Гарантия на ремонт до 6 лет',
    img: result3,
  },
  {
    id: uuidv4(),
    text: 'Рекомендации друзьям',
    img: result4,
  },
]