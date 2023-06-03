import React, { Component } from 'react';
import TabControl from './cpns/TabControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ['新歌', '流行', '怀旧'],
      currentIndex: 0
    };
  }
  tabChange(index) {
    this.setState({
      currentIndex: index
    });
  }
  render() {
    const { titles, currentIndex } = this.state;
    return (
      <div className='app'>
        <TabControl tabChange={(index) => this.tabChange(index)} current={currentIndex} titles={titles} />
      </div>
    );
  }
}

export default App;
