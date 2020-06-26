import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoList";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const handleAddTodo = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: Math.random(),
        value,
        isComplete: false,
      },
    ]);
    setValue("");
  };
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  const handleKeyDown = ({ key }) => {
    if (key === "Enter") handleAddTodo();
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};
