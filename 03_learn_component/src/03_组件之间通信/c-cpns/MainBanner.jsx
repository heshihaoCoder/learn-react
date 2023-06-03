import React, { Component } from 'react';
// 对props进行类型验证
import propTypes from 'prop-types';

class MainBanner extends Component {
  static defaultProps = {
    banners: ['默认1', '默认2']
  };
  constructor(props) {
    super(props);
    console.log('MainBanner构造函数', props);
  }

  render() {
    return (
      <div className='banner'>
        <ul>
          {this.props.banners.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

MainBanner.propTypes = {
  // 要求 banners必须是数组类型 并且是必传的
  banners: propTypes.array,
  title: propTypes.string.isRequired
};

export default MainBanner;
