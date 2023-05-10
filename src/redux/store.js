import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./reducer";

// const enhancers = composeWithDevTools();
// const store = createStore(rootReducer, enhancers);

// export default store;

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
