// flux architecture
// action dispatcher store view

function createStore(worker) {
  let state;
  let handlers = [];

  function subscribe(handler) {
    handlers.push(handler);
  }

  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
  // do something
  // PS deep copy just 1 depth, 2 depth shallow copy
}

const store = createStore(worker);

store.subscribe(function () {
  console.log(store.getState());
});
store.send({ type: "increase" });
store.send({ type: "increase" });
store.send({ type: "increase" });

// action
// { type: '', payload: {} }
