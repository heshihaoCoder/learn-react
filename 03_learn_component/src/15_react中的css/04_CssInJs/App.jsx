import React, { PureComponent } from 'react';
import { AppWrapper, Alink } from './style';

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <AppWrapper isRed>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容，哈哈哈</p>
          <Alink>嘿嘿</Alink>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
