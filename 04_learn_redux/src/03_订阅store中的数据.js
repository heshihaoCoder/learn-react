const store = require('./store/index');

// 订阅store
const unsubscribe = store.subscribe(() => {
  // 函数没有参数
  console.log('数据发生了变化', store.getState());
});

// unsubscribe() 这个函数调用就是取消调用

// 修改state数据
// 一旦调用dispath reduce就会重新执行
store.dispatch({ type: 'change_name', name: '贺世浩' });

unsubscribe();

store.dispatch({ type: 'change_counter', num: 10 });
// console.log(store.getState(), '007'); //这里每次都需要自己手动获取最新的state
