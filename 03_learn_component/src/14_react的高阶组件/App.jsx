import React, { PureComponent } from 'react';

// 定义一个高阶组件  传入一个组件  并且返回一个新的组件的函数
function HOC(Cpn) {
  // 可以返回
  // 1.类组件
  // class NewCpn extends PureComponent {}
  // return NewCpn;
  // 2.函数组件
  function FunCpn(props, ref) {
    return (
      <div>
        <Cpn />
      </div>
    );
  }
  return <FunCpn />;
}

// 高阶组件就是对HelloWorld组件渲染进行了一层拦截
class HelloWorld extends PureComponent {
  render() {
    return <div>HelloWorld</div>;
  }
}

const HelloWorldHOC = HOC(HelloWorld);
export class App extends PureComponent {
  render() {
    return <div>{HelloWorldHOC}</div>;
  }
}

export default App;
