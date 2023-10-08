export const logger = (store) => (next) => (action) => {
  // before
  const currentState = store.getState();

  console.groupCollapsed("action logger => ", action.type);
  console.log("current state: ", currentState);
  console.log("action payload", action.payload);
  console.groupEnd();

  // after

  next(action);
};
