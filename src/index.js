import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { loginUser } from "./redux/userSlice";
//import setAuthToken from "./utils/setAuthToken";

//initial user setup
store.dispatch(loginUser('dkt','234'))
//setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNGVmMjJiNzE2ZWUyOTM1ODhmMDhiIn0sImlhdCI6MTYzMDg1OTA0MiwiZXhwIjoxNjMxMjkxMDQyfQ.F7bMOYvLok6zGfngL8hYHHQqxxput_nM09WgsMIPEnI")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
