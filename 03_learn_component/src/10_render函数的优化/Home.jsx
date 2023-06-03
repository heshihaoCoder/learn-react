import React, { PureComponent } from 'react';

// 使用PureComponent这样在数据没有变化时不会重新渲染
export class Home extends PureComponent {
  render() {
    console.log('home render');
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    );
  }
}

export default Home;
