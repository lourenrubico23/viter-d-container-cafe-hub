export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "IS_SHOW":
      return {
        ...state,
        isShow: action.payload,
      };
    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
