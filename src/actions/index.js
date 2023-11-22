import api from '../apis/api';
import {
  SET_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_SEARCH,
} from "./types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchUsersRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const addUserRequest = () => ({
  type: ADD_USER_REQUEST,
});

export const addUserSuccess = () => ({
  type: ADD_USER_SUCCESS,
});

export const addUserFailure = (error) => ({
  type: ADD_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST,
  });
  
  export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS,
  });
  
  export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    payload: error,
  });

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const fetchUsers = (name='', email='', age=null, pageSize=10, page=1) => async (dispatch) => {
  dispatch(fetchUsersRequest());

  try {
    let url = `ObtenerUsuarios`;
    const res = await api.get(url);
    const data = res.data;

    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const addUser = (user) => async (dispatch) => {
  dispatch(addUserRequest());

  try {
    await api.post('AgregarUsuarios', user);

    dispatch(addUserSuccess());
  } catch (error) {
    dispatch(addUserFailure(error.message));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
    dispatch(deleteUserRequest());

    try {
        await api.delete(`EliminarUsuario/${userId}`);

        dispatch(deleteUserSuccess());
    } catch (error) {
        dispatch(deleteUserFailure(error.message));
    }
}