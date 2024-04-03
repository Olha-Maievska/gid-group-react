import tiktok from '../images/tiktok.svg'
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import facebook from '../images/facebook.svg'
import youtube from '../images/youtube.svg'
import viber from '../images/viber.svg'

export const socialItems = [
	{id: crypto.randomUUID(), src: facebook, href: 'https://www.facebook.com/'},
	{id: crypto.randomUUID(), src: telegram, href: 'https://www.telegram.org/'},
	{id: crypto.randomUUID(), src: instagram, href: 'https://www.instagram.com/'},
	{id: crypto.randomUUID(), src: youtube, href: 'https://www.youtube.com/'},
	{id: crypto.randomUUID(), src: tiktok, href: 'https://www.tiktok.com/'},
	{id: crypto.randomUUID(), src: viber, href: 'https://www.viber.com/'},
]

export const menuData = [
  {id: crypto.randomUUID(), title: 'Home', href: '/'},
  {id: crypto.randomUUID(), title: '3D design', href: '/design'},
  {id: crypto.randomUUID(), title: 'Repair', href: '/repair'},
  {id: crypto.randomUUID(), title: 'Services', href: '/services'},
  {id: crypto.randomUUID(), title: 'Blog', href: '/blog'},
  {id: crypto.randomUUID(), title: 'Our team', href: '/team'},
  {id: crypto.randomUUID(), title: 'Contacts', href: '/contacts'},
]