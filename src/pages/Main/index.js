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
    <div className="wrapper">
      <div className="content">
        <Header fone='rgba(0, 0, 0, .4)'>
          <MenuBtn/>
					<Logo/>
          <CallBtn />
        </Header>
        <Slider />
        <Advantages />
        <Price />
        <Services />
        <Projects />
        <Stages />
        <Target />
        <Gallery />
        <Catalog />
      </div>
      <Footer />
    </div>
  )
}

export default Main