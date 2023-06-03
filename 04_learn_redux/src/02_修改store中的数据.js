const store = require('./store/index');

// 修改state数据
const nameAction = { type: 'change_name', name: '贺世浩' };

// 一旦调用dispath reduce就会重新执行
store.dispatch(nameAction);

const counterAction = {
  type: 'change_counter',
  num: 10
};

store.dispatch(counterAction);
console.log(store.getState(), '007');
