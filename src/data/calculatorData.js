import cacl1 from '@calc/CalcStyle/images/calc1.jpg'
import cacl2 from '@calc/CalcStyle/images/calc2.jpg'
import cacl3 from '@calc/CalcStyle/images/calc3.jpg'
import cacl4 from '@calc/CalcStyle/images/calc4.jpg'
import cacl5 from '@calc/CalcStyle/images/calc5.jpg'
import cacl6 from '@calc/CalcStyle/images/calc6.jpg'

export const calcStyleData = [
  {
    id: crypto.randomUUID(),
    style: 'Минимализм',
    img: cacl1,
    price: 500,
    dataAttr: 'minimalism',
  },
  {
    id: crypto.randomUUID(),
    style: 'Скандинавский стиль',
    img: cacl2,
    price: 1100,
    dataAttr: 'scandinavian'
  },
  {
    id: crypto.randomUUID(),
    style: 'Стиль Лофт',
    img: cacl3,
    price: 1500,
    dataAttr: 'loft',
  },
  {
    id: crypto.randomUUID(),
    style: 'Стиль Хай-тек',
    img: cacl4,
    price: 600,
    dataAttr: 'hiTech'
  },
  {
    id: crypto.randomUUID(),
    style: 'Современная классика',
    img: cacl5,
    price: 300,
    dataAttr: 'modernClassics'
  },
  {
    id: crypto.randomUUID(),
    style: 'Экостиль',
    img: cacl6,
    price: 1200,
    dataAttr: 'ecostyle'
  },
]