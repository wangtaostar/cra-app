import at from '@constants';

const initialState = {
  data: {}
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCH_NEWS_DATA: 
      return {...state, data: action.payload }
    default:
      return state;
  }
}

export default news