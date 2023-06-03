// 函数式组件有自己的特点
// 函数式组件没有生命周期，也会被更新并挂载，但是没有生命周期函数
// this关键字不能指向组件实例，（因为没有组件实例）
// 没有内部状态（state）
function App() {
  // 返回值和类组件一致

  return <div>函数式组件</div>;
}

export default App;
