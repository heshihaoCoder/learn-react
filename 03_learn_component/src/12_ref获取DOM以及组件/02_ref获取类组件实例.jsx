import React, { PureComponent, createRef } from 'react';

class HelloWorld extends PureComponent {
  constructor() {
    super();
    this.textRef = createRef();
  }

  textRefFocus() {
    this.textRef.current.focus();
  }

  render() {
    return (
      <h1>
        Hello World
        <input type='text' ref={this.textRef} />
      </h1>
    );
  }
}

export class App extends PureComponent {
  constructor() {
    super();
    this.HelloWorldRef = React.createRef();
  }
  getComponent() {
    //类组件
    this.HelloWorldRef.current.textRefFocus();
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 类组件可以直接进行操作 */}
        <HelloWorld ref={this.HelloWorldRef} />
        <button onClick={(e) => this.getComponent()}>获取组件</button>
      </div>
    );
  }
}

export default App;
