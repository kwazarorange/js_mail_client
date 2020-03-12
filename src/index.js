import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

// import Email from './features/emails/Email';
// const email = {
//   to: "kwazar.orange@gmail.com",
//   from: "azooazoo@yandex.ru",
//   subject: "Hello world!",
//   date: "Sun, 8 Mar 2020 18:25:36 +0300"
// };
// ReactDOM.render(<Email email={email} />, document.getElementById("root"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
