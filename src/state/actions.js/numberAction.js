export const addNumber = (mount) => {
  return {
    type: "addNumber",
    payload: mount,
  };
};

export const minusNumber = (mount) => {
  return {
    type: "minusNumber",
    payload: mount,
  };
};

export const resetNumber = (mount) => {
  return {
    type: "resetNumber",
    payload: mount,
  };
};
