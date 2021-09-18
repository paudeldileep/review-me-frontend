import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { fetchUser } from "./redux/userSlice";

//import setAuthToken from "./utils/setAuthToken";

//initial user setup

if(localStorage.user_token){
  setAuthToken(localStorage.user_token);
  store.dispatch(fetchUser())
}
//console.log(localStorage.user_token)

//setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNGVmMjJiNzE2ZWUyOTM1ODhmMDhiIn0sImlhdCI6MTYzMDg1OTA0MiwiZXhwIjoxNjMxMjkxMDQyfQ.F7bMOYvLok6zGfngL8hYHHQqxxput_nM09WgsMIPEnI")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
