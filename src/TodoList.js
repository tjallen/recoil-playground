import React from "react";
import { atom, selector, useRecoilState } from "recoil";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const TODO_LIST_FILTER_KEYS = {
  ALL: "ALL",
  COMPLETE: "COMPLETE",
  ACTIVE: "ACTIVE",
};

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: TODO_LIST_FILTER_KEYS.ALL,
});

const todoListFilteredState = selector({
  key: "todoListFilteredState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case TODO_LIST_FILTER_KEYS.COMPLETE:
        return list.filter((item) => item.isComplete === true);
      case TODO_LIST_FILTER_KEYS.ACTIVE:
        return list.filter((item) => item.isComplete === false);
      default:
        return list;
    }
  },
});

const TodoList = () => {
  const [list] = useRecoilState(todoListFilteredState);
  const conditionalList = list.length ? (
    <ul>
      {list.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  ) : (
    "No todos!"
  );
  return (
    <div>
      {conditionalList}
      <AddTodo />
      <TodoListFilters />
    </div>
  );
};

export { TodoList, todoListState, todoListFilterState, TODO_LIST_FILTER_KEYS };
