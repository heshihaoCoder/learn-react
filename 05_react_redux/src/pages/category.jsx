import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { change_banner_action, change_recommend_action, fetchHomeDataAction } from '../store/actionCreater';

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <h2>Category page</h2>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeBanners(bananers) {
      // 正常情况下dispatch是不可以派发函数的  只能派发一个对象
      dispatch(change_banner_action(bananers));
    },
    changeRecommeds(recommends) {
      dispatch(change_recommend_action(recommends));
    },
    fetchData() {
      dispatch(fetchHomeDataAction());
    }
  };
}

export default connect(null, mapDispatchToProps)(Category);
