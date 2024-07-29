import * as React from 'react'
import { useState } from 'react'

const App:React.FC = () => {
  const [count, setcount] = useState(0)

  const incCount = (count: number) => {
    const incCounter = count + 1
    setcount(incCounter)
  }

  return (
    <>
      <button style={{
        padding: '4px',
        color: 'green'
      }} onClick={() => incCount(count)}> Counter </button>

      <h3> Counter incremented to {count} </h3>
    </>
  )
}

export default App
