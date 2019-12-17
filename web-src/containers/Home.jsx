import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon, Button, message, Tooltip } from 'antd'
const { Sider, Content } = Layout

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className="main-content">
        <div className="home-info-wrapper">
          <div className="home-logo"></div>
          <div className="home-title">欢迎来到日语学习小程序，请选择您的学习内容:</div>
          <div className="home-sub-title">(日本語ミニプログラムへいらっしゃいませ！勉強したいプランをご自由に選んでください:)</div>
        </div>
        <div className="home-select-wrapper">
          <div className="home-section home-section-1">
            <div className="home-btn">
              <div className="prefix-icon"><font>音</font></div>
              <font>五十音 · 记忆强化训练</font>
            </div>
            <div className="home-btn">
              <div className="prefix-icon"><font>词</font></div>
              <font>单词 · 记忆强化训练</font>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home