import { UPDATE_GREET } from '../action';

const initialState = 'Welcome';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GREET:
      return action.greet;

    default:
      return state;
  }
};
