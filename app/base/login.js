/**
 * 登录
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import { WingBlank, WhiteSpace, InputItem, Toast, Button } from 'antd-mobile'
import { createForm } from 'rc-form'

@createForm()
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * 登录
   */
  login = () => {
    this.props.form.validateFields({ force: true }, (error, values) => {
      if (error) {
        return
      }
      console.log(values)
      this.props.history.push('/')
    })
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className="login-wrap">
        <div className="login-content">
          <WingBlank>
            <h2>登录</h2>
            <InputItem
              {...getFieldProps('username', {
                rules: [{ required: true, message: '请输入账号' }],
              })}
              error={!!getFieldError('username')}
              onErrorClick={() => Toast.fail(getFieldError('username'))}
              type="user"
              placeholder="请输入账号"
            >手机号码</InputItem>
            <WhiteSpace size="lg" />
            <InputItem
              {...getFieldProps('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })}
              error={!!getFieldError('password')}
              onErrorClick={() => Toast.fail(getFieldError('password'))}
              type="password"
              placeholder="请输入密码"
            >密码</InputItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.login}>登录</Button>
          </WingBlank>
        </div>
      </div>
    )
  }
}
