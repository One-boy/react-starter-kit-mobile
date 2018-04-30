/**
 * 首页
 * 
 */
/* eslint  react/prop-types:0*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, WingBlank, WhiteSpace } from 'antd-mobile'

import { Connect } from '@components/store'


@Connect((store) => ({
  config: store.config,
}))
export default class TestStore extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.appData = [
      {
        text: '调用相机/摄像机/图库',
        icon: 'resource/image/app.png',
        route: '/app/camera'
      },
      {
        text: '控制相机/摄像机',
        icon: 'resource/image/app.png',
        route: '/app/camcorder'
      },
    ]
  }

  /**
   * 更新store数据
   */
  onUpdate = () => {
    const { storeHandle } = this.props
    storeHandle && storeHandle.setStore('config', {
      name: new Date(Date.now()).toLocaleString('zh-cn', {
        timeZone: 'Asia/Shanghai',
        hour12: false,
      })
    })
  }

  /**
   * 点击app去对应的路由
   */
  onClick = (e) => {
    if (e.route) {
      this.props.history.push(e.route)
    }
  }
  render() {
    return (
      <div className="home-wrap" >
        <WingBlank>
          <h2>Home 组件</h2>
          <Button type="primary" onClick={() => { this.props.history.goBack() }}>返回登陆页</Button>
          <WhiteSpace size="lg" />
          <Button onClick={this.onUpdate}>更新store</Button>
          <WhiteSpace size="lg" />
          {this.props.config && this.props.config.name}
          <div>

            <div className="sub-title">示例功能列表</div>
            <Grid onClick={this.onClick} data={this.appData} columnNum={3} />
          </div>
        </WingBlank>
      </div>
    )
  }
}

TestStore.propTypes = {
  config: PropTypes.object,
}
