import React, { Component } from 'react';

export class HomeBanner extends Component {
  preClick() {
    console.log('上一个');
    // 在这里发布事件
  }
  nextClick() {
    console.log('下一个');
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={(e) => this.preClick()}>上一个</button>
        <button onClick={(e) => this.nextClick()}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
