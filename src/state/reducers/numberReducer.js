const reducer = (state = 0, action) => {
  switch (action.type) {
    case "addNumber":
      return state + action.payload;
    case "minusNumber":
      return state - action.payload;
    case "resetNumber":
      return 0;
    default:
      return state;
  }
};
export default reducer;
