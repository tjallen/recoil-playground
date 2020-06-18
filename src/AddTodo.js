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
        complete: false,
      },
    ]);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };
  return (
    <div>
      <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};
