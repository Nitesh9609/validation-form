import { LOGIN_ACTION_TYPES } from "./login.type";

const INITIAL_STATE = {
  hidden: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.HIDE_LOGIN_FORM:
      return {
        ...state,
        hidden: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
