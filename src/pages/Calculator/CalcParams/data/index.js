import doorOne from '../components/Other/images/door1.jpg'
import doorTwo from '../components/Other/images/door2.jpg'

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

