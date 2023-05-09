import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priority) => {
    const resultSearchText = todoList.filter((todo) => {
      return todo.name.toLowerCase().includes(searchText.toLowerCase());
    });

    const resultFilterStatus = resultSearchText.filter((todo) => {
      if (status === "All") {
        return todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      if (status === "Completed") {
        return (
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          todo.completed
        );
      }

      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        !todo.completed
      );
    });

    const resultFilterPriority = resultFilterStatus.filter((todo) => {
      return priority.length > 0 ? priority.includes(todo.priority) : todo;
    });

    return resultFilterPriority;
  }
);
export const todoRemainingSelector1 = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      if (status === "Completed") {
        return (
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          todo.completed
        );
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        !todo.completed
      );
    });
  }
);
