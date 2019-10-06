import React from 'react'
import Computers from './components/Computers'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <div style={{ color: '#fff', marginBottom: '3em' }}>
        <h1>Bunkkeri pelitila</h1>
        <p>Tulokset ovat vain suuntaa antavia</p>
      </div>

      <Computers />
    </div>
  )
}

export default App
