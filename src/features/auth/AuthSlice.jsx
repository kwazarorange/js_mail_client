/* global gapi */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorization",
  initialState: {
    gapiLoaded: false,
    authStatus: false,
    user: {
      email: "",
      name: "",
      picture: ""
    }
  },
  reducers: {
    gapiLoad: state => {
      state.gapiLoaded = true;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.authStatus = true;
    },
    logout: state => {
      state.user.email = "";
      state.user.name = "";
      state.user.picture = "";
      state.authStatus = false;
    }
  }
});

const { reducer, actions } = authSlice;

export default reducer;

const { login, logout, gapiLoad } = actions;

export { gapiLoad };

export const auth = () => {
  return (dispatch, getState) => {
    if (getState().auth.authStatus) {
      gapi.auth2
        .getAuthInstance()
        .signOut()
        .then(() => {
          dispatch(logout());
        })
        .catch(error => {
          console.log("error: " + error.message);
        });
    } else {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(result => {
          const { Au: email, Ad: name, kL: picture } = result.Rt;
          dispatch(login({ email, name, picture }));
        })
        .catch(error => {
          console.log("error" + error.message);
        });
    }
  };
};
export const fetchAuthInfo = () => {
  return dispatch => {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };
};
