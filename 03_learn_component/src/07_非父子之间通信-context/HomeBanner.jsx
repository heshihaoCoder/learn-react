import { ThemeContext } from './context/theme-context';
// 函数式组件怎么使用context
function HomeBanner() {
  return (
    <div>
      <span>HomeBanner</span>
      {/* 函数组件中使用context中共享的数据 */}
      {/* 引入themecontext */}
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>{value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeBanner;
