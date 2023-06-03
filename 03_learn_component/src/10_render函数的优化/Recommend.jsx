import React, { Component } from 'react';

// 使用PureComponent这样在数据没有变化时不会重新渲染
export class Recommend extends Component {
  // 让组件永远不更新
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log('recommend render');
    return (
      <div>
        <h2>Recommend Page</h2>
      </div>
    );
  }
}

export default Recommend;
