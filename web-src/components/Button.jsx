import React from 'react'
import PropTypes from 'prop-types'

import '@style/button.less'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    type: PropTypes.string,
    showArrow: PropTypes.bool,
    onClick: PropTypes.func
  }

  onClick = () => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button
        className={`btn ${this.props.type ? `btn-${this.props.type}` : ''} ${this.props.showArrow ? 'btn-arrow' : ''}`}
        style={this.props.style}
        onClick={this.onClick}
      >{this.props.children}</button>
    )
  }
}

export default Button