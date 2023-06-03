const store = require('./store/index');

// 订阅store
const unsubscribe = store.subscribe(() => {
  // 函数没有参数
  console.log('数据发生了变化', store.getState());
});

// unsubscribe() 这个函数调用就是取消调用

// 帮助我们创建action
const changeNameAction = (name) => ({
  // type一般有全局的常量文件
  type: 'change_name',
  name
});

// 修改state数据
// 一旦调用dispath reduce就会重新执行
store.dispatch(changeNameAction('贺世浩'));
store.dispatch(changeNameAction('李雷'));

const changeCounterAction = (num) => ({
  type: 'change_counter',
  num
});
store.dispatch(changeCounterAction(10));
store.dispatch(changeCounterAction(20));
// console.log(store.getState(), '007'); //这里每次都需要自己手动获取最新的state
unsubscribe();
store.dispatch(changeCounterAction(40));
