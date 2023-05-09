import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filter.search;

export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) =>
      todo.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todoListRemaining = state.todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return todoListRemaining;
// };
