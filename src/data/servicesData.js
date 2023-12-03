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
    id: crypto.randomUUID(),
    img: servicesImgOne,
    title: '3D-design',
    text: 'Higher-order ideological considerations ensure the relevance of thoughtful reasoning.',
  },
  {
    id: crypto.randomUUID(),
    img: servicesImgTwo,
    title: 'Repair',
    text: 'We are forced to start from the fact that a deep level of immersion allows for the implementation of timely completion of the most important task.',
  },
  {
    id: crypto.randomUUID(),
    img: servicesImgThree,
    title: 'Construction',
    text: 'We are forced to start from the fact that a deep level of immersion allows for the implementation of timely completion of the most important task.',
  },
  {
    id: crypto.randomUUID(),
    img: servicesImgFour,
    title: 'Landscape',
    text: 'Higher-order ideological considerations ensure the relevance of thoughtful reasoning.',
  },
]

export const servicesDesignData = [
  {
    id: crypto.randomUUID(),
    title: 'Defining style',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img1,
  },
  {
    id: crypto.randomUUID(),
    title: 'Color solutions',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img2,
  },
  {
    id: crypto.randomUUID(),
    title: 'Planning solutions',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img3,
  },
  {
    id: crypto.randomUUID(),
    title: 'Budget',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img4,
  },
  {
    id: crypto.randomUUID(),
    title: 'Materials and objects',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img5,
  },
  {
    id: crypto.randomUUID(),
    title: 'Visualization',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img6,
  },
  {
    id: crypto.randomUUID(),
    title: 'Drawings and projects',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications..',
    img: img7,
  },
  {
    id: crypto.randomUUID(),
    title: 'Supervision',
    text: 'We transfer the approved interior design to paper. As a result, you receive a set of design documents: construction drawings, photorealistic renderings, and the necessary specifications.',
    img: img8,
  },
]

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