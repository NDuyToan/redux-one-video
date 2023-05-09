import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
