import React, { useState, useEffect } from 'react'
import api from '../helpers/api'
import Computer from './Computers/Computer'
import './computers.css'

type Sessions = Session[]

interface Session {
  _id: string
  computerId: number
  startTime: string
  __v: number
}

const Computers: React.FC = () => {
  const [sessions, setSessions] = useState<Sessions | null>(null)

  const getSessions = () => {
    return api.getSession().then((ses: Sessions) => setSessions(ses))
  }

  useEffect(() => {
    getSessions()
    setInterval(() => {
      getSessions()
      console.log('new sessions')
    }, 60000)
  }, [])

  useEffect(() => {
    console.log(sessions)
  }, [sessions])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '75px 75px 75px 75px 75px 75px ',
        gridTemplateRows: '75px 75px 75px 75px',
        gridTemplateAreas:
          '". item4 item5 item6 item7 .""item3 . item16 item13 . item8""item2 . item15 item12 . item9""item1 . item14 item11 . item10"'
      }}
    >
      {sessions
        ? sessions.map(computer => (
            <Computer key={computer.computerId} computer={computer} />
          ))
        : null}
    </div>
  )
}

export default Computers
