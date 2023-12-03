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
    text: 'Your personal manager is always in touch',
  },
  {
    title: 'Observation',
    text: 'The facility is under 24-hour video surveillance',
  },
  {
    title: 'Documentation',
    text: 'We will prepare and approve all project documentation',
  },
  {
    title: '7 years',
    text: 'Guarantees for all work',
  },
]

export const repairServices = [
  {
    src: services1,
    title: '"with your design project"',
    items: [
      {text: 'Your design project',},
      {text: 'Our repair',},
    ]
  },
  {
    src: services2,
    title: '"turnkey renovation"',
    items: [
      {text: 'Planning solution',},
      {text: 'Design concept',},
      {text: '3D Visualization',},
      {text: 'Selection of materials',},
      {text: 'Construction drawings',},
    ]
  },
  {
    src: services3,
    title: '"all inclusive"',
    items: [
      {text: 'Planning solution',},
      {text: 'Design concept',},
      {text: '3D Visualization',},
      {text: 'Selection of materials',},
      {text: 'Construction drawings',},
      {text: 'Facility renovation',},
      {text: 'Furniture and materials',},
      {text: 'Final decoration',},
    ]
  },
]

export const repairStages = [
  {
    id: uuidv4(),
    num: '01',
    title: 'Draft',
    text: 'Dismantling, plastering, screeding and other works',
    img: stages1,
  },
  {
    id: uuidv4(),
    num: '02',
    title: 'Engineering work',
    text: 'Electrical work, heating, water supply and others',
    img: stages2,
  },
  {
    id: uuidv4(),
    num: '03',
    title: 'Pre-finishing',
    text: 'Plasterboard works, putty, floor coverings and more',
    img: stages3,
  },
  {
    id: uuidv4(),
    num: '04',
    title: 'Finishing',
    text: 'Installation and decorative coatings',
    img: stages4,
  },
  {
    id: uuidv4(),
    num: '05',
    title: 'The final stage',
    text: 'Furnishing, decoration and cleaning',
    img: stages5,
  },
]

export const repairResult = [
  {
    id: uuidv4(),
    text: 'Complete turnkey renovation”',
    img: result1,
  },
  {
    id: uuidv4(),
    text: 'Meeting all deadlines and budget',
    img: result2,
  },
  {
    id: uuidv4(),
    text: 'Repair warranty up to 6 years',
    img: result3,
  },
  {
    id: uuidv4(),
    text: 'Recommendations to friends',
    img: result4,
  },
]