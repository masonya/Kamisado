import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from '../containers/GameBoard'
import { ActionCableProvider } from 'react-actioncable-provider'

Number.prototype.times = function(cb) {
  var i = -1

  while (++i < this) {
    cb(i)
  }

  return +this
}

class MonkGame extends React.Component {
  render() {
    return (
      <ActionCableProvider url="ws://localhost:3000/cable">
        <GameBoard />
      </ActionCableProvider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(MonkGame, null),
    document.body.appendChild(document.createElement('div'))
  )
})
