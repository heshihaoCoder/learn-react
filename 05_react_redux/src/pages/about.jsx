import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNum, subNum } from '../store/actionCreater';

export class About extends PureComponent {
  addNum(num) {
    this.props.addNum(num);
  }
  subNum(num) {
    this.props.subNum(num);
  }
  render() {
    const { counter, banners } = this.props;
    console.log(banners);
    return (
      <div>
        About:counter---{counter}
        <button
          onClick={(e) => {
            this.addNum(9);
          }}
        >
          +9
        </button>
        <button
          onClick={(e) => {
            this.subNum(9);
          }}
        >
          -9
        </button>
        <div className='banners'>
          <h2>轮播图数据</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// connect函数运行的返回值是一个高阶组件connect(fn1,fn2)(About) 那里需要传入两个函数
// 第一个函数就是为了此组件和store数据进行映射
// state   store中的state
// 第二个函数就是为了此组件和store的dispath进行yingshe
function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNum(num) {
      console.log(num, '获取到了+++');
      dispatch(addNum(num));
    },
    subNum(num) {
      console.log(num, '获取到了---');
      dispatch(subNum(num));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
