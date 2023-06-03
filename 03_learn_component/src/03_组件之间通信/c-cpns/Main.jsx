import React, { Component } from 'react';
import MainBanner from './MainBanner';
import MainProducts from './MainProducts';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: ['新歌曲', '流行歌', '古典音乐'],
      message: 'main'
    };
  }
  test = (message) => {
    this.setState({
      message: message
    });
    console.log('传递来了', message);
  };
  render() {
    const { banners } = this.state;
    return (
      <div className='main'>
        {this.state.message}
        <MainBanner banners={banners} title='轮播图' />
        <MainProducts test={this.test} />
      </div>
    );
  }
}

export default Main;
