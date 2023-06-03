import React, { Component } from 'react';
import Home from './Home';
import { ThemeContext } from './context/theme-context';

// 1创建一个上下文Context

export class App extends Component {
  render() {
    return (
      <div>
        {/* 这两种传递方式都可以  给home传递数据 */}
        {/* <Home name='贺世浩' age={18} />
        <Home {...info} /> */}

        {/* 通过 ThemeContext.Provider给这个组件包裹起来 传递值就需要value属性*/}
        <ThemeContext.Provider value={{ color: 'red' }}>
          <Home />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
