import { v4 as uuidv4 } from 'uuid'

import facebook from '@layout/Footer/images/facebook.svg'
import telegram from '@layout/Footer/images/telegram.svg'
import instagram from '@layout/Footer/images/instagram.svg'
import youtube from '@layout/Footer/images/youtube.svg'
import tiktok from '@layout/Footer/images/tiktok.svg'
import viber from '@layout/Footer/images/viber.svg'

export const socialItems = [
	{id: uuidv4(), img: facebook, href: 'https://www.facebook.com/', alt: 'facebook'},
	{id: uuidv4(), img: telegram, href: 'https://telegram.org/', alt: 'telegram'},
	{id: uuidv4(), img: instagram, href: 'https://www.instagram.com/', alt: 'instagram'},
	{id: uuidv4(), img: youtube, href: 'https://www.youtube.com/', alt: 'youtube'},
	{id: uuidv4(), img: tiktok, href: 'https://www.tiktok.com/', alt: 'tiktok'},
	{id: uuidv4(), img: viber, href: 'https://www.viber.com/', alt: 'viber'},
]

export const companyList = [
  {title: 'О нас', href: '/'},
  {title: 'Наша команда', href: '/'},
  {title: 'История', href: '/'},
]

export const projectsList = [
  {title: 'Квартиры', href: '/'},
  {title: 'Коттеджы', href: '/'},
  {title: 'Офисы', href: '/'},
  {title: 'Рестораны', href: '/'},
]