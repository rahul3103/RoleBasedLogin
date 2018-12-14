export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const UPDATE_GREET = 'UPDATE_GREET';

export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, (data, error) => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
        dispatch(setUser(data));
      } else dispatch(setLoginError(error));
    });
  };
};

const setLoginPending = isLoginPending => {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
};

const setLoginSuccess = isLoginSuccess => {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
};

const setLoginError = loginError => {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
};

export const setUser = data => ({
  type: SET_USER,
  data
});

export const logOut = () => {
  localStorage.removeItem('name');
  localStorage.removeItem('role');
  return dispatch => {
    dispatch({
      type: UNSET_USER
    });
    dispatch(setLoginSuccess(false));
    dispatch(updateGreet('Welcome'));
  };
};

export const authCheckState = () => {
  const data = {
    name: localStorage.getItem('name'),
    role: localStorage.getItem('role')
  };
  if (data.name && data.role)
    return dispatch => {
      dispatch(setUser(data));
      dispatch(setLoginSuccess(true));
    };
  return dispatch => {
    dispatch(logOut());
  };
};

export const updateGreet = greet => ({
  type: UPDATE_GREET,
  greet
});

const callLoginApi = (email, password, callback) => {
  fetch(`https://demo2837922.mockable.io/user?id=${email}&&pass=${password}`)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('name', data.name);
      localStorage.setItem('role', data.role);
      callback(data);
    })
    .catch(() => callback({}, 'Invalid email and password'));
};
