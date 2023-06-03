import React, { Component } from 'react';

export class TabItem extends Component {
  render() {
    const { itemType } = this.props;
    const type = 'button';
    return <div>{itemType(type, '文本')}</div>;
  }
}

export default TabItem;
