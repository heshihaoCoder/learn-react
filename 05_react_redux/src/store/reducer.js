import * as constants from './constants';

const initialState = {
  counter: 0,
  banners: [],
  recommends: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_NUM:
      return { ...state, counter: state.counter + action.num };
    case constants.SUB_NUM:
      return { ...state, counter: state.counter - action.num };
    case constants.CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case constants.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;
