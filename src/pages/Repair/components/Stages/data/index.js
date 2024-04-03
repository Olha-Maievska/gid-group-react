import stages1 from '../images/stages7.png'
import stages2 from '../images/stages8.png'
import stages3 from '../images/stages9.png'
import stages4 from '../images/stages10.png'
import stages5 from '../images/stages11.png'

export const repairStages = [
  {
    id: crypto.randomUUID(),
    num: '01',
    title: 'Draft',
    text: 'Dismantling, plastering, screeding and other works',
    img: stages1,
  },
  {
    id: crypto.randomUUID(),
    num: '02',
    title: 'Engineering work',
    text: 'Electrical work, heating, water supply and others',
    img: stages2,
  },
  {
    id: crypto.randomUUID(),
    num: '03',
    title: 'Pre-finishing',
    text: 'Plasterboard works, putty, floor coverings and more',
    img: stages3,
  },
  {
    id: crypto.randomUUID(),
    num: '04',
    title: 'Finishing',
    text: 'Installation and decorative coatings',
    img: stages4,
  },
  {
    id: crypto.randomUUID(),
    num: '05',
    title: 'The final stage',
    text: 'Furnishing, decoration and cleaning',
    img: stages5,
  },
]