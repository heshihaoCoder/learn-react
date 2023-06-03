import React, { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    // state里面的数据都是不可变数据  不要去直接修改引用类型
    this.state = {
      books: [
        {
          name: 'js高级程序设计',
          price: 99,
          count: 1
        },
        {
          name: 'node高级程序设计',
          price: 56,
          count: 1
        },
        {
          name: 'react高级程序设计',
          price: 60,
          count: 1
        },
        {
          name: 'vue高级程序设计',
          price: 78,
          count: 1
        }
      ]
    };
  }
  addBook() {
    const newBook = { name: 'css高级程序设计', price: 78, count: 2 };
    const books = [...this.state.books];
    books.push(newBook);
    this.setState({
      books
    });
  }
  addCount(index) {
    const books = [...this.state.books];
    books[index].count += 1;
    this.setState({
      books: books
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={item.name}>
                书籍名称：{item.name}-书籍价格：{item.price}-书籍数量：{item.count}-
                <button
                  onClick={(e) => {
                    this.addCount(index);
                  }}
                >
                  +1
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={(e) => {
            this.addBook();
          }}
        >
          添加新书籍
        </button>
      </div>
    );
  }
}

export default App;
