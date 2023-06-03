import React, { Component } from 'react';
import Home from './Home';
import Profile from './Profile';
import Recommend from './Recommend';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello app',
      counter: 0
    };
  }
  changeState() {
    this.setState({
      message: '你好啊,贺世浩!'
    });
  }
  render() {
    const { message, counter } = this.state;
    console.log('app render');
    return (
      <div>
        <h2>
          App--{message}--{counter}
        </h2>
        <Home />
        <Recommend message={message} />
        <Profile />
        <button onClick={(e) => this.changeState()}>修改文本</button>
        <button onClick={(e) => this.setState({ counter: 10 })}>修改counter</button>
      </div>
    );
  }
}

export default App;
