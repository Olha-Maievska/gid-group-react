


import roughStage1 from '../images/rough-stage1.jpg'
import roughStage2 from '../images/rough-stage2.jpg'
import roughStage3 from '../images/rough-stage3.jpg'
import roughStage4 from '../images/rough-stage4.jpg'

import engineerWorks1 from '../images/engineer-works1.jpg'
import engineerWorks2 from '../images/engineer-works2.jpg'
import engineerWorks3 from '../images/engineer-works3.jpg'
import engineerWorks4 from '../images/engineer-works4.jpg'
import engineerWorks5 from '../images/engineer-works5.jpg'

import finishing1 from '../images/finishing1.jpg'
import finishing2 from '../images/finishing2.jpg'
import finishing3 from '../images/finishing3.jpg'
import finishing4 from '../images/finishing4.jpg'
import finishing5 from '../images/finishing5.jpg'

import finishing6 from '../images/finishing6.jpg'
import finishing7 from '../images/finishing7.jpg'

import finish1 from '../images/finish1.jpg'
import finish2 from '../images/finish2.jpg'
import finish3 from '../images/finish3.jpg'

export const servicesRepairData = [
  {
    id: crypto.randomUUID(),
    title: 'Draft stage',
    content: [
      {
        id: crypto.randomUUID(),
        contentTitle: 'Dismantling',
        contentImg: roughStage1,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Plastering the ceiling and walls',
        contentImg: roughStage2,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Floor screed',
        contentImg: roughStage3,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Soundproofing',
        contentImg: roughStage4,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Engineering work',
    content: [
      {
        id: crypto.randomUUID(),
        contentTitle: 'Heating',
        contentImg: engineerWorks1,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Water supply',
        contentImg: engineerWorks2,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Electrical work',
        contentImg: engineerWorks3,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Low current shield',
        contentImg: engineerWorks4,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Conditioning',
        contentImg: engineerWorks5,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Pre-finishing',
    content: [
      {
        id: crypto.randomUUID(),
        contentTitle: 'Plasterboard works',
        contentImg: finishing1,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Pre-finishing preparation - putty',
        contentImg: finishing2,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Flooring',
        contentImg: finishing3,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Concealed doors',
        contentImg: finishing4,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Installation of cornices and decorative elements ',
        contentImg: finishing5,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Finishing',
    content: [
      {
        id: crypto.randomUUID(),
        contentTitle: 'Decorative coatings',
        contentImg: finishing6,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Installation',
        contentImg: finishing7,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'The final stage',
    content: [
      {
        id: crypto.randomUUID(),
        contentTitle: 'Furnishings',
        contentImg: finish1,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Decoration',
        contentImg: finish2,
      },
      {
        id: crypto.randomUUID(),
        contentTitle: 'Cleaning',
        contentImg: finish3,
      },
    ],
  },
]