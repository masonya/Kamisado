import React, { Component } from 'react'
import MonkChipB0018F2 from './colors/MonkChipB0018F2.svg'
import MonkChipB39FF88 from './colors/MonkChipB39FF88.svg'
import MonkChipB02C0FE from './colors/MonkChipB02C0FE.svg'
import MonkChipB9773FF from './colors/MonkChipB9773FF.svg'
import MonkChipBC6C6C6 from './colors/MonkChipBC6C6C6.svg'
import MonkChipBFF004D from './colors/MonkChipBFF004D.svg'
import MonkChipBFF814B from './colors/MonkChipBFF814B.svg'
import MonkChipBFBD616 from './colors/MonkChipBFBD616.svg'

import MonkChipW0018F2 from './colors/MonkChipW0018F2.svg'
import MonkChipW39FF88 from './colors/MonkChipW39FF88.svg'
import MonkChipW02C0FE from './colors/MonkChipW02C0FE.svg'
import MonkChipW9773FF from './colors/MonkChipW9773FF.svg'
import MonkChipWC6C6C6 from './colors/MonkChipWC6C6C6.svg'
import MonkChipWFF004D from './colors/MonkChipWFF004D.svg'
import MonkChipWFF814B from './colors/MonkChipWFF814B.svg'
import MonkChipWFBD616 from './colors/MonkChipWFBD616.svg'
import MonkChipPath from './colors/MonkChipPath.svg'

export default class Monk extends Component {
  constructor(props) {
    super(props)
    // собираем стиль клекти
    this.MonkCSS = 'MonkChip'
    this.MonkSrc = MonkChipPath // этой фигурой рисуем путь куда можно ходить
  }

  render() {
    const { player, monkColor, monkCSS } = this.props

    if (player === 'white') {
      this.MonkCSS = monkCSS
      switch (monkColor) {
        case '0018F2':
          this.MonkSrc = MonkChipW0018F2
          break
        case '39FF88':
          this.MonkSrc = MonkChipW39FF88
          break
        case '02C0FE':
          this.MonkSrc = MonkChipW02C0FE
          break
        case '9773FF':
          this.MonkSrc = MonkChipW9773FF
          break
        case 'C6C6C6':
          this.MonkSrc = MonkChipWC6C6C6
          break
        case 'FF004D':
          this.MonkSrc = MonkChipWFF004D
          break
        case 'FF814B':
          this.MonkSrc = MonkChipWFF814B
          break
        default:
          // FBD616
          this.MonkSrc = MonkChipWFBD616
          break
      }
    } else if (player === 'O') {
      this.MonkSrc = MonkChipPath
      this.MonkCSS = 'MonkPathCSS'
    } else {
      this.MonkCSS = monkCSS
      switch (monkColor) {
        case '0018F2':
          this.MonkSrc = MonkChipB0018F2
          break
        case '39FF88':
          this.MonkSrc = MonkChipB39FF88
          break
        case '02C0FE':
          this.MonkSrc = MonkChipB02C0FE
          break
        case '9773FF':
          this.MonkSrc = MonkChipB9773FF
          break
        case 'C6C6C6':
          this.MonkSrc = MonkChipBC6C6C6
          break
        case 'FF004D':
          this.MonkSrc = MonkChipBFF004D
          break
        case 'FF814B':
          this.MonkSrc = MonkChipBFF814B
          break
        default:
          // FBD616
          this.MonkSrc = MonkChipBFBD616
          break
      }
    }

    return <img src={this.MonkSrc} className={this.MonkCSS} alt="Monk" />
  }
}
