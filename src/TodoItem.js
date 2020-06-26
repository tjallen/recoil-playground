import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./TodoList";

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const { id, value, isComplete } = item;
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItem = (e) => {
    const updatedValue = e.target.value;
    const updatedList = replaceAtIndex(todoList, index, {
      ...item,
      value: updatedValue,
    });
    setTodoList(updatedList);
  };

  const deleteItem = () => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  const toggleComplete = () => {
    const updatedList = replaceAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(updatedList);
  };

  return (
    <li>
      <span key={id}>{value}</span>
      <input type="text" value={value} onChange={editItem} />
      <input type="checkbox" value={isComplete} onChange={toggleComplete} />
      <button onClick={deleteItem}>X</button>
    </li>
  );
};

const replaceAtIndex = (arr, index, updated) => [
  ...arr.slice(0, index),
  updated,
  ...arr.slice(index + 1),
];
