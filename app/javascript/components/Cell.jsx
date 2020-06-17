import React, { Component } from 'react'
import Monk from './MonkChip'

export default class Cell extends Component {
  constructor(props) {
    super(props)

    this.classnames = 'Cell cellColor' + this.props.id // цвет заливки клетки = cellColor + порядковый номер клетки

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.id)
  }

  renderMonk() {
    return <Monk {...this.props} />
  }

  render() {
    const { player } = this.props

    let Chip = ''

    if (player !== '') {
      Chip = this.renderMonk()
    }

    return (
      <div className={this.classnames} onClick={this.handleClick}>
        {Chip}
      </div>
    )
  }
}
