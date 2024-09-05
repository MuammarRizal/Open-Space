/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

const setIsPreloadActionCreator = (isPreload) => {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
};

import api from "../../utils/api";
import { setAuthUserActionCreator } from "../authUser/action";

const asyncPreloadProcess = () => {
  return async (dispatch) => {
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
  };
};

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
