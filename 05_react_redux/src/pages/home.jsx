import React, { PureComponent } from 'react';
import store from '../store';
import { addNum } from '../store/actionCreater';

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
  }
  addNum(num) {
    store.dispatch(addNum(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Home Page -- counter:{counter}</h2>
        <div>
          <button onClick={(e) => this.addNum(1)}>+1</button>
          <button onClick={(e) => this.addNum(3)}>+3</button>
          <button onClick={(e) => this.addNum(5)}>+5</button>
        </div>
      </div>
    );
  }
}

export default Home;
