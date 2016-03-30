import * as CounterActions from './CounterActions';

const initialState = {
  count: 0
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case CounterActions.types.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
}