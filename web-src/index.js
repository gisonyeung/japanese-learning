/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'

import App from '@containers/App'

import '@style/index.less'

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App}>
      <Route exact path="/" component={App} />
    </Route>
  </HashRouter>
  , document.getElementById('app'))
