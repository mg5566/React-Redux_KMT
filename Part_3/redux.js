// flux architecture
// action dispatcher store view

export function createStore(reducer) {
  let state;
  let handlers = [];

  function subscribe(handler) {
    handlers.push(handler);
  }

  function dispath(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  return {
    dispath,
    getState,
    subscribe,
  };
}

export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
