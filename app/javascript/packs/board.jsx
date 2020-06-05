import React from 'react'
import ReactDOM from 'react-dom'
import Board from '../components/Board'
import { observe } from '../components/Game'
import GameContainer from '../containers/GameContainer'

document.addEventListener('DOMContentLoaded', () => {
  // const root = document.getElementById('root')

  // observe(monkPosition =>
  ReactDOM.render(
    // <Board monkPosition={monkPosition} />,
    <GameContainer />,
    document.body.appendChild(document.createElement('div'))
    // root
  )
  // )

  // ReactDOM.render(
  //   <Board monkPosition={[0, 0]} />,
  //   document.body.appendChild(document.createElement('div'))
  // )
})
