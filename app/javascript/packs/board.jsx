import React from 'react'
import ReactDOM from 'react-dom'
import Board from '../components/Board'
import { observe } from '../components/Game'
import GameContainer from '../containers/GameContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

document.addEventListener('DOMContentLoaded', () => {
  // const root = document.getElementById('root')

  // observe(monkPosition =>
  ReactDOM.render(
    // <Board monkPosition={monkPosition} />,

    <DndProvider backend={HTML5Backend}>
      <GameContainer />
    </DndProvider>,

    document.body.appendChild(document.createElement('div'))
    // root
  )
  // )

  // ReactDOM.render(
  //   <Board monkPosition={[0, 0]} />,
  //   document.body.appendChild(document.createElement('div'))
  // )
})
