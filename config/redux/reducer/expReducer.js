const initialState = {
  exp: [],
  expDetail: [],
};

const expReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_EXP") {
    return {
      ...state,
      exp: action.payload,
    };
  } else if (action.type === "GET_DETAIL_EXP") {
    return {
      ...state,
      exp: action.payload,
    };
  } else if (action.type === "CREATE_EXP") {
    return state;
  } else if (action.type === "UPDATE_EXP") {
    return state;
  } else if (action.type === "DELETE_EXP") {
    return state;
  } else {
    return state;
  }
};

export default expReducer;
