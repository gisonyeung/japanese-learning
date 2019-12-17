/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

import App from '@containers/App'
import Home from '@containers/Home'

import '@style/index.less'

ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>
  , document.getElementById('app'))
