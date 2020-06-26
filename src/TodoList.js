import React from "react";
import { atom, useRecoilState } from "recoil";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const TodoList = () => {
  const [list] = useRecoilState(todoListState);
  const conditionalList = list.length
    ? list.map((item) => <TodoItem id={item.id} value={item.value} key={item.id} />)
    : "No todos!";
  return (
    <div>
      {conditionalList}
      <AddTodo />
    </div>
  );
};

export { TodoList, todoListState };
