/**
 * 使用html5 canvas+js控制手机或电脑的摄像头，并截图的示例
 * 使用新的MediaDevices.getUserMedia方法，当然Navigator.getUserMedia()方法已被废弃，你需要做好兼容
 */
import React, { Component } from 'react'
import { Button } from 'antd-mobile'
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.init()
  }

  /**
   * 初始化
   */
  init = () => {
    const constraints = {
      video: true,
    }
    this.getUserMediaFunc(constraints).then(mediaStream => {
      this.log('获取到视频流')
      this.playVideo(mediaStream)
    }).catch(error => {
      this.log(`获取到错误：${error.message || error.name || '无法获得错误详情'} `)
      console.log('调用出错', error)
    })
  }

  /**
   * 播放
   */
  playVideo = (stream) => {
    if (!this.videoNode) {
      throw new Error('没有找到video node')
    }
    this.log('开始播放视频')
    this.videoNode.oncanplay = () => {
      this.log('播放正常。')
      this.videoNode.play()
    }
    // 旧的浏览器可能没有srcObject
    if ('srcObject' in this.videoNode) {
      this.log('srcObject in video node')
      this.videoNode.srcObject = stream
    } else {
      this.log('window.URL.createObjectURL is ok')
      // 防止再新的浏览器里使用它，应为它已经不再支持了
      this.videoNode.src = window.URL.createObjectURL(stream)
    }

  }

  /**
   * 获取方法
   */
  getUserMediaFunc = (constraints) => {
    return new Promise((resolve, reject) => {
      // this.log(Object.keys(navigator.__proto__))
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.log('获取到1方法')
        navigator.mediaDevices.getUserMedia(constraints).then(resolve).catch(reject)
      } else if (navigator.getUserMedia) {
        this.log('获取到2方法')
        navigator.getUserMedia(constraints, resolve, reject)
      } else if (navigator.webkitGetUserMedia) {
        this.log('获取到3方法')
        navigator.webkitGetUserMedia(constraints, resolve, reject)
      } else {
        reject(new Error('无法支持的设备'))
      }


    })
  }

  /**
   * 拍照
   */
  capture = () => {
    if (this.canvasNode && this.videoNode) {
      const ctx = this.canvasNode.getContext('2d')
      ctx.clearRect(0, 0, 345, 258)
      ctx.drawImage(this.videoNode, 0, 0, 345, 258)
    }
  }

  /**
   * 日志输出
   */
  log = (text) => {
    this.setState(state => ({
      logs: `${state.logs || ''} ${text}`
    }))
  }
  render() {
    const canvasStyle = {
      border: '1px solid #ccc'
    }
    const { logs } = this.state
    return (
      <div>
        <h4>使用html5 canvas+js控制手机或电脑的摄像头，并截图的示例(电脑端chrome53及以上，手机ios11及以上，安卓chrome62以上)</h4>
        <p style={{ wordWrap: 'break-word' }}>xxx=={logs}</p>
        <video width="100%" autoPlay ref={node => this.videoNode = node}></video>
        <Button onClick={this.capture}>截图</Button>

        <canvas width={345} height={258} style={canvasStyle} ref={node => this.canvasNode = node}></canvas>

      </div>
    )
  }
}
