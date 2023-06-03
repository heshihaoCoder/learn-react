import React, { Component } from 'react';
import './tab-control.css';
export class TabControl extends Component {
  touchTab(index) {
    this.props.tabChange(index);
  }
  render() {
    const { current } = this.props;

    return (
      <div className='tab-control'>
        {this.props.titles.map((item, index) => {
          return (
            <div
              className={['ite', index === current ? 'active' : ''].join(' ')}
              key={index}
              onClick={() => this.touchTab(index)}
            >
              {item}
              <span style={{ display: index === current ? 'block' : 'none' }}>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabControl;
