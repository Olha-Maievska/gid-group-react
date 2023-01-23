import { v4 as uuidv4 } from 'uuid'

import tiktok from '@components/Menu/images/tiktok.svg'
import instagram from '@components/Menu/images/instagram.svg'
import telegram from '@components/Menu/images/telegram.svg'
import facebook from '@components/Menu/images/facebook.svg'
import youtube from '@components/Menu/images/youtube.svg'
import viber from '@components/Menu/images/viber.svg'

export const socialItems = [
	{id: uuidv4(), src: facebook, href: 'https://www.facebook.com/'},
	{id: uuidv4(), src: telegram, href: 'https://www.telegram.org/'},
	{id: uuidv4(), src: instagram, href: 'https://www.instagram.com/'},
	{id: uuidv4(), src: youtube, href: 'https://www.youtube.com/'},
	{id: uuidv4(), src: tiktok, href: 'https://www.tiktok.com/'},
	{id: uuidv4(), src: viber, href: 'https://www.viber.com/'},
]

export const menuData = [
  {id: uuidv4(), title: 'Главная', href: '/'},
  {id: uuidv4(), title: '3D-Дизайн', href: '/design'},
  {id: uuidv4(), title: 'Ремонт', href: '/repair'},
  {id: uuidv4(), title: 'Блог', href: '/blog'},
  {id: uuidv4(), title: 'Проекты', href: '/projects'},
  {id: uuidv4(), title: 'Контакты', href: '/contacts'},
]