import React from 'react';
class HelloWorld extends React.Component {
  // 1.会先执行构造方法 constructor
  constructor() {
    super();
    this.state = {
      message: 'hello world'
    };
    console.log('helloworld--构造函数');
  }

  // 2.第二步 执行render方法
  render() {
    console.log('helloworld--render');
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        {/* 组件在更新之后会先触发render函数 在触发componentDidUpdate生命周期钩子函数 */}
        <button onClick={(e) => this.setState({ message: '修改文本' })}>修改文本</button>
      </div>
    );
  }

  // 3.组件被渲染到DOM，挂载到DOM上
  componentDidMount() {
    console.log('helloworld--componentDidMount');
  }
  //更新组件生命周期钩子函数 在render函数之后执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    // prevProps, prevState, snapshot 第三个参数就是getSnapshotBeforeUpdate函数return的数据
    console.log('helloworld--componentDidUpdate', prevProps, prevState, snapshot);
  }
  // 组件卸载掉生命周期钩子函数
  componentWillUnmount() {
    console.log('helloworld--componentWillUnmount');
  }

  // 不常用的生命周期补充
  //执行componentDidUpdate生命周期钩子函数时候需不需要执行render函数 return false 就是不需要在执行render函数
  shouldComponentUpdate() {
    console.log('helloworld--showComponentUpdate');
    return false;
  }

  // 在React重新渲染Dom之前回掉的一个函数，可以获取到DOM更新前的一些信息(比如页面的滚动位置)
  getSnapshotBeforeUpdate() {
    console.log('helloworld--getSnapshotBeforeUpdate');
    // 这里返回的数据 可以在componentDidUpdate中获取到
    return {
      useScrollPosition: 1000
    };
  }
}

export default HelloWorld;
