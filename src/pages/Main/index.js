import Slider from './components/Slider'
import Advantages from '@components/Advantages'
import Price from './components/Price'
import Services from './components/Services'
import Projects from './components/Projects'
import Stages from './components/Stages'
import Target from './components/Target'
import Gallery from './components/Gallery'
import Catalog from './components/Catalog'
import { advantagesArray } from './data'


const Main = () => {
  return (
    <main>
      <Slider />
       <Advantages data={advantagesArray} />
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