import React, { PureComponent, createRef } from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.textInput = createRef();
  }
  getFocus() {
    this.textInput.current.value = '贺世浩';
  }
  render() {
    return (
      <div>
        App
        <input ref={this.textInput} type='text' />
        <button onClick={(e) => this.getFocus()}>获取焦点</button>
      </div>
    );
  }
}

export default App;
