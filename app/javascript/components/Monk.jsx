import React from 'react'

export default class Monk extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <span
        style={{
          fontSize: '70px'
        }}
      >
        ☻
      </span>
    )
  }
}
