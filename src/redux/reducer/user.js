import { SET_USER, UNSET_USER } from '../action';

const initialState = {
  name: null,
  role: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        name: action.data.name,
        role: action.data.role
      };
    case UNSET_USER:
      return initialState;

    default:
      return state;
  }
};
