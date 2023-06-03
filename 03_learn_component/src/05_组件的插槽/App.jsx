import React, { Component } from 'react';
import NavBar from './NavBar';
import Slot from './Slot';

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Slot 这样是通过props传递 slotContent={<div>测试插槽</div>} /> */}
        {/* <NavBar>
          <button>查询</button>
          <h2>我是标题</h2>
          <i>斜体</i>
        </NavBar> */}
        <Slot slotContent={<div>这是插槽</div>} />
      </div>
    );
  }
}

export default App;
