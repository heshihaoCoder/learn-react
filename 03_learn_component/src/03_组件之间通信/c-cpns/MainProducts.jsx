import React, { Component } from 'react';

export class MainProducts extends Component {
  propsFun() {
    console.log('传递数据');
    this.props.test('子传递父亲');
  }
  render() {
    return (
      <div>
        商品列表
        <ul>
          <li>商品列表1</li>
          <li>商品列表2</li>
          <li>商品列表3</li>
          <li>商品列表4</li>
          <li>商品列表5</li>
        </ul>
        <button onClick={() => this.propsFun()}>子传递父</button>
      </div>
    );
  }
}

export default MainProducts;
