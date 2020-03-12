import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "../features/emails/emailsSlice";
import authReducer from "../features/auth/AuthSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: { auth: authReducer, emails: emailsReducer, app: appReducer }
});

export default store;
