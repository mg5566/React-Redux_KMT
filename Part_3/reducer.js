import * as ActionType from "./action-type.js";

const InitializeState = { count: 0 };

export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      if (action.payload) {
        return { ...state, count: state.count + action.payload };
      }
      return { ...state, count: state.count + 1 };

    case ActionType.DECREASE:
      if (action.payload) {
        return { ...state, count: state.count - action.payload };
      }
      return { ...state, count: state.count - 1 };

    case ActionType.RESET:
      return { ...state, count: 0 };

    default:
      return { ...state };
  }
}
