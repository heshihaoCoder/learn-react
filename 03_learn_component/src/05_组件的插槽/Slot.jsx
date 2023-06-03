import React, { Component } from 'react';

export class Slot extends Component {
  render() {
    return <div>{this.props.slotContent}</div>;
  }
}

export default Slot;
