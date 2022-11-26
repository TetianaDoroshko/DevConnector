import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { alertReduser } from "./alertReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReduser,
  },
});

export default store;
