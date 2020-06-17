import React, { Component } from 'react'
import Cell from '../components/Cell'

export default class MonkContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cells: this.setCellsData()
    }

    this.handleCellClick = this.handleCellClick.bind(this)
  }

  componentDidMount() {
    // this.renderMonks()
  }

  componentDidUpdate() {}

  // prettier-ignore
  setCellsData() {
    let cellsData = [];

    (64).times((i) => {
      let cell = {}

      cell.id = i
      cell.monk = false
      cell.color = ''

      cell.monk = {
        side: 'white',
        color: 'purple'
      }

      if (i <= 7) {
        cell.monk = true
        cell.color = 'white'
      }

      if (i >= 56 && i <= 63) {
        cell.monk = true
        cell.color = 'black'
      }

      cellsData.push(cell)
    })

    return cellsData
  }

  // renderMonks() {}

  handleCellClick(id, monk) {
    console.log(id, monk)

    const { cells } = this.state
    let newCells = []

    cells.forEach(cell => {
      if (id == 5) {
        if (cell.id == 5) {
          cell.monk = false
          cell.color = ''
        }

        if (cell.id == 45) {
          cell.monk = true
          cell.color = 'white'
        }
      }

      newCells.push(cell)
    })

    this.setState({
      cells: newCells
    })
  }

  render() {
    const { cells } = this.state
    let cellElements = []

    cells.forEach(cell => {
      cellElements.push(
        <Cell {...cell} handleClick={this.handleCellClick} key={cell.id} />
      )
    })

    return <div className="MonkContainer">{cellElements}</div>
  }
}
