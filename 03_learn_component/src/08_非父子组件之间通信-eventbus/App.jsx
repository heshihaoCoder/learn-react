import React, { Component } from 'react';
import Home from './Home';

export class App extends Component {
  componentDidMount() {
    // 在这里可以进行事件的监听on 以及回掉的处理函数
  }
  componentWillUnmount() {
    // off移除事件
  }
  render() {
    return (
      <div>
        <h3>app component</h3>
        <Home />
      </div>
    );
  }
}

export default App;
