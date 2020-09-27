import {SET_RESTAURANTS} from '../actions/restaurantActions'
const initialState = { restaurants: [] };

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    default:
      return state;
  }
};
