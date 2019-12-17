import React from 'react'

import '@style/selector.less'

const calSumIndex = (index) => {
  return (index[0] + 1) * 5 + (index[1] + 1)
}

class Selector extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    dataSet: [
      [
        "あ",
        "い",
        "う",
        "え",
        "お"
      ],
      [
        "か",
        "き",
        "く",
        "け",
        "こ"
      ],
      [
        "さ",
        "し",
        "す",
        "せ",
        "そ"
      ],
      [
        "た",
        "ち",
        "つ",
        "て",
        "と"
      ],
      [
        "な",
        "に",
        "ぬ",
        "ね",
        "の"
      ],
      [
        "は",
        "ひ",
        "ふ",
        "へ",
        "ほ"
      ],
      [
        "ま",
        "み",
        "む",
        "め",
        "も"
      ],
      [
        "や",
        "(い)",
        "ゆ",
        "(え)",
        "よ"
      ],
      [
        "ら",
        "り",
        "る",
        "れ",
        "ろ"
      ],
      [
        "わ",
        "(い)",
        "(う)",
        "(え)",
        "を"
      ]
    ],
    startIndex: [],
    endIndex: []
  }

  onClick = (data) => {
    return (e) => {
      if (!this.state.startIndex.length) { // 选择起始点
        this.setState({
          startIndex: data
        })
      } else if (!this.state.endIndex.length) { // 选择结束点
        let startSumIndex = calSumIndex(this.state.startIndex)
        let endSumIndex = calSumIndex(data)

        if (endSumIndex < startSumIndex) {
          this.setState({
            startIndex: data,
            endIndex: this.state.startIndex
          })
        } else {
          this.setState({
            endIndex: data
          })
        }

      } else if (data.join('') === this.state.startIndex.join('') && data.join('') === this.state.endIndex.join('')) { // 取消选择起始点
        this.setState({
          startIndex: [],
          endIndex: [],
        })
      } else {
        let startSumIndex = calSumIndex(this.state.startIndex)
        let endSumIndex = calSumIndex(this.state.endIndex)
        let currentSumIndex = calSumIndex(data)

        if (currentSumIndex < startSumIndex) {
          this.setState({
            startIndex: data
          })
        } else {
          this.setState({
            endIndex: data
          })
        }
      }
    }
  }

  isBetween = (currentIndex) => {
    if (!this.state.startIndex.length) return false;

    if (!this.state.endIndex.length) {
      return currentIndex.join('') === this.state.startIndex.join('')
    }

    let _startSumIndex = calSumIndex(this.state.startIndex)
    let _endSumIndex = calSumIndex(this.state.endIndex)

    let minIndex = Math.min(_startSumIndex, _endSumIndex)
    let maxIndex = Math.max(_startSumIndex, _endSumIndex)
    currentIndex = calSumIndex(currentIndex)

    return currentIndex >= minIndex && currentIndex <= maxIndex
  }

  render() {
    return (
      <div className="selector">
        {
          this.state.dataSet.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="selector-row">
                {
                  row.map((val, colIndex) => {
                    return (
                      <div
                        key={colIndex}
                        className={[
                          'selector-item',
                          this.isBetween([rowIndex, colIndex]) ? 'selector-item-select' : ''
                        ].join(' ')}
                        onClick={this.onClick([rowIndex, colIndex])}
                      >{val}</div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Selector