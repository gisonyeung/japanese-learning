import React from 'react'
import { Steps } from 'antd'
const { Step } = Steps

import Selector from '@components/Selector'
import Button from '@components/Button'
import { phonogramList } from '@constants'

class TranningPhonogram extends React.Component {
  constructor(props) {
    super(props)

    this.selector = React.createRef()
  }

  state = {
    selectList: [],
    step: 0
  }

  onSelectChange = (e) => {
    this.setState({
      selectList: e
    })
  }

  reset = () => {
    console.log(this.selector)
    this.selector.current.reset()

    this.setState({
      selectList: []
    })
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  render() {
    return (
      <div className="main-content">
        <Steps className="learning-steps" progressDot current={this.state.step} direction="vertical">
          <Step title="选择学习区间" description="This is a description." />
          <Step title="学习中" description="This is a description." />
          <Step title="学习完成" description="This is a description." />
        </Steps>
        <div className="panel-wrapper">
          {
            this.state.step === 0 ?
              <section className="panel">
                <div className="title">请选择需要学习的音标区间：</div>
                <Selector ref={this.selector} dataSet={phonogramList} onChange={this.onSelectChange} />
                <div className="desc">已选择<font>{this.state.selectList.length}</font>个音标</div>
                <div className="btn-wrapper">
                  <Button
                    style={{ marginRight: '10px' }}
                    onClick={this.reset}
                  >重新选择</Button>
                  <Button
                    type="primary"
                    showArrow={true}
                    onClick={this.nextStep}
                  >开始学习</Button>
                </div>
              </section> : null
          }
          {
            this.state.step === 1 ?
              <section className="panel">

              </section> : null
          }
        </div>
      </div>
    )
  }
}

export default TranningPhonogram