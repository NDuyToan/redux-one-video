export const todoListSelector = (state) => {
  const searchText = searchTextSelector(state);

  const todoListRemaining = state.todoList.filter((todo) =>
    todo.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return todoListRemaining;
};
export const searchTextSelector = (state) => state.filter.search;
