import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispath(Actions.increase(1));
store.dispath(Actions.decrease(1));
store.dispath(Actions.reset(1));
