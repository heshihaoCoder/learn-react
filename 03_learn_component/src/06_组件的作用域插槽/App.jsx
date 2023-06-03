import React, { Component } from 'react';
import TabItem from './TabItem';

export class App extends Component {
  renderItem(type, text) {
    console.log(type, text);
    if (type === 'button') {
      return <button>{text}</button>;
    } else if (type === 'span') {
      return <span>{text}</span>;
    }
  }
  render() {
    return (
      <div>
        <TabItem
          itemType={(type, item) => {
            // 渲染什么类型让子组件来判断
            return this.renderItem(type, item);
          }}
        />
      </div>
    );
  }
}

export default App;
