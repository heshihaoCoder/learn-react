import React, { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      fontSize: '100px'
    };
  }
  render() {
    return (
      <div>
        <h2 style={{ color: 'red', fontSize: '90px' }}>我是标题</h2>
        {/* 使用变量state */}
        <p style={{ fontSize: this.state.fontSize }}>我是内容</p>
      </div>
    );
  }
}

export default App;
