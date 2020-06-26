import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { TodoList } from "./TodoList";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
