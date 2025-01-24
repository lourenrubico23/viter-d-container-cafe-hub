export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};
export const setIsShow = (val) => {
  return {
    type: "IS_SHOW",
    payload: val,
  };
};
export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};
export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};
