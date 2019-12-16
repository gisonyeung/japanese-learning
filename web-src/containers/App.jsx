import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Button, message, Tooltip } from 'antd'
const { Header, Content } = Layout

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: '#fff' }}>
            <div className="header-logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </div>
    )
  }
}

export default App