const { createStore } = require('redux');

//  初始化的数据 只会用一次
const initialState = { name: 'heshihao', counter: 0 };

// 定义reducer函数：纯函数
// 接受两个参数  第一个参数就是原来的state的值，第二个就是派发的更新action、
// 返回值会作为store之后存储的state
function reducer(state = initialState, action) {
  // 在reducer里面 一般不写if else   而是使用switch
  //  有新数据更新需要返回新的state
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.name };
    case 'change_counter':
      return { ...state, counter: state.counter + action.num };
    default:
      return { ...state };
  }
}

// 创建store
const store = createStore(reducer);

module.exports = store;
