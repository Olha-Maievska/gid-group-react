import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import Slider from './components/Slider'
import Advantages from './components/Advantages'
import Price from './components/Price'
import Services from './components/Services'
import Projects from './components/Projects'
import Stages from './components/Stages'
import Target from './components/Target'
import Gallery from './components/Gallery'
import Catalog from './components/Catalog'

const Main = () => {
  return (
    <main>
      <Slider />
      <Advantages />
      <Price />
      <Services />
      <Projects />
      <Stages />
      <Target />
      <Gallery />
      <Catalog title="GET A CATALOG OF OUR PROJECTS"/>
    </main>
  )
}

export default Main