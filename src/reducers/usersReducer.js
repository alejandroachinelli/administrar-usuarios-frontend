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
    RESET_SEARCH
  } from "../actions/types";
  
  const initialState = {
    users: [],
    totalUsers: 0,
    loading: false,
    error: "",
  };
  
  const usersReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.payload
        };
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          totalUsers: action.payload.length
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case ADD_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case ADD_USER_SUCCESS:
        return {
          ...state
        };
      case ADD_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state
        };
      case DELETE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      case RESET_SEARCH:
        return {
          ...state,
          users: [],
          totalUsers: 0,
          loading: false,
          error: "",
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;