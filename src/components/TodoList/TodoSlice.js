const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn ReactJs", completed: false, priority: "High" },
  { id: 3, name: "Play Badminton", completed: true, priority: "Low" },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
