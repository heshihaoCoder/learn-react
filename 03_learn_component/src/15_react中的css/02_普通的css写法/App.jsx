import React, { PureComponent } from 'react';
// 这样写的话  会出现样式冲突
import './normal.css';
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容</p>
      </div>
    );
  }
}

export default App;
