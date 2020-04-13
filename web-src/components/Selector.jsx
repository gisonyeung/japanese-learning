import React from 'react'
import PropTypes from 'prop-types'

import '@style/selector.less'

const calSumIndex = (index) => {
  return (index[0] + 1) * 5 + (index[1] + 1)
}

class Selector extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    dataSet: PropTypes.array,
    onChange: PropTypes.func,
  }

  state = {
    startIndex: [],
    endIndex: []
  }

  reset = () => {
    this.setState({
      startIndex: [],
      endIndex: []
    })
  }

  onClick = (data) => {
    return (e) => {
      let mutation = {
        startIndex: this.state.startIndex,
        endIndex: this.state.endIndex,
      }

      if (!mutation.startIndex.length) { // 选择起始点
        mutation.startIndex = data
      } else if (!mutation.endIndex.length) { // 选择结束点
        let startSumIndex = calSumIndex(mutation.startIndex)
        let endSumIndex = calSumIndex(data)

        if (endSumIndex < startSumIndex) {
          mutation = {
            startIndex: data,
            endIndex: mutation.startIndex
          }
        } else {
          mutation.endIndex = data
        }

      } else if (data.toString() === mutation.startIndex.toString() && data.toString() === mutation.endIndex.toString()) { // 取消选择起始点
        mutation = {
          startIndex: [],
          endIndex: [],
        }
      } else {
        let startSumIndex = calSumIndex(mutation.startIndex)
        let endSumIndex = calSumIndex(mutation.endIndex)
        let currentSumIndex = calSumIndex(data)

        if (currentSumIndex < startSumIndex) {
          mutation.startIndex = data
        } else {
          mutation.endIndex = data
        }
      }

      this.setState(mutation)

      // 收集选中列表
      this.collectSelected(mutation)
    }
  }

  collectSelected = (mutation) => {
    let res = []

    this.props.dataSet.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        if (this.isBetween([rowIndex, colIndex], mutation)) {
          res.push([rowIndex, colIndex])
        }
      })
    })

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(res)
    }

  }

  isBetween = (currentIndex, mutation) => {
    let obj = mutation || this.state

    obj.startIndex = obj.startIndex || []
    obj.endIndex = obj.endIndex || []

    if (!obj.startIndex.length) return false

    if (!obj.endIndex.length) {
      return currentIndex.toString() === obj.startIndex.toString()
    }

    let _startSumIndex = calSumIndex(obj.startIndex)
    let _endSumIndex = calSumIndex(obj.endIndex)

    let minIndex = Math.min(_startSumIndex, _endSumIndex)
    let maxIndex = Math.max(_startSumIndex, _endSumIndex)
    currentIndex = calSumIndex(currentIndex)

    return currentIndex >= minIndex && currentIndex <= maxIndex
  }

  render() {
    return (
      <div className="selector">
        {
          this.props.dataSet.map((row, rowIndex) => {
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