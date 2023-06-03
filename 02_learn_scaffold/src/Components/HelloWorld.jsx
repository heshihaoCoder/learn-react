import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { message: 'hello world' };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default HelloWorld;
