import React from "react";
import { atom, useRecoilState } from "recoil";
import { AddTodo } from "./AddTodo";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const TodoList = () => {
  const [list] = useRecoilState(todoListState);
  const conditionalList = list.length ? list.map((item) => <li>{item.value}</li>) : "No todos!";
  return (
    <div>
      {conditionalList}
      <AddTodo />
    </div>
  );
};

export { TodoList, todoListState };
