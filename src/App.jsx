import Banner from './components/banner/Banner'
import Difference from './components/difference/Difference'
import Footer from './components/footer/Footer'
import HowToUse from './components/howToUse/HowToUse'
import Navbar from './components/navbar/Navbar'
import Point from './components/point/Point'
import PointTwo from './components/pointTwo/PointTwo'
import WhatIs from './components/whatIs/WhatIs'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <WhatIs/>
      <Point/>
      <PointTwo/>
      <HowToUse/>
      <Difference/>
      <Footer/>
    </>
  )
}

export default App
