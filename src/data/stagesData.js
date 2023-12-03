import stages1 from '@main/Stages/images/stages1.png'
import stages2 from '@main/Stages/images/stages2.png'
import stages3 from '@main/Stages/images/stages3.png'
import stages4 from '@main/Stages/images/stages4.png'
import stages5 from '@main/Stages/images/stages5.png'
import stages6 from '@main/Stages/images/stages6.png'

export const stagesData = [
  {
    id: crypto.randomUUID(),
    img: stages1,
    title: 'Request',
    text: 'Leave a request on the website and receive 2 apartment layout options for FREE',
    num: '01',
    btn: 'Leave a request',
  },
  {
    id: crypto.randomUUID(),
    img: stages2,
    title: 'Design',
    text: 'You assemble a style on your website from four ready-made solutions with the ability to edit',
    num: '02',
    btn: 'Select design',
  },
  {
    id: crypto.randomUUID(),
    img: stages3,
    title: 'Calculation',
    text: 'Calculate the final cost of repairs using an online calculator',
    num: '03',
    btn: 'Calculate'
  },
  {
    id: crypto.randomUUID(),
    img: stages4,
    title: 'Agreement',
    text: 'You assemble a style on your website from four ready-made solutions with the ability to edit',
    num: '04',
    btn: 'Leave a request',
  },
  {
    id: crypto.randomUUID(),
    img: stages5,
    title: 'Repair',
    text: 'You assemble a style on your website from four ready-made solutions with the ability to edit',
    num: '05',
    btn: 'Leave a request',
  },
  {
    id: crypto.randomUUID(),
    img: stages6,
    title: 'Delivery of the object',
    text: 'Calculate the final cost of repairs using an online calculator',
    num: '06',
  },
]