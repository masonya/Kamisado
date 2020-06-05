import React, { Component } from 'react'
import Monk from '../components/Monk'
import B1 from '../components/Monk'
import Square from '../components/Square'
import Board from '../components/Board'
import Game from '../components/Game'

export default class GameContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boards: {
        b1Positions: [],
        id: []
      },
      monks: {
        monkPosition: [1, 4],
        b1Position: [3, 3]
      }
    }

    this.changePosition = this.changePosition.bind(this)
    this.changeB1Position = this.changeB1Position.bind(this)
    this.preloadBoard = this.preloadBoard.bind(this)
    this.handleChangeB1Position = this.handleChangeB1Position.bind(this)
    // this.generateId = this.generateId.bind(this)

    // this.getMonks = this.getMonks.bind(this)
  }

  componentDidMount() {
    this.preloadBoard()
  }

  preloadBoard() {
    fetch(`http://localhost:3000/api/boards/index.json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)

        // let boards = this.state
        let { b1Positions, boards, id } = this.state
        boards.b1Positions = []

        data.forEach((b1Position, i) => {
          boards.b1Positions.push(b1Position.b1X, b1Position.b1Y)
        })

        data.forEach((board, i) => {
          boards.id = board.id
        })

        this.setState({
          boards
        })
      })
  }

  changePosition() {
    let { monkPosition, monks } = this.state

    monks.monkPosition = [2, 5]

    this.setState({
      monks
    })
  }

  changeB1Position(id, b1Position) {
    let { b1Positions, boards } = this.state

    console.log(boards.b1Positions)

    boards.b1Positions = [2, 3]

    let x = boards.b1Positions[0]
    let y = boards.b1Positions[1]

    this.setState({
      boards
    })

    fetch(`http://localhost:3000/api/boards/${boards.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board: { b1X: x, b1Y: y, b1Position: null }
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  handleChangeB1Position() {
    this.changeB1Position()
  }

  // generateId() {
  //   let array = new Uint32Array(8)
  //   window.crypto.getRandomValues(array)
  //   let str = ''
  //   for (let i = 0; i < array.length; i++) {
  //     str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
  //   }
  //   return str
  // }

  // getMonks() {
  //   let { monks } = this.state
  //   monks = 35
  //
  //   this.setState({
  //     monks
  //   })
  // }

  // getMonks(search) {
  //   fetch(`http://localhost:3000/api/monks/${id}.json`)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //
  //       this.setState({ autocomplete_cities: data })
  //     })
  //
  //   let { monks } = this.state
  //   monks.push(monk)
  //
  //   this.setState({
  //     monks
  //   })
  // }

  render() {
    let { monkPosition, b1Position, monks, boards } = this.state

    return (
      <div>
        <Board
          monkPosition={monks.monkPosition}
          b1Position={boards.b1Positions}
        />
        <div onClick={this.changePosition}>Monk1</div>
        <div onClick={this.handleChangeB1Position}>B1</div>
      </div>
    )
  }
}
