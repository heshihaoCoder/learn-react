// 类组件
import React from 'react';
// 也可以
// import {Component} from 'react'  下面就直接使用component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'App Component'
    };
  }
  // render函数的返回值  当rendeer函数被调用时，他会检查this.props和this.state的变化并返回以下类型之一：react元素  ，数组 或者fragments
  // 当执行this.setState({})  render函数会被重新执行
  render() {
    const { message } = this.state;
    // 通过jsx编写的代码就会被编译成React.createElement，所以返回的就是react元素
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );

    // 还可以返回一个数组
    // return ['abc', 'cba']; 界面会渲染为abccba;
    // return [<h2>哈哈哈哈</h2>, <h3>哈哈哈哈</h3>, <div>nihai</div>];  会当成三个元素标签真正渲染

    // 还可以返回一个字符串或者数值类型：他们会在DOM中被渲染成文本节点
  }
}

export default App;
