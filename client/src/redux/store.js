import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { alertReduser } from "./alertReducer";
import { profileReducer } from "./profileReduser";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    alert: alertReduser,
  },
});

export default store;
