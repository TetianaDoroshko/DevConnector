import { setAlert, removeAlert } from "../redux/alertReducer";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import store from "../redux/store";

export const useAlert = () => {
  const dispatch = useDispatch();
  return (message, type) => {
    const id = v4();
    dispatch(setAlert({ id, type, message }));
    setTimeout(() => dispatch(removeAlert({ id })), 2500);
  };
};

export const callAlert = (message, type) => {
  const id = v4();
  store.dispatch(setAlert({ id, type: type, message: message }));
  setTimeout(() => store.dispatch(removeAlert({ id })), 2500);
};
