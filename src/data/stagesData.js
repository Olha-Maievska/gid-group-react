import { v4 as uuidv4 } from 'uuid'

import stages1 from '@main/Stages/images/stages1.png'
import stages2 from '@main/Stages/images/stages2.png'
import stages3 from '@main/Stages/images/stages3.png'
import stages4 from '@main/Stages/images/stages4.png'
import stages5 from '@main/Stages/images/stages5.png'
import stages6 from '@main/Stages/images/stages6.png'

export const stagesData = [
  {
    id: uuidv4(),
    img: stages1,
    title: 'Заявка',
    text: 'Оставляйте заявку на сайте и получите 2 варианта планировки квартиры БЕСПЛАТНО',
    num: '01',
    btn: 'Оставить заявку',
  },
  {
    id: uuidv4(),
    img: stages2,
    title: 'Дизайн',
    text: 'Собираете на сайте стиль из четырех готовых решений с возможностью редактирования',
    num: '02',
    btn: 'Выбрать дизайн',
  },
  {
    id: uuidv4(),
    img: stages3,
    title: 'Расчет',
    text: 'Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора',
    num: '03',
    btn: 'Посчитать'
  },
  {
    id: uuidv4(),
    img: stages4,
    title: 'Договор',
    text: 'Собираете на сайте стиль из четырех готовых решений возможностью редактирования',
    num: '04',
    btn: 'Оставить заявку',
  },
  {
    id: uuidv4(),
    img: stages5,
    title: 'Ремонт',
    text: 'Собираете на сайте стиль из четырех готовых решений возможностью редактирования',
    num: '05',
    btn: 'Оставить заявку',
  },
  {
    id: uuidv4(),
    img: stages6,
    title: 'Сдача объекта',
    text: 'Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора',
    num: '06',
  },
]