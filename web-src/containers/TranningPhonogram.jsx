import React from 'react'
import { Steps } from 'antd'
const { Step } = Steps

import Selector from '@components/Selector'

class TranningPhonogram extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-content">
        <Steps className="learning-steps" progressDot current={0} direction="vertical">
          <Step title="选择学习区间" description="This is a description." />
          <Step title="学习中" description="This is a description." />
          <Step title="学习完成" description="This is a description." />
        </Steps>
        <div className="panel-wrapper">
          <div className="panel">
            <div className="title">请选择需要学习的音标区间：</div>
            <Selector />
          </div>

        </div>
      </div>
    )
  }
}

export default TranningPhonogram