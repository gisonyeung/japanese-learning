import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon, Button, message, Tooltip } from 'antd'
const { Sider, Content } = Layout

import Home from './Home'
import TranningPhonogram from './TranningPhonogram'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="line-wrapper">
          <div className="line line-top"></div>
          <div className="line line-right"></div>
          <div className="line line-bottom"></div>
          <div className="line line-left"></div>
        </div>
        <div className="brand-wrapper">
          <div className="brand-logo"></div>
          <font className="brand-desc">石のうえ<br />にも三年</font>
        </div>
        <div className="toggle-menu">
          <span className="open"></span>
          <span className="close"></span>
        </div>
        <div className="content">
          <Switch>
            <Route path="/phonogram">
              <TranningPhonogram />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App