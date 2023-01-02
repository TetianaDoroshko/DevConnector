import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { alertReduser } from "./alertReducer";
import { profileReducer } from "./profileReduser";
import { postReducer } from "./postReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    alert: alertReduser,
    post: postReducer,
  },
});

export default store;
