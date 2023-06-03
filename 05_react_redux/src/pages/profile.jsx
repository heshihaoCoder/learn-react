import React, { PureComponent } from 'react';
import store from '../store';
import { subNum } from '../store/actionCreater';

export class Profile extends PureComponent {
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
  subNum(num) {
    store.dispatch(subNum(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Profile Page -- counter:{counter}</h2>
        <div>
          <button onClick={(e) => this.subNum(1)}>-1</button>
          <button onClick={(e) => this.subNum(3)}>-3</button>
          <button onClick={(e) => this.subNum(5)}>-5</button>
        </div>
      </div>
    );
  }
}

export default Profile;
