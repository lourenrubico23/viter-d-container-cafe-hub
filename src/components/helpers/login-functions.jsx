import { devNavUrl } from "./functions-general";

export const checkLocalStorage = () => {
  let localfbstoken = null;
  try {
    localfbstoken = JSON.parse(localStorage.getItem("localfbstoken"));
  } catch (error) {
    localfbstoken = null;
  }

  return localfbstoken;
};

export const checkRoleToRedirect = (navigate, data) => {
  if (data.role_code === "role_is_admin") {
    navigate(`${devNavUrl}/special-offers`);
  } else if (data.role_code === "role_is_marketing") {
    navigate(`${devNavUrl}/subscribers`);
  } else {
    const rolePath = data.role.toLowerCase().replaceAll(" ", "-");
    navigate(`${devNavUrl}/${rolePath}/special-offers`);
  }

  // data.role_is_developer === 1
  //   ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`)
  //   : data.role_is_admin === 1
  //   ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`)
  //   : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`);
};
