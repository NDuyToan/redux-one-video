import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";

const enhancers = composeWithDevTools();
const store = createStore(rootReducer, enhancers);

export default store;
