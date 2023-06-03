import React, { PureComponent, forwardRef, createRef } from 'react';

const HelloWorld = forwardRef(function (props, ref) {
  console.log(props, ref);
  // 这样就可以绑定到元素了
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();
    this.HelloWorldRef = createRef();
  }
  getComponent() {
    console.log(this.HelloWorldRef.current);
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <HelloWorld content='helloworld' ref={this.HelloWorldRef} />
        <button onClick={(e) => this.getComponent()}>获取组件</button>
      </div>
    );
  }
}

export default App;
