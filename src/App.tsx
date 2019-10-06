import React from 'react'
import Computers from './components/Computers'
import './App.css'
import logo from './assets/Bunkkeri-gg-200p.png'

const App: React.FC = () => {
  return (
    <div className="container">
      <div
        style={{
          color: '#fff',
          marginBottom: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src={logo} alt="bunkkeri logo" />
        <p>
          TÄMÄ ON VASTA TESTI VERSIO JOTEN TILA EI VASTAA OIKEATA TILANNETTA!
        </p>
      </div>

      <Computers />
    </div>
  )
}

export default App
