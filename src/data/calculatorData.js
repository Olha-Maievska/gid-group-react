import cacl1 from '@calc/CalcStyles/components/CalcStyle/images/calc1.jpg'
import cacl2 from '@calc/CalcStyles/components/CalcStyle/images/calc2.jpg'
import cacl3 from '@calc/CalcStyles/components/CalcStyle/images/calc3.jpg'
import cacl4 from '@calc/CalcStyles/components/CalcStyle/images/calc4.jpg'
import cacl5 from '@calc/CalcStyles/components/CalcStyle/images/calc5.jpg'
import cacl6 from '@calc/CalcStyles/components/CalcStyle/images/calc6.jpg'

import doorOne from '@calc/CalcParams/components/Other/images/door1.jpg'
import doorTwo from '@calc/CalcParams/components/Other/images/door2.jpg'

export const calcStyleData = [
  {
    id: crypto.randomUUID(),
    style: 'Minimalism',
    img: cacl1,
    price: 500,
    dataAttr: 'minimalism',
  },
  {
    id: crypto.randomUUID(),
    style: 'Scandinavian',
    img: cacl2,
    price: 1100,
    dataAttr: 'scandinavian'
  },
  {
    id: crypto.randomUUID(),
    style: 'Loft',
    img: cacl3,
    price: 1500,
    dataAttr: 'loft',
  },
  {
    id: crypto.randomUUID(),
    style: 'High-tech',
    img: cacl4,
    price: 600,
    dataAttr: 'hiTech'
  },
  {
    id: crypto.randomUUID(),
    style: 'Modern classic',
    img: cacl5,
    price: 300,
    dataAttr: 'modernClassics'
  },
  {
    id: crypto.randomUUID(),
    style: 'Ecostyle',
    img: cacl6,
    price: 1200,
    dataAttr: 'ecostyle'
  },
]

export const wallsDecoration = [
  {
    id: crypto.randomUUID(),
    colorName: 'Light gray',
    colorCode: '#F2F2F2',
    price: 500,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Light beige',
    colorCode: '#F9F3E6',
    price: 650,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Dark grey',
    colorCode: '#BDBDBD',
    price: 550,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Dark pink',
    colorCode: '#E7D0D0',
    price: 600,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Light green',
    colorCode: '#c4ebd7',
    price: 600,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Dark blue',
    colorCode: '#4093b9',
    price: 700,
  }
]

export const floorDecor = [
  {
    id: crypto.randomUUID(),
    colorName: 'Light laminate',
    colorCode: '#F2F2F2',
    price: 1200,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Self-leveling floor',
    colorCode: '#F2F2F2',
    price: 1400,
  },
  {
    id: crypto.randomUUID(),
    colorName: 'Parquet board',
    colorCode: '#F2F2F2',
    price: 2100,
  },
]

export const typeOfDoors = [
  {
    id: crypto.randomUUID(),
    name: 'Door with two panels',
    img: doorOne,
    price: 2300,
    heightOfDoor: [
      {
        id: 0,
        size: '2.1',
      },
      {
        id: 1,
        size: '2.4',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'Door with three panels',
    img: doorTwo,
    price: 2600,
    heightOfDoor: [
      {
        id: 0,
        size: '2.1',
      },
      {
        id: 1,
        size: '2.4',
      },
    ],
  },
]

export const additionallyData = [
  {
    id: crypto.randomUUID(),
    text: 'Stretch ceiling',
    price: '1 400',
  },
  {
    id: crypto.randomUUID(),
    text: 'Replacing radiators',
    price: '18 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Apron in the kitchen',
    price: '15 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Steel entrance door',
    price: '6 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Warm floor in the bathroom',
    price: '18 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Air conditioners',
    price: '24 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Bathroom accessories',
    price: '18 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Window replacement',
    price: '10 000',
  },
  {
    id: crypto.randomUUID(),
    text: 'Replacing doors',
    price: '16 000',
  },
]