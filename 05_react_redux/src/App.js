import React, { PureComponent } from 'react';
import About from './pages/about';
import Category from './pages/category';
import Home from './pages/home';
import Profile from './pages/profile';
import './pages/style.css';
import store from './store';

export class App extends PureComponent {
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
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>App界面: counter:{counter}</h2>
        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
          <Category />
        </div>
      </div>
    );
  }
}

export default App;
