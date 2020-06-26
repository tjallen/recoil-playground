import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState, TODO_LIST_FILTER_KEYS } from "./TodoList";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterKeys = Object.keys(TODO_LIST_FILTER_KEYS);

  return (
    <select value={filter} onChange={updateFilter}>
      {filterKeys.map((filterKey) => (
        <option value={filterKey} key={filterKey}>
          {filterKey}
        </option>
      ))}
    </select>
  );
};
