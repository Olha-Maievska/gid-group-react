import { v4 as uuidv4 } from 'uuid'

import servicesImgOne from '@main/Services/images/services1.jpg'
import servicesImgTwo from '@main/Services/images/services2.jpg'
import servicesImgThree from '@main/Services/images/services3.jpg'
import servicesImgFour from '@main/Services/images/services4.jpg'

import img1 from '@services/ServicesDesign/images/design-repair1.jpg'
import img2 from '@services/ServicesDesign/images/design-repair2.jpg'
import img3 from '@services/ServicesDesign/images/design-repair3.jpg'
import img4 from '@services/ServicesDesign/images/design-repair4.jpg'
import img5 from '@services/ServicesDesign/images/design-repair5.jpg'
import img6 from '@services/ServicesDesign/images/design-repair6.jpg'
import img7 from '@services/ServicesDesign/images/design-repair7.jpg'
import img8 from '@services/ServicesDesign/images/design-repair8.jpg'

import roughStage1 from '@services/ServicesRepair/images/rough-stage1.jpg'
import roughStage2 from '@services/ServicesRepair/images/rough-stage2.jpg'
import roughStage3 from '@services/ServicesRepair/images/rough-stage3.jpg'
import roughStage4 from '@services/ServicesRepair/images/rough-stage4.jpg'

import engineerWorks1 from '@services/ServicesRepair/images/engineer-works1.jpg'
import engineerWorks2 from '@services/ServicesRepair/images/engineer-works2.jpg'
import engineerWorks3 from '@services/ServicesRepair/images/engineer-works3.jpg'
import engineerWorks4 from '@services/ServicesRepair/images/engineer-works4.jpg'
import engineerWorks5 from '@services/ServicesRepair/images/engineer-works5.jpg'

import finishing1 from '@services/ServicesRepair/images/finishing1.jpg'
import finishing2 from '@services/ServicesRepair/images/finishing2.jpg'
import finishing3 from '@services/ServicesRepair/images/finishing3.jpg'
import finishing4 from '@services/ServicesRepair/images/finishing4.jpg'
import finishing5 from '@services/ServicesRepair/images/finishing5.jpg'

import finishing6 from '@services/ServicesRepair/images/finishing6.jpg'
import finishing7 from '@services/ServicesRepair/images/finishing7.jpg'

import finish1 from '@services/ServicesRepair/images/finish1.jpg'
import finish2 from '@services/ServicesRepair/images/finish2.jpg'
import finish3 from '@services/ServicesRepair/images/finish3.jpg'

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

export const servicesDesignData = [
  {
    id: uuidv4(),
    title: 'Определение стиля',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img1,
  },
  {
    id: uuidv4(),
    title: 'Цветовые решения',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img2,
  },
  {
    id: uuidv4(),
    title: 'Планировочные решения',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img3,
  },
  {
    id: uuidv4(),
    title: 'Бюджет',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img4,
  },
  {
    id: uuidv4(),
    title: 'Материалы и предметы',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img5,
  },
  {
    id: uuidv4(),
    title: 'Визуализация',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img6,
  },
  {
    id: uuidv4(),
    title: 'Чертежи и проекты',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img7,
  },
  {
    id: uuidv4(),
    title: 'Надзор',
    text: 'Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.',
    img: img8,
  },
]

export const servicesRepairData = [
  {
    id: uuidv4(),
    title: 'Черновой этап',
    content: [
      {
        id: uuidv4(),
        contentTitle: 'Демонтаж',
        contentImg: roughStage1,
      },
      {
        id: uuidv4(),
        contentTitle: 'Штукатурка потолка и стен',
        contentImg: roughStage2,
      },
      {
        id: uuidv4(),
        contentTitle: 'Стяжка полов',
        contentImg: roughStage3,
      },
      {
        id: uuidv4(),
        contentTitle: 'Звукоизоляция',
        contentImg: roughStage4,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Инженерные работы',
    content: [
      {
        id: uuidv4(),
        contentTitle: 'Отопление',
        contentImg: engineerWorks1,
      },
      {
        id: uuidv4(),
        contentTitle: 'Водоснабжение',
        contentImg: engineerWorks2,
      },
      {
        id: uuidv4(),
        contentTitle: 'Электротехнические работы',
        contentImg: engineerWorks3,
      },
      {
        id: uuidv4(),
        contentTitle: 'Слаботочный щит',
        contentImg: engineerWorks4,
      },
      {
        id: uuidv4(),
        contentTitle: 'Кондиционирование',
        contentImg: engineerWorks5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Предчистовая отделка',
    content: [
      {
        id: uuidv4(),
        contentTitle: 'Гипсокартонные работы',
        contentImg: finishing1,
      },
      {
        id: uuidv4(),
        contentTitle: 'Предчистовая подготовка - шпатлёвка',
        contentImg: finishing2,
      },
      {
        id: uuidv4(),
        contentTitle: 'Напольное покрытие',
        contentImg: finishing3,
      },
      {
        id: uuidv4(),
        contentTitle: 'Двери скрытого монтажа',
        contentImg: finishing4,
      },
      {
        id: uuidv4(),
        contentTitle: 'Установка карнизов и декор элементов ',
        contentImg: finishing5,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Чистовая отделка',
    content: [
      {
        id: uuidv4(),
        contentTitle: 'Декоративные покрытия',
        contentImg: finishing6,
      },
      {
        id: uuidv4(),
        contentTitle: 'Монтаж',
        contentImg: finishing7,
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Заключительный этап',
    content: [
      {
        id: uuidv4(),
        contentTitle: 'Меблировка',
        contentImg: finish1,
      },
      {
        id: uuidv4(),
        contentTitle: 'Декорирование',
        contentImg: finish2,
      },
      {
        id: uuidv4(),
        contentTitle: 'Клининг',
        contentImg: finish3,
      },
    ],
  },
]