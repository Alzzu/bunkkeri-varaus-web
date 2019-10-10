import React from 'react'
import ReactGA from 'react-ga'
import Computers from './components/Computers'
import './App.css'

const App: React.FC = () => {
  ReactGA.initialize('UA-129871257-2')
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className="container">
      <div
        style={{
          color: '#000',
          marginBottom: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1em'
        }}
      >
        <h1 style={{ color: 'rgb(227, 6, 19)' }}>Bunkkeri pelitila</h1>
        <p>
          Tältä sivulta näet tämän hetkisen suuntaa antavan pelitilan
          paikkatilanteen.
        </p>
        <p>
          Ota myös huomioon pelitilan{' '}
          <a
            href="https://bunkkeri.gg/pelitilat/"
            style={{ color: 'rgb(227, 6, 19)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            aukioloajat.
          </a>
        </p>
      </div>

      <Computers />
      <div style={{ marginTop: '2em' }}>
        <a
          href="https://bunkkeri.gg"
          style={{ color: 'rgb(227, 6, 19)', fontWeight: 'bold' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bunkkeri.GG
        </a>
      </div>
    </div>
  )
}

export default App
