import facebook from '@layout/Footer/images/facebook.svg'
import telegram from '@layout/Footer/images/telegram.svg'
import instagram from '@layout/Footer/images/instagram.svg'
import youtube from '@layout/Footer/images/youtube.svg'
import tiktok from '@layout/Footer/images/tiktok.svg'
import viber from '@layout/Footer/images/viber.svg'

export const socialItems = [
	{id: crypto.randomUUID(), img: facebook, href: 'https://www.facebook.com/', alt: 'facebook'},
	{id: crypto.randomUUID(), img: telegram, href: 'https://telegram.org/', alt: 'telegram'},
	{id: crypto.randomUUID(), img: instagram, href: 'https://www.instagram.com/', alt: 'instagram'},
	{id: crypto.randomUUID(), img: youtube, href: 'https://www.youtube.com/', alt: 'youtube'},
	{id: crypto.randomUUID(), img: tiktok, href: 'https://www.tiktok.com/', alt: 'tiktok'},
	{id: crypto.randomUUID(), img: viber, href: 'https://www.viber.com/', alt: 'viber'},
]

export const companyList = [
  {title: 'About us', href: '/'},
  {title: 'Our team', href: '/'},
  {title: 'Story', href: '/'},
]

export const projectsList = [
  {title: 'Apartments', href: '/'},
  {title: 'Cottages', href: '/'},
  {title: 'Offices', href: '/'},
  {title: 'Restaurants', href: '/'},
]