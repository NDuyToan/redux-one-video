export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priority,
  };
};

export const toggleStatus = (id) => {
  return {
    type: "todoList/toggleStatus",
    payload: id,
  };
};
