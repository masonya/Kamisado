import React from 'react'
import Monk from '../components/Monk'
import B1 from '../components/B1'
import Square from '../components/Square'
import { canMoveMonk, moveMonk } from '../components/Game'

// function handleSquareClick(toX, toY) {
//   if (canMoveMonk(toX, toY)) {
//     moveMonk(toX, toY)
//   }
// }

function renderSquare(i, [monkX, monkY], [b1X, b1Y]) {
  const x = i % 8
  const y = Math.floor(i / 8)

  const isMonkHere = x === monkX && y === monkY
  const isB1Here = x === b1X && y === b1Y
  // const black = (x + y) % 2 === 1
  const piece = isMonkHere ? <Monk /> : null
  const piece1 = isB1Here ? <B1 /> : null
  const square_id = i
  const square_class = 'square_' + square_id

  return (
    <div
      key={i}
      className={square_class}
      style={{ width: '12.5%', height: '12.5%' }}
      // onClick={() => handleSquareClick(x, y)}
      x={x}
      y={y}
    >
      <Square>
        {piece}
        {piece1}
        {square_id}
      </Square>
    </div>
  )
}

export default function Board({ monkPosition, b1Position }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, monkPosition, b1Position))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}
