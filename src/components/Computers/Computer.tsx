import React from 'react'
import moment from 'moment'

interface Props {
  computer: {
    _id: string
    computerId: number
    startTime: string
    __v: number
  }
}

const Computer: React.FC<Props> = ({ computer }) => {
  const startTime = moment(computer.startTime)
  const isBefore = startTime.isBefore(moment().subtract(2, 'hours'))
    ? true
    : false

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75px',
        height: '75px',
        background: isBefore ? 'green' : 'red',
        color: '#fff',
        gridArea: 'item' + computer.computerId,
        fontSize: '2em'
      }}
    >
      <div>{computer.computerId}</div>
    </div>
  )
}

export default Computer
