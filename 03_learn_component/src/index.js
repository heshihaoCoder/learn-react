import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App_class';
// import App from './01_类组件和函数组件/App_fnc';
// import App from './02_组件的生命周期函数/App';
// import App from './03_组件之间通信/App';
// import App from './04_组件通信案例/App';
// import App from './05_组件的插槽/App';
// import App from './06_组件的作用域插槽/App';
// import App from './07_非父子之间通信-context/App';
// import App from './08_非父子组件之间通信-eventbus/App';
// import App from './09_setState的详细使用/App';
// import App from './10_render函数的优化/App';
// import App from './11_数据不可变的力量/App';
// import App from './12_ref获取DOM以及组件/App';
// import App from './13_受控和非受控组件/App';

// import App from './14_react的高阶组件/App';
// import App from './15_react中的css/01_内链样式的css/App';
// import App from './15_react中的css/02_普通的css写法/App';
// import App from './15_react中的css/03_cssModule/App';
import App from './15_react中的css/04_CssInJs/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 写下下面这个  componentDidMounted会被执行两次
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
