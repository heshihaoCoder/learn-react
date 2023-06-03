import React, { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: 'heshihao'
    };
  }
  changeText(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        {/* 当给这些input类型绑定value值时，组件就变成受控组件了变得不可修改了 想要修改必须绑定他的onchange事件 */}
        <input type='text' value={username} onChange={(e) => this.changeText(e)} />
        <input type='text' />
        <h2>username:{username}</h2>
      </div>
    );
  }
}

export default App;
