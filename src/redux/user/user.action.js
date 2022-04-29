import { LOGIN_ACTION_TYPES } from "./login.type";

const hideLoginForm = () => {
  return {
    type: LOGIN_ACTION_TYPES.HIDE_LOGIN_FORM,
  };
};

export default hideLoginForm;
