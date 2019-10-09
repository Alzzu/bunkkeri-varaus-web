import React, { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
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
  const [loading, setLoading] = useState<boolean>(true)
  const [sessions, setSessions] = useState<Sessions | null>(null)

  const getSessions = () => {
    return api.getSession().then((ses: Sessions) => {
      setSessions(ses)
      setLoading(false)
    })
  }

  useEffect(() => {
    getSessions()
    const interval = setInterval(() => {
      getSessions()
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (loading)
    return <ClipLoader color={'rgb(227, 6, 19)'} size={150} loading={loading} />

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
