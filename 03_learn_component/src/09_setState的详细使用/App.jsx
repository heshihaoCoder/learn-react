import React, { Component } from 'react';
import { flushSync } from 'react-dom';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello app',
      counter: 0
    };
  }

  changeText() {
    // react18之后所有的setState都是异步的批处理的如果想同步处理 就需要
    // 这个就是将setState变为同步的
    flushSync(() => {
      this.setState({}); //这样就会变成同步的
    });
    // 1.setState基本用法
    // this.setState({
    //   message: 'hello react'
    // });

    // 2.setState可以传入一个回掉函数
    // 好处1  可以在回掉函数中编写新的state的回掉
    // 好处2  当前的回掉函数会将之前的state和props返回回来
    // this.setState((preState) => {
    //   console.log(preState);
    //   // 编写一些对新的state处理逻辑
    //   // 当前的回掉函数会将之前的state和props返回回来
    //   return {
    //     message: 'hello react'
    //   };
    // });

    // 3.setState在react的事件处理中是一个异步调用
    // 如果希望在数据更新之后（数据合并），获取到对应的结果执行一些逻辑代码，
    // 那么可以在setState中传入第二个参数，是一个回掉函数
    this.setState(
      {
        message: '你好啊'
      },
      () => {
        // 在这里就是你好啊
        console.log(this.state);
      }
    );
    //  message还是hello app
    // console.log(this.state);
  }
  incrementCounter() {
    console.log('counter+1');
  }
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <h2>计数：{counter}</h2>
        <button onClick={(e) => this.incrementCounter()}>counter+1</button>
      </div>
    );
  }
}

export default App;
