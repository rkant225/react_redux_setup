import http from "../../API/http";
import { ADD, EDIT, DELETE, FETCH_USER } from "./userTypes";
import { START_LOADING, STOP_LOADING } from "../Loader/loaderTypes";

export const fetchUser = () => {
  return async (dispatch) => {
        dispatch({type : START_LOADING});
        const response = await http.get("cannabis/random_cannabis");
        dispatch({
        type: FETCH_USER,
        payload: { user: response.data },
        })
        dispatch({type : STOP_LOADING});
  };
};

export const addUser = (user) => {
  return {
    type: ADD,
    payload: { user: user },
  };
};

export const editUser = (userId, user) => {
  return {
    type: EDIT,
    payload: { userId: userId, user: user },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE,
    payload: { userId: userId },
  };
};
