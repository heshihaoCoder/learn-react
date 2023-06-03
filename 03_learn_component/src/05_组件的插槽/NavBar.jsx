import React, { Component } from 'react';
import './nav-bar.css';
export class NavBar extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className='nav-bar'>
        <div className='search'>{this.props.children[0]}</div>
        <div className='two'>中间</div>
        <div className='back'>{this.props.children[2]}</div>
      </div>
    );
  }
}

export default NavBar;
