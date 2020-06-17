import React, { Component } from 'react'
import Cell from '../components/Cell'
import { ActionCable } from 'react-actioncable-provider'

export default class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cellsState: [],
      startCellState: 100
    }

    // this.setCellsData = this.setCellsData.bind(this)
    // this.renderMonks = this.renderMonks.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.renderBoardData = this.renderBoardData.bind(this)
    this.setCellsData = this.setCellsData.bind(this)
    this.handleReceivedGame = this.handleReceivedGame.bind(this)
  }

  renderBoardData() {
    fetch(`http://localhost:3000/api/game_boards/index.json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)

        let { cellsState } = this.state.cellsState
        let { startCellState } = this.state.startCellState
        cellsState = []

        data.forEach((game_board, i) => {
          cellsState.push(game_board.cells_state)
        })

        data.forEach((game_board, i) => {
          startCellState = game_board.start_cell_state
        })

        let cellsStateJson = JSON.parse(cellsState)

        console.log(cellsStateJson, startCellState)

        this.setState({
          cellsState: cellsStateJson,
          startCellState
        })
      })
  }

  componentDidMount() {
    // this.renderMonks()
    this.renderBoardData()
  }

  componentDidUpdate() {}

  setCellsData() {
    let coronaColors = [
      'FF814B',
      '0018F2',
      '9773FF',
      '39FF88',
      'FBD616',
      '02C0FE',
      'FF004D',
      'C6C6C6'
    ]
    let cellsData = []

    ;(64).times(i => {
      let cell = {}
      cell.id = i
      cell.monk = false
      cell.player = ''
      cell.monkColor = ''
      cell.monkCSS = 'MonkChip'

      if (i <= 7) {
        cell.monk = true
        cell.player = 'white'
        cell.monkColor = coronaColors[i]
      }

      if (i >= 56 && i <= 63) {
        cell.monk = true
        cell.player = 'black'
        cell.monkColor = coronaColors[63 - i] // цвета корон черных фишек расположены в обратном порядке
      }

      cellsData.push(cell)
    })

    let cellsStateStr = JSON.stringify(cellsData)

    fetch(`http://localhost:3000/api/game_boards/1.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_board: { cells_state: cellsStateStr, start_cell_state: 100 }
      })
    })
      // .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })

    this.setState({
      cellsState: cellsData,
      startCellState: 100
    })
  }

  handleCellClick(id) {
    console.log(id)

    let cellsState = this.state.cellsState.slice()
    let clkCell = cellsState[id]
    let startCellId = this.state.startCellState

    if (clkCell.monk) {
      if (startCellId === 100) {
        startCellId = clkCell.id
        clkCell.monkCSS = 'MonkChipRotate'
        this.showDirection(id, clkCell.player, true)
      } else if (startCellId === clkCell.id) {
        startCellId = 100
        clkCell.monkCSS = 'MonkChip'
        this.showDirection(id, clkCell.player, false)
      } else {
        this.showDirection(
          startCellId,
          this.state.cellsState[startCellId].player,
          false
        )
        this.state.cellsState[startCellId].monkCSS = 'MonkChip'
        startCellId = clkCell.id
        clkCell.monkCSS = 'MonkChipRotate'
        this.showDirection(id, clkCell.player, true)
      }
    } else {
      if (startCellId !== 100) {
        if (this.state.cellsState[id].player === 'O') {
          this.showDirection(
            startCellId,
            this.state.cellsState[startCellId].player,
            false
          )

          this.moveMonk(startCellId, id)
          startCellId = 100
        }

        let cellsState = this.state.cellsState
        let startCellState = this.state.startCellState

        let cellsStateStr = JSON.stringify(cellsState)

        fetch(`http://localhost:3000/api/game_boards/1.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            game_board: {
              cells_state: cellsStateStr,
              start_cell_state: startCellState
            }
          })
        })
          // .then(response => response.json())
          .then(data => {
            console.log('Success:', data)
          })
          .catch(error => {
            console.error('Error:', error)
          })
      }
    }

    this.setState({
      startCellState: startCellId
    })
  }

  // rotateBoard(cellsState){
  //
  //   let arr = [];
  //   let j = 0
  //   for( let i = cellsState.length; i--; ){
  //       cellsState[i].id = j;
  //       arr.push( cellsState[i] );
  //       j++;
  //   }
  //   return arr;
  // }

  showDirection(cellId, player, show) {
    let cellsState = this.state.cellsState.slice()
    let tmpCellsState = []
    let newCellsState = []

    if (player === 'white') {
      tmpCellsState = cellsState
    } else {
      tmpCellsState = this.rotateBoard(cellsState)
      cellId = 63 - cellId
    }

    let curCellId = cellId
    let curCellIdDR = cellId
    let curCellIdDL = cellId

    // цикл обработки позиции на игровой доске
    tmpCellsState.forEach(cell => {
      // рассчитываем движение вперед
      if (cell.id === curCellId + 8) {
        if (!cell.monk) {
          // если клетка не занята
          if (show) {
            // показать маршрут
            cell.player = 'O'
          } else {
            // погасить маршрут
            cell.player = ''
          }
          curCellId += 8
        } else {
          curCellId = 100 // после первого препятствия прекращаем построение маршрута
        }
      }

      // рассчитываем движение по диаганали вправо
      // если фишка стоит в крайней правой колонке, то пути вправо для нее нет
      if (
        cellId !== 7 &&
        cellId !== 15 &&
        cellId !== 23 &&
        cellId !== 31 &&
        cellId !== 39 &&
        cellId !== 47 &&
        cellId !== 55 &&
        cellId !== 63
      ) {
        if (cell.id === curCellIdDR + 9) {
          // показываем или прячем маршрут
          if (!cell.monk) {
            // если клетка не занята
            if (show) {
              // показать маршрут
              cell.player = 'O'
            } else {
              // спрятать маршрут
              cell.player = ''
            }
            curCellIdDR += 9
          } else {
            curCellIdDR = 100 // после первого препятствия прекращаем построение маршрута
          }

          // Если достигли одной из крайних правых клеток доски, то прекращаем построение маршрута
          if (
            curCellIdDR === 7 ||
            curCellIdDR === 15 ||
            curCellIdDR === 23 ||
            curCellIdDR === 31 ||
            curCellIdDR === 39 ||
            curCellIdDR === 47 ||
            curCellIdDR === 55 ||
            curCellIdDR === 63
          ) {
            curCellIdDR = 100
          }
        }
      }

      // рассчитываем движение по диаганали влево
      // если фишка стоит в крайней левой колонке, то пути влево для нее нет
      if (
        cellId !== 0 &&
        cellId !== 8 &&
        cellId !== 16 &&
        cellId !== 24 &&
        cellId !== 32 &&
        cellId !== 40 &&
        cellId !== 48 &&
        cellId !== 56
      ) {
        if (cell.id === curCellIdDL + 7) {
          // показываем или прячем маршрут
          if (!cell.monk) {
            // если клетка не занята
            if (show) {
              // показать маршрут
              cell.player = 'O'
            } else {
              // спрятать маршрут
              cell.player = ''
            }
            curCellIdDL += 7
          } else {
            curCellIdDL = 100 // после первого препятствия прекращаем построение маршрута
          }
          // Если достигли одной из крайних левых клеток доски, то прекращаем построение маршрута
          if (
            curCellIdDL === 0 ||
            curCellIdDL === 8 ||
            curCellIdDL === 16 ||
            curCellIdDL === 24 ||
            curCellIdDL === 32 ||
            curCellIdDL === 40 ||
            curCellIdDL === 48 ||
            curCellIdDL === 56
          ) {
            curCellIdDL = 100
          }
        }
      }

      newCellsState.push(cell)
    })

    if (player === 'white') {
      cellsState = newCellsState
    } else {
      cellsState = this.rotateBoard(newCellsState)
    }

    this.setState({
      cellsState: cellsState
    })
  }

  moveMonk(start, target) {
    let cellsState = this.state.cellsState.slice()
    let tmpCellsState = []
    let newCellsState = []
    let player = cellsState[start].player
    let monkColor = cellsState[start].monkColor

    if (player === 'white') {
      tmpCellsState = cellsState
    } else {
      tmpCellsState = this.rotateBoard(cellsState)
      start = 63 - start
      target = 63 - target
    }

    tmpCellsState.forEach(cell => {
      if (cell.id === target) {
        cell.monk = true
        cell.player = player
        cell.monkColor = monkColor
        cell.monkCSS = 'MonkChip'
      }

      if (cell.id === start) {
        cell.monk = false
        cell.player = ''
        cell.monkColor = ''
        cell.monkCSS = 'MonkChip'
      }

      newCellsState.push(cell)
    })

    if (player === 'white') {
      cellsState = newCellsState
    } else {
      cellsState = this.rotateBoard(newCellsState)
    }

    this.setState({
      cellsState: cellsState
    })
  }

  handleReceivedGame(data) {
    let cellsState = this.state.cellsState
    let startCellState = this.state.startCellState

    let dataObj = JSON.parse(data)

    cellsState = dataObj.cells_state
    startCellState = dataObj.start_cell_state

    let cellsStateObj = JSON.parse(cellsState)

    this.setState({
      cellsState: cellsStateObj,
      startCellState
    })
  }

  render() {
    const { cellsState } = this.state

    let boardCells = []

    cellsState.forEach(cell => {
      boardCells.push(
        <Cell
          {...cell}
          onClick={this.handleCellClick}
          key={cell.id}
          rotateID={this.startCellState}
        />
      )
    })

    return (
      <div className="MainArea">
        <div className="text">
          Передвигайте фигурки вперед (прямо или по диагонали) <br />
          на любое количество клеток по прямой линии. Но цвет клетки, на которой
          завершится ход, определяет, какого цвета фигурку будет передвигать ваш
          противник в свой ход.
          <br />
          <br />
          Ваша задача — первым довести одну из своих фишек <br />
          до противоположного ряда, занятого соперником.{' '}
        </div>
        <div className="newGame" onClick={this.setCellsData}>
          НОВАЯ ИГРА
        </div>
        <div className="GameBoard">{boardCells}</div>

        <ActionCable
          channel={{ channel: 'GameChannel' }}
          onReceived={this.handleReceivedGame}
        />
      </div>
    )
  }
}
