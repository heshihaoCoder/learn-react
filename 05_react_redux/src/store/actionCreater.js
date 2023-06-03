import * as constans from './constants';
import axios from 'axios';

export const addNum = (num) => ({ type: constans.ADD_NUM, num });

export const subNum = (num) => ({ type: constans.SUB_NUM, num });

export const change_banner_action = (banners) => ({ type: constans.CHANGE_BANNER, banners });

export const change_recommend_action = (recommends) => ({ type: constans.CHANGE_RECOMMEND, recommends });

//  这里默认是不能是函数的  因为在index.js文件中加强了 store所以就可以 返回一个函数了
// 并且函数的参数   为  dispatch  getState
export const fetchHomeDataAction = () => {
  // 在触发这个action的时候 里面返回的函数会自动执行

  return function (dispatch, getState) {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      dispatch(change_banner_action(banners));
      dispatch(change_recommend_action(recommend));
    });
    console.log('foo is execution---', getState().counter);
  };
};
