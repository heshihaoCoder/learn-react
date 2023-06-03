import React, { PureComponent } from 'react';
// import './app.module.css';
// 使用cssmodule方式
import AppStyle from './app.module.css';
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={AppStyle.title}>我是标题</h2>
        <p className={AppStyle.content}>我是内容</p>
      </div>
    );
  }
}

export default App;
