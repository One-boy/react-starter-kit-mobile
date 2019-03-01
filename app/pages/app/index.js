
/**
 * app 包裹
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    children: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div className="app-wrap">
        <WingBlank>
          <WhiteSpace size="xl" />
          <Button type="primary" onClick={this.props.history.goBack}>返回</Button>
          <WhiteSpace size="xl" />
          {this.props.children}
          <WhiteSpace size="xl" />
        </WingBlank>
      </div>
    )
  }
}

// 导出示例功能
import camera from './camera'
import camcorder from './camcorder'
export {
  camera,
  camcorder,
}