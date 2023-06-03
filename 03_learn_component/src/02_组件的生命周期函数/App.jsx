import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showHelloWorld: true
    };
  }
  render() {
    const { showHelloWorld: show } = this.state;

    return (
      <div>
        <div>哈哈哈</div>
        {/* 组件卸载和挂载 */}
        <button onClick={() => this.setState({ showHelloWorld: !show })}>切换状态</button>
        {/* 每个组件都是一个类的实例 */}
        {show ? <HelloWorld /> : <p>无文本</p>}
      </div>
    );
  }
}

export default App;
