import cacl1 from '../images/calc1.jpg'
import cacl2 from '../images/calc2.jpg'
import cacl3 from '../images/calc3.jpg'
import cacl4 from '../images/calc4.jpg'
import cacl5 from '../images/calc5.jpg'
import cacl6 from '../images/calc6.jpg'

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