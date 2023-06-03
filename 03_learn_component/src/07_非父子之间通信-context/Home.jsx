import React, { Component } from 'react';
import { ThemeContext } from './context/theme-context';
import HomeBanner from './HomeBanner';
export class Home extends Component {
  //  获取context
  render() {
    console.log(this.context);
    return (
      <div>
        Home
        <HomeBanner />
      </div>
    );
  }
}
Home.contextType = ThemeContext;

export default Home;
