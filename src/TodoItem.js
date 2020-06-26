import React from "react";

export const TodoItem = ({ id, value }) => {
  return <li key={id}>{value}</li>;
};
