const reducer = (state = { red: 0, blue: 0, green: 0 }, action) => {
  switch (action.type) {
    case "addRed":
      return {
        red: state.red + 50,
        blue: state.blue,
        green: state.green,
      };
    case "minusRed":
      return {
        red: state.red - 50,
        blue: state.blue,
        green: state.green,
      };
    case "addBlue":
      return {
        red: state.red,
        blue: state.blue + 50,
        green: state.green,
      };
    case "minusBlue":
      return {
        red: state.red,
        blue: state.blue - 50,
        green: state.green,
      };
    case "addGreen":
      return {
        red: state.red,
        blue: state.blue,
        green: state.green + 50,
      };
    case "minusGreen":
      return {
        red: state.red,
        blue: state.blue,
        green: state.green - 50,
      };
    case "changeRed":
      return {
        red: action.payload,
        blue: state.blue,
        green: state.green,
      };
    case "changeBlue":
      return {
        red: state.red,
        blue: action.payload,
        green: state.green,
      };
    case "changeGreen":
      return {
        red: state.red,
        blue: state.blue,
        green: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
