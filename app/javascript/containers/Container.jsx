import React, { useState, useEffect } from 'react'
import { Board } from '../components/Board'
import { observe } from '../components/Game'
import { GameContainer } from './GameContainer'

export const Container = () => {
  // let { monkPosition, b1Position, monks, boards } = this.state

  const [monkPos, setMonkPos] = useState([1, 7])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setMonkPos(newPos)))
  return (
    <div>
      <Board knightPosition={monkPos} />
    </div>
  )
}
