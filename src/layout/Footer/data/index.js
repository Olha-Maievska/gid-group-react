import facebook from '../images/facebook.svg'
import telegram from '../images/telegram.svg'
import instagram from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import tiktok from '../images/tiktok.svg'
import viber from '../images/viber.svg'

export const socialItems = [
	{id: crypto.randomUUID(), img: facebook, href: 'https://www.facebook.com/', alt: 'facebook'},
	{id: crypto.randomUUID(), img: telegram, href: 'https://telegram.org/', alt: 'telegram'},
	{id: crypto.randomUUID(), img: instagram, href: 'https://www.instagram.com/', alt: 'instagram'},
	{id: crypto.randomUUID(), img: youtube, href: 'https://www.youtube.com/', alt: 'youtube'},
	{id: crypto.randomUUID(), img: tiktok, href: 'https://www.tiktok.com/', alt: 'tiktok'},
	{id: crypto.randomUUID(), img: viber, href: 'https://www.viber.com/', alt: 'viber'},
]

export const companyList = [
  {title: 'Our team', href: '/team'},
  {title: 'Our blog', href: '/blog'},
]

export const projectsList = [
  {title: 'Apartments', href: '/projects'},
  {title: 'Cottages', href: '/projects'},
  {title: 'Offices', href: '/projects'},
]