import { useState } from 'react'
import './index.css'

import Event from './Events/Event'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <Event></Event>
      <Footer></Footer>

    </>
  )
}

export default App