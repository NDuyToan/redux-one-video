//REDUCER

const initialState = {
  value: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "todoList/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

//ACTION
const INCREMENT = {
  type: "todoList/increment",
  payload: 10,
};

//action creator

const incrementCreator = (data) => {
  return {
    type: "todoList/increment",
    payload: data,
  };
};
