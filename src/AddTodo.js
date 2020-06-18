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
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};
