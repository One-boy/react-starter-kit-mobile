/**
 * 相机调用示例
 */
import React, { Component } from 'react'
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>HTML5 input标签调用相机，摄像机，图库示例</h2>
        <label>
          <h4>无capture,打开选择框：拍照，照片图库和浏览</h4>
          <input type="file" accept="image/*" multiple={false} />
        </label>
        <label>
          <h4>capture=camcorder，直接打开相机</h4>
          <input type="file" accept="image/*" capture="camcorder" />
        </label>
        <label>
          <h4>capture=camcorder，直接打开摄像机(accept属性需设为video/*)</h4>
          <input type="file" accept="video/*" capture="camcorder" />
        </label>
        <label>
          <h4>无capture,加multiple属性进入图库多选图片(不过不加也可以多选？。)</h4>
          <input type="file" accept="image/*" multiple />
        </label>
      </div>
    )
  }
}
